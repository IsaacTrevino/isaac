import FadeIn from "./FadeIn";
import SectionHeading from "./SectionHeading";
import { Mail, Linkedin, Github, BookOpen } from "lucide-react";

const socials = [
  {
    label: "LinkedIn",
    handle: "isaactrevino1",
    href: "https://linkedin.com/in/isaactrevino1/",
    icon: <Linkedin size={20} />,
  },
  {
    label: "GitHub",
    handle: "isaactrevino",
    href: "https://github.com/isaactrevino",
    icon: <Github size={20} />,
  },
  {
    label: "Medium",
    handle: "@isaac-trevino",
    href: "https://medium.com/@isaac-trevino",
    icon: <BookOpen size={20} />,
  },
  {
    label: "Email",
    handle: "isaac.trevino@outlook.com",
    href: "mailto:isaac.trevino@outlook.com",
    icon: <Mail size={20} />,
  },
];

export default function Connect() {
  return (
    <section id="connect" className="py-24 md:py-32 border-t border-border" aria-labelledby="connect-title" data-testid="connect-section">
      <div className="max-w-5xl mx-auto px-6">
        <SectionHeading eyebrow="Connect" title="Say hello." titleId="connect-title">
          No pitch decks. No cold outreach templates. Just a real person — find me wherever you like.
        </SectionHeading>

        <FadeIn>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
            {socials.map((s) => (
              <a
                key={s.label}
                href={s.href}
                target={s.href.startsWith("mailto") ? undefined : "_blank"}
                rel={s.href.startsWith("mailto") ? undefined : "noopener noreferrer"}
                className="group flex items-center gap-3 px-5 py-3.5 rounded-xl border border-card-border bg-card text-foreground no-underline transition-all duration-200 hover:-translate-y-0.5 hover:border-primary focus-visible:border-primary hover:shadow-[0_8px_24px_hsl(var(--foreground)/0.07)] min-w-0"
                data-testid={`social-link-${s.label.toLowerCase()}`}
              >
                <span className="shrink-0" style={{ color: "hsl(var(--primary))" }}>{s.icon}</span>
                <div className="min-w-0">
                  <div className="text-sm font-semibold">{s.label}</div>
                  <div className="text-xs truncate" style={{ color: "hsl(var(--muted-foreground))" }}>
                    {s.handle}
                  </div>
                </div>
              </a>
            ))}
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
