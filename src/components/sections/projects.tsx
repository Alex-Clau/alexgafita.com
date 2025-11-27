import Image from "next/image";
import Link from "next/link";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { projects } from "@/data/portfolio";

export function ProjectsSection() {
  return (
    <section id="projects" className="space-y-6">
      <div className="space-y-2">
        <h2 className="text-lg font-semibold text-amber-100 sm:text-xl">
          Selected projects
        </h2>
        <p className="max-w-2xl text-sm text-muted-foreground">
          Click a project card to see the full case study, stack, and links.
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        {projects.map((project) => (
          <ProjectCard key={project.name} project={project} />
        ))}
      </div>
    </section>
  );
}

type ProjectCardProps = {
  project: (typeof projects)[number];
};

function ProjectCard({ project }: ProjectCardProps) {
  return (
    <Link href={`/projects/${project.slug}`} className="block">
      <Card className="group overflow-hidden border border-amber-900/30 bg-black/40 transition-transform duration-300 hover:-translate-y-1 hover:border-amber-500/70 hover:shadow-[0_0_60px_rgba(120,53,15,0.45)]">
        <div className="relative aspect-2/1 w-full overflow-hidden">
          <Image
            src={project.image}
            alt={project.name}
            fill
            className="object-contain transition-transform duration-500 group-hover:scale-105"
            sizes="(min-width: 768px) 50vw, 100vw"
          />
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/85 via-black/40 to-transparent" />
          <div className="absolute inset-x-0 bottom-0 flex items-center justify-between gap-3 px-4 pb-3">
            <CardTitle className="text-sm font-semibold text-amber-50">
              {project.name}
            </CardTitle>
          </div>
        </div>
      </Card>
    </Link>
  );
}


