"use client";

import * as React from "react";
import * as THREE from "three";
import { useFrame } from "@react-three/fiber";

export interface ParticleFieldProps {
  count?: number;
  spread?: number;
  size?: number;
  color?: string;
  speed?: number;
  opacity?: number;
}

/**
 * Configurable instanced particle field. Cheap (single Points draw call).
 * Used as ambient atmosphere (dust, embers) under hero scenes.
 */
export function ParticleField({
  count = 800,
  spread = 8,
  size = 0.025,
  color = "#e1141c",
  speed = 0.04,
  opacity = 0.6,
}: ParticleFieldProps) {
  const ref = React.useRef<THREE.Points>(null);

  const positions = React.useMemo(() => {
    const arr = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      arr[i * 3] = (Math.random() - 0.5) * spread;
      arr[i * 3 + 1] = (Math.random() - 0.5) * spread;
      arr[i * 3 + 2] = (Math.random() - 0.5) * spread;
    }
    return arr;
  }, [count, spread]);

  useFrame((_, delta) => {
    const node = ref.current;
    if (!node) return;
    node.rotation.y += delta * speed;
    node.rotation.x += delta * speed * 0.4;
  });

  return (
    <points ref={ref}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          args={[positions, 3]}
        />
      </bufferGeometry>
      <pointsMaterial
        size={size}
        color={color}
        transparent
        opacity={opacity}
        sizeAttenuation
        depthWrite={false}
      />
    </points>
  );
}
