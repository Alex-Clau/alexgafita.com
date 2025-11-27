import { notFound } from "next/navigation";
import type { Metadata } from "next";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { BackgroundAnimations } from "@/components/sections/background";
import { projects, type Project } from "@/data/portfolio";
import Image from "next/image";
import Link from "next/link";
import { StackBadges } from "@/components/stack-badges";
import { AnimatedProjectContent } from "@/components/project-page-content";

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
    <main className="relative min-h-screen overflow-hidden bg-gradient-to-br from-black via-neutral-950 to-black text-foreground">
      <BackgroundAnimations />

      <div className="relative mx-auto flex min-h-screen max-w-4xl flex-col gap-8 px-4 pb-16 pt-24 sm:px-6 lg:px-8">
        <AnimatedProjectContent project={project} />
      </div>
    </main>
  );
}


