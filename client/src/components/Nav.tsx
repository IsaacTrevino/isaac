import { useEffect, useState } from "react";
import { Menu, Moon, Sun, X } from "lucide-react";
import { useTheme } from "@/hooks/use-theme";
import { useActiveSection } from "@/hooks/use-active-section";
import { scrollToSelector, scrollToTop } from "@/lib/scroll";

const links = [
  { label: "About", href: "#about" },
  { label: "Now", href: "#now" },
  { label: "Interests", href: "#interests" },
  { label: "Connect", href: "#connect" },
];

const hrefs = links.map((l) => l.href);

export default function Nav() {
  const { theme, toggleTheme } = useTheme();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const active = useActiveSection(hrefs);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleNavClick = (href: string) => {
    setMenuOpen(false);
    scrollToSelector(href);
  };

  return (
    <nav
      data-testid="nav"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-200 ${scrolled
          ? "border-b border-border bg-background/90 backdrop-blur-xl"
          : "border-b border-transparent bg-background/60 backdrop-blur-sm"
        }`}
    >
      <div className="max-w-5xl mx-auto px-6 py-4 flex items-center justify-between gap-8">
        {/* Logo */}
        <a
          href="#"
          onClick={(e) => {
            e.preventDefault();
            scrollToTop();
          }}
          className="flex items-center gap-3 no-underline rounded-md"
          aria-label="Isaac Trevino — home"
          data-testid="nav-logo"
        >
          <svg width="34" height="34" viewBox="0 0 34 34" fill="none" aria-hidden="true">
            <rect width="34" height="34" rx="7" fill="hsl(var(--primary))" fillOpacity="0.15" />
            <rect width="34" height="34" rx="7" stroke="hsl(var(--primary))" strokeWidth="1" fill="none" />
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
          <span
            className="font-black text-sm tracking-tight text-foreground"
            style={{ fontFamily: "var(--font-display)" }}
          >
            Isaac Trevino
          </span>
        </a>

        <div className="flex items-center gap-2 md:gap-6">
          <ul className="hidden md:flex items-center gap-8 list-none m-0 p-0" role="list">
            {links.map((l) => (
              <li key={l.href}>
                <button
                  onClick={() => handleNavClick(l.href)}
                  aria-current={active === l.href ? "true" : undefined}
                  className={`relative text-sm font-medium transition-colors bg-transparent border-none cursor-pointer p-0 after:absolute after:-bottom-1.5 after:left-0 after:h-px after:bg-primary after:transition-all after:duration-300 ${active === l.href
                      ? "text-foreground after:w-full"
                      : "text-muted-foreground hover:text-foreground after:w-0"
                    }`}
                  data-testid={`nav-link-${l.label.toLowerCase()}`}
                >
                  {l.label}
                </button>
              </li>
            ))}
          </ul>

          <button
            onClick={toggleTheme}
            className="p-2 text-muted-foreground hover:text-foreground transition-colors bg-transparent border-none cursor-pointer"
            aria-label={theme === "dark" ? "Switch to light mode" : "Switch to dark mode"}
            data-testid="nav-theme-toggle"
          >
            {theme === "dark" ? <Sun size={20} /> : <Moon size={20} />}
          </button>

          <button
            className="md:hidden p-2 text-foreground bg-transparent border-none cursor-pointer"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle navigation"
            aria-expanded={menuOpen}
            data-testid="nav-menu-btn"
          >
            {menuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden border-b border-border bg-background/95 backdrop-blur-xl px-6 py-4 flex flex-col gap-4">
          {links.map((l) => (
            <button
              key={l.href}
              onClick={() => handleNavClick(l.href)}
              aria-current={active === l.href ? "true" : undefined}
              className={`text-left text-sm font-medium transition-colors bg-transparent border-none cursor-pointer p-0 ${active === l.href ? "text-primary" : "text-muted-foreground hover:text-foreground"
                }`}
              data-testid={`nav-mobile-link-${l.label.toLowerCase()}`}
            >
              {l.label}
            </button>
          ))}
        </div>
      )}
    </nav>
  );
}
