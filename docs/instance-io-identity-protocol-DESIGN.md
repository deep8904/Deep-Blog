---
version: "neuform-top-creators-featured"
name: "Instance.io - Identity Protocol"
description: "Instance Identity Button Component is designed for building reusable UI components in modern web projects. Key features include reusable structure, responsive behavior, and production-ready presentation. It is suitable for component libraries and responsive product interfaces."
colors:
  primary: "#E4573D"
  secondary: "#191C21"
  accent: "#34D399"
  background: "#181716"
  surface: "#191C21"
  text-primary: "#FFFFFF"
  text-secondary: "#A1A1AA"
  border: "#D1CFC7"
typography:
  display-lg:
    fontFamily: "Inter"
    fontSize: "64px"
    fontWeight: 500
    lineHeight: "1.04"
    letterSpacing: "0"
  body-md:
    fontFamily: "Inter"
    fontSize: "16px"
    fontWeight: 400
    lineHeight: "1.6"
  label-md:
    fontFamily: "JetBrains Mono"
    fontSize: "12px"
    fontWeight: 600
    lineHeight: "1.2"
spacing:
  base: "8px"
  gap: "16px"
  card-padding: "24px"
  section-padding: "80px"
rounded:
  card: "32px"
  control: "20px"
  pill: "9999px"
components:
  card:
    background: "Use the surface token with subtle borders and HTML-matched shadow depth"
    radius: "Match the declared card radius token"
  button:
    background: "Use primary or accent colors for the main action"
    radius: "Use the control or pill radius based on the source HTML"
---

# Instance.io - Identity Protocol

Use the source composition as the design-system authority for Draft State.

## Composition

Preserve the visible hierarchy, first-screen composition, section rhythm, density, and interaction tone before adapting copy or content. Do not replace distinctive structures with generic SaaS sections.

## Colors

Anchor the interface in primary `#E4573D`, secondary and surface `#191C21`, accent `#34D399`, background `#181716`, primary text `#FFFFFF`, secondary text `#A1A1AA`, and border `#D1CFC7`.

## Typography

Use Inter for display and body copy. Use JetBrains Mono for technical labels, metadata, navigation details, badges, and status language.

## Layout

Use a stable maximum width, deliberate spacing, dense technical labels, clear focal objects, full-width dark sections, and responsive stacking. The homepage hero follows the supplied Aether triptych composition while all visual tokens come from this protocol.

## Motion

Use masked reveals, staggered entrances, restrained hover lift, scroll-triggered transitions, and subtle ambient movement. Effects must remain secondary to content and respect reduced-motion preferences.

## Guardrails

- Do not flatten the design into a generic card grid.
- Do not switch to a light color mode.
- Preserve the first-viewport focal object and visual density.
- Keep cards, buttons, badges, rails, borders, and typography aligned to the same token system.
- Do not introduce colors, fonts, radii, or spacing scales outside this file without documenting the exception.
