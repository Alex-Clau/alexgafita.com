import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export function HeroSection() {
  return (
    <section className="grid gap-8 md:grid-cols-[minmax(0,3fr)_minmax(0,2fr)] md:items-center">
      <div className="space-y-6">
        <p className="text-xs uppercase tracking-[0.3em] text-emerald-400/80">
          Portfolio of
        </p>
        <h1 className="text-balance text-4xl font-semibold tracking-tight text-emerald-50 sm:text-5xl lg:text-6xl">
          Gafița Claudiu-Alexandru
        </h1>
        <p className="max-w-xl text-balance text-sm text-muted-foreground sm:text-base">
          Software engineer and computer science student building performant,
          user-centered products across web and mobile. I enjoy translating
          ideas into production-ready experiences with clean design, thoughtful
          animations, and reliable cloud infrastructure.
        </p>
        <div className="flex flex-wrap gap-3">
          <Button
            asChild
            className="bg-emerald-500 text-emerald-950 hover:bg-emerald-400"
          >
            <a href="#projects">View projects</a>
          </Button>
          <Button variant="outline" asChild>
            <a href="#contact">Get in touch</a>
          </Button>
        </div>
      </div>

      <Card className="border-emerald-900/60 bg-gradient-to-b from-emerald-900/20 via-zinc-900/60 to-black/60 backdrop-blur-md">
        <CardHeader>
          <CardTitle className="text-sm uppercase tracking-[0.3em] text-emerald-300">
            Snapshot
          </CardTitle>
          <CardDescription className="text-xs">
            Currently studying Computer Science at UBB Cluj-Napoca and building
            products with React, Next.js, and cloud-native tools.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4 text-sm">
          <div className="flex items-start justify-between gap-4">
            <span className="text-muted-foreground">Location</span>
            <span>Romania · GMT+2</span>
          </div>
          <div className="flex items-start justify-between gap-4">
            <span className="text-muted-foreground">Focus</span>
            <span className="text-right">
              Frontend-heavy full-stack · Web & mobile · Developer experience
            </span>
          </div>
          <div className="flex items-start justify-between gap-4">
            <span className="text-muted-foreground">Languages</span>
            <span className="text-right">
              Romanian (native), English (C1 – Cambridge 190)
            </span>
          </div>
        </CardContent>
      </Card>
    </section>
  );
}


