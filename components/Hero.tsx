import Image from "next/image";
import Link from "next/link";
import { GitHubIcon, LinkedInIcon } from "./SocialIcons";
import { site } from "@/data/site";
import { ScrollReveal } from "./ScrollReveal";

export function Hero() {
  return (
    <section
      id="hero"
      className="scroll-mt-24 bg-gradient-to-br from-beige via-beige to-powder px-4 pb-20 pt-12 sm:px-6 lg:px-8"
    >
      <div className="mx-auto grid max-w-5xl gap-12 lg:grid-cols-[minmax(0,280px)_1fr] lg:items-center lg:gap-16">
        <ScrollReveal className="mx-auto w-full max-w-[280px] lg:mx-0">
          <div className="relative aspect-square overflow-hidden rounded-2xl border border-charcoal/10 bg-blush shadow-lg">
            <Image
              src={site.about.photo}
              alt={site.about.photoAlt}
              fill
              className="object-cover"
              priority
              sizes="(max-width: 1024px) 280px, 280px"
            />
          </div>
        </ScrollReveal>

        <ScrollReveal>
          <p className="font-mono text-xs uppercase tracking-[0.25em] text-muted">
            Portfolio
          </p>
          <h1 className="mt-3 text-4xl font-bold tracking-tight text-charcoal sm:text-5xl">
            {site.name}
          </h1>
          <p className="mt-2 font-mono text-sm text-muted">{site.heroMono}</p>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-charcoal/90">
            {site.tagline}
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-3">
            <Link
              href={site.social.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-charcoal/15 bg-white/50 px-4 py-2 text-sm font-medium text-charcoal transition hover:border-accent hover:text-accent"
            >
              <GitHubIcon className="h-4 w-4" />
              GitHub
            </Link>
            <Link
              href={site.social.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-charcoal/15 bg-white/50 px-4 py-2 text-sm font-medium text-charcoal transition hover:border-accent hover:text-accent"
            >
              <LinkedInIcon className="h-4 w-4" />
              LinkedIn
            </Link>
            <Link
              href="#work"
              className="inline-flex items-center rounded-full bg-accent px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-accent-hover"
            >
              See my work
            </Link>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
