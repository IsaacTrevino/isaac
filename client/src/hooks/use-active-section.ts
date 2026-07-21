import { useEffect, useState } from "react";

/**
 * Tracks which of the given section ids is currently the primary one in view.
 * Ids are given as selectors ("#about") to match the nav link hrefs.
 */
export function useActiveSection(selectors: string[]) {
  const [active, setActive] = useState<string | null>(null);

  useEffect(() => {
    const sections = selectors
      .map((s) => document.querySelector(s))
      .filter((el): el is Element => el !== null);
    if (sections.length === 0) return;

    const visible = new Map<Element, number>();

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) visible.set(entry.target, entry.intersectionRatio);
          else visible.delete(entry.target);
        }

        // Topmost section currently in view wins, so scrolling reads in order.
        const top = Array.from(visible.keys()).sort(
          (a, b) => a.getBoundingClientRect().top - b.getBoundingClientRect().top,
        )[0];
        setActive(top ? `#${top.id}` : null);
      },
      { threshold: [0, 0.25], rootMargin: "-20% 0px -55% 0px" },
    );

    sections.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, [selectors.join(",")]);

  return active;
}
