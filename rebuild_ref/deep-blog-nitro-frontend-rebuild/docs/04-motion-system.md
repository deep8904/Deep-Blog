# 04 — Motion System

The repository already includes `motion`. Use:

```ts
import { motion, useReducedMotion, useScroll, useTransform } from "motion/react";
```

Do not add another animation package.

## Motion personality

- precise
- linear-to-eased
- low amplitude
- no bouncy startup animation
- no continuous decoration
- motion reveals hierarchy rather than advertising itself

## Global easing

```ts
export const easeOutExpo = [0.16, 1, 0.3, 1] as const;
export const easeOutQuint = [0.22, 1, 0.36, 1] as const;
```

## Page entrance

1. Header rule draws from left to right.
2. Wordmark and navigation fade in.
3. Hero heading lines reveal from a clipped mask.
4. Tiny annotations appear last.

Total entrance should finish in roughly 900–1200ms.

## Heading reveal

- wrap each line, not each character
- overflow hidden
- initial: `y: "115%"`
- animate: `y: "0%"`
- duration: 0.75s
- stagger: 0.07–0.11s

Do not split every word into dozens of DOM nodes when not necessary.

## Grid reveal

- vertical lines: `scaleY: 0` to `1`, origin top
- horizontal line: `scaleX: 0` to `1`, origin left
- duration: 0.9–1.2s
- low opacity
- play once when section enters viewport

## Article feature reveal

- media or diagram uses `clip-path: inset(100% 0 0 0)` to `inset(0)`
- metadata fades in
- arrow enters from `x: -8`
- card does not scale up dramatically

## Scroll motion

Allowed:
- image y-shift of no more than 4–6% over a section
- progress marker moving down a guide line
- slight headline translation tied to scroll

Not allowed:
- scroll-jacking
- full-page smooth-scroll hijacking
- horizontal scroll sections
- heavy blur on scroll
- springy parallax
- 3D tilt

## Hover motion

Article row:
- title `x: 4px`
- arrow `x: 8px`
- line opacity increases
- media scale max `1.015`
- duration 180–240ms

Navigation:
- underline scaleX 0 to 1
- active state remains visible without hover

## Mobile menu

- dark overlay from top
- menu items reveal line by line
- close button remains stable
- focus trapped
- Escape closes menu
- body scroll locked only while open

## Reduced motion

When `useReducedMotion()` is true:
- no transform-based entrances
- no parallax
- no clip-path animation
- opacity transitions may remain under 120ms
- all information must be immediately available

## Performance limits

- avoid one client wrapper per paragraph
- animate section wrappers and key items only
- use transform and opacity
- do not animate layout width/height repeatedly
- do not use `will-change` permanently
- do not run pointer tracking
