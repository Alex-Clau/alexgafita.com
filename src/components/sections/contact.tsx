// Contact section with call-to-action icon links

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
        title={<div className="flex flex-wrap items-center gap-3 sm:gap-4">
          {links.map(({href, label, icon: Icon, primary}) => (
            <Button
              key={label}
              asChild
              size="icon"
              className={'size-11 sm:size-12 rounded-md border border-zinc-800 text-stone-400 hover:bg-zinc-900 hover:text-white hover:border-zinc-700 [&_svg]:size-5 transition-colors'}
            >
              <a
                href={href}
                target="_blank"
                rel="noreferrer"
                aria-label={label}
              >
                <Icon
                  size={iconSize}
                  strokeWidth={1.75}
                />
              </a>
            </Button>
          ))}
        </div>}
        description={''}
      />
    </motion.section>
  );
}

