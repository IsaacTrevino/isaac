import { useEffect } from "react";

const PRODUCT_NAME = "The Way";
const PRODUCT_DESCRIPTION = "The Way Bible game";
const CONTACT_EMAIL = "isaactrevinochurch@gmail.com";
const LAST_UPDATED = "June 27, 2026";

export default function PrivacyPolicy() {
  useEffect(() => {
    const previousTitle = document.title;
    document.title = `Privacy Policy — ${PRODUCT_NAME}`;

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
            Privacy Policy
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
            This Privacy Policy explains how information is handled when you play or contact support
            for {PRODUCT_DESCRIPTION}. By using {PRODUCT_NAME}, you agree to this policy.
          </p>

          <h2>Information We Collect</h2>

          <h3>Information you provide directly</h3>
          <p>
            If you submit a support request, we collect the information you enter in the support
            form, such as your name, email address, subject, and message.
          </p>

          <h3>Information collected automatically</h3>
          <p>
            We and our hosting providers may collect basic technical data needed to run and secure
            the game website, such as IP address, browser type, device details, and request logs.
          </p>

          <h2>How We Use Information</h2>
          <p>We use the information we collect to:</p>
          <ul>
            <li>Operate, maintain, and improve {PRODUCT_NAME}</li>
            <li>Respond to support requests and communicate with you</li>
            <li>Monitor reliability, fix bugs, and prevent abuse</li>
            <li>Comply with legal obligations</li>
          </ul>
          <p>
            We do not sell your personal information.
          </p>

          <h2>How We Share Information</h2>
          <p>We may share information with:</p>
          <ul>
            <li>
              <strong>Service providers</strong> that help host the site, deliver support email, and
              provide infrastructure
            </li>
            <li>
              <strong>Legal and safety purposes</strong> when required by law or to protect users and
              the integrity of the game
            </li>
          </ul>

          <h2>Data Retention</h2>
          <p>
            We keep support messages and technical logs only as long as reasonably needed for support,
            security, and legal compliance.
          </p>

          <h2>Security</h2>
          <p>
            We use reasonable safeguards to protect collected information. No system is perfectly
            secure, so we cannot guarantee absolute security.
          </p>

          <h2>Your Choices</h2>
          <p>
            You can contact us to request access, correction, or deletion of personal information you
            submitted through support.
          </p>

          <h2>Children's Privacy</h2>
          <p>
            {PRODUCT_NAME} is not directed to children under 13, and we do not knowingly collect
            personal information from children under 13. If you believe a child has provided personal
            information, please contact us so we can delete it.
          </p>

          <h2>Changes to This Policy</h2>
          <p>
            We may update this Privacy Policy from time to time. The "Last updated" date reflects the
            latest revision.
          </p>

          <h2>Contact</h2>
          <p>
            Questions about this Privacy Policy? Contact us at{" "}
            <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a>.
          </p>
        </article>
      </main>
    </div>
  );
}
