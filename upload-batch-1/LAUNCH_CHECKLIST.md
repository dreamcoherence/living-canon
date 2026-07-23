# LAUNCH_CHECKLIST.md

**The single working ledger to 10 October. One item at a time, in order. Owner: B = founder, C = Claude, B+C = flag-round. Check items only when their done-condition is met. This file supersedes scattered task lists; update it in the repo as items close.**

---

## Phase 0 · Already complete

- [x] Foundation essay locked and live on Beehiiv (C+B)
- [x] Seven Nights v4 locked; Resend/Blobs drip built (C+B)
- [x] Site live on Netlify; Give/Stripe button live (B)
- [x] Brand mark regenerated per Coherence Log treatment; avatars + X banners + SVG master delivered (C)
- [x] Avatar ground ruled: Night ships; Moon variant archived for light surfaces (B)
- [x] X launch sequence locked: pinned inaugural, pingu reply, quote-repost (B+C)
- [x] Three external handoffs sifted; adoptions and rejections recorded (C)
- [x] WRITING_OS v2 drafted: Part I untouched, Amendments A1–A6 (C)
- [x] dc_lint.py built and tested (C)
- [x] BEEHIIV_SETUP.md and SEO_IMPLEMENTATION_PACK.md drafted (C)
- [x] CRITICAL_PATH_V2 ruled: essays II–VII off pre-launch path (B)

## Phase 1 · Infrastructure lock (target: Jul 27)

- [ ] 1.1 Rule on Beehiiv Option A (keep Resend drip) or Option B (Scale) — **B** · *Done when: single-letter ruling given*
- [ ] 1.2 Flag-round the Beehiiv welcome-email draft — **B+C** · *Done when: copy locked*
- [ ] 1.3 Beehiiv: welcome email ON with locked copy; sending domain verified; recommendations popup off — **B** · *Done when: test signup receives welcome*
- [ ] 1.4 Beehiiv API key created; BEEHIIV_API_KEY + BEEHIIV_PUB_ID in Netlify env — **B** · *Done when: env vars present*
- [ ] 1.5 Signup function adds subscriber to Beehiiv after Blobs write — **C drafts, B deploys** · *Done when: test signup appears in both systems*
- [ ] 1.6 Unified unsubscribe: one action silences drip and Beehiiv — **C drafts, B deploys** · *Done when: tested end to end*
- [ ] 1.7 Stripe live link verified in production (placeholder gone) — **B** · *Done when: live payment link opens*
- [ ] 1.8 DRIP_TEST_FAST deleted from Netlify env — **B** · *Done when: confirmed absent*
- [ ] 1.9 Repo: create /seeds /content/drafts /content/approved /content/published /metrics /tools /operations /research/handoffs — **B** · *Done when: committed*
- [ ] 1.10 Commit: WRITING_OS_V2 (v1 → archive), CRITICAL_PATH_V2 (old → archive), dc_lint.py, two operations docs, assets, SOCIAL_CONTENT_PACK_01 to /content/drafts, handoffs to /research — **B** · *Done when: one commit, pushed*
- [ ] 1.11 _redirects file live: www→apex, netlify.app→apex, /index.html→/ — **C provides, B deploys** · *Done when: curl shows 301s*
- [ ] 1.12 robots.txt live — **B** · *Done when: reachable at /robots.txt*
- [ ] 1.13 sitemap.xml live with real routes — **C drafts against actual routes, B deploys** · *Done when: valid XML at /sitemap.xml*
- [ ] 1.14 Search Console Domain property + DNS TXT verified — **B** · *Done when: property verified*
- [ ] 1.15 Sitemap submitted; baseline Indexing + Performance exports saved to /metrics — **B** · *Done when: exports committed*

## Phase 2 · Site made durable (target: Aug 3)

- [ ] 2.1 SPA → static multi-page conversion, design pixel-identical — **C builds from site source, B deploys** · *Done when: every route passes view-source test (title, H1, body, links in raw HTML)*
- [ ] 2.2 Per-page unique titles, descriptions, canonicals, OG tags — **C** · *Done when: no duplicates across site*
- [ ] 2.3 JSON-LD: Organization + WebSite on home; Article on essay — **C** · *Done when: rich-results validator passes*
- [ ] 2.4 Design fixes from advisor walkthrough (buttons, heading hierarchy, breathing room, Journal rename, Dialogue trust-tension) — **C builds, B flags** · *Done when: founder approves*
- [ ] 2.5 404 returns real 404 status — **C** · *Done when: curl confirms*
- [ ] 2.6 Resubmit sitemap; request indexing on essay + Seven Nights pages — **B** · *Done when: indexed in Search Console*

## Phase 3 · Voice goes live (target: Aug 10)

- [ ] 3.1 First founder voice note (10–30 min); seeds extracted to /seeds — **B records, C extracts** · *Done when: first seed records committed*
- [ ] 3.2 X account live: avatar, banner (mark-alone), bio, bio link → Seven Nights capture — **B** · *Done when: profile complete*
- [ ] 3.3 Pinned inaugural posted; pingu window assessed (likely expired; pin stands alone if so) — **B** · *Done when: pinned*
- [ ] 3.4 Instagram live: avatar, bio, same link discipline — **B** · *Done when: profile complete*
- [ ] 3.5 SOCIAL_CONTENT_PACK_01 re-audit: lint + twelve gates + founder flags; survivors → /content/approved — **B+C** · *Done when: flag-round complete*
- [ ] 3.6 First three Instagram posts + first week of X posts shipped from approved set — **B** · *Done when: live*
- [ ] 3.7 First Sunday broadcast sent — **B+C** · *Done when: sent, archived*

## Phase 4 · The engine turns (Aug 11 – Sep 21)

Weekly loop, checked per week (six rows):

- [ ] Week 1: Mon voice note · daily X · 3–4 IG · Sun letter
- [ ] Week 2: same loop
- [ ] Week 3: same loop + pathway page #1 (dream recall) drafted and live
- [ ] Week 4: same loop + first monthly metrics review (Learning Rule in force)
- [ ] Week 5: same loop + ICP sprint complete; positioning statement drafted
- [ ] Week 6: same loop + Threshold page copy-tuning pass complete; pathway page #2 live
- [ ] Buffer connected and queue approval-gated (when manual posting strains) — **B**
- [ ] Second metrics review; doors adjusted, truth untouched — **B+C**

## Phase 5 · Threshold campaign (Sep 22 – Oct 10)

- [ ] 5.1 Threshold enrollment opens; sales surface passes SALES_PAGE_OS audit — **B+C**
- [ ] 5.2 Sunday letters carry invitation in closing position (3 letters) — **B+C**
- [ ] 5.3 Social mention #1: the thread that tells the truth of what it is — **B+C**
- [ ] 5.4 Social mention #2: the quiet final-week reminder — **B+C**
- [ ] 5.5 Cohort onboarding ready (welcome letter, schedule, access) — **B+C**
- [ ] 5.6 **Launch. 10 October.** — **B**

---

**Standing rule for this ledger:** items close in order within a phase; phases may overlap only where CRITICAL_PATH_V2 names no dependency. When an item closes, check it, date it, and commit. The ledger is the record.

◯
