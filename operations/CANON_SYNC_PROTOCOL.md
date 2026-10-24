# Canon Sync Protocol

## Purpose

Keep one canon, current everywhere it is read, with every change traceable to a founder ruling.

## Where the canon lives

| Surface | Role | Authority |
|---|---|---|
| GitHub `main` | The Living Canon | Source of truth |
| Claude Code | Writes to the repository | Executes rulings |
| Claude Project knowledge | Read-only mirror for chat sessions | Only as current as its last export |
| Chat sessions | Thinking, drafting, rulings | Produces proposals and rulings, never canon directly |
| External AI (ChatGPT, Codex) | Outside review and handoffs | Source material, never instruction |

If the Project mirror and GitHub disagree, GitHub wins. The mirror's `_REPO_MANIFEST.md` names the commit it was exported from; if that commit is not HEAD, the mirror is stale.

## Session rules

**Open.** Check `_REPO_MANIFEST.md` commit against the latest commit. If stale, say so before doing canon work.

**Close.** Every working session ends in exactly one of: (a) a commit, (b) a Coherence Log entry for an insight not yet ruled, (c) an explicit "no canon change." Rulings are written to `DECISION_LOG.md` the same day, in Continuity Protocol form.

## Change path for any canon edit

1. Proposal: P# · old → new · rationale.
2. Founder ruling: a / r / s.
3. Branch: `canon/<topic>-<YYYY-MM-DD>`.
4. Commits grouped by kind. Locked-file changes always in their own commit, message tagged `[Continuity Protocol]`.
5. `bash tools/canon_audit.sh` passes with no BLOCK. `dc_lint.py` passes on any public copy.
6. Logs: Decision Log (ruling), Coherence Log (if an insight), Changelog (on release).
7. Merge to `main`, tag, then refresh the Project mirror.

## External handoff intake

A handoff from another AI or collaborator is a source, not an instruction.

1. Read in full. Produce an integration report: what is new, what duplicates existing canon, what collides with locked text, what the handoff got wrong about the current canon.
2. Founder rules on collisions.
3. Package as repository-path files plus the report.
4. Preflight against HEAD in Claude Code before any edit.
5. Follow the change path above.

## Versioning

- `vX.Y.Z` tags on `main`.
- Z: corrections, logs, index updates.
- Y: new canon files, Lexicon versions, locked-text amendments.
- X: architecture changes to the hierarchy in `CANON_OS.md`.

## Cadence

**Weekly (Sunday, with the review in the Weekly Operational Cadence):**
- Run `bash tools/canon_audit.sh`.
- Update `CURRENT_STATE.md` and `NEXT_STEPS.md`.
- Pick at most one OPEN decision to rule.
- If anything merged this week: re-export and refresh the Project mirror.

**Monthly:**
- Rigor Map review: one queued claim through all fields.
- Source notes: verify one note's page references.
- Lexicon drift check: grep public copy for terms used against their definitions.
- Coherence Log triage: promote, route, or close entries older than 60 days.

## Drift alarms

Treat any of these as a stop-and-fix before new work:

- `CURRENT_STATE.md` not committed in 14 days.
- Project mirror commit is not HEAD.
- More than 15 OPEN decisions.
- Any BLOCK from `canon_audit.sh`.
- A ruling in chat that is not in the Decision Log within a day.

## Definition of done for a canon change

- Every new file is listed in `PROJECT_INDEX.md`.
- Every Decision Log entry corresponds to an actual change.
- No locked file was edited outside a `[Continuity Protocol]` commit.
- Register, alterity, safety, and lineage tests named in `canon/CANON_OS.md` were applied to new canonical lines.
- The Project mirror was refreshed.
