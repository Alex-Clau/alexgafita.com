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
      'Got hired after the internship. Same React and Spring Boot product, but now I own more of the features, help with architecture calls, join client meetings, and spend a lot of time learning how this team actually ships.',
    skills: ['React', 'TypeScript', 'Spring Boot', 'Java'],
  },
  {
    role: 'Software Engineer Intern',
    company: 'Moonlysoft',
    period: 'Feb 2026 – Apr 2026',
    location: 'Remote',
    description:
      'Built features across the stack — APIs on one side, UI on the other. That work is what got me the full-time role.',
    skills: ['React', 'TypeScript', 'Spring Boot', 'Java'],
  },
  {
    role: 'Freelance Web Developer',
    company: 'maketheprint',
    period: 'Jan 2025 – Present',
    location: 'Remote',
    description:
      'Built the shop at maketheprint.store and still run it — products, custom orders, Stripe, and the rebrand.',
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
        description="Intern to full-time at Moonlysoft, plus the store I keep on the side."
        className="text-center"
      />

      <motion.div
        className="relative mt-2 sm:mt-4 space-y-8 sm:space-y-10 md:space-y-14 pl-6 sm:pl-7 md:pl-8"
        variants={staggerContainer}
        {...scrollVariantsProps}
      >
        <motion.div
          className="pointer-events-none absolute left-1.5 sm:left-2 top-2 bottom-8 w-[2px] rounded-full bg-gradient-to-b from-primary to-transparent origin-top"
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
            <div className="absolute -left-1 sm:-left-1.5 top-2 sm:top-2.5 h-3 w-3 rounded-full border border-primary bg-primary shadow-[0_0_0_3px_rgba(46,52,64,0.95)]"/>
            <div className="ml-4 sm:ml-5 md:ml-6">
              <div className="grid gap-3 sm:gap-4 md:gap-8 lg:gap-10 grid-cols-1 md:grid-cols-[280px_1fr] lg:grid-cols-[320px_1fr] items-start">
                <div>
                  <h3 className="text-lg sm:text-xl md:text-2xl font-semibold text-heading">
                    {item.role}
                  </h3>
                  <p className="mt-0.5 text-sm sm:text-base text-foreground">
                    {item.company}
                  </p>
                  <p className="mt-1 text-[11px] sm:text-xs text-muted-foreground uppercase tracking-wide">
                    {item.period} · {item.location}
                  </p>
                </div>
                <div className="max-w-2xl space-y-2 ">
                  <p className="text-sm sm:text-base text-foreground leading-relaxed">
                    {item.description}
                  </p>
                  {item.skills.length > 0 && (
                    <div className="flex flex-wrap gap-1.5">
                      {item.skills.map((skill) => (
                        <span
                          key={skill}
                          className="inline-flex items-center border border-border bg-surface/70 px-2 py-0.5 text-xs text-foreground"
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

