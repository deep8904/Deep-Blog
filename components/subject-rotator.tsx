"use client";

import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { useEffect, useState } from "react";

const subjects = ["software", "interfaces", "games", "photography"] as const;

export function SubjectRotator() {
  const [index, setIndex] = useState(0);
  const prefersReducedMotion = useReducedMotion();

  useEffect(() => {
    if (prefersReducedMotion || index >= subjects.length - 1) return;

    const timer = window.setTimeout(() => {
      setIndex((current) => current + 1);
    }, 1700);

    return () => window.clearTimeout(timer);
  }, [index, prefersReducedMotion]);

  if (prefersReducedMotion) {
    return <span className="subject-rotator">software / interfaces / games / photography</span>;
  }

  return (
    <span className="subject-rotator" aria-label="software, interfaces, games, and photography">
      <AnimatePresence mode="wait" initial={false}>
        <motion.span
          key={subjects[index]}
          initial={{ y: "110%", opacity: 0 }}
          animate={{ y: "0%", opacity: 1 }}
          exit={{ y: "-110%", opacity: 0 }}
          transition={{ duration: 0.42, ease: [0.22, 1, 0.36, 1] }}
        >
          {subjects[index]}
        </motion.span>
      </AnimatePresence>
    </span>
  );
}
