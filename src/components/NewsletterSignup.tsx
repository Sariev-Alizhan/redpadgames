"use client";

import * as React from "react";

/**
 * Newsletter capture — opens a pre-filled email to hello@redpad.games when
 * the user submits. This avoids wiring an ESP (Mailchimp/Resend/Klaviyo)
 * before the studio has actually picked one. When the studio is ready,
 * swap the onSubmit body for an HTTP POST to the chosen provider; the
 * markup stays the same.
 */
export function NewsletterSignup() {
  const [email, setEmail] = React.useState("");
  const [sent, setSent] = React.useState(false);

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!email) return;
    const subject = encodeURIComponent("Subscribe — RedPad newsletter");
    const body = encodeURIComponent(
      `Please subscribe ${email} to the RedPad Games newsletter.`,
    );
    window.location.href = `mailto:contact@redpad.games?subject=${subject}&body=${body}`;
    setSent(true);
  };

  return (
    <div>
      <p className="font-mono text-caption uppercase tracking-[0.25em] text-text-faint">
        Newsletter
      </p>
      <p className="mt-3 max-w-xs text-body-sm text-text-muted">
        Major releases, partnership news, dev logs. About one email a month.
        No spam.
      </p>
      <form onSubmit={onSubmit} className="mt-4 flex gap-2">
        <label className="sr-only" htmlFor="newsletter-email">
          Your email
        </label>
        <input
          id="newsletter-email"
          type="email"
          required
          inputMode="email"
          autoComplete="email"
          placeholder="you@example.com"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="flex-1 rounded-md border border-divider bg-bg px-3 py-2 font-mono text-caption text-text placeholder:text-text-faint focus:border-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-bg"
        />
        <button
          type="submit"
          data-cursor="hover"
          className="rounded-md bg-accent px-4 py-2 font-mono text-caption uppercase tracking-[0.2em] text-text transition-colors hover:bg-accent-hot"
        >
          {sent ? "Sent" : "Subscribe"}
        </button>
      </form>
      {sent ? (
        <p className="mt-3 font-mono text-caption uppercase tracking-[0.18em] text-accent">
          Thanks — we&apos;ll be in touch.
        </p>
      ) : null}
    </div>
  );
}
