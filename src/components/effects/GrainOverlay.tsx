"use client";

/**
 * Full-screen film grain overlay. Uses an SVG fractal-noise pattern under
 * mix-blend-overlay; tiny opacity so it only kicks in over flat regions.
 *
 * Animation is gated by the global prefers-reduced-motion rule in globals.css.
 */
export function GrainOverlay() {
  return (
    <div
      aria-hidden
      className="grain-overlay pointer-events-none fixed inset-0 z-[100] opacity-[0.06] mix-blend-overlay"
      style={{
        backgroundImage:
          "url(\"data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 200 200'><filter id='n'><feTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='2' stitchTiles='stitch'/></filter><rect width='100%25' height='100%25' filter='url(%23n)' opacity='0.65'/></svg>\")",
        backgroundSize: "240px 240px",
        animation: "var(--animate-grain)",
      }}
    />
  );
}
