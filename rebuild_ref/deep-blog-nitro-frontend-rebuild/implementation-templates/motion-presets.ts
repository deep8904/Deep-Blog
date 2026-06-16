// Motion for React presets — adapt rather than copying blindly.
export const easeOutExpo = [0.16, 1, 0.3, 1] as const;
export const easeOutQuint = [0.22, 1, 0.36, 1] as const;

export const pageReveal = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      duration: 0.2,
      when: "beforeChildren",
      staggerChildren: 0.07,
    },
  },
};

export const lineReveal = {
  hidden: { y: "115%" },
  visible: {
    y: "0%",
    transition: { duration: 0.75, ease: easeOutQuint },
  },
};

export const fadeUp = {
  hidden: { opacity: 0, y: 18 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: easeOutQuint },
  },
};

export const gridLineX = {
  hidden: { scaleX: 0 },
  visible: {
    scaleX: 1,
    transition: { duration: 1.0, ease: easeOutExpo },
  },
};

export const gridLineY = {
  hidden: { scaleY: 0 },
  visible: {
    scaleY: 1,
    transition: { duration: 1.0, ease: easeOutExpo },
  },
};

export const mediaReveal = {
  hidden: { clipPath: "inset(100% 0% 0% 0%)" },
  visible: {
    clipPath: "inset(0% 0% 0% 0%)",
    transition: { duration: 0.8, ease: easeOutExpo },
  },
};
