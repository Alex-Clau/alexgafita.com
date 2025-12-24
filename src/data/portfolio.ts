import type { Project, Skills } from '@/types';

export const skills: Skills = {
  languages: [
    "JavaScript",
    "TypeScript",
    "Python",
    "Java",
    "C++",
    "SQL",
    "HTML/CSS",
  ],
  frameworks: [
    "Next.js",
    "React",
    "Node.js",
    "Express.js",
    "React Native",
    "TailwindCSS",
  ],
  cloudDevops: [
    "AWS",
    "Git",
    "Docker",
  ],
  databasesTools: [
    "Firebase",
    "MongoDB",
    "MySQL",
    "Google Gemini API",
  ],
};

export const projects: Project[] = [
  {
    slug: "portfolio",
    name: "Portfolio Site",
    href: "https://github.com/Alex-Clau/alexgafita.com",
    image: "/logoPortfolio.png",
    description:
      "Personal portfolio website showcasing software engineering projects and skills.",
    highlights: [
      "Required a highly performant, production-level platform to showcase full-stack engineering proficiency",
      "Developed with Next.js/TypeScript and built an automated CI/CD pipeline (CodePipeline) for deployment.",
      "Engineered a Cloud-Native Serverless architecture, achieving zero-downtime atomic deployments",
      "Integrated CloudFront Functions to optimize routing, ensuring zero cold starts and enhancing global latency",
    ],
    stack: ["Next.js", "TypeScript", "TailwindCSS", "AWS", "Git", "HTML/CSS"],
    languages: ["TypeScript"],
    frameworks: ["Next.js", "TailwindCSS"],
    infrastructure: ["AWS", "Git", "HTML/CSS"],
  },
  {
    slug: "make-the-print",
    name: "MakeThePrint – Online Store",
    href: "https://github.com/Alex-Clau/MakeThePrint-Website",
    image: "/logoMakeThePrint.png",
    description:
      "Online marketplace for 3D printable models where users browse, purchase, and order custom prints.",
    highlights: [
      "Delivered a secure React SPA for a startup to handle products, sales, reviews and content management.",
      "Designed robust Firebase Auth and implemented a role-based admin dashboard for access control.",
      "Optimized the application to achieve superior performance metrics, averaging LCP < 1.1s and INP < 100ms.",
      "Managed content scaling by integrating cloud storage services with Cloudinary and order processing via EmailJS.",
    ],
    // FIXED: All stack strings match the DEVICON_COMPONENTS keys
    stack: ["React", "JavaScript", "Firebase", "TailwindCSS", "Git", "HTML/CSS"],
    languages: ["JavaScript"],
    frameworks: ["React", "TailwindCSS"],
    infrastructure: ["Firebase", "Git", "HTML/CSS"],
  },
  {
    slug: "eco-rewards",
    name: "Eco Rewards – Mobile App",
    href: "https://github.com/Alex-Clau/Hackathon",
    image: "/logoHackathon.png",
    description:
      "Mobile app that gamifies sustainable fashion by rewarding users for donating and recycling clothing.",
    highlights: [
      "Led a 6-member collaborative team to deliver an award-winning mobile solution for donating and recycling clothing.",
      "Architected the full-stack system, leveraging Node.js/Express backend and React Native/Expo frontend.",
      "Successfully integrated the Google Gemini API for real-time AI quality assessment and launched the winning solution.",
      "Implemented QR code generation and verification for secure offer redemption, demonstrating full-stack security.",
    ],
    stack: [
      "Expo",
      "Firebase",
      "Node.js",
      "Express.js",
      "TailwindCSS",
      "Git",
      "Google Gemini API",
    ],
    languages: ["TypeScript", "JavaScript"],
    frameworks: ["Expo",   "Express.js", "TailwindCSS"],
    infrastructure: ["Firebase", "Git", "Google Gemini API"],
  },
];


