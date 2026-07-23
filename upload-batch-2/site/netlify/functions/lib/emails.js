// netlify/functions/lib/emails.js
// Seven Nights v4 — content module.
// PASTE THE LOCKED CANON TEXT from SEVEN_NIGHTS canon file into the html fields.
// Do not edit letter text here; this file carries it, the canon governs it.

const FOOTER = (unsubUrl) => `
  <p style="margin-top:48px;font-family:Inter,Arial,sans-serif;font-size:11px;
     letter-spacing:0.08em;color:#8a8f9c;">
    DREAM COHERENCE<br>
    <a href="${unsubUrl}" style="color:#8a8f9c;">Unsubscribe</a>
  </p>`;

const WRAP = (body, unsubUrl) => `<!doctype html>
<html><body style="margin:0;padding:0;background:#0A0E1A;">
  <div style="max-width:560px;margin:0 auto;padding:48px 24px;
       font-family:'EB Garamond',Georgia,serif;font-size:18px;line-height:1.7;
       color:#F0EFE8;background:#0A0E1A;">
    ${body}
    ${FOOTER(unsubUrl)}
  </div>
</body></html>`;

// Subjects per locked canon; bodies pasted from SEVEN_NIGHTS locked file.
const NIGHTS = [
  { n: 1, subject: "Night One",   body: `<!-- PASTE NIGHT 1 LOCKED HTML/TEXT -->` },
  { n: 2, subject: "Night Two",   body: `<!-- PASTE NIGHT 2 -->` },
  { n: 3, subject: "Night Three", body: `<!-- PASTE NIGHT 3 -->` },
  { n: 4, subject: "Night Four",  body: `<!-- PASTE NIGHT 4 -->` },
  { n: 5, subject: "Night Five",  body: `<!-- PASTE NIGHT 5 -->` },
  { n: 6, subject: "Night Six",   body: `<!-- PASTE NIGHT 6 -->` },
  { n: 7, subject: "Night Seven", body: `<!-- PASTE NIGHT 7 -->` },
];

function renderNight(n, unsubUrl) {
  const night = NIGHTS.find((x) => x.n === n);
  if (!night) return null;
  return { subject: night.subject, html: WRAP(night.body, unsubUrl) };
}

module.exports = { renderNight };
