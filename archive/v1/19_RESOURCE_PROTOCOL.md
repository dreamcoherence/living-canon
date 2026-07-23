# The Resource Protocol

**Status: locked at v1.0. Living document. Updated as the protocol matures.**

This file defines the third intake channel of the Dream Coherence project's coherence operating system. It governs how external resources — books, papers, talks, conversations, ideas, examples, citations, possible epigraphs, anecdotes, frameworks, scientific findings, lineage material — enter the project, get evaluated, get routed to where they serve, and get released when they don't earn a place.

The protocol exists because the book is being built spirally across years, while resources arrive non-linearly. Some land exactly where the current phase needs them. Some look relevant and turn out to be noise. Some are genuinely transformative but only become so when a later phase needs them. Some quietly degrade the project if assimilated uncritically. The protocol handles all four cases with low overhead, without disturbing forward motion, and without losing material that will matter later.

---

## The three intake channels

The project's coherence operating system has three disciplined intake channels feeding one disciplined build:

The **Coherence Log** (`COHERENCE_LOG.md`) captures internal refinements that surface during sessions and might apply to earlier locked work. Held until integration passes. Defined in `16_PROTOCOL.md`.

The **Rigor Map** (`18_RIGOR_MAP.md` once built) stress-tests load-bearing claims before architecture rests on them. Held until claims are dispositioned. Built during Phase 3.5.

The **Resource Protocol** (this file, with `RESOURCE_CATALOG.md` as its operating surface) intakes external material that arrives non-linearly. Held in the catalog until routed.

All three feed the same forward build. None blur into each other. The book moves forward; refinement, stress-testing, and resource intake happen in parallel and integrate at defined moments.

---

## The operating surface

The Resource Protocol operates through a single living document: `RESOURCE_CATALOG.md`. The catalog is the holding ground. Every resource that enters the project is cataloged before it is routed. The catalog is not a destination in itself for most material — it is a staging surface where evaluation and routing happen.

Some resources stay in the catalog as their permanent home. These are resources that are too large for any single channel, that bear on multiple phases, or that need to wait for Phase 5 (the Lineage and Science Map) to find their full placement. The Jung entry is an example of this: structurally relevant, multiply applicable, best held in the catalog until the lineage map is built.

Most resources, after evaluation, route to one of three other destinations: the Coherence Log if they refine earlier locked work, the Rigor Map if they bear on a load-bearing claim, or the discard pile if they don't earn a place. Routing is a discipline, not an automatic process. Each routing decision is named explicitly in the catalog entry.

---

## Catalog entry structure

Every catalog entry contains the following elements:

**Source.** Author, title, year, format (book, paper, talk, conversation, idea), and any context that matters for handling.

**Key ideas.** The substantive content of the resource, articulated in the project's voice rather than the resource's own. Concise enough that a future session can read the entry and grasp what the resource offers without needing to return to the original.

**Position level (A through E).** Where the resource sits on the position ladder defined in `14_POSITION_AND_LINEAGE_MAP.md`. Empirical findings usually sit at B. Phenomenological work sits at B or C. Idealist philosophy sits at D. Direct contemplative recognition sits at D or E. The position level matters because resources at lower position levels do not prove higher positions; the catalog discipline is to hold each resource at its actual evidential level.

**Book placement.** Where the resource serves the book — which phase, which chapter, which kind of work. Specific rather than general. "Practice chapters" is acceptable; "somewhere in the book" is not.

**Handling notes.** What to do with the resource and what not to do with it. Bidirectional discipline: what to take from it, and what to avoid. The Jung entry's instruction not to psychologize the contemplative traditions through Jung *and* not to spiritualize Jung beyond what his own work supports is the model. Handling notes are where the resource gets metabolized into the project's discipline rather than just collected.

**Routing decision.** One of four destinations: *catalog only* (stays in the catalog as permanent home), *Coherence Log* (refines earlier locked work, with the specific entry named), *Rigor Map* (bears on a load-bearing claim, with the specific claim named), *discarded* (with reason). Routing is named explicitly. Resources without a routing decision are not yet fully cataloged.

