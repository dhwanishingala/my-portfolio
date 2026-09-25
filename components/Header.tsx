"use client";

import { Menu, X } from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";
import { site } from "@/data/site";
import { ResumeIcon } from "./SocialIcons";
import { useResumeModal } from "./ResumeModalProvider";

const sectionIds = ["hero", "about", "experience", "skills", "projects", "contact"];

export function Header() {
  const { openResume } = useResumeModal();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [active, setActive] = useState("hero");

  useEffect(() => {
    const observers: IntersectionObserver[] = [];

    sectionIds.forEach((id) => {
      const el = document.getElementById(id);
      if (!el) return;
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) setActive(id);
        },
        { rootMargin: "-40% 0px -50% 0px", threshold: 0 },
      );
      observer.observe(el);
      observers.push(observer);
    });

    return () => observers.forEach((o) => o.disconnect());
  }, []);

  const navLinkClass = (href: string) => {
    const id = href.replace("#", "");
    const isActive = active === id;
    return `relative text-sm font-medium transition-colors ${
      isActive ? "text-accent" : "text-charcoal hover:text-accent"
    }`;
  };

  return (
    <header className="sticky top-0 z-50 border-b border-charcoal/5 bg-beige/90 backdrop-blur-md">
      <div className="mx-auto flex max-w-5xl items-center justify-between gap-4 px-4 py-4 sm:px-6 lg:px-8">
        <Link
          href="#hero"
          className="font-mono text-sm font-semibold tracking-tight text-charcoal"
        >
          DS
        </Link>

        <nav className="hidden items-center gap-8 md:flex" aria-label="Primary">
          {site.nav.map((item) => (
            <Link key={item.href} href={item.href} className={navLinkClass(item.href)}>
              {item.label}
              {active === item.href.replace("#", "") ? (
                <span className="absolute -bottom-1 left-0 h-0.5 w-full bg-accent" />
              ) : null}
            </Link>
          ))}
          <button
            type="button"
            onClick={openResume}
            className="inline-flex items-center gap-1.5 text-sm font-medium text-charcoal transition hover:text-accent"
          >
            <ResumeIcon className="h-4 w-4" />
            Resume
          </button>
          <Link
            href="#projects"
            className="rounded-full bg-accent px-4 py-2 text-sm font-medium text-white transition hover:bg-accent-hover"
          >
            See projects
          </Link>
        </nav>

        <button
          type="button"
          className="rounded-lg p-2 text-charcoal md:hidden"
          aria-expanded={mobileOpen}
          aria-label={mobileOpen ? "Close menu" : "Open menu"}
          onClick={() => setMobileOpen((o) => !o)}
        >
          {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {mobileOpen ? (
        <nav
          className="border-t border-charcoal/5 bg-beige px-4 py-4 md:hidden"
          aria-label="Mobile"
        >
          <ul className="flex flex-col gap-3">
            {site.nav.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="block py-2 text-charcoal"
                  onClick={() => setMobileOpen(false)}
                >
                  {item.label}
                </Link>
              </li>
            ))}
            <li>
              <button
                type="button"
                className="inline-flex items-center gap-2 py-2 text-charcoal"
                onClick={() => {
                  setMobileOpen(false);
                  openResume();
                }}
              >
                <ResumeIcon className="h-4 w-4" />
                Resume
              </button>
            </li>
            <li>
              <Link
                href="#projects"
                className="inline-block rounded-full bg-accent px-4 py-2 text-sm font-medium text-white"
                onClick={() => setMobileOpen(false)}
              >
                See projects
              </Link>
            </li>
          </ul>
        </nav>
      ) : null}
    </header>
  );
}
