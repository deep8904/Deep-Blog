# CLAUDE CODE MASTER PROMPT — NUKE AND REBUILD THE FRONTEND

You are working in:

`https://github.com/deep8904/Deep-Blog.git`

The user has explicitly approved a complete presentation-layer rebuild.

## The command

**Nuke the current frontend visual system and rebuild it from the ground up using the
six uploaded responsive Nitro reference screenshots as the primary visual reference.**

The reference URL is:

`https://nitro.framer.website/`

This is not a request for a minor revision. The current cream, orange, rounded-card,
mixed-serif frontend has been rejected.

However, “nuke the frontend” does **not** mean deleting content, data, routes, SEO, or
infrastructure.

---

# 1. FIRST: PROTECT THE WORK

Before deleting or replacing anything:

1. Run `git status`.
2. Record the current branch and commit.
3. Create a new branch:

```bash
git switch -c redesign/night-field-frontend
```

4. If there are uncommitted user changes, do not discard them. Report them and preserve
   them before continuing.
5. Read every file in the repository that controls:
   - routes
   - Markdown content
   - article metadata
   - sitemap
   - robots
   - JSON-LD
   - site configuration
   - shared layout
   - global CSS
   - page components
   - Vercel setup
   - environment variables
6. Read every document in the handoff package:
   - `docs/01-reference-analysis.md`
   - `docs/02-design-system.md`
   - `docs/03-page-blueprints.md`
   - `docs/04-motion-system.md`
   - `docs/05-content-preservation.md`
   - `docs/06-acceptance-checklist.md`
7. Review all six files in `references/`.

Do not start coding before completing this audit.

---

# 2. COPYRIGHT AND REFERENCE BOUNDARY

Use the reference for its design grammar:

- near-black canvas
- compact navigation
- oversized clean sans-serif type
- thin vertical and horizontal grid lines
- asymmetrical layouts
- tiny coordinate-like annotations
- strong media-led article rows
- responsive recomposition
- masked reveals
- line-drawing motion
- understated hover behavior

Do **not** copy:

- Nitro name or wordmark
- exact text
- exact images
- exact project names
- exact orange, blue, or yellow palette
- exact page measurements
- Framer badges
- promotional widgets
- proprietary assets
- exact source code

The result must be unmistakably Deep Chadamiya’s personal blog.

---

# 3. DELETE OR REPLACE THE OLD PRESENTATION LAYER

Remove or replace, after verifying that it is presentation-only:

- cream/parchment canvas
- orange panels
- blue tokens
- large rounded bento cards
- current `InteractiveField`
- decorative cursor follower
- large serif italic hero treatment
- “MAKE / NOTICE / WRITE”
- old crosshair panel
- old empty-state panel
- old bento-only CSS
- old visual-only components
- dead CSS and unused tokens
- duplicate page presentation components

Do not leave hidden remnants of the old system.

Use search to prove that old orange/blue/cream design tokens and rejected copy are gone.

---

# 4. PROTECT CONTENT AND INFRASTRUCTURE

Do not delete or rewrite:

- `content/notes/**`
- the first published article
- article slug and route
- article prose
- image-slot comments
- Markdown parser
- note metadata
- reading-time logic
- sitemap
- robots
- canonical URLs
- JSON-LD
- GitHub configuration
- Vercel compatibility
- Supabase MCP documentation
- environment templates
- real names, dates, organizations, and acknowledgments

The article content is locked. You may change wrappers and styles, but not the writing.

Do not migrate content to Supabase.
Do not create fake content.
Do not create fake photographs.
Do not create missing social links.
Do not create fake metrics.

---

# 5. BUILD THE NEW “NIGHT FIELD” SYSTEM

Use the exact semantic palette in `docs/02-design-system.md` and
`implementation-templates/design-tokens.css`.

Core palette:

