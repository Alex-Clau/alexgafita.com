'use client';
import { motion } from 'framer-motion';
import { skills } from "@/data/portfolio";
import { getAbbreviation } from "@/components/stack-badges";
import { getOptimizedTransition, prefersReducedMotion } from "@/lib/motion-utils";

export function SkillsSection() {
  return (
    <section
      id="skills"
      className="space-y-8"
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={getOptimizedTransition({ duration: 0.2 })}
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

      <motion.div
        className="grid gap-8 md:grid-cols-3"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={{
          hidden: {},
          visible: {
            transition: {
              staggerChildren: prefersReducedMotion() ? 0 : 0.03,
              delayChildren: prefersReducedMotion() ? 0 : 0.03
            }
          }
        }}
      >
        <SkillGroup title="Languages" items={skills.languages} />
        <SkillGroup title="Frameworks" items={skills.frameworks} />
        <SkillGroup title="Tools &amp; Infra" items={skills.tools} />
      </motion.div>
    </section>
  );
}

type SkillGroupProps = {
  title: string;
  items: string[];
};

export const DEVICON_CLASS: Record<string, string> = {
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
  "Express.js": "devicon-express-original",
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

function SkillGroup({ title, items }: SkillGroupProps) {
  return (
    <motion.div
      variants={{
        hidden: { opacity: 0, scale: 0.9 },
        visible: {
          opacity: 1,
          scale: 1,
          transition: getOptimizedTransition({ duration: 0.25 })
        }
      }}
      className="group relative space-y-5 rounded-xl border border-amber-900/20 bg-gradient-to-br from-black/40 via-amber-950/15 to-black/40 backdrop-blur-sm p-6 sm:p-7 transition-all duration-300 hover:border-amber-800/50 hover:bg-black/50 hover:shadow-xl hover:shadow-amber-900/30 overflow-hidden"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-amber-950/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

      <div className="relative">
        <p className="text-xs font-semibold uppercase tracking-[0.25em] text-amber-300/95 mb-1">
          {title}
        </p>
        <div className="h-px w-12 bg-gradient-to-r from-amber-600/60 to-transparent" />
      </div>

      <motion.div
        className="relative flex flex-wrap gap-4 sm:gap-5"
        variants={{
          hidden: {},
          visible: {
            transition: {
              staggerChildren: prefersReducedMotion() ? 0 : 0.02,
              delayChildren: prefersReducedMotion() ? 0 : 0.03
            }
          }
        }}
      >
        {items.map((item) => (
          <SkillIcon key={item} label={item} />
        ))}
      </motion.div>
    </motion.div>
  );
}

type SkillIconProps = {
  label: string;
};

function SkillIcon({ label }: SkillIconProps) {
  const className = DEVICON_CLASS[label];

  // All skills should have icons - if one doesn't, log a warning
  if (!className) {
    console.warn(`No Devicon icon found for: ${label}`);
    // Fallback: show abbreviation
    const abbreviation = getAbbreviation(label);
    return (
      <motion.div
        variants={{
          hidden: { opacity: 0, scale: 0 },
          visible: {
            opacity: 1,
            scale: 1,
            transition: getOptimizedTransition({ duration: 0.2 })
          }
        }}
        whileHover={{ scale: 1.15, y: -2, transition: { duration: 0.2 } }}
        className="group/icon relative flex h-16 w-16 sm:h-20 sm:w-20 items-center justify-center rounded-xl border border-amber-900/60 bg-gradient-to-br from-amber-950/30 to-amber-900/20 backdrop-blur-sm transition-all duration-200 hover:border-amber-700/80 hover:bg-amber-950/50 hover:shadow-xl hover:shadow-amber-900/50 hover:shadow-amber-500/30"
        title={label}
        aria-label={label}
      >
        <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-amber-600/0 to-amber-800/0 group-hover/icon:from-amber-600/20 group-hover/icon:to-amber-800/10 transition-all duration-200" />
        <span className="relative text-lg sm:text-xl font-bold text-amber-300/90">
          {abbreviation}
        </span>
      </motion.div>
    );
  }

  return (
    <motion.div
      variants={{
        hidden: { opacity: 0, scale: 0 },
        visible: {
          opacity: 1,
          scale: 1,
          transition: getOptimizedTransition({ duration: 0.2 })
        }
      }}
      whileHover={{ scale: 1.15, y: -2, transition: { duration: 0.2 } }}
      className="group/icon relative flex h-16 w-16 sm:h-20 sm:w-20 items-center justify-center rounded-xl border border-amber-900/60 bg-gradient-to-br from-amber-950/30 to-amber-900/20 backdrop-blur-sm transition-all duration-200 hover:border-amber-700/80 hover:bg-amber-950/50 hover:shadow-xl hover:shadow-amber-900/50 hover:shadow-amber-500/30"
      title={label}
      aria-label={label}
    >
      <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-amber-600/0 to-amber-800/0 group-hover/icon:from-amber-600/20 group-hover/icon:to-amber-800/10 transition-all duration-200" />
      <i
        className={`${className} relative z-10`}
        style={{
          fontSize: '2.75rem',
          lineHeight: '1',
          display: 'inline-block'
        }}
      />
    </motion.div>
  );
}