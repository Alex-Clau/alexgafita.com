import { notFound } from "next/navigation";
import type { Metadata } from "next";

import { BackgroundAnimations } from "@/components/layout/background";
import { projects } from "@/data/portfolio";
import { ProjectDetailPage } from "@/components/project-detail/ProjectDetailPage";

type PageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);

  if (!project) {
    return {
      title: "Project Not Found",
    };
  }

  return {
    title: `${project.name} - Alex Gafița`,
    description: project.description,
    openGraph: {
      title: project.name,
      description: project.description,
      type: "website",
      url: `https://alexgafita.com/projects/${project.slug}`,
    },
    twitter: {
      card: "summary_large_image",
      title: project.name,
      description: project.description,
    },
  };
}

export default async function ProjectPage({ params }: PageProps) {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);

  if (!project) {
    return notFound();
  }

  return (
    <main className="relative min-h-screen overflow-x-hidden text-foreground">
      <BackgroundAnimations />

      <div className="relative z-10 mx-auto flex min-h-screen max-w-4xl flex-col gap-8 px-6 pb-16 pt-12 sm:px-6 lg:px-8" style={{
        paddingLeft: `calc(2rem + env(safe-area-inset-left))`,
        paddingRight: `calc(2rem + env(safe-area-inset-right))`,
      }}>
        <ProjectDetailPage project={project} />
      </div>
    </main>
  );
}