```css
--nf-canvas: #090D0A;
--nf-canvas-soft: #0D120E;
--nf-surface: #121813;
--nf-surface-raised: #171F19;
--nf-surface-quiet: #1D251F;

--nf-paper: #ECE9DF;
--nf-paper-soft: #C8C8BE;
--nf-muted: #7C857D;
--nf-faint: #555E57;

--nf-signal: #78A889;
--nf-signal-bright: #A9D1B5;
--nf-signal-dark: #263A2C;

--nf-fig: #8F7488;
--nf-fig-bright: #BCA2B4;
--nf-fig-dark: #342A32;

--nf-lichen: #B7B879;
--nf-danger: #B77272;

--nf-line: rgba(236, 233, 223, 0.10);
--nf-line-strong: rgba(236, 233, 223, 0.21);
--nf-line-signal: rgba(120, 168, 137, 0.55);
--nf-focus: #C5E1CD;
```

Rules:

- no gradients
- no orange
- no blue
- no pure black
- no pure white
- no named/famous palette
- no random hexadecimal values in components
- use semantic tokens everywhere
- large color blocks use deep signal/fig surfaces only
- bright accents are micro accents

---

# 6. GLOBAL LAYOUT

Build a near-full-width editorial shell.

```css
--page-max: 1760px;
--page-gutter: clamp(18px, 3.2vw, 64px);
```

Desktop:
- 12-column grid
- thin visible guide lines only in selected sections
- content uses most of the viewport
- no giant left/right blank gutters

Tablet:
- 6 columns
- 24px gutters

Phone:
- 4 columns
- 18px gutters

Use `minmax(0, 1fr)` where needed to prevent overflow.

No page may overflow horizontally at:
- 1728
- 1440
- 1280
- 1024
- 768
- 430
- 390
- 360

---

# 7. TYPOGRAPHY

Use the local fonts already installed:

- Geist Variable: primary
- Newsreader Variable: captions, brief pull quotes, rare emphasis only

Do not use Newsreader for a full giant hero.

Use:

```css
--type-display: clamp(4rem, 7.6vw, 9.5rem);
--type-page: clamp(3rem, 5.8vw, 7rem);
--type-feature: clamp(2.25rem, 4.4vw, 5.4rem);
--type-section: clamp(1.75rem, 3vw, 3.4rem);
--type-lede: clamp(1.15rem, 1.45vw, 1.45rem);
--type-body: clamp(1rem, 0.3vw + 0.94rem, 1.12rem);
--type-small: 0.82rem;
--type-micro: 0.7rem;
```

Requirements:
- `text-wrap: balance` for display headings
- `text-wrap: pretty` for paragraphs
- deliberate line breaks
- no one-word orphan lines when practical
- body line length 62–70ch
- readable at 200% zoom

---

# 8. SHARED HEADER

Create a new compact header.

Left:
- `.deep` or `deep.chadamiya`

Right:
- Home
- Writing
- About

Contact is allowed only if a real route and real contact data exist.

Appearance:
- transparent on canvas
- thin bottom rule
- small wordmark
- small navigation
- active link uses `--nf-signal`
- hover underline animates
- no circular avatar
- no pill navigation
- no cream bar

Mobile:
- wordmark left
- `menu` right
- accessible overlay
- focus trap
- Escape closes
- body scroll locks while open
- 44px targets

---

# 9. HOME PAGE

## Hero

Create a full-width dark hero with a subtle technical grid.

Do not use a separate decorative right card.

Content must use existing truthful site copy. A preferred structure is:

Small intro:
`Deep Chadamiya — software, interface design, games, and photography`

Large statement:
`I build things, then write about what changed my mind.`

Supporting line:
`A personal notebook for projects, technical lessons, game design, photography, and the details worth returning to.`

Only use this copy if it remains consistent with the user’s current site content. Small
wording refinements are allowed at the interface level. Do not rewrite the article.

Dynamic subject line:
- software
- interfaces
- games
- photography

