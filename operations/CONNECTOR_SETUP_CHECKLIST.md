# Dream Coherence. Connector and MCP Setup Checklist.

**Version 1.2. May 2026. The operational steps to connect the infrastructure.**

This file is the executable checklist for setting up the AI infrastructure connectors. Each item names what to do, why, and what to verify. Run through this in order during the first 30-day infrastructure build.

---

## Already Connected (verify)

Based on the current state of the Claude account, these should be live. Verify and adjust if needed:

- [ ] **Google Drive MCP.** Verify you can list and read files in the Dream Coherence working folder.
- [ ] **Google Calendar MCP.** Verify you can read and create events.
- [ ] **Gmail MCP.** Verify you can search and read mail.
- [ ] **Canva MCP.** Verify access. Will be used for select marketing collateral (with the discipline that the brand guidelines override any Canva templates).
- [ ] **Spotify MCP.** Verify access. Useful for monitoring audio surface engagement once audio is published.
- [ ] **LunarCrush MCP.** Verify access. Useful for monitoring conversation patterns adjacent to the work.

---

## Tier 1. Connect Within First 7 Days

### Notion MCP

**Why.** Notion becomes the project's working database. Editorial calendar, Coherence Log, Resource Catalog, Aphorism Library, Offerings Pipeline, Audio Production, Founder Seed Material — all live here. The MCP lets Claude read and update Notion across sessions, which means the infrastructure can maintain operational state.

**Steps.**

1. Create a Notion account if not already (free tier sufficient initially; upgrade to paid when team forms).
2. Create a workspace dedicated to Dream Coherence.
3. Build the workspace structure per `27_AI_INFRASTRUCTURE.md` (the Notion Workspace Structure section).
4. In Claude (this project or any chat), enable the Notion MCP via the Connectors directory.
5. Authenticate Notion to grant Claude access to the Dream Coherence workspace.
6. **Verify.** Test by asking Claude in this project to read the Editorial Calendar database. If successful, the connection is live.

### Founder Seed Capture Setup

**Why.** The pipeline requires consistent seed material from the founder. The capture process must be friction-free or it will fail.

**Steps.**

1. Choose a voice recording tool. Recommendations: Otter.ai (transcription built in, exports easily), Voice Memos + Whisper (Apple ecosystem), Just Press Record + Whisper.
2. Set up an automated transcription workflow. Otter handles this natively. For Voice Memos, use a Shortcut or Make.com flow to run Whisper on new recordings and save the transcript.
3. Set the transcript destination as a designated folder in Google Drive (or paste into Notion seed entry).
4. **Verify.** Record a 5-minute test note. Verify the transcript lands in the right destination within an hour.

---

## Tier 2. Connect Within First 14 Days

### Newsletter Platform: Beehiiv (recommended)

**Why.** Beehiiv is the strongest current platform for serious newsletters. Better aesthetic than Substack, better deliverability than MailerLite, native publication features that support the brand discipline. Decision held; alternative is MailerLite which has a native MCP.

**Steps.**

1. Create a Beehiiv account.
2. Set up the newsletter with the brand identity: name, logo (horizontal lockup), colors (Night background or Moon background; both work), typography (Beehiiv supports custom fonts; load EB Garamond and Inter).
3. Configure the welcome email using the template from Prompt 8.
4. Configure the subscription form for embedding on dreamcoherence.com.
5. **MCP situation.** Beehiiv does not currently have a native Claude MCP. Integration path: use Zapier to push approved newsletter drafts from Notion to Beehiiv as drafts. Founder reviews in Beehiiv and clicks send.
6. **Verify.** Push a test draft from Notion to Beehiiv via Zapier. Verify the draft appears correctly formatted.

**Alternative path if MailerLite preferred.**

1. Create MailerLite account, configure brand identity.
2. Enable MailerLite MCP from the Claude connectors directory.
3. Authenticate. Verify Claude can create draft campaigns directly in MailerLite.

---

### Social Scheduling: Hypefury (X) + Later (Instagram)

**Why.** Direct scheduling is more reliable than auto-posting from a content hub. Hypefury is built specifically for X and offers thread tools. Later is reliable for Instagram and supports the brand's image-first aesthetic.

**Steps.**

1. Create Hypefury account. Connect the X account. Configure brand voice settings (no auto-replies, no auto-likes, no auto-DMs — all of these violate brand discipline).
2. Create Later account. Connect the Instagram account.
3. Build automation: when a post is approved in Notion (status = "approved"), Zapier flows it to the relevant scheduler.
4. **Verify.** Approve a test post in Notion. Verify it appears in the scheduler queue.

**Alternative:** Buffer handles both X and Instagram in one tool. Slightly less powerful for threads but simpler.

---

## Tier 3. Connect Within First 60 Days (As Needed)

### Image Generation Pipeline

**Why.** Atmospheric Instagram images need to be generated consistently in the brand visual register.

**Steps.**

1. Choose image generation tool. Recommendations: Midjourney (best aesthetic results, requires Discord), Ideogram (good for text-in-image), or Adobe Firefly (commercial license clear).
2. Document the brand's image generation prompt template (already in `23_BRAND_SYSTEM.md`).
3. Build a workflow: image concept generated by Prompt 4 → founder approves concept → image generation triggered → result reviewed → approved image enters scheduler.
4. **Verify.** Generate 10 test images. Confirm they all match the brand visual discipline. Adjust the prompt template until consistency is reliable.

---

### Audio Production Pipeline

**Why.** Audio is a core surface. Production needs to be efficient enough to support monthly cadence in Phase 1, weekly by Phase 3.

**Steps.**

