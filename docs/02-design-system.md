# Draft State design system

## Brand

**Name:** Draft State  
**Author:** Deep Chadamiya  
**Purpose:** A personal blog about making things and paying attention.

The visual language should feel like a contemporary editorial notebook: warm, considered, readable, and slightly tactile.

## Color system

| Token | Hex | Role |
|---|---:|---|
| Canvas | `#EEE8DE` | Page background |
| Paper | `#FAF6EE` | Primary reading and content cards |
| Paper Strong | `#FFFDF8` | Highest-contrast light surface |
| Sand | `#DED2C0` | Secondary editorial cards |
| Sand Deep | `#CABCAA` | Supporting neutral |
| Ink | `#1B1A17` | Primary text |
| Ink Soft | `#34322D` | Secondary dark text |
| Muted | `#6F6A61` | Supporting copy and metadata |
| Charcoal | `#1D1E1B` | Dark cards and footer |
| Oxide | `#BF4F2F` | Main accent and interactive field |
| Oxide Deep | `#8E3320` | Accent links and emphasis |
| Oxide Soft | `#EDC4B4` | Soft accent on dark surfaces |

The accent is intentionally warm and material rather than digital blue. Oxide red suggests pencil marks, print ink, terracotta, and annotations.

## Typography

- **Geist Variable:** navigation, labels, display sans-serif headings, interface details.
- **Newsreader Variable:** reflective lines, personal statements, article text, and expressive emphasis.

Display type uses tight tracking and deliberate line breaks. Article text uses a narrower measure and conventional spacing.

## Geometry

- Maximum width: 1480px.
- Desktop gutter: 20px.
- Mobile gutter: 10px.
- Main radius: 24px desktop, 20px mobile.
- Bento gap: 12px.
- Major section rhythm: approximately 118px desktop and 82px mobile.

## Component roles

### Main paper card
Introduces Deep and the purpose of the site in direct first-person language.

### Oxide interaction card
A pointer-responsive typographic field built with CSS and a very small client component. It communicates the loop: make, notice, write.

### Dark current-status card
Explains that the first essay is still being written. It is not a fake recent-post card.

### Sand subject card
Explains the four real areas the blog will cover.

### Archive empty state
Uses a dark reading card with a candid message instead of invented posts.

## Responsive behavior

- Desktop: two-column editorial board with a large main card.
- Tablet: the main card spans both columns; supporting cards pair below it.
- Phone: cards stack in reading order, typography gets new line breaks, and the home navigation item is hidden because the wordmark already returns home.

## Accessibility

- Strong light/dark contrast.
- Oxide is never the only indicator of meaning.
- Visible focus rings.
- Semantic headings and landmarks.
- Decorative interaction is hidden from assistive technology.
- Reduced-motion mode disables nonessential transitions and the moving lens.
