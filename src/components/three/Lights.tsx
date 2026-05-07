"use client";

/**
 * Standard lighting rig for Direction 02 — clean, slightly cool ambient
 * with a single warm-red rim. Used by SharedCanvas and the per-section
 * scene primitives. Tweak `intensity` props from outside if a section
 * needs darker / brighter atmosphere.
 */
export function Lights({
  ambient = 0.35,
  key = 1.2,
  rim = 0.6,
}: {
  ambient?: number;
  key?: number;
  rim?: number;
}) {
  return (
    <>
      <ambientLight intensity={ambient} color="#dde3f0" />
      <directionalLight
        position={[4, 6, 4]}
        intensity={key}
        color="#f4f5f7"
      />
      {/* Brand-red rim from behind for the signature Direction 02 glow */}
      <pointLight position={[-4, 2, -3]} intensity={rim} color="#e1141c" distance={12} />
    </>
  );
}
