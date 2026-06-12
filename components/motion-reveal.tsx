"use client";

import { motion, useReducedMotion } from "motion/react";
import { Fragment, type ReactNode } from "react";

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
      initial={false}
      whileInView={prefersReducedMotion ? { opacity: 1 } : { opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-8%" }}
      transition={{ ...transition, delay }}
    >
      {children}
    </motion.div>
  );
}

type MaskedHeadingProps = {
  id?: string;
  children: string;
  className?: string;
  as?: "h1" | "h2";
};

export function MaskedHeading({ id, children, className, as = "h1" }: MaskedHeadingProps) {
  const prefersReducedMotion = useReducedMotion();
  const Heading = as;
  const lines = children.split("\n").map((line) => line.trim()).filter(Boolean);

  return (
    <Heading id={id} className={className}>
      {lines.map((line, index) => (
        <Fragment key={line}>
          <span className="masked-line">
            <motion.span
              initial={false}
              animate={prefersReducedMotion ? undefined : { y: "0%" }}
              transition={{
                duration: 0.75,
                delay: 0.08 + index * 0.08,
                ease: [0.22, 1, 0.36, 1],
              }}
            >
              {line}
            </motion.span>
          </span>
          {index < lines.length - 1 ? " " : null}
        </Fragment>
      ))}
    </Heading>
  );
}
