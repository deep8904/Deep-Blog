# Agent instructions for Draft State

## Non-negotiable product rules

1. Do not add dummy posts, fake testimonials, invented metrics, placeholder clients, fabricated social links, or an unconnected newsletter form.
2. Preserve the direct first-person voice. The site should sound like Deep, not like a startup, agency, or AI-generated manifesto.
3. Preserve the warm editorial palette: parchment, charcoal, sand, and oxide red. Do not restore electric blue.
4. Preserve the bento-grid composition while ensuring every card communicates useful information.
5. Treat the empty archive as a designed, honest state until a real note is published.
6. Keep animation lightweight and honor `prefers-reduced-motion`.
7. Do not introduce a UI library, generic dashboard styling, heavy motion dependencies, WebGL, or autoplay video.
8. Keep accessibility, semantic HTML, responsive hierarchy, readability, and performance as acceptance criteria.

## Fixed external services

- GitHub repository: `deep8904/Deep-Blog`
- Git remote: `https://github.com/deep8904/Deep-Blog.git`
- Default and production branch: `main`
- Supabase project ref: `swyqdqcqjfylmuzxteqe`
- Supabase MCP URL: `https://mcp.supabase.com/mcp?project_ref=swyqdqcqjfylmuzxteqe`
- Deployment platform: Vercel

Do not create duplicate repositories, Supabase projects, or disconnected production deployments.

## Technical rules

- Use Next.js App Router and TypeScript.
- Prefer Server Components; use Client Components only for real interactions.
- The current content source is `content/notes`. Do not silently replace it with Supabase merely because an MCP connection is available.
- If a Supabase runtime content system is approved, inspect the existing schema first, create versioned migrations, preserve the zero-post state, and document the migration and rollback path.
- Never publish files beginning with `_` or notes with `draft: true`.
- Read all files in `docs/` before changing the design, content system, database, Git workflow, or deployment.
- Run `npm run typecheck` and `npm run build` after meaningful changes.
- Use feature branches and preview deployments for material changes.
- Never force-push or rewrite shared history without Deep's explicit approval.
- Never commit `.env.local`, access tokens, service-role keys, Vercel tokens, or other secrets.
- Never put a privileged Supabase key in `NEXT_PUBLIC_*`.
- Public Supabase access must use Row Level Security.
- Store database changes in `supabase/migrations/` if database work is introduced.
