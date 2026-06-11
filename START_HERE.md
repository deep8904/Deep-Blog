# Start here

This package is prepared for Deep's existing GitHub, Supabase, and Vercel workflow.

## Project identities

- GitHub: `https://github.com/deep8904/Deep-Blog.git`
- Branch: `main`
- Supabase project ref: `tdfnkuxicxmnbntddoza`
- Deployment: Vercel

## 1. Extract and open the project

The files inside this folder must sit at the root of the `Deep-Blog` repository. Do not create a nested `draft-state-blog/draft-state-blog` structure.

## 2. Connect the GitHub remote

Run:

```bash
./scripts/connect-github.sh
```

The script only configures and verifies the remote. It never commits, pushes, or force-pushes.

## 3. Connect Supabase MCP to Codex

Run:

```bash
./scripts/setup-supabase-mcp.sh
codex mcp login supabase
```

Then run `/mcp` inside Codex and confirm that `supabase` is authenticated.

Optional:

```bash
npx skills add supabase/agent-skills
```

## 4. Run the website

```bash
cp .env.example .env.local
npm install
npm run dev
```

## 5. Give the project to Codex

1. Open the repository root in Codex.
2. Paste the contents of `CODEX_PROMPT.md`.
3. Codex must read `AGENTS.md`, every file in `docs/`, and every image in `public/references/` before changing the project.
4. Codex must verify GitHub, Supabase MCP, typecheck, build, and the Vercel preview before declaring completion.

## 6. Deploy with Vercel

Import `deep8904/Deep-Blog` into Vercel. Keep `main` as production and use feature branches for previews. Add the values from `.env.example` to the correct Vercel environments.

Read `docs/06-github-supabase-vercel.md` for the complete, safety-conscious workflow.

## First blog post

The current website contains no dummy blog posts. Keep the archive empty until Deep's first real article is ready.
