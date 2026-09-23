import type {Project, SkillGroup} from '@/types';

export const skillGroups: readonly SkillGroup[] = [
  {
    title: 'Core Engineering',
    items: ['Spring Boot', 'TypeScript', 'React', 'Java', 'Next.js'],
  },
  {
    title: 'Data & Infrastructure',
    items: ['Supabase', 'PostgreSQL', 'Docker', 'AWS'],
  },
  {
    title: 'Integrations & Business Logic',
    items: ['Stripe', 'Oblio', 'Resend'],
  },
  {
    title: 'Observability & QA',
    items: ['Sentry', 'UptimeRobot', 'Playwright'],
  },
  {
    title: 'AI & Agentic Workflows',
    items: ['MCP', 'Context Rules', 'Custom Skills'],
  },
];

export const projects: Project[] = [
  {
    slug: 'maketheprint',
    name: 'maketheprint',
    href: 'https://maketheprint.store',
    linkLabel: 'Visit store',
    image: '/projectIcons/makeThePrint.jpg',
    imageFit: 'cover',
    logo: '/projectIcons/maketheprint-icon.png',
    description:
      'Custom 3D-printing store for ready-to-order prints and designs made on request.',
    problem:
      'A print shop needed one system for catalog sales, custom print requests, safe checkout, and order state that stayed correct after payment — then a full rebrand of the public storefront as maketheprint.',
    highlights: [
      'Shipped the store end to end: catalog, custom orders, checkout, and order updates.',
      'Secured product and order data with PostgreSQL row-level security so accounts only see their own records.',
      'Handled Stripe webhooks with idempotent order transitions so payment confirmation, not the browser redirect, advanced order state.',
      'Rebranded and shipped the live storefront at maketheprint.store as the public face of the business.',
    ],
    decisions: [
      {
        title: 'Data layer: Supabase with row-level security',
        context:
          'A solo-maintained store needed auth, product data, and order rules without standing up a custom auth service and admin API first.',
        rejected: [
          'Custom Node API plus a managed Postgres instance — more control, but weeks of auth, migrations, and policy work before the first sale.',
          'Firebase documents for products and orders — faster to start, weaker relational constraints for inventory, pricing, and order history.',
        ],
        choice:
          'PostgreSQL through Supabase with row-level security, keeping product and order rules next to the data.',
        tradeoff:
          'Less control over the server process, in exchange for shipping a secure storefront faster.',
        retrospective:
          'I would write the payment and order policies as explicit ADRs earlier. The RLS model held, but the webhook edge cases deserved the same written treatment from day one.',
      },
      {
        title: 'Checkout: Stripe webhooks over redirect-only confirmation',
        context:
          'Orders could not mark as paid just because a shopper landed on a success page. Network drops and abandoned tabs were expected.',
        rejected: [
          'Trust the client redirect as payment proof — simple, and wrong when the browser never returns.',
          'Poll Stripe from the client after checkout — works for demos, burns rate limits and still races the UI.',
        ],
        choice:
          'Advance order state only from verified Stripe webhook events, with idempotent handlers for retries.',
        tradeoff:
          'Webhook verification, retries, and replay protection cost more up front than a thank-you page.',
        retrospective:
          'I would add a dead-letter view for unmatched events sooner. Most failures were retries; the few that were not were harder to spot without one.',
      },
    ],
    stack: ['TypeScript', 'Next.js', 'Stripe', 'Supabase', 'TailwindCSS'],
  },
  {
    slug: 'farmer-parcel-assistant',
    name: 'Farmer Parcel Assistant',
    href: 'https://github.com/Alex-Clau/FarmerParcelAssistant-CO2ANGELS',
    image: '/projectIcons/farmerAssistant.png',
    description:
      'Chat-based assistant that helps farmers get information about their parcels.',
    problem:
      'An AgriTech team needed farmers to ask about parcels in plain language, without teaching them a form-heavy admin tool, while keeping answers grounded in real parcel data.',
    highlights: [
      'Designed a conversational backend for parcel lookup, phone linking, and strict message validation.',
      'Classified routine intents with validation and regex, and only used LLM context when a request was ambiguous.',
      'Containerized the stack with Docker Compose and deployed it on AWS EC2.',
      'Added a thin frontend so the message flow was visible while the API did the real work.',
    ],
    decisions: [
      {
        title: 'Intent handling: regex first, LLM second',
        context:
          'Most farmer questions repeated a small set of parcel lookups. An always-on LLM path would raise cost and make wrong answers harder to debug.',
        rejected: [
          'Send every message to an LLM — natural, expensive, and hard to guarantee against hallucinated parcel data.',
          'Forms only — safest for the backend, useless for the farmers who needed chat.',
        ],
        choice:
          'Validate and classify common intents with regex and structured handlers; hand ambiguous requests to an LLM for context only.',
        tradeoff:
          'Less open-ended language coverage on day one, in exchange for predictable answers and lower cost on the common path.',
        retrospective:
          'I would log intent miss rates from the start. The hybrid path was right; the tuning of what counted as “ambiguous” needed production traffic sooner.',
      },
      {
        title: 'Deployment: Docker Compose on a single EC2 host',
        context:
          'The assignment needed a reproducible demo environment under a short delivery window, not a multi-service platform.',
        rejected: [
          'Managed containers from day one — cleaner ops later, more setup than the brief allowed.',
          'Bare processes on the host — fastest to SSH in, hardest to rebuild cleanly.',
        ],
        choice:
          'Ship the API and dependencies as one Docker Compose stack on EC2.',
        tradeoff:
          'Simple to deploy and demo, with less horizontal scale than a managed container platform.',
        retrospective:
          'Compose was the right first ship. For a longer-lived product I would split the data store and put a reverse proxy and health checks in front earlier.',
      },
    ],
    stack: ['JavaScript', 'Node.js', 'Docker', 'React', 'Express.js', 'PostgreSQL', 'TailwindCSS'],
  },
  {
    slug: 'eco-rewards',
    name: 'Eco Rewards',
    href: 'https://github.com/Alex-Clau/Hackathon',
    image: '/projectIcons/hackathonApp.png',
    description:
      'Mobile app that gamifies fashion by rewarding users for recycling clothing.',
    problem:
      'A hackathon brief asked for a way to get people to donate and recycle clothing, with a reward loop that still checked item quality before issuing offers.',
    highlights: [
      'Led a six-person team to first place with a full-stack mobile flow for donation and rewards.',
      'Built Node.js and Express on the backend, React Native and Expo on the client, and Firebase for data.',
      'Used Google Gemini to assess donated clothing quality before rewards were issued.',
      'Added QR generation and verification so offer redemption stayed tied to a checked item.',
    ],
    decisions: [
      {
        title: 'Quality checks: Gemini instead of a custom vision model',
        context:
          'Rewards only made sense if donated items passed a quality bar, and the team had hours, not weeks, to ship a demo judges could use.',
        rejected: [
          'Train or fine-tune a custom classifier — too slow for the hackathon clock.',
          'Manual moderator review only — honest, but not a product demo under load.',
        ],
        choice:
          'Send donation photos through Google Gemini and gate rewards on the model response.',
        tradeoff:
          'Faster to ship and demo, with quality judgments that depend on an external model rather than an in-house classifier.',
        retrospective:
          'For a production version I would keep Gemini as a first pass and add a human review queue for borderline scores before rewards leave the system.',
      },
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
