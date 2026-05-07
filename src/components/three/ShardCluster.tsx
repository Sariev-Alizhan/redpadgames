"use client";

import * as React from "react";
import * as THREE from "three";
import { useFrame } from "@react-three/fiber";

type ProgressRef = { current: number };

export interface ShardClusterProps {
  count?: number;
  radius?: number;
  size?: number;
  color?: string;
  spinSpeed?: number;
  /** Static explode value, 0 = clustered, 1 = exploded outward. */
  explode?: number;
  /** Mutable ref read every frame. Wins over `explode` if provided.
   *  Use to drive expansion from a scroll-progress singleton. */
  explodeRef?: ProgressRef;
}

/**
 * Cluster of tetrahedron shards orbiting a center point. Used as the
 * Dustland-mood centerpiece on the home page (5d) and as a /style-guide
 * primitive demo. Pass an `explodeRef` to animate the expansion live
 * from a scroll-progress ref without React re-renders.
 */
export function ShardCluster({
  count = 20,
  radius = 1.4,
  size = 0.22,
  color = "#e1141c",
  spinSpeed = 0.3,
  explode = 0,
  explodeRef,
}: ShardClusterProps) {
  const group = React.useRef<THREE.Group>(null);
  const meshes = React.useRef<Array<THREE.Mesh | null>>([]);

  const shards = React.useMemo(() => {
    return Array.from({ length: count }, () => ({
      dir: new THREE.Vector3().randomDirection(),
      rot: new THREE.Vector3(
        Math.random() * Math.PI,
        Math.random() * Math.PI,
        Math.random() * Math.PI,
      ),
      jitter: 0.6 + Math.random() * 0.8,
    }));
  }, [count]);

  useFrame((_, delta) => {
    if (group.current) {
      group.current.rotation.y += delta * spinSpeed;
      group.current.rotation.x += delta * spinSpeed * 0.4;
    }

    // Live expansion: read ref each frame, update each mesh's position.
    if (explodeRef) {
      const e = explodeRef.current;
      for (let i = 0; i < shards.length; i++) {
        const mesh = meshes.current[i];
        const s = shards[i];
        if (!mesh || !s) continue;
        const r = radius * s.jitter * (1 + e * 1.2);
        mesh.position.set(s.dir.x * r, s.dir.y * r, s.dir.z * r);
      }
    }
  });

  // Initial position uses static `explode` (or 0) — used when explodeRef is
  // absent (style-guide demo) or as the t=0 placement on first paint.
  const initialExplode = explodeRef ? 0 : explode;

  return (
    <group ref={group}>
      {shards.map((s, i) => {
        const r = radius * s.jitter * (1 + initialExplode * 1.2);
        return (
          <mesh
            key={i}
            ref={(node) => {
              meshes.current[i] = node;
            }}
            position={[s.dir.x * r, s.dir.y * r, s.dir.z * r]}
            rotation={[s.rot.x, s.rot.y, s.rot.z]}
          >
            <tetrahedronGeometry args={[size, 0]} />
            <meshStandardMaterial
              color={color}
              roughness={0.4}
              metalness={0.6}
              emissive={color}
              emissiveIntensity={0.2}
            />
          </mesh>
        );
      })}
    </group>
  );
}
