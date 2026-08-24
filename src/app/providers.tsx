"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";
import { useSmoothScroll } from "../hooks/useSmoothScroll";
import { scrollToTop } from "../lib/lenis";

/**
 * Client shell: drives the Lenis momentum smooth-scroll for the whole app and
 * resets scroll position whenever the routed page changes. Server components
 * (layout, pages) render inside this via {children}.
 */
export function Providers({ children }: { children: React.ReactNode }) {
  useSmoothScroll();
  const pathname = usePathname();

  useEffect(() => {
    scrollToTop();
  }, [pathname]);

  return <>{children}</>;
}
