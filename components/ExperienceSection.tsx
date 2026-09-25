import { experience } from "@/data/experience";
import { Section } from "./Section";
import { ScrollReveal } from "./ScrollReveal";

export function ExperienceSection() {
  return (
    <Section
      id="experience"
      title="Experience"
      eyebrow="Work"
      background="beige"
    >
      <ul className="space-y-8">
        {experience.map((job) => (
          <ScrollReveal key={`${job.company}-${job.dates}`}>
            <li className="rounded-2xl border border-charcoal/10 bg-white/50 p-6 sm:p-8">
              <div className="flex flex-col gap-1 sm:flex-row sm:flex-wrap sm:items-baseline sm:justify-between">
                <h3 className="text-xl font-semibold text-charcoal">
                  {job.title}
                  <span className="text-accent"> @ </span>
                  {job.company}
                </h3>
                <p className="font-mono text-xs uppercase tracking-wider text-muted">
                  {job.dates}
                  {job.location ? ` · ${job.location}` : null}
                </p>
              </div>
              <p className="mt-4 leading-relaxed text-charcoal/90">
                {job.summary}
              </p>
              {job.highlights.length > 0 ? (
                <ul className="mt-4 list-inside list-disc space-y-2 text-sm text-muted">
                  {job.highlights.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              ) : null}
            </li>
          </ScrollReveal>
        ))}
      </ul>
    </Section>
  );
}
