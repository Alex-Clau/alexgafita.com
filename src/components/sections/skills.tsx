'use client';

import { motion } from 'framer-motion';
import { skills } from "@/data/portfolio";

export function SkillsSection() {
  return (
    <section
      id="skills"
      className="space-y-8"
    >
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
        className="space-y-3"
      >
        <h2 className="text-xl sm:text-2xl font-bold tracking-tight text-amber-100">
          Skills &amp; Stack
        </h2>
        <p className="max-w-2xl text-sm sm:text-base text-stone-400 leading-relaxed">
          I enjoy working close to the backend: scalable APIs, data, and cloud infrastructure,
          with just enough frontend to ship complete features.
        </p>
      </motion.div>
      <div className="grid gap-8 md:grid-cols-3">
        <SkillGroup title="Languages" items={skills.languages} delay={0.1} />
        <SkillGroup title="Frameworks" items={skills.frameworks} delay={0.2} />
        <SkillGroup title="Tools &amp; Infra" items={skills.tools} delay={0.3} />
      </div>
    </section>
  );
}

type SkillGroupProps = {
  title: string;
  items: string[];
  delay?: number;
};

const DEVICON_CLASS: Record<string, string> = {
  // Languages
  JavaScript: "devicon-javascript-plain colored",
  TypeScript: "devicon-typescript-plain colored",
  Python: "devicon-python-plain colored",
  Java: "devicon-java-plain colored",
  "C++": "devicon-cplusplus-plain colored",
  SQL: "devicon-postgresql-plain colored",
  "HTML/CSS": "devicon-html5-plain colored",
  // Frameworks
  React: "devicon-react-original colored",
  "Next.js": "devicon-nextjs-original",
  "Node.js": "devicon-nodejs-plain colored",
  "Express.js": "devicon-express-original colored",
  TailwindCSS: "devicon-tailwindcss-plain colored",
  // Tools & Infrastructure
  Git: "devicon-git-plain colored",
  Docker: "devicon-docker-plain colored",
  Firebase: "devicon-firebase-plain colored",
  MongoDB: "devicon-mongodb-plain colored",
  MySQL: "devicon-mysql-plain colored",
  "Google Gemini API": "devicon-google-plain colored",
  "AWS (Lambda, DynamoDB, S3, EC2)": "devicon-amazonwebservices-plain-wordmark colored",
};

function SkillGroup({ title, items, delay = 0 }: SkillGroupProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay }}
      className="space-y-4 rounded-xl border border-amber-900/20 bg-black/30 backdrop-blur-sm p-6 transition-all duration-300 hover:border-amber-800/40 hover:bg-black/40"
    >
      <p className="text-xs font-semibold uppercase tracking-[0.25em] text-amber-300/95">
        {title}
      </p>
      <div className="flex flex-wrap gap-4 sm:gap-5">
        {items.map((item, idx) => (
          <SkillIcon key={item} label={item} delay={delay + idx * 0.05} />
        ))}
      </div>
    </motion.div>
  );
}

type SkillIconProps = {
  label: string;
  delay?: number;
};

function SkillIcon({ label, delay = 0 }: SkillIconProps) {
  const className = DEVICON_CLASS[label];

  // All skills should have icons - if one doesn't, log a warning
  if (!className) {
    console.warn(`No Devicon icon found for: ${label}`);
    // Fallback: show abbreviation
    const abbreviation = getAbbreviation(label);
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.3, delay }}
        whileHover={{ scale: 1.1 }}
        className="flex h-16 w-16 sm:h-20 sm:w-20 items-center justify-center rounded-xl border border-amber-900/60 bg-amber-950/30 backdrop-blur-sm transition-all duration-200 hover:border-amber-800/80 hover:bg-amber-950/40 hover:shadow-lg hover:shadow-amber-900/40"
        title={label}
        aria-label={label}
      >
        <span className="text-lg sm:text-xl font-bold text-amber-300/90">
          {abbreviation}
        </span>
      </motion.div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.3, delay }}
      whileHover={{ scale: 1.1 }}
      className="flex h-16 w-16 sm:h-20 sm:w-20 items-center justify-center rounded-xl border border-amber-900/60 bg-amber-950/30 backdrop-blur-sm transition-all duration-200 hover:border-amber-800/80 hover:bg-amber-950/40 hover:shadow-lg hover:shadow-amber-900/40"
      title={label}
      aria-label={label}
    >
      <i 
        className={className} 
        style={{ 
          fontSize: '2.5rem',
          lineHeight: '1',
          display: 'inline-block'
        }} 
      />
    </motion.div>
  );
}

// Helper to get abbreviation for skills without icons (fallback only)
function getAbbreviation(label: string): string {
  if (label.includes("(")) {
    // For "AWS (Lambda, DynamoDB, S3, EC2)" -> "AWS"
    return label.split("(")[0].trim();
  }
  if (label.includes("/")) {
    // For "HTML/CSS" -> "HC"
    return label
      .split("/")
      .map((word) => word.charAt(0))
      .join("");
  }
  // Get first letters of words
  return label
    .split(" ")
    .map((word) => word.charAt(0).toUpperCase())
    .join("")
    .slice(0, 3);
}


