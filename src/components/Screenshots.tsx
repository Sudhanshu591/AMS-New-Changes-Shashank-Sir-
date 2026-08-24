import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { screenshots } from "../data/site";
import { AnimatedHeading } from "./ui/AnimatedHeading";
import { Reveal } from "./ui/Reveal";
import { EASE_OUT } from "../lib/motion";

export function Screenshots() {
  const [active, setActive] = useState(0);
  const shot = screenshots.shots[active];

  return (
    <section id="product-tour" className="bg-cream py-24 md:py-28">
      <div className="container-x flex flex-col items-center text-center">
        <Reveal>
          <span className="eyebrow">{screenshots.eyebrow}</span>
        </Reveal>
        <AnimatedHeading
          text={screenshots.title}
          accent={["action"]}
          className="mt-6 max-w-2xl font-display text-[30px] font-medium leading-[1.12] text-ink md:text-[42px]"
        />
        <Reveal delay={0.05}>
          <p className="mt-5 max-w-xl text-[15px] leading-relaxed text-gray-body">
            {screenshots.subtitle}
          </p>
        </Reveal>

        {/* Tabs */}
        <Reveal delay={0.1} className="mt-10 flex flex-wrap justify-center gap-2">
          {screenshots.shots.map((s, i) => (
            <button
              key={s.label}
              onClick={() => setActive(i)}
              className={`rounded-pill px-5 py-2.5 text-[13px] font-medium transition-colors duration-300 ${
                i === active
                  ? "bg-lime text-ink"
                  : "border border-black/15 text-gray-body hover:text-ink"
              }`}
            >
              {s.label}
            </button>
          ))}
        </Reveal>

        {/* Browser frame */}
        <Reveal delay={0.15} className="mt-10 w-full max-w-5xl">
          <div className="overflow-hidden rounded-3xl border border-black/10 bg-white shadow-[0_30px_80px_-30px_rgba(0,0,0,0.35)]">
            {/* Chrome bar */}
            <div className="flex items-center gap-2 border-b border-black/[0.06] bg-cream-2 px-5 py-3.5">
              <span className="h-3 w-3 rounded-full bg-black/15" />
              <span className="h-3 w-3 rounded-full bg-black/15" />
              <span className="h-3 w-3 rounded-full bg-black/15" />
              <div className="ml-4 hidden flex-1 items-center rounded-pill bg-white px-4 py-1.5 text-[12px] text-gray-mute sm:flex">
                app.ams-port.com/{shot.label.toLowerCase().replace(/\s+/g, "-")}
              </div>
            </div>
            {/* Screen */}
            <div className="relative aspect-[16/9] w-full bg-cream-2">
              <AnimatePresence mode="wait">
                <motion.img
                  key={shot.label}
                  src={shot.src}
                  onError={(e) => {
                    const img = e.currentTarget;
                    if (img.src !== shot.fallback) img.src = shot.fallback;
                  }}
                  alt={shot.label}
                  initial={{ opacity: 0, scale: 1.02 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.4, ease: EASE_OUT }}
                  className="absolute inset-0 h-full w-full object-cover"
                  loading="lazy"
                />
              </AnimatePresence>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
