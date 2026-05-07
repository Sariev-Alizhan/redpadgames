"use client";

import * as React from "react";
import * as THREE from "three";
import { useFrame } from "@react-three/fiber";
import { ShardCluster } from "../ShardCluster";
import { ParticleField } from "../ParticleField";
import { dustlandProgress } from "@/lib/heroProgress";

/**
 * Dustland-mood centerpiece. Visually replaces the hero globe at the same
 * on-screen position so the swap reads as "the globe shattered into shards".
 *
 *   • ShardCluster — 28 emissive red tetrahedrons, expand outward as
 *     dustlandProgress goes 0 → 1.
 *   • ParticleField — denser ember swarm tinted warm, 600 points.
 *   • Same world position [1.7, 0.05, 0] and scale 1.55 as HeroGlobeScene
 *     so the camera dolly (CameraRig) reads continuous through the swap.
 *
 * Triangle budget: 28 tetrahedra × 4 tris = 112. Particles 0 tris. Total
 * well under 50K desktop / 15K mobile budget.
 */
export default function DustlandShardsScene() {
  const group = React.useRef<THREE.Group>(null);

  useFrame((_, delta) => {
    if (!group.current) return;
    group.current.rotation.y += delta * 0.04;
    group.current.rotation.x = Math.sin(performance.now() * 0.00008) * 0.04;
  });

  return (
    <group ref={group} position={[1.7, 0.05, 0]} scale={1.55}>
      <ShardCluster
        count={28}
        radius={0.95}
        size={0.18}
        color="#e1141c"
        spinSpeed={0.18}
        explodeRef={dustlandProgress}
      />
      {/* Dust + ember field — warmer tone than hero ambient */}
      <ParticleField count={600} spread={6} color="#f0a93e" opacity={0.22} size={0.018} />
    </group>
  );
}
