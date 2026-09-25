"use client";

import Link from "next/link";
import { site } from "@/data/site";
import { GitHubIcon, LinkedInIcon } from "./SocialIcons";

const outlineBtn =
  "inline-flex items-center gap-2 rounded-full border border-charcoal/15 bg-white/50 px-4 py-2 text-sm font-medium text-charcoal transition hover:border-accent hover:text-accent";

export function HeroActions() {
  return (
    <div className="mt-8 flex flex-wrap items-center gap-3">
      <Link
        href={site.social.github}
        target="_blank"
        rel="noopener noreferrer"
        className={outlineBtn}
      >
        <GitHubIcon className="h-4 w-4" />
        GitHub
      </Link>
      <Link
        href={site.social.linkedin}
        target="_blank"
        rel="noopener noreferrer"
        className={outlineBtn}
      >
        <LinkedInIcon className="h-4 w-4" />
        LinkedIn
      </Link>
      <Link
        href="#projects"
        className="inline-flex items-center rounded-full bg-accent px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-accent-hover"
      >
        See projects
      </Link>
    </div>
  );
}
