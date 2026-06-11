# Codex prompt — connect, build, and production-review Draft State

You are working on **Draft State**, a personal blog for Deep Chadamiya. Act as a senior editorial web designer, content designer, front-end engineer, Supabase engineer, accessibility reviewer, performance specialist, and deployment reviewer.

## Fixed project services

Use these existing services. Do not create substitutes:

- GitHub repository: `deep8904/Deep-Blog`
- Git remote: `https://github.com/deep8904/Deep-Blog.git`
- Default and production branch: `main`
- Supabase project ref: `swyqdqcqjfylmuzxteqe`
- Supabase MCP URL: `https://mcp.supabase.com/mcp?project_ref=swyqdqcqjfylmuzxteqe`
- Deployment platform: Vercel

The GitHub repository is the source of truth. Work from the repository root, not from a duplicate repository or a nested application folder.

## Objective

Production-harden Draft State as a fast, distinctive personal blog where Deep writes from real experience across:

- Software engineering and product building
- Interface and interaction design
- Games and game development
- Photography and visual observation

The central content idea is:

**Deep makes things, then writes to understand what they taught him.**

This is not a startup landing page, agency website, portfolio template, generic developer blog, or AI-generated thought-leadership site.

## Required first steps

Perform these checks before changing code:

1. Confirm the working directory is the repository root containing `package.json`.
2. Read `AGENTS.md`.
3. Read every document in `docs/`, especially `docs/06-github-supabase-vercel.md`.
4. Review every supplied image in `public/references/`.
5. Review the screenshots in `docs/previews/`.
6. Inspect the existing application before proposing changes.
7. Verify the Git configuration:

```bash
git remote -v
git branch --show-current
git status
```

8. The expected origin is:

```text
https://github.com/deep8904/Deep-Blog.git
```

If the remote is missing or incorrect, configure it without force-pushing:

```bash
git remote add origin https://github.com/deep8904/Deep-Blog.git
```

or:

```bash
git remote set-url origin https://github.com/deep8904/Deep-Blog.git
```

9. Install and validate the current project:

```bash
npm install
npm run typecheck
npm run build
```

10. Record any existing failures before making changes.

## Required Supabase MCP connection

Add the project-scoped Supabase MCP server to Codex using this exact command:

```bash
codex mcp add supabase --url "https://mcp.supabase.com/mcp?project_ref=swyqdqcqjfylmuzxteqe"
```

Authenticate:

```bash
codex mcp login supabase
```

Then run this inside Codex:

```text
/mcp
```

Do not begin database work until the `supabase` MCP server is shown as connected and authenticated.

Optional Agent Skills:

```bash
npx skills add supabase/agent-skills
```

### Supabase safety requirements

- Keep the MCP server scoped to project `swyqdqcqjfylmuzxteqe`.
- Inspect the current project schema, migrations, policies, functions, and storage before changing anything.
- Do not insert a sample article, fake user, placeholder category, subscriber, page view, testimonial, or analytics event.
- Do not expose or print access tokens, service-role keys, database passwords, Vercel tokens, or other secrets.
- Never place a privileged Supabase key in `NEXT_PUBLIC_*` or client-side code.
- Use Row Level Security for every table that can be reached by browser clients.
- Store database changes as reviewed, versioned SQL migrations in `supabase/migrations/`.
- Avoid destructive changes. If a destructive change becomes necessary, document the migration, backup implication, and rollback before execution.
- If real data is already present, audit through a read-only project-scoped MCP connection before permitting writes:

```bash
codex mcp add supabase-readonly --url "https://mcp.supabase.com/mcp?project_ref=swyqdqcqjfylmuzxteqe&read_only=true"
```

- The MCP connection is a development tool. Do not replace the current Markdown publishing system solely because Supabase is connected.
- If Deep explicitly approves Supabase as the runtime content source, design the schema and migration path first, preserve the empty archive, and maintain a safe rollback path.

## GitHub workflow

