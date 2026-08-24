import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { hero, assets } from "../data/site";
import { AnimatedHeading } from "./ui/AnimatedHeading";
import { EASE_OUT } from "../lib/motion";

export function Hero() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  // Background zooms/drifts slightly and the text lifts + fades as you scroll away.
  const videoScale = useTransform(scrollYProgress, [0, 1], [1, 1.15]);
  const videoY = useTransform(scrollYProgress, [0, 1], ["0%", "12%"]);
  const contentY = useTransform(scrollYProgress, [0, 1], [0, -80]);
  const contentOpacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  return (
    <section id="hero" ref={ref} className="relative min-h-screen w-full overflow-hidden">
      {/* Background video with parallax zoom */}
      <motion.video
        style={{ scale: videoScale, y: videoY }}
        className="absolute inset-0 h-full w-full object-cover"
        autoPlay
        muted
        loop
        playsInline
      >
        <source src={assets.heroVideo} type="video/mp4" />
        <source src={assets.heroVideoFallback} type="video/mp4" />
      </motion.video>
      <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/15 to-black/25" />

      {/* Centered hero content */}
      <motion.div
        style={{ y: contentY, opacity: contentOpacity }}
        className="container-x relative z-10 flex min-h-screen flex-col items-center justify-center px-4 pb-16 pt-40 text-center"
      >
        <AnimatedHeading
          as="h1"
          text={hero.title}
          className="max-w-[18ch] font-display text-[34px] font-medium leading-[1.02] text-white sm:text-[46px] md:text-[60px]"
        />
        <div className="mt-6 flex flex-col items-center">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.7, ease: EASE_OUT }}
            className="max-w-lg text-[15px] leading-relaxed text-white/85"
          >
            {hero.body}
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.85, duration: 0.7, ease: EASE_OUT }}
            className="mt-7"
          >
            <a href="#contact" className="btn-lime px-6 py-4 text-[14px]">
              {hero.cta}
            </a>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
