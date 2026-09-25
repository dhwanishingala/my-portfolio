import Link from "next/link";
import { GitHubIcon, LinkedInIcon } from "./SocialIcons";
import { site } from "@/data/site";

export function Footer() {
  return (
    <footer className="border-t border-charcoal/10 bg-beige px-4 py-8 sm:px-6 lg:px-8">
      <div className="mx-auto flex max-w-5xl flex-col items-center justify-between gap-6 sm:flex-row">
        <p className="text-center text-sm text-muted sm:text-left">
          {site.footer.note} · {site.footer.year}
        </p>
        <div className="flex items-center gap-6">
          <Link
            href={site.social.github}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="text-charcoal transition hover:text-accent"
          >
            <GitHubIcon className="h-5 w-5" />
          </Link>
          <Link
            href={site.social.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="text-charcoal transition hover:text-accent"
          >
            <LinkedInIcon className="h-5 w-5" />
          </Link>
          <Link
            href="#hero"
            className="text-sm font-medium text-charcoal hover:text-accent"
          >
            Back to top
          </Link>
        </div>
      </div>
    </footer>
  );
}
