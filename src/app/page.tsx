import { HeroSection } from "@/components/sections/hero";
import { BackgroundAnimations } from "@/components/layout/background";
import dynamic from "next/dynamic";

const SkillsSection = dynamic(() => import("@/components/sections/skills/SkillsSection").then(mod => ({ default: mod.SkillsSection })), { ssr: true });
const ProjectsSection = dynamic(() => import("@/components/sections/projects/ProjectsSection").then(mod => ({ default: mod.ProjectsSection })), { ssr: true });
const ContactSection = dynamic(() => import("@/components/sections/contact").then(mod => ({ default: mod.ContactSection })), { ssr: true });

export default function Home() {
  return (
    <main className="relative min-h-screen overflow-x-hidden text-foreground">
      <BackgroundAnimations />
      <div className="relative z-10 mx-auto flex min-h-screen max-w-6xl flex-col gap-20 px-4 pb-24 sm:px-6 sm:gap-24 lg:px-8 lg:gap-28" style={{
        paddingLeft: `calc(1rem + env(safe-area-inset-left))`,
        paddingRight: `calc(1rem + env(safe-area-inset-right))`,
      }}>
        <HeroSection />
        <SkillsSection />
        <ProjectsSection />
        <ContactSection />
      </div>
    </main>
  );
}
