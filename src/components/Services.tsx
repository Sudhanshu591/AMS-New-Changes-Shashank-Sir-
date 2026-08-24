import { useRef } from "react";
import { motion } from "framer-motion";
import { services } from "../data/site";
import { AnimatedHeading } from "./ui/AnimatedHeading";
import { Reveal } from "./ui/Reveal";
import {
  ArrowUpRight,
  ArrowLeft,
  ArrowRight,
  IconTransport,
  IconFreight,
  IconRoute,
  IconFleet,
  IconShield,
  IconBell,
  IconPlug,
  IconHistory,
} from "./ui/icons";
import { stagger, fadeUp, viewportOnce } from "../lib/motion";

const icons = [
  IconTransport,
  IconFreight,
  IconRoute,
  IconFleet,
  IconShield,
  IconBell,
  IconPlug,
  IconHistory,
];

export function Services() {
  const track = useRef<HTMLDivElement>(null);

  const scrollBy = (dir: number) => {
    const el = track.current;
    if (!el) return;
    const card = el.querySelector("article");
    const amount = card ? (card as HTMLElement).offsetWidth + 20 : 400;
    el.scrollBy({ left: dir * amount, behavior: "smooth" });
  };

  return (
    <section className="bg-ink py-24 text-white md:py-28">
      <div className="container-x">
        <Reveal>
          <span className="eyebrow eyebrow-dark">{services.eyebrow}</span>
        </Reveal>
        <div className="mt-6 flex items-end justify-between gap-6">
          <AnimatedHeading
            text={services.title}
            accent={["AMS", "platform"]}
            tone="lime"
            className="max-w-2xl font-display text-[32px] font-medium leading-[1.1] md:text-[44px]"
          />
          {/* Carousel arrows */}
          <div className="hidden shrink-0 gap-3 md:flex">
            <button
              onClick={() => scrollBy(-1)}
              aria-label="Previous"
              className="flex h-14 w-14 items-center justify-center rounded-full border border-dashed border-white/30 text-white transition-colors hover:border-solid hover:bg-white/5"
            >
              <ArrowLeft />
            </button>
            <button
              onClick={() => scrollBy(1)}
              aria-label="Next"
              className="flex h-14 w-14 items-center justify-center rounded-full border border-dashed border-white/30 text-white transition-colors hover:border-solid hover:bg-white/5"
            >
              <ArrowRight />
            </button>
          </div>
        </div>

        <motion.div
          ref={track}
          variants={stagger(0.1)}
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          className="mt-14 flex snap-x snap-mandatory gap-5 overflow-x-auto pb-2 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
        >
          {services.items.map((s, i) => {
            const Icon = icons[i % icons.length];
            return (
              <motion.article
                key={s.title}
                variants={fadeUp}
                className="group flex w-[85%] shrink-0 snap-start flex-col rounded-3xl bg-ink-2 p-8 transition-colors duration-300 hover:bg-[#323232] sm:w-[420px]"
              >
                <span className="text-lime">
                  <Icon />
                </span>
                <h3 className="mt-10 font-display text-[24px] font-medium leading-tight">
                  {s.title}
                </h3>
                <p className="mt-3 flex-1 text-[15px] leading-relaxed text-white/60">
                  {s.body}
                </p>
                <a
                  href="#"
                  className="mt-10 inline-flex items-center gap-2 text-[14px] font-medium text-white"
                >
                  View detail
                  <span className="flex h-8 w-8 items-center justify-center rounded-full bg-lime text-ink transition-transform group-hover:rotate-45">
                    <ArrowUpRight className="h-4 w-4" />
                  </span>
                </a>
              </motion.article>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
