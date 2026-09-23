// Contact section with profile links and a short personal footnote

'use client';

import {motion} from 'framer-motion';
import {Button} from '@/components/ui/button';
import {SectionHeader} from '@/components/shared/SectionHeader';
import {scrollVariantsProps} from '@/lib/animations/transitions';
import {fadeScaleVariants} from '@/lib/animations/variants';
import {Github, Linkedin, Mail, Instagram} from 'lucide-react';

const iconSize = 20;

const links = [
  {
    href: 'https://github.com/Alex-Clau?tab=repositories',
    label: 'GitHub',
    icon: Github,
  },
  {
    href: 'https://www.linkedin.com/in/alex-gafita',
    label: 'LinkedIn',
    icon: Linkedin,
  },
  {
    href: 'mailto:alexgafita47@gmail.com',
    label: 'Email',
    icon: Mail,
  },
  {
    href: 'https://www.instagram.com/alexgafita',
    label: 'Instagram',
    icon: Instagram,
  },
] as const;

export function ContactSection() {
  return (
    <motion.section
      id="contact"
      variants={fadeScaleVariants}
      {...scrollVariantsProps}
      className="mt-auto w-full space-y-8 sm:space-y-10 md:space-y-12 relative z-10"
    >
      <SectionHeader
        title="Get in touch"
        description="GitHub, LinkedIn, or email. Happy to talk about the work above."
      />

      <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4">
        {links.map(({href, label, icon: Icon}) => (
          <Button
            key={label}
            asChild
            size="icon"
            variant="outline"
            className="size-12 sm:size-14 rounded-md border-border text-foreground hover:bg-primary/10 hover:text-primary hover:border-primary [&_svg]:size-5 transition-colors"
          >
            <a
              href={href}
              target={href.startsWith('mailto:') ? undefined : '_blank'}
              rel={href.startsWith('mailto:') ? undefined : 'noreferrer'}
              aria-label={label}
            >
              <Icon size={iconSize} strokeWidth={1.75} />
            </a>
          </Button>
        ))}
      </div>

      <p className="text-center text-xs sm:text-sm text-muted-foreground max-w-lg mx-auto">
        Outside work: DevTalks, second year with the Untold crew, and the gym.
      </p>
    </motion.section>
  );
}
