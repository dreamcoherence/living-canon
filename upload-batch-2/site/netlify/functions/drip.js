// netlify/functions/drip.js
// Scheduled hourly. Sends the next due night to each active subscriber.
// Due night = min(7, floor(hours since signup / 24) + 1).
// Retries are implicit: a failed send leaves lastNightSent unchanged.

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

exports.handler = async () => {
  const store = getStore("subscribers");
  const { blobs } = await store.list();
  const now = Date.now();
  let sent = 0, failed = 0;

  for (const { key } of blobs) {
    const rec = await store.get(key, { type: "json" });
    if (!rec || rec.unsubscribed || rec.lastNightSent >= 7) continue;

    const hours = (now - new Date(rec.subscribedAt).getTime()) / 36e5;
    const due = Math.min(7, Math.floor(hours / 24) + 1);

    if (due > rec.lastNightSent) {
      const next = rec.lastNightSent + 1; // one night per run; no catch-up flooding
      try {
        await sendNight(rec.email, next);
        rec.lastNightSent = next;
        await store.setJSON(key, rec);
        sent++;
      } catch (e) {
        console.error("drip send failed", rec.email, "night", next, e.message);
        failed++;
      }
    }
  }

  console.log(`drip run: ${sent} sent, ${failed} failed`);
  return { statusCode: 200 };
};

// netlify.toml (add at repo root):
//
// [functions."drip"]
//   schedule = "@hourly"
