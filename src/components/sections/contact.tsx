import { Button } from "@/components/ui/button";

export function ContactSection() {
  return (
    <section
      id="contact"
      className="mt-auto rounded-2xl border border-emerald-900/60 bg-gradient-to-r from-emerald-900/30 via-emerald-800/10 to-transparent p-6 backdrop-blur-md sm:p-8"
    >
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h2 className="text-lg font-semibold text-emerald-100 sm:text-xl">
            Let&apos;s build something together
          </h2>
          <p className="max-w-xl text-sm text-muted-foreground">
            I&apos;m open to internships, junior roles, and collaborations on
            products that mix thoughtful UX with robust engineering.
          </p>
        </div>
        <div className="flex flex-wrap gap-3">
          <Button
            asChild
            className="bg-emerald-500 text-emerald-950 hover:bg-emerald-400"
          >
            <a href="mailto:alexgafita47@gmail.com">Email me</a>
          </Button>
          <Button variant="outline" asChild>
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