The subject line may rotate with a masked vertical transition, but:
- it must pause long enough to read
- it must stop or simplify for reduced motion
- it must not cause layout shift

## Hero composition

- heading occupies 7–8 columns
- small annotations occupy the side rail
- one or two grid markers
- no huge decorative circles
- no pointer tracking
- no orange panel
- hero entrance finishes within about 1.2 seconds

## Featured article

Use the first real article as the main object below the hero.

Title:
`Three Days, One Castle, and a Team Called Next Wave`

Use real description, date, topics, and calculated reading time.

Structure:
- top metadata strip
- large title
- arrow
- description
- optional real image

Until a real image exists:
- render a typography-led feature
- optionally add a small CSS/SVG castle-path diagram
- do not create a fake photo
- do not show an empty image box
- do not reference a missing image file

The entire feature is one accessible link.

## About preview

- one concise real paragraph
- real image only if it exists
- link to About
- asymmetric layout

## Latest writing

- show real posts only
- with one post, do not duplicate it into multiple identical cards
- show the feature once and a compact archive link
- no giant empty-state card

---

# 10. WRITING PAGE

Rebuild `/notes` or the current writing route.

Page title:
`writing`

Use the route’s actual naming conventions, but visible navigation should say `Writing`.

Structure:
1. compact title and description
2. real published count
3. feature row for the first article
4. later articles as alternating media/text rows
5. compact footer

Article rows:
- image/diagram on one side
- title and metadata on the other
- alternate alignment on desktop
- stack consistently on phone
- thin separators
- tiny index labels
- arrow hover
- one accessible link per row

With one article:
- show one excellent row
- no fake categories
- no empty filters
- no “Nothing here yet”
- no zero count
- no huge blank archive region

---

# 11. ARTICLE PAGE

Keep the article statically rendered.

## Article header
- Back to Writing
- topics
- title
- description
- author
- date
- reading time
- thin guide lines
- optional hero image only when real

## Body
- 64–70ch
- dark reading surface
- body uses `--nf-paper-soft`
- headings use `--nf-paper`
- links use `--nf-signal-bright`
- blockquote has a left signal rule
- lists have clear spacing
- images can break out wider
- captions may use Newsreader
- image-slot comments remain invisible

Do not put a visible technical grid directly behind long paragraphs.

## End navigation
- Back to Writing
- About Deep
- no fake related posts
- no fake previous/next article

---

# 12. ABOUT PAGE

Rebuild using the reference’s information architecture, not its fake content.

Use only real information already present in the repository.

Possible sections:
- page title
- personal statement
- areas of practice
- location if configured
- real timeline if available
- skills/tools from real data
- photography or portrait only if a real image exists

Do not invent:
- years of experience
- availability
- companies
- roles
- location
- clients
- social handles

Use ruled rows, tiny labels, and asymmetry.

---

# 13. 404 PAGE

Create a new 404 inspired by the reference grammar:

- small `oops`
- giant `4 0 4` aligned to the grid
- one thin accent outline
- `Back home` action
- compact footer
- subtle line drawing
- no copied reference branding

---

# 14. CONTACT PAGE

Do not create a fake form.

Only build or expose `/contact` when:
- a real email or submission mechanism already exists, and
- the form has real server-side handling or a truthful mailto workflow.

Otherwise:
- omit Contact from navigation
- use a real contact link on About only when data exists
- document the missing information

---

# 15. MOTION

The repository already contains `motion`. Do not install another animation library.

Use:

```ts
import {
  motion,
  useReducedMotion,
  useScroll,
  useTransform
} from "motion/react";
```

Follow `docs/04-motion-system.md` and
`implementation-templates/motion-presets.ts`.

Required motion language:

## Page entrance
- header line draws
- wordmark/nav fade in
- hero lines reveal from masks
- annotations appear last

## Grid
- lines draw once on entry
- low contrast
- no continuous loops