- Do not create another repository.
- Use `main` as the production branch.
- Use a clearly named feature branch for material work, such as `codex/blog-production-pass`.
- Keep commits focused and understandable.
- Do not commit generated build output, local environment files, tokens, or secrets.
- Never force-push unless Deep explicitly approves it.
- Before completion, show the final `git status` and summarize commits or uncommitted changes.

## Vercel deployment requirements

Connect Vercel to the existing GitHub repository `deep8904/Deep-Blog`.

Expected configuration:

- Framework: Next.js
- Root directory: `.`
- Production branch: `main`
- Install command: Vercel default for the detected package manager
- Build command: `npm run build` or Vercel's detected Next.js default
- Preview deployments: pull requests and non-production branches
- Production deployments: pushes to `main`

Configure environment variables from `.env.example` in the appropriate Vercel environments.

Required today:

```text
NEXT_PUBLIC_SITE_URL
```

Only if a runtime Supabase integration is implemented:

```text
NEXT_PUBLIC_SUPABASE_URL
NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY
```

After the first production deployment, set `NEXT_PUBLIC_SITE_URL` to the canonical production domain and redeploy so metadata, sitemap, and canonical URLs are correct.

Do not expose server-only credentials through `NEXT_PUBLIC_*`. Test a Vercel preview before merging to `main`.

## Research and reference interpretation

The project includes documented research from personal writer sites:

- Craig Mod
- Maggie Appleton
- Steph Ango
- Robin Sloan

It also includes the original Framer references:

- Write
- Nitro
- Opus

Use these references for principles, not imitation.

Preserve:

- A plain, personal introduction to the writer
- Writing-first information architecture
- Easy access to the archive
- Strong serif/sans-serif editorial typography
- Responsive bento composition
- Authored details and controlled asymmetry
- Direct copy that explains what Deep actually writes about

Do not copy any exact composition, text, assets, or branded design from the references.

## Brand and visual direction

### Identity

- Name: Draft State
- Author: Deep Chadamiya
- Purpose: A personal blog about making things and paying attention

### Color system

Preserve the warm editorial palette:

- Canvas: `#EEE8DE`
- Paper: `#FAF6EE`
- Paper Strong: `#FFFDF8`
- Sand: `#DED2C0`
- Ink: `#1B1A17`
- Charcoal: `#1D1E1B`
- Oxide accent: `#BF4F2F`
- Oxide deep: `#8E3320`
- Oxide soft: `#EDC4B4`

Do not restore the previous electric-blue palette. Do not turn the site into a generic beige template. The oxide interaction field, charcoal cards, scale changes, and editorial geometry must maintain a distinctive identity.

### Typography

- Geist Variable for structural and display sans-serif type
- Newsreader Variable for reflective, personal, and long-form text
- Preserve strong scale contrast and deliberate line wrapping
- Prioritize future article readability over decorative effects

## Content rules

- Do not create a sample blog post in Markdown or Supabase.
- Do not add fake titles, dates, reading times, categories, testimonials, metrics, subscriber counts, employers, clients, social links, email addresses, or newsletter behavior.
- Keep the archive empty until a real article is published.
- Preserve the direct first-person voice.
- Do not reintroduce vague manifesto phrases or product-marketing language.
- Do not use lorem ipsum.

### Existing homepage meaning to preserve

- Deep is a software engineer with interests in interfaces, games, and photography.
- He writes to understand and preserve lessons from the work.
- The first essay is in progress.
- The archive contains no filler.

Supporting copy may be edited for clarity, rhythm, grammar, and responsive line breaks, but not replaced by generic branding language.

## Technical requirements

- Next.js App Router
- TypeScript strict mode
- Prefer Server Components
- Preserve metadata, sitemap, robots, 404, and dynamic article metadata
- Keep the self-hosted Fontsource strategy or an equally performant local approach
- No UI component library
- Do not add Tailwind merely to replace the existing custom design system
- Do not add animation packages for effects achievable with CSS or a small client component
- Preserve local Markdown publishing unless a documented Supabase runtime migration is explicitly approved
- Files beginning with `_` and notes with `draft: true` must never be published or included in static params

## UX and layout requirements

### Homepage

