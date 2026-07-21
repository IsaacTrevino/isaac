const prefersReducedMotion = () =>
  window.matchMedia("(prefers-reduced-motion: reduce)").matches;

const behavior = (): ScrollBehavior => (prefersReducedMotion() ? "auto" : "smooth");

export function scrollToSelector(selector: string) {
  document.querySelector(selector)?.scrollIntoView({ behavior: behavior() });
}

export function scrollToTop() {
  window.scrollTo({ top: 0, behavior: behavior() });
}
