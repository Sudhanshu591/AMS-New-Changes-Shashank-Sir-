"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { industries } from "../data/site";
import { AnimatedHeading } from "./ui/AnimatedHeading";
import { Reveal } from "./ui/Reveal";
import { Check } from "./ui/icons";
import { EASE_OUT } from "../lib/motion";

// Small line-style glyphs for the industry cards.
const TabIcon = ({ i }: { i: number }) => {
  const p = { fill: "none", stroke: "currentColor", strokeWidth: 1.6, strokeLinecap: "round" as const, strokeLinejoin: "round" as const };
  const icons = [
    // Real-time monitoring
    <svg viewBox="0 0 24 24" width="22" height="22" {...p} key="0">
      <path d="M4 9h16l-1-4H5L4 9zm0 0v9a1 1 0 001 1h14a1 1 0 001-1V9M4 9a2 2 0 004 0 2 2 0 004 0 2 2 0 004 0 2 2 0 004 0" />
    </svg>,
    // Occupancy management
    <svg viewBox="0 0 24 24" width="22" height="22" {...p} key="1">
      <circle cx="8" cy="8" r="3" /><circle cx="16" cy="16" r="3" />
      <path d="M8 11v2m8-6v2M5.5 6L4 4m12 12l1.5 2" />
    </svg>,
    // Anchorage assignment
    <svg viewBox="0 0 24 24" width="22" height="22" {...p} key="2">
      <path d="M12 20s-7-4.5-7-9a4 4 0 017-2.5A4 4 0 0119 11c0 4.5-7 9-7 9z" />
    </svg>,
    // Berthing management
    <svg viewBox="0 0 24 24" width="22" height="22" {...p} key="3">
      <path d="M5 3v7a3 3 0 006 0V3M8 3v18M17 3c-1.5 0-2 3-2 6s.5 4 2 4 2-1 2-4-.5-6-2-6zm0 10v8" />
    </svg>,
    // Safety & compliance
    <svg viewBox="0 0 24 24" width="22" height="22" {...p} key="4">
      <path d="M12 3l7 3v5c0 4.5-3 8-7 10-4-2-7-5.5-7-10V6l7-3z" /><path d="M9 12l2 2 4-4" />
    </svg>,
    // Analytics & reporting
    <svg viewBox="0 0 24 24" width="22" height="22" {...p} key="5">
      <path d="M4 20V4M4 20h16M8 16v-4m4 4V8m4 8v-6" />
    </svg>,
    // Alerts & notifications
    <svg viewBox="0 0 24 24" width="22" height="22" {...p} key="6">
      <path d="M18 8a6 6 0 00-12 0c0 7-3 9-3 9h18s-3-2-3-9M10.3 21a2 2 0 003.4 0" />
    </svg>,
    // System integration
    <svg viewBox="0 0 24 24" width="22" height="22" {...p} key="7">
      <rect x="7" y="7" width="10" height="10" rx="1.5" /><rect x="10" y="10" width="4" height="4" />
      <path d="M10 3v2m4-2v2m-4 14v2m4-2v2M3 10h2m-2 4h2m14-4h2m-2 4h2" />
    </svg>,
  ];
  return icons[i] ?? icons[0];
};

export function Industries() {
  const [active, setActive] = useState(0);

  return (
    <section id="solution" className="bg-cream pb-24 pt-12 md:pb-28 md:pt-14">
      <div className="container-x">
        <Reveal>
          <span className="eyebrow">{industries.eyebrow}</span>
        </Reveal>
        <AnimatedHeading
          text={industries.title}
          accent={["anchorage", "berthing", "port"]}
          className="mt-6 max-w-3xl font-display text-[30px] font-medium leading-[1.15] text-ink md:text-[40px]"
        />

        {/* Tabs = rounded rectangle cards with an icon + label */}
        <Reveal delay={0.05} className="mt-12 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {industries.tabs.map((tab, i) => (
            <button
              key={tab.title}
              onClick={() => setActive(i)}
              className={`flex items-center gap-3 rounded-2xl border px-4 py-4 text-left transition-all duration-300 ${
                active === i
                  ? "border-transparent bg-white shadow-[0_10px_30px_-16px_rgba(0,0,0,0.3)]"
                  : "border-dashed border-black/20 hover:border-solid hover:border-black/30"
              }`}
            >
              <span
                className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-xl transition-colors ${
                  active === i ? "bg-lime text-ink" : "bg-black/5 text-ink"
                }`}
              >
                <TabIcon i={i} />
              </span>
              <span className="text-[15px] font-medium text-ink">{tab.title}</span>
            </button>
          ))}
        </Reveal>

        {/* Panel */}
        <Reveal delay={0.1} className="mt-6 overflow-hidden rounded-3xl bg-white p-2">
          <div className="grid grid-cols-1 gap-2 md:grid-cols-2">
            <div className="relative overflow-hidden rounded-[20px]">
              <AnimatePresence mode="wait">
                <motion.img
                  key={active}
                  src={industries.tabs[active].image}
                  onError={(e) => {
                    const img = e.currentTarget;
                    const fb = industries.tabs[active].imageFallback;
                    if (fb && img.src !== fb) img.src = fb;
                  }}
                  alt={industries.tabs[active].title}
                  initial={{ opacity: 0, scale: 1.04 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.5, ease: EASE_OUT }}
                  className="h-[280px] w-full object-cover md:h-[440px]"
                  loading="lazy"
                />
              </AnimatePresence>
            </div>
            <div className="flex flex-col justify-center p-6 md:p-12">
              <AnimatePresence mode="wait">
                <motion.div
                  key={active}
                  initial={{ opacity: 0, y: 14 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -14 }}
                  transition={{ duration: 0.4, ease: EASE_OUT }}
                >
                  <h3 className="font-display text-[26px] font-medium text-ink md:text-[32px]">
                    {industries.tabs[active].title}
                  </h3>
                  <p className="mt-3 max-w-md text-[15px] leading-relaxed text-gray-body">
                    {industries.tabs[active].body}
                  </p>
                  <ul className="mt-7 space-y-4">
                    {industries.tabs[active].points.map((p, i) => (
                      <motion.li
                        key={p}
                        initial={{ opacity: 0, x: -12 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.1 + i * 0.08, ease: EASE_OUT }}
                        className="flex items-start gap-3 text-[14px] text-ink"
                      >
                        <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-lime text-ink">
                          <Check className="h-3 w-3" />
                        </span>
                        {p}
                      </motion.li>
                    ))}
                  </ul>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
