---
title: "Three Days, One Castle, and a Team Called Next Wave"
description: "A weekend at Xbox Game Camp Arizona taught me how quickly a game idea changes when the tool, the team, and the deadline all start talking back."
publishedAt: "2026-06-11"
updatedAt: "2026-06-17"
author: "Deepkumar Chadamiya"
topics:
  - "Game Design"
  - "Player Experience"
  - "Collaboration"
  - "Xbox Game Camp"
draft: false
heroImage: "/images/notes/three-days-one-castle-next-wave/01-mix-center-exterior.webp"
heroImageAlt: "The ASU MIX Center exterior with Xbox Game Camp signage on the building."
heroImageCaption: "Xbox Game Camp Arizona at ASU's MIX Center in Mesa."
---

At some point on Friday evening, surrounded by people I had only just met and a game engine I barely understood, I opened Discord and asked the kind of question that reveals exactly how new you are to a room:

> Is there any way we can build this in 2D instead of 3D?

The answer was technically yes.

Also, not really.

Endstar was a 3D engine. We could fake a flatter view, restrict a camera, and pretend the world had fewer dimensions than it wanted to have, but the tool was already making its argument. It was not neutral. It had gravity, volume, props, camera behavior, and its own assumptions about what a game could become.

I arrived at Xbox Game Camp Arizona with a clean idea in my head. By Sunday afternoon, that clean idea had been bent by the engine, pulled apart by the team, trimmed by the deadline, and rebuilt into something stranger and more useful.

That is the part I want to remember.

Not the clean idea.

The moment it started changing.

## Friday: The Room Before The Team

Xbox Game Camp Arizona took place from May 29-31, 2026, at Arizona State University's MIX Center in Mesa.

The event brought together Xbox, ASU, Endless Games and Learning Lab, Endless Studios, GitHub, industry mentors, and people trying to make games from many different starting points. Some people came in with teammates. Some had already built things in game engines. Some were artists, designers, developers, producers, students, or people with a little bit of all of that tangled together.

I came in from the side of making interfaces and thinking about how people move through systems. I understood flows, feedback, hierarchy, and interaction patterns. I had opinions about clarity. I cared about whether a person understood what an experience was asking from them.

What I had not done was walk into a room, meet three people, learn a new engine, reinterpret a 42-year-old game, and produce something playable before Sunday afternoon.

That was new.

The challenge was to build something inspired by *Knight Lore*, the 1984 game known for its mysterious castle, isometric rooms, environmental puzzles, and Sabreman, the adventurer cursed to transform into a werewolf. The reference had a very specific mood: old, strange, constrained, spatial, and a little haunted by its own limitations.

The MIX Center had the opposite feeling. It was bright, modern, full of screens, full of motion. On Friday, before there was a team, the room felt like a bag of loose parts being shaken until something connected.

Developers talked about engines. Artists compared visual directions. Designers turned the theme over in their hands, looking for mechanics hidden inside it. Every conversation had the same quiet pressure underneath it:

What can we actually make?

Eventually I connected with Warren Andrus, Chris Goodman, and Gabe Isko.

Warren brought architectural thinking and game-design ideas. Chris focused on production and playtesting. Gabe brought development experience and a love for game engines. I contributed visual direction, player-flow thinking, ideation, and the willingness to learn Endstar as quickly as I could without pretending I already knew it.

Four people who had not planned to work together became a team. Immediately, the idea was no longer mine or anyone else's alone. That sounds obvious, but it changes everything. A solo idea can stay elegant because nobody has to build it yet. A team idea has to survive other people's instincts.

Then we needed a name.

We became Next Wave Studios.

It sounded forward-looking, a little dramatic, and ambitious enough for a concept that was about to become much too large for a weekend.

So, naturally, it was perfect.

![Members of Next Wave Studios seated together with laptops during Xbox Game Camp Arizona.](/images/notes/three-days-one-castle-next-wave/02-next-wave-team-formation.webp)

*Next Wave Studios, still early enough in the weekend that ambition had not been fully negotiated with time.*

## The Idea That Was Too Large To Keep

Our earliest concept was about vampire hunters defending themselves against waves of supernatural enemies.

It had a planning phase. It had traps. It had fortifications, enemy types, resources, upgrades, and an action-heavy survival sequence waiting somewhere near the end.

It had strategy.

It had progression.

It had enough systems to keep a full team busy for months.

We had about two days.

This is where a game jam starts asking a question that is easy to answer in theory and much harder to answer when the idea is yours:

