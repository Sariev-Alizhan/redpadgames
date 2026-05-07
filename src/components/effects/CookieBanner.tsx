"use client";

import * as React from "react";
import { AnimatePresence, motion } from "framer-motion";

const STORAGE_KEY = "rp-cookie-consent-v1";

/**
 * GDPR-style cookie banner. Sits bottom-left so it doesn't fight the music
 * player on the right. Persists the user's choice in localStorage; only
 * surfaces again if the user wipes storage or we bump the storage version.
 *
 * 'Accept' enables analytics + speed insights to record full data.
 * 'Decline' keeps Vercel's anonymous-only telemetry.
 */
export function CookieBanner() {
  const [decision, setDecision] = React.useState<"unknown" | "accepted" | "declined">("unknown");

  React.useEffect(() => {
    if (typeof window === "undefined") return;
    try {
      const stored = window.localStorage.getItem(STORAGE_KEY);
      if (stored === "accepted" || stored === "declined") {
        setDecision(stored);
      }
    } catch {
      // localStorage blocked — leave the banner up.
    }
  }, []);

  const choose = (value: "accepted" | "declined") => {
    try {
      window.localStorage.setItem(STORAGE_KEY, value);
    } catch {
      // ignore — best-effort persistence.
    }
    setDecision(value);
  };

  return (
    <AnimatePresence>
      {decision === "unknown" ? (
        <motion.div
          initial={{ y: 24, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 24, opacity: 0 }}
          transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
          className="fixed bottom-5 left-5 right-5 z-[105] mx-auto flex max-w-md flex-col gap-4 rounded-lg border border-divider bg-bg-elevated/95 p-5 shadow-lg backdrop-blur sm:left-5 sm:right-auto sm:max-w-sm"
          role="dialog"
          aria-label="Cookie preferences"
        >
          <div>
            <p className="font-mono text-caption uppercase tracking-[0.25em] text-accent">
              Cookies
            </p>
            <p className="mt-3 text-body-sm text-text-muted">
              We use cookies to measure performance and improve the site —
              nothing personal, no third-party trackers. You can change your
              choice any time.
            </p>
          </div>
          <div className="flex gap-2">
            <button
              type="button"
              onClick={() => choose("accepted")}
              data-cursor="hover"
              className="flex-1 rounded-md bg-accent px-4 py-2.5 font-mono text-caption uppercase tracking-[0.2em] text-text transition-colors hover:bg-accent-hot"
            >
              Accept
            </button>
            <button
              type="button"
              onClick={() => choose("declined")}
              data-cursor="hover"
              className="flex-1 rounded-md border border-divider px-4 py-2.5 font-mono text-caption uppercase tracking-[0.2em] text-text-muted transition-colors hover:border-accent hover:text-accent"
            >
              Decline
            </button>
          </div>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
}
