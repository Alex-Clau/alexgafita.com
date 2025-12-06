/**
 * Type definitions
 * Centralized type definitions for the portfolio
 */

import { ReactNode } from 'react';

// Portfolio types
export type Project = {
  readonly slug: string;
  readonly name: string;
  readonly href: string;
  readonly image: string;
  readonly description: string;
  readonly highlights: readonly string[];
  readonly stack: readonly string[];
  readonly languages: readonly string[];
  readonly frameworks: readonly string[];
  readonly infrastructure: readonly string[];
};

export type Skills = {
  readonly languages: readonly string[];
  readonly frameworks: readonly string[];
  readonly tools: readonly string[];
};

// Component types
export type CardVariant = 'hero' | 'project' | 'contact' | 'skill';
export type ButtonVariant = 'primary' | 'outline';

export interface SectionHeaderProps {
  readonly title: string;
  readonly description: string;
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

