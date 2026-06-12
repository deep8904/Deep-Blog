# Draft State design system

## Brand

**Name:** Draft State  
**Author:** Deep Chadamiya  
**Purpose:** A personal notebook for software, design, games, photography, and writing from real work.

The visual language is dark, editorial, technical, and personal. It should feel like an independent digital publication rather than a generic template.

## Night Field palette

| Token | Hex | Purpose |
|---|---:|---|
| `--nf-canvas` | `#090d0a` | Root canvas |
| `--nf-canvas-soft` | `#0d120e` | Subtle dark background variation |
| `--nf-surface` | `#121813` | Standard dark surfaces |
| `--nf-surface-raised` | `#171f19` | Lifted dark panels |
| `--nf-surface-quiet` | `#1d251f` | Dense supporting panels |
| `--nf-paper` | `#ece9df` | Primary text and reading paper |
| `--nf-paper-soft` | `#c8c8be` | Secondary light text |
| `--nf-muted` | `#7c857d` | Metadata and low-emphasis copy |
| `--nf-faint` | `#555e57` | Very low-emphasis technical details |
| `--nf-signal` | `#78a889` | Primary accent surfaces |
| `--nf-signal-bright` | `#a9d1b5` | Links and active states |
| `--nf-signal-dark` | `#263a2c` | Deep green accent panels |
| `--nf-fig` | `#8f7488` | Secondary accent |
| `--nf-fig-bright` | `#bca2b4` | Fig highlights |
| `--nf-fig-dark` | `#342a32` | Deep fig panel support |
| `--nf-lichen` | `#b7b879` | Rare small warm accent |
| `--nf-danger` | `#b77272` | Error states |
| `--nf-line` | `rgba(236, 233, 223, 0.1)` | Technical grid and default borders |
| `--nf-line-strong` | `rgba(236, 233, 223, 0.21)` | Stronger rules |
| `--nf-line-signal` | `rgba(120, 168, 137, 0.55)` | Accent rules |
| `--nf-focus` | `#c5e1cd` | Keyboard focus outline |

The interface is dark by default and intentionally avoids orange, bright blue, cream, pure white presentation surfaces, and decorative color gradients. Accent colors are used for links, article bands, technical lines, and small labels. Long-form reading uses the paper token for comfort while preserving the dark shell.

## Typography

- **Geist Variable:** navigation, UI, metadata, page titles, hero, article headings, and controls.
- **Newsreader Variable:** long-form body copy, pull quotes, captions, and short editorial emphasis.

Most of the interface uses Geist. Newsreader is limited so the site feels editorial without becoming theatrical.

## Geometry and rhythm

- Page maximum: `1728px`.
- Desktop gutter: `clamp(20px, 3vw, 52px)`.
- Tablet gutter: `28px`.
- Mobile gutter: `16px`.
- Editorial panels use `20px` to `28px` radius.
- Buttons and small UI use `999px` only where the shape is intentionally pill-like.
- Grid layouts use `minmax(0, 1fr)` to avoid overflow.

## Component roles

- **Header:** compact `DC` mark, Draft State identity, active route state, desktop nav, and a focus-trapped mobile menu.
- **Home hero:** full-width technical-grid statement, rotating subject phrase, and latest-essay action.
- **Featured article band:** large linked typography-led article object with a decorative castle-path diagram.
- **Home sections:** field panels, topic matrix, about preview, and publication signal.
- **Writing archive:** horizontal editorial rows for published Markdown notes, with a compact empty state if all notes are private.
- **Article page:** dark technical header and calm paper reading surface.
- **404 page:** full-height typographic error state.
- **Footer:** simple personal notebook close with Writing and About links.

## Motion

Motion for React is used for restrained entrance reveals, masked heading lines, and the small subject rotator. Hover movement is handled with CSS. Reduced-motion users receive static headings, no transform-based entrance animation, and the rotator resolves to a stable slash-separated phrase.
