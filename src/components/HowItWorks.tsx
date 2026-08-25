"use client";

import { motion } from "framer-motion";
import { howItWorks } from "../data/site";
import { AnimatedHeading } from "./ui/AnimatedHeading";
import { Reveal } from "./ui/Reveal";
import { stagger, fadeUp, viewportOnce } from "../lib/motion";

export function HowItWorks() {
  return (
    <section id="how-it-works" className="bg-ink py-16 text-white md:py-20">
      <div className="container-x">
        <Reveal>
          <span className="eyebrow eyebrow-dark">{howItWorks.eyebrow}</span>
        </Reveal>
        <div className="mt-6 flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <AnimatedHeading
            text={howItWorks.title}
            accent={["four", "steps"]}
            tone="lime"
            className="max-w-2xl font-display text-[32px] font-medium leading-[1.1] md:text-[44px]"
          />
          <Reveal delay={0.05}>
            <p className="max-w-sm text-[15px] leading-relaxed text-white/60">
              {howItWorks.subtitle}
            </p>
          </Reveal>
        </div>

        <motion.div
          variants={stagger(0.1)}
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          className="mt-14 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4"
        >
          {howItWorks.steps.map((step, i) => (
            <motion.article
              key={step.title}
              variants={fadeUp}
              className="flex flex-col rounded-3xl bg-ink-2 p-8 transition-colors duration-300 hover:bg-[#323232]"
            >
              <span className="font-display text-[44px] font-medium leading-none text-lime">
                0{i + 1}
              </span>
              <h3 className="mt-8 font-display text-[22px] font-medium leading-tight">
                {step.title}
              </h3>
              <p className="mt-3 flex-1 text-[15px] leading-relaxed text-white/60">
                {step.body}
              </p>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
