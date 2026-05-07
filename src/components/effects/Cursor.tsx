"use client";

import * as React from "react";

/**
 * Custom cursor — two layered dots that spring toward the pointer position.
 * Hidden entirely on touch devices and when prefers-reduced-motion is set.
 *
 * Hover-state target: any element with `data-cursor="hover"` (or interactive
 * tags: a/button/input/textarea/select/label) inflates the ring.
 */
export function Cursor() {
  const ringRef = React.useRef<HTMLDivElement>(null);
  const dotRef = React.useRef<HTMLDivElement>(null);
  const [enabled, setEnabled] = React.useState(false);

  React.useEffect(() => {
    if (typeof window === "undefined") return;

    // Touch / coarse pointer / reduced motion → no custom cursor.
    const finePointer = window.matchMedia("(hover: hover) and (pointer: fine)").matches;
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (!finePointer || reduceMotion) return;

    setEnabled(true);
    document.documentElement.classList.add("cursor-on");

    const ring = ringRef.current;
    const dot = dotRef.current;
    if (!ring || !dot) return;

    let mouseX = window.innerWidth / 2;
    let mouseY = window.innerHeight / 2;
    let ringX = mouseX;
    let ringY = mouseY;
    let raf = 0;

    const onMove = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
      // Dot follows the cursor 1:1 — keep it crisp.
      dot.style.transform = `translate3d(${mouseX}px, ${mouseY}px, 0) translate(-50%, -50%)`;
    };

    const tick = () => {
      // Ring lerps toward the pointer for a soft trail.
      ringX += (mouseX - ringX) * 0.18;
      ringY += (mouseY - ringY) * 0.18;
      ring.style.transform = `translate3d(${ringX}px, ${ringY}px, 0) translate(-50%, -50%)`;
      raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);

    const HOVER_SELECTOR =
      'a, button, input, textarea, select, label, [data-cursor="hover"], [role="button"]';

    const onOver = (e: MouseEvent) => {
      const target = e.target as Element | null;
      if (target?.closest(HOVER_SELECTOR)) {
        ring.dataset.state = "hover";
        dot.dataset.state = "hover";
      }
    };
    const onOut = (e: MouseEvent) => {
      const target = e.target as Element | null;
      if (target?.closest(HOVER_SELECTOR)) {
        ring.dataset.state = "idle";
        dot.dataset.state = "idle";
      }
    };

    window.addEventListener("mousemove", onMove);
    document.addEventListener("mouseover", onOver);
    document.addEventListener("mouseout", onOut);

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("mousemove", onMove);
      document.removeEventListener("mouseover", onOver);
      document.removeEventListener("mouseout", onOut);
      document.documentElement.classList.remove("cursor-on");
    };
  }, []);

  if (!enabled) return null;

  return (
    <>
      <div
        ref={ringRef}
        aria-hidden
        className="cursor-element pointer-events-none fixed left-0 top-0 z-[120] size-9 rounded-full border border-text-muted/60 mix-blend-difference transition-[width,height,border-color,opacity,background-color] duration-200 data-[state=hover]:size-14 data-[state=hover]:border-accent data-[state=hover]:bg-accent/10"
        data-state="idle"
      />
      <div
        ref={dotRef}
        aria-hidden
        className="cursor-element pointer-events-none fixed left-0 top-0 z-[120] size-1.5 rounded-full bg-text mix-blend-difference transition-opacity duration-200 data-[state=hover]:opacity-0"
        data-state="idle"
      />
    </>
  );
}