Are you trying to solve the problem, or are you protecting the first version?

The more we talked about *Knight Lore*, the more interesting the opposite perspective became. Instead of playing as hunters trying to survive the monster, what if the player was Sabreman preparing for the hunters?

He knows the full moon is coming.

He knows another wave will enter the mansion.

He cannot stop them from arriving, but he can decide what they encounter.

That small reversal changed the whole shape of the game. The mansion stopped being background. It became the weapon. The player would expand rooms, choose paths, place traps, weaken incoming hunters, and prepare Sabreman for a final confrontation with whoever survived.

The fantasy became clearer because it became more specific: not "survive the castle," but "turn the castle into a decision system."

We imagined branching hallways, bedrooms, armories, courtyards, dungeons, prisons, spike floors, acid pools, dark rooms, oil traps, alchemy effects, and collapsing ceilings. Some of these ideas were useful. Some were wildly unreasonable. A few were both.

That is the strange value of overscoping early. The bloated version of the idea can still reveal the center of it. You just have to be willing to cut away the parts that are exciting but not load-bearing.

By Friday night, the first idea had done its job. It gave us enough material to find the better one.

Then it had to get out of the way.

## Saturday: Learning In Public

Saturday was when the MIX Center stopped feeling like an event venue and started feeling like a studio.

Laptops took over nearly every available surface. Conversations moved between story, camera controls, level design, props, scripts, audio, and the increasingly practical question underneath all of it:

Can we build this in Endstar before the deadline catches us?

The event Discord became a living manual. Someone wanted to know how to rotate the camera in Create Mode. Someone else was trying to edit a prop but only had view access. People shared custom bookshelves, towers, shelves, orbs, and other assets as quickly as they could make them. There were questions about scripts, tiles, check-ins, team access, cameras, custom props, and whether a particular behavior was intentional or just a useful glitch.

Then came the warning about the fog prop.

It was experimental, difficult to control, and apparently even harder to remove.

Every game-development weekend needs at least one feature that behaves like it has its own supernatural agenda. Ours happened to be fog.

What I liked about that atmosphere was how public the learning became. Confusion was not hidden. It was shared, answered, repeated, corrected, and turned into common knowledge. A question that might normally feel embarrassing became useful because ten other people were probably about to run into the same thing.

The organizers kept encouraging teams to visit the Mentor Corner instead of quietly losing hours to problems someone else could help us frame. Mentors from Xbox, Mojang Studios, GitHub, Endless, and the wider game-development community were available to talk through technical feasibility, production, design direction, careers, and the reality of making games professionally.

That access changed the rhythm of the weekend. Instead of treating every obstacle like a private test of competence, we could bring the work to someone who had already seen fifty versions of the same trap.

Sometimes the answer was a solution.

Sometimes it was a workaround.

Sometimes it was, "That is probably too much for this weekend."

That last answer may have been the most valuable one.

![A group discussion inside the MIX Center during Xbox Game Camp Arizona.](/images/notes/three-days-one-castle-next-wave/05-mentor-corner.webp)

*The weekend worked because people kept bringing unfinished problems into shared space.*

## The Player Is Not Only Reading The Screen

Saturday also changed how I thought about player experience.

In interface work, I usually think about reducing unnecessary friction. A person should know where they are, what action is available, what changed after they acted, and how to recover if something goes wrong.

Games do not cancel that logic, but they complicate it.

In a game, friction can be the point.

Confusion can create mystery. Waiting can create tension. Failure can create learning. Difficulty can create satisfaction. The goal is not to make everything easy. The goal is to make every hard thing feel intentional.

A trap can surprise the player, but it should not feel random.

A path can be difficult to find, but the environment should still leave a trail.

A control can take practice, but the player needs enough feedback to understand what went wrong.

A room can feel dangerous before anything attacks, simply through lighting, sound, scale, composition, or the placement of one object in the wrong place.

That weekend helped me see player experience as larger than menus, buttons, HUD elements, and inventory screens. It exists in the distance between two platforms. It exists in the pause before a trap activates. It exists in the way lighting pulls the player toward one doorway instead of another. It exists in the moment a player understands a rule without reading a paragraph about it.

The player is always reading.

Not just text.

They are reading space, timing, behavior, sound, surprise, and consequence.

Once I started thinking that way, every design decision looked different. The question was no longer only, "Does this work?" It became: what does this teach before it explains itself?

That is a much harder question. It is also a better one.

