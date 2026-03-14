
export default function Footer() {
  return (
    <footer className="border-t border-border py-8" aria-label="Site footer" data-testid="footer">
      <div className="max-w-5xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-4 flex-wrap">
        <div className="flex items-center gap-3">
          <svg width="22" height="22" viewBox="0 0 34 34" fill="none" aria-hidden="true">
            <rect width="34" height="34" rx="7" fill="hsl(var(--primary))" fillOpacity="0.1" />
            <text
              x="17" y="23"
              fontFamily="Cabinet Grotesk, sans-serif"
              fontWeight="900"
              fontSize="15"
              fill="hsl(var(--primary))"
              textAnchor="middle"
              letterSpacing="-1"
            >IT</text>
          </svg>
          <span className="text-sm font-semibold" style={{ color: "hsl(var(--muted-foreground))" }}>
            Isaac Trevino
          </span>
          <span className="text-xs" style={{ color: "hsl(var(--muted-foreground))" }}>
            © 2026
          </span>
        </div>
        <a
          href="https://www.perplexity.ai/computer"
          target="_blank"
          rel="noopener noreferrer"
          className="text-xs no-underline transition-colors hover:text-foreground"
          style={{ color: "hsl(var(--muted-foreground)/0.6)" }}
          data-testid="footer-attribution"
        >
          Created with Perplexity Computer
        </a>
      </div>
    </footer>
  );
}
