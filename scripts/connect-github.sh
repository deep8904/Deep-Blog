#!/usr/bin/env bash
set -euo pipefail

REPO_URL="https://github.com/deep8904/Deep-Blog.git"

if [[ ! -d .git ]]; then
  git init -b main
fi

if git remote get-url origin >/dev/null 2>&1; then
  git remote set-url origin "$REPO_URL"
else
  git remote add origin "$REPO_URL"
fi

echo "GitHub remote configured:"
git remote -v

echo
echo "Current branch:"
git branch --show-current

echo
echo "Review the files, then commit and push manually. This script never pushes or force-pushes."
