# BEEHIIV_SETUP.md

**Architecture ruling this file implements (Option A, recommended): the owned Resend drip remains the Seven Nights engine. Beehiiv is list of record, Sunday broadcast channel, and essay archive. Total cost: $0. Option B (Beehiiv Scale, ~$49/mo) is documented at the end with its trigger conditions.**

The constraint that forces the choice: Beehiiv's free Launch plan does not include automations. It supports exactly one welcome email on signup. Multi-email sequences require Scale. The zero-cost stack was built for this reason and it works; nothing about launch requires abandoning it.

---

## The flow, end to end

1. Visitor submits email on dreamcoherence.com (site form → Netlify function).
2. Netlify function writes the subscriber to Netlify Blobs (drip state) **and** adds them to Beehiiv via API (list of record).
3. Resend sends Seven Nights, one letter per night, driven by the scheduled Netlify function.
4. Beehiiv's single welcome email confirms the subscription and names what is coming.
5. After Night Seven, the subscriber simply remains on the Beehiiv list and receives the Sunday broadcast thereafter.

One subscriber, two systems, no double-sending: Resend owns days 1–7, Beehiiv owns Sunday-forever.

## Configuration steps, in order

### 1. Publication settings
- Settings → Publication: name "Dream Coherence"; sender name "Dream Coherence".
- Custom domain: mail from a subdomain, e.g. letters@mail.dreamcoherence.com or the beehiiv-provided sending domain if subdomain DNS is not yet set. A custom sending domain requires the DNS records beehiiv provides (SPF, DKIM, CNAME). Add them at the DNS provider and verify. Do not disturb existing Resend DNS records; Resend and Beehiiv send from different subdomains and coexist cleanly (e.g. Resend on send.dreamcoherence.com, Beehiiv on mail.dreamcoherence.com).
- Web: dreamcoherence.beehiiv.com is already live with Foundation; confirm the publication URL, dark theme if available, and the mark as publication logo (use DC_avatar_instagram_1000.png).

### 2. The single welcome email (the handshake)
- Settings → Emails → Welcome Email: ON.
- Subject: `The first night`
- Body (draft, subject to founder flags; lint-clean):

  > You are on the list. Seven letters will arrive, one each night, beginning tonight. Each is short. Each carries one practice for the hours you already spend asleep.
  >
  > Nothing is required before the first letter. Sleep as you always have. The letters will meet you there.
  >
  > Dream Coherence

- No CTA, no links except the required footer. The letter's job is to set expectation and register the sender as wanted mail.

### 3. Signup flow hygiene
- Settings → Subscribers → double opt-in: OFF for the site form (the form is already consent; a confirm step costs Seven Nights its first night). If spam signups appear later, revisit.
- Disable beehiiv's default recommendations popup and any monetization prompts (Launch plan shows "powered by beehiiv" in the footer; accepted for now, removed at Max tier someday, not worth $96/mo).

### 4. API wiring (site → Beehiiv)
- Settings → Integrations → API: create key. Store in Netlify environment variables as BEEHIIV_API_KEY plus BEEHIIV_PUB_ID. Never in the repo.
- The signup Netlify function adds each subscriber:

```js
await fetch(`https://api.beehiiv.com/v2/publications/${process.env.BEEHIIV_PUB_ID}/subscriptions`, {
  method: "POST",
  headers: {
    "Authorization": `Bearer ${process.env.BEEHIIV_API_KEY}`,
    "Content-Type": "application/json"
  },
  body: JSON.stringify({
    email,
    reactivate_existing: true,
    utm_source: "site",
    referring_site: "dreamcoherence.com"
  })
});
```

- Order of operations in the function: write Blobs first (drip must never miss a subscriber), then Beehiiv; log and retry Beehiiv failures rather than failing the signup.

### 5. Drip verification (Resend side, pre-deploy gates)
- Send a test signup; confirm Night One arrives on schedule and the Beehiiv welcome arrives near-instantly. Two emails on day one is correct and reads as confirmation + first letter.
- Confirm DRIP_TEST_FAST is deleted from Netlify env after testing (standing gate).
- Confirm unsubscribe works in both systems: Resend letters carry an unsubscribe link that flips the Blobs record; Beehiiv handles its own. A person who unsubscribes mid-drip must stop receiving both. If the Blobs unsubscribe doesn't yet call the Beehiiv API to remove the subscriber, add that call; one unsubscribe action must silence everything.

### 6. Sunday broadcast cadence
- Weekly, Sundays, from Beehiiv. First broadcast: the week of account launch, and it can simply be the Foundation essay's opening movement with a link to the whole.
- Broadcasts follow WRITING_OS letter register: one motif, one pith line, compression doubled. Every broadcast passes dc_lint.py before scheduling.

### 7. Archive
- Foundation remains the pinned/featured post on the Beehiiv site. As Sunday letters accumulate, the archive becomes the proof-of-depth surface that social links point to.

## Option B: Beehiiv Scale (documented, not recommended now)

What it buys: Seven Nights rebuilt as a native Automation (signup trigger → 7 emails with day delays), retiring the Resend drip; plus referral program, Boosts, paid subscriptions at 0% platform fee, A/B testing. Cost ~$43/mo annual, ~$49 monthly, rising with list size.

**Upgrade triggers, any one sufficient:**
1. List crosses ~2,000 (approaching the 2,500 free cap; migration is forced at 2,501 anyway).
2. Paid subscriptions or the referral program become active growth levers (post-launch, revenue flowing).
3. The Resend/Blobs stack produces a real deliverability or maintenance incident.

Migration when triggered: build the automation in Beehiiv from the locked Seven Nights v4 canon, run both systems on a test cohort for one week, switch the site function to Beehiiv-only, archive the Resend function in the repo (git mv, never delete).

◯
