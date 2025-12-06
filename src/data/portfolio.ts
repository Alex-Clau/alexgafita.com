export const skills = {
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
    "React",
    "Next.js",
    "Node.js",
    "Express.js",
    "TailwindCSS"
  ],
  tools: [
    "Git",
    "Docker",
    "Firebase",
    "MongoDB",
    "MySQL",
    "Google Gemini API",
    "AWS (Lambda, DynamoDB, S3, EC2)",
  ],
};

export type Project = {
  slug: string;
  name: string;
  href: string;
  image: string;
  description: string;
  highlights: string[];
  stack: string[];
  languages: string[];
  frameworks: string[];
  infrastructure: string[];
};

export const projects: Project[] = [
  {
    slug: "make-the-print",
    name: "MakeThePrint – 3D Models Online Store",
    href: "https://github.com/Alex-Clau/MakeThePrint-Website",
    image: "/logoMakeThePrint.png",
    description:
      "Modern 3D model marketplace where users can browse, filter, and order printable models, with an admin panel for managing the catalog and processing orders.",
    highlights: [
      "Responsive Tailwind UI with favorites, reviews, and role-based admin dashboard.",
      "Cloudinary integration for asset management and EmailJS-powered order flow.",
      "Optimized for Core Web Vitals (LCP < 1.1s, INP < 100ms).",
    ],
    // FIXED: All stack strings match the DEVICON_COMPONENTS keys
    stack: ["React", "TypeScript", "Firebase", "TailwindCSS", "HTML/CSS"],
    languages: ["TypeScript", "JavaScript"],
    frameworks: ["React", "TailwindCSS"],
    infrastructure: ["Firebase", "HTML/CSS"],
  },
  {
    slug: "eco-rewards",
    name: "Eco Rewards – Sustainable Fashion App",
    href: "https://github.com/Alex-Clau/Hackathon",
    image: "/logoHackathon.png",
    description:
      "Award-winning hackathon project with a mobile app that rewards sustainable fashion choices and an admin dashboard used by brands and NGOs.",
    highlights: [
      "React Native + Expo app with Firebase Auth and gamified rewards.",
      "Node.js + Express backend with role-based admin, brand management, and QR flows.",
      "Google Gemini integration for clothing quality assessment and impact dashboards.",
    ],
    stack: [
      "React Native",
      "React",
      "Firebase",
      "Node.js",
      "Express.js",
      "TailwindCSS",
      "Google Gemini API",
    ],
    languages: ["TypeScript", "JavaScript"],
    frameworks: ["React Native", "Express.js", "TailwindCSS"],
    infrastructure: ["Firebase", "Google Gemini API"],
  },
];


