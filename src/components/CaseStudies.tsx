"use client";

import { motion } from "framer-motion";
import { caseStudies, assets } from "../data/site";
import { AnimatedHeading } from "./ui/AnimatedHeading";
import { Reveal } from "./ui/Reveal";
import { stagger, fadeUp, viewportOnce } from "../lib/motion";

const images = [assets.caseStudy1, assets.panorama];

export function CaseStudies() {
  return (
    <section className="bg-cream py-24 md:py-28">
      <div className="container-x">
        <Reveal>
          <span className="eyebrow">{caseStudies.eyebrow}</span>
        </Reveal>
        <div className="mt-6 flex flex-col items-start justify-between gap-6 md:flex-row md:items-start">
          <AnimatedHeading
            text={caseStudies.title}
            accent={["case", "studies"]}
            className="max-w-2xl font-display text-[30px] font-medium leading-[1.12] text-ink md:text-[40px]"
          />
          <Reveal delay={0.05}>
            <a href="#" className="btn-lime whitespace-nowrap">
              {caseStudies.cta}
            </a>
          </Reveal>
        </div>

        <motion.div
          variants={stagger(0.14)}
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          className="mt-14 grid grid-cols-1 gap-5 md:grid-cols-2"
        >
          {caseStudies.items.map((cs, i) => (
            <motion.article
              key={cs.name}
              variants={fadeUp}
              className="group grid grid-cols-1 gap-6 rounded-3xl bg-white p-3 transition-transform duration-300 hover:-translate-y-1.5 sm:grid-cols-2"
            >
              {/* Left: title + stats */}
              <div className="flex flex-col p-4 sm:p-5">
                <h3 className="font-display text-[24px] font-medium capitalize leading-[1.15] text-ink md:text-[28px]">
                  {cs.name} {cs.tag}
                </h3>
                <div className="mt-auto flex flex-col rounded-2xl border border-black/10 p-4">
                  {cs.stats.map((s, j) => (
                    <div
                      key={s.label}
                      className={`flex items-center gap-4 py-3 ${
                        j !== 0 ? "border-t border-dashed border-black/15" : ""
                      }`}
                    >
                      <span className="w-16 shrink-0 font-display text-[26px] font-semibold text-gray-mute">
                        {s.value}
                      </span>
                      <span className="text-[13px] leading-snug text-gray-body">
                        {s.label}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Right: image */}
              <div className="overflow-hidden rounded-2xl">
                <img
                  src={images[i]}
                  alt={cs.name}
                  className="h-[240px] w-full object-cover transition-transform duration-700 group-hover:scale-105 sm:h-full sm:min-h-[300px]"
                  loading="lazy"
                />
              </div>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
