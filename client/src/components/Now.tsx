import { Bot, Box, CircleDot, Radio } from "lucide-react";
import FadeIn from "./FadeIn";

const items = [
  {
    title: "Uragents.ai — AI agents that use the browser",
    body: "Building a SaaS where AI agents observe, think, and act in real browsers. Plan paths, chat-driven workflows, and scheduled runs. Most of my dev time goes here — every solved problem seems to reveal three more.",
    tag: "Live",
    tagAccent: true,
    href: "https://uragents.ai",
    icon: "/logo/uragents-icon.svg",
  },
  {
    title: "Signals.ai — Early days and evolving",
    body: "Building something that reacts to live data and iterates over time. Still in the lab, seeing what holds up and what doesn't.",
    tag: "Building",
    tagAccent: true,
    href: "https://signals-ai.click",
    icon: Radio,
  },
  {
    title: "Getting reps in with AI agents",
    body: "Fascinated by what becomes possible when you give LLMs real tools to use. Experimenting with agentic workflows and trying to build things that are genuinely useful rather than just impressive demos.",
    tag: "Exploring",
    tagAccent: false,
    icon: Bot,
  },
  {
    title: "3D printing random stuff",
    body: "The printer is almost always running something. Right now it's mostly functional parts for the home office — cable management clips, monitor mounts, that kind of thing.",
    tag: "Tinkering",
    tagAccent: false,
    icon: Box,
  },
];

export default function Now() {
  return (
    <section id="now" className="py-24 md:py-32 border-t border-border" aria-labelledby="now-title" data-testid="now-section">
      <div className="max-w-5xl mx-auto px-6">
        <p className="flex items-center gap-2 text-xs font-semibold tracking-widest uppercase mb-4" style={{ color: "hsl(var(--primary))" }}>
          <span className="block w-4 h-px" style={{ background: "hsl(var(--primary))" }} />
          Now
        </p>
        <h2
          className="font-black tracking-tight mb-3"
          id="now-title"
          style={{
            fontFamily: "var(--font-display)",
            fontSize: "clamp(2rem, 4vw, 3rem)",
            letterSpacing: "-0.03em",
          }}
        >
          What I'm up to.
        </h2>
        <p className="text-base max-w-xl mb-14 leading-relaxed" style={{ color: "hsl(var(--muted-foreground))" }}>
          A running snapshot of what's occupying my time, attention, and curiosity right now.
        </p>

        <div className="flex flex-col gap-px border border-border rounded-2xl overflow-hidden">
          {items.map((item, i) => (
            <FadeIn key={item.title} delay={i * 50}>
              <div
                className="group grid grid-cols-1 sm:grid-cols-[auto_auto_1fr] items-start gap-4 sm:gap-6 p-6 border-b last:border-b-0 transition-colors"
                style={{
                  borderColor: "hsl(var(--border))",
                  background: "hsl(var(--card))",
                }}
                data-testid={`now-item-${i}`}
              >
                {/* Column 1: Icon */}
                <div
                  className="w-10 h-10 rounded-lg flex items-center justify-center border shrink-0"
                  style={{
                    background: "hsl(var(--muted))",
                    borderColor: "hsl(var(--border))",
                  }}
                  aria-hidden
                >
                  {typeof item.icon === "string" ? (
                    <img src={item.icon} alt="" className="w-6 h-6 object-contain" />
                  ) : (
                    <item.icon className="w-5 h-5" style={{ color: "hsl(var(--muted-foreground))" }} />
                  )}
                </div>
                {/* Column 2: Tag */}
                <div className="w-20 shrink-0 pt-0.5">
                  <span
                    className="inline-block text-xs font-semibold px-3 py-1 rounded-full border"
                    style={
                      item.tag === "Live"
                        ? {
                          color: "hsl(142 55% 35%)",
                          background: "hsl(142 45% 93%)",
                          borderColor: "hsl(142 40% 75%)",
                        }
                        : item.tagAccent
                          ? {
                            color: "hsl(var(--primary))",
                            background: "hsl(var(--primary)/0.1)",
                            borderColor: "hsl(var(--primary)/0.3)",
                          }
                          : {
                            color: "hsl(var(--muted-foreground))",
                            background: "hsl(var(--muted))",
                            borderColor: "hsl(var(--border))",
                          }
                    }
                  >
                    {item.tag}
                  </span>
                </div>
                {/* Column 3: Title + body */}
                <div className="flex flex-col gap-2 min-w-0">
                  <div className="flex items-center gap-2">
                    <h3
                      className="font-black text-base tracking-tight"
                      style={{ fontFamily: "var(--font-display)", letterSpacing: "-0.01em" }}
                    >
                      {item.href ? (
                        <a
                          href={item.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="no-underline hover:underline"
                          style={{ color: "hsl(var(--foreground))" }}
                        >
                          {item.title} ↗
                        </a>
                      ) : (
                        item.title
                      )}
                    </h3>
                  </div>
                  <p className="text-sm leading-relaxed" style={{ color: "hsl(var(--muted-foreground))" }}>
                    {item.body}
                  </p>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
