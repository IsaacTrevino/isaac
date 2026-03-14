import FadeIn from "./FadeIn";

export default function About() {
  return (
    <section id="about" className="py-24 md:py-32" aria-labelledby="about-title" data-testid="about-section">
      <div className="max-w-5xl mx-auto px-6">
        <p className="flex items-center gap-2 text-xs font-semibold tracking-widest uppercase mb-4" style={{ color: "hsl(var(--primary))" }}>
          <span className="block w-4 h-px" style={{ background: "hsl(var(--primary))" }} />
          About
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20 items-start">
          {/* Left: heading */}
          <div>
            <h2
              className="font-black leading-tight tracking-tight"
              id="about-title"
              style={{
                fontFamily: "var(--font-display)",
                fontSize: "clamp(2rem, 4vw, 3rem)",
                letterSpacing: "-0.03em",
              }}
            >
              Just a guy from<br />
              <span style={{ color: "hsl(var(--primary))" }}>Houston, Texas.</span>
            </h2>
          </div>

          {/* Right: personal writing */}
          <FadeIn>
            <div className="flex flex-col gap-5">
              <p className="text-base leading-relaxed" style={{ color: "hsl(var(--muted-foreground))" }}>
                I'm Isaac — I build things with computers, spend too much time thinking about how things work, and try to document the journey as honestly as I can.
              </p>
              <p className="text-base leading-relaxed" style={{ color: "hsl(var(--muted-foreground))" }}>
                By day I'm deep in code — cloud infrastructure, Full-Stack Development, the occasional rabbit hole that turns into a weekend project. By night it's usually disc golf, 3D printing something questionable, or watching Formula 1 reruns.
              </p>
              <p className="text-base leading-relaxed" style={{ color: "hsl(var(--muted-foreground))" }}>
                This site isn't a portfolio. It's more like a logbook — a record of what I'm building, what I'm learning, and what's on my mind.
              </p>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
