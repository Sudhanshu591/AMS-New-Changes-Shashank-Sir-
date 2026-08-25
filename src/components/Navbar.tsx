"use client";

import { motion, useScroll, useMotionValueEvent } from "framer-motion";
import { useState } from "react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { nav } from "../data/site";
import { scrollToId } from "../lib/lenis";
import { EASE_OUT } from "../lib/motion";

export function Navbar() {
  const { scrollY } = useScroll();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const router = useRouter();
  const pathname = usePathname();

  useMotionValueEvent(scrollY, "change", (v) => setScrolled(v > 40));

  // In-page anchors live on the home page; navigate there first if elsewhere.
  const goHash = (hash: string) => {
    setOpen(false);
    if (pathname !== "/") {
      router.push("/");
      setTimeout(() => scrollToId(hash), 350);
    } else {
      scrollToId(hash);
    }
  };

  // Home / logo: go to the hero section on the home page.
  const goHome = () => {
    setOpen(false);
    if (pathname !== "/") {
      router.push("/");
      setTimeout(() => scrollToId("hero"), 350);
    } else {
      scrollToId("hero");
    }
  };

  const isActive = (to?: string) => !!to && pathname === to;

  const underline = (active: boolean) => (
    <span
      className={`absolute -bottom-1 left-0 h-[1.5px] bg-ink transition-all duration-300 ${
        active ? "w-full" : "w-0 group-hover:w-full"
      }`}
    />
  );

  const linkClass = (active: boolean) =>
    `group relative text-[15px] font-medium transition-colors ${
      active ? "text-ink" : "text-gray-body hover:text-ink"
    }`;

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.7, ease: EASE_OUT, delay: 0.1 }}
      className="fixed inset-x-0 top-0 z-50 flex justify-center px-3 pt-3 md:pt-4"
    >
      <nav
        className={`relative flex w-full items-center justify-between rounded-pill bg-white/95 py-2.5 pl-6 pr-2.5 backdrop-blur transition-shadow duration-300 ${
          scrolled ? "shadow-[0_10px_40px_-12px_rgba(0,0,0,0.25)]" : "shadow-[0_6px_24px_-14px_rgba(0,0,0,0.2)]"
        }`}
      >
        {/* Brand */}
        <button onClick={goHome} className="flex items-center gap-2 text-ink">
          <img src="/logo.png" alt="AMS logo" className="h-7 w-auto" />
          <span className="font-display text-[22px] font-semibold tracking-tight">
            AMS<sup className="text-[10px]">™</sup>
          </span>
        </button>

        {/* Desktop links — absolutely centered like the source */}
        <ul className="absolute left-1/2 hidden -translate-x-1/2 items-center gap-9 md:flex">
          {nav.map((item) =>
            item.to === "/" ? (
              <li key={item.label}>
                <button onClick={goHome} className={linkClass(isActive("/"))}>
                  {item.label}
                  {underline(isActive("/"))}
                </button>
              </li>
            ) : item.to ? (
              <li key={item.label}>
                <Link href={item.to} className={linkClass(isActive(item.to))}>
                  {item.label}
                  {underline(isActive(item.to))}
                </Link>
              </li>
            ) : (
              <li key={item.label}>
                <button
                  onClick={() => goHash(item.hash!)}
                  className={linkClass(false)}
                >
                  {item.label}
                  {underline(false)}
                </button>
              </li>
            )
          )}
        </ul>

        <div className="flex items-center gap-2">
          <button
            onClick={() => goHash("contact")}
            className="btn-ghost hidden sm:inline-flex"
          >
            Talk to sales
          </button>
          <button onClick={() => goHash("contact")} className="btn-lime">
            Request a demo
          </button>
          {/* Mobile toggle */}
          <button
            onClick={() => setOpen((o) => !o)}
            aria-label="Menu"
            className="flex h-10 w-10 items-center justify-center rounded-full border border-black/10 md:hidden"
          >
            <span className="relative block h-3 w-4">
              <span className={`absolute left-0 top-0 h-[2px] w-4 bg-ink transition-transform ${open ? "translate-y-1.5 rotate-45" : ""}`} />
              <span className={`absolute bottom-0 left-0 h-[2px] w-4 bg-ink transition-transform ${open ? "-translate-y-1 -rotate-45" : ""}`} />
            </span>
          </button>
        </div>
      </nav>

      {/* Mobile dropdown */}
      {open && (
        <motion.ul
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="absolute top-20 flex w-[calc(100%-24px)] max-w-container flex-col gap-1 rounded-3xl bg-white p-4 shadow-xl md:hidden"
        >
          {nav.map((item) => (
            <li key={item.label}>
              {item.to === "/" ? (
                <button
                  onClick={goHome}
                  className="block w-full rounded-xl px-4 py-3 text-left text-[15px] font-medium text-ink hover:bg-black/5"
                >
                  {item.label}
                </button>
              ) : item.to ? (
                <Link
                  href={item.to}
                  onClick={() => setOpen(false)}
                  className="block rounded-xl px-4 py-3 text-[15px] font-medium text-ink hover:bg-black/5"
                >
                  {item.label}
                </Link>
              ) : (
                <button
                  onClick={() => goHash(item.hash!)}
                  className="block w-full rounded-xl px-4 py-3 text-left text-[15px] font-medium text-ink hover:bg-black/5"
                >
                  {item.label}
                </button>
              )}
            </li>
          ))}
          <li>
            <button
              onClick={() => goHash("contact")}
              className="block w-full rounded-xl px-4 py-3 text-left text-[15px] font-medium text-ink hover:bg-black/5 sm:hidden"
            >
              Talk to sales
            </button>
          </li>
        </motion.ul>
      )}
    </motion.header>
  );
}
