"use client";

import { useEffect, useState } from "react";

export function CustomCursor() {
  const [pos, setPos] = useState({ x: 0, y: 0 });
  const [hovering, setHovering] = useState(false);
  const [enabled, setEnabled] = useState(false);

  useEffect(() => {
    const finePointer = window.matchMedia("(pointer: fine)").matches;
    const reducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;
    const shouldEnable = finePointer && !reducedMotion;
    setEnabled(shouldEnable);
    if (shouldEnable) {
      document.body.classList.add("custom-cursor-active");
    }
    return () => document.body.classList.remove("custom-cursor-active");
  }, []);

  useEffect(() => {
    if (!enabled) return;

    const onMove = (e: MouseEvent) => {
      setPos({ x: e.clientX, y: e.clientY });
    };

    const onOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement | null;
      setHovering(
        !!target?.closest("a, button, [role='button'], input, textarea, select"),
      );
    };

    window.addEventListener("mousemove", onMove);
    window.addEventListener("mouseover", onOver);
    return () => {
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("mouseover", onOver);
    };
  }, [enabled]);

  if (!enabled) return null;

  return (
    <div
      aria-hidden
      className="pointer-events-none fixed left-0 top-0 z-[200] mix-blend-normal"
      style={{
        transform: `translate(${pos.x}px, ${pos.y}px)`,
      }}
    >
      <div
        className={`-translate-x-1/2 -translate-y-1/2 rounded-full border-2 transition-colors duration-150 ${
          hovering
            ? "h-8 w-8 border-accent bg-accent/10"
            : "h-3 w-3 border-blue-accent bg-blue-accent/30"
        }`}
      />
    </div>
  );
}
