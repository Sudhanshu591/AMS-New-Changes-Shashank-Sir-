"use client";

import { motion } from "framer-motion";
import { vesselOptimization } from "../data/site";
import { AnimatedHeading } from "./ui/AnimatedHeading";
import { Reveal } from "./ui/Reveal";
import { stagger, fadeUp, viewportOnce } from "../lib/motion";

// One Before/After panel: a labelled header, the anchorage diagram image, and a
// short caption. Images are square (1200×1200) so the panels stay aligned.
function Panel({
  side,
  color,
}: {
  side: { label: string; caption: string; note: string; image: string };
  color: string;
}) {
  return (
    <motion.div
      variants={fadeUp}
      className="flex flex-col rounded-3xl border border-white/10 bg-ink-2 p-5 md:p-6"
    >
      <div className="flex items-center justify-between">
        <span
          className="text-[11px] font-semibold uppercase tracking-[0.18em]"
          style={{ color }}
        >
          {side.label}
        </span>
        <span className="flex items-center gap-2 text-[13px] font-medium text-white/70">
          <span className="h-2 w-2 rounded-full" style={{ backgroundColor: color }} />
          {side.caption}
        </span>
      </div>

      <div className="mt-4 overflow-hidden rounded-2xl border border-white/10">
        <img
          src={side.image}
          alt={`${side.label} — ${side.caption}`}
          width={1200}
          height={1200}
          loading="lazy"
          className="aspect-square w-full object-cover"
        />
      </div>

      <p className="mt-4 text-[13px] leading-relaxed text-white/55">{side.note}</p>
    </motion.div>
  );
}

// Muted amber reads as "current / sub-optimal"; brand lime reads as "optimized".
const AMBER = "#F0A85E";
const LIME = "#7EEA57";

export function VesselOptimization() {
  return (
    <section id="optimization" className="bg-ink py-24 text-white md:py-28">
      <div className="container-x">
        <div className="flex flex-col items-center text-center">
          <Reveal>
            <span className="eyebrow eyebrow-dark">{vesselOptimization.eyebrow}</span>
          </Reveal>
          <AnimatedHeading
            text={vesselOptimization.title}
            accent={vesselOptimization.accent}
            tone="lime"
            className="mt-6 max-w-3xl font-display text-[30px] font-medium leading-[1.15] md:text-[42px]"
          />
          <Reveal delay={0.05}>
            <p className="mt-5 max-w-2xl text-[15px] leading-relaxed text-white/60">
              {vesselOptimization.subtitle}
            </p>
          </Reveal>
        </div>

        <motion.div
          variants={stagger(0.12)}
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          className="mt-14 grid grid-cols-1 gap-5 md:grid-cols-2 md:gap-6"
        >
          <Panel side={vesselOptimization.before} color={AMBER} />
          <Panel side={vesselOptimization.after} color={LIME} />
        </motion.div>
      </div>
    </section>
  );
}
