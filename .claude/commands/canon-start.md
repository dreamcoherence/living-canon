Start-of-session check for the Dream Coherence living canon. Read-only.

1. `git checkout main && git pull`. Report the HEAD commit and date.
2. Report any uncommitted changes and any local branches not yet merged.
3. Run `bash tools/canon_audit.sh` and summarize: BLOCK findings, warnings worth attention, open decisions.
4. Summarize CURRENT_STATE.md in five lines and say how many days since it was last committed.
5. Recommend the single most important next action, with one sentence of reasoning.

Do not edit any file.
