"use client";

import * as React from "react";
import { cn } from "@/lib/utils";

const TRACK_SRC = "/audio/seven-nation-army.mp3";
const TRACK_TITLE = "Seven Nation Army";
const TRACK_ARTIST = "The White Stripes";

/**
 * Floating music control. Bottom-right, persists across pages. Always visible
 * — never hides itself based on file availability, because the user reported
 * the button was disappearing on every visit. The audio file lives at
 * /public/audio/seven-nation-army.mp3; if it's missing the click silently
 * no-ops (no console spam, no UI churn).
 *
 * Browsers block autoplay-with-sound, so first paint is paused. Click to
 * start. Volume defaults to a polite 0.4 so the page doesn't yell.
 */
export function MusicPlayer() {
  const audioRef = React.useRef<HTMLAudioElement>(null);
  const [playing, setPlaying] = React.useState(false);

  const toggle = () => {
    const audio = audioRef.current;
    if (!audio) return;
    if (playing) {
      audio.pause();
      setPlaying(false);
      return;
    }
    audio.volume = 0.4;
    audio.play().then(
      () => setPlaying(true),
      // No-op on failure (missing file, codec issue, autoplay block) — UI
      // stays as paused so the user can click again later.
      () => setPlaying(false),
    );
  };

  return (
    <div
      className={cn(
        "fixed bottom-5 right-5 z-[110] flex items-center gap-3 rounded-full border border-divider bg-bg-elevated/90 py-2 pl-2 pr-4 shadow-lg backdrop-blur",
      )}
      aria-label="Background music"
    >
      <button
        type="button"
        onClick={toggle}
        aria-label={playing ? "Pause music" : "Play music"}
        data-cursor="hover"
        className="flex size-9 items-center justify-center rounded-full bg-accent text-text transition-colors hover:bg-accent-hot focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-bg"
      >
        {playing ? <PauseGlyph /> : <PlayGlyph />}
      </button>
      <span className="hidden flex-col leading-tight sm:flex">
        <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-text-faint">
          {playing ? "Now playing" : "Click to play"}
        </span>
        <span className="font-display text-[13px] font-semibold tracking-tight text-text">
          {TRACK_TITLE}
        </span>
        <span className="font-mono text-[10px] uppercase tracking-[0.18em] text-text-muted">
          {TRACK_ARTIST}
        </span>
      </span>
      <audio ref={audioRef} src={TRACK_SRC} loop preload="metadata" />
    </div>
  );
}

function PlayGlyph() {
  return (
    <svg width="14" height="14" viewBox="0 0 14 14" fill="currentColor" aria-hidden>
      <path d="M3 1.5 L12 7 L3 12.5 Z" />
    </svg>
  );
}

function PauseGlyph() {
  return (
    <svg width="14" height="14" viewBox="0 0 14 14" fill="currentColor" aria-hidden>
      <rect x="3" y="2" width="3" height="10" rx="0.5" />
      <rect x="8" y="2" width="3" height="10" rx="0.5" />
    </svg>
  );
}
