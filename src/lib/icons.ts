// Maps skill names to their corresponding Devicon React components

import type React from "react";
import {
  AmazonwebservicesPlainWordmark,
  ReactnativeOriginalWordmark,
  CplusplusPlain,
  DockerPlain,
  ExpressOriginal,
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
  TypescriptPlain, ExpoOriginal
} from "devicons-react";

export const DEVICON_COMPONENTS: Record<string, React.ComponentType<{ size?: string | number; className?: string }>> = {
  // Languages
  "React Native": ReactnativeOriginalWordmark,
  JavaScript: JavascriptPlain,
  TypeScript: TypescriptPlain,
  Python: PythonPlain,
  Java: JavaPlain,
  "C++": CplusplusPlain,
  SQL: PostgresqlPlain,
  "HTML/CSS": Html5Plain,
  // Frameworks
  React: ReactOriginal,
  "Next.js": NextjsOriginal,
  "Node.js": NodejsOriginalWordmark,
  "Express.js": ExpressOriginal,
  Expo: ExpoOriginal,
  TailwindCSS: TailwindcssPlainWordmark,
  // Tools & Infrastructure
  Git: GitPlain,
  Docker: DockerPlain,
  Firebase: FirebasePlain,
  "Firebase (Firestore, Auth)": FirebasePlain,
  MongoDB: MongodbPlain,
  MySQL: MysqlPlainWordmark,
  "Google Gemini API": GooglePlain,
  "AWS (Lambda, DynamoDB, S3, EC2)": AmazonwebservicesPlainWordmark,
  "AWS (S3, CloudFront, CodePipeline, Lambda, DynamoDB, EC2)": AmazonwebservicesPlainWordmark,
};

