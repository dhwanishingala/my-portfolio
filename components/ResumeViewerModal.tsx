"use client";

import { Download, ExternalLink, X } from "lucide-react";
import { useEffect, useId, useRef } from "react";

type ResumeViewerModalProps = {
  isOpen: boolean;
  onClose: () => void;
};

export function ResumeViewerModal({ isOpen, onClose }: ResumeViewerModalProps) {
  const titleId = useId();
  const closeButtonRef = useRef<HTMLButtonElement>(null);
  const triggerRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    if (isOpen) {
      triggerRef.current = document.activeElement as HTMLElement | null;
      closeButtonRef.current?.focus();
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
      triggerRef.current?.focus();
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  useEffect(() => {
    if (!isOpen) return;
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6"
      role="presentation"
    >
      <button
        type="button"
        aria-label="Close resume viewer"
        className="absolute inset-0 bg-charcoal/60 backdrop-blur-sm"
        onClick={onClose}
      />
      <div
        role="dialog"
        aria-modal="true"
        aria-labelledby={titleId}
        className="relative z-10 flex max-h-[90vh] w-full max-w-4xl flex-col overflow-hidden rounded-2xl border border-charcoal/10 bg-beige shadow-2xl"
      >
        <div className="flex items-center justify-between gap-4 border-b border-charcoal/10 px-4 py-3 sm:px-6">
          <h2 id={titleId} className="text-lg font-semibold text-charcoal">
            Resume
          </h2>
          <div className="flex items-center gap-2">
            <a
              href="/resume.pdf"
              download
              className="inline-flex items-center gap-1.5 rounded-full border border-charcoal/15 px-3 py-1.5 text-sm text-charcoal transition hover:border-accent hover:text-accent"
            >
              <Download className="h-4 w-4" aria-hidden />
              Download
            </a>
            <a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 rounded-full border border-charcoal/15 px-3 py-1.5 text-sm text-charcoal transition hover:border-accent hover:text-accent md:hidden"
            >
              <ExternalLink className="h-4 w-4" aria-hidden />
              Open PDF
            </a>
            <button
              ref={closeButtonRef}
              type="button"
              onClick={onClose}
              className="rounded-full p-2 text-charcoal transition hover:bg-charcoal/5"
              aria-label="Close"
            >
              <X className="h-5 w-5" />
            </button>
          </div>
        </div>
        <div className="hidden min-h-[60vh] flex-1 bg-white md:block">
          <iframe
            title="Resume PDF"
            src="/resume.pdf"
            className="h-[70vh] w-full border-0"
          />
        </div>
        <div className="flex flex-col items-center gap-4 p-8 text-center md:hidden">
          <p className="text-muted max-w-sm text-sm">
            Inline PDF preview works best on desktop. Open or download your resume
            below.
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            <a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full bg-accent px-5 py-2.5 text-sm font-medium text-white"
            >
              Open in new tab
            </a>
            <a
              href="/resume.pdf"
              download
              className="rounded-full border border-charcoal/20 px-5 py-2.5 text-sm font-medium text-charcoal"
            >
              Download PDF
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
