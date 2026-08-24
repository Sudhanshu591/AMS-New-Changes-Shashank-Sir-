"use client";

import { motion } from "framer-motion";
import { whyChoose, assets } from "../data/site";
import { AnimatedHeading } from "./ui/AnimatedHeading";
import { Reveal } from "./ui/Reveal";
import { stagger, fadeUp, viewportOnce } from "../lib/motion";

export function WhyChooseUs() {
  return (
    <section className="bg-cream py-24 md:py-28">
      <div className="container-x">
        <Reveal>
          <span className="eyebrow">{whyChoose.eyebrow}</span>
        </Reveal>
        <AnimatedHeading
          text={whyChoose.title}
          accent={["AMS", "smarter", "choice"]}
          className="mt-6 max-w-2xl font-display text-[30px] font-medium leading-[1.12] text-ink md:text-[40px]"
        />

        <div className="mt-14 grid grid-cols-1 gap-10 lg:grid-cols-2 lg:items-stretch">
          {/* List */}
          <motion.div
            variants={stagger(0.12)}
            initial="hidden"
            whileInView="show"
            viewport={viewportOnce}
            className="flex flex-col justify-center"
          >
            {whyChoose.items.map((item, i) => (
              <motion.div
                key={item.title}
                variants={fadeUp}
                className={`flex gap-4 py-7 ${
                  i !== 0 ? "border-t border-dashed border-black/15" : ""
                }`}
              >
                <span className="mt-2.5 h-2.5 w-2.5 shrink-0 rounded-full bg-lime" />
                <div>
                  <h3 className="font-display text-[20px] font-medium text-ink md:text-[24px]">
                    {item.title}
                  </h3>
                  <p className="mt-2 max-w-md text-[15px] leading-relaxed text-gray-body">
                    {item.body}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Image with the CTA overlapping its lower edge */}
          <Reveal className="relative overflow-hidden rounded-3xl">
            <motion.img
              src={assets.whyChoose}
              alt="Why choose us"
              className="h-[420px] w-full object-cover md:h-full md:min-h-[560px]"
              initial={{ scale: 1.15 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
              loading="lazy"
            />
            <a
              href="#"
              className="btn-lime absolute bottom-6 left-1/2 -translate-x-1/2 border-4 border-white/90 px-8 py-4 text-[14px] shadow-xl"
            >
              {whyChoose.cta}
            </a>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
