"use client";

import * as React from "react";

/**
 * Thin red progress bar pinned to the very top of the viewport. Width
 * tracks the document's vertical scroll percentage. Renders nothing on
 * pages shorter than the viewport (no scroll happens, no bar to show).
 *
 * Pure CSS variable update on every requestAnimationFrame — no React
 * re-render, so it's near-zero cost even on long pages.
 */
export function ScrollProgress() {
  const barRef = React.useRef<HTMLDivElement>(null);

  React.useEffect(() => {
    if (typeof window === "undefined") return;

    let raf = 0;
    const update = () => {
      const bar = barRef.current;
      if (!bar) return;
      const doc = document.documentElement;
      const scrolled = doc.scrollTop;
      const height = doc.scrollHeight - doc.clientHeight;
      const ratio = height > 0 ? scrolled / height : 0;
      // 0..1 → 0..100% via scaleX, transform-only repaint.
      bar.style.transform = `scaleX(${Math.min(1, Math.max(0, ratio))})`;
    };

    const onScroll = () => {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(update);
    };

    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  return (
    <div
      aria-hidden
      className="pointer-events-none fixed inset-x-0 top-0 z-[90] h-0.5 bg-divider/30"
    >
      <div
        ref={barRef}
        className="h-full origin-left bg-accent"
        style={{ transform: "scaleX(0)" }}
      />
    </div>
  );
}
