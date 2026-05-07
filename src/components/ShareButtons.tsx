"use client";

import * as React from "react";
import {
  FaXTwitter,
  FaFacebook,
  FaLinkedin,
  FaTelegram,
  FaLink,
} from "react-icons/fa6";
import { cn } from "@/lib/utils";

interface ShareButtonsProps {
  url: string;
  title: string;
  className?: string;
}

/**
 * Social-share row for articles. Click → opens the share intent for the
 * given network, in a new window. The copy-link button writes to the
 * clipboard and flashes 'copied' for 1.5 seconds.
 *
 * URLs use each platform's intent endpoint (no JS SDK loaded on this site).
 */
export function ShareButtons({ url, title, className }: ShareButtonsProps) {
  const [copied, setCopied] = React.useState(false);

  const intents = React.useMemo(() => {
    const u = encodeURIComponent(url);
    const t = encodeURIComponent(title);
    return {
      x: `https://twitter.com/intent/tweet?url=${u}&text=${t}&via=redpadgames`,
      facebook: `https://www.facebook.com/sharer/sharer.php?u=${u}`,
      linkedin: `https://www.linkedin.com/sharing/share-offsite/?url=${u}`,
      telegram: `https://t.me/share/url?url=${u}&text=${t}`,
    };
  }, [url, title]);

  const onCopy = async () => {
    try {
      await navigator.clipboard.writeText(url);
      setCopied(true);
      setTimeout(() => setCopied(false), 1500);
    } catch {
      // Clipboard API may be blocked — silently no-op.
    }
  };

  const targets: Array<{ key: string; href: string; label: string; Icon: React.ComponentType<{ size?: number }> }> = [
    { key: "x", href: intents.x, label: "Share on X", Icon: FaXTwitter },
    { key: "facebook", href: intents.facebook, label: "Share on Facebook", Icon: FaFacebook },
    { key: "linkedin", href: intents.linkedin, label: "Share on LinkedIn", Icon: FaLinkedin },
    { key: "telegram", href: intents.telegram, label: "Share on Telegram", Icon: FaTelegram },
  ];

  return (
    <div className={cn("flex items-center gap-3", className)}>
      <span className="font-mono text-caption uppercase tracking-[0.25em] text-text-faint">
        Share
      </span>
      <ul className="flex items-center gap-2">
        {targets.map(({ key, href, label, Icon }) => (
          <li key={key}>
            <a
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={label}
              data-cursor="hover"
              className="group flex size-10 items-center justify-center rounded-full border border-divider text-text-muted transition-all duration-300 hover:border-accent hover:bg-accent/10 hover:text-accent"
            >
              <Icon size={16} />
            </a>
          </li>
        ))}
        <li>
          <button
            type="button"
            onClick={onCopy}
            aria-label={copied ? "Link copied" : "Copy link"}
            data-cursor="hover"
            className={cn(
              "flex size-10 items-center justify-center rounded-full border text-text-muted transition-all duration-300",
              copied
                ? "border-accent bg-accent/10 text-accent"
                : "border-divider hover:border-accent hover:bg-accent/10 hover:text-accent",
            )}
          >
            <FaLink size={14} />
          </button>
        </li>
      </ul>
      {copied ? (
        <span className="font-mono text-[10px] uppercase tracking-[0.18em] text-accent">
          Copied
        </span>
      ) : null}
    </div>
  );
}
