import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { skills } from "@/data/portfolio";

export function SkillsSection() {
  return (
    <section
      id="skills"
      className="space-y-6 rounded-2xl border border-emerald-900/60 bg-zinc-950/60 p-6 shadow-[0_0_80px_rgba(16,185,129,0.12)] backdrop-blur-md sm:p-8"
    >
      <div className="space-y-2">
        <h2 className="text-lg font-semibold text-emerald-100 sm:text-xl">
          Skills &amp; Stack
        </h2>
        <p className="max-w-2xl text-sm text-muted-foreground">
          I like working across the stack with a focus on TypeScript, modern
          React, and cloud-native architectures.
        </p>
      </div>
      <div className="grid gap-4 md:grid-cols-3">
        <SkillCard title="Languages" items={skills.languages} />
        <SkillCard title="Frameworks" items={skills.frameworks} />
        <SkillCard title="Tools &amp; Infra" items={skills.tools} />
      </div>
    </section>
  );
}

type SkillCardProps = {
  title: string;
  items: string[];
};

function SkillCard({ title, items }: SkillCardProps) {
  return (
    <Card className="border-emerald-900/40 bg-zinc-950/80">
      <CardHeader>
        <CardTitle className="text-sm text-emerald-200">{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <ul className="space-y-1.5 text-sm text-muted-foreground">
          {items.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </CardContent>
    </Card>
  );
}


