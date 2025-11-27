import { ContactSection } from "@/components/sections/contact";
import { HeroSection } from "@/components/sections/hero";
import { ProjectsSection } from "@/components/sections/projects";
import { SkillsSection } from "@/components/sections/skills";
import { BackgroundAnimations } from "@/components/sections/background";

export default function Home() {
  return (
    <main className="relative min-h-screen overflow-x-hidden text-foreground">
      <BackgroundAnimations />
      <div className="relative z-10 mx-auto flex min-h-screen max-w-6xl flex-col gap-20 px-4 pb-24 pt-20 sm:px-6 sm:gap-24 sm:pt-24 lg:px-8 lg:gap-28 lg:pt-28">
        <HeroSection />
        <SkillsSection />
        <ProjectsSection />
        <ContactSection />
      </div>
    </main>
  );
}
