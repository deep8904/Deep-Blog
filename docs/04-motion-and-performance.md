# Motion and performance

## Current motion policy

The redesign removes the former pointer-following hero card. The Home page now uses a static working-margin graphic built from lightweight markup and CSS. It does not track the pointer, animate continuously, or require a client component.

## Motion rules

- No WebGL.
- No autoplay video.
- No animation library.
- No continuous JavaScript loop.
- No scroll hijacking.
- Prefer simple hover/focus transitions only when they clarify state.
- Keep decorative elements non-blocking and secondary to text.

## Reduced motion

When `prefers-reduced-motion` is active:
- Transition and animation durations are effectively removed.
- Reading and navigation remain fully functional.
- No decorative motion is required to understand the site.

## Performance safeguards

- Font files come from installed Fontsource packages.
- No external font loading is required.
- No full-screen photography is included before real assets exist.
- Future article images should use responsive dimensions and `next/image` where appropriate.
- The site remains useful with JavaScript disabled.
