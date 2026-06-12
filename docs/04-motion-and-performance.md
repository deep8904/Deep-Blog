# Motion and performance

The redesign uses Motion for React in small client wrappers: `MotionReveal`, `MaskedHeading`, and `SubjectRotator`.

## Motion rules

- Entrance reveals are limited to page intros, hero surfaces, and featured article surfaces.
- Masked heading movement is short and vertical.
- The home subject rotator changes one word group at a time, runs through the list once, and does not affect layout.
- Hover behavior is handled with CSS transforms on article bands and rows.
- No cursor followers, looping decorative animation, scroll-jacking, 3D tilting, or text scrambling.
- `useReducedMotion()` disables transform-based entrance animation and turns the subject rotator into static text.

## Performance rules

- Markdown remains statically generated.
- Article pages remain server-rendered by default.
- The technical grid is CSS-only and used only on selected dark surfaces.
- The long-form reading body has no decorative grid behind it.
- The mobile menu locks body scroll only while open and restores the page when closed.
