import { useRef } from "react";
import { motion } from "framer-motion";
import { blog } from "../data/site";
import { AnimatedHeading } from "./ui/AnimatedHeading";
import { Reveal } from "./ui/Reveal";
import { ArrowUpRight, ArrowLeft, ArrowRight } from "./ui/icons";
import { stagger, fadeUp, viewportOnce } from "../lib/motion";

export function Blog() {
  const track = useRef<HTMLDivElement>(null);

  const scrollBy = (dir: number) => {
    const el = track.current;
    if (!el) return;
    const card = el.querySelector("article");
    const amount = card ? (card as HTMLElement).offsetWidth + 20 : 400;
    el.scrollBy({ left: dir * amount, behavior: "smooth" });
  };

  return (
    <section className="bg-cream py-24 md:py-28">
      <div className="container-x">
        <Reveal>
          <span className="eyebrow">{blog.eyebrow}</span>
        </Reveal>
        <div className="mt-6 flex items-end justify-between gap-6">
          <AnimatedHeading
            text={blog.title}
            accent={["smarter,", "safer", "operations"]}
            className="max-w-2xl font-display text-[30px] font-medium leading-[1.12] text-ink md:text-[40px]"
          />
          <div className="hidden shrink-0 gap-3 md:flex">
            <button
              onClick={() => scrollBy(-1)}
              aria-label="Previous"
              className="flex h-14 w-14 items-center justify-center rounded-full border border-dashed border-black/25 text-ink transition-colors hover:border-solid hover:bg-black/5"
            >
              <ArrowLeft />
            </button>
            <button
              onClick={() => scrollBy(1)}
              aria-label="Next"
              className="flex h-14 w-14 items-center justify-center rounded-full border border-dashed border-black/25 text-ink transition-colors hover:border-solid hover:bg-black/5"
            >
              <ArrowRight />
            </button>
          </div>
        </div>

        <motion.div
          ref={track}
          variants={stagger(0.12)}
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          className="mt-14 flex snap-x snap-mandatory gap-5 overflow-x-auto pb-2 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
        >
          {blog.items.map((post) => (
            <motion.article
              key={post.title}
              variants={fadeUp}
              className="group w-[85%] shrink-0 cursor-pointer snap-start overflow-hidden rounded-3xl bg-white p-3 transition-transform duration-300 hover:-translate-y-1.5 sm:w-[440px]"
            >
              <div className="overflow-hidden rounded-2xl">
                <img
                  src={post.img}
                  alt={post.title}
                  className="h-[260px] w-full object-cover transition-transform duration-700 group-hover:scale-105 md:h-[300px]"
                  loading="lazy"
                />
              </div>
              <div className="flex items-center gap-3 px-3 pt-6 text-[12px] font-medium text-gray-mute">
                <span className="rounded-pill border border-black/10 px-3 py-1 text-ink">
                  {post.category}
                </span>
                <span>{post.date}</span>
              </div>
              <div className="flex items-start justify-between gap-4 px-3 pb-3 pt-4">
                <h3 className="font-display text-[20px] font-medium leading-snug text-ink md:text-[23px]">
                  {post.title}
                </h3>
                <span className="mt-1 flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-lime text-ink transition-transform group-hover:rotate-45">
                  <ArrowUpRight />
                </span>
              </div>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