## The Photograph Outside

By Saturday evening, time had become hard to measure.

Game-jam time does not move in hours. It moves in builds.

One more test. One more room. One more asset. One more small adjustment before showing it to someone. One more idea that seems tiny until it touches every other part of the prototype.

At 8 p.m., everyone was asked to gather outside the MIX Center for a group photograph.

For a few minutes, laptops closed.

Teams emerged from different floors and rooms. Developers who had spent the day studying scripts stood beside artists, designers, organizers, mentors, students, producers, and people who had only met the night before. The event suddenly became visible as a whole instead of as separate tables of stress and concentration.

Then the photograph ended.

People went back inside.

The builds continued.

![Xbox Game Camp Arizona group photo in front of a large event screen.](/images/notes/three-days-one-castle-next-wave/06-group-photo.webp)

*A short pause before everyone went back to the builds.*

## Sunday: The Morning Of Necessary Cuts

Sunday arrived too quickly.

The submission deadline was 2 p.m., which meant the morning was no longer about discovering what the game could be. It was about protecting what the game already was.

Every feature had to defend its existence.

Did it help someone understand the build?

Could it be finished?

Could it be tested?

Would a player understand it without us standing beside them, narrating every intention?

Were we keeping it because it served the game, or because we had already spent time on it?

That last question is painful. It is also where the work gets honest.

The projects were considered across three categories: Gameplay Innovation, Brand and Theme Authenticity, and Team Spirit and Camaraderie. I appreciated that teamwork was not treated like a decorative extra. A prototype may appear as one experience on a screen, but it is assembled from hundreds of human decisions before it ever reaches a player.

Who notices that someone is stuck?

Who asks for feedback?

Who changes direction without making it a personal defeat?

Who protects the team from adding one more impossible feature?

Who keeps moving when the project no longer resembles the original plan?

Our team had different experience levels and different ways of approaching problems. That could have fragmented the work. Instead, it became one of its strengths. We adapted. We divided responsibility. We learned from each other. We changed the concept when it needed to change.

And by Sunday, we had more than a design document.

We had built something together.

![A close view of the Xbox Game Camp Arizona sign at the ASU MIX Center.](/images/notes/three-days-one-castle-next-wave/07-game-camp-signage.webp)

*By Sunday, the event signage felt less like a backdrop and more like proof that the weekend had actually happened.*

## After The Deadline

The most valuable part of Xbox Game Camp was not one mechanic, presentation, award, or technical feature.

It was momentum.

I entered the weekend with an interest in games, some experience making digital things, and limited time inside Endstar. I left with a better understanding of level design, game feedback, environmental communication, production constraints, rapid prototyping, and the way different disciplines overlap during development.

I also left with three teammates I had not known before Friday.

After the event, our group chat did not immediately disappear. We shared photographs, Discord communities, game links, industry announcements, development resources, and thoughts about what the project could become. One teammate believed the idea had enough potential to become a real Steam game. Another reminded us to make sure the level was preserved.

I asked whether our work would disappear after the event. The Endless team later confirmed that the levels would remain and were planned for a future showcase.

That mattered more than I expected.

It meant the weekend did not end as a deleted build and a folder nobody opened again. The project became evidence that four people could meet, disagree, adjust, learn a new workflow, and turn a rough concept into a shared experience within three days.

The game was not perfect.

Of course it was not.

But perfection was never the lesson.

The lesson was that a game idea becomes better when it is allowed to be changed by reality: by the tool, by the people building it, by the limits of time, and eventually by the player who has to understand it without access to the story in your head.

Three days earlier, I had entered Discord asking whether we could avoid building in 3D.

By the end, I was thinking about castles as decision systems, hallways as choices, traps as feedback, and failure as part of the player experience.

I did not leave Xbox Game Camp with a finished story.

I left with better instincts, new collaborators, and a much clearer idea of what I want to build next.

Sometimes that is the best reward a game jam can give you.

Not a conclusion.

A reason to press Continue.

## Acknowledgments

Thank you to Xbox Game Camp, Microsoft, Arizona State University, the ASU MIX Center, Endless Games and Learning Lab, Endless Studios, GitHub, and everyone who helped organize and support the weekend.

Thank you to the mentors and speakers who shared their experience, tested unfinished ideas, answered technical questions, and helped teams find the useful version of what they were trying to make.

And thank you to Warren Andrus, Chris Goodman, and Gabe Isko for turning a Friday-night conversation into Next Wave Studios.
