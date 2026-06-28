import { useEffect } from "react";

const PRODUCT_NAME = "The Way";
const PRODUCT_DESCRIPTION = "The Way Bible game";
const CONTACT_EMAIL = "isaactrevinochurch@gmail.com";
const LAST_UPDATED = "June 27, 2026";

export default function Terms() {
  useEffect(() => {
    const previousTitle = document.title;
    document.title = `Terms of Service — ${PRODUCT_NAME}`;

    return () => {
      document.title = previousTitle;
    };
  }, []);

  return (
    <div className="min-h-screen bg-background text-foreground">
      <main className="max-w-3xl mx-auto px-6 py-16 md:py-24">
        <header className="mb-12">
          <p
            className="flex items-center gap-2 text-xs font-semibold tracking-widest uppercase mb-4"
            style={{ color: "hsl(var(--primary))" }}
          >
            <span className="block w-4 h-px" style={{ background: "hsl(var(--primary))" }} />
            Legal
          </p>
          <h1
            className="font-black tracking-tight mb-3"
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "clamp(2rem, 4vw, 2.75rem)",
              letterSpacing: "-0.03em",
            }}
          >
            Terms of Service
          </h1>
          <p className="text-sm" style={{ color: "hsl(var(--muted-foreground))" }}>
            Last updated: {LAST_UPDATED}
          </p>
        </header>

        <article
          className="prose prose-neutral dark:prose-invert max-w-none prose-headings:font-black prose-headings:tracking-tight prose-headings:[font-family:var(--font-display)] prose-a:text-primary prose-a:no-underline hover:prose-a:underline"
          style={{ color: "hsl(var(--muted-foreground))" }}
        >
          <p className="lead text-base">
            These Terms of Service ("Terms") govern your access to and use of {PRODUCT_DESCRIPTION}.
            By accessing or playing {PRODUCT_NAME}, you agree to these Terms.
          </p>

          <h2>Using the Game</h2>
          <p>
            You may use {PRODUCT_NAME} only in compliance with applicable laws and these Terms. You
            are responsible for your use of the game and your device environment.
          </p>

          <h2>License</h2>
          <p>
            We grant you a limited, non-exclusive, non-transferable, revocable license to access and
            play {PRODUCT_NAME} for personal, non-commercial use.
          </p>

          <h2>Acceptable Use</h2>
          <p>You agree not to:</p>
          <ul>
            <li>Use the game in violation of law or third-party rights</li>
            <li>Attempt to reverse engineer, exploit, disrupt, or damage the game or site</li>
            <li>Introduce malware, automation abuse, or harmful traffic</li>
            <li>Use {PRODUCT_NAME} in a way that creates security, safety, or legal risk</li>
          </ul>

          <h2>Intellectual Property</h2>
          <p>
            {PRODUCT_NAME}, including its code, visuals, music, logos, and related materials, is owned
            by its creator and protected by intellectual property laws. These Terms do not transfer
            ownership to you.
          </p>

          <h2>Third-Party Services</h2>
          <p>
            The game site may rely on third-party hosting or support tools. We are not responsible for
            third-party services and your use of them may be governed by separate terms.
          </p>

          <h2>Disclaimers</h2>
          <p>
            {PRODUCT_NAME} is provided "as is" and "as available" without warranties of any kind,
            whether express, implied, or statutory.
          </p>

          <h2>Limitation of Liability</h2>
          <p>
            To the fullest extent permitted by law, we are not liable for indirect, incidental,
            consequential, special, or punitive damages, or for loss of data, profits, or goodwill
            arising from your use of {PRODUCT_NAME}.
          </p>

          <h2>Termination</h2>
          <p>
            We may suspend or terminate access if you violate these Terms or if we discontinue the
            game. You may stop using {PRODUCT_NAME} at any time.
          </p>

          <h2>Changes to These Terms</h2>
          <p>
            We may update these Terms from time to time. The "Last updated" date reflects the latest
            revision. Continued use of {PRODUCT_NAME} after updates means you accept the revised Terms.
          </p>

          <h2>Contact</h2>
          <p>
            Questions about these Terms? Contact us at{" "}
            <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a>.
          </p>
        </article>
      </main>
    </div>
  );
}
