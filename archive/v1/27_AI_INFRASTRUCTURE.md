# Dream Coherence. AI Infrastructure.

**Version 1.2. May 2026. Working Voice register. The operational AI layer that runs the field.**

This file defines the AI infrastructure that operationalizes Dream Coherence. It names the agents, the workflows, the connectors and MCPs to enable, and the weekly operating rhythm. The infrastructure exists so the founder generates seed material and makes strategic calls, while the work of producing and distributing content, managing offerings, and running the field is largely handled by automated pipelines reviewed at appropriate moments.

The infrastructure is not a replacement for the founder. It is a force multiplier. The founder is still in the work daily. The infrastructure compresses what would be 40 hours of operational work into 5 to 10 hours of strategic and creative work, sustained across years.

---

## The Three Operating Modes

The infrastructure runs in three modes, each appropriate to different work.

### Mode One. Interactive (this Claude project).

The collaborative working sessions where the founder and Claude build together. The book is built here. Strategic decisions are made here. New offerings are scoped here. The Coherence Log is maintained here. The deepest creative work happens here.

This is the mode this Claude project itself is in.

### Mode Two. Pipeline (recurring automated work).

Workflows that run on a schedule or trigger, drafting content, scheduling posts, drafting customer communications, monitoring metrics, surfacing patterns. The founder reviews outputs, approves or revises, releases.

### Mode Three. Agentic (autonomous within boundaries).

Specific tasks the infrastructure handles without per-output review once the patterns are validated. Social post scheduling. Newsletter formatting. Standard customer service responses. Routine operational tasks.

Movement from interactive → pipeline → agentic happens as patterns prove reliable. Nothing moves to agentic mode without sustained validation in pipeline mode.

---

## The Agent Layer (Refactored from `09_CLAUDE_AGENT_SYSTEM.md`)

The agent layer remains as defined in `09_CLAUDE_AGENT_SYSTEM.md`, refactored here into the Brand Voice register and aligned with the current architecture.

The agents are not separate systems. They are working modes Claude shifts into during sessions, invoked by name when the work requires that mode.

### Core Agents

**The Field Keeper.** Maintains alignment with the recognition, the position, and the locked work. Asks: is this aligned with the view? Is this coherent with the locked files? Is this the work or is this performance of the work? Use when defining doctrine, refining worldview, evaluating new offerings, before any major decision.

**The Voice Guardian.** Holds the brand voice and the sovereign voice. Tests every piece of public-facing prose against the relevant register. Asks: is this in register? Does this pass the brand truth test? Is the language precise? Use on every public output before release.

**The Book Architect.** Holds the book's architecture, the experiential arc, the chapter spines, the voice axioms. Active during all Stream A work.

**The Field Architect.** Holds the field architecture, the offerings ladder, the strategic architecture. Active during Stream B structural work.

**The Content Engineer.** Operates the content pipeline. Synthesizes founder seed material into pieces across surfaces. Active in weekly content sessions.

**The Protocol Architect.** Turns insight into repeatable practice. Active when building practice work, course modules, audio practices.

**The Research Synthesist.** Reads source material and extracts useful principles. Active during Resource Protocol intake.

**The Red Team.** Stress-tests claims, offerings, decisions. Asks: where is this false? Where is this unsafe? Where is this commercially weak? Where is this spiritually inflated? Use before finalizing anything important.

**The Operator.** Turns insight into next actions. Active at the close of every session.

Agents are invoked by name (*activate Field Keeper*, *run Voice Guardian on this*, *have Red Team attack this*) or sequentially through standard session patterns.

### Daily Session Pattern (Founder's Working Sessions)

1. The Operator opens with status of both streams
2. The relevant Architect (Book or Field) takes the lead
3. The Voice Guardian holds the register
4. The Red Team surfaces if a major decision is being made
5. The Operator closes with next actions and Coherence Log capture

### Content Session Pattern

1. The Content Engineer takes founder seed material
2. The Field Keeper checks alignment
3. The Voice Guardian holds the register
4. The Operator schedules and queues

---

## Connectors and MCPs to Enable

