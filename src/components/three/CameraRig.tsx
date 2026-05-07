"use client";

import { useFrame, useThree } from "@react-three/fiber";
import { useRef } from "react";
import {
  heroProgress,
  studioStatementProgress,
  dustlandProgress,
} from "@/lib/heroProgress";

/**
 * Single source of truth for camera Z. Reads every section's scroll
 * progress and dollies the camera back smoothly across them, regardless
 * of which scene is currently mounted in the SceneRouter.
 *
 * Composition (Z = startZ + Σ progress * multiplier):
 *   • hero               (0 → 1) × 4
 *   • studio-statement   (0 → 1) × 3
 *   • dustland           (0 → 1) × 3
 *
 * End-of-dustland Z is therefore startZ + 10. Future sections (partners
 * onward) extend the chain by adding their own progress refs and
 * multipliers below — no scene needs to know about cameras.
 *
 * The smoothing factor 0.08 is the per-frame lerp rate; with the
 * default Lenis raf cadence this gives ~120 ms catch-up to the target.
 */
export function CameraRig() {
  const camera = useThree((s) => s.camera);
  const startZ = useRef(camera.position.z).current;

  useFrame(() => {
    const targetZ =
      startZ +
      heroProgress.current * 4 +
      studioStatementProgress.current * 3 +
      dustlandProgress.current * 3;
    camera.position.z += (targetZ - camera.position.z) * 0.08;
  });

  return null;
}
