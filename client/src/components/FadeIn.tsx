import { useIntersection } from "@/hooks/use-intersection";
import { cn } from "@/lib/utils";

type HtmlElementTag = "div" | "span" | "section" | "article" | "aside" | "header" | "footer" | "main" | "nav";

interface FadeInProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  as?: HtmlElementTag;
}

export default function FadeIn({ children, className, delay = 0, as: Tag = "div" }: FadeInProps) {
  const { ref, isVisible } = useIntersection();

  const combinedClassName = cn("fade-in", isVisible && "is-visible", className);
  const style = { transitionDelay: `${delay}ms` } as React.CSSProperties;

  const props = {
    ref,
    className: combinedClassName,
    style,
  } as React.ComponentPropsWithoutRef<HtmlElementTag>;

  return <Tag {...props}>{children}</Tag>;
}
