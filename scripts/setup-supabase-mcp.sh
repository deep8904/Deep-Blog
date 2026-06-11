#!/usr/bin/env bash
set -euo pipefail

codex mcp add supabase --url "https://mcp.supabase.com/mcp?project_ref=swyqdqcqjfylmuzxteqe"

cat <<'MESSAGE'

Supabase MCP has been added to Codex.

Next:
  1. Run: codex mcp login supabase
  2. Open Codex in the project.
  3. Run /mcp and verify that "supabase" is authenticated.

Optional Agent Skills:
  npx skills add supabase/agent-skills
MESSAGE
