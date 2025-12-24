// Contact section with call-to-action buttons

'use client';

import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { SectionHeader } from '@/components/shared/SectionHeader';
import { scrollVariantsProps } from '@/lib/animations/transitions';
import { fadeScaleVariants } from '@/lib/animations/variants';

export function ContactSection() {
  return (
    <motion.section
      id="contact"
      variants={fadeScaleVariants}
      {...scrollVariantsProps}
      className="mt-auto w-full space-y-8 sm:space-y-10 md:space-y-12 relative z-10"
    >
      <SectionHeader
        title="Let's build reliable systems"
        description="I'm open to backend-heavy roles and projects focused on APIs, data workflows, and cloud infrastructure."
      />
      
      <div className="flex flex-wrap gap-3 sm:gap-4 justify-start">
          <Button
            asChild
            size="lg"
            className="bg-white text-black hover:bg-stone-200 font-medium border-0 px-6 py-5 sm:px-8 sm:py-6 text-sm sm:text-base"
          >
            <a 
              href="https://github.com/Alex-Clau?tab=repositories"
              target="_blank"
              rel="noreferrer"
            >GitHub</a>
          </Button>
          <Button
            variant="outline"
            size="lg"
            asChild
            className="border border-stone-700 text-stone-300 hover:bg-stone-900 hover:text-white hover:border-stone-600 font-medium px-6 py-5 sm:px-8 sm:py-6 text-sm sm:text-base"
          >
            <a
              href="https://www.linkedin.com/in/alex-gafita"
              target="_blank"
              rel="noreferrer"
            >
              LinkedIn
            </a>
          </Button>
      </div>
    </motion.section>
  );
}

