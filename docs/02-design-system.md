# Draft State design system

## Brand

**Name:** Draft State  
**Author:** Deep Chadamiya  
**Purpose:** A personal notebook for software, design, games, photography, and writing from real work.

The visual language is dark, editorial, technical, and personal. It should feel like an independent digital publication rather than a generic template.

## Night palette

| Token | Hex | Purpose |
|---|---:|---|
| `--night-canvas` | `#101411` | Main site background |
| `--night-surface` | `#171C18` | Standard panels and dark sections |
| `--night-surface-raised` | `#1E251F` | Slightly lifted panels |
| `--night-panel` | `#252C26` | Dense supporting panels |
| `--night-paper` | `#E7E3D8` | Primary light text and reading surface |
| `--night-paper-soft` | `#C8C4B9` | Secondary light text |
| `--night-muted` | `#898F87` | Metadata and low-emphasis copy |
| `--night-vine` | `#6F8874` | Primary accent and hover surface |
| `--night-vine-bright` | `#91A895` | Links and active navigation |
| `--night-vine-dark` | `#354A3B` | Large featured article surface |
| `--night-fig` | `#806B7A` | Secondary accent |
| `--night-fig-bright` | `#A68C9E` | Secondary highlighted details |
| `--night-fig-dark` | `#4C3E49` | Muted status panel surface |
| `--night-moss` | `#A7A36D` | Rare micro-accent |
| `--night-line` | `rgba(231, 227, 216, 0.11)` | Technical grid and default borders |
| `--night-line-strong` | `rgba(231, 227, 216, 0.22)` | Stronger rules |
| `--night-focus` | `#B7C8B9` | Keyboard focus outline |
| `--night-error` | `#B97770` | Error states |

The interface stays mostly dark and neutral. Accent colors are used for links, article bands, technical lines, and small panels. Long-form reading uses a paper surface to keep the article comfortable.

## Typography

- **Geist Variable:** navigation, UI, metadata, page titles, hero, and article headings.
- **Newsreader Variable:** long-form body copy, pull quotes, captions, and limited editorial accents.

Most of the interface uses Geist. Newsreader should not dominate large interface headings.

## Geometry and rhythm

- Page maximum: `1680px`.
- Desktop gutter: `clamp(24px, 4vw, 72px)`.
- Tablet gutter: `28px`.
- Mobile gutter: `18px`.
- Editorial bands use minimal radius.
- Small panels use `6px` to `12px` radius.
- Grid layouts use `minmax(0, 1fr)` to avoid overflow.

## Component roles

- **Header:** thin `.deep` mark, personal descriptor, active route state, and minimal nav.
- **Home hero:** full-width technical-grid statement with the latest-essay action.
- **Featured article band:** large linked typography-led article object.
- **Bento layer:** topic matrix, about preview, current exploration, and a lightweight visual signal.
- **Writing archive:** horizontal editorial rows for published Markdown notes.
- **Article page:** dark technical header and calm paper reading surface.
- **Footer:** simple personal notebook close with Writing and About links.

## Motion

Motion for React is used only for restrained entrance reveals. Hover movement is handled with CSS, and reduced-motion users receive no transform-based entrance animation.
