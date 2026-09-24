"use client";

import { ExternalLink } from "lucide-react";
import { GitHubIcon } from "./SocialIcons";
import Image from "next/image";
import { useState } from "react";
import type { Project } from "@/data/projects";
import { ScrollReveal } from "./ScrollReveal";

type ProjectCardProps = {
  project: Project;
};

export function ProjectCard({ project }: ProjectCardProps) {
  const [expanded, setExpanded] = useState(false);

  return (
    <ScrollReveal>
      <article
        id={`work-${project.slug}`}
        className="group overflow-hidden rounded-2xl border border-charcoal/10 bg-beige transition duration-300 hover:-translate-y-1 hover:shadow-xl"
      >
        <div className="relative aspect-[16/10] overflow-hidden bg-powder">
          <Image
            src={project.image}
            alt=""
            fill
            className="object-cover transition duration-500 group-hover:scale-105"
            sizes="(max-width: 768px) 100vw, 50vw"
          />
          <div className="absolute right-3 top-3 flex gap-2 opacity-0 transition group-hover:opacity-100">
            <a
              href={project.repoUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`View ${project.title} on GitHub`}
              className="rounded-full bg-white/95 p-2.5 text-charcoal shadow transition hover:text-accent"
            >
              <GitHubIcon className="h-5 w-5" />
            </a>
            {project.liveUrl ? (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Open live demo for ${project.title}`}
                className="rounded-full bg-white/95 p-2.5 text-charcoal shadow transition hover:text-accent"
              >
                <ExternalLink className="h-5 w-5" />
              </a>
            ) : null}
          </div>
        </div>

        <div className="p-6 sm:p-8">
          <div className="flex flex-wrap items-center gap-2 font-mono text-xs uppercase tracking-wider text-muted">
            {project.categories.map((cat) => (
              <span key={cat}>{cat}</span>
            ))}
            <span className="text-charcoal/30">·</span>
            <span>{project.year}</span>
          </div>
          <h3 className="mt-3 text-2xl font-semibold text-charcoal">
            {project.title}
          </h3>
          <p className="mt-1 text-sm font-medium text-accent">{project.hook}</p>
          <p className="mt-4 text-muted leading-relaxed">{project.summary}</p>
          {project.outcome ? (
            <p className="mt-3 text-sm font-medium text-charcoal">
              {project.outcome}
            </p>
          ) : null}
          <div className="mt-4 flex flex-wrap gap-2">
            {project.stack.map((tag) => (
              <span
                key={tag}
                className="rounded-md bg-powder px-2 py-0.5 text-xs text-charcoal"
              >
                {tag}
              </span>
            ))}
          </div>

          {(project.longDescription || project.repoUrl) && (
            <div className="mt-6 flex flex-wrap items-center gap-4 border-t border-charcoal/10 pt-4">
              {project.longDescription ? (
                <button
                  type="button"
                  onClick={() => setExpanded((e) => !e)}
                  className="text-sm font-medium text-accent hover:underline"
                  aria-expanded={expanded}
                >
                  {expanded ? "Show less" : "Read more"}
                </button>
              ) : null}
              <a
                href={project.repoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-sm font-medium text-charcoal hover:text-accent"
              >
                <GitHubIcon className="h-4 w-4" />
                GitHub
              </a>
            </div>
          )}

          {expanded && project.longDescription ? (
            <p className="mt-4 text-sm leading-relaxed text-muted">
              {project.longDescription}
            </p>
          ) : null}
        </div>
      </article>
    </ScrollReveal>
  );
}
