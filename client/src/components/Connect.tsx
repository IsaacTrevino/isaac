import FadeIn from "./FadeIn";
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
    handle: "isaac.trevino1024@gmail.com",
    href: "mailto:isaac.trevino1024@gmail.com",
    icon: <Mail size={20} />,
  },
];

export default function Connect() {
  return (
    <section id="connect" className="py-24 md:py-32 border-t border-border" aria-labelledby="connect-title" data-testid="connect-section">
      <div className="max-w-5xl mx-auto px-6">
        <p className="flex items-center gap-2 text-xs font-semibold tracking-widest uppercase mb-4" style={{ color: "hsl(var(--primary))" }}>
          <span className="block w-4 h-px" style={{ background: "hsl(var(--primary))" }} />
          Connect
        </p>
        <h2
          className="font-black tracking-tight mb-3"
          id="connect-title"
          style={{
            fontFamily: "var(--font-display)",
            fontSize: "clamp(2rem, 4vw, 3rem)",
            letterSpacing: "-0.03em",
          }}
        >
          Say hello.
        </h2>
        <p className="text-base max-w-xl mb-12 leading-relaxed" style={{ color: "hsl(var(--muted-foreground))" }}>
          No pitch decks. No cold outreach templates. Just a real person — find me wherever you like.
        </p>

        <FadeIn>
          <div className="flex flex-wrap gap-3">
            {socials.map((s) => (
              <a
                key={s.label}
                href={s.href}
                target={s.href.startsWith("mailto") ? undefined : "_blank"}
                rel={s.href.startsWith("mailto") ? undefined : "noopener noreferrer"}
                className="flex items-center gap-3 px-5 py-3.5 rounded-xl border no-underline transition-all duration-200 hover:-translate-y-0.5 flex-1 min-w-40 max-w-56"
                style={{
                  background: "hsl(var(--card))",
                  borderColor: "hsl(var(--card-border))",
                  color: "hsl(var(--foreground))",
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLAnchorElement).style.borderColor = "hsl(var(--primary))";
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLAnchorElement).style.borderColor = "hsl(var(--card-border))";
                }}
                data-testid={`social-link-${s.label.toLowerCase()}`}
              >
                <span style={{ color: "hsl(var(--primary))" }}>{s.icon}</span>
                <div>
                  <div className="text-sm font-semibold">{s.label}</div>
                  <div className="text-xs" style={{ color: "hsl(var(--muted-foreground))" }}>
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
