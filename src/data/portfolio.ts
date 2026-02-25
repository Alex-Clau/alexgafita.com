import type {Project, Skills} from '@/types';

export const skills: Skills = {
  programmingLanguages: [
    "JavaScript",
    "TypeScript",
    "Java",
    "Python",
    "C++",
    "SQL",
    "HTML/CSS",
  ],
  frameworksLibraries: [
    "React",
    "Next.js",
    "Node.js",
    "Express.js",
    "React Native",
    "Expo",
    "TailwindCSS",
  ],
  cloudDevops: [
    "Git",
    "Docker",
    "AWS",
    "CI/CD"
  ],
  databasesTools: [
    "PostgreSQL",
    "MySQL",
    "MongoDB",
    "Firebase",
    "Supabase",
    "Google Gemini API",
    "Stripe API",
  ],
};

export const projects: Project[] = [
  {
    slug: "farmer-parcel-assistant",
    name: "Farmer Parcel Assistant",
    href: "https://github.com/Alex-Clau/FarmerParcelAssistant-CO2ANGELS",
    image: "/projectIcons/farmerAssistant.png",
    description: "Chat-based assistant that helps farmers get information about their parcels.",
    highlights: [
      "Designed a conversational backend system enabling complex parcel tracking for farmers at an AgriTech startup.",
      "Containerized the application via Docker Compose to deploy the application on an AWS EC2 server.",
      "Built a Node.js API with REST API design, strict message validation, unit tests and automated phone linking, using regex for intent classification and optional LLM context for complex request interpretation.",
      "Integrated a minimal frontend interface to visualize message flow and demonstrate the backend's core capabilities."
    ],
    stack: ["JavaScript", "Node.js", "Docker", "React", "Express.js", "PostgreSQL", "TailwindCSS"],
  },
  {
    slug: "make-the-print",
    name: "MakeThePrint",
    href: "https://github.com/Alex-Clau/MakeThePrint-Website",
    image: "/projectIcons/makeThePrint.png",
    description:
      "E-commerce store for 3D printable custom products.",
    highlights: [
      "Built a full-stack e-commerce platform with product management, checkout, and real-time order updates.",
      "Developed the application using Next.js to ensure high-performance SSR and optimized SEO for maximum visibility.",
      "Engineered a PostgreSQL backend with Row Level Security, strict TypeScript validation and automated order processing, using Stripe Webhooks for safe transactions and algorithms for product pricing logic.",
      "Designed a professional, intuitive UI via Tailwind and Framer Motion to ensure a user-friendly shopping experience.",
    ],
    stack: ["TypeScript", "Next.js", "Stripe", "TailwindCSS", "Supabase"],
  },
  {
    slug: "eco-rewards",
    name: "Eco Rewards",
    href: "https://github.com/Alex-Clau/Hackathon",
    image: "/projectIcons/hackathonApp.png",
    description:
      "Mobile app that gamifies fashion by rewarding users for recycling clothing.",
    highlights: [
      "Led a 6-member hackathon team to deliver the first place mobile solution for donating and recycling clothing.",
      "Designed the full-stack system, using Node.js/Express as backend, React Native/Expo as frontend and Firebase.",
      "Integrated Google Gemini API to perform AI-based quality assessment of donated clothing items.",
      "Implemented QR code generation and verification for secure offer redemption, demonstrating full-stack security.",
    ],
    stack: [
      "JavaScript", "Node.js", "Expo", "Express.js", "NativeWindCSS", "Firebase", "Google Gemini API",
    ],
  },
];


