const heroBg = "/hero-bg.png";

export default function Hero() {
  const scrollTo = (id: string) => {
    document.querySelector(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      className="relative min-h-screen flex items-center overflow-hidden"
      aria-label="Introduction"
      data-testid="hero-section"
    >
      {/* Background image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `url(${heroBg})`,
          backgroundPosition: "center 40%",
          opacity: 0.3,
        }}
        aria-hidden="true"
      />
      {/* Overlay */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(180deg, hsl(var(--background)/0.2) 0%, hsl(var(--background)/0.5) 50%, hsl(var(--background)) 100%)",
        }}
        aria-hidden="true"
      />

      {/* Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-6 py-32 pt-40">
        <p
          className="flex items-center gap-2 text-xs font-semibold tracking-widest uppercase mb-6"
          style={{ color: "hsl(var(--primary))" }}
          data-testid="hero-eyebrow"
        >
          <span className="block w-5 h-px" style={{ background: "hsl(var(--primary))" }} />
          Engineer & Founder
        </p>

        <h1
          className="font-black leading-none tracking-tight mb-6"
          style={{
            fontFamily: "var(--font-display)",
            fontSize: "clamp(3rem, 10vw, 8rem)",
            letterSpacing: "-0.04em",
            lineHeight: 0.95,
          }}
          data-testid="hero-name"
        >
          Isaac<br />
          <span style={{ color: "hsl(var(--primary))" }}>Trevino</span>
        </h1>

        <p
          className="text-lg font-light mb-10 max-w-xl leading-relaxed"
          style={{ color: "hsl(var(--muted-foreground))", fontWeight: 300 }}
          data-testid="hero-tagline"
        >
          Documenting the journey — building things, figuring things out, and writing it all down along the way.
        </p>

        <div className="flex flex-wrap gap-4 items-center">
          <button
            onClick={() => scrollTo("#now")}
            className="inline-flex items-center gap-2 text-sm font-semibold px-6 py-3 rounded-full transition-all hover:-translate-y-0.5 active:translate-y-0"
            style={{
              background: "hsl(var(--primary))",
              color: "hsl(var(--primary-foreground))",
              boxShadow: "0 4px 16px hsl(var(--primary)/0.3)",
            }}
            data-testid="hero-btn-now"
          >
            What I'm Up To
          </button>

          <button
            onClick={() => scrollTo("#connect")}
            className="inline-flex items-center gap-2 text-sm font-semibold px-6 py-3 rounded-full border transition-all hover:-translate-y-0.5 active:translate-y-0"
            style={{ borderColor: "hsl(var(--border))", color: "hsl(var(--foreground))" }}
            data-testid="hero-btn-connect"
          >
            Say Hello
          </button>
        </div>
      </div>

      {/* Scroll hint */}
      <div
        className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2 text-xs tracking-widest uppercase"
        style={{
          color: "hsl(var(--muted-foreground)/0.5)",
          animation: "bounce 2s ease-in-out infinite",
        }}
        aria-hidden="true"
      >
        <svg width="14" height="18" viewBox="0 0 14 18" fill="none" stroke="currentColor" strokeWidth="1.5">
          <rect x="4" y="2" width="6" height="9" rx="3" />
          <circle cx="7" cy="5" r="1" fill="currentColor" stroke="none" />
          <line x1="7" y1="13" x2="7" y2="17" />
          <polyline points="4,15 7,18 10,15" />
        </svg>
        Scroll
      </div>

      <style>{`
        @keyframes bounce {
          0%, 100% { transform: translateX(-50%) translateY(0); }
          50% { transform: translateX(-50%) translateY(5px); }
        }
      `}</style>
    </section>
  );
}
