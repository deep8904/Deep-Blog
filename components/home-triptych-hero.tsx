"use client";

import Link from "next/link";
import { motion, useReducedMotion } from "motion/react";

const disciplines = [
  {
    index: "01",
    label: "Making",
    detail: "Small builds, rough prototypes, and the decisions that only appear once an idea has to work.",
  },
  {
    index: "02",
    label: "Games",
    detail: "Rules, feedback, levels, pacing, and the small cues that help a player understand what changed.",
  },
  {
    index: "03",
    label: "Looking",
    detail: "Photography, notes, and the details that make a scene, interface, or moment easier to read.",
  },
] as const;

export function HomeTriptychHero({ publishedCount }: { publishedCount: number }) {
  const count = String(publishedCount).padStart(2, "0");
  const reducedMotion = useReducedMotion();
  const transition = { duration: 0.54, ease: [0.2, 0.8, 0.2, 1] } as const;

  return (
    <section className="identity-hero" aria-labelledby="home-title">
      <motion.div
        className="identity-hero__meta"
        initial={reducedMotion ? false : { opacity: 0, y: -8 }}
        animate={reducedMotion ? undefined : { opacity: 1, y: 0 }}
        transition={{ ...transition, duration: 0.42 }}
      >
        <span>[ PERSONAL FIELD NOTES ]</span>
        <span>PHOENIX / EST. 2026</span>
      </motion.div>

      <div className="identity-hero__main">
        <div className="identity-hero__copy">
          <motion.div
            className="identity-hero__status"
            whileHover={reducedMotion ? undefined : { y: -1 }}
            transition={transition}
          >
            <i aria-hidden="true" />
            <span>Notebook active</span>
          </motion.div>

          <motion.h1
            id="home-title"
            initial={false}
          >
            <motion.span>I keep notes</motion.span>
            <motion.span>while ideas <em>change.</em></motion.span>
          </motion.h1>

          <motion.p
            className="identity-hero__intro"
            initial={false}
          >
            Loose Thread is where I slow down after making something and write
            down what actually happened: the useful mistake, the better question,
            the photograph that changed how I saw a scene, or the game idea that
            became clearer only after it pushed back.
          </motion.p>

          <motion.div
            className="identity-hero__actions"
            initial={false}
          >
            <Link className="primary-button" href="/notes">
              <span>Read the writing</span>
              <span aria-hidden="true">→</span>
            </Link>
            <Link className="identity-hero__secondary" href="/about">
              About Deep
            </Link>
          </motion.div>
        </div>

        <motion.aside
          className="identity-hero__visual"
          aria-label="Loose Thread visual journal"
          initial={false}
          whileHover={reducedMotion ? undefined : { y: -4 }}
          transition={transition}
        >
          <div className="identity-hero__image" role="img" aria-label="Loose Thread hero photograph" />
          <div className="identity-hero__visual-footer">
            <div>
              <span>PUBLISHED WRITING</span>
              <strong>{count} published {publishedCount === 1 ? "note" : "notes"}</strong>
            </div>
            <span className="identity-hero__version">LT / 01</span>
          </div>
        </motion.aside>
      </div>

      <div className="identity-hero__disciplines" aria-label="Topics covered on Loose Thread">
        {disciplines.map((discipline) => (
          <motion.article
            key={discipline.index}
            initial={false}
            whileHover={reducedMotion ? undefined : { y: -2 }}
            transition={{ ...transition, duration: 0.32 }}
          >
            <span>{discipline.index}</span>
            <div>
              <strong>{discipline.label}</strong>
              <p>{discipline.detail}</p>
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  );
}
