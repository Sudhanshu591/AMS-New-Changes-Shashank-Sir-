import { motion } from "framer-motion";
import { security } from "../data/site";
import { AnimatedHeading } from "./ui/AnimatedHeading";
import { Reveal } from "./ui/Reveal";
import { Check } from "./ui/icons";
import { stagger, fadeUp, viewportOnce } from "../lib/motion";

export function Security() {
  return (
    <section id="security" className="bg-ink py-24 text-white md:py-28">
      <div className="container-x flex flex-col items-center text-center">
        <Reveal>
          <span className="eyebrow eyebrow-dark">{security.eyebrow}</span>
        </Reveal>
        <AnimatedHeading
          text={security.title}
          accent={["security"]}
          tone="lime"
          className="mt-6 max-w-3xl font-display text-[30px] font-medium leading-[1.12] md:text-[42px]"
        />
        <Reveal delay={0.05}>
          <p className="mt-5 max-w-2xl text-[15px] leading-relaxed text-white/60">
            {security.subtitle}
          </p>
        </Reveal>

        <motion.div
          variants={stagger(0.1)}
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          className="mt-16 grid w-full grid-cols-1 gap-5 text-left sm:grid-cols-2 lg:grid-cols-3"
        >
          {security.items.map((item) => (
            <motion.div
              key={item.title}
              variants={fadeUp}
              className="flex flex-col rounded-3xl bg-ink-2 p-8 transition-colors duration-300 hover:bg-[#323232]"
            >
              <span className="flex h-11 w-11 items-center justify-center rounded-full bg-lime text-ink">
                <Check />
              </span>
              <h3 className="mt-6 font-display text-[20px] font-medium leading-tight">
                {item.title}
              </h3>
              <p className="mt-3 text-[15px] leading-relaxed text-white/60">
                {item.body}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
