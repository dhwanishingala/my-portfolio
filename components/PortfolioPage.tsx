import { CustomCursor } from "@/components/CustomCursor";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { AboutSection } from "@/components/AboutSection";
import { ExperienceSection } from "@/components/ExperienceSection";
import { SkillsSection } from "@/components/SkillsSection";
import { WorkSection } from "@/components/WorkSection";
import { ContactSection } from "@/components/ContactSection";
import { ResumeModalProvider } from "@/components/ResumeModalProvider";

export function PortfolioPage() {
  return (
    <ResumeModalProvider>
      <CustomCursor />
      <Header />
      <main>
        <Hero />
        <AboutSection />
        <ExperienceSection />
        <SkillsSection />
        <WorkSection />
        <ContactSection />
      </main>
      <Footer />
    </ResumeModalProvider>
  );
}
