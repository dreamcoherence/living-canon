# Dream Coherence. Website v2. Brief.

**Version 1.2. May 2026. The next iteration of dreamcoherence.com, designed to carry the audience engine and the growing body of work.**

The current site (v1) is deployed and serves as orientation: a single elegant page that announces the field is being built, captures email signal, and embodies the brand. It has done its work. The next iteration carries more: it is the home of the body of work as it accumulates.

This brief is for the rebuild that begins in Month 2-3 of the Phase 1 build. The v1 site continues to run until v2 is ready.

---

## What v2 Adds

The v1 site is one page. The v2 site has the same atmospheric simplicity at the entry but expands into a structured home for the work.

New surfaces:

- **The Writing index.** A growing archive of long-form essays. Each essay has its own page. The index page lists them chronologically (newest first), with a short brief and a publication date.
- **The Audio index.** A growing archive of audio pieces (guided practices, atmospheric pieces, spoken essays). Each piece has a player and a written transcript or description.
- **The Poem.** A dedicated page when the poem releases. The poem displayed in the brand's most contemplative typography setting. Possibly with an audio rendering.
- **The Practice.** A page describing the protocol at the structural level — what it is, what it does, what it asks of a practitioner. Held at the Brand Voice register. Does not give the protocol itself (that lives in offerings); it gives the recognition the protocol rests on.
- **The Field.** A page describing Dream Coherence as a body of work — the two pillars, the layers, what the field is becoming. Calibrated to the architecture documents but written for public reading.
- **Begin.** The signal capture, upgraded. A clear invitation to the newsletter as the entry point to the work.

Held for Phase 2 (after book launch):

- **The Book** page — describing the book, offering purchase paths.
- **Offerings** pages — for each paid offering as they launch.

---

## What v2 Does Not Add

- A blog (Writing index serves; "blog" is the wrong register).
- A podcast page (audio index serves the same function for now).
- An About page in conventional sense (the brand is faceless; the Field page carries what would otherwise be About).
- A press / media kit (held until book launch).
- A FAQ (the practice and field pages should answer most questions; FAQs read marketing-anxious).
- Testimonials (the brand does not use testimonials in conventional sense).
- Anything tracking, retargeting, or analytics-heavy.

---

## Sitemap

```
/                           Home (entry, atmospheric, signal capture)
/writing                    Writing index (essays, chronological)
/writing/[essay-slug]       Individual essay pages
/audio                      Audio index (pieces, chronological)
/audio/[piece-slug]         Individual audio pages
/the-poem                   The poem (when released)
/practice                   The practice page
/the-field                  The field page
/begin                      Newsletter signal capture (or merged into /)
/thanks                     Confirmation page (existing in v1)
```

Held for Phase 2:
```
/the-book                   The book
/offerings                  Offerings index
/offerings/[name]           Individual offerings pages
```

---

## Design Direction

**The home page** preserves the v1 atmosphere. The spiral mark. The opening lines. The signal capture. Adds quiet navigation to the other surfaces — possibly as small text links in a corner, or revealed as the visitor scrolls. The home page is the threshold; it should remain mostly empty.

**The Writing index** is a chronological list. Each entry shows: title (EB Garamond Italic), date (Inter, small, Gold-tinted), and a 1-2 sentence brief. Clicking opens the essay. The index should feel like a curated archive, not a feed.

**Individual essay pages** are calm and reader-focused. Wide margins. EB Garamond Regular body. Generous line-height. No sidebar, no related-posts widget, no share buttons. Just the essay. At the close: a quiet line saying "More writing." linking back to the index.

**The Audio index** parallels the Writing index. Title, date, brief, length. Each entry expands or links to a player page.

**Individual audio pages** have a clean player (no extraneous controls), the piece's written description, and optionally a transcript. The page atmosphere matches the audio's register.

**The Poem page** is the most contemplative page on the site. The poem displayed with maximum quiet around it. Possibly a single audio link. No other navigation visible on the page itself (return path is in the header or footer only).

**The Practice page** is a 600-1000 word piece describing what the practice is. Brand Voice. Does not teach the practice; describes it.