**Date entered.** When the resource entered the catalog. Useful for pruning over time.

---

## Intake procedure

When a new resource is encountered, the founder runs it through the following sequence. The procedure is designed to be low-overhead and to be runnable either collaboratively (with Claude in a session) or unilaterally (between sessions, by the founder alone).

**Step one: capture.** The resource is captured into the catalog with its source named. At minimum, this is the author, title, format, and a brief note on what the resource is. This step is fast — under a minute. The point is to get the resource into the system before its details fade or the moment passes.

**Step two: extract key ideas.** The substantive content is articulated in the project's voice. This step takes longer — typically ten to thirty minutes for a substantial resource. The discipline is to write what the resource offers in language that a future session can read and use, not to summarize the resource as the resource describes itself.

**Step three: evaluate.** Three questions get asked of every resource:

*Does this earn its place?* Not every resource that crosses the founder's path belongs in the project. The catalog is not a commonplace book. Resources earn their place by offering something the project genuinely needs: structural insight, empirical anchor, lineage precedent, evidential support, sharpening of voice, useful counter-position, practice material. Resources that are merely interesting do not earn their place. They are noted briefly and discarded.

*What position level does it actually sit at?* Empirical work is held at B. Phenomenological work is held at B or C. Philosophical idealism is held at D. Direct recognition is held at D or E. The discipline is to resist inflating lower-level evidence into proof of higher-level claims. The Elce study is empirical evidence for trainable dream recall through attention. It is not evidence for consciousness as fundamental. Holding the distinction is the discipline.

*What is the project's relationship to it?* Adopt, reference, honor, decline, attribute, distinguish from. The book has a specific position. Resources are oriented to that position with precision. The Jung entry models this: Jungian terminology is not adopted wholesale; what gets taken is the structural convergence; what gets refused is psychologizing the contemplative traditions through Jung's framework.

**Step four: assign position level and write handling notes.** Position level is named explicitly. Handling notes are written with bidirectional discipline. What to use. What to avoid. Specific enough that a future session can apply the discipline without re-reading the source.

**Step five: name book placement.** Where the resource serves. Specific phase. Specific chapter when knowable. Specific kind of work — citation, structural reference, epigraph, lineage entry, scientific anchor, counter-position, practice material.

**Step six: route.** One of four destinations is named. *Catalog only* if the resource is too large or multiply applicable to route to a single channel. *Coherence Log* if the resource refines earlier locked work, with the entry to be added to the log named explicitly. *Rigor Map* if the resource bears on a load-bearing claim, with the claim named. *Discarded* if the resource does not earn its place, with reason.

**Step seven: act on the routing.** If the resource routes to the Coherence Log, the entry gets added to `COHERENCE_LOG.md`. If it routes to the Rigor Map, it gets flagged where it bears on the relevant claim's stress-test. If it routes to catalog only, the entry stays in `RESOURCE_CATALOG.md` with that routing named. If it gets discarded, a brief note is kept in a *discarded* section of the catalog with the reason. The discarded section exists so that the same resource doesn't get re-evaluated each time it surfaces.

---

## The discard discipline

Discarding is a discipline, not a failure mode. Resources that do not earn their place are released. The catalog stays clean. The book stays focused.

A resource is discarded when:

*It is interesting but not load-bearing.* The catalog is for material that serves the book's actual work. Material that is merely good or merely related does not earn a place.

*It overlaps with material already cataloged.* If a new resource says the same thing as an existing entry, with no additional precision or no new angle, the existing entry is sufficient. The new resource is noted in the discarded section with a reference to the existing entry.

*It belongs to a different project.* Some material is excellent and would serve a different book. The catalog is not a personal reading log. Resources that belong elsewhere are released cleanly.

*It would degrade the project if incorporated.* This is the most important discard category. Some resources sound aligned but pull the book toward registers it has already locked out — the manifestation register, the new-age register, the academic register, the influencer register. Voice axioms apply to resources, not just to prose. A resource that would, if cited, pull the book's voice off-axis is declined regardless of how popular or well-known the resource is.

