"use client";

import * as React from "react";
import * as THREE from "three";
import { useFrame } from "@react-three/fiber";
import { Line } from "@react-three/drei";
import { ParticleField } from "../ParticleField";

type LatLon = readonly [number, number];

const PINS: ReadonlyArray<{ name: string; coords: LatLon }> = [
  { name: "ALMATY", coords: [43.25, 76.95] },
  { name: "ZURICH", coords: [47.37, 8.55] },
  { name: "UAE", coords: [25.2048, 55.2708] }, // Dubai — Tencent Cloud signing ceremony location, 2026-05-07
];

function latLon(lat: number, lon: number, r = 1): [number, number, number] {
  const phi = (90 - lat) * (Math.PI / 180);
  const theta = (lon + 180) * (Math.PI / 180);
  return [
    -r * Math.sin(phi) * Math.cos(theta),
    r * Math.cos(phi),
    r * Math.sin(phi) * Math.sin(theta),
  ];
}

function arcPoints(
  a: [number, number, number],
  b: [number, number, number],
  lift = 0.45,
): THREE.Vector3[] {
  const va = new THREE.Vector3(...a);
  const vb = new THREE.Vector3(...b);
  const mid = va
    .clone()
    .add(vb)
    .multiplyScalar(0.5)
    .normalize()
    .multiplyScalar(1 + lift);
  const curve = new THREE.QuadraticBezierCurve3(va, mid, vb);
  return curve.getPoints(48);
}

/**
 * Hero centerpiece — wireframe globe with three operational pins
 * (Almaty / Zurich / UAE) connected by signal-red bezier arcs.
 *
 * This scene is now pure geometry. Camera dolly moved into CameraRig
 * (mounted once in SharedCanvas) so the camera continues smoothly when
 * the SceneRouter swaps to DustlandShardsScene at the next section.
 *
 * Triangle budget: ~4700 tris (icosa wire + occluder + 3 pins). Lines
 * and Points are 0 tris.
 */
export default function HeroGlobeScene() {
  const group = React.useRef<THREE.Group>(null);

  const pinPositions = React.useMemo(
    () => PINS.map((p) => latLon(p.coords[0], p.coords[1], 1.0)),
    [],
  );

  const arcs = React.useMemo(() => {
    const result: THREE.Vector3[][] = [];
    for (let i = 0; i < pinPositions.length; i++) {
      for (let j = i + 1; j < pinPositions.length; j++) {
        const a = pinPositions[i];
        const b = pinPositions[j];
        if (!a || !b) continue;
        result.push(arcPoints(a, b));
      }
    }
    return result;
  }, [pinPositions]);

  useFrame((_, delta) => {
    const node = group.current;
    if (!node) return;
    node.rotation.y += delta * 0.07;
    node.rotation.x = Math.sin(performance.now() * 0.0001) * 0.05;
  });

  return (
    <group ref={group} position={[1.7, 0.05, 0]} scale={1.55}>
      <mesh>
        <sphereGeometry args={[0.985, 48, 32]} />
        <meshStandardMaterial color="#0c0d11" roughness={0.9} metalness={0.05} />
      </mesh>

      <mesh>
        <icosahedronGeometry args={[1, 4]} />
        <meshBasicMaterial color="#2a2e36" wireframe transparent opacity={0.85} />
      </mesh>

      {pinPositions.map((pos, i) => (
        <group key={PINS[i]?.name ?? i} position={pos}>
          <mesh>
            <sphereGeometry args={[0.028, 14, 14]} />
            <meshStandardMaterial
              color="#e1141c"
              emissive="#e1141c"
              emissiveIntensity={1.4}
              toneMapped={false}
            />
          </mesh>
          <mesh>
            <ringGeometry args={[0.045, 0.07, 28]} />
            <meshBasicMaterial
              color="#e1141c"
              transparent
              opacity={0.35}
              side={THREE.DoubleSide}
              toneMapped={false}
            />
          </mesh>
        </group>
      ))}

      {arcs.map((points, i) => (
        <Line
          key={i}
          points={points}
          color="#e1141c"
          lineWidth={1.6}
          transparent
          opacity={0.7}
          toneMapped={false}
        />
      ))}

      <ParticleField count={350} spread={5} color="#e1141c" opacity={0.18} size={0.014} />
    </group>
  );
}
