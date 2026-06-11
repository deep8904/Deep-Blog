# Motion and performance

The redesign uses Motion for React in one small client wrapper: `MotionReveal`.

## Motion rules

- Entrance reveals are limited to hero and featured homepage surfaces.
- Hover behavior is handled with CSS transforms on article bands and rows.
- No cursor followers, looping decorative animation, scroll-jacking, 3D tilting, or text scrambling.
- `useReducedMotion()` disables transform-based entrance animation.

## Performance rules

- Markdown remains statically generated.
- Article pages remain server-rendered by default.
- The technical grid is CSS-only and used only on selected dark surfaces.
- The long-form reading body has no decorative grid behind it.
