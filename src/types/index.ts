// Centralized type definitions for the portfolio

import {JSX, ReactNode} from 'react';

// Portfolio types
export type Project = {
  readonly slug: string;
  readonly name: string;
  readonly href?: string;
  readonly linkLabel?: string;
  readonly image: string;
  readonly imageFit?: 'cover' | 'contain';
  readonly description: string;
  readonly highlights: readonly string[];
  readonly stack: readonly string[];
};

export type SkillGroup = {
  readonly title: string;
  readonly items: readonly string[];
};

// Component types
export type CardVariant = 'hero' | 'project' | 'contact' | 'skill';
export type ButtonVariant = 'primary' | 'outline';

export interface SectionHeaderProps {
  readonly title: string | JSX.Element;
  readonly description?: ReactNode;
  readonly className?: string;
}

export interface AnimatedCardProps {
  readonly children: ReactNode;
  readonly variant?: CardVariant;
  readonly className?: string;
  readonly hover?: boolean;
}

export interface GradientButtonProps {
  readonly children: ReactNode;
  readonly href: string;
  readonly variant?: ButtonVariant;
  readonly external?: boolean;
  readonly className?: string;
}

