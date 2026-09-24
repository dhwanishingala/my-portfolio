"use client";

import Image from "next/image";
import { site } from "@/data/site";
import { Section } from "./Section";
import { ScrollReveal } from "./ScrollReveal";
import { useResumeModal } from "./ResumeModalProvider";

export function AboutSection() {
  const { openResume } = useResumeModal();

  return (
    <Section id="about" title="About me" eyebrow="Story" background="blush">
      <ScrollReveal>
        <div className="grid gap-10 lg:grid-cols-[200px_1fr] lg:gap-12">
          <div className="relative mx-auto aspect-square w-full max-w-[200px] overflow-hidden rounded-xl border border-charcoal/10 lg:mx-0">
            <Image
              src={site.about.photo}
              alt=""
              fill
              className="object-cover"
              sizes="200px"
            />
          </div>
          <div className="space-y-5 text-base leading-relaxed text-charcoal/90">
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
            <button
              type="button"
              onClick={openResume}
              className="mt-4 inline-flex rounded-full border-2 border-accent px-5 py-2.5 text-sm font-semibold text-accent transition hover:bg-accent hover:text-white"
            >
              View resume
            </button>
          </div>
        </div>
      </ScrollReveal>
    </Section>
  );
}
