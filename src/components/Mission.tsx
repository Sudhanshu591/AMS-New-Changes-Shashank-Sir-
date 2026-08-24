"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { mission, assets } from "../data/site";
import { AnimatedHeading } from "./ui/AnimatedHeading";
import { Reveal } from "./ui/Reveal";
import { stagger, fadeUp, viewportOnce } from "../lib/motion";

// Each image drifts vertically at its own rate while the section scrolls past.
function ParallaxImage({
  src,
  alt,
  index,
  progress,
}: {
  src: string;
  alt: string;
  index: number;
  progress: import("framer-motion").MotionValue<number>;
}) {
  // side images move more than the taller centre image
  const range = index === 1 ? 30 : 70;
  const y = useTransform(progress, [0, 1], [range, -range]);
  return (
    <motion.figure
      variants={fadeUp}
      style={{ y }}
      className="group flex-1 overflow-hidden rounded-3xl"
    >
      <img
        src={src}
        alt={alt}
        className={`w-full object-cover transition-transform duration-700 group-hover:scale-105 ${
          index === 1 ? "h-[360px] md:h-[560px]" : "h-[300px] md:h-[460px]"
        }`}
        loading="lazy"
      />
    </motion.figure>
  );
}

export function Mission() {
  const galleryRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: galleryRef,
    offset: ["start end", "end start"],
  });

  return (
    <section className="bg-cream py-24 md:py-28">
      <div className="container-x flex flex-col items-center text-center">
        <Reveal>
          <span className="eyebrow">{mission.eyebrow}</span>
        </Reveal>

        <AnimatedHeading
          text={mission.title}
          accent={["redefining", "anchorage", "berth"]}
          className="mt-6 max-w-4xl font-display text-[28px] font-medium leading-[1.18] text-ink md:text-[40px] md:leading-[1.15]"
        />

        {/* Three images with scroll parallax */}
        <motion.div
          ref={galleryRef}
          variants={stagger(0.14)}
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          className="mt-14 flex w-full items-start justify-center gap-4 sm:gap-6"
        >
          {assets.mission.map((src, i) => (
            <ParallaxImage
              key={i}
              src={src}
              alt={mission.captions[i]}
              index={i}
              progress={scrollYProgress}
            />
          ))}
        </motion.div>

        <Reveal delay={0.1} className="mt-10">
          <a href="#" className="btn-lime">
            {mission.cta}
          </a>
        </Reveal>

        <motion.div
          variants={stagger(0.1)}
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          className="mt-8 flex flex-wrap items-center justify-center gap-x-8 gap-y-3"
        >
          {mission.captions.map((c) => (
            <motion.span
              key={c}
              variants={fadeUp}
              className="flex items-center gap-2 text-[14px] font-medium text-gray-body"
            >
              <span className="h-1.5 w-1.5 rounded-full bg-lime" />
              {c}
            </motion.span>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
