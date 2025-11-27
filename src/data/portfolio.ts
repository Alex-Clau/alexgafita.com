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
    "TailwindCSS",
    "React Native",
    "NativeWind",
    "Expo",
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
  name: string;
  href: string;
  description: string;
  highlights: string[];
  stack: string[];
};

export const projects: Project[] = [
  {
    name: "MakeThePrint – 3D Models Online Store",
    href: "https://github.com/Alex-Clau/MakeThePrint-Website",
    description:
      "Modern React + Firebase single-page application for a startup 3D model store, focused on fast browsing, search, and frictionless ordering.",
    highlights: [
      "Responsive Tailwind UI with favorites, reviews, and role-based admin dashboard.",
      "Cloudinary integration for asset management and EmailJS-powered order flow.",
      "Optimized for Core Web Vitals (LCP < 1.1s, INP < 100ms).",
    ],
    stack: ["React", "TypeScript", "Firebase", "TailwindCSS", "Cloudinary"],
  },
  {
    name: "Eco Rewards – Sustainable Fashion App",
    href: "https://github.com/Alex-Clau/Hackathon",
    description:
      "Award-winning hackathon project with a mobile app for sustainable fashion and an admin dashboard for brands and NGOs.",
    highlights: [
      "React Native + Expo app with Firebase Auth and gamified rewards.",
      "Node.js + Express backend with role-based admin, brand management, and QR flows.",
      "Google Gemini integration for clothing quality assessment and impact dashboards.",
    ],
    stack: [
      "React Native",
      "Expo",
      "Firebase",
      "Node.js",
      "Express",
      "NativeWind",
      "Google Gemini",
    ],
  },
];


