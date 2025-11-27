import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { projects } from "@/data/portfolio";

export function ProjectsSection() {
  return (
    <section id="projects" className="space-y-6">
      <div className="space-y-2">
        <h2 className="text-lg font-semibold text-emerald-100 sm:text-xl">
          Selected projects
        </h2>
        <p className="max-w-2xl text-sm text-muted-foreground">
          A few things I&apos;ve built recently that combine product thinking,
          performance, and clean UX.
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
    <Card className="group border-emerald-900/40 bg-gradient-to-b from-zinc-950/80 via-zinc-950/60 to-black/80 transition-transform duration-300 hover:-translate-y-1 hover:border-emerald-500/70 hover:shadow-[0_0_60px_rgba(16,185,129,0.24)]">
      <CardHeader>
        <div className="flex items-start justify-between gap-2">
          <CardTitle className="text-sm font-semibold text-emerald-50">
            {project.name}
          </CardTitle>
          <Button
            asChild
            size="sm"
            variant="outline"
            className="border-emerald-700/50 bg-black/30 text-xs text-emerald-100 hover:bg-emerald-500 hover:text-emerald-950"
          >
            <a href={project.href} target="_blank" rel="noreferrer">
              View code
            </a>
          </Button>
        </div>
        <CardDescription className="pt-1 text-xs">
          {project.description}
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-4 text-sm">
        <ul className="space-y-1.5 text-muted-foreground">
          {project.highlights.map((item) => (
            <li key={item} className="flex gap-2">
              <span className="mt-1 h-1 w-1 rounded-full bg-emerald-400" />
              <span>{item}</span>
            </li>
          ))}
        </ul>
        <p className="text-xs text-emerald-300">
          {project.stack.join(" · ")}
        </p>
      </CardContent>
    </Card>
  );
}


