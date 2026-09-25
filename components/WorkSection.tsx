import { projects } from "@/data/projects";
import { Section } from "./Section";
import { ProjectCard } from "./ProjectCard";

export function WorkSection() {
  return (
    <Section id="projects" title="Projects" eyebrow="Selected" background="beige">
      <div className="grid gap-10 lg:grid-cols-2">
        {projects.map((project) => (
          <ProjectCard key={project.slug} project={project} />
        ))}
      </div>
    </Section>
  );
}
