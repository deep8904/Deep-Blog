# Paste this into Codex first

Open the root of the `deep8904/Deep-Blog` repository and treat `CODEX_PROMPT.md` as the controlling brief.

Before changing code:

1. Read `AGENTS.md`.
2. Read every file in `docs/`, including `docs/06-github-supabase-vercel.md`.
3. Review every image in `public/references/` and every preview in `docs/previews/`.
4. Verify the Git remote is `https://github.com/deep8904/Deep-Blog.git` and do not create another repository.
5. Run `npm install`, `npm run typecheck`, and `npm run build`.
6. Add and authenticate the Supabase MCP server:

```bash
codex mcp add supabase --url "https://mcp.supabase.com/mcp?project_ref=swyqdqcqjfylmuzxteqe"
codex mcp login supabase
```

7. Run `/mcp` inside Codex and confirm `supabase` is connected before any database work.
8. Preserve the empty archive. Do not create dummy posts in files or Supabase.
9. Use Vercel previews for feature branches and `main` for production.
10. Complete every task and acceptance criterion in `CODEX_PROMPT.md`.

Finish with the Git status, Supabase MCP/schema status, typecheck/build results, responsive and accessibility results, and Vercel deployment status.
