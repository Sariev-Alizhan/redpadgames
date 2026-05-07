import type { Metadata } from "next";
import { LegalLayout } from "@/components/LegalLayout";

export const metadata: Metadata = {
  title: "Cookie Policy",
  description:
    "Exact list of cookies and browser storage used on redpad.games — what they are, what they do, and how to opt out.",
};

const UPDATED = "2026-05-07";

export default function CookiePolicyPage() {
  return (
    <LegalLayout
      title="Cookie Policy"
      updated={UPDATED}
      intro="The complete list of cookies and browser-storage entries this site uses. No advertising trackers, no third-party fingerprinting."
    >
      <h2>What is a cookie</h2>
      <p>
        A cookie is a small text record a site stores in your browser to
        remember things between page loads — your preferences, whether
        you&apos;re signed in, etc. We also use the modern equivalent,{" "}
        <code>localStorage</code>, for a few preferences. Both are listed
        below.
      </p>

      <h2>The full list</h2>

      <h3>Strictly necessary</h3>
      <p>These run regardless of your consent — without them, the site can&apos;t load safely.</p>
      <ul>
        <li>
          <strong>Vercel anti-DDoS / request routing.</strong> Set by our
          host (Vercel). Lifetime: session. Purpose: route requests, prevent
          abuse. We don&apos;t read or share these.
        </li>
      </ul>

      <h3>Preferences (your choice)</h3>
      <p>These remember decisions you made on this site. Stored in <code>localStorage</code>, never sent to a server.</p>
      <ul>
        <li>
          <code>rp-cookie-consent-v1</code> — value <code>accepted</code> or{" "}
          <code>declined</code>. Lifetime: until you clear it. Purpose: stop
          showing you the cookie banner once you&apos;ve answered.
        </li>
        <li>
          <code>rp-loading-shown</code> — value <code>1</code> in{" "}
          <code>sessionStorage</code> (cleared when you close the tab).
          Purpose: show the loading screen only on the first page of a
          session, never again.
        </li>
      </ul>

      <h3>Anonymous analytics</h3>
      <p>
        Active when you accept analytics. Vercel Analytics + Speed Insights
        — aggregated, anonymous, no personal identifiers stored. Used to
        count page views, find broken pages, and measure how fast the site
        loads.
      </p>
      <ul>
        <li>
          <code>_vercel_*</code> family — Vercel&apos;s own analytics
          identifiers. Lifetime: short-lived. Aggregated server-side.
        </li>
      </ul>

      <h2>How to opt out</h2>
      <p>You have three ways:</p>
      <ul>
        <li>
          Click <strong>Decline</strong> on the cookie banner the first time
          you visit. We respect that choice.
        </li>
        <li>
          Clear site storage in your browser&apos;s DevTools (Application →
          Storage → Clear site data). The next visit will re-show the
          banner.
        </li>
        <li>
          Use private/incognito mode — nothing persists across sessions.
        </li>
      </ul>
      <p>
        Browser-level cookie controls (block all cookies, third-party only,
        per-site) work too. Note that strictly-necessary cookies cannot be
        disabled without breaking the site.
      </p>

      <h2>Game-side cookies</h2>
      <p>
        Cookies inside Dustland (the Steam client, Steam web overlay,
        Easy Anti-Cheat) are managed by Steam and Epic Games respectively.
        See <a href="https://store.steampowered.com/privacy_agreement/" target="_blank" rel="noopener noreferrer">Steam&apos;s privacy notice</a> and Easy Anti-Cheat&apos;s policy.
      </p>

      <h2>Changes</h2>
      <p>
        If we add a new tracker (we don&apos;t plan to), this page updates and
        the cookie banner re-appears so you can make a fresh choice. Last
        update at the top of the page.
      </p>

      <h2>Contact</h2>
      <p>
        Cookie questions: <a href="mailto:contact@redpad.games?subject=%5BRedPad%5D%20Privacy">contact@redpad.games</a>.
        See also <a href="/privacy-policy">Privacy Policy</a>.
      </p>
    </LegalLayout>
  );
}
