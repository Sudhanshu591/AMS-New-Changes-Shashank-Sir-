"use client";

import { motion } from "framer-motion";
import { ctaBanner, assets } from "../data/site";
import { AnimatedHeading } from "./ui/AnimatedHeading";
import { EASE_OUT } from "../lib/motion";

export function CTABanner() {
  return (
    <section id="contact" className="bg-cream">
      <div className="relative flex min-h-[520px] w-full flex-col items-center justify-center overflow-hidden px-6 py-28 text-center">
        {/* Background video */}
        <video
          className="absolute inset-0 h-full w-full object-cover"
          autoPlay
          muted
          loop
          playsInline
          poster={assets.ctaPoster}
        >
          <source src={assets.ctaVideo} type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-black/45" />

        <div className="relative z-10 flex flex-col items-center">
          <AnimatedHeading
            text={ctaBanner.title}
            className="max-w-2xl font-display text-[32px] font-medium leading-[1.1] text-white md:text-[52px]"
          />
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.6, ease: EASE_OUT }}
            className="mt-5 max-w-lg text-[15px] leading-relaxed text-white/80"
          >
            {ctaBanner.body}
          </motion.p>
          <motion.a
            href="#"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.32, duration: 0.6, ease: EASE_OUT }}
            className="btn-lime mt-8 px-6 py-4"
          >
            {ctaBanner.cta}
          </motion.a>
        </div>
      </div>
    </section>
  );
}
