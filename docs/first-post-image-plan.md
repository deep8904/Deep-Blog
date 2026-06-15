# First post image plan

Upload directory:

`public/images/notes/three-days-one-castle-next-wave/`

The article currently uses invisible `IMAGE_SLOT` comments. Add each image to the Markdown only after the matching file has been uploaded.

| Slot | Exact filename | Recommended size | Ratio | Use |
| --- | --- | ---: | --- | --- |
| `01-mix-center-exterior` | `01-mix-center-exterior.webp` | `2400 × 1350 px` | 16:9 | Wide opening image of the ASU MIX Center |
| `02-next-wave-team-formation` | `02-next-wave-team-formation.webp` | `1800 × 1200 px` | 3:2 | Candid team formation photo |
| `03-concept-moodboard` | `03-concept-moodboard.webp` | `1920 × 1080 px` | 16:9 | Milanote board, sketches, or early concept screenshot |
| `04-endstar-build` | `04-endstar-build.webp` | `1800 × 1200 px` | 3:2 | Laptop or team building in Endstar |
| `05-mentor-corner` | `05-mentor-corner.webp` | `1800 × 1200 px` | 3:2 | Mentor review or working session |
| `06-group-photo` | `06-group-photo.webp` | `2400 × 1600 px` | 3:2 | Official group photograph |
| `07-final-build-presentation` | `07-final-build-presentation.webp` | `1920 × 1080 px` | 16:9 | Final build, playtest, or presentation |
| `08-next-wave-team-closing` | `08-next-wave-team-closing.webp` | `1800 × 1200 px` | 3:2 | Closing team photograph |

## Existing cover paths

- Featured image: `public/images/notes/xbox-game-camp/featured.jpg` at `1600 × 900 px`
- Article hero: `public/images/notes/xbox-game-camp/article-hero.jpg` at `2400 × 1350 px`

## Markdown insertion format

```md
![Accurate descriptive alt text](/images/notes/three-days-one-castle-next-wave/example.webp)

*Short factual caption.*
```

## Export requirements

- Use WebP for inline article images when possible.
- Use JPG or WebP for hero and featured images.
- Export in sRGB.
- Use approximately 80 to 88 percent quality.
- Preserve the original aspect ratio.
- Do not upscale a small image to meet these dimensions.
- Keep inline images responsive with `width: 100%` and `height: auto`.
- Alt text should describe the image rather than repeat the caption.
