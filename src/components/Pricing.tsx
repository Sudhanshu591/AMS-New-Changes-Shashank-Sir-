"use client";

import { motion } from "framer-motion";
import { pricing } from "../data/site";
import { AnimatedHeading } from "./ui/AnimatedHeading";
import { Reveal } from "./ui/Reveal";
import { Check } from "./ui/icons";
import { stagger, fadeUp, viewportOnce } from "../lib/motion";

export function Pricing() {
  return (
    <section id="pricing" className="bg-ink py-16 text-white md:py-20">
      <div className="container-x flex flex-col items-center text-center">
        <Reveal>
          <span className="eyebrow eyebrow-dark">{pricing.eyebrow}</span>
        </Reveal>
        <AnimatedHeading
          text={pricing.title}
          accent={["port"]}
          tone="lime"
          className="mt-6 max-w-2xl font-display text-[30px] font-medium leading-[1.12] md:text-[42px]"
        />
        <Reveal delay={0.05}>
          <p className="mt-5 max-w-xl text-[15px] leading-relaxed text-white/60">
            {pricing.subtitle}
          </p>
        </Reveal>

        <motion.div
          variants={stagger(0.12)}
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          className="mt-16 grid w-full grid-cols-1 gap-5 text-left lg:grid-cols-3 lg:items-stretch"
        >
          {pricing.plans.map((plan) => {
            const featured = plan.featured;
            return (
              <motion.article
                key={plan.name}
                variants={fadeUp}
                className={`relative flex flex-col rounded-3xl p-8 ${
                  featured
                    ? "bg-lime text-ink lg:-my-3 lg:py-11 shadow-2xl"
                    : "bg-ink-2 text-white"
                }`}
              >
                {featured && (
                  <span className="absolute right-6 top-6 rounded-pill bg-ink px-3 py-1.5 text-[11px] font-medium uppercase tracking-[0.08em] text-lime">
                    Recommended
                  </span>
                )}
                <span
                  className={`inline-flex w-fit items-center rounded-pill px-3 py-1.5 text-[11px] font-medium uppercase tracking-[0.08em] ${
                    featured
                      ? "bg-ink/10 text-ink/70"
                      : "border border-white/15 text-white/55"
                  }`}
                >
                  {plan.scale}
                </span>
                <h3 className="mt-5 font-display text-[24px] font-medium">{plan.name}</h3>
                <p
                  className={`mt-2 text-[14px] leading-relaxed ${
                    featured ? "text-ink/70" : "text-white/60"
                  }`}
                >
                  {plan.tagline}
                </p>

                <a
                  href="#contact"
                  className={`mt-8 inline-flex items-center justify-center rounded-pill px-5 py-3.5 text-[13px] font-medium transition-transform duration-300 ease-framer hover:scale-[1.03] active:scale-95 ${
                    featured
                      ? "bg-ink text-white"
                      : "bg-lime text-ink"
                  }`}
                >
                  {plan.cta}
                </a>

                <ul className="mt-8 flex flex-col gap-4">
                  {plan.features.map((f) => (
                    <li key={f} className="flex items-start gap-3">
                      <span
                        className={`mt-0.5 shrink-0 ${
                          featured ? "text-ink" : "text-lime"
                        }`}
                      >
                        <Check />
                      </span>
                      <span
                        className={`text-[15px] leading-snug ${
                          featured ? "text-ink/80" : "text-white/70"
                        }`}
                      >
                        {f}
                      </span>
                    </li>
                  ))}
                </ul>
              </motion.article>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
