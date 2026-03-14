import FadeIn from "./FadeIn";

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
    title: "Formula 1 & Formula E",
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
        <p className="flex items-center gap-2 text-xs font-semibold tracking-widest uppercase mb-4" style={{ color: "hsl(var(--primary))" }}>
          <span className="block w-4 h-px" style={{ background: "hsl(var(--primary))" }} />
          Interests
        </p>
        <h2
          className="font-black tracking-tight mb-3"
          id="interests-title"
          style={{
            fontFamily: "var(--font-display)",
            fontSize: "clamp(2rem, 4vw, 3rem)",
            letterSpacing: "-0.03em",
          }}
        >
          What I care about.
        </h2>
        <p className="text-base max-w-xl mb-14 leading-relaxed" style={{ color: "hsl(var(--muted-foreground))" }}>
          The things that take up my time and headspace outside of deadlines.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {interests.map((item, i) => (
            <FadeIn key={item.title} delay={i * 60}>
              <div
                className="rounded-xl border p-6 flex flex-col gap-3 transition-all duration-200 hover:-translate-y-0.5"
                style={{ background: "hsl(var(--card))", borderColor: "hsl(var(--card-border))" }}
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
