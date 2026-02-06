// Maps skill names to their corresponding Devicon React components

import type React from "react";
import {
  AmazonwebservicesPlainWordmark,
  ReactnativeOriginalWordmark,
  CplusplusPlain,
  DockerPlain,
  ExpressOriginalWordmark,
  FirebasePlain,
  GitPlain,
  GooglePlain,
  Html5Plain,
  JavaPlain,
  JavascriptPlain,
  MongodbPlain,
  MysqlPlainWordmark,
  NextjsOriginal,
  NodejsOriginalWordmark,
  PostgresqlPlain,
  PythonPlain,
  ReactOriginal,
  TailwindcssPlainWordmark,
  TypescriptPlain, ExpoOriginal, SupabasePlain, AzuresqldatabasePlain,
} from "devicons-react";
import { CreditCard, Workflow, Github, Linkedin, Mail} from 'lucide-react';

export const DEVICON_COMPONENTS: Record<string, React.ComponentType<{ size?: string | number; className?: string }>> = {
  // Programming Languages
  JavaScript: JavascriptPlain,
  TypeScript: TypescriptPlain,
  Java: JavaPlain,
  Python: PythonPlain,
  "C++": CplusplusPlain,
  SQL: AzuresqldatabasePlain,
  "HTML/CSS": Html5Plain,
  // Frameworks
  "Node.js": NodejsOriginalWordmark,
  "Express.js": ExpressOriginalWordmark,
  React: ReactOriginal,
  "Next.js": NextjsOriginal,
  "React Native": ReactnativeOriginalWordmark,
  Expo: ExpoOriginal,
  TailwindCSS: TailwindcssPlainWordmark,
  // Cloud & Devops
  Git: GitPlain,
  Docker: DockerPlain,
  AWS: AmazonwebservicesPlainWordmark,
  // Databases & Tools
  MySQL: MysqlPlainWordmark,
  PostgreSQL: PostgresqlPlain,
  MongoDB: MongodbPlain,
  Firebase: FirebasePlain,
  Supabase: SupabasePlain,
  "Google Gemini API": GooglePlain,
  "Stripe API": CreditCard,
  "CI/CD": Workflow,
};

