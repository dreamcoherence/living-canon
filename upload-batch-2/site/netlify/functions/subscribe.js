// netlify/functions/subscribe.js
// POST { email } → Blobs record → Beehiiv add → Night One via Resend.
// Env required: RESEND_API_KEY, BEEHIIV_API_KEY, BEEHIIV_PUB_ID,
//               UNSUB_SECRET, SEND_FROM (e.g. "Dream Coherence <letters@send.dreamcoherence.com>"),
//               SITE_URL (https://dreamcoherence.com)

const { getStore } = require("@netlify/blobs");
const crypto = require("crypto");
const { renderNight } = require("./lib/emails");

const token = (email) =>
  crypto.createHmac("sha256", process.env.UNSUB_SECRET).update(email).digest("hex").slice(0, 32);

const unsubUrl = (email) =>
  `${process.env.SITE_URL}/.netlify/functions/unsubscribe?e=${encodeURIComponent(email)}&t=${token(email)}`;

async function sendNight(email, n) {
  const msg = renderNight(n, unsubUrl(email));
  const res = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${process.env.RESEND_API_KEY}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      from: process.env.SEND_FROM,
      to: [email],
      subject: msg.subject,
      html: msg.html,
      headers: {
        "List-Unsubscribe": `<${unsubUrl(email)}>`,
        "List-Unsubscribe-Post": "List-Unsubscribe=One-Click",
      },
    }),
  });
  if (!res.ok) throw new Error(`Resend ${res.status}: ${await res.text()}`);
}

async function addToBeehiiv(email) {
  const res = await fetch(
    `https://api.beehiiv.com/v2/publications/${process.env.BEEHIIV_PUB_ID}/subscriptions`,
    {
      method: "POST",
      headers: {
        Authorization: `Bearer ${process.env.BEEHIIV_API_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email,
        reactivate_existing: true,
        utm_source: "site",
        referring_site: "dreamcoherence.com",
      }),
    }
  );
  if (!res.ok) return null; // never fail signup on Beehiiv error; log and continue
  const data = await res.json();
  return data?.data?.id || null;
}

exports.handler = async (event) => {
  if (event.httpMethod !== "POST")
    return { statusCode: 405, body: "Method not allowed" };

  let email;
  try {
    ({ email } = JSON.parse(event.body || "{}"));
  } catch {
    return { statusCode: 400, body: "Bad request" };
  }
  email = (email || "").trim().toLowerCase();
  if (!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(email))
    return { statusCode: 400, body: "Invalid email" };

  const store = getStore("subscribers");
  const key = email;
  const existing = await store.get(key, { type: "json" });

  if (existing && !existing.unsubscribed) {
    return { statusCode: 200, body: JSON.stringify({ ok: true, already: true }) };
  }

  // 1. Blobs first: the drip must never miss a subscriber.
  const record = {
    email,
    subscribedAt: new Date().toISOString(),
    lastNightSent: 0,
    unsubscribed: false,
    beehiivId: existing?.beehiivId || null,
  };
  await store.setJSON(key, record);

  // 2. Beehiiv (list of record). Failure logged, signup proceeds.
  try {
    const id = await addToBeehiiv(email);
    if (id) {
      record.beehiivId = id;
      await store.setJSON(key, record);
    }
  } catch (e) {
    console.error("beehiiv add failed", email, e.message);
  }

  // 3. Night One, immediately.
  try {
    await sendNight(email, 1);
    record.lastNightSent = 1;
    await store.setJSON(key, record);
  } catch (e) {
    console.error("night one send failed", email, e.message);
    // lastNightSent stays 0; hourly drip will retry Night One.
  }

  return { statusCode: 200, body: JSON.stringify({ ok: true }) };
};
