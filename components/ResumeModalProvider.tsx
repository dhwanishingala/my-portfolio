"use client";

import {
  createContext,
  useCallback,
  useContext,
  useMemo,
  useState,
  type ReactNode,
} from "react";
import { ResumeViewerModal } from "./ResumeViewerModal";

type ResumeModalContextValue = {
  openResume: () => void;
  closeResume: () => void;
  isOpen: boolean;
};

const ResumeModalContext = createContext<ResumeModalContextValue | null>(null);

export function ResumeModalProvider({ children }: { children: ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);

  const openResume = useCallback(() => setIsOpen(true), []);
  const closeResume = useCallback(() => setIsOpen(false), []);

  const value = useMemo(
    () => ({ openResume, closeResume, isOpen }),
    [openResume, closeResume, isOpen],
  );

  return (
    <ResumeModalContext.Provider value={value}>
      {children}
      <ResumeViewerModal isOpen={isOpen} onClose={closeResume} />
    </ResumeModalContext.Provider>
  );
}

export function useResumeModal() {
  const ctx = useContext(ResumeModalContext);
  if (!ctx) {
    throw new Error("useResumeModal must be used within ResumeModalProvider");
  }
  return ctx;
}
