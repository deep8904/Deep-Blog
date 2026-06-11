"use client";

import { motion, useReducedMotion } from "motion/react";
import type { ReactNode } from "react";

type MotionRevealProps = {
  children: ReactNode;
  className?: string;
  delay?: number;
};

const transition = {
  duration: 0.55,
  ease: [0.22, 1, 0.36, 1] as const,
};

export function MotionReveal({ children, className, delay = 0 }: MotionRevealProps) {
  const prefersReducedMotion = useReducedMotion();

  return (
    <motion.div
      className={className}
      initial={prefersReducedMotion ? false : { y: 18 }}
      animate={prefersReducedMotion ? undefined : { y: 0 }}
      transition={{ ...transition, delay }}
    >
      {children}
    </motion.div>
  );
}
