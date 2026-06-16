# 05 — Content and Infrastructure Preservation

## Protected assets and behavior

Do not delete or rewrite:
- `content/notes/**`
- the published first article
- Markdown parsing and metadata logic
- article slugs
- sitemap and robots behavior
- JSON-LD and SEO metadata
- GitHub remote/configuration
- Vercel configuration
- environment-variable templates
- Supabase MCP documentation
- image-slot comments in the article
- real names, dates, organizations, and acknowledgments

## Content lock

The first article’s prose is locked. Frontend work may change HTML wrappers and styles,
but may not:
- summarize
- paraphrase
- shorten
- reorder sections
- remove paragraphs
- change names or dates
- manufacture images or captions

## What may be deleted

- old visual-only components
- old `InteractiveField`
- old cream/orange panels
- old bento CSS
- old decorative crosshair
- old empty-state copy that is no longer true
- unused visual tokens
- dead styles
- duplicate presentation components

## Data rules

- derive article count from real Markdown data
- derive reading time from real article text
- hide optional UI when data is absent
- never show fake metrics
- never show fake testimonials
- never show fake social links
- never create fake posts to fill the layout
