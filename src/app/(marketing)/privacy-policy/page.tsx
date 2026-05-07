import type { Metadata } from "next";
import { LegalLayout } from "@/components/LegalLayout";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "How RedPad Games handles personal data on redpad.games — cookies, analytics, contact email, and your rights.",
};

const UPDATED = "2026-05-07";

export default function PrivacyPolicyPage() {
  return (
    <LegalLayout
      title="Privacy Policy"
      updated={UPDATED}
      intro="Plain English. We don't sell your data, we don't use ad networks, and we use the smallest amount of telemetry that lets us run the site responsibly. This page tells you exactly what."
    >
      <h2>Who we are</h2>
      <p>
        Red Pad Games AG (&quot;RedPad&quot;, &quot;we&quot;, &quot;us&quot;) is a Swiss
        company headquartered in Zurich, with a development hub in Almaty,
        Kazakhstan. The data controller for this site is Red Pad Games AG.
        Reach us at <a href="mailto:privacy@redpad.games">privacy@redpad.games</a> for
        any privacy question.
      </p>

      <h2>What data we collect</h2>
      <p>We collect three buckets of data — and that&apos;s the entire list:</p>
      <ul>
        <li>
          <strong>Anonymous usage analytics.</strong> We use Vercel Analytics
          and Vercel Speed Insights to count page views, measure performance,
          and find broken pages. The data is aggregated and does not identify
          individual visitors. No third-party trackers, no advertising
          pixels.
        </li>
        <li>
          <strong>Cookies / browser storage.</strong> We use a small number
          of first-party cookies and a few <code>localStorage</code> keys to
          remember your preferences (cookie banner choice, loading screen
          shown). Full list at our <a href="/cookie-policy">Cookie Policy</a>.
        </li>
        <li>
          <strong>Email + message body.</strong> If you write to us at any
          address ending in <code>@redpad.games</code> — or fill in the
          newsletter input — we receive your email address and whatever
          you typed. We store this only as long as we need to reply or
          fulfil the subscription.
        </li>
      </ul>

      <h2>What we don&apos;t do</h2>
      <ul>
        <li>We don&apos;t use Google Analytics, Facebook Pixel, or any ad-tech network.</li>
        <li>We don&apos;t sell, rent, or share data with third parties for marketing.</li>
        <li>We don&apos;t profile you. There is no behavioral targeting.</li>
      </ul>

      <h2>Cookies &amp; consent</h2>
      <p>
        On your first visit you&apos;ll see a small cookie banner bottom-left.
        You can &quot;Accept&quot; or &quot;Decline&quot; — either way, the
        site works. The choice is stored in <code>localStorage</code> under
        the key <code>rp-cookie-consent-v1</code> so we don&apos;t ask again
        on future visits. To re-prompt, clear that key in your browser&apos;s
        storage.
      </p>
      <p>
        Even if you decline, Vercel may set strictly-necessary cookies
        (anti-DDoS, request routing). These are essential for the site to
        load and cannot be turned off.
      </p>

      <h2>Where data goes</h2>
      <ul>
        <li>
          <strong>Web hosting.</strong> The site runs on Vercel
          (vercel.com). Visitor IP addresses pass through Vercel&apos;s
          edge network. Vercel acts as a data processor for us.
        </li>
        <li>
          <strong>Analytics.</strong> Vercel Analytics, processed in
          aggregate by Vercel.
        </li>
        <li>
          <strong>Email.</strong> Email you send to <code>@redpad.games</code> is
          stored in our mail provider (Google Workspace).
        </li>
      </ul>

      <h2>Your rights</h2>
      <p>
        Under GDPR, UK GDPR, the Swiss Federal Act on Data Protection, and
        analogous laws elsewhere, you have the right to: access the data we
        hold about you, correct it, delete it, port it, or object to its
        processing. To exercise any of these, write to <a href="mailto:privacy@redpad.games">privacy@redpad.games</a> —
        we&apos;ll respond within 30 days.
      </p>

      <h2>Children</h2>
      <p>
        This site isn&apos;t directed at children under 13 (or 16 in the EU/UK),
        and we don&apos;t knowingly collect their data. If you believe a child has
        sent us information, please email us and we&apos;ll delete it.
      </p>

      <h2>Game accounts (Dustland on Steam)</h2>
      <p>
        Account, anti-cheat (Easy Anti-Cheat), and gameplay-telemetry data
        for our games is governed separately — see the relevant in-game
        privacy notice and Steam&apos;s privacy policy.
      </p>

      <h2>Changes</h2>
      <p>
        We update this page when we change something. The &quot;Last updated&quot;
        date at the top tells you when it last changed. Material changes
        will be announced on the news feed.
      </p>

      <h2>Contact</h2>
      <p>
        Privacy questions: <a href="mailto:privacy@redpad.games">privacy@redpad.games</a>.
        General contact: <a href="/contacts">contacts page</a>.
      </p>
    </LegalLayout>
  );
}
