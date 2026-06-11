# GitHub, Supabase, and Vercel handoff

This document is the source of truth for connecting Draft State to Deep's development services.

## Fixed project identities

- GitHub repository: `https://github.com/deep8904/Deep-Blog.git`
- GitHub repository name: `deep8904/Deep-Blog`
- Default and production branch: `main`
- Supabase project ref: `swyqdqcqjfylmuzxteqe`
- Supabase MCP URL: `https://mcp.supabase.com/mcp?project_ref=swyqdqcqjfylmuzxteqe`
- Intended deployment platform: Vercel

Do not create a second GitHub repository, a second Supabase project, or a disconnected Vercel project unless Deep explicitly requests it.

## 1. Put the supplied project in the GitHub repository

The repository is currently empty. Use one of these workflows.

### Workflow A — clone first, then copy the package

```bash
git clone https://github.com/deep8904/Deep-Blog.git
cd Deep-Blog
```

Copy the contents of the supplied `draft-state-blog` folder into the repository root. Do not nest the application one directory deeper.

Then run:

```bash
npm install
npm run typecheck
npm run build
git add .
git commit -m "Build Draft State personal blog"
git push -u origin main
```

### Workflow B — start from the extracted package

From the project root:

```bash
git init -b main
git remote add origin https://github.com/deep8904/Deep-Blog.git
git add .
git commit -m "Build Draft State personal blog"
git push -u origin main
```

If `origin` already exists, use:

```bash
git remote set-url origin https://github.com/deep8904/Deep-Blog.git
```

Verify before pushing:

```bash
git remote -v
git branch --show-current
git status
```

Never force-push unless Deep explicitly approves it.

## 2. Connect Codex to the project-scoped Supabase MCP server

Run the exact setup command:

```bash
codex mcp add supabase --url "https://mcp.supabase.com/mcp?project_ref=swyqdqcqjfylmuzxteqe"
```

Authenticate:

```bash
codex mcp login supabase
```

Inside Codex, run:

```text
/mcp
```

Confirm that the `supabase` server is connected and authenticated before asking Codex to inspect or change the database.

Optional Supabase Agent Skills:

```bash
npx skills add supabase/agent-skills
```

### Supabase safety rules

- The MCP connection is scoped to project `swyqdqcqjfylmuzxteqe`; do not remove the `project_ref` parameter.
- Inspect the existing schema before creating tables, policies, storage buckets, functions, or migrations.
- Do not insert sample posts, fake authors, placeholder categories, fake subscriber records, or analytics data.
- Make database changes through versioned SQL migrations stored in `supabase/migrations/`.
- Prefer a development branch or a non-production project for destructive experimentation.
- If the project already contains real data, use read-only MCP mode during the audit:

```bash
codex mcp add supabase-readonly --url "https://mcp.supabase.com/mcp?project_ref=swyqdqcqjfylmuzxteqe&read_only=true"
```

- Never expose a Supabase service-role key in browser code, a `NEXT_PUBLIC_*` variable, screenshots, documentation, commits, or chat output.
- Public browser access must be protected by Row Level Security.
- The MCP connection is a development tool; it does not automatically require the public website to use Supabase at runtime. Codex must follow the content architecture approved for the project.

## 3. Runtime environment variables

Copy `.env.example` to `.env.local` for local development:

```bash
cp .env.example .env.local
```

Required today:

```text
NEXT_PUBLIC_SITE_URL
```

Only if Codex implements Supabase as the runtime content source:

```text
NEXT_PUBLIC_SUPABASE_URL
NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY
```

The publishable key is designed for client-visible use when Row Level Security is correctly configured. Any privileged server key must remain server-only, must not use the `NEXT_PUBLIC_` prefix, and must not be committed.

## 4. Connect the GitHub repository to Vercel

Recommended dashboard workflow:

1. Sign in to Vercel with the GitHub account that owns `deep8904/Deep-Blog`.
2. Choose **Add New → Project**.
3. Import `deep8904/Deep-Blog`.
4. Keep the project root as `.`.
5. Confirm that Vercel detects **Next.js**.
6. Keep the install and build commands on their Next.js defaults unless the build audit shows a real need to override them.
7. Add the environment variables from `.env.example` to the appropriate Vercel environments.
8. Deploy the first preview.
9. After the production URL is known, set `NEXT_PUBLIC_SITE_URL` to that canonical URL and redeploy.

Vercel CLI alternative:

```bash
npx vercel login
npx vercel link
npx vercel
npx vercel --prod
```

### Deployment behavior

- `main` is the production branch.
- Pushes to `main` create production deployments.
- Pull requests and non-production branches create preview deployments.
- Configure required variables for Production, Preview, and Development as appropriate.
- Use preview deployments for responsive, accessibility, content, and database-integration checks before merging.

## 5. Final verification

Before calling the project complete, Codex must report:

```bash
git remote -v
git status
npm run typecheck
npm run build
```

It must also verify:

- GitHub remote is `https://github.com/deep8904/Deep-Blog.git`
- Current branch is `main` or a clearly named feature branch targeting `main`
- Supabase MCP appears authenticated in `/mcp`
- No secret is committed
- No dummy post exists in Markdown or Supabase
- Vercel preview works
- Production uses the correct canonical site URL
