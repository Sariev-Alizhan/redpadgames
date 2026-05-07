"use client";

import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useLenis } from "./SmoothScrollProvider";

/**
 * Registers ScrollTrigger globally and bridges it to the Lenis raf loop
 * so any ScrollTrigger created elsewhere (e.g. HeroSection) reads the
 * same scroll position the user actually feels.
 *
 * Without this bridge, GSAP listens to native scroll events while Lenis
 * intercepts them — the two get out of phase and triggers fire late.
 */
export default function GsapInit() {
  const lenis = useLenis();

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    gsap.ticker.lagSmoothing(0); // don't auto-skip frames; Lenis handles cadence
  }, []);

  useEffect(() => {
    if (!lenis) return;
    const handler = () => ScrollTrigger.update();
    lenis.on("scroll", handler);
    return () => {
      lenis.off("scroll", handler);
    };
  }, [lenis]);

  return null;
}
