# Deep Blog — Nitro-Inspired Frontend Rebuild Package

This package is a complete handoff for rebuilding only the presentation layer of
`deep8904/Deep-Blog`.

## Start here

1. Open the existing repository in Claude Code.
2. Upload or copy the `references/` folder into the Claude session.
3. Paste `CLAUDE_CODE_MASTER_PROMPT.md`.
4. Let Claude audit before deleting any presentational code.
5. Review the generated implementation on a new branch before merging.

## What “nuke the frontend” means here

Delete or replace the current visual components, page compositions, and global styling.
Do **not** delete the Markdown article system, metadata loader, content files, routes,
sitemap, robots configuration, Vercel setup, GitHub setup, Supabase documentation, or
the published first article.

## Package contents

- `CLAUDE_CODE_MASTER_PROMPT.md` — controlling build prompt
- `CLAUDE_CODE_MASTER_PROMPT.txt` — plain-text copy
- `docs/01-reference-analysis.md` — what to learn from the reference
- `docs/02-design-system.md` — custom palette, typography, grid, spacing
- `docs/03-page-blueprints.md` — Home, Writing, Article, About, and 404
- `docs/04-motion-system.md` — Motion for React implementation spec
- `docs/05-content-preservation.md` — protected content and infrastructure rules
- `docs/06-acceptance-checklist.md` — final quality gate
- `implementation-templates/design-tokens.css`
- `implementation-templates/motion-presets.ts`
- `references/` — supplied screenshots and a contact sheet

## Reference boundary

The reference is used for its visual grammar: near-black canvas, thin grid, compact
navigation, asymmetric whitespace, large type, media-led rows, tiny annotations, and
restrained motion. Do not copy the Nitro name, exact text, exact assets, exact layout
measurements, or orange project artwork.
