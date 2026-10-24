Apply founder rulings to the Dream Coherence canon. Rulings and source: $ARGUMENTS

1. `git checkout main && git pull`. Create branch `canon/<topic>-YYYY-MM-DD`.
2. Apply only changes the founder ruled a or s. Skip r. If a ruling is ambiguous, stop and ask.
3. Merge rules: start from each file's HEAD version; never drop HEAD content; logs append-only; locked files only in a separate commit tagged `[Continuity Protocol]`.
4. Record every ruling in DECISION_LOG (Continuity Protocol form). Add a COHERENCE_LOG entry if a ruling carries an insight. Add new files to PROJECT_INDEX.
5. Run `bash tools/canon_audit.sh`. Fix BLOCK findings caused by this change; if a BLOCK predates this change, report it and continue.
6. Commit by kind (rigor, identity, locked, safety, lineage, editorial and ops). Show me the full diff summary and wait for my "go" before pushing.
7. Push the branch and give me the pull request link (https://github.com/dreamcoherence/living-canon/compare/<branch>).
8. Remind me: after merging, click "Sync now" on the GitHub source in the Claude Project.
