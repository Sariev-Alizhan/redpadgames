"use client";

import * as React from "react";
import { AnimatePresence, motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface TrailerModalProps {
  /** YouTube video id (the part after `?v=`). */
  youtubeId: string;
  /** Trigger button label. */
  label?: string;
  /** Visual variant of the trigger. */
  variant?: "primary" | "outline";
  className?: string;
}

/**
 * In-page YouTube trailer lightbox. Avoids opening YouTube in a new tab
 * (user reported the external link wasn't opening the trailer cleanly).
 * Renders the iframe only when open so we don't load the YT player on idle.
 */
export function TrailerModal({
  youtubeId,
  label = "Watch trailer",
  variant = "outline",
  className,
}: TrailerModalProps) {
  const [open, setOpen] = React.useState(false);

  // Close on Escape, lock body scroll while open.
  React.useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    document.addEventListener("keydown", onKey);
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = prev;
    };
  }, [open]);

  const triggerClass =
    variant === "primary"
      ? "bg-accent text-text hover:bg-accent-hot"
      : "bg-transparent text-text border border-divider hover:border-accent hover:text-accent";

  return (
    <>
      <button
        type="button"
        onClick={() => setOpen(true)}
        data-cursor="hover"
        className={cn(
          "inline-flex h-12 items-center justify-center gap-2 rounded-md px-6 font-display text-body-lg tracking-tight transition-colors duration-fast focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-bg",
          triggerClass,
          className,
        )}
      >
        <PlayIcon />
        {label}
      </button>

      <AnimatePresence>
        {open ? (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-[150] flex items-center justify-center bg-bg/95 px-4 py-10 backdrop-blur"
            role="dialog"
            aria-modal="true"
            aria-label="Trailer"
            onClick={() => setOpen(false)}
          >
            <motion.div
              initial={{ scale: 0.96, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.96, opacity: 0 }}
              transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
              onClick={(e) => e.stopPropagation()}
              className="relative w-full max-w-5xl"
            >
              <button
                type="button"
                onClick={() => setOpen(false)}
                aria-label="Close"
                data-cursor="hover"
                className="absolute -top-12 right-0 inline-flex items-center gap-2 font-mono text-caption uppercase tracking-[0.25em] text-text-muted transition-colors hover:text-accent"
              >
                Close
                <span aria-hidden className="inline-flex size-6 items-center justify-center rounded-full border border-divider">
                  ×
                </span>
              </button>
              <div className="aspect-video w-full overflow-hidden rounded-lg border border-divider bg-black">
                <iframe
                  src={`https://www.youtube.com/embed/${youtubeId}?autoplay=1&rel=0`}
                  title="YouTube trailer"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                  className="h-full w-full"
                />
              </div>
            </motion.div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </>
  );
}

function PlayIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 14 14" fill="currentColor" aria-hidden>
      <path d="M3 1.5 L12 7 L3 12.5 Z" />
    </svg>
  );
}