## Article feature
- masked/clip-path reveal
- metadata fade
- arrow slide

## Scroll
- optional 4–6% media translation
- optional guide-line progress marker
- no scroll-jacking

## Hover
- title x: 4px
- arrow x: 8px
- image max scale: 1.015
- 180–240ms

## Reduced motion
- disable transforms
- disable parallax
- disable clip-path animation
- keep content immediately visible

Do not:
- track the pointer
- add 3D tilt
- add large spring bounce
- loop decorative animations
- animate every paragraph
- make every page a client component

Create small client-only motion wrappers.

---

# 16. COMPONENT ARCHITECTURE

Suggested components:

- `SiteHeader`
- `MobileMenu`
- `SiteFooter`
- `TechnicalGrid`
- `GridMarker`
- `MaskedHeading`
- `SubjectRotator`
- `FeaturedArticle`
- `ArticleRow`
- `AboutPreview`
- `ArticleHeader`
- `ArticleBody`
- `MotionReveal`
- `PageIntro`
- `BackLink`

Use semantic HTML and server components by default.

One `h1` per page.
Logical heading order.
No generic UI framework.
No shadcn card system.
No icon package for two arrows.

---

# 17. ACCESSIBILITY

Verify:

- WCAG AA contrast
- visible keyboard focus
- semantic landmarks
- skip link
- one h1
- real time elements
- logical reading order
- 44px touch targets where appropriate
- mobile menu keyboard behavior
- 200% zoom
- reduced motion
- no information communicated only by color
- decorative SVGs use `aria-hidden`

---

# 18. PERFORMANCE

- preserve static rendering
- no WebGL
- no video hero
- no heavy smooth-scroll library
- no duplicate motion library
- no global client component
- no layout shift from the rotating word line
- optimize real images with `next/image`
- do not preload images that do not exist
- do not load unused font weights

---

# 19. RESPONSIVE REQUIREMENTS

Test at:
- 1728
- 1440
- 1280
- 1024
- 768
- 430
- 390
- 360

Desktop:
- use the width
- keep asymmetry
- preserve grid

Tablet:
- recompute to six columns
- collapse side annotations
- keep article feature strong

Phone:
- use four-column grid
- hide nonessential markers
- stack media and copy
- use compact header
- do not shrink desktop geometry
- no horizontal overflow

Capture final screenshots for:
- Home desktop and phone
- Writing desktop and phone
- About desktop and phone
- Article desktop and phone
- 404 desktop and phone

---

# 20. VALIDATION

Run:

```bash
npm install
npm run typecheck
npm run build
git diff --check
git status
```

Run lint only when a valid lint script exists.

Manually verify:
- `/`
- `/notes`
- `/about`
- `/notes/three-days-one-castle-next-wave`
- `/sitemap.xml`
- `/robots.txt`
- not-found behavior

Search for old remnants:
- orange hex codes
- blue hex codes
- “MAKE / NOTICE / WRITE”
- `InteractiveField`
- old empty-state copy
- old cream background variables
- old large-radius panel classes

---

# 21. ACCEPTANCE CRITERIA

The rebuild is complete only when:

- current frontend has been fully replaced
- content and infrastructure are intact
- design uses Night Field tokens
- no orange/blue/cream template language remains
- site is near-black, grid-based, wide, and editorial
- reference influence is clear without being a clone
- Home, Writing, About, Article, and 404 are complete
- first real article is visible
- article prose is unchanged
- animations use Motion for React
- reduced motion works
- mobile is intentionally recomposed
- no horizontal overflow
- no fake content
- typecheck passes
- production build passes

Do not stop at a plan. Implement the complete frontend on the new branch.

At the end, report:
1. branch name
2. deleted files/components
3. new files/components
4. design tokens
5. page-by-page changes
6. motion behavior
7. reduced-motion behavior
8. responsive screenshots
9. accessibility checks
10. typecheck/build results
11. any real content or image data still needed from Deep
