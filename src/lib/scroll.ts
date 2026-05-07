import Lenis from "lenis";

export type LenisInstance = InstanceType<typeof Lenis>;

export function createLenis(): LenisInstance {
  return new Lenis({
    duration: 1.2,
    easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
    smoothWheel: true,
    touchMultiplier: 1.6,
  });
}