Specific MCPs to enable on the Claude account, in the order they become useful. Each is named, what it does, when to enable, and what risk to hold.

### Tier One. Enable in Month 1.

**Notion MCP.** A Notion workspace becomes the project's working database. The Coherence Log, the editorial calendar, the offerings database, the practitioner database (later), the content queue, all live in Notion. Claude can read, write, and update Notion through the MCP, which means the infrastructure can maintain working state across sessions.

- Action: Set up Notion workspace dedicated to Dream Coherence. Connect Notion MCP.
- Structure: Databases for Editorial Calendar, Coherence Log, Resource Catalog, Aphorism Library, Offerings Pipeline, Audio Production, Founder Seed Material.

**Google Drive MCP** (already connected). The project's archive. Voice note transcripts land here. Draft documents live here. The book manuscript versions live here. Already in place.

**Google Calendar MCP** (already connected). The founder's working time gets blocked here. Cohort schedules eventually live here. Already in place.

**Gmail MCP** (already connected). Customer communications, founder correspondence, subscriber replies. Used carefully (privacy is respected); useful for templated responses to known patterns.

### Tier Two. Enable in Months 2-3.

**Beehiiv API or MailerLite MCP.** The newsletter. Beehiiv is the recommended platform (better aesthetic, better deliverability, native publication features). If Beehiiv MCP is not yet available, integrate via Zapier from Notion to Beehiiv. If MailerLite is preferred, the MailerLite MCP is available now.

- Action: Choose newsletter platform. Connect via MCP or Zapier.
- Use: Drafts ship from Claude infrastructure to platform; founder reviews in platform; founder publishes.

**Buffer or Hypefury or native scheduling.** For X and Instagram post scheduling. Buffer is reliable; Hypefury is built for X specifically and offers thread tools. Either via Zapier integration from Notion queue, or directly through their APIs (no direct MCP currently).

- Action: Choose scheduling tool. Integrate from Notion to scheduler.

### Tier Three. Enable in Months 6-12.

**Stripe MCP.** When the first paid offering launches. Stripe handles all payment processing. The MCP lets Claude infrastructure read transaction data, generate revenue reports, and manage subscriptions for the membership layer when it launches.

- Action: Enable when first offering is ready to release.

**WordPress.com MCP** (only if WordPress becomes the publishing platform). The current website is on Netlify and built statically. If WordPress is ever chosen for the publishing layer (unlikely given the technical direction), this MCP enables it.

### Tier Four. Enable as needed.

**Attio MCP.** For the high-end container CRM when it launches in Phase Three.

**Customer.io.** For sophisticated email automation if MailerLite/Beehiiv proves insufficient.

**ActiveCampaign.** Alternative to MailerLite for marketing automation if needed.

**Spotify MCP** (already connected). For monitoring audio engagement once the audio catalog grows.

**LunarCrush MCP** (already connected). For monitoring social signal around the work and adjacent conversations.

### Connectors Not Pursued

- TikTok-related connectors (the brand does not use TikTok)
- Sales-engagement platforms (not aligned with the work)
- LinkedIn automation (not aligned)
- General CRMs beyond Attio (overkill for the architecture)

---

## The Workflows

The operational workflows that run weekly, monthly, and on-trigger.

### Workflow One. Weekly Content Pipeline.

**Trigger.** Monday morning, after founder's weekend seed material has been uploaded to the working folder.

**Steps.**

1. Founder uploads voice note transcripts to designated folder in Google Drive (or pastes into Notion seed entry).
2. Claude session pulls the seeds via the MCP. Synthesizes into proposed pieces using the Content Engineer agent.
3. Output: Notion editorial calendar populated for the week ahead. Each entry has:
   - Surface (newsletter, X, Instagram, audio, website)
   - Format
   - Draft (in brand voice)
   - Status: draft / approved / scheduled / published
4. Founder reviews entries in Notion, edits or approves.
5. Approved entries flow to scheduling tools. Newsletter draft to Beehiiv. X posts to Buffer/Hypefury queue. Instagram posts to scheduler. Audio scripts to the audio production queue.
6. Published outputs are tagged with publication timestamp in Notion for historical reference.

