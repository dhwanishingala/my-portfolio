import Link from "next/link";
import { site } from "@/data/site";
import { Section } from "./Section";
import { ScrollReveal } from "./ScrollReveal";
import {
  EmailIcon,
  GitHubIcon,
  InstagramIcon,
  LinkedInIcon,
} from "./SocialIcons";

const iconLink =
  "rounded-full border border-charcoal/15 bg-white/60 p-2.5 text-charcoal transition hover:border-accent hover:text-accent";

export function ContactSection() {
  const mailto = `mailto:${site.email}?subject=${encodeURIComponent("Hello from your portfolio")}`;

  return (
    <Section
      id="contact"
      title="Get in touch"
      background="blush"
      compact
    >
      <ScrollReveal>
        <div className="mx-auto flex max-w-xl flex-col items-center gap-5 text-center">
          <p className="text-base leading-relaxed text-muted">
            Have a role, project, or question? Send a message—I&apos;ll get back
            to you soon.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-3">
            <Link
              href={site.social.github}
              target="_blank"
              rel="noopener noreferrer"
              className={iconLink}
              aria-label="GitHub"
            >
              <GitHubIcon className="h-5 w-5" />
            </Link>
            <Link
              href={site.social.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className={iconLink}
              aria-label="LinkedIn"
            >
              <LinkedInIcon className="h-5 w-5" />
            </Link>
            {site.social.instagram ? (
              <Link
                href={site.social.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className={iconLink}
                aria-label="Instagram"
              >
                <InstagramIcon className="h-5 w-5" />
              </Link>
            ) : null}
            <Link href={mailto} className={iconLink} aria-label="Email">
              <EmailIcon className="h-5 w-5" />
            </Link>
          </div>
        </div>
      </ScrollReveal>
    </Section>
  );
}
