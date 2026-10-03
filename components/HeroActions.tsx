"use client";

import Link from "next/link";
import { site } from "@/data/site";
import { useResumeModal } from "./ResumeModalProvider";
import { EmailIcon, GitHubIcon, LinkedInIcon, ResumeIcon } from "./SocialIcons";

const iconBtn =
  "inline-flex h-10 w-10 items-center justify-center rounded-full border border-charcoal/15 bg-white/50 text-charcoal transition hover:border-accent hover:text-accent";

export function HeroActions() {
  const { openResume } = useResumeModal();

  return (
    <div className="mt-8 flex flex-wrap items-center gap-3">
      <Link
        href={site.social.github}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="GitHub"
        className={iconBtn}
      >
        <GitHubIcon className="h-4 w-4" />
      </Link>
      <Link
        href={site.social.linkedin}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="LinkedIn"
        className={iconBtn}
      >
        <LinkedInIcon className="h-4 w-4" />
      </Link>
      <button
        type="button"
        onClick={openResume}
        className="inline-flex items-center gap-2 rounded-full bg-accent px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-accent-hover"
      >
        <ResumeIcon className="h-4 w-4" />
        Resume
      </button>
      <a
        href={`mailto:${site.email}`}
        className="inline-flex items-center gap-2 rounded-full border-2 border-accent px-5 py-2 text-sm font-semibold text-accent transition hover:bg-accent hover:text-white"
      >
        <EmailIcon className="h-4 w-4" />
        Say hi
      </a>
    </div>
  );
}
