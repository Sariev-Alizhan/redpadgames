"use client";

import * as React from "react";
import { useReducedMotion } from "framer-motion";
import { cn } from "@/lib/utils";

export interface VideoLoopProps
  extends Omit<React.VideoHTMLAttributes<HTMLVideoElement>, "controls"> {
  src?: string;
  poster?: string;
  /** Pause when scrolled out of viewport. Default true. */
  pauseOffscreen?: boolean;
  /** Render a small play/pause button overlay in the bottom-right corner.
   *  The video is always muted, so the toggle is play-state only. */
  withControls?: boolean;
  /** Visible label for screen readers. The DOM <video> stays unlabeled. */
  ariaLabel?: string;
}

/**
 * Muted, looped, autoplay video block. Lazy-pauses when offscreen to save
 * GPU. Falls back to the poster when no `src` is provided.
 *
 * `prefers-reduced-motion`: autoplay is suppressed and the video starts
 * paused — the user can press the controls toggle to opt in.
 */
export function VideoLoop({
  src,
  poster,
  pauseOffscreen = true,
  withControls = false,
  ariaLabel,
  className,
  ...props
}: VideoLoopProps) {
  const ref = React.useRef<HTMLVideoElement | null>(null);
  const reduce = useReducedMotion();
  const [paused, setPaused] = React.useState(reduce ?? false);

  React.useEffect(() => {
    if (!pauseOffscreen) return;
    const node = ref.current;
    if (!node || !("IntersectionObserver" in window)) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry) return;
        if (entry.isIntersecting && !reduce) {
          void node.play().catch(() => {});
        } else {
          node.pause();
        }
      },
      { threshold: 0.05 },
    );
    observer.observe(node);
    return () => observer.disconnect();
  }, [pauseOffscreen, reduce]);

  React.useEffect(() => {
    const node = ref.current;
    if (!node) return;
    const onPause = () => setPaused(true);
    const onPlay = () => setPaused(false);
    node.addEventListener("pause", onPause);
    node.addEventListener("play", onPlay);
    return () => {
      node.removeEventListener("pause", onPause);
      node.removeEventListener("play", onPlay);
    };
  }, []);

  const togglePlay = React.useCallback(() => {
    const node = ref.current;
    if (!node) return;
    if (node.paused) void node.play().catch(() => {});
    else node.pause();
  }, []);

  if (!src) {
    return (
      <div
        className={cn(
          "relative aspect-video w-full overflow-hidden rounded-md bg-surface",
          className,
        )}
        style={
          poster ? { backgroundImage: `url(${poster})`, backgroundSize: "cover" } : undefined
        }
        aria-label={ariaLabel ?? "Video placeholder"}
        role={ariaLabel ? "img" : undefined}
      />
    );
  }

  const video = (
    <video
      ref={ref}
      src={src}
      poster={poster}
      autoPlay={!reduce}
      muted
      loop
      playsInline
      preload="metadata"
      aria-label={ariaLabel}
      className={cn(
        "h-full w-full object-cover",
        // No rounded corners here — caller decides on the wrapper.
        className,
      )}
      {...props}
    />
  );

  if (!withControls) return video;

  return (
    <div className="relative h-full w-full">
      {video}
      <button
        type="button"
        aria-label={paused ? "Play video (muted)" : "Pause video"}
        aria-pressed={paused}
        onClick={togglePlay}
        className="absolute bottom-4 right-4 z-10 inline-flex size-10 items-center justify-center rounded-full bg-bg/70 text-text backdrop-blur-md ring-1 ring-divider transition-colors duration-fast ease-standard hover:bg-bg/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-bg pointer-events-auto"
      >
        {paused ? (
          <svg viewBox="0 0 24 24" className="size-4" aria-hidden="true">
            <path d="M8 5v14l11-7z" fill="currentColor" />
          </svg>
        ) : (
          <svg viewBox="0 0 24 24" className="size-4" aria-hidden="true">
            <path d="M6 5h4v14H6zM14 5h4v14h-4z" fill="currentColor" />
          </svg>
        )}
        <span className="sr-only"> · Muted</span>
      </button>
    </div>
  );
}
