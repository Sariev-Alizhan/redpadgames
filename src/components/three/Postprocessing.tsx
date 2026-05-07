"use client";

import { EffectComposer, Bloom, Vignette, Noise } from "@react-three/postprocessing";
import { BlendFunction, KernelSize } from "postprocessing";

/**
 * Subtle post FX — Bloom + Vignette + Noise. Tuned light to keep
 * the page legible under DOM. Heavier effects (DoF, ChromaticAberration)
 * intentionally omitted for v1.
 */
export function Postprocessing() {
  return (
    <EffectComposer multisampling={0}>
      <Bloom
        kernelSize={KernelSize.SMALL}
        intensity={0.3}
        luminanceThreshold={0.85}
        luminanceSmoothing={0.2}
        mipmapBlur
      />
      <Vignette eskil={false} offset={0.3} darkness={0.5} />
      <Noise premultiply blendFunction={BlendFunction.OVERLAY} opacity={0.04} />
    </EffectComposer>
  );
}
