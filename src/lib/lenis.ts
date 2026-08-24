import type Lenis from "lenis";

/**
 * Module-level handle on the single Lenis instance so navigation helpers
 * (anchor scrolling, scroll-to-top on route change) can drive the same
 * momentum scroll the rest of the site uses.
 */
let lenis: Lenis | null = null;

export const setLenis = (instance: Lenis | null) => {
  lenis = instance;
};

/** Smooth-scroll to a section by id (accounts for the fixed navbar). */
export const scrollToId = (id: string) => {
  const el = document.getElementById(id);
  if (!el) return;
  if (lenis) lenis.scrollTo(el, { offset: -90 });
  else el.scrollIntoView({ behavior: "smooth" });
};

/** Jump to the top — used when navigating between routed pages. */
export const scrollToTop = (immediate = true) => {
  if (lenis) lenis.scrollTo(0, { immediate });
  else window.scrollTo(0, 0);
};
