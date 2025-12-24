import { HeroSection } from "@/components/sections/hero";
import { BackgroundAnimations } from "@/components/layout/background";
import dynamic from "next/dynamic";

const SkillsSection = dynamic(() => import("@/components/sections/skills/SkillsSection").then(mod => ({ default: mod.SkillsSection })), { ssr: true });
const ProjectsSection = dynamic(() => import("@/components/sections/projects/ProjectsSection").then(mod => ({ default: mod.ProjectsSection })), { ssr: true });
const ContactSection = dynamic(() => import("@/components/sections/contact").then(mod => ({ default: mod.ContactSection })), { ssr: true });

export default function Home() {
  return (
    <main id="main-content" className="relative min-h-screen overflow-x-hidden text-foreground">
      <BackgroundAnimations />
      <HeroSection />
      <div className="relative z-10 mx-auto flex min-h-screen max-w-7xl flex-col gap-20 sm:gap-28 md:gap-32 px-6 pb-20 sm:pb-28 md:pb-32 sm:px-6 lg:px-8" style={{
        paddingLeft: `calc(2rem + env(safe-area-inset-left))`,
        paddingRight: `calc(2rem + env(safe-area-inset-right))`,
      }}>
        <SkillsSection />
        <ProjectsSection />
        <ContactSection />
      </div>
    </main>
  );
}
