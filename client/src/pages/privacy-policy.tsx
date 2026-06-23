import { useEffect } from "react";

const COMPANY_NAME = "Crestnode LLC";
const COMPANY_STATE = "Texas";
const CONTACT_EMAIL = "isaac.trevino1024@gmail.com";
const LAST_UPDATED = "June 22, 2026";

export default function PrivacyPolicy() {
  useEffect(() => {
    const previousTitle = document.title;
    document.title = `Privacy Policy — ${COMPANY_NAME}`;

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
            {COMPANY_NAME} is a limited liability company organized under the laws of the State of{" "}
            {COMPANY_STATE}, United States. This Privacy Policy describes how {COMPANY_NAME} ("we",
            "us", or "our") collects, uses, and shares information when you use the applications,
            websites, and related services operated by {COMPANY_NAME} (collectively, the "Services").
          </p>

          <h2>Information We Collect</h2>

          <h3>Information you provide</h3>
          <p>
            When you create an account, subscribe, or contact us, we may collect information such as
            your name, email address, billing details (processed by third-party payment providers),
            and any content you submit through the Services — including prompts, workflows, and
            configuration data.
          </p>

          <h3>Information collected automatically</h3>
          <p>
            When you use the Services, we may automatically collect device and usage information,
            such as your IP address, browser type, operating system, pages or features accessed,
            timestamps, and diagnostic logs. For browser-automation features, the Services may
            process URLs, page content, and interaction data necessary to perform the tasks you
            request.
          </p>

          <h3>Information from third parties</h3>
          <p>
            We may receive information from authentication providers, payment processors, analytics
            services, and AI or infrastructure providers that help operate the Services.
          </p>

          <h2>How We Use Information</h2>
          <p>We use the information we collect to:</p>
          <ul>
            <li>Provide, operate, and improve the Services</li>
            <li>Process transactions and manage subscriptions</li>
            <li>Authenticate users and maintain account security</li>
            <li>Respond to support requests and communicate with you</li>
            <li>Monitor performance, debug issues, and prevent abuse</li>
            <li>Comply with legal obligations</li>
          </ul>
          <p>
            We do not sell your personal information. We may use aggregated or de-identified data for
            analytics and product improvement.
          </p>

          <h2>How We Share Information</h2>
          <p>We may share information with:</p>
          <ul>
            <li>
              <strong>Service providers</strong> — such as hosting, payment, analytics, email, and AI
              model providers that process data on our behalf
            </li>
            <li>
              <strong>Legal and safety purposes</strong> — when required by law or to protect rights,
              safety, and the integrity of the Services
            </li>
            <li>
              <strong>Business transfers</strong> — in connection with a merger, acquisition, or sale
              of assets, with notice where required
            </li>
          </ul>

          <h2>Data Retention</h2>
          <p>
            We retain personal information for as long as needed to provide the Services, fulfill the
            purposes described in this policy, comply with legal obligations, resolve disputes, and
            enforce agreements. Retention periods may vary depending on the type of data and how it is
            used.
          </p>

          <h2>Security</h2>
          <p>
            We take reasonable measures to protect your information, including encryption in transit
            and access controls. No method of transmission or storage is completely secure, and we
            cannot guarantee absolute security.
          </p>

          <h2>Your Choices and Rights</h2>
          <p>
            Depending on where you live, you may have rights to access, correct, delete, or export
            your personal information, or to object to or restrict certain processing. You can update
            account details in the Services where available, or contact us using the information
            below.
          </p>
          <p>
            You may opt out of non-essential marketing emails by using the unsubscribe link in those
            messages. Transactional and service-related communications may still be sent.
          </p>

          <h2>Children's Privacy</h2>
          <p>
            The Services are not directed to children under 13, and we do not knowingly collect
            personal information from children under 13. If you believe a child has provided personal
            information, please contact us so we can delete it.
          </p>

          <h2>International Users</h2>
          <p>
            If you access the Services from outside the United States, your information may be
            processed in the United States or other countries where we or our service providers
            operate. Those locations may have different data protection laws than your jurisdiction.
          </p>

          <h2>Governing Law</h2>
          <p>
            This Privacy Policy and any dispute arising out of or relating to it or the Services are
            governed by the laws of the State of {COMPANY_STATE} and applicable United States federal
            law, without regard to conflict-of-laws principles.
          </p>

          <h2>Changes to This Policy</h2>
          <p>
            We may update this Privacy Policy from time to time. The "Last updated" date at the top
            reflects the most recent revision. Continued use of the Services after changes become
            effective constitutes acceptance of the updated policy.
          </p>

          <h2>Contact</h2>
          <p>
            Questions about this Privacy Policy or our data practices? Contact {COMPANY_NAME} at{" "}
            <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a>.
          </p>
        </article>
      </main>
    </div>
  );
}
