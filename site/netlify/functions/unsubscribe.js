// netlify/functions/unsubscribe.js
// GET or POST /.netlify/functions/unsubscribe?e=EMAIL&t=TOKEN
// One action silences everything: drip (Blobs) + Beehiiv (list of record).

const { getStore } = require("@netlify/blobs");
const crypto = require("crypto");

const expected = (email) =>
  crypto.createHmac("sha256", process.env.UNSUB_SECRET).update(email).digest("hex").slice(0, 32);

const PAGE = `<!doctype html><html><body style="margin:0;background:#0A0E1A;">
<div style="max-width:560px;margin:0 auto;padding:96px 24px;text-align:center;
     font-family:'EB Garamond',Georgia,serif;color:#F0EFE8;font-size:19px;line-height:1.7;">
  <p>You are unsubscribed. Nothing further will arrive.</p>
  <p style="font-family:Inter,Arial,sans-serif;font-size:11px;letter-spacing:0.08em;color:#8a8f9c;margin-top:48px;">DREAM COHERENCE</p>
</div></body></html>`;

async function removeFromBeehiiv(rec) {
  if (!rec.beehiivId) return;
  await fetch(
    `https://api.beehiiv.com/v2/publications/${process.env.BEEHIIV_PUB_ID}/subscriptions/${rec.beehiivId}`,
    {
      method: "DELETE",
      headers: { Authorization: `Bearer ${process.env.BEEHIIV_API_KEY}` },
    }
  ).catch((e) => console.error("beehiiv remove failed", rec.email, e.message));
}

exports.handler = async (event) => {
  const email = (event.queryStringParameters?.e || "").trim().toLowerCase();
  const t = event.queryStringParameters?.t || "";

  if (!email || t !== expected(email))
    return { statusCode: 400, body: "Invalid link" };

  const store = getStore("subscribers");
  const rec = await store.get(email, { type: "json" });

  if (rec && !rec.unsubscribed) {
    rec.unsubscribed = true;
    rec.unsubscribedAt = new Date().toISOString();
    await store.setJSON(email, rec);
    await removeFromBeehiiv(rec);
  }

  return {
    statusCode: 200,
    headers: { "Content-Type": "text/html" },
    body: PAGE,
  };
};
