import type {Project, SkillGroup} from '@/types';

export const skillGroups: readonly SkillGroup[] = [
  {
    title: 'Application',
    items: ['Spring Boot', 'TypeScript', 'React', 'Java', 'Next.js'],
  },
  {
    title: 'Data & infrastructure',
    items: ['Supabase', 'PostgreSQL', 'Docker', 'AWS'],
  },
  {
    title: 'Integrations',
    items: ['Stripe', 'Oblio', 'Resend'],
  },
  {
    title: 'Production',
    items: ['Sentry', 'UptimeRobot', 'Playwright'],
  },
  {
    title: 'AI tooling',
    items: ['MCP', 'Rules', 'Skills'],
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
      'E-commerce store for ready-made 3D prints and custom print requests.',
    problem:
      'The business needed one system for catalog sales, custom print requests, secure checkout, and reliable order state after payment, followed by a full rebrand of the public storefront.',
    highlights: [
      'Built the store end to end: catalog, custom orders, checkout, and order updates.',
      'Used PostgreSQL with row-level security so accounts only access their own records.',
      'Advanced order state from verified Stripe webhook events rather than browser redirects.',
      'Rebranded and launched the live storefront at maketheprint.store.',
    ],
    decisions: [
      {
        title: 'Supabase with row-level security',
        context:
          'A solo-maintained store needed authentication, product data, and order rules without a long custom backend setup before the first sale.',
        rejected: [
          'Custom API with managed Postgres: more control, but much more setup before launch.',
          'Firebase documents: faster to start, weaker relational constraints for pricing, inventory, and order history.',
        ],
        choice:
          'PostgreSQL through Supabase with row-level security, keeping product and order rules next to the data.',
        tradeoff:
          'Less control over the server process in exchange for shipping a secure storefront sooner.',
        retrospective:
          'Row-level security held up well. Webhook edge cases should have been documented with the same care from the start.',
      },
      {
        title: 'Stripe webhooks for payment confirmation',
        context:
          'Orders could not be marked paid based only on a success page. Dropped connections and abandoned tabs were expected.',
        rejected: [
          'Trust the client redirect as payment proof: simple, but incorrect when the browser never returns.',
          'Poll Stripe from the client after checkout: workable in demos, but races the UI and wastes rate limits.',
        ],
        choice:
          'Advance order state only from verified Stripe webhook events, with idempotent handlers for retries.',
        tradeoff:
          'More implementation work than a thank-you page, with more reliable order state.',
        retrospective:
          'A view for unmatched webhook events would have made the rare failure cases easier to inspect.',
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
      'Chat assistant that helps farmers get information about their parcels.',
    problem:
      'An AgriTech team needed farmers to ask about parcels in plain language, without a form-heavy admin tool, while keeping answers grounded in real parcel data.',
    highlights: [
      'Built a conversational backend for parcel lookup, phone linking, and message validation.',
      'Handled common intents with validation and regex, and used LLM context only for ambiguous requests.',
      'Deployed the stack with Docker Compose on AWS EC2.',
      'Added a lightweight frontend to visualize message flow while the API handled the core work.',
    ],
    decisions: [
      {
        title: 'Regex first, LLM second',
        context:
          'Most questions repeated a small set of parcel lookups. Routing every message through an LLM raised cost and made incorrect answers harder to control.',
        rejected: [
          'LLM on every message: more natural language coverage, less predictability and higher cost.',
          'Forms only: safer for the backend, poor fit for farmers who needed chat.',
        ],
        choice:
          'Classify common intents with validation and regex, and pass ambiguous requests to an LLM for context.',
        tradeoff:
          'Less open-ended coverage early on, with more predictable answers on the common path.',
        retrospective:
          'The hybrid approach was right. Intent miss rates should have been tracked earlier to tune what counted as ambiguous.',
      },
      {
        title: 'Docker Compose on a single EC2 host',
        context:
          'The assignment needed a reproducible demo under a short delivery window, not a multi-service platform.',
        rejected: [
          'Managed containers from day one: cleaner operations later, more setup than the brief allowed.',
          'Bare processes on the host: fast to start, harder to rebuild cleanly.',
        ],
        choice:
          'Ship the API and dependencies as one Docker Compose stack on EC2.',
        tradeoff:
          'Simple to deploy and demo, with less horizontal scale than a managed container platform.',
        retrospective:
          'Compose was appropriate for the assignment. A longer-lived product would need the data store split out sooner, with health checks in front.',
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
      'Mobile app that rewards users for recycling clothing.',
    problem:
      'A hackathon brief called for a way to encourage clothing donation and recycling, with rewards issued only after a quality check.',
    highlights: [
      'Led a six-person team to first place with a full-stack mobile flow for donation and rewards.',
      'Used Node.js and Express on the backend, React Native and Expo on the client, and Firebase for data.',
      'Integrated Google Gemini to assess donated clothing quality before rewards were issued.',
      'Implemented QR generation and verification so offer redemption stayed tied to a checked item.',
    ],
    decisions: [
      {
        title: 'Gemini for quality assessment',
        context:
          'Rewards only made sense with a quality gate, and the team had hours rather than weeks to ship a usable demo.',
        rejected: [
          'Train a custom classifier: too slow for the hackathon timeline.',
          'Manual review only: workable in principle, weak as an interactive demo.',
        ],
        choice:
          'Send donation photos through Google Gemini and gate rewards on the model response.',
        tradeoff:
          'Faster to ship and demo, with quality judgments dependent on an external model.',
        retrospective:
          'For a production version, Gemini would stay as a first pass, with human review for borderline scores before rewards are issued.',
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
