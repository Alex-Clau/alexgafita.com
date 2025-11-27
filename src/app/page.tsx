import { BackgroundVines } from "@/components/sections/background";
import { ContactSection } from "@/components/sections/contact";
import { HeroSection } from "@/components/sections/hero";
import { ProjectsSection } from "@/components/sections/projects";
import { SkillsSection } from "@/components/sections/skills";

export default function Home() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-gradient-to-b from-black via-neutral-950 to-black text-foreground">
      <BackgroundVines />
      <div className="relative mx-auto flex min-h-screen max-w-5xl flex-col gap-16 px-4 pb-16 pt-24 sm:px-6 lg:px-8">
        <HeroSection />
        <SkillsSection />
        <ProjectsSection />
        <ContactSection />
      </div>
    </main>
  );
}
