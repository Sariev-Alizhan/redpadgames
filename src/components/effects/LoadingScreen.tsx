"use client";

import * as React from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";

/**
 * Branded first-paint loading screen — counts 00 → 100, then the whole
 * panel wipes off-screen to the right (red side first), revealing the site
 * underneath. Plays once per session; subsequent route changes skip it.
 */
const SESSION_KEY = "rp-loading-shown";
const COUNT_DURATION_MS = 1400;

export function LoadingScreen() {
  const reduce = useReducedMotion();
  const [active, setActive] = React.useState(false);
  const [progress, setProgress] = React.useState(0);

  React.useEffect(() => {
    if (typeof window === "undefined") return;
    if (sessionStorage.getItem(SESSION_KEY) === "1") return;
    sessionStorage.setItem(SESSION_KEY, "1");
    setActive(true);
  }, []);

  React.useEffect(() => {
    if (!active) return;
    if (reduce) {
      setProgress(100);
      const t = setTimeout(() => setActive(false), 350);
      return () => clearTimeout(t);
    }
    const start = performance.now();
    let raf = 0;
    const tick = (t: number) => {
      const elapsed = t - start;
      const p = Math.min(100, (elapsed / COUNT_DURATION_MS) * 100);
      setProgress(p);
      if (p < 100) raf = requestAnimationFrame(tick);
      else setTimeout(() => setActive(false), 450);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [active, reduce]);

  return (
    <AnimatePresence>
      {active ? (
        <motion.div
          key="loading"
          initial={{ x: 0 }}
          exit={{ x: "101%" }}
          transition={{ duration: reduce ? 0.25 : 0.6, ease: [0.83, 0, 0.17, 1] }}
          className="fixed inset-0 z-[200] flex flex-col items-center justify-center overflow-hidden bg-bg"
        >
          {/* Red bar at the leading edge — visible during the wipe-out */}
          <span
            aria-hidden
            className="absolute inset-y-0 -right-1 w-2 bg-accent"
          />

          <div
            aria-hidden
            className="absolute inset-0 opacity-40"
            style={{
              background:
                "radial-gradient(ellipse 60% 50% at 50% 50%, rgba(225, 29, 46, 0.18), transparent 70%)",
            }}
          />

          <div className="relative z-10 flex flex-col items-center gap-10 px-6 text-center">
            <p className="font-mono text-caption uppercase tracking-[0.3em] text-text-faint">
              RedPad Games
            </p>

            <p className="font-display font-black tracking-[-0.04em] text-text leading-none text-[clamp(5rem,18vw,16rem)] tabular-nums">
              {String(Math.floor(progress)).padStart(2, "0")}
            </p>

            <div className="relative h-px w-[min(28rem,70vw)] overflow-hidden bg-divider">
              <div
                className="absolute inset-y-0 left-0 bg-accent transition-[width] duration-100 ease-linear"
                style={{ width: `${progress}%` }}
              />
            </div>

            <p className="font-mono text-caption uppercase tracking-[0.3em] text-text-muted">
              Find your shadow between two suns
            </p>
          </div>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
}
