import type { ReactNode } from "react";

type SectionProps = {
  id: string;
  title: string;
  eyebrow?: string;
  background?: "beige" | "powder" | "blush";
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
  children,
}: SectionProps) {
  return (
    <section
      id={id}
      className={`scroll-mt-24 px-4 py-20 sm:px-6 lg:px-8 ${bgMap[background]}`}
    >
      <div className="mx-auto max-w-5xl">
        {eyebrow ? (
          <p className="font-mono text-xs uppercase tracking-[0.2em] text-muted">
            {eyebrow}
          </p>
        ) : null}
        <h2 className="mt-2 text-3xl font-semibold tracking-tight text-charcoal sm:text-4xl">
          {title}
        </h2>
        <div className="mt-10">{children}</div>
      </div>
    </section>
  );
}
