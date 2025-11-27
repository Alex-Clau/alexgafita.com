import { Button } from "@/components/ui/button";

export function ContactSection() {
  return (
    <section
      id="contact"
      className="mt-auto rounded-2xl border border-amber-900/50 bg-gradient-to-r from-amber-950/30 via-stone-950/20 to-transparent p-6 backdrop-blur-md sm:p-8"
    >
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h2 className="text-lg font-semibold text-amber-100 sm:text-xl">
            Let&apos;s build reliable systems
          </h2>
          <p className="max-w-xl text-sm text-muted-foreground">
            I&apos;m open to backend-heavy roles and projects focused on APIs,
            data workflows, and cloud infrastructure.
          </p>
        </div>
        <div className="flex flex-wrap gap-3">
          <Button
            asChild
            className="bg-amber-600 text-black hover:bg-amber-500"
          >
            <a href="https://github.com/Alex-Clau?tab=repositories">GitHub</a>
          </Button>
          <Button variant="outline" asChild className=" border-amber-700/50 bg-amber-800/60  text-white hover:text-amber-500 hover:border-amber-600">
            <a
              href="https://www.linkedin.com/in/alex-gafita"
              target="_blank"
              rel="noreferrer"
            >
              LinkedIn
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
}


