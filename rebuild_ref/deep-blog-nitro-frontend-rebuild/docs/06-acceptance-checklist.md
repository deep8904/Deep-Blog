# 06 — Acceptance Checklist

## Visual
- [ ] Near-black canvas replaces cream page background
- [ ] No orange or blue remains
- [ ] No large rounded bento cards remain
- [ ] Header is compact and line-based
- [ ] Main layout uses most of the viewport width
- [ ] Technical grid is subtle
- [ ] Home feature uses real article data
- [ ] Writing page displays the published post
- [ ] About uses only real information
- [ ] 404 matches the new system
- [ ] No reference branding or text was copied

## Content
- [ ] First article body is unchanged
- [ ] No fake posts
- [ ] No fake contact data
- [ ] No empty archive while a post exists
- [ ] No broken image placeholders

## Motion
- [ ] `motion/react` is the only motion library
- [ ] Heading reveal uses masks
- [ ] Grid lines reveal once
- [ ] Article rows have restrained hover motion
- [ ] Reduced motion disables transforms/parallax
- [ ] No continuous looping animation
- [ ] No pointer follower
- [ ] No scroll-jacking

## Responsive
- [ ] 1728px
- [ ] 1440px
- [ ] 1280px
- [ ] 1024px
- [ ] 768px
- [ ] 430px
- [ ] 390px
- [ ] 360px
- [ ] No horizontal overflow
- [ ] Mobile is recomposed, not merely shrunk

## Quality
- [ ] Semantic landmarks
- [ ] One h1 per page
- [ ] Logical heading order
- [ ] Visible keyboard focus
- [ ] 44px touch targets where appropriate
- [ ] WCAG AA text contrast
- [ ] `npm run typecheck` passes
- [ ] `npm run build` passes
- [ ] `git diff --check` passes
- [ ] article route generated
- [ ] sitemap includes article
