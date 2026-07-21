import FadeIn from "./FadeIn";
import SectionHeading from "./SectionHeading";

const interests = [
  {
    emoji: "💿",
    title: "Disc Golf",
    body: "My main excuse to be outside. There's something satisfying about a sport where you're only competing against the course.",
  },
  {
    emoji: "🖨️",
    title: "3D Printing",
    body: "Turned a corner from \"print random stuff\" to \"print useful stuff.\" Mostly functional parts, the occasional weird idea.",
  },
  {
    emoji: "🏎️",
    title: "Formula 1 & E",
    body: "The intersection of engineering and competition. I follow both series — F1 for the drama, Formula E for what it says about where things are going.",
  },
  {
    emoji: "🖥️",
    title: "Home Office",
    body: "Perpetually tweaking the setup. Cable management is a personal project that is never truly finished.",
  },
  {
    emoji: "🤖",
    title: "AI & What's Next",
    body: "Less hype, more curiosity. I care about the practical side — what can you actually build with AI?",
  },
  {
    emoji: "☁️",
    title: "Cloud Infrastructure",
    body: "There's real joy in designing systems that scale cleanly. Also real frustration. Often at the same time.",
  },
];

export default function Interests() {
  return (
    <section id="interests" className="py-24 md:py-32 border-t border-border" aria-labelledby="interests-title" data-testid="interests-section">
      <div className="max-w-5xl mx-auto px-6">
        <SectionHeading eyebrow="Interests" title="What I care about." titleId="interests-title">
          The things that take up my time and headspace outside of deadlines.
        </SectionHeading>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {interests.map((item, i) => (
            <FadeIn key={item.title} delay={i * 60}>
              <div
                className="h-full rounded-xl border border-card-border bg-card p-6 flex flex-col gap-3 transition-all duration-200 hover:-translate-y-0.5 hover:border-primary/50 hover:shadow-[0_8px_24px_hsl(var(--foreground)/0.07)]"
                data-testid={`interest-card-${i}`}
              >
                <span className="text-3xl leading-none" role="img" aria-label={item.title}>{item.emoji}</span>
                <h3
                  className="font-black text-base tracking-tight"
                  style={{ fontFamily: "var(--font-display)", letterSpacing: "-0.02em" }}
                >
                  {item.title}
                </h3>
                <p className="text-sm leading-relaxed" style={{ color: "hsl(var(--muted-foreground))" }}>
                  {item.body}
                </p>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