**Founder time.** 90 to 120 minutes per week for the review step. Seed material capture is separate (~30-60 min per week).

**Output volume per week.** 1 newsletter issue, 5-10 X posts, 3-5 Instagram pieces, 0-1 audio pieces, 0-1 long-form essays.

### Workflow Two. Weekly Strategic Review.

**Trigger.** End of week (Friday or Sunday).

**Steps.**

1. Claude session pulls week's metrics: newsletter subscribers, engagement, social growth, audio plays, website visits.
2. The Field Architect agent reviews against expected trajectory.
3. Output: a brief weekly status note (5-10 min read). What is on track. What is slipping. What needs adjustment next week.
4. Founder reads, decides on adjustments.
5. Coherence Log captures any insights surfacing from the review.

**Founder time.** 20 to 30 minutes per week.

### Workflow Three. Monthly Field Review.

**Trigger.** Last week of each month.

**Steps.**

1. Claude session pulls the month's content output, metrics, founder seed material themes, and lived practice notes.
2. The Field Keeper, Field Architect, and Red Team review the month together.
3. Output: monthly review document covering:
   - What was transmitted (themes, pieces, audience response)
   - Where the work is moving (themes consolidating, themes fading)
   - What the next month's editorial direction should be
   - What in the strategic architecture needs adjustment
   - What is asking to be built or released
4. Founder reviews, decides, updates relevant files.

**Founder time.** 90 to 120 minutes per month.

### Workflow Four. Quarterly Phase Review.

**Trigger.** End of each quarter.

**Steps.**

1. Full review against the phase the project is in (per `25_STRATEGIC_ARCHITECTURE.md`).
2. Output: quarterly review with deeper analysis. Adjustments to the strategic architecture if needed.
3. Possible recalibration of the build plan.

**Founder time.** Half-day quarterly.

### Workflow Five. Book Drafting (Stream A).

Separate from the content pipeline. Runs as defined in `22_MASTER_BUILD_PLAN.md`. The Book Architect agent is the lead. The content pipeline never pulls from the unfinished book; the book and the field have separate working files until each chapter is locked.

### Workflow Six. Coherence Log Integration.

**Trigger.** When the Coherence Log accumulates ~20 entries, or when the founder calls for an integration pass.

**Steps.**

1. Claude session opens the log
2. Each entry is evaluated, dispositioned, integrated into the relevant file or held
3. Locked files are updated where the entries genuinely improve the work
4. Log entries are marked as integrated or dispositioned

**Founder time.** Half-day per integration pass.

### Workflow Seven. Resource Intake.

**Trigger.** When the founder adds a new resource to `RESOURCE_CATALOG.md`.

**Steps.**

1. The Research Synthesist agent processes the new resource
2. Output: source-field synthesis (insight, mechanism, practice, risk, translation, possible book section, possible product, possible content piece, what to avoid copying, open questions)
3. Disposition: catalog only, Coherence Log entry, Rigor Map entry, or discarded with reason
4. Updates flow to the relevant files

**Founder time.** 30 minutes per resource for review.

### Workflow Eight. Customer Communication.

**Trigger.** Newsletter subscriber replies. Customer inquiries about offerings (when offerings exist). Inbound from social.

**Steps.**

1. Inbound is triaged automatically (Gmail filters or platform-specific routing)
2. Standard inquiries (How do I subscribe? Where do I start? What is Dream Coherence?) are handled with templated responses in brand voice
3. Substantive inquiries are surfaced to founder review
4. Founder responds personally where the response matters

The brand maintains warm correspondence. The founder is present in correspondence at depth, not in volume.

---

## The Notion Workspace Structure

Notion holds the project's operational state. The recommended structure:

