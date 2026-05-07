"use client";

import * as React from "react";
import * as THREE from "three";

export interface LogoMeshProps {
  depth?: number;
  scale?: number;
  color?: string;
}

/**
 * 3D extruded RedPad logo silhouette — a tilted trapezoidal frame.
 * Used as a transition primitive in Stage 5. Procedural so we can
 * skip shipping a GLB until brand-vector assets arrive.
 */
export function LogoMesh({ depth = 0.12, scale = 1, color = "#0a0a0b" }: LogoMeshProps) {
  const geometry = React.useMemo(() => {
    // Outer + inner trapezoid as a single Shape with a hole.
    const outer = new THREE.Shape();
    outer.moveTo(-1.0, -1.0);
    outer.lineTo(1.05, -0.95);
    outer.lineTo(0.95, 1.0);
    outer.lineTo(-1.05, 0.9);
    outer.closePath();

    const inner = new THREE.Path();
    inner.moveTo(-0.85, -0.85);
    inner.lineTo(0.9, -0.8);
    inner.lineTo(0.8, 0.85);
    inner.lineTo(-0.9, 0.75);
    inner.closePath();
    outer.holes.push(inner);

    const geo = new THREE.ExtrudeGeometry(outer, {
      depth,
      bevelEnabled: true,
      bevelThickness: 0.02,
      bevelSize: 0.02,
      bevelSegments: 2,
    });
    geo.center();
    return geo;
  }, [depth]);

  return (
    <mesh geometry={geometry} scale={scale}>
      <meshStandardMaterial
        color={color}
        metalness={0.7}
        roughness={0.35}
      />
    </mesh>
  );
}
