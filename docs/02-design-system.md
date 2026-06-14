# Loose Thread design system

## Source of truth

The root `DESIGN.md` contains the supplied Instance.io specification. The live frontend adapts it into a light editorial blog without adding colors outside that source palette.

## Identity

- **Name:** Loose Thread
- **Author:** Deep Chadamiya
- **Purpose:** Personal field notes about software, product design, games, photography, and unfinished ideas.
- **Character:** Minimal editorial typography, controlled asymmetry, technical metadata, and one high-contrast status panel.

## Palette

Only these source colors and transparent alpha variants may be used:

| Role | Token | Hex |
|---|---|---:|
| Primary emphasis | `--primary` | `#E4573D` |
| Main text and dark surfaces | `--secondary` | `#191C21` |
| Status indicator | `--accent` | `#34D399` |
| Light outer canvas and rules | `--background` | `#D1CFC7` |
| Main reading surface | `--surface` | `#FFFFFF` |
| Secondary metadata | `--muted` | `#A1A1AA` |

The supplied border color becomes the light outer canvas. White is the reading surface, and the supplied secondary color is used for the dark focal panel.

## Typography

- **Inter:** headings, body text, navigation, buttons, and articles.
- **JetBrains Mono:** labels, counters, dates, status text, and technical metadata.
- Display headings use medium weight, tight tracking, and deliberate line breaks.
- Article typography prioritizes readability and a comfortable measure.

## Geometry and spacing

- Base spacing: `8px`
- Standard gap: `16px`
- Card padding: `24px`
- Section rhythm: `80px` to `110px`
- Card radius: `32px`
- Control radius: `20px`
- Pill radius: `9999px`
- Main page maximum: `1480px`

## Core compositions

### Site frame

A light rounded publication surface sits on the border-colored canvas. This creates a clear page boundary without extra illustration.

### Homepage hero

The first viewport contains a large editorial statement and one dark current-writing panel. The status panel is the focal object. Do not add background illustrations, particles, orbit graphics, floating cards, or stock imagery.

### Archive

The archive always reflects the real Markdown content source. If no published entries exist, show the honest zero-state. Never invent sample articles, dates, categories, or metrics.

### Article pages

Article pages keep the same visual language while reducing density around the prose. Metadata remains secondary to the title, description, and reading content.

## Motion

- Masked heading reveal on page entry.
- IntersectionObserver section reveals.
- Small hover movement for actionable elements.
- A requestAnimationFrame-throttled scroll progress indicator.
- A restrained status pulse and progress meter in the dark panel.
- Reduced-motion users receive a static interface.

## Responsive behavior

- Desktop uses asymmetric two-column compositions.
- Tablet stacks the hero while preserving the status panel.
- Mobile uses a compact menu, single-column sections, reduced type scale, and no horizontal overflow.
- Layouts recompose instead of simply shrinking.

## Guardrails

- Do not turn the site into a generic landing page or card grid.
- Do not add unnecessary graphics, effects, autoplay media, or cursor replacements.
- Do not add another UI framework or animation dependency.
- Do not publish placeholder content.
- Preserve semantic HTML, keyboard navigation, focus states, and reduced-motion support.
- Keep the supplied palette, radii, spacing, and typography roles consistent across every route.
