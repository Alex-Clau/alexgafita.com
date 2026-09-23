'use client';

import {motion} from 'framer-motion';
import {SectionHeader} from '@/components/shared/SectionHeader';
import {fadeScaleDownVariants, staggerContainer} from '@/lib/animations/variants';
import {
  scrollVariantsProps,
  defaultViewport,
  getOptimizedTransition,
} from '@/lib/animations/transitions';

const journeyItems: Array<{
  role: string;
  company: string;
  period: string;
  location: string;
  description: string;
  skills: readonly string[];
}> = [
  {
    role: 'Junior Software Engineer',
    company: 'Moonlysoft',
    period: 'May 2026 – Present',
    location: 'Cluj-Napoca · Hybrid',
    description:
      'Stayed on after the internship as a full-stack developer. I work hands-on in a React and Spring Boot product, take part in architectural decisions, and join the client meetings. The role keeps teaching me the backend, how the project is planned, and how to automate more of the work with AI.',
    skills: ['React', 'TypeScript', 'Spring Boot', 'Java'],
  },
  {
    role: 'Software Engineer Intern',
    company: 'Moonlysoft',
    period: 'Feb 2026 – Apr 2026',
    location: 'Remote',
    description:
      'Shipped full-stack features in the same React and Spring Boot product, from REST APIs to the interface, inside an agile team.',
    skills: ['React', 'TypeScript', 'Spring Boot', 'Java'],
  },
  {
    role: 'Freelance Web Developer',
    company: 'MakeThePrint',
    period: 'Jan 2025 – Present',
    location: 'Remote',
    description:
      'Built the store for a custom 3D-printing business, and brought the public site in line with the rebrand.',
    skills: ['Next.js', 'TypeScript', 'Supabase', 'Stripe'],
  },
];

export function CareerJourney() {
  return (
    <section
      id="journey"
      className="w-full space-y-8 sm:space-y-10 md:space-y-12 relative z-10"
      aria-labelledby="journey-heading"
    >
      <SectionHeader
        title="Experience"
        description="Full-stack at Moonlysoft since the internship, with more of the work moving into the backend, and the store I still run on the side."
        className="text-center"
      />

      <motion.div
        className="relative mt-2 sm:mt-4 space-y-8 sm:space-y-10 md:space-y-14 pl-6 sm:pl-7 md:pl-8"
        variants={staggerContainer}
        {...scrollVariantsProps}
      >
        <motion.div
          className="pointer-events-none absolute left-1.5 sm:left-2 top-2 bottom-8 w-[2px] rounded-full bg-gradient-to-b from-stone-500 to-transparent origin-top"
          initial={{scaleY: 0}}
          whileInView={{scaleY: 1}}
          viewport={defaultViewport}
          transition={getOptimizedTransition({duration: 0.9})}
          aria-hidden="true"
        />
        {journeyItems.map((item) => (
          <motion.article
            key={`${item.role}-${item.company}`}
            className="relative z-10"
            variants={fadeScaleDownVariants}
          >
            <div className="absolute -left-1 sm:-left-1.5 top-2 sm:top-2.5 h-3 w-3 rounded-full border border-stone-200/80 bg-stone-100 shadow-[0_0_0_3px_rgba(15,23,42,0.9)]"/>
            <div className="ml-4 sm:ml-5 md:ml-6">
              <div className="grid gap-3 sm:gap-4 md:gap-8 lg:gap-10 grid-cols-1 md:grid-cols-[280px_1fr] lg:grid-cols-[320px_1fr] items-start">
                <div>
                  <h3 className="text-lg sm:text-xl md:text-2xl font-semibold text-white">
                    {item.role}
                  </h3>
                  <p className="mt-0.5 text-sm sm:text-base text-stone-200/85">
                    {item.company}
                  </p>
                  <p className="mt-1 text-[11px] sm:text-xs text-stone-400/90 uppercase tracking-wide">
                    {item.period} · {item.location}
                  </p>
                </div>
                <div className="max-w-2xl space-y-2 ">
                  <p className="text-sm sm:text-base text-stone-200/85 leading-relaxed">
                    {item.description}
                  </p>
                  {item.skills.length > 0 && (
                    <div className="flex flex-wrap gap-1.5">
                      {item.skills.map((skill) => (
                        <span
                          key={skill}
                          className="inline-flex items-center rounded-full border border-stone-700 bg-stone-900/70 px-2 py-0.5 text-xs text-stone-200/85"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            </div>
          </motion.article>
        ))}
      </motion.div>
    </section>
  );
}

