"use client";

import * as React from "react";
import { createLenis, type LenisInstance } from "@/lib/scroll";

const LenisContext = React.createContext<LenisInstance | null>(null);

/** Hook returns the active Lenis instance, or null when reduced-motion is on
 *  or before the provider has mounted. Components should fall back to native
 *  scroll APIs when null. */
export function useLenis(): LenisInstance | null {
  return React.useContext(LenisContext);
}

export default function SmoothScrollProvider({ children }: { children: React.ReactNode }) {
  const [lenis, setLenis] = React.useState<LenisInstance | null>(null);

  React.useEffect(() => {
    if (typeof window === "undefined") return;

    // Respect prefers-reduced-motion: skip Lenis entirely.
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduceMotion) return;

    const inst = createLenis();
    setLenis(inst);
    let frame = 0;
    const raf = (time: number) => {
      inst.raf(time);
      frame = requestAnimationFrame(raf);
    };
    frame = requestAnimationFrame(raf);

    return () => {
      cancelAnimationFrame(frame);
      inst.destroy();
      setLenis(null);
    };
  }, []);

  return <LenisContext.Provider value={lenis}>{children}</LenisContext.Provider>;
}
