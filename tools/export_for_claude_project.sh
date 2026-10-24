#!/usr/bin/env bash
# Flattens the repo's live markdown into one folder for upload to the Claude Project.
# Run from repo root: bash tools/export_for_claude_project.sh
# Output: _claude_project_export/  (git-ignored). Upload everything in it; delete the old Project files first.
set -eu
OUT="_claude_project_export"
rm -rf "$OUT"; mkdir -p "$OUT"
manifest="$OUT/_REPO_MANIFEST.md"
{ echo "# Repo manifest"; echo; echo "Exported $(date -u +%Y-%m-%dT%H:%MZ) from commit $(git rev-parse --short HEAD 2>/dev/null || echo unknown)."; echo "Flat name → repository path. Repository paths are canonical."; echo; } > "$manifest"
find . -name '*.md' -not -path './.git/*' -not -path "./$OUT/*" -not -path './archive/*' -not -path './node_modules/*' | sort | while read -r f; do
  rel="${f#./}"; base=$(basename "$rel")
  if [ -e "$OUT/$base" ]; then base="$(echo "$(dirname "$rel")" | tr '/' '_')__$base"; fi
  cp "$f" "$OUT/$base"
  echo "- \`$base\` → \`$rel\`" >> "$manifest"
done
echo "Exported $(ls "$OUT" | wc -l | tr -d ' ') files to $OUT/"
