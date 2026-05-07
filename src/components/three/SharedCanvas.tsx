"use client";

import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";
import { Lights } from "./Lights";
import { Postprocessing } from "./Postprocessing";
import { CameraRig } from "./CameraRig";
import { useSceneState } from "./SceneController";
import HeroGlobeScene from "./scenes/HeroGlobeScene";
import DustlandShardsScene from "./scenes/DustlandShardsScene";

/**
 * Single shared R3F canvas mounted once at the root layout.
 * Fixed behind DOM content; pointer-events disabled so the page
 * stays clickable.
 *
 * Architecture:
 *   - <CameraRig />   — owns the camera Z dolly, reads ALL section progress
 *                       refs, runs every frame regardless of which scene
 *                       is active. Guarantees continuity across scene swaps.
 *   - <SceneRouter /> — mounts the scene primitive matching the active
 *                       SceneController state. Scenes are pure geometry;
 *                       they do not touch the camera.
 *   - <Lights /> + <Postprocessing /> — section-agnostic atmosphere.
 */
export function SharedCanvas() {
  return (
    <div aria-hidden="true" className="pointer-events-none fixed inset-0 z-0">
      <Canvas
        dpr={[1, 2]}
        camera={{ position: [0, 0, 6], fov: 45 }}
        gl={{ antialias: true, alpha: true, powerPreference: "high-performance" }}
      >
        <Suspense fallback={null}>
          <Lights />
          <CameraRig />
          <SceneRouter />
          <Postprocessing />
        </Suspense>
      </Canvas>
    </div>
  );
}

function SceneRouter() {
  const { current } = useSceneState();
  switch (current) {
    case "hero-globe":
      return <HeroGlobeScene />;
    case "dustland-inset":
      return <DustlandShardsScene />;
    case "idle":
    default:
      return null;
  }
}

export default SharedCanvas;
