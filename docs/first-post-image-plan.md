# First post image plan

Future image directory:

`public/images/notes/three-days-one-castle-next-wave/`

The article currently uses invisible `IMAGE_SLOT` comments only. Do not add visible placeholders or empty frames before real files exist.

| Slot | Source marker | Future file idea | Suggested caption | Suggested alt text |
| --- | --- | --- | --- | --- |
| `01-mix-center-exterior` | [HERO PHOTO — FULL WIDTH] | `01-mix-center-exterior.webp` — A wide exterior photograph of the ASU MIX Center at night, preferably showing the colorful lights and participants gathered outside. | For three days, ASU’s MIX Center became a temporary home for developers, designers, artists, students, and several dangerously ambitious game ideas. | Xbox Game Camp participants standing outside the illuminated ASU MIX Center in Mesa, Arizona. |
| `02-next-wave-team-formation` | [PHOTO 2 — TEAM FORMATION] | `02-next-wave-team-formation.webp` — A candid photo of the four team members around a laptop, sketchbook, Milanote board, whiteboard, or game-design document. | Next Wave Studios began as four people with different strengths, one deadline, and no shortage of ideas. | Members of Next Wave Studios discussing their Xbox Game Camp concept around a shared workspace. |
| `03-concept-moodboard` | [PHOTO 3 — CONCEPT OR MOODBOARD] | `03-concept-moodboard.webp` — A screenshot of the Next Wave Studios Milanote board, early game-design notes, castle sketches, trap diagrams, or moodboard. | Our concept expanded quickly: rooms, traps, waves, upgrades, and an entire defensive ecosystem built around Sabreman’s mansion. | A digital game-design board showing castle rooms, trap ideas, gameplay phases, and visual references. |
| `04-endstar-build` | [PHOTO 4 — BUILDING IN ENDSTAR] | `04-endstar-build.webp` — A close photograph of your laptop showing Endstar, with the game level visible and team members working in the background. | Learning Endstar was part experimentation, part collaboration, and part discovering what the engine would allow us to do before Sunday. | A laptop displaying a medieval game level inside the Endstar engine during Xbox Game Camp. |
| `05-mentor-corner` | [PHOTO 5 — MENTOR CORNER] | `05-mentor-corner.webp` — A candid photograph of participants speaking with mentors on the third floor, ideally with a game visible on a laptop or monitor. | The Mentor Corner turned technical blockers and oversized ideas into conversations we could actually act on. | Xbox Game Camp mentors reviewing a participant’s game project at the ASU MIX Center. |
| `06-group-photo` | [PHOTO 6 — GROUP PHOTO] | `06-group-photo.webp` — The official group photo outside the MIX Center with the building’s colored lights visible. | The rare moment when every team stopped building at the same time. | Participants, mentors, and organizers posing together outside ASU’s illuminated MIX Center. |
| `07-final-build-presentation` | [PHOTO 7 — FINAL BUILD OR PRESENTATION] | `07-final-build-presentation.webp` — A screenshot of the final playable level, the team presenting it, or another participant playing the game during judging. | The final build was not every idea we imagined on Friday. It was the clearest version we could make real by Sunday. | Next Wave Studios presenting or playtesting its Knight Lore-inspired game at Xbox Game Camp. |
| `08-next-wave-team-closing` | [PHOTO 8 — TEAM CLOSING PHOTO] | `08-next-wave-team-closing.webp` — A relaxed photo of the four Next Wave Studios members after the final presentations, preferably away from the laptops. | Next Wave Studios: Warren, Chris, Gabe, and me—four people who entered separately and left with a shared project. | The four members of Next Wave Studios together after completing Xbox Game Camp Arizona. |

Future insertion format:

```md
![Accurate descriptive alt text](/images/notes/three-days-one-castle-next-wave/example.webp)

*Short factual caption.*
```

Requirements for future images:

- Use `next/image` for a future hero image if the article template renders it through React.
- Inline Markdown images must remain responsive.
- Preserve the original aspect ratio.
- Avoid forced fixed heights.
- Use `width: 100%` and `height: auto`.
- Add restrained spacing before and after images.
- Captions must be readable but visually secondary.
- Alt text must describe the image rather than repeat the caption.
- Do not use lazy loading for the hero image once it exists.
- Inline images may use lazy loading.
- Do not show any image UI until a real file exists.
