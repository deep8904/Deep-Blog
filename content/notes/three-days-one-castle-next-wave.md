---
title: "Three Days, One Castle, and a Team Called Next Wave"
description: "What Xbox Game Camp Arizona taught me about game design, UX, collaboration, and letting go of the first idea."
publishedAt: "2026-06-11"
updatedAt: "2026-06-11"
author: "Deepkumar Chadamiya"
topics:
  - "Game Design"
  - "UX"
  - "Collaboration"
  - "Xbox Game Camp"
draft: false
---

At some point on Friday evening, surrounded by unfamiliar faces and an equally unfamiliar game engine, I opened Discord and asked:

> Is there any way we can build this in 2D instead of 3D?

The answer was technically yes—but not really.

Endstar was a 3D engine. We could restrict the camera and create something that felt two-dimensional, but the tool was designed for a different kind of experience.

It was a small question, but it quietly became the theme of my weekend at Xbox Game Camp Arizona:

You arrive with one idea.

The tools push back.

Your teammates see something different.

The deadline starts moving faster.

And somewhere between all of that, a better game begins to appear.

<!-- IMAGE_SLOT: 01-mix-center-exterior -->

## Spawn Point: Friday

Xbox Game Camp Arizona took place from May 29–31, 2026, at Arizona State University’s MIX Center in Mesa.

The event brought together Xbox, ASU, Endless Games and Learning Lab, Endless Studios, GitHub, industry mentors, and aspiring game creators for a three-day development sprint.

The challenge was to create something inspired by Knight Lore, the influential 1984 game known for its mysterious castle, isometric world, environmental puzzles, and Sabreman—the adventurer cursed to transform into a werewolf.

I knew about game development, but I was entering from a slightly different direction.

My background is in software development, UI/UX, and visual design. I understood interfaces, user flows, feedback systems, hierarchy, and interaction patterns. What I had not done was walk into a room, meet three people, learn a new engine, reinterpret a 42-year-old game, and produce something playable before Sunday afternoon.

That was new.

Friday began with the familiar mixture of excitement and low-level panic found at every creative event where people are expected to form teams.

The room was full of individual skills searching for the right combination. Developers were discussing engines. Artists were comparing visual directions. Designers were already turning the theme into mechanics. Some people arrived with teammates. Others, including me, had to find them.

I eventually connected with Warren Andrus, Chris Goodman, and Gabe Isko.

Warren brought architectural thinking and game-design ideas. Chris focused on production and playtesting. Gabe brought development experience and a love for game engines. I contributed through UX, visual design, ideation, and the willingness to learn Endstar as quickly as possible.

Four people who had not planned to work together became a team.

Then we needed a name.

We became Next Wave Studios.

It sounded forward-looking, slightly dramatic, and ambitious enough for a team whose concept would soon grow far beyond what could reasonably be completed in a weekend.

So, naturally, it was perfect.

<!-- IMAGE_SLOT: 02-next-wave-team-formation -->

## Our First Idea Did Not Survive Friday

Our earliest concept was built around vampire hunters defending themselves against waves of supernatural enemies.

There would be a planning phase, traps, fortifications, different enemy types, resources, upgrades, and eventually an action-heavy survival sequence.

It had strategy.

It had progression.

It had enough systems to keep a full development team busy for several months.

We had approximately two days.

This is where a game jam begins teaching you whether you are truly attached to solving the problem—or merely attached to your first solution.

As we continued discussing Knight Lore, we found a more interesting perspective.

Instead of playing as hunters trying to survive a monster, what if we played as Sabreman preparing for the hunters?

He knows the next full moon is coming.

He knows another wave will enter the mansion.

He cannot stop them from arriving, but he can decide what they encounter.

The game shifted from straightforward survival into a defensive strategy concept. Players would expand the mansion, choose rooms, control pathways, place traps, weaken incoming hunters, and prepare Sabreman for a final confrontation with whoever survived.

The castle was no longer just the setting.

The castle became the weapon.

Our design grew into a four-part loop:

- Prepare the mansion
- Install traps
- Survive the hunter wave
- Use the rewards to renovate before the next attack

