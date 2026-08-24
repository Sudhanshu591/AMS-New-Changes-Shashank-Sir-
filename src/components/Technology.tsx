import { motion } from "framer-motion";
import { technology, assets } from "../data/site";
import { Reveal } from "./ui/Reveal";
import { AnimatedHeading } from "./ui/AnimatedHeading";
import { stagger, fadeUp, viewportOnce } from "../lib/motion";

export function Technology() {
  return (
    <section className="bg-cream py-24 md:py-28">
      <div className="container-x grid grid-cols-1 gap-14 lg:grid-cols-2 lg:items-center">
        {/* Left copy */}
        <div>
          <Reveal>
            <span className="eyebrow">{technology.eyebrow}</span>
          </Reveal>
          <AnimatedHeading
            text={technology.title}
            accent={["AI", "learning"]}
            className="mt-6 max-w-md font-display text-[30px] font-medium leading-[1.12] text-ink md:text-[40px]"
          />
          <Reveal delay={0.05}>
            <p className="mt-5 max-w-md text-[15px] leading-relaxed text-gray-body">
              {technology.body}
            </p>
          </Reveal>
          <Reveal delay={0.1} className="mt-8">
            <a href="#" className="btn-lime">
              {technology.cta}
            </a>
          </Reveal>
        </div>

        {/* Right feature list */}
        <motion.ul
          variants={stagger(0.1)}
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          className="flex flex-col rounded-3xl bg-white p-3"
        >
          {technology.features.map((f, i) => (
            <motion.li
              key={f}
              variants={fadeUp}
              whileHover={{ x: 6 }}
              className={`flex items-center gap-4 px-5 py-5 ${
                i !== 0 ? "border-t border-black/[0.06]" : ""
              }`}
            >
              <span className="font-display text-[14px] font-semibold text-gray-line">
                0{i + 1}
              </span>
              <span className="flex-1 text-[16px] font-medium text-ink">{f}</span>
              <span className="h-2 w-2 rounded-full bg-lime" />
            </motion.li>
          ))}
        </motion.ul>
      </div>
    </section>
  );
}
