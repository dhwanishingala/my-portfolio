"use client";

import Link from "next/link";
import { site } from "@/data/site";
import { Section } from "./Section";
import { ScrollReveal } from "./ScrollReveal";

export function AboutSection() {
  return (
    <Section id="about" title="About me" eyebrow="Story" background="blush">
      <ScrollReveal>
        <div className="mx-auto max-w-2xl space-y-5 text-base leading-relaxed text-charcoal/90">
          {site.about.paragraphs.map((para, i) => (
            <p key={i}>
              {para.segments.map((seg, j) =>
                seg.accent ? (
                  <span key={j} className="font-medium text-accent">
                    {seg.text}
                  </span>
                ) : (
                  <span key={j}>{seg.text}</span>
                ),
              )}
            </p>
          ))}
          <Link
            href="#projects"
            className="mt-4 inline-flex items-center gap-2 rounded-full border-2 border-accent px-5 py-2.5 text-sm font-semibold text-accent transition hover:bg-accent hover:text-white"
          >
            Side gigs
          </Link>
        </div>
      </ScrollReveal>
    </Section>
  );
}
