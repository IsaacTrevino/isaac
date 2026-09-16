import FadeIn from "./FadeIn";
import SectionHeading from "./SectionHeading";
import { Linkedin, Github, BookOpen } from "lucide-react";

const XIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.74l7.727-8.836L1.254 2.25H8.08l4.253 5.622L18.244 2.25zm-1.161 17.52h1.833L7.084 4.126H5.117L17.083 19.77z" />
  </svg>
);

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
    label: "X",
    handle: "@IsaacTrevi91202",
    href: "https://x.com/IsaacTrevi91202",
    icon: <XIcon />,
  },
  {
    label: "Medium",
    handle: "@isaac-trevino",
    href: "https://medium.com/@isaac-trevino",
    icon: <BookOpen size={20} />,
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
                target="_blank"
                rel="noopener noreferrer"
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
