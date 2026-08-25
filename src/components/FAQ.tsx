"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { faq } from "../data/site";
import { AnimatedHeading } from "./ui/AnimatedHeading";
import { Reveal } from "./ui/Reveal";
import { stagger, fadeUp, viewportOnce, EASE_OUT } from "../lib/motion";

export function FAQ() {
  const [open, setOpen] = useState<number>(0);

  return (
    <section id="faq" className="bg-cream py-16 md:py-20">
      <div className="container-x grid grid-cols-1 gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">
        {/* Left heading */}
        <div>
          <Reveal>
            <span className="eyebrow">{faq.eyebrow}</span>
          </Reveal>
          <AnimatedHeading
            text={faq.title}
            accent={["questions"]}
            className="mt-6 max-w-sm font-display text-[30px] font-medium leading-[1.12] text-ink md:text-[40px]"
          />
          <Reveal delay={0.05}>
            <p className="mt-5 max-w-sm text-[15px] leading-relaxed text-gray-body">
              {faq.subtitle}
            </p>
          </Reveal>
        </div>

        {/* Right accordion */}
        <motion.div
          variants={stagger(0.08)}
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          className="flex flex-col"
        >
          {faq.items.map((item, i) => {
            const isOpen = open === i;
            return (
              <motion.div
                key={item.q}
                variants={fadeUp}
                className={`py-6 ${
                  i !== 0 ? "border-t border-dashed border-black/15" : ""
                }`}
              >
                <button
                  onClick={() => setOpen(isOpen ? -1 : i)}
                  className="flex w-full items-center justify-between gap-6 text-left"
                  aria-expanded={isOpen}
                >
                  <span className="font-display text-[18px] font-medium text-ink md:text-[22px]">
                    {item.q}
                  </span>
                  <span
                    className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-full transition-colors duration-300 ${
                      isOpen ? "bg-lime text-ink" : "border border-black/15 text-ink"
                    }`}
                  >
                    <motion.span
                      animate={{ rotate: isOpen ? 45 : 0 }}
                      transition={{ duration: 0.3, ease: EASE_OUT }}
                      className="text-[20px] leading-none"
                    >
                      +
                    </motion.span>
                  </span>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      key="content"
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.35, ease: EASE_OUT }}
                      className="overflow-hidden"
                    >
                      <p className="mt-4 max-w-xl text-[15px] leading-relaxed text-gray-body">
                        {item.a}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
