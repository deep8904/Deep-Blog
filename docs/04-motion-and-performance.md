# Motion and performance

## Interactive field

The oxide-red hero card uses pointer coordinates to update two CSS custom properties. One `requestAnimationFrame` throttles the updates. CSS renders the moving lens, grid, glow, and typography.

## Motion rules

- No WebGL.
- No autoplay video.
- No animation library.
- No continuous JavaScript loop.
- No scroll hijacking.
- Prefer transform and opacity.
- Keep interaction decorative and non-blocking.

## Reduced motion

When `prefers-reduced-motion` is active:
- Transition and animation durations are effectively removed.
- The pointer-following lens is hidden.
- Reading and navigation remain fully functional.

## Performance safeguards

- The home page has only one small client component.
- Font files come from installed Fontsource packages.
- No full-screen photography is included before real assets exist.
- Future article images should use responsive dimensions and `next/image` where appropriate.
- The site remains useful with JavaScript disabled; only the decorative pointer response is lost.
