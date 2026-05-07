"use client";

import * as React from "react";
import { cn } from "@/lib/utils";

interface MagneticButtonProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Pixel radius the cursor "pulls" the inner element. */
  strength?: number;
  /** Disable on touch devices automatically. */
  disableOnTouch?: boolean;
  children: React.ReactNode;
}

/**
 * Magnetic wrapper — translates its single child toward the cursor while
 * hovered. Wraps any interactive element (Link, button) without changing its
 * markup. No-op on touch devices and when prefers-reduced-motion is set.
 */
export function MagneticButton({
  children,
  strength = 28,
  disableOnTouch = true,
  className,
  ...rest
}: MagneticButtonProps) {
  const wrapperRef = React.useRef<HTMLDivElement>(null);
  const innerRef = React.useRef<HTMLDivElement>(null);

  React.useEffect(() => {
    if (typeof window === "undefined") return;

    const finePointer = window.matchMedia("(hover: hover) and (pointer: fine)").matches;
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduceMotion) return;
    if (disableOnTouch && !finePointer) return;

    const wrapper = wrapperRef.current;
    const inner = innerRef.current;
    if (!wrapper || !inner) return;

    let raf = 0;
    let targetX = 0;
    let targetY = 0;
    let currentX = 0;
    let currentY = 0;

    const onMove = (e: MouseEvent) => {
      const rect = wrapper.getBoundingClientRect();
      const cx = rect.left + rect.width / 2;
      const cy = rect.top + rect.height / 2;
      const dx = (e.clientX - cx) / (rect.width / 2);
      const dy = (e.clientY - cy) / (rect.height / 2);
      targetX = dx * strength;
      targetY = dy * strength;
    };
    const onLeave = () => {
      targetX = 0;
      targetY = 0;
    };

    const tick = () => {
      currentX += (targetX - currentX) * 0.18;
      currentY += (targetY - currentY) * 0.18;
      inner.style.transform = `translate3d(${currentX}px, ${currentY}px, 0)`;
      raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);

    wrapper.addEventListener("mousemove", onMove);
    wrapper.addEventListener("mouseleave", onLeave);
    return () => {
      cancelAnimationFrame(raf);
      wrapper.removeEventListener("mousemove", onMove);
      wrapper.removeEventListener("mouseleave", onLeave);
      inner.style.transform = "";
    };
  }, [strength, disableOnTouch]);

  return (
    <div
      ref={wrapperRef}
      className={cn("inline-block will-change-transform", className)}
      {...rest}
    >
      <div ref={innerRef} className="will-change-transform">
        {children}
      </div>
    </div>
  );
}
