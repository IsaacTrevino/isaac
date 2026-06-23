import { useEffect } from "react";

const COMPANY_NAME = "Crestnode LLC";
const COMPANY_STATE = "Texas";
const CONTACT_EMAIL = "isaac.trevino1024@gmail.com";
const LAST_UPDATED = "June 22, 2026";

export default function Terms() {
  useEffect(() => {
    const previousTitle = document.title;
    document.title = `Terms of Service — ${COMPANY_NAME}`;

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
            These Terms of Service ("Terms") govern your access to and use of the applications,
            websites, and related services operated by {COMPANY_NAME}, a limited liability company
            organized under the laws of the State of {COMPANY_STATE}, United States (collectively,
            the "Services"). By using the Services, you agree to these Terms.
          </p>

          <h2>Using the Services</h2>
          <p>
            You may use the Services only if you can form a binding contract and only in compliance
            with these Terms and applicable laws. You are responsible for your account, your use of
            the Services, and all activity that occurs under your credentials.
          </p>

          <h2>Accounts and Security</h2>
          <p>
            If you create an account, you agree to provide accurate information and keep your login
            credentials secure. You must notify us promptly if you believe your account has been
            compromised.
          </p>

          <h2>Acceptable Use</h2>
          <p>You agree not to use the Services to:</p>
          <ul>
            <li>Violate any law, regulation, or third-party right</li>
            <li>Access, scrape, or interfere with systems without authorization</li>
            <li>Submit malicious code, abusive content, or deceptive instructions</li>
            <li>Attempt to reverse engineer, overload, disrupt, or compromise the Services</li>
            <li>Use the Services in a way that could create safety, security, or legal risk</li>
          </ul>

          <h2>User Content</h2>
          <p>
            You retain ownership of content you submit to the Services. You grant {COMPANY_NAME} the
            rights needed to host, process, transmit, display, and otherwise use that content solely
            to provide, maintain, secure, and improve the Services.
          </p>

          <h2>Third-Party Services</h2>
          <p>
            The Services may integrate with or rely on third-party services, websites, models,
            infrastructure, payment processors, or data providers. We are not responsible for
            third-party services, and your use of them may be subject to separate terms and policies.
          </p>

          <h2>Payments and Subscriptions</h2>
          <p>
            Paid features may require you to provide billing information through a third-party
            payment processor. Fees, billing periods, renewals, cancellations, and refunds will be
            described at checkout or in the applicable service interface.
          </p>

          <h2>Intellectual Property</h2>
          <p>
            The Services, including software, designs, logos, text, graphics, and other materials,
            are owned by {COMPANY_NAME} or its licensors and are protected by intellectual property
            laws. These Terms do not grant you ownership of the Services.
          </p>

          <h2>Disclaimers</h2>
          <p>
            The Services are provided "as is" and "as available" without warranties of any kind,
            whether express, implied, or statutory. We do not guarantee that the Services will be
            uninterrupted, secure, accurate, or error-free.
          </p>

          <h2>Limitation of Liability</h2>
          <p>
            To the fullest extent permitted by law, {COMPANY_NAME} will not be liable for indirect,
            incidental, special, consequential, exemplary, or punitive damages, or for lost profits,
            revenues, data, goodwill, or business opportunities arising out of or relating to your
            use of the Services.
          </p>

          <h2>Termination</h2>
          <p>
            We may suspend or terminate your access to the Services if you violate these Terms, create
            risk for the Services or others, or if we discontinue all or part of the Services. You may
            stop using the Services at any time.
          </p>

          <h2>Changes to These Terms</h2>
          <p>
            We may update these Terms from time to time. The "Last updated" date at the top reflects
            the most recent revision. Continued use of the Services after changes become effective
            constitutes acceptance of the updated Terms.
          </p>

          <h2>Governing Law</h2>
          <p>
            These Terms and any dispute arising out of or relating to them or the Services are
            governed by the laws of the State of {COMPANY_STATE} and applicable United States federal
            law, without regard to conflict-of-laws principles.
          </p>

          <h2>Contact</h2>
          <p>
            Questions about these Terms? Contact {COMPANY_NAME} at{" "}
            <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a>.
          </p>
        </article>
      </main>
    </div>
  );
}
