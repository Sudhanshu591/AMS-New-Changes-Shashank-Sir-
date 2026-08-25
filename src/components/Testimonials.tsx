"use client";

import { testimonials, assets } from "../data/site";
import { AnimatedHeading } from "./ui/AnimatedHeading";
import { Reveal } from "./ui/Reveal";

function Card({ t }: { t: (typeof testimonials.items)[number] }) {
  return (
    <figure className="flex w-[380px] shrink-0 flex-col rounded-[20px] bg-white p-7 transition-transform duration-300 hover:-translate-y-1.5 md:w-[440px]">
      <figcaption className="flex items-center gap-4">
        <img
          src={assets.avatars[t.avatar]}
          alt={t.name}
          className="h-14 w-14 rounded-full object-cover"
          loading="lazy"
        />
        <div>
          <div className="font-display text-[20px] font-semibold text-ink">{t.name}</div>
          <div className="text-[14px] text-gray-mute">{t.role}</div>
        </div>
      </figcaption>
      <blockquote className="mt-6 text-[17px] leading-relaxed text-gray-body">
        {t.quote}
      </blockquote>
    </figure>
  );
}

export function Testimonials() {
  const rowA = [...testimonials.items, ...testimonials.items];
  const rowB = [...testimonials.items.slice().reverse(), ...testimonials.items.slice().reverse()];

  return (
    <section className="relative overflow-hidden py-16 md:py-20">
      {/* Nature photo background */}
      <div
        className="absolute inset-0"
        style={{
          // Layered: dark overlay on top, then your image, then the CDN panorama
          // beneath so it still shows until testimonials-bg.jpg is added.
          backgroundImage: `linear-gradient(rgba(0,0,0,0.45),rgba(0,0,0,0.55)), url(${assets.testimonialsBg}), url(${assets.panorama})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />

      <div className="container-x relative z-10 flex flex-col items-center text-center text-white">
        <Reveal>
          <span className="eyebrow eyebrow-dark">{testimonials.eyebrow}</span>
        </Reveal>
        <AnimatedHeading
          text={testimonials.title}
          accent={["leaders", "say"]}
          tone="lime"
          className="mt-6 max-w-2xl font-display text-[32px] font-medium leading-[1.1] md:text-[44px]"
        />
        <Reveal delay={0.05}>
          <p className="mt-4 max-w-lg text-[15px] text-white/80">{testimonials.subtitle}</p>
        </Reveal>
      </div>

      {/* Two marquee rows moving opposite directions, pause on hover */}
      <div className="marquee-paused relative z-10 mt-16 flex flex-col gap-5">
        <div className="flex w-max gap-5 animate-marquee" style={{ ["--duration" as string]: "52s" }}>
          {rowA.map((t, i) => (
            <Card key={i} t={t} />
          ))}
        </div>
        <div
          className="flex w-max gap-5 animate-marquee"
          style={{ ["--duration" as string]: "60s", animationDirection: "reverse" }}
        >
          {rowB.map((t, i) => (
            <Card key={i} t={t} />
          ))}
        </div>
      </div>
    </section>
  );
}
