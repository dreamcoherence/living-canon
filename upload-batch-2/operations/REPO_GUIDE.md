# REPO_GUIDE.md

**How Dream Coherence files are saved, stored, and governed. Read this once; it answers where everything lives and why.**

---

## 1. The two storage layers, and which one is truth

**Layer one: the GitHub repository (github.com/dreamcoherence/living-canon). This is the single source of truth.** Every file, every version, every decision, forever. Git means each change is a commit: a timestamped, attributed snapshot with a message saying what changed and why. Nothing is ever lost; superseded files are moved to /archive with `git mv`, never deleted, so the whole history of the project remains readable. This is also the open chronicle: the project's story is its commit log.

**Layer two: the Claude Project knowledge files.** These are the documents uploaded into this Claude Project so every session reads current canon before working. They are a *mirror* of the repo's governing layer, not a second home for files. When the repo's canon changes, the mirror is refreshed.

The rule that follows: **create and rule in conversation → commit to GitHub → refresh the Project mirror.** If the mirror and the repo ever disagree, the repo wins, except that the newest founder ruling in conversation wins over both until it is committed (that is the stale-layer trap and its cure: commit rulings promptly).

## 2. The folder map, with what each folder is *for*

```
living-canon/
├── WRITING_OS.md            ← v2. The writing constitution. Governs all copy.
├── CRITICAL_PATH_V2.md      ← The plan to 10/10.
├── LAUNCH_CHECKLIST.md      ← The living ledger. Check, date, commit.
├── COHERENCE_LOG.md         ← Rulings. The newest locked ruling always wins.
├── DECISION_LOG.md          ← Decisions with rationale.
│
├── canon/                   ← Locked transmission text: Foundation essay,
│                              Seven Nights letters, seed-bank. Changes only
│                              via Continuity Protocol (P# proposals).
│
├── content/
│   ├── drafts/              ← Anything written but not yet founder-approved.
│   │                          SOCIAL_CONTENT_PACK_01.md lives here until
│   │                          its re-audit and your flag-round.
│   ├── approved/            ← Passed lint + gates + your flags. Shippable.
│   └── published/           ← What actually shipped, with date and URL.
│                              Immutable record; never edited after the fact.
│
├── seeds/2026/07/           ← Recognition Seed records from your weekly
│                              voice notes. The source layer for all
│                              original social and letter content (A1).
│
├── operations/              ← How-to and configuration docs that get edited
│   ├── BEEHIIV_SETUP.md       as reality changes: Beehiiv, SEO pack,
│   └── SEO_IMPLEMENTATION_PACK.md   this guide.
│
├── tools/
│   └── dc_lint.py           ← Scripts. The lint gate. Run on every draft.
│
├── assets/                  ← Brand files: mark_master.svg (source of truth),
│                              avatar/banner PNGs (exports), OG images.
│
├── site/                    ← The website source (or its own repo if
│                              deployment prefers; either is fine, one truth).
│   └── netlify/functions/   ← subscribe.js, drip.js, unsubscribe.js, lib/
│
├── metrics/                 ← Monthly Search Console exports and platform
│                              snapshots. Evidence for the Learning Rule.
│
├── research/
│   └── handoffs/            ← The three external .docx files and any future
│                              external reviews. QUARRY, NOT CANON. Already
│                              sifted; adopted content lives in WRITING_OS v2
│                              and /operations. Never build from these
│                              directly.
│
└── archive/                 ← Everything superseded, moved here with git mv:
                               WRITING_OS_V1.md, old critical path, retired
                               spec files. History, kept honest.
```

The distinction that resolves the confusion: **/canon is what the work says. /content is what ships. /operations is how the machine runs. /tools is what enforces. /research is what informs. /archive is what was.** A file's folder tells you its authority level at a glance.

## 3. Where each file from the recent batch goes (the placement ruling, restated)

| File | Destination | Status |
|---|---|---|
| WRITING_OS_V2.md | / (root), old v1 → /archive | Canon |
| CRITICAL_PATH_V2.md | / (root), old path doc → /archive | Canon |
| LAUNCH_CHECKLIST.md | / (root) | Living ledger |
| dc_lint.py | /tools | Tool |
| BEEHIIV_SETUP.md | /operations | Operations |
| SEO_IMPLEMENTATION_PACK.md | /operations | Operations |
| REPO_GUIDE.md (this file) | /operations | Operations |
| subscribe.js, drip.js, unsubscribe.js, lib/emails.js | /site/netlify/functions | Code |
| DC_mark_master.svg | /assets | Source of truth |
| Avatar + banner PNGs, Moon variant | /assets | Exports |
| SOCIAL_CONTENT_PACK_01.md | /content/drafts | Awaiting re-audit |
| The three .docx handoffs | /research/handoffs | Quarry only |
| Avatar comparison PNGs | Nowhere required; keep or discard | Ephemeral |

## 4. The commit workflow (the practical loop)

For each work session:

1. **Pull first.** `git pull` so you're building on the latest truth.
2. **Do the work** (or receive it from a Claude session as files).
3. **Stage and commit with a message that says what and why:**
   `git add -A && git commit -m "Adopt WRITING_OS v2; archive v1; add lint tool"`
4. **Push.** `git push`
5. **If canon changed:** refresh the Claude Project mirror (remove the old file from Project knowledge, upload the new).

Superseding, never deleting: `git mv WRITING_OS.md archive/WRITING_OS_V1.md` then add the new file. The move and the addition go in the same commit so history reads cleanly.

If any of this is friction, the GitHub web interface does all of it without a terminal: upload files, it prompts for a commit message, done. The discipline matters more than the tooling.

## 5. The meta-process going forward (the whole loop in one paragraph)

You record a voice note weekly; seeds are extracted to /seeds. Content is drafted from seeds or seed-bank, passes /tools/dc_lint.py, passes the twelve gates, arrives for your flags in /content/drafts, and moves to /content/approved when you rule. Shipped pieces are recorded in /content/published. Rulings land in COHERENCE_LOG, decisions in DECISION_LOG, and the checklist gets its boxes checked and dated. External documents of any kind go to /research and are sifted, never installed. Superseded files go to /archive. The repo is committed after every working session, and the Project mirror is refreshed whenever a governing file changes. The newest locked ruling always wins, and it wins fastest when it is committed the day it is made.

◯
