interface SectionHeadingProps {
  /** Small uppercase label above the heading. */
  eyebrow: string;
  /** Rendered as the section's <h2>; wired to the section via `titleId`. */
  title: React.ReactNode;
  titleId: string;
  /** Intro copy below the heading. */
  children?: React.ReactNode;
}

export default function SectionHeading({ eyebrow, title, titleId, children }: SectionHeadingProps) {
  return (
    <>
      <p className="flex items-center gap-2 text-xs font-semibold tracking-widest uppercase mb-4 text-primary">
        <span className="block w-4 h-px bg-primary" />
        {eyebrow}
      </p>
      <h2
        className="font-black tracking-tight mb-3"
        id={titleId}
        style={{
          fontFamily: "var(--font-display)",
          fontSize: "clamp(2rem, 4vw, 3rem)",
          letterSpacing: "-0.03em",
        }}
      >
        {title}
      </h2>
      {children ? (
        <p className="text-base max-w-xl mb-14 leading-relaxed text-muted-foreground">{children}</p>
      ) : null}
    </>
  );
}
