# SEO_IMPLEMENTATION_PACK.md

**Scope ruling: Phase 0–1 technical baseline ships now (pre-launch). Cluster and pillar building is a post-launch monthly rhythm. This file contains everything needed for the now-work, in order, with drop-in files.**

The one architectural finding that matters: the site is a single-file SPA, and Google must execute it to read the essays. For a brand whose long game is durable canonical pages compounding in search, this is the debt to clear before 10/10. Everything else here is configuration.

---

## Task 1. Pre-render the site (the only structural change)

**Ruling requested → recommended: convert the SPA to a static multi-page site.** No framework needed. The site is hand-authored; each route becomes a real HTML file sharing the same head, styles, and nav. /index.html, /about/index.html, /journal/index.html, /journal/foundation/index.html, /practice/index.html, and so on. Design unchanged; the JS that remains is enhancement, not content delivery.

Acceptance test per page: `curl -s https://dreamcoherence.com/journal/foundation/ | grep -c "<h1"` returns ≥1 and the essay body text is present in the raw response. If title, H1, body, and nav links are in the initial HTML, the page passes.

Why not a prerender plugin: plugins patch the symptom and add a build dependency; the site is small enough that real files are simpler, faster, and permanent.

## Task 2. Canonical host and redirects

Canonical host: **https://dreamcoherence.com** (apex, no www). Netlify handles HTTP→HTTPS automatically once the domain and certificate are live.

Drop-in `_redirects` file (site root):

```
# host canonicalization
https://www.dreamcoherence.com/*  https://dreamcoherence.com/:splat  301!
http://www.dreamcoherence.com/*   https://dreamcoherence.com/:splat  301!

# netlify hostname to custom domain
https://YOUR-SITE.netlify.app/*   https://dreamcoherence.com/:splat  301!

# tidy variants
/index.html   /   301
```

Replace YOUR-SITE with the actual Netlify site name. Never redirect retired pages to the homepage; use a real 404 or a true successor.

## Task 3. robots.txt

Drop-in file at site root:

```
User-agent: *
Allow: /

Sitemap: https://dreamcoherence.com/sitemap.xml
```

Nothing else. No noindex lines in robots.txt ever. Verify no security header adds X-Robots-Tag: noindex on production (check Netlify headers file and site settings).

## Task 4. sitemap.xml

Hand-maintained is fine at current page count. Drop-in template:

```xml
<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url><loc>https://dreamcoherence.com/</loc></url>
  <url><loc>https://dreamcoherence.com/about/</loc></url>
  <url><loc>https://dreamcoherence.com/journal/</loc></url>
  <url><loc>https://dreamcoherence.com/journal/foundation/</loc></url>
  <url><loc>https://dreamcoherence.com/practice/</loc></url>
  <url><loc>https://dreamcoherence.com/seven-nights/</loc></url>
  <url><loc>https://dreamcoherence.com/threshold/</loc></url>
  <url><loc>https://dreamcoherence.com/give/</loc></url>
</urlset>
```

Rules: absolute HTTPS canonical URLs only; every listed URL returns 200 and is linked from the site; no previews, no netlify.app hostnames; add lastmod only when substantive content changes. Adjust paths to the real route names.

## Task 5. Per-page metadata

Every page head carries, uniquely:

```html
<title>PAGE-SPECIFIC TITLE</title>
<meta name="description" content="PAGE-SPECIFIC INVITATION, ONE OR TWO SENTENCES.">
<link rel="canonical" href="https://dreamcoherence.com/EXACT-PATH/">
<meta property="og:title" content="...">
<meta property="og:description" content="...">
<meta property="og:url" content="https://dreamcoherence.com/EXACT-PATH/">
<meta property="og:image" content="https://dreamcoherence.com/assets/og/PAGE.png">
<meta property="og:type" content="article">  <!-- website for non-essay pages -->
<meta name="twitter:card" content="summary_large_image">
```

Title discipline follows Amendment A5: canonical pages keep canon titles ("Foundation: The Nature of the World and the Work of a Life"); pathway pages may lead with search language ("Dream Recall: The Evening Practice"). The essay thumbnail template (1200×630) doubles as the OG image.

## Task 6. Structured data

Homepage (or About), one script tag:

```html
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@graph": [
    {"@type": "Organization", "name": "Dream Coherence",
     "url": "https://dreamcoherence.com",
     "logo": "https://dreamcoherence.com/assets/mark_1000.png"},
    {"@type": "WebSite", "name": "Dream Coherence",
     "url": "https://dreamcoherence.com"}
  ]
}
</script>
```

Each essay page:

```html
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": "Foundation: The Nature of the World and the Work of a Life",
  "author": {"@type": "Organization", "name": "Dream Coherence"},
  "datePublished": "2026-XX-XX",
  "dateModified": "2026-XX-XX",
  "image": "https://dreamcoherence.com/assets/og/foundation.png",
  "mainEntityOfPage": "https://dreamcoherence.com/journal/foundation/"
}
</script>
```

No FAQ schema, no Course schema until a real course page visibly satisfies it. Validate at search.google.com/test/rich-results.

## Task 7. Search Console

1. Create a **Domain property** for dreamcoherence.com.
2. Add the DNS TXT record it provides at the authoritative DNS provider.
3. After the site tasks above deploy: submit https://dreamcoherence.com/sitemap.xml.
4. URL-inspect: homepage, the Foundation essay, Seven Nights page. Record fetch status, canonical selection, and rendered result.
5. Export the baseline Page Indexing and Performance reports (the doc's Phase 0 evidence capture) so month-over-month movement is measurable.

## Task 8. Launch-gate checks (fold into pre-deploy gates)

- All host variants 301 to apex HTTPS
- robots.txt reachable; sitemap valid and submitted
- View-source on every page shows title, H1, body, and real href links
- No accidental noindex in meta or headers
- Unique titles and descriptions per page
- OG images resolve
- Structured data validates
- 404 page returns actual 404 status
- Existing gates remain: Stripe live link verified, DRIP_TEST_FAST deleted

## Post-launch rhythm (calendared, not now)

One definitive pathway page per month against the four clusters (dream practice, recognition, participation, golden thread), each linked into the school; monthly Search Console review (new queries at positions 5–20, impressions without CTR, cannibalization); refresh from evidence, never from guesswork. The clusters compound through 2027; nothing about them blocks launch.

◯