- Preserve the bento hero and its hierarchy
- Keep the main introduction immediately readable
- Keep the oxide “MAKE / NOTICE / WRITE” interaction lightweight and decorative
- Keep the current-status and subject cards meaningful
- Keep the archive prominent
- Preserve the personal About preview

### Notes page

- Keep the archive simple, scannable, and writing-first
- Preserve the honest zero-post state
- When posts exist, metadata must remain secondary to titles and descriptions

### About page

- Keep “Hi, I’m Deep” direct and human
- Preserve the clear description of software, design, games, and photography
- Avoid turning the page into a résumé unless Deep later requests that

### Article pages

Complete and verify styles for:

- Headings
- Paragraphs
- Links
- Ordered and unordered lists
- Blockquotes
- Inline code
- Code blocks
- Images
- Captions when implemented
- Horizontal rules
- Tables if added

Maintain a comfortable reading measure and strong mobile typography.

## Motion requirements

- Honor `prefers-reduced-motion`
- Use transform and opacity for animated elements
- Do not use scroll hijacking
- Do not run a continuous JavaScript animation loop
- Do not animate large blur filters
- Keep pointer updates throttled with `requestAnimationFrame`
- Add no intro animation that delays reading
- Avoid cursor replacement, particle systems, autoplay video, Three.js, and WebGL

## Accessibility requirements

- Logical heading hierarchy
- Semantic landmarks
- Keyboard-accessible navigation and links
- Strong focus-visible states
- WCAG AA body-text and control contrast
- Decorative graphics hidden from assistive technology
- No information communicated only through color
- Test at 200% zoom
- Ensure the mobile header and navigation remain understandable

## Performance requirements

- Keep the homepage client bundle small
- Prevent layout shift
- Avoid unoptimized full-screen imagery
- Use responsive images and `next/image` when real images are introduced
- Ensure the interaction remains smooth on a mid-range phone
- Target production Lighthouse scores of at least:
  - Performance: 90
  - Accessibility: 95
  - Best Practices: 95
  - SEO: 95

## Test sizes

Review at minimum:

- 1440 × 1000
- 1024 × 768
- 768 × 1024
- 390 × 844
- 320 × 568

The layouts must recompose intentionally rather than simply shrink.

## Required tasks

1. Audit the current implementation against `docs/` and the reference screenshots.
2. Verify the GitHub origin and branch strategy.
3. Authenticate and verify the project-scoped Supabase MCP connection.
4. Inspect Supabase safely and report the existing schema without fabricating data.
5. Fix technical, responsive, accessibility, and browser issues.
6. Refine spacing, typography, and micro-interactions only where the result is measurably better.
7. Protect the direct content voice.
8. Verify the zero-post state in every configured content source.
9. Verify behavior with one temporary local non-draft note, then remove it before completion. Do not insert a test post into Supabase production data.
10. Verify draft exclusion and filename sanitization.
11. Run typecheck and production build.
12. Capture updated desktop and mobile screenshots.
13. Create or verify a Vercel preview deployment.
14. Report changes, test results, Git status, Supabase audit status, and deployment status.

## Definition of done

The task is complete only when:

- The project is connected to `https://github.com/deep8904/Deep-Blog.git`
- The Supabase MCP server is authenticated and project-scoped
- No secret is committed or exposed
- The site builds without errors
- No fake blog data appears anywhere
- The warm color system is preserved
- Desktop, tablet, and phone layouts feel intentionally composed
- The hero is distinctive, fast, and accessible
- The site sounds like a real person rather than a template
- The archive remains honest when empty
- Publishing instructions are accurate
- Keyboard and reduced-motion behavior are verified
- A Vercel preview is checked before production
- `main` remains the production branch
- No unnecessary dependency has been added

Finish with:

- A concise change log
- Git remote, branch, and status results
- Supabase MCP authentication and schema-audit results
- Typecheck and build results
- Responsive test results
- Accessibility and reduced-motion test results
- Vercel preview and production status
- Any decisions that require real information from Deep

Do not ask broad questions unless a missing real fact blocks implementation. Make the strongest safe decision supported by the supplied materials.
