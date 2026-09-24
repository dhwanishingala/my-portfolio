"use client";

import { FormEvent, useState } from "react";
import { site } from "@/data/site";
import { Section } from "./Section";
import { ScrollReveal } from "./ScrollReveal";
import Link from "next/link";
import { Loader2 } from "lucide-react";
import { GitHubIcon, LinkedInIcon } from "./SocialIcons";

type FormState = "idle" | "loading" | "success" | "error";

export function ContactSection() {
  const [state, setState] = useState<FormState>("idle");
  const [errorMessage, setErrorMessage] = useState("");
  const accessKey = process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY;

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (!accessKey) {
      setState("error");
      setErrorMessage(
        "Form is not configured yet. Add NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY to .env.local (see README).",
      );
      return;
    }

    setState("loading");
    setErrorMessage("");

    const form = e.currentTarget;
    const formData = new FormData(form);
    formData.append("access_key", accessKey);
    formData.append("subject", `Portfolio contact from ${formData.get("name")}`);

    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
        headers: { Accept: "application/json" },
      });
      const data = (await res.json()) as { success?: boolean; message?: string };
      if (data.success) {
        setState("success");
        form.reset();
      } else {
        setState("error");
        setErrorMessage(data.message ?? "Something went wrong. Try again.");
      }
    } catch {
      setState("error");
      setErrorMessage("Network error. Please try again or use LinkedIn.");
    }
  }

  return (
    <Section id="contact" title="Get in touch" eyebrow="Contact" background="blush">
      <ScrollReveal>
        <div className="grid gap-12 lg:grid-cols-2">
          <div>
            <p className="text-muted leading-relaxed">
              Have a role, project, or question? Send a message—I&apos;ll get back
              to you soon.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                href={site.social.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm font-medium text-charcoal hover:text-accent"
              >
                <GitHubIcon className="h-5 w-5" />
                GitHub
              </Link>
              <Link
                href={site.social.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm font-medium text-charcoal hover:text-accent"
              >
                <LinkedInIcon className="h-5 w-5" />
                LinkedIn
              </Link>
            </div>
          </div>

          <form onSubmit={onSubmit} className="space-y-4">
            <input
              type="checkbox"
              name="botcheck"
              className="hidden"
              tabIndex={-1}
              autoComplete="off"
            />
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-charcoal">
                Name
              </label>
              <input
                id="name"
                name="name"
                required
                autoComplete="name"
                className="mt-1 w-full rounded-xl border border-charcoal/15 bg-white/80 px-4 py-3 text-charcoal outline-none ring-accent/30 focus:ring-2"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-charcoal">
                Email
              </label>
              <input
                id="email"
                name="email"
                type="email"
                required
                autoComplete="email"
                className="mt-1 w-full rounded-xl border border-charcoal/15 bg-white/80 px-4 py-3 text-charcoal outline-none ring-accent/30 focus:ring-2"
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-charcoal">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                required
                rows={5}
                className="mt-1 w-full resize-y rounded-xl border border-charcoal/15 bg-white/80 px-4 py-3 text-charcoal outline-none ring-accent/30 focus:ring-2"
              />
            </div>
            <button
              type="submit"
              disabled={state === "loading"}
              className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-accent px-6 py-3 text-sm font-semibold text-white transition hover:bg-accent-hover disabled:opacity-70 sm:w-auto"
            >
              {state === "loading" ? (
                <>
                  <Loader2 className="h-4 w-4 animate-spin" aria-hidden />
                  Sending…
                </>
              ) : (
                "Send message"
              )}
            </button>
            {state === "success" ? (
              <p className="text-sm font-medium text-charcoal" role="status">
                Thanks! Your message was sent.
              </p>
            ) : null}
            {state === "error" ? (
              <p className="text-sm text-accent" role="alert">
                {errorMessage}
              </p>
            ) : null}
            <p className="text-xs text-muted">
              Messages are delivered via Web3Forms so I can reply to you. No
              marketing lists.
            </p>
          </form>
        </div>
      </ScrollReveal>
    </Section>
  );
}
