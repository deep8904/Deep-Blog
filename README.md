# Draft State

Draft State is a personal blog for Deep Chadamiya about software, interface design, games, photography, and the lessons found while making things.

The visual system uses parchment, charcoal, sand, and oxide red; oversized editorial typography; a responsive bento composition; and one lightweight pointer interaction. The archive intentionally contains no fake posts.

## Connected project services

- GitHub repository: `https://github.com/deep8904/Deep-Blog.git`
- GitHub production branch: `main`
- Supabase project ref: `swyqdqcqjfylmuzxteqe`
- Deployment platform: Vercel

The Supabase MCP connection is project-scoped and intended for Codex development access. Read `docs/06-github-supabase-vercel.md` before changing the database or deployment configuration.

## Included

- Home, Notes, About, article, 404, sitemap, and robots routes
- File-based Markdown publishing and an unpublished post template
- Responsive desktop, tablet, and phone layouts
- Pointer-responsive hero visual with reduced-motion support
- Complete future-article typography
- Supplied visual references and revised design previews
- Writer-blog research, design-system, content, motion, build, and integration documentation
- GitHub and Supabase setup scripts
- A production-focused Codex prompt
- An environment-variable template for local and Vercel setup

## First-time setup

```bash
cp .env.example .env.local
npm install
npm run dev
```

Open the local URL printed by Next.js.

## Connect GitHub

From the extracted project root:

```bash
./scripts/connect-github.sh
```

The configured origin is:

```text
https://github.com/deep8904/Deep-Blog.git
```

Review, commit, and push manually after the project passes typecheck and build.

## Connect Supabase MCP to Codex

```bash
codex mcp add supabase --url "https://mcp.supabase.com/mcp?project_ref=swyqdqcqjfylmuzxteqe"
codex mcp login supabase
```

Run `/mcp` inside Codex and confirm authentication.

Optional Agent Skills:

```bash
npx skills add supabase/agent-skills
```

The convenience script `./scripts/setup-supabase-mcp.sh` adds the MCP server and prints the remaining steps.

## Deploy to Vercel

Import `deep8904/Deep-Blog` in Vercel, keep the root directory as `.`, confirm Next.js detection, and configure the variables from `.env.example` for the needed Production, Preview, and Development environments.

- `main` is the production branch.
- Other branches and pull requests should receive preview deployments.
- After the first production deployment, update `NEXT_PUBLIC_SITE_URL` to the canonical production URL and redeploy.

## Publish the first note

The current implementation uses local Markdown until a Supabase content migration is deliberately approved and implemented.

1. Duplicate `content/notes/_post-template.md`.
2. Rename it with a lowercase kebab-case filename.
3. Complete the frontmatter.
4. Write the article in Markdown.
5. Change `draft: true` to `draft: false` only when ready.
6. Run `npm run typecheck` and `npm run build`.

Files beginning with `_` and notes marked `draft: true` are excluded from the site.

## Required validation

```bash
npm run typecheck
npm run build
```

Also verify:

```bash
git remote -v
git status
```

## Project map

```text
app/                    Routes, metadata, SEO, and global styling
components/             Shared UI and the interactive field
content/notes/          Markdown notes and unpublished template
docs/                   Research, design, content, build, and integration docs
docs/previews/          Screenshots of the revised design
lib/notes.ts            File-system note loader
public/references/      Uploaded reference screenshots
scripts/                Safe GitHub and Supabase MCP setup helpers
site.config.ts          Site identity and navigation
.env.example            Local/Vercel variable names without secrets
CODEX_PROMPT.md         Complete Codex build and production brief
```
