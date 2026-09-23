// Centralized type definitions for the portfolio

import {JSX, ReactNode} from 'react';

// Portfolio types
export type ProjectDecision = {
  readonly title: string;
  readonly context: string;
  readonly rejected: readonly string[];
  readonly choice: string;
  readonly tradeoff: string;
};

export type Project = {
  readonly slug: string;
  readonly name: string;
  readonly href?: string;
  readonly linkLabel?: string;
  readonly image: string;
  readonly imageFit?: 'cover' | 'contain';
  readonly description: string;
  readonly problem: string;
  readonly highlights: readonly string[];
  readonly decisions?: readonly ProjectDecision[];
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