We imagined branching hallways, bedrooms, armories, courtyards, dungeons, prisons, spike floors, acid pools, dark rooms, oil traps, alchemy effects, and collapsing ceilings.

Did all of it make it into the weekend build?

Absolutely not.

But that did not make the design work pointless. It helped us find the central fantasy of the game: turning a place associated with being trapped into a system the player could control.

The strongest idea of the weekend was not our first idea. It was the one that survived contact with the team, the engine, and the deadline.

<!-- IMAGE_SLOT: 03-concept-moodboard -->

## Build Day: Saturday

Saturday was when the MIX Center stopped feeling like an event venue and started feeling like a studio.

Laptops occupied nearly every available surface. Conversations moved between story, code, level design, props, camera controls, audio, and the increasingly urgent question:

Can we actually build this in Endstar?

The event Discord became a kind of living manual.

Someone wanted to know how to rotate the camera in Create Mode.

Someone else was trying to edit a prop but only had view access.

People shared custom bookshelves, towers, shelves, orbs, and other assets as quickly as they could make them.

There were questions about scripts, tiles, check-ins, team access, cameras, custom props, and whether a particular feature was intentional or simply a useful glitch.

Then came the warning about the fog prop.

It was experimental, difficult to control, and apparently even harder to remove.

Every game-development weekend needs at least one feature that behaves like a supernatural entity. Ours happened to be fog.

This atmosphere made the event feel approachable. People were not hiding their confusion. Everyone was learning in public.

Questions that might normally feel embarrassing became useful information for the entire room.

The organizers repeatedly encouraged teams to visit the Mentor Corner rather than lose hours trying to solve every problem alone. Mentors from Xbox, Mojang Studios, GitHub, Endless, and the wider game-development community were available to discuss technical feasibility, design ideas, production, careers, and the realities of building games professionally.

That access changed the rhythm of the weekend.

Instead of sitting silently with a problem, we could bring it to someone who had already encountered fifty versions of it.

Sometimes the answer was a solution.

Sometimes it was a workaround.

Sometimes it was: “That is probably too much for this weekend.”

That last answer may have been the most valuable.

<!-- IMAGE_SLOT: 04-endstar-build -->

## UX Is Bigger Than the Screen

Saturday also changed how I thought about UX.

In software design, I usually try to reduce unnecessary friction. A user should understand what is happening, know what action to take, and receive clear feedback when that action succeeds or fails.

Games complicate that logic.

In a game, friction can be the experience.

Confusion can create mystery.

Waiting can create tension.

Failure can create learning.

Difficulty can create satisfaction.

The goal is not to make everything easy. The goal is to make the experience intentional.

A trap can surprise the player, but it should not feel random.

A path can be difficult to find, but the environment should still provide clues.

A control can require practice, but the player needs enough feedback to understand what went wrong.

A room can feel dangerous before anything attacks, simply through lighting, sound, scale, composition, or the placement of an object.

That weekend helped me see game UX as something larger than menus, buttons, HUD elements, and inventory screens.

Game UX exists in the distance between two platforms.

It exists in the pause before a trap activates.

It exists in the way lighting pulls the player toward one doorway instead of another.

It exists in the moment a player understands a rule without reading a paragraph explaining it.

It is the entire conversation between the game and the person playing it.

Once I began thinking that way, every design decision looked different.

Instead of asking only, “Does this work?” I started asking:

Does the player understand it?

Can they predict enough to make a decision?

What does the environment communicate before the player acts?

What happens when they make the wrong choice?

And most importantly: does that failure make them curious enough to try again?

<!-- IMAGE_SLOT: 05-mentor-corner -->

## The Moment Everyone Stepped Away From Their Screens

By Saturday evening, time had become difficult to measure.

Game-jam time does not move in hours. It moves in builds.

One more test.

One more room.

One more asset.

One more adjustment before showing it to someone.

At 8 p.m., everyone was asked to gather outside the MIX Center for a group photograph.

For a few minutes, laptops closed.

Teams emerged from different floors and rooms. Developers who had spent the day studying scripts stood beside artists, designers, organizers, mentors, students, producers, and people who had only met the night before.

