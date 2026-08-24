import type { Variants } from "framer-motion";

// Framer's default entrance easing feels like this smooth ease-out.
export const EASE = [0.25, 0.1, 0.25, 1] as const;
export const EASE_OUT = [0.16, 1, 0.3, 1] as const;

// Standard "fade + rise" reveal, the signature Framer on-scroll appear effect.
export const fadeUp: Variants = {
  hidden: { opacity: 0, y: 28, filter: "blur(4px)" },
  show: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: 0.7, ease: EASE_OUT },
  },
};

export const fadeIn: Variants = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { duration: 0.8, ease: EASE } },
};

export const scaleIn: Variants = {
  hidden: { opacity: 0, scale: 0.94 },
  show: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.7, ease: EASE_OUT },
  },
};

// Container that staggers its children when it enters the viewport.
export const stagger = (staggerChildren = 0.09, delayChildren = 0): Variants => ({
  hidden: {},
  show: {
    transition: { staggerChildren, delayChildren },
  },
});

// Shared viewport config so every section reveals once, slightly before fully in view.
export const viewportOnce = { once: true, amount: 0.25, margin: "0px 0px -10% 0px" };

// Word-by-word heading reveal (used for big hero + section titles).
export const wordContainer: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.045, delayChildren: 0.05 } },
};
export const wordChild: Variants = {
  hidden: { opacity: 0, y: "0.5em" },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: EASE_OUT },
  },
};
