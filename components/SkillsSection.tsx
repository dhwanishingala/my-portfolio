"use client";

import {
  useEffect,
  useMemo,
  useRef,
  useState,
  type RefObject,
} from "react";
import { skillGroups } from "@/data/skills";
import { Section } from "./Section";

const skillPillClass =
  "inline-block rounded-full border border-blue-accent/40 bg-white/60 px-2.5 py-1 text-sm text-charcoal transition hover:border-accent hover:underline hover:decoration-accent hover:underline-offset-4";

function SkillPill({ skill }: { skill: string }) {
  return <span className={skillPillClass}>{skill}</span>;
}

function useInView(ref: RefObject<HTMLElement | null>) {
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const reduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;
    if (reduced) {
      setInView(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          observer.disconnect();
        }
      },
      { threshold: 0.12, rootMargin: "0px 0px -40px 0px" },
    );
    observer.observe(el);

    const rect = el.getBoundingClientRect();
    if (rect.top < window.innerHeight && rect.bottom > 0) {
      setInView(true);
      observer.disconnect();
    }

    return () => observer.disconnect();
  }, [ref]);

  return inView;
}

function useStaggerReveal(itemCount: number, active: boolean) {
  const [visibleCount, setVisibleCount] = useState(0);

  useEffect(() => {
    if (!active || itemCount === 0) {
      setVisibleCount(0);
      return;
    }

    const reduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;
    if (reduced) {
      setVisibleCount(itemCount);
      return;
    }

    let i = 0;
    setVisibleCount(0);
    const reveal = () => {
      setVisibleCount(i + 1);
      i += 1;
      if (i < itemCount) {
        window.setTimeout(reveal, 80);
      }
    };
    reveal();
  }, [active, itemCount]);

  return visibleCount;
}

function StaggeredPill({
  skill,
  index,
  visibleCount,
}: {
  skill: string;
  index: number;
  visibleCount: number;
}) {
  const visible = index < visibleCount;
  return (
    <li
      className="motion-safe:transition-all motion-safe:duration-300"
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0)" : "translateY(6px)",
      }}
    >
      <SkillPill skill={skill} />
    </li>
  );
}

function CategoryHeading({ children }: { children: string }) {
  return (
    <p className="mb-1.5 font-mono text-[10px] uppercase tracking-[0.1em] text-muted">
      {children}
    </p>
  );
}

function DesktopBento({ pillIndexBySkill }: { pillIndexBySkill: Map<string, number> }) {
  const [languages, ...rest] = skillGroups;
  const containerRef = useRef<HTMLDivElement>(null);
  const inView = useInView(containerRef);
  const totalPills = useMemo(
    () => skillGroups.reduce((n, g) => n + g.items.length, 0),
    [],
  );
  const visibleCount = useStaggerReveal(totalPills, inView);

  const pillIndex = (skill: string) => pillIndexBySkill.get(skill) ?? 0;

  return (
    <div ref={containerRef} className="hidden md:block">
      <div className="flex flex-wrap items-center gap-x-3 gap-y-2 rounded-lg border border-charcoal/[0.06] bg-beige px-3 py-2">
        <span className="shrink-0 font-mono text-[10px] uppercase tracking-[0.1em] text-muted">
          {languages.label}
        </span>
        <ul className="flex min-w-0 flex-1 flex-wrap gap-2">
          {languages.items.map((skill) => (
            <StaggeredPill
              key={skill}
              skill={skill}
              index={pillIndex(skill)}
              visibleCount={visibleCount}
            />
          ))}
        </ul>
      </div>
      <div className="mt-2 grid grid-cols-2 gap-2 lg:grid-cols-4">
        {rest.map((group) => (
          <div
            key={group.label}
            className="min-h-[96px] rounded-[10px] border border-charcoal/[0.06] bg-beige p-3"
          >
            <CategoryHeading>{group.label}</CategoryHeading>
            <ul className="flex flex-wrap gap-2">
              {group.items.map((skill) => (
                <StaggeredPill
                  key={skill}
                  skill={skill}
                  index={pillIndex(skill)}
                  visibleCount={visibleCount}
                />
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}

function MobileAccordionCategory({
  label,
  items,
  defaultOpen,
  sectionInView,
}: {
  label: string;
  items: readonly string[];
  defaultOpen?: boolean;
  sectionInView: boolean;
}) {
  const [open, setOpen] = useState(defaultOpen ?? false);
  const visibleCount = useStaggerReveal(
    items.length,
    open && sectionInView,
  );

  return (
    <div className="border-b border-charcoal/10 py-2">
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        className="flex w-full items-center justify-between gap-2 py-1 text-left text-charcoal"
        aria-expanded={open}
      >
        <span className="flex items-center gap-2">
          <span className="text-sm font-semibold">{label}</span>
          <span className="rounded bg-white px-1.5 py-0.5 font-mono text-[10px] text-muted">
            {items.length}
          </span>
        </span>
        <span className="text-xs text-muted" aria-hidden>
          {open ? "−" : "+"}
        </span>
      </button>
      {open ? (
        <ul className="flex flex-wrap gap-2 pb-2 pl-1">
          {items.map((skill, skillIndex) => (
            <StaggeredPill
              key={skill}
              skill={skill}
              index={skillIndex}
              visibleCount={visibleCount}
            />
          ))}
        </ul>
      ) : null}
    </div>
  );
}

function MobileAccordion() {
  const containerRef = useRef<HTMLDivElement>(null);
  const sectionInView = useInView(containerRef);

  return (
    <div ref={containerRef} className="md:hidden">
      {skillGroups.map((group, index) => (
        <MobileAccordionCategory
          key={group.label}
          label={group.label}
          items={group.items}
          defaultOpen={index === 0}
          sectionInView={sectionInView}
        />
      ))}
    </div>
  );
}

function buildPillIndexMap(): Map<string, number> {
  const map = new Map<string, number>();
  let index = 0;
  for (const group of skillGroups) {
    for (const skill of group.items) {
      map.set(skill, index);
      index += 1;
    }
  }
  return map;
}

export function SkillsSection() {
  const pillIndexBySkill = useMemo(() => buildPillIndexMap(), []);

  return (
    <Section id="skills" title="Skills" eyebrow="Toolbox" background="powder">
      <DesktopBento pillIndexBySkill={pillIndexBySkill} />
      <MobileAccordion />
    </Section>
  );
}