```
Dream Coherence Workspace
├── 🌀 Dashboard
│   ├── This week
│   ├── Phase status
│   ├── Key metrics
│
├── 📓 Editorial Calendar (Database)
│   ├── Properties: Surface, Format, Status, Date, Theme, Word count
│   ├── Views: This week, Drafts, Approved, Scheduled, Published
│
├── 🌱 Founder Seed (Database)
│   ├── Properties: Date, Format (voice/written), Themes, Status (raw/synthesized)
│   ├── Links to derived pieces
│
├── 📚 Coherence Log (Database)
│   ├── Properties: Date, Entry, Applies to file, Status (active/integrated/dispositioned)
│
├── 📖 Resource Catalog (Database)
│   ├── Properties: Type, Title, Author, Status, Synthesis link, Disposition
│
├── ✦ Aphorism Library (Database)
│   ├── Properties: Aphorism, First used, Times used per surface, Tag
│
├── 🎁 Offerings Pipeline (Database)
│   ├── Properties: Offering, Layer, Status (concept/scoping/building/beta/live), Launch date
│
├── 🎧 Audio Production (Database)
│   ├── Properties: Title, Type, Status (script/recording/edit/published), Surface
│
├── 👥 Practitioners (Database, Phase 2+)
│   ├── Properties: Name, Email, First touch, Offerings purchased, Notes
│
├── 📅 Calendar
│   ├── Phase milestones
│   ├── Launch dates
│   ├── Founder presence events
│
└── 🗂 Working Files
    ├── Book draft folder
    ├── Brand assets folder
    ├── Strategic documents folder
```

---

## The First 30 Days of Infrastructure Build

Specific actions to make the infrastructure operational.

### Days 1-7. Setup.

- Create Notion workspace using the structure above
- Connect Notion MCP to Claude
- Verify Google Drive, Google Calendar, Gmail MCPs are working
- Set up founder seed material capture process (voice note app + transcript automation)
- Create the editorial calendar database
- Load the starting aphorism library (12-20 aphorisms)

### Days 8-14. Pipeline Test.

- Founder records first week of seed material (~45 min)
- Claude session runs the synthesis workflow
- Founder reviews the output
- Refine the synthesis prompt based on what worked and what did not
- Schedule first batch of content to platforms (manually if scheduling tools not yet connected)

### Days 15-21. Newsletter Launch.

- Beehiiv account created and branded
- First newsletter issue drafted by infrastructure
- Founder reviews, edits, approves
- Newsletter ships to founding subscribers (founder's direct network, ~50-200 people)

### Days 22-30. Cadence Begins.

- Full pipeline runs for two consecutive weeks
- Adjustments made based on what is working
- Scheduling tools connected (Buffer or Hypefury)
- First audio piece in production
- Day 30 review: infrastructure operational, cadence holds

---

## Quality Discipline

The infrastructure produces output. The output is held to the brand voice or sovereign voice depending on the surface. Quality controls:

**The Voice Guardian runs on every output.** Before any piece reaches founder review, it passes through the Voice Guardian agent. Output that fails is rebuilt before founder time is spent on it.

**The brand truth test.** Every social post, every newsletter line, every audio script passes the brand truth test before publication.

**The founder veto is absolute.** Any output the founder declines is killed. No automated overrides. No "publish anyway" defaults.

**Periodic recalibration.** Every monthly review includes a sample audit of recent output. If quality has drifted, the prompts and workflows are tightened.

---

## Failure Modes and Discipline

**The infrastructure starts producing average prose.** Discipline: tighten the Voice Guardian's calibration. Reread the voice axioms and the brand guidelines into the synthesis prompts.

**The founder stops generating seed material.** Discipline: the infrastructure can run from the accumulated body of work for ~4 weeks; beyond that, the field starves. The seed material is the engine.

**Cadence breaks for more than two weeks.** Discipline: investigate what broke. Adjust the pipeline. The cadence is the audience's relationship with the work.

**Operational complexity exceeds the founder's capacity to maintain.** Discipline: simplify. The infrastructure exists to serve the founder, not the reverse. If it requires more than 8 hours per week from the founder to operate, simplify until it does not.

---

## The Standard

The infrastructure is invisible when it is working. The audience experiences a single, coherent body of work appearing in disciplined cadence across the brand's surfaces. The founder experiences a small set of clear weekly inputs and outputs that compress what would be unsustainable solo work into something rhythmic and real.

The infrastructure is the field's circulatory system. The work is the body.

◯
