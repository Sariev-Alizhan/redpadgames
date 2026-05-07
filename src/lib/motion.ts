// Motion tokens — Direction 02 "Sovereign Studio".
// Source of truth for every animated component. Keep imports thin —
// these are plain values, framework-agnostic.
//
// Durations in milliseconds. Use `sec()` to convert to seconds for
// libraries that want them (framer-motion, gsap).

export const durations = {
  fast: 200, // hover, button press, icon flip
  base: 400, // standard UI element transitions, card lift
  slow: 800, // section sweep wipes (Direction 02 signature)
  cinematic: 1400, // hero camera moves, dust transitions
} as const;

export type DurationToken = keyof typeof durations;

// Cubic-bezier control points. Compatible with framer-motion's `ease`
// (array form), gsap's `CustomEase`, and CSS cubic-bezier().
export const easings = {
  standard: [0.25, 0.46, 0.45, 0.94] as const,
  emphasized: [0.83, 0, 0.17, 1] as const,
  anticipate: [0.4, 0, 0.6, -0.05] as const,
  expoOut: [0.16, 1, 0.3, 1] as const,
  power3InOut: [0.65, 0, 0.35, 1] as const,
} as const;

export type EasingToken = keyof typeof easings;

// ms → seconds (framer-motion uses seconds).
export const sec = (ms: number): number => ms / 1000;

// CSS cubic-bezier() string for inline styles.
export function cssEasing(token: EasingToken): string {
  const [a, b, c, d] = easings[token];
  return `cubic-bezier(${a}, ${b}, ${c}, ${d})`;
}

// Direction 02 signature presets — composable across components.
export const sweep = {
  duration: durations.slow,
  easing: easings.standard,
} as const;

export const reveal = {
  duration: durations.base,
  easing: easings.expoOut,
} as const;

export const snap = {
  duration: durations.fast,
  easing: easings.power3InOut,
} as const;

export const cinematic = {
  duration: durations.cinematic,
  easing: easings.emphasized,
} as const;

// Reduced-motion check — call from useEffect on the client.
export function prefersReducedMotion(): boolean {
  if (typeof window === "undefined") return false;
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}

// Wrap a duration so it collapses to 0 under reduced motion.
// Components can also use framer-motion's useReducedMotion() directly.
export function durationOrZero(ms: number): number {
  return prefersReducedMotion() ? 0 : ms;
}
