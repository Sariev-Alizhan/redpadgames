"use client";

import * as React from "react";
import { cn } from "@/lib/utils";

const TRACK_SRC = "/audio/seven-nation-army.mp3";
const TRACK_TITLE = "Seven Nation Army";
const TRACK_ARTIST = "The White Stripes";

/**
 * Floating music control. Sits bottom-right above the cursor layer. Browsers
 * block autoplay-with-sound, so the first paint is paused; user clicks to
 * start. Volume defaults to a polite 0.4 so the page doesn't yell. The audio
 * tag is HTML5 — no library, no bundler weight.
 *
 * Audio file lives at `/public/audio/seven-nation-army.mp3`. If absent the
 * component still renders but the play button silently no-ops; the missing
 * file is logged to the console and the player auto-hides after one click.
 */
export function MusicPlayer() {
  const audioRef = React.useRef<HTMLAudioElement>(null);
  const [playing, setPlaying] = React.useState(false);
  const [hidden, setHidden] = React.useState(false);
  const [available, setAvailable] = React.useState(true);

  React.useEffect(() => {
    if (typeof window === "undefined") return;
    // Ping the file on mount; hide the player if the user hasn't dropped it
    // in /public/audio yet so we don't show a button that does nothing.
    fetch(TRACK_SRC, { method: "HEAD" })
      .then((r) => setAvailable(r.ok))
      .catch(() => setAvailable(false));
  }, []);

  const toggle = () => {
    const audio = audioRef.current;
    if (!audio) return;
    if (playing) {
      audio.pause();
      setPlaying(false);
    } else {
      audio.volume = 0.4;
      audio.play().then(
        () => setPlaying(true),
        () => {
          // Browser refused (likely missing file or codec). Hide the widget.
          setHidden(true);
        },
      );
    }
  };

  if (hidden || !available) return null;

  return (
    <div
      className={cn(
        "fixed bottom-5 right-5 z-[110] flex items-center gap-3 rounded-full border border-divider bg-bg-elevated/90 py-2 pl-2 pr-4 shadow-lg backdrop-blur transition-all",
        // Hide on the smallest screens so it doesn't fight the marquee or CTAs.
        "hidden sm:flex",
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
      <span className="flex flex-col leading-tight">
        <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-text-faint">
          Now playing
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
