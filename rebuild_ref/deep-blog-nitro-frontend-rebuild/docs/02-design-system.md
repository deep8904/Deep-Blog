# 02 — Design System: Night Field

This is an original palette and system for Deep Blog. It is not a named public palette.

## Color tokens

```css
:root {
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
}
```

## Color rules

- Canvas fills the viewport.
- Paper is the main text color.
- Signal green is for active navigation, tiny labels, focus accents, arrows, and
  occasional rules.
- Fig is a secondary accent for one article or one section at a time.
- Lichen is a rare tertiary accent and must never dominate.
- Do not introduce orange or blue.
- Do not use gradients.
- Do not use pure black or pure white.
- Every new color must be a semantic token, not an inline hexadecimal value.

## Typography

Use the existing local variable fonts:
- Geist Variable — interface, display, article metadata, body copy
- Newsreader Variable — rare pull quotes, captions, and article emphasis only

Rules:
- 90% of visible typography should be Geist.
- No full-screen italic serif headline.
- Use optical sizes and fluid type.
- Target body line length: 62–70 characters.
- Use `text-wrap: balance` for display headings and `text-wrap: pretty` for body copy.

Suggested scale:

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

## Global grid

Desktop:
- max width: 1760px
- gutters: `clamp(20px, 3.2vw, 64px)`
- 12 columns
- column gap: `clamp(16px, 1.5vw, 28px)`

Tablet:
- 6 columns
- 24px gutters

Phone:
- 4 columns
- 18px gutters

The grid should be visible only as very low-contrast guide lines in selected sections.

## Spacing

```css
--space-1: 0.25rem;
--space-2: 0.5rem;
--space-3: 0.75rem;
--space-4: 1rem;
--space-5: 1.5rem;
--space-6: 2rem;
--space-7: 3rem;
--space-8: 4.5rem;
--space-9: 6.5rem;
--space-10: 9rem;
```

## Shape language

```css
--radius-xs: 2px;
--radius-sm: 5px;
--radius-md: 10px;
```

Most structures should use zero to five pixels of radius. Do not return to large,
soft, rounded bento cards.

## Lines and markers

Allowed:
- 1px structural rules
- grid guide lines
- 6–10px marker circles
- short animated underlines
- tiny index labels
- corner coordinates

Avoid:
- decorative circles larger than the content
- glowing rings
- random crosshairs on every section
- thick borders