The lights outside the MIX Center made the building look almost like part of a game environment.

It was one of the few moments when everyone stopped creating long enough to see the community that had formed around them.

Then the photograph ended.

People went back inside.

The builds continued.

<!-- IMAGE_SLOT: 06-group-photo -->

## Final Boss: Sunday at 2 p.m.

Sunday arrived far too quickly.

The submission deadline was 2 p.m., which meant the morning became an exercise in disciplined compromise.

At this stage, every feature had to defend its existence.

Does this improve the playable experience?

Can it be finished?

Can it be tested?

Will someone understand it without us explaining everything?

Or are we keeping it because we already spent time on it?

That last question is painful, but necessary.

The projects were considered across three categories:

- Gameplay Innovation
- Brand and Theme Authenticity
- Team Spirit and Camaraderie

I appreciated that teamwork was not treated as a side note.

A prototype may appear as one experience on a screen, but it is assembled from hundreds of small human decisions.

Who gets heard?

Who changes direction?

Who notices that someone is stuck?

Who asks for feedback?

Who protects the team from adding one more impossible feature?

Who keeps everyone moving when the project no longer resembles the original plan?

Our team had different levels of experience and different ways of approaching problems. That could have fragmented the project. Instead, it became one of its strengths.

We adapted.

We divided responsibilities.

We learned from each other.

We changed the concept when it needed to change.

And when Sunday arrived, we had more than a design document.

We had built something together.

<!-- IMAGE_SLOT: 07-final-build-presentation -->

## What Stayed With Me

The most valuable part of Xbox Game Camp was not a single mechanic, presentation, award, or technical feature.

It was momentum.

I entered the event with experience in software and UX, an interest in games, and limited experience working inside Endstar.

I left with a better understanding of level design, game feedback, environmental communication, production constraints, rapid prototyping, and the way different disciplines overlap during development.

I also left with three teammates I had not known before Friday.

After the event, our group chat did not immediately disappear.

We shared photographs, Discord communities, game links, industry announcements, development resources, and thoughts about what the project could become.

One teammate believed the idea had enough potential to become a real Steam game.

Another reminded us to make sure the level was preserved.

I asked whether our work would disappear after the event. The Endless team later confirmed that the levels would remain and were planned for a future showcase.

That mattered.

It meant the weekend did not end with a deleted build and a folder nobody opened again.

The project became evidence that four people could meet, disagree, adjust, learn a new workflow, and transform a rough concept into a shared experience within three days.

<!-- IMAGE_SLOT: 08-next-wave-team-closing -->

## Continue?

Xbox Game Camp Arizona reminded me that game development is not a clean journey from idea to execution.

It is negotiation.

Between ambition and time.

Between design and technology.

Between what the creator intends and what the player actually experiences.

Between protecting an idea and allowing it to become better.

Our first concept changed.

Our scope changed.

Our understanding of the engine changed.

By Sunday, even the way I thought about UX had changed.

That is what made the weekend successful for me.

Not that everything worked.

Not that every system was completed.

But that we kept learning quickly enough to continue moving.

Three days earlier, I had entered the Discord asking whether we could avoid building in 3D.

By the end, I was thinking about castles as interfaces, hallways as decisions, traps as feedback systems, and failure as part of the player experience.

I did not leave Xbox Game Camp with a perfect game.

I left with better instincts, new collaborators, and a much clearer idea of what I want to build next.

Sometimes that is the best reward a game jam can give you.

Not a finished story.

A reason to press Continue.

## Acknowledgments

Thank you to Xbox Game Camp, Microsoft, Arizona State University, the ASU MIX Center, Endless Games and Learning Lab, Endless Studios, GitHub, and everyone who helped organize and support the weekend.

Thank you to the mentors and speakers who shared their experience, tested unfinished ideas, answered technical questions, and reminded us when our scope was becoming more dangerous than Sabreman’s castle.

And thank you to my teammates—Warren Andrus, Chris Goodman, and Gabe Isko—for turning a Friday-night conversation into Next Wave Studios.