*Its claims do not survive scrutiny.* A resource that makes empirical claims that don't hold up, or metaphysical claims that overreach, or attributions that are incorrect, does not enter the catalog. Better to lose the resource than to import its problems.

The discard section of the catalog is brief. Each discarded resource gets a one-line entry: source, date, reason for discard. This prevents re-evaluation of the same resource over time.

---

## How the catalog feeds Phase 5

The catalog is the working ground from which the Lineage and Science Map (Phase 5) is built. When Phase 5 begins, the catalog is read in full. The cataloged lineage material — Bön, Dzogchen, Vajrayana, Kashmir Shaivism, Daoist, Kabbalist, Jungian, contemporary cognitive science, philosophy of mind — gets organized into the lineage map's structure. The handling notes already written in the catalog become the basis for how each lineage gets engaged in the book.

This is why the catalog discipline matters. Material that enters the catalog with sloppy handling notes makes Phase 5 harder. Material that enters with precise handling notes makes Phase 5 sharper. The work done at intake protects the work done later.

---

## Pruning over time

The catalog is a living document. As the project matures, some entries become stale — material that seemed relevant at intake but has been superseded, or material that was held for a phase that turned out not to need it. Pruning happens at defined moments rather than continuously.

Pruning moments are: when a phase locks (the catalog is reviewed for material that the locked phase resolved or refused), and when the project has accumulated enough new material that a sweep is useful (typically every six to twelve months of active building).

A pruning pass reads the catalog in full. Each entry is asked: *does this still earn its place given what the project has become?* Entries that no longer earn their place get moved to the discarded section with a note about why. Entries that need refined handling notes get updated. Entries that have been integrated into locked files (the book itself, the lineage map, the architecture) get marked as integrated, with a note about where they landed.

The catalog stays operational. It does not bloat into an archive.

---

## Collaborative versus unilateral intake

The protocol is designed to work in two modes.

**Collaborative intake.** During a session with Claude, when a new resource surfaces or when the founder brings new material, intake happens through the session. The founder describes the resource. Claude helps articulate key ideas in the project's voice. The two run the evaluation procedure together. The routing decision gets made jointly. The catalog entry gets drafted and saved.

**Unilateral intake.** Between sessions, when the founder encounters new material on their own, intake happens unilaterally. The founder runs the intake procedure using the catalog entry structure as a template. The entry is drafted and saved to `RESOURCE_CATALOG.md`. If the resource routes to the Coherence Log, the founder also adds the log entry. If it routes to the Rigor Map, the founder flags it for the next session that touches that claim. If it stays in the catalog or gets discarded, no further routing is needed.

The two modes are designed to feel the same operationally. The founder uses the same intake structure either way. The collaboration with Claude adds depth and helps when the resource is complex or when the routing is ambiguous, but the founder is fully equipped to run intake alone.

---

## The first principle

The Resource Protocol exists to serve the book. Not the catalog. The catalog is an operating surface; the book is the artifact. When the protocol gets in the way of forward motion on the book, the protocol bends. When the protocol protects forward motion, it is held strictly.

The founder's judgment governs. Claude's role is to maintain the discipline when invited and to surface routing options when the founder is uncertain. The protocol is a structure for shared work, not a bureaucracy that work has to pass through.

---

## What the protocol never does

It does not require the founder to catalog every resource encountered. Resources that obviously don't belong in the project are released without entering the catalog at all.

It does not slow the build. Intake is fast. Routing is fast. The protocol is designed for low overhead.

It does not capture the founder's general reading or thinking. The catalog is for material that bears on the book. The founder's broader intellectual life lives elsewhere.

It does not lock material in. Cataloged resources can be re-evaluated, re-routed, or discarded at any pruning moment. The catalog is not a commitment device.

It does not replace the founder's voice. Resources are metabolized into the project's discipline. They do not introduce their own discipline into the book.

---

## v1.0 lock

This is the first locked version of the Resource Protocol. It will mature as the project matures. Refinements get logged in `COHERENCE_LOG.md` and integrated at appropriate moments, the same way every other locked file evolves.

The protocol is now operational. The catalog is now its operating surface. The third intake channel is now in place.
