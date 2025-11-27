import { skills } from "@/data/portfolio";

export function SkillsSection() {
  return (
    <section
      id="skills"
      className="space-y-6"
    >
      <div className="space-y-2">
        <h2 className="text-lg font-semibold text-amber-100 sm:text-xl">
          Skills &amp; Stack
        </h2>
        <p className="max-w-2xl text-sm text-muted-foreground">
          I enjoy working close to the backend: scalable APIs, data, and cloud infrastructure,
          with just enough frontend to ship complete features.
        </p>
      </div>
      <div className="grid gap-8 md:grid-cols-3">
        <SkillGroup title="Languages" items={skills.languages} />
        <SkillGroup title="Frameworks" items={skills.frameworks} />
        <SkillGroup title="Tools &amp; Infra" items={skills.tools} />
      </div>
    </section>
  );
}

type SkillGroupProps = {
  title: string;
  items: string[];
};

const DEVICON_CLASS: Record<string, string> = {
  JavaScript: "devicon-javascript-plain colored",
  TypeScript: "devicon-typescript-plain colored",
  Python: "devicon-python-plain colored",
  Java: "devicon-java-plain colored",
  "C++": "devicon-cplusplus-plain colored",
  SQL: "devicon-postgresql-plain colored",
  "HTML/CSS": "devicon-html5-plain colored",
  // frameworks
  React: "devicon-react-original colored",
  "React Native": "devicon-react-original colored",
  "Next.js": "devicon-nextjs-original",
  "Node.js": "devicon-nodejs-plain colored",
  "Express.js": "devicon-express-original",
  TailwindCSS: "devicon-tailwindcss-plain-wordmark colored",
  Expo: "devicon-expo-original colored",
  NativeWind: "devicon-tailwindcss-plain-wordmark colored",
  // tools & infra
  Git: "devicon-git-plain colored",
  Docker: "devicon-docker-plain colored",
  Firebase: "devicon-firebase-plain colored",
  MongoDB: "devicon-mongodb-plain colored",
  MySQL: "devicon-mysql-plain colored",
  "Google Gemini API": "devicon-google-plain colored",
  "AWS (Lambda, DynamoDB, S3, EC2)": "devicon-amazonwebservices-plain-wordmark colored",
};

function SkillGroup({ title, items }: SkillGroupProps) {
  return (
    <div className="space-y-3">
      <p className="text-xs font-medium uppercase tracking-[0.22em] text-amber-300/90">
        {title}
      </p>
      <div className="flex flex-wrap gap-4">
        {items.map((item) => (
          <SkillIcon key={item} label={item} />
        ))}
      </div>
    </div>
  );
}

type SkillIconProps = {
  label: string;
};

function SkillIcon({ label }: SkillIconProps) {
  const className = DEVICON_CLASS[label];

  if (!className) {
    return (
      <span
        className="flex h-10 items-center rounded-full border border-amber-900/50 bg-amber-950/20 px-3 text-xs font-medium text-amber-100"
        title={label}
        aria-label={label}
      >
        {label}
      </span>
    );
  }

  return (
    <span
      className="flex h-10 items-center rounded-full border border-amber-900/50 bg-amber-950/20 px-3"
      title={label}
      aria-label={label}
    >
      <i className={`${className} devicon-icon text-xl`} />
      <span className="ml-2 text-xs text-amber-100">{label}</span>
    </span>
  );
}


