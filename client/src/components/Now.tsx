import { Play, type LucideIcon } from "lucide-react";
import FadeIn from "./FadeIn";
import SectionHeading from "./SectionHeading";
import { AppStoreIcon, GooglePlayIcon } from "./StoreIcons";

interface NowItem {
  title: string;
  body: string;
  tag: string;
  tagAccent: boolean;
  /** Image path, or a Lucide component for items without artwork. */
  icon: string | LucideIcon;
  iconClassName?: string;
  href?: string;
  trailerHref?: string;
  appStoreHref?: string;
  googlePlayHref?: string;
}

const items: NowItem[] = [
  {
    title: "Uragents.ai — AI agents that use the browser",
    body: "Building a SaaS where AI agents observe, think, and act in real browsers. Plan paths, chat-driven workflows, and scheduled runs. Most of my dev time goes here — every solved problem seems to reveal three more.",
    tag: "Live",
    tagAccent: true,
    href: "https://uragents.ai",
    icon: "/images/uragents-icon.svg",
    iconClassName: "w-[70%] h-[70%] object-contain",
  },
  {
    title: "The Way — Faith-Focused 2D Adventure",
    body: "A reflective Christian game about repentance, growth, and walking in truth through story-driven exploration.",
    tag: "Live",
    tagAccent: true,
    href: "/the-way/",
    icon: "/images/the-way-icon.png",
    trailerHref: "https://youtube.com/shorts/1oTkomN2aL8?feature=share",
    appStoreHref: "https://apps.apple.com/us/app/the-way-bible-game/id6785116447",
    googlePlayHref: "https://play.google.com/store/apps/details?id=app.theway.game",
  },
  {
    title: "Embrace Church — Website & Mobile App",
    body: "Built a connected church experience for sermons, events, groups, announcements, and giving — available on iOS and Android alongside a redesigned website.",
    tag: "Live",
    tagAccent: true,
    href: "https://www.embrace-emc.church",
    icon: "/images/embrace-church-icon.png",
    appStoreHref: "https://apps.apple.com/us/app/embrace-church-emc/id6789007980",
    googlePlayHref: "https://play.google.com/store/apps/details?id=church.embrace.mobile",
  },
  {
    title: "Signals — Early days and evolving",
    body: "Building something that reacts to live data and iterates over time. Still in the lab, seeing what holds up and what doesn't.",
    tag: "Building",
    tagAccent: true,
    icon: "/images/signals-icon.svg",
  },
  {
    title: "Project Pie",
    body: "A new product experiment still taking shape behind the scenes. Keeping the details under wraps while I work through the first version.",
    tag: "Building",
    tagAccent: true,
    icon: "/images/project-pie-icon.svg",
  },
];

export default function Now() {
  return (
    <section id="now" className="py-24 md:py-32 border-t border-border" aria-labelledby="now-title" data-testid="now-section">
      <div className="max-w-5xl mx-auto px-6">
        <SectionHeading eyebrow="Now" title="What I'm up to." titleId="now-title">
          A running snapshot of what's occupying my time, attention, and curiosity right now.
        </SectionHeading>

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
                {/* Icon + tag share a row on mobile; separate grid columns from sm up */}
                <div className="flex items-center gap-3 sm:contents">
                  {/* Column 1: Icon */}
                  <div
                    className="w-10 h-10 rounded-lg flex items-center justify-center border shrink-0 overflow-hidden"
                    style={{
                      background: "hsl(var(--muted))",
                      borderColor: "hsl(var(--border))",
                    }}
                    aria-hidden
                  >
                    {typeof item.icon === "string" ? (
                      <img
                        src={item.icon}
                        alt=""
                        className={"iconClassName" in item && item.iconClassName
                          ? item.iconClassName
                          : "w-full h-full object-cover"}
                      />
                    ) : (
                      <item.icon className="w-5 h-5" style={{ color: "hsl(var(--muted-foreground))" }} />
                    )}
                  </div>
                  {/* Column 2: Tag */}
                  <div className="shrink-0 sm:w-20 sm:pt-0.5">
                    <span
                      className="inline-block text-xs font-semibold px-3 py-1 rounded-full border"
                      style={
                        item.tag === "Live"
                          ? {
                            color: "hsl(var(--live))",
                            background: "hsl(var(--live-bg))",
                            borderColor: "hsl(var(--live-border))",
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
                          {...(item.href.startsWith("http")
                            ? { target: "_blank", rel: "noopener noreferrer" }
                            : {})}
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
                  {("trailerHref" in item && item.trailerHref) ||
                    ("appStoreHref" in item && item.appStoreHref) ||
                    ("googlePlayHref" in item) ? (
                    <div className="flex items-center gap-2 mt-1 flex-wrap">
                      {"appStoreHref" in item && item.appStoreHref ? (
                        <a
                          href={item.appStoreHref}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center justify-center w-8 h-8 rounded-lg border transition-colors hover:border-primary"
                          style={{
                            borderColor: "hsl(var(--border))",
                            color: "hsl(var(--foreground))",
                          }}
                          aria-label="Download on the App Store"
                          data-testid="app-store-link"
                        >
                          <AppStoreIcon />
                        </a>
                      ) : null}
                      {"googlePlayHref" in item ? (
                        item.googlePlayHref ? (
                          <a
                            href={item.googlePlayHref}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center justify-center w-8 h-8 rounded-lg border transition-colors hover:border-primary"
                            style={{
                              borderColor: "hsl(var(--border))",
                              color: "hsl(var(--foreground))",
                            }}
                            aria-label="Get it on Google Play"
                            data-testid="google-play-link"
                          >
                            <GooglePlayIcon />
                          </a>
                        ) : (
                          <span
                            className="inline-flex items-center justify-center w-8 h-8 rounded-lg border opacity-40 cursor-not-allowed"
                            style={{
                              borderColor: "hsl(var(--border))",
                              color: "hsl(var(--muted-foreground))",
                            }}
                            aria-label="Google Play — coming soon"
                            title="Google Play — coming soon"
                            data-testid="google-play-link"
                          >
                            <GooglePlayIcon />
                          </span>
                        )
                      ) : null}
                      {"trailerHref" in item && item.trailerHref ? (
                        <a
                          href={item.trailerHref}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1.5 text-sm font-medium w-fit hover:underline"
                          style={{ color: "hsl(var(--primary))" }}
                          data-testid="watch-trailer"
                        >
                          <Play className="w-3.5 h-3.5" />
                          Watch Trailer
                        </a>
                      ) : null}
                    </div>
                  ) : null}
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
