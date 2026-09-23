import type {Project, SkillGroup} from '@/types';

export const skillGroups: readonly SkillGroup[] = [
  {
    title: 'Application',
    items: ['TypeScript', 'React', 'Spring Boot', 'Java', 'Next.js'],
  },
  {
    title: 'Integrations',
    items: ['Stripe', 'Oblio', 'Resend', 'Supabase'],
  },
  {
    title: 'Production',
    items: ['Playwright', 'Sentry', 'UptimeRobot'],
  },
];

export const projects: Project[] = [
  {
    slug: 'make-the-print',
    name: 'MakeThePrint',
    image: '/projectIcons/makeThePrint.jpg',
    imageFit: 'cover',
    description:
      'Custom 3D-printing store for ready-to-order prints and designs made on request. The storefront has been fully rebranded.',
    highlights: [
      'Built the shop end to end: catalog, custom orders, checkout, and order updates.',
      'Shipped it with Next.js and strict TypeScript, on a PostgreSQL backend with row-level security.',
      'Handled payments with Stripe webhooks and pricing rules so checkout stays consistent.',
      'Replaced the old storefront with the current brand, now live as the public face of the business.',
    ],
    stack: ['TypeScript', 'Next.js', 'Stripe', 'Supabase', 'TailwindCSS'],
  },
  {
    slug: 'farmer-parcel-assistant',
    name: 'Farmer Parcel Assistant',
    href: 'https://github.com/Alex-Clau/FarmerParcelAssistant-CO2ANGELS',
    image: '/projectIcons/farmerAssistant.png',
    description: 'Chat-based assistant that helps farmers get information about their parcels.',
    highlights: [
      'Designed a conversational backend system enabling complex parcel tracking for farmers at an AgriTech startup.',
      'Containerized the application via Docker Compose to deploy the application on an AWS EC2 server.',
      'Built a Node.js API with REST API design, strict message validation, unit tests and automated phone linking, using regex for intent classification and optional LLM context for complex request interpretation.',
      'Integrated a minimal frontend interface to visualize message flow and demonstrate the backend\'s core capabilities.',
    ],
    stack: ['JavaScript', 'Node.js', 'Docker', 'React', 'Express.js', 'PostgreSQL', 'TailwindCSS'],
  },
  {
    slug: 'eco-rewards',
    name: 'Eco Rewards',
    href: 'https://github.com/Alex-Clau/Hackathon',
    image: '/projectIcons/hackathonApp.png',
    description: 'Mobile app that gamifies fashion by rewarding users for recycling clothing.',
    highlights: [
      'Led a 6-member hackathon team to deliver the first place mobile solution for donating and recycling clothing.',
      'Designed the full-stack system, using Node.js/Express as backend, React Native/Expo as frontend and Firebase.',
      'Integrated Google Gemini API to perform AI-based quality assessment of donated clothing items.',
      'Implemented QR code generation and verification for secure offer redemption, demonstrating full-stack security.',
    ],
    stack: [
      'JavaScript',
      'Node.js',
      'Expo',
      'Express.js',
      'NativeWindCSS',
      'Firebase',
      'Google Gemini API',
    ],
  },
];
