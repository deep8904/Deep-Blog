# Draft State design system

## Brand

**Name:** Draft State  
**Author:** Deep Chadamiya  
**Purpose:** A personal notebook for software, design, games, photography, and writing from real work.

The visual language should feel authored, quiet, editorial, and personal. It should support reading before decoration.

## Pressed Field palette

| Token | Hex | Purpose |
|---|---:|---|
| `--field-canvas` | `#E7E3DA` | Page background only |
| `--field-paper` | `#F4F1E9` | Primary reading surfaces and quiet panels |
| `--field-paper-raised` | `#FAF8F2` | Slightly lifted surfaces and text on dark vine |
| `--field-ink` | `#1D211E` | Primary text |
| `--field-ink-soft` | `#3F4540` | Secondary dark copy |
| `--field-muted` | `#77776F` | Metadata and lower-emphasis text |
| `--field-vine` | `#526355` | Main accent for links, rules, and state |
| `--field-vine-deep` | `#34463B` | Strong accent, buttons, and icon base |
| `--field-vine-soft` | `#C9D0C6` | Soft dividers and alternating index accents |
| `--field-fig` | `#675463` | Restrained secondary accent |
| `--field-fig-soft` | `#D7CDD4` | Soft secondary marks |
| `--field-line` | `#CBC5B9` | Default borders |
| `--field-line-strong` | `#AFA99E` | Stronger rules |
| `--field-focus` | `#3D5948` | Keyboard focus outline |

Use `field-canvas` for the background, `field-paper` for reading surfaces, `field-ink` for body text, and `field-vine` as the primary accent. Do not use large saturated color blocks, gradients, pure black, pure white, orange, blue, or both accents heavily in the same section.

Contrast notes: body text on canvas and paper uses `field-ink`; links and focus states use the deeper vine tokens for AA contrast. `field-muted` is reserved for secondary copy at normal body sizes or larger. The design is light-mode-only for now.

## Typography

- **Geist Variable:** navigation, body copy, labels, metadata, and most headings.
- **Newsreader Variable:** limited editorial emphasis, article titles, pull quotes, and the small working-margin labels.

Hero text is restrained and balanced. Article text keeps a comfortable measure of roughly 58-68 characters.

## Geometry and rhythm

- Maximum content width: about 1280px.
- Mobile side padding: about 20px.
- Radius tokens: 6px, 12px, and 20px.
- Spacing uses explicit tokens from `--space-1` through `--space-10`.
- Sections use rules, alignment, and measured spacing instead of oversized rounded cards.

## Component roles

- **Header:** compact author mark, author name, notebook descriptor, and active route state.
- **Home hero:** direct first-person introduction with two primary reader paths.
- **Working margin:** static CSS editorial marginalia for Build, Observe, Write. It has no JavaScript and no animation.
- **Topic index:** ruled list of recurring subjects.
- **Writing empty state:** compact, honest archive message with no placeholder posts.
- **Footer:** simple personal notebook close with Writing and About links.

## Accessibility and motion

- Visible keyboard focus is provided globally.
- Decorative marks are hidden from assistive technology.
- Reduced-motion mode removes nonessential transitions.
- The site remains useful without JavaScript; only the active nav enhancement depends on the small client header.
