"use client";

import { motion } from "framer-motion";
import { metrics } from "../data/site";
import { AnimatedHeading } from "./ui/AnimatedHeading";
import { Reveal } from "./ui/Reveal";
import { Counter } from "./ui/Counter";
import { IconArrowDown, IconDroplet, IconCloud, IconPin } from "./ui/icons";
import { stagger, fadeUp, viewportOnce } from "../lib/motion";

const iconMap: Record<string, (p: { className?: string }) => JSX.Element> = {
  arrowDown: IconArrowDown,
  droplet: IconDroplet,
  cloud: IconCloud,
  pin: IconPin,
};

export function Metrics() {
  return (
    <section className="bg-cream py-20 md:py-24">
      <div className="container-x flex flex-col items-center text-center">
        <Reveal>
          <span className="eyebrow">{metrics.eyebrow}</span>
        </Reveal>
        <AnimatedHeading
          text={metrics.title}
          accent={["vessel,", "berth", "anchorage."]}
          className="mt-6 max-w-3xl font-display text-[26px] font-medium leading-[1.2] text-ink md:text-[40px]"
        />

        <motion.div
          variants={stagger(0.12)}
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          className="mt-16 grid w-full grid-cols-2 overflow-hidden rounded-3xl border border-black/10 md:grid-cols-4"
        >
          {metrics.stats.map((s, i) => {
            const Icon = iconMap[s.icon] ?? IconArrowDown;
            return (
              <motion.div
                key={s.label}
                variants={fadeUp}
                className={`flex flex-col items-center justify-between gap-16 px-6 py-10 ${
                  i < metrics.stats.length - 1 ? "md:border-r md:border-black/10" : ""
                } ${i % 2 === 0 ? "border-r border-black/10 md:border-r" : ""} ${
                  i < 2 ? "border-b border-black/10 md:border-b-0" : ""
                }`}
              >
                <div className="text-[13px] font-medium text-gray-mute">{s.label}</div>
                <div className="flex flex-col items-center gap-4">
                  <span className="text-ink">
                    <Icon />
                  </span>
                  <div className="font-display text-[48px] font-medium leading-none text-ink md:text-[64px]">
                    <Counter value={s.value} suffix={s.suffix} />
                  </div>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
