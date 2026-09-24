import { site } from "@/data/site";
import { Section } from "./Section";
import { ScrollReveal } from "./ScrollReveal";

export function SkillsSection() {
  return (
    <Section id="skills" title="Skills" eyebrow="Toolbox" background="powder">
      <ScrollReveal>
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
          {site.skills.map((group) => (
            <div key={group.label}>
              <h3 className="font-mono text-xs uppercase tracking-widest text-muted">
                {group.label}
              </h3>
              <ul className="mt-4 flex flex-wrap gap-2">
                {group.items.map((skill) => (
                  <li key={skill}>
                    <span className="inline-block rounded-full border border-blue-accent/40 bg-white/60 px-3 py-1.5 text-sm text-charcoal transition hover:border-accent hover:underline hover:decoration-accent hover:underline-offset-4">
                      {skill}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </ScrollReveal>
    </Section>
  );
}
