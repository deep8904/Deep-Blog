"use client";

import { motion, useReducedMotion, useScroll, useSpring } from "motion/react";

export function ScrollProgress() {
  const reducedMotion = useReducedMotion();
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 170,
    damping: 28,
    mass: 0.24,
  });

  return (
    <div className="scroll-progress" aria-hidden="true">
      <motion.span style={{ scaleX: reducedMotion ? scrollYProgress : scaleX }} />
    </div>
  );
}