**The Field page** is a 800-1200 word piece describing Dream Coherence as a body of work. Brand Voice. Articulates the two pillars and the layers.

**The Begin page** is the signal capture, expanded. A short paragraph explaining what subscribing means (a weekly transmission from the field, in the brand voice). The signup form. A privacy line.

---

## Technical Direction

**Stack.** Continue with the static site approach. Astro is the recommended framework — it produces excellent static sites, supports Markdown for the writing and audio pages, handles RSS, and integrates cleanly with Netlify. Alternative: Eleventy (simpler) or Next.js (overkill but if the team eventually wants more dynamic features).

**Hosting.** Netlify (current host). DNS continues through Hostinger.

**Markdown-first.** All written content (essays, audio descriptions, practice page, field page) lives in markdown files in a content folder. This means the AI infrastructure can generate and update content via the Google Drive MCP, and the site rebuilds automatically.

**Build pipeline.** Markdown files in Google Drive → synced to a Git repository → Netlify rebuilds on push. The founder edits in markdown in their preferred editor (Cursor, VS Code, or similar) or directly in Notion if Notion can sync to Git (possible via various integrations).

**RSS feed.** Required for the Writing index. Many serious readers discover work through RSS. Audio index also gets an RSS feed (which doubles as a podcast feed for Spotify ingestion).

**Performance.** Page load under 1 second. Total page weight under 500KB for most pages. Images optimized. Fonts subset to the characters used.

**Accessibility.** Full keyboard navigation. Screen reader compatible. Color contrast meets WCAG AA at minimum (the brand palette already does).

**Privacy.** Plausible or Fathom analytics (privacy-respecting). No third-party tracking. No retargeting pixels. No social embed scripts.

---

## Content Required at v2 Launch

For the v2 site to be worth launching, certain content must exist:

**Required:**
- 1 essay live in the Writing index (the field needs to show that work is appearing)
- 1 audio piece live in the Audio index (same)
- Practice page complete
- Field page complete

**Strongly preferred:**
- 3-5 essays in the Writing index
- 2-3 audio pieces in the Audio index

The site does not launch with empty indexes. The content backlog is built before launch.

---

## v2 Build Timeline

**Month 2 (June 2026).** Brief locked. Design direction agreed. Content production begins for the required minimum content. Astro project initialized.

**Month 3 (July 2026).** Site shell built. Content pages templated. Writing and Audio indexes scaffolded. First essay drafted.

**Month 4 (August 2026).** Content complete (Practice page, Field page, 1-3 essays, 1-2 audio pieces). Site enters QA.

**Month 5 (September 2026).** v2 launches. v1 redirects to v2.

This timeline assumes content production runs in parallel with development. The AI infrastructure (operational by Month 2) supports content production.

---

## v2 Discipline

The site is the home of the work. Every decision is held to: does this serve the reader's encounter with the work?

- No CTAs that interrupt reading.
- No popups (the signal capture is on its own page and embedded discreetly).
- No "related posts" widgets.
- No comment sections.
- No share buttons.
- No "trending" or "most popular" displays.
- No live chat widget.
- No advertising.

What is offered: the work, presented at the register the work holds.

---

## What v3 Eventually Becomes (Phase 2-3)

Held for later. Phase 2 site (after book launch) adds:
- The Book page
- Initial Offerings pages
- Reader testimonials carefully curated (only if used at all)
- Light publisher-facing page if traditional publishing is pursued

Phase 3 site adds:
- Member-only sections for the Field Library (login required)
- Cohort application pages
- Possibly a directory of writing tagged by theme

The architecture allows for these additions without rebuilding. Each future surface is a new page or set of pages added to the existing structure.

---

## The Standard

The v2 site is calm, deep, contemplative, navigable. It feels like the entry to a serious body of work. Visitors who arrive curious find that the site rewards their attention. Visitors who arrive looking for marketing leave quickly. Both responses are correct.

The site is the brand's most permanent surface. Held with discipline, it becomes the threshold the work is encountered through for years.

◯
