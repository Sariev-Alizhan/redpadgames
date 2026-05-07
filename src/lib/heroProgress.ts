// Mutable scroll-progress singletons — read every frame inside the R3F
// render loop without triggering React re-renders. DOM sections write to
// these from GSAP ScrollTrigger onUpdate callbacks; the CameraRig reads
// them in useFrame to drive a continuous camera dolly across consecutive
// sections, even when the active scene swaps.
//
// Each ref ranges 0 (section's top hits the trigger start) → 1 (section
// has scrolled past the trigger end).

export const heroProgress: { current: number } = { current: 0 };
export const studioStatementProgress: { current: number } = { current: 0 };
export const dustlandProgress: { current: number } = { current: 0 };
