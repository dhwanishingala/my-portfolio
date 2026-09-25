import type { ReactNode } from "react";

type SectionProps = {
  id: string;
  title: string;
  eyebrow?: string;
  background?: "beige" | "powder" | "blush";
  compact?: boolean;
  children: ReactNode;
};

const bgMap = {
  beige: "bg-beige",
  powder: "bg-powder",
  blush: "bg-blush",
};

export function Section({
  id,
  title,
  eyebrow,
  background = "beige",
  compact = false,
  children,
}: SectionProps) {
  return (
    <section
      id={id}
      className={`scroll-mt-24 px-4 sm:px-6 lg:px-8 ${compact ? "py-10 sm:py-12" : "py-20"} ${bgMap[background]}`}
    >
      <div className="mx-auto max-w-5xl">
        {eyebrow ? (
          <p className="font-mono text-xs uppercase tracking-[0.2em] text-muted">
            {eyebrow}
          </p>
        ) : null}
        <h2
          className={`mt-2 font-semibold tracking-tight text-charcoal ${
            compact ? "text-2xl" : "text-3xl sm:text-4xl"
          }`}
        >
          {title}
        </h2>
        <div className={compact ? "mt-5" : "mt-10"}>{children}</div>
      </div>
    </section>
  );
}
