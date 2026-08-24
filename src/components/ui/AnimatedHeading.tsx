"use client";

import { Fragment } from "react";
import { motion } from "framer-motion";
import { wordContainer, wordChild, viewportOnce } from "../../lib/motion";

type Props = {
  text: string;
  className?: string;
  /** words rendered in the accent color */
  accent?: string[];
  /** accent color: gray on light sections, lime on the dark ones (matches the source) */
  tone?: "gray" | "lime";
  as?: "h1" | "h2" | "h3";
};

/** Heading that reveals word by word, rising into place — Framer's title effect. */
export function AnimatedHeading({
  text,
  className,
  accent = [],
  tone = "gray",
  as = "h2",
}: Props) {
  const words = text.split(" ");
  const MotionTag = motion[as];
  const accentClass = tone === "lime" ? "text-lime" : "text-[#7B7B7B]";
  return (
    <MotionTag
      className={className}
      variants={wordContainer}
      initial="hidden"
      whileInView="show"
      viewport={viewportOnce}
    >
      {words.map((word, i) => {
        const clean = word.replace(/[.,]/g, "").toLowerCase();
        const isAccent = accent.some((a) => a.toLowerCase() === clean);
        return (
          <Fragment key={i}>
            <motion.span
              variants={wordChild}
              className={`inline-block ${isAccent ? accentClass : ""}`}
            >
              {word}
            </motion.span>
            {i < words.length - 1 ? " " : ""}
          </Fragment>
        );
      })}
    </MotionTag>
  );
}
