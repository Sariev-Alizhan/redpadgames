"use client";

import * as React from "react";

export type SceneId =
  | "idle"
  | "hero-globe"
  | "dustland-inset"
  | "team-arcs"
  | "studio-globe";

export interface SceneState {
  current: SceneId;
  /** 0–1 progress within the current section, useful for camera dollies. */
  progress: number;
}

const SceneContext = React.createContext<SceneState>({ current: "idle", progress: 0 });
const SceneSetterContext = React.createContext<(s: SceneState) => void>(() => {});

/**
 * Mounts at the root, exposes a scene-id state machine for the SharedCanvas
 * to subscribe to. DOM sections call `setScene()` from their IntersectionObserver
 * callbacks (wired up in Stage 5).
 */
export function SceneControllerProvider({ children }: { children: React.ReactNode }) {
  const [state, setState] = React.useState<SceneState>({ current: "idle", progress: 0 });
  const setter = React.useCallback((next: SceneState) => setState(next), []);
  return (
    <SceneSetterContext.Provider value={setter}>
      <SceneContext.Provider value={state}>{children}</SceneContext.Provider>
    </SceneSetterContext.Provider>
  );
}

export function useSceneState() {
  return React.useContext(SceneContext);
}

export function useSceneSetter() {
  return React.useContext(SceneSetterContext);
}
