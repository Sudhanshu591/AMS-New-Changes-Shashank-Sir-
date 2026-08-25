"use client";

import { motion } from "framer-motion";
import { trustLogos } from "../data/site";
import { viewportOnce } from "../lib/motion";

// Small anchor glyph so each placeholder wordmark reads as a "logo" until real
// operator logos are dropped in. Swap the whole row for logo images in public/
// once you have permission to name customers.
const AnchorMark = ({ className = "" }: { className?: string }) => (
  <svg
    width="22"
    height="22"
    viewBox="0 0 24 24"
    fill="none"
    className={`shrink-0 ${className}`}
    aria-hidden
  >
    <circle cx="12" cy="5" r="2" stroke="currentColor" strokeWidth="1.6" />
    <path
      d="M12 7v12M5 12H4a8 8 0 0 0 16 0h-1M9.5 10h5"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

// Social-proof strip under the hero: a labelled band with a full-width infinite
// marquee (keyframes from globals.css) that pauses on hover, with cream edge
// fades for a clean bleed.
export function Trust() {
  // Duplicated so the -50% marquee translate loops seamlessly.
  const row = [...trustLogos.logos, ...trustLogos.logos];

  return (
    <section className="bg-cream pb-4 pt-14 md:pb-6 md:pt-16">
      <div className="flex flex-col items-center">
        {/* Label with flanking hairlines + lime anchor accent */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={viewportOnce}
          transition={{ duration: 0.5 }}
          className="flex items-center gap-4 px-5"
        >
          <span className="hidden h-px w-8 bg-gradient-to-r from-transparent to-black/15 sm:block md:w-12" />
          <span className="flex items-center gap-2 text-center text-[12px] font-medium uppercase tracking-[0.16em] text-[#8A8A8A]">
            <AnchorMark className="h-4 w-4 text-lime" />
            {trustLogos.label}
          </span>
          <span className="hidden h-px w-8 bg-gradient-to-l from-transparent to-black/15 sm:block md:w-12" />
        </motion.div>

        {/* Full-width marquee */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={viewportOnce}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="marquee-paused relative mt-9 w-full overflow-hidden [--duration:34s]"
        >
          {/* edge fades */}
          <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-16 bg-gradient-to-r from-cream to-transparent md:w-28" />
          <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-16 bg-gradient-to-l from-cream to-transparent md:w-28" />

          <ul className="animate-marquee flex w-max items-center gap-12 md:gap-16">
            {row.map((name, i) => (
              <li
                key={i}
                className="group flex items-center gap-2.5 text-ink/30 transition-colors duration-300 hover:text-ink/60"
              >
                <AnchorMark className="text-ink/25 transition-colors duration-300 group-hover:text-lime" />
                <span className="whitespace-nowrap font-display text-[19px] font-medium tracking-tight md:text-[21px]">
                  {name}
                </span>
              </li>
            ))}
          </ul>
        </motion.div>
      </div>
    </section>
  );
}
