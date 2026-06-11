# Build and publishing checklist

## Before deployment

- [ ] Set `NEXT_PUBLIC_SITE_URL` to the final domain.
- [ ] Confirm the author name and description in `site.config.ts`.
- [ ] Add only real contact or social links.
- [ ] Test `/`, `/notes`, `/about`, an invalid route, `/sitemap.xml`, and `/robots.txt`.
- [ ] Test keyboard navigation and focus rings.
- [ ] Test reduced-motion mode.
- [ ] Test 1440px, 1024px, 768px, 390px, and 320px widths.
- [ ] Run `npm run typecheck`.
- [ ] Run `npm run build`.

## Before publishing a note

- [ ] Duplicate `content/notes/_post-template.md`.
- [ ] Use a lowercase kebab-case filename.
- [ ] Complete title, description, date, and topics.
- [ ] Keep `draft: true` until publication is intentional.
- [ ] Begin with a concrete event, artifact, decision, or question.
- [ ] Use valid heading hierarchy.
- [ ] Add real images only after files exist in `public/`.
- [ ] Add descriptive alt text and short factual captions to images.
- [ ] Keep future image paths under `public/images/notes/<slug>/`.
- [ ] Review on phone and desktop.
- [ ] Run the production build.