1. Audio recording setup: a serious USB or XLR microphone (Shure MV7, Shure SM7B, or Rode NT1), an audio interface if XLR, and a quiet space. The brand's audio is calm and clean; production quality must support the register.
2. Audio editing: Descript (transcription-based editing, fast for spoken pieces) or Logic Pro / Pro Tools for higher-end editing.
3. Hosting and distribution: Spotify for Podcasters (free, distributes to most platforms) for the audio essays and atmospheric pieces.
4. Workflow: Script generated by Prompt 5 → founder reviews → founder records → audio is edited → uploaded to host → metadata configured → published.
5. **Verify.** Produce a single test audio piece end-to-end. Refine the workflow before scaling.

---

### Analytics Aggregation

**Why.** The weekly and monthly reviews depend on accurate metrics from across surfaces. Manual collection is friction; automation collects it cleanly.

**Steps.**

1. Set up Plausible or Fathom (privacy-respecting analytics, aligns with brand discipline) on dreamcoherence.com.
2. Beehiiv has native newsletter analytics.
3. X analytics via the native dashboard or Hypefury's enhanced view.
4. Instagram analytics via the native dashboard.
5. Spotify analytics via the native dashboard.
6. Build a weekly automated report that pulls key metrics into Notion. Tool: Make.com or Zapier flows that read from each source and write to a Weekly Metrics database in Notion.
7. **Verify.** Run one week of automated reporting. Confirm the metrics appear correctly in Notion.

---

## Tier 4. Connect When the Phase Requires

### Stripe MCP (Phase 1 month 11 or Phase 2)

**Why.** Required when the first paid offering launches. Handles payments, subscriptions, and revenue reporting.

**Steps (when needed).**

1. Create or verify Stripe account.
2. Configure brand identity (logo, branding on payment pages).
3. Set up products for each offering as they launch.
4. Configure subscription handling for the eventual membership.
5. Enable Stripe MCP from the Claude connectors directory.
6. Authenticate. Verify Claude can read transaction data and generate revenue reports.

---

### Attio MCP (Phase 3, when high-end container launches)

**Why.** The deep container requires CRM for practitioner management. Attio is the right scale for the small high-end work.

**Steps (when needed).**

1. Create Attio workspace.
2. Configure for practitioner management with appropriate properties.
3. Enable Attio MCP. Authenticate.
4. Verify Claude can read and update practitioner records.

---

### Optional Tier 4

These are added if and when the work demonstrates need:

- **Customer.io** if MailerLite/Beehiiv automation becomes insufficient
- **ActiveCampaign** as alternative to above
- **Calendly** for the founder's scheduling (interviews, deep container sessions)
- **Loom** for video communications if video enters the work
- **Slack MCP** if a team forms and Slack becomes the team's communication tool

Each is added only when its absence is clearly limiting the work.

---

## Connectors Explicitly Not Used

For clarity:

- **TikTok-related connectors.** The brand does not use TikTok.
- **Twitter/X auto-engagement tools.** The brand does not auto-like, auto-reply, or auto-DM.
- **Sales-engagement platforms (Outreach, Salesloft, etc.).** Not aligned with the work.
- **LinkedIn automation.** Not aligned. The brand has minimal LinkedIn presence.
- **General-purpose CRMs at scale (Salesforce, HubSpot at full marketing automation).** Overkill for the architecture.
- **AI image generation that produces faces of real people.** Brand discipline is faceless.

---

## Setup Verification Checklist

When all Tier 1 and Tier 2 connections are live, verify the full pipeline by running one complete cycle:

- [ ] Founder records 30 minutes of seed material (Sunday)
- [ ] Transcript appears in designated folder within 1 hour
- [ ] Claude in this project runs Prompt 1 on the seed material (Monday morning)
- [ ] Editorial calendar populates in Notion with drafts for the week
- [ ] Founder reviews and approves at least: 1 newsletter draft, 5 X posts, 3 Instagram pieces
- [ ] Approved newsletter draft pushes to Beehiiv
- [ ] Approved X posts push to scheduler
- [ ] Approved Instagram pieces push to scheduler with image generation prompts
- [ ] Newsletter ships at scheduled time (Monday evening or Tuesday morning)
- [ ] X posts publish across the week per cadence
- [ ] Instagram posts publish across the week per cadence

If all of the above runs without manual intervention beyond the founder review steps, the infrastructure is operational.

---

## Cost Estimate (Tier 1 + Tier 2)

Realistic monthly cost for the operational stack in Phase 1:

- Notion: $0 (free tier) or $10/month (Plus tier)
- Beehiiv: $0 free tier (up to 2,500 subscribers) → $39/month at 10K → $99/month at 50K
- Hypefury: $19-49/month
- Later: $25-45/month (or Buffer at $15-100/month for both X and Instagram)
- Zapier: $20-50/month for the automation flows
- Image generation: Midjourney $10-60/month
- Audio hosting: Spotify for Podcasters free
- Plausible: $9/month
- Otter or transcription: $10-30/month
- Domain and hosting (Netlify on current site): $0-25/month

**Phase 1 total: ~$100-300/month.** Scales modestly as the audience grows.

By Phase 2 with Stripe and possibly Attio: add $0 (Stripe takes percentage) plus $25-65/month for Attio. Still well under $500/month.

By Phase 3 with the team forming: tools scale with team but the per-tool costs remain modest.

---

## The Principle

The infrastructure is built to be simple, reliable, and replaceable. No single tool is irreplaceable; each can be swapped if a better option emerges. The discipline is in the prompts, the cadence, and the brand voice, not in the specific software.

What matters is that the work flows from seed material to published output consistently, in the brand voice, at the planned cadence, with founder review at the critical gate.

◯
