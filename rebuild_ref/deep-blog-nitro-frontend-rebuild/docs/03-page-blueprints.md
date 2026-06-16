# 03 — Page Blueprints

## Shared shell

### Header
- `.deep` or `deep.chadamiya` wordmark on the left
- Home, Writing, About on the right
- Contact only when a real contact route and real data exist
- one-pixel bottom rule
- active item in `--nf-signal`
- mobile menu is a full-width dark panel with line-by-line reveal
- no avatar badge
- no floating pill navigation

### Footer
- compact, low contrast
- site name
- navigation
- real social links only
- current year generated in code
- one small signal-green mark

## Home

### Hero
A full-width, grid-backed section directly on the dark canvas.

Content:
- small introduction / role
- large statement
- a short animated word list for the subject areas:
  `software`, `interfaces`, `games`, `photography`
- one small availability or location note only if already present in real site data

Use the real existing site copy where possible. Do not invent work status.

### Featured writing
The first published article is the dominant module.

Structure:
- metadata strip
- title
- description
- read time
- arrow
- real image only if a real file exists
- without an image, use a typography-led panel with a subtle diagram based on the
  article’s castle / pathway theme, not a fake photograph

### About preview
Asymmetric two-column section:
- one short personal paragraph
- one image slot only if a real image exists
- link to About

### Latest writing
Show up to three real posts. With one post, do not repeat the same feature three times.
Use one feature plus an honest “more writing will appear here” micro-note, not a large
empty-state card.

## Writing archive

- compact page title: `writing`
- one line explaining the archive
- article count based on real data
- first article may be a wide feature row
- later articles use alternating image/text alignment
- every row is a single accessible link
- no filters when only one article exists
- no category UI without enough real content
- no “Nothing here yet” while a post is published

## Article page

### Header
- back link
- topics
- title
- description
- author
- published date
- reading time
- thin grid guides
- optional hero image only when real

### Body
- 64–70ch reading column
- quiet dark reading surface or a slightly raised dark panel
- body in `--nf-paper-soft`
- headings in `--nf-paper`
- links in `--nf-signal-bright`
- blockquotes use a left signal rule
- images can break out to 90vw / container width
- captions use Newsreader sparingly
- image-slot HTML comments stay invisible

### End navigation
- Back to Writing
- About Deep
- no fake previous/next posts

## About

Inspired by the reference’s information architecture, not its fake résumé content.

Use only real facts already in the repository:
- personal statement
- areas of practice
- location if configured
- education/experience only if real content already exists
- tools/skills only from existing real data

Layout:
- page title in top-left
- large statement offset to the right
- optional real portrait
- timeline as ruled rows
- skills as small icon-free text cells
- no invented years, companies, availability, or job titles

## 404

- huge `404` across the grid
- small `oops`
- one “Back home” action
- subtle line animation
- no reference branding
