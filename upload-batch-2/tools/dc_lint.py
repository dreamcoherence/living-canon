#!/usr/bin/env python3
"""
Dream Coherence deterministic lint.
Runs the mechanical checks from WRITING_OS before any draft reaches founder review.
Usage:  python3 dc_lint.py FILE [FILE ...]  [--mode social|essay|site]
Exit codes: 0 clean, 1 warnings only, 2 violations.

This script enforces only what is mechanical. Judgment stays human.
"""
import re
import sys
import unicodedata

# ---------- Registers ----------

KILLED = [
    # phrase, note
    (r"\bbegin where you are\b", "Killed phrase (founding kill-list)"),
    (r"\benter the dream\b", "Doctrinal violation: the reader never left it"),
    (r"nothing (here )?asks for belief", "Belief motif (killed)"),
    (r"\bbelief\b", "Belief motif (killed as a pattern)"),
    (r"song of (your|the) soul", "Killed phrase"),
    (r"gift of (your|this) life", "Killed phrase"),
    (r"\byou have forgotten\b", "Deficiency framing (killed)"),
    (r"\blook carefully\b", "Instruction tic (killed)"),
    (r"fragrance (does not|upon the air)", "Killed pattern: fragrance-agency variants"),
    (r"\byour own seeing\b", "Recurring smuggled-back item (keep killing)"),
    (r"quietly hosting", "Killed phrase"),
    (r"most people (are|live|sleep|walk)", "Out-group caricature (Level Axiom)"),
]

MANIFESTATION = [
    (r"\bmanifest(ation|ing|s|ed)?\b", "Manifestation-economy register"),
    (r"\bvibration(s|al)?\b", "Restricted vocabulary"),
    (r"\bfrequenc(y|ies)\b", "Restricted vocabulary"),
    (r"\babundance\b", "Manifestation-economy register"),
    (r"\battract(ing|ion)?\b", "Manifestation-economy register (in spiritual context)"),
    (r"\b(your|the) highest self\b", "Generic elevation (anti-slop register)"),
    (r"\balignment\b", "Generic elevation (warn)"),
]

RESERVED = [
    (r"\bgrace\b", "Reserved term: spend only at full value, at its home station"),
    (r"\brecognition\b", "Reserved term: spend only at full value"),
]

RESTRICTED_WARN = [
    (r"\binfinite\b", "Restricted vocabulary (allowed only where analytically true)"),
    (r"\benergy\b", "Restricted vocabulary (allowed only in precise technical use)"),
    (r"\bsacred\b", "Restricted vocabulary (allowed only where precise)"),
    (r"\bfractal\b", "Restricted vocabulary"),
    (r"\bfight\b|\benemy\b|\bobstacle\b|\bovercome\b|\bbroken\b|\btroubled?\b",
     "Words Are Spells: avoid unless truly necessary"),
]

ABSOLUTES = re.compile(
    r"\b(every|always|never|all|entire|constant|nowhere else|everyone|everything)\b",
    re.IGNORECASE,
)

EMOJI_ALLOWED = {"✦", "◯"}

WORD_BUDGETS_SITE = {  # site/visible-copy budgets from standing editorial laws
    "awareness": 1,
    "through you": 2,
    "dream coherence is": 1,
}


def is_emoji(ch):
    if ch in EMOJI_ALLOWED:
        return False
    cp = ord(ch)
    ranges = (
        (0x1F300, 0x1FAFF),  # symbols, pictographs, supplemental
        (0x2600, 0x27BF),    # misc symbols, dingbats
        (0x1F000, 0x1F2FF),  # mahjong, cards, enclosed
        (0xFE00, 0xFE0F),    # variation selectors
        (0x1F900, 0x1F9FF),
    )
    return any(a <= cp <= b for a, b in ranges)


def lint_text(text, mode="social"):
    violations, warnings = [], []
    lines = text.splitlines()

    for idx, line in enumerate(lines, 1):
        low = line.lower()

        # Em dashes: never in visible copy
        if "\u2014" in line:
            violations.append((idx, "Em dash in visible copy (standing law: zero em dashes)"))

        # Killed patterns: hard violations
        for pat, note in KILLED:
            if re.search(pat, low):
                violations.append((idx, note + f"  [{pat}]"))

        # Manifestation register: hard violations in all modes
        for pat, note in MANIFESTATION:
            if re.search(pat, low):
                violations.append((idx, note + f"  [{pat}]"))

        # Reserved terms: warnings (human judges full value)
        for pat, note in RESERVED:
            for _ in re.finditer(pat, low):
                warnings.append((idx, note))

        # Restricted vocabulary: warnings
        for pat, note in RESTRICTED_WARN:
            if re.search(pat, low):
                warnings.append((idx, note + f"  [{pat}]"))

        # Emoji check
        for ch in line:
            if is_emoji(ch):
                violations.append((idx, f"Emoji '{ch}' (only ✦ and ◯ permitted, brand surfaces only)"))

        # Absolutes audit: warn so each is deliberately kept or guarded
        for m in ABSOLUTES.finditer(line):
            warnings.append((idx, f"Absolute '{m.group(0)}' (audit: analytically true, guarded, or soften)"))

    # Consecutive paragraphs opening with "And"
    paras = [p.strip() for p in text.split("\n\n") if p.strip()]
    and_openers = [i for i, p in enumerate(paras) if re.match(r"^And\b", p)]
    for i in range(len(and_openers) - 1):
        if and_openers[i + 1] == and_openers[i] + 1:
            violations.append(("¶", "Consecutive paragraphs open with 'And' (Doors Law corollary)"))

    # Word budgets (site mode only)
    if mode == "site":
        low_all = text.lower()
        for term, budget in WORD_BUDGETS_SITE.items():
            n = len(re.findall(re.escape(term), low_all))
            if n > budget:
                violations.append(("*", f"Word budget exceeded: '{term}' ×{n} (budget {budget})"))

    return violations, warnings


def main():
    args = [a for a in sys.argv[1:] if not a.startswith("--")]
    mode = "social"
    for a in sys.argv[1:]:
        if a.startswith("--mode"):
            mode = a.split("=")[-1] if "=" in a else "social"
    if not args:
        print(__doc__)
        sys.exit(0)

    worst = 0
    for path in args:
        with open(path, encoding="utf-8") as f:
            text = f.read()
        v, w = lint_text(text, mode=mode)
        print(f"\n=== {path}  (mode: {mode}) ===")
        if not v and not w:
            print("CLEAN")
        for line, note in v:
            print(f"  VIOLATION  line {line}: {note}")
        for line, note in w:
            print(f"  warn       line {line}: {note}")
        if v:
            worst = max(worst, 2)
        elif w:
            worst = max(worst, 1)
    sys.exit(worst)


if __name__ == "__main__":
    main()
