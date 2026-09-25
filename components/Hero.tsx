import Image from "next/image";
import { site } from "@/data/site";
import { ScrollReveal } from "./ScrollReveal";
import { HeroActions } from "./HeroActions";

export function Hero() {
  return (
    <section
      id="hero"
      className="scroll-mt-24 bg-gradient-to-br from-beige via-beige to-powder px-4 pb-20 pt-12 sm:px-6 lg:px-8"
    >
      <div className="mx-auto grid max-w-5xl gap-10 lg:grid-cols-[minmax(0,300px)_1fr] lg:items-start lg:gap-14">
        <div className="w-full max-w-[300px] shrink-0 justify-self-center lg:justify-self-start">
          <Image
            src={site.about.photo}
            alt={site.about.photoAlt}
            width={site.about.photoWidth}
            height={site.about.photoHeight}
            priority
            unoptimized
            className="block h-auto w-full rounded-2xl border border-charcoal/10 bg-blush object-contain shadow-lg"
            sizes="300px"
          />
        </div>

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

          <HeroActions />
        </ScrollReveal>
      </div>
    </section>
  );
}
