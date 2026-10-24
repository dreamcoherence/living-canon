#!/usr/bin/env bash
# Dream Coherence canon audit. Run from repo root: bash tools/canon_audit.sh
# Read-only. Exit code 1 if any BLOCK finding; warnings never fail.
set -u
ROOT="${1:-.}"
cd "$ROOT" || exit 2
EXCL='--exclude-dir=99_ARCHIVE --exclude-dir=archive --exclude-dir=intake --exclude-dir=.git --exclude-dir=SOURCE_NOTES --exclude-dir=node_modules'
block=0

# --- Narrow allowances (file + exact line, founder-ruled; never broad patterns) ---
# Each entry is one TAB-separated pair: <path><TAB><exact full line>.
# A line is skipped only when BOTH the path and the entire line match exactly.
# 1. MAKING_OS.md Part I §7, the fractal-law paragraph. Carried verbatim from
#    WRITING_OS_V2.md v1 and deliberately unannotated: Amendment A7, The Architectural
#    Law (MAKING_OS Part II, 2026-10-23), supersedes it, and founder ruling D5e kept
#    Part I byte-identical rather than editing locked text to satisfy this linter.
# 2. canon/GOLDEN_THREAD.md, the counterfeits list. "highest timeline" appears inside
#    the enumeration of counterfeits the file prohibits, so the match is inverted in
#    sense. Founder-ruled 2026-10-23.
ALLOWLIST="$(mktemp)"; trap 'rm -f "$ALLOWLIST"' EXIT
cat > "$ALLOWLIST" <<'ALLOWEOF'
./MAKING_OS.md	**The fractal law.** Foundation is the compressed seed. Essays II–VII each grow from one movement of the root, revealing the whole recognition at a different scale — never introducing a worldview the seed doesn't already hold. Before drafting any Essay N: reread Foundation, identify the parent movement, list its planted motifs, and let the new essay inherit and extend those spines rather than inventing fresh ones. The canon quotes flow *outward* from the root (website quotes essay, never the reverse).
./canon/GOLDEN_THREAD.md	- grandiosity: a calling that inflates the self, requires others to organize around it, arrives with urgency and total certainty, or claims election, a highest timeline, or cosmic specialness.
ALLOWEOF
allow() {
  awk -F'\t' 'NR==FNR{ a[$1 FS $2]=1; next }
    { i=index($0,":"); f=substr($0,1,i-1); r=substr($0,i+1);
      j=index(r,":"); b=substr(r,j+1);
      if ((f FS b) in a) next; print }' "$ALLOWLIST" FS='\t' -
}


echo "== 1. Superseded formulations (BLOCK if found outside logs) =="
for pat in "identity selects perception" "body coherence is not optional" "it is the ground\." \
           "field answering genuine contribution" "Essays II–VII" "fractal law" "dream proves" \
           "dream demonstrates" "The dream grows responsive to you" ; do
  hits=$(grep -rIin $EXCL --include='*.md' -e "$pat" . | allow | grep -viE "supersed|retired|replaced|replaces|overclaims|no longer|prohibited|inflation|fractal law in Part|restores the fractal law" | grep -v -e COHERENCE_LOG -e DECISION_LOG -e CHANGELOG -e INTEGRATION_REPORT | cut -d: -f1,2 || true)
  if [ -n "$hits" ]; then echo "BLOCK  '$pat' in:"; echo "$hits" | sed 's/^/         /'; block=1; fi
done

echo "== 2. Risk vocabulary (WARN: check register) =="
for pat in "highest timeline" "raise your vibration" "high vibration" "quantum" "manifest" "jivanmukti" \
           "liberation" "Great Spirit" "true self" "people are asleep" "everything happens for a reason" ; do
  hits=$(grep -rIin $EXCL --include='*.md' -e "$pat" . | allow | grep -viE "\b(not|never|no|avoid|reject|rejected|prohibited|cannot|excludes?|without|nor|filter)\b|anti-slop|must not" | grep -v -e VOICE_DISCIPLINES -e INTEGRATION_REPORT | cut -d: -f1,2 || true)
  [ -n "$hits" ] && { echo "WARN   '$pat' (affirmative use?):"; echo "$hits" | sed 's/^/         /'; }
done

echo "== 3. Em dashes in canon files changed since last tag (WARN) =="
last=$(git describe --tags --abbrev=0 2>/dev/null || echo "")
if [ -n "$last" ]; then
  for f in $(git diff --name-only "$last" -- '*.md' 2>/dev/null); do
    [ -f "$f" ] || continue
    added=$(git diff "$last" -- "$f" | grep '^+' | grep -c '—' || true)
    [ "$added" -gt 0 ] && echo "WARN   $f: $added added line(s) with em dash"
  done
else echo "skip   (no tag yet)"; fi

findf() { find . -name "$1" -not -path './.git/*' -not -path '*/archive/*' -not -path '*/99_ARCHIVE/*' 2>/dev/null | head -1; }
IDX=$(findf PROJECT_INDEX.md); CS=$(findf CURRENT_STATE.md); NS=$(findf NEXT_STEPS.md); DL=$(findf DECISION_LOG.md)

echo "== 4. Index coverage (WARN) =="
if [ -n "$IDX" ]; then
  for d in canon 01_IDENTITY 02_LINEAGE_AND_RESEARCH 04_CANON; do
    [ -d "$d" ] || continue
    for f in $(find "$d" -name '*.md' -not -path '*/archive/*' -not -path '*/SOURCE_NOTES/*' -not -path '*/source_notes/*'); do
      grep -q "$(basename "$f")" "$IDX" 2>/dev/null || echo "WARN   not indexed: $f"
    done
  done
else echo "WARN   PROJECT_INDEX.md not found"; fi

echo "== 5. Staleness (WARN) =="
for f in $CS $NS; do
  [ -f "$f" ] || continue
  ts=$(git log -1 --format=%ct -- "$f" 2>/dev/null); [ -z "$ts" ] && continue
  age=$(( ( $(date +%s) - ts ) / 86400 ))
  [ "$age" -gt 14 ] && echo "WARN   $f last committed $age days ago"
done

echo "== 6. Open decisions =="
[ -n "$DL" ] && awk '/^### Open/{f=1;next} /^### |^## /{f=0} f && /^- /' "$DL" | sed 's/^/OPEN   /'
n=$( [ -n "$DL" ] && awk '/^### Open/{f=1;next} /^### |^## /{f=0} f && /^- /' "$DL" | wc -l | tr -d ' ' || echo 0)
[ "${n:-0}" -gt 15 ] && echo "WARN   $n open decisions (alarm threshold 15)"

echo
[ $block -eq 1 ] && { echo "RESULT: BLOCK findings present."; exit 1; } || echo "RESULT: no blocking findings."
