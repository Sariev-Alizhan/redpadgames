"use client";

import { Canvas } from "@react-three/fiber";
import { Suspense, useState } from "react";
import { Lights } from "@/components/three/Lights";
import { ShardCluster } from "@/components/three/ShardCluster";
import { Postprocessing } from "@/components/three/Postprocessing";
import { Button } from "@/components/ui/Button";

/**
 * Local R3F canvas (separate from the SharedCanvas) for demoing
 * the ShardCluster primitive on /style-guide. Uses postprocessing
 * + Lights so devs can see the same atmosphere production scenes get.
 */
export function StyleGuideR3FDemo() {
  const [explode, setExplode] = useState(0);

  return (
    <div className="grid gap-4 md:grid-cols-[1fr_auto] md:items-end">
      <div className="relative h-[420px] overflow-hidden rounded-lg border border-divider bg-bg">
        <Canvas
          dpr={[1, 2]}
          camera={{ position: [0, 0, 4.5], fov: 45 }}
          gl={{ antialias: true, alpha: true }}
        >
          <Suspense fallback={null}>
            <Lights />
            <ShardCluster explode={explode} />
            <Postprocessing />
          </Suspense>
        </Canvas>
      </div>
      <div className="flex flex-col gap-2">
        <p className="font-mono text-caption uppercase tracking-[0.2em] text-text-muted">
          ShardCluster · explode {explode.toFixed(2)}
        </p>
        <div className="flex gap-2">
          <Button
            size="sm"
            variant="outline"
            onClick={() => setExplode(0)}
            aria-label="Set explode to 0"
          >
            0.0
          </Button>
          <Button
            size="sm"
            variant="outline"
            onClick={() => setExplode(0.5)}
            aria-label="Set explode to 0.5"
          >
            0.5
          </Button>
          <Button
            size="sm"
            variant="primary"
            onClick={() => setExplode(1)}
            aria-label="Set explode to 1"
          >
            1.0
          </Button>
        </div>
      </div>
    </div>
  );
}
