import { notFound } from "next/navigation";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { BackgroundAnimations } from "@/components/sections/background";
import { projects } from "@/data/portfolio";
import Image from "next/image";
import Link from "next/link";

type PageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
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
        <Button
          asChild
          variant="ghost"
          className="-ml-2 w-fit text-xs text-muted-foreground"
        >
          <Link href="/" aria-label="Back to home">
            ← Back
          </Link>
        </Button>

        <Card className="border border-amber-900/40 bg-black/40">
          <CardHeader className="flex flex-col items-center gap-4 sm:flex-row sm:items-center sm:justify-between">
            <div className="flex items-center gap-4">
              <div className="relative h-14 w-14 overflow-hidden rounded-xl bg-amber-950/40 border border-amber-900/40">
                <Image
                  src={project.image}
                  alt={`${project.name} logo`}
                  fill
                  sizes="56px"
                  className="object-contain"
                />
              </div>
              <CardTitle className="text-lg font-semibold text-amber-50">
                {project.name}
              </CardTitle>
            </div>
          </CardHeader>
          <CardContent className="space-y-6 text-sm text-stone-300">
            <section className="space-y-2">
              <h2 className="text-xs font-semibold uppercase tracking-[0.2em] text-amber-300">
                Overview
              </h2>
              <p>{project.description}</p>
            </section>

            <section className="grid gap-4 md:grid-cols-3">
              <div className="space-y-2">
                <h3 className="text-xs font-semibold uppercase tracking-[0.18em] text-amber-300">
                  Languages
                </h3>
                <p className="text-xs text-amber-100">
                  {project.languages.join(" · ")}
                </p>
              </div>
              <div className="space-y-2">
                <h3 className="text-xs font-semibold uppercase tracking-[0.18em] text-amber-300">
                  Frameworks
                </h3>
                <p className="text-xs text-amber-100">
                  {project.frameworks.join(" · ")}
                </p>
              </div>
              <div className="space-y-2">
                <h3 className="text-xs font-semibold uppercase tracking-[0.18em] text-amber-300">
                  Infrastructure
                </h3>
                <p className="text-xs text-amber-100">
                  {project.infrastructure.join(" · ")}
                </p>
              </div>
            </section>

            <section className="space-y-2">
              <h3 className="text-xs font-semibold uppercase tracking-[0.18em] text-amber-300">
                What I worked on
              </h3>
              <ul className="space-y-1.5">
                {project.highlights.map((item) => (
                  <li key={item} className="flex gap-2">
                    <span className="mt-1 h-1 w-1 rounded-full bg-amber-400" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </section>

            <section className="flex items-center justify-between pt-2">
              <p className="text-xs text-stone-400">
                Tech summary:{" "}
                <span className="text-amber-300">
                  {project.stack.join(" · ")}
                </span>
              </p>
              <Button
                asChild
                size="sm"
                className="bg-amber-600 text-black hover:bg-amber-500"
              >
                <a href={project.href} target="_blank" rel="noreferrer">
                  View repository
                </a>
              </Button>
            </section>
          </CardContent>
        </Card>
      </div>
    </main>
  );
}


