# Motion and performance

The redesign uses CSS animations and a small IntersectionObserver wrapper: `Reveal`.

## Motion rules

- Entrance reveals are limited to page intros, hero surfaces, and featured writing surfaces.
- Heading movement is short and vertical.
- Hover behavior is handled with CSS transforms on article bands and rows.
- No cursor followers, looping decorative animation, scroll-jacking, 3D tilting, or text scrambling.
- `prefers-reduced-motion` disables transform-based entrance animation.

## Performance rules

- Markdown remains statically generated.
- Article pages remain server-rendered by default.
- The technical grid is CSS-only and used only on selected dark surfaces.
- The long-form reading body has no decorative grid behind it.
- The mobile menu locks body scroll only while open and restores the page when closed.
