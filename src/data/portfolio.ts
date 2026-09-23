import type {Project, SkillGroup} from '@/types';

export const skillGroups: readonly SkillGroup[] = [
  {
    title: 'App',
    items: ['Spring Boot', 'TypeScript', 'React', 'Java', 'Next.js'],
  },
  {
    title: 'Data & infra',
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
      '3D print shop — ready-made products and prints on request.',
    problem:
      'Needed a real store: sell products, take custom jobs, charge people safely, and not lose order state when someone closes the tab. Then rebrand the whole front.',
    highlights: [
      'Built the shop myself — catalog, custom orders, checkout, order updates.',
      'Postgres with row-level security so people only see their own stuff.',
      'Stripe webhooks decide when an order is paid, not the thank-you page.',
      'Rebranded it and put it live at maketheprint.store.',
    ],
    decisions: [
      {
        title: 'Supabase instead of a custom backend from scratch',
        context:
          'It was mostly me. I needed auth, products, and orders without spending weeks on plumbing before the first sale.',
        rejected: [
          'Write my own API + hosted Postgres — more control, way more setup before anything ships.',
          'Firebase documents — fine for a prototype, messy for pricing, inventory, and order history.',
        ],
        choice:
          'Supabase with Postgres and row-level security. Rules live next to the data.',
        tradeoff:
          'Less control over the server. Faster to get a secure store live.',
        retrospective:
          'RLS was the right call. I should have written down the webhook edge cases the same way from day one.',
      },
      {
        title: 'Stripe webhooks, not “they hit the success page”',
        context:
          'People drop wifi. They close the tab. A success URL is not proof of payment.',
        rejected: [
          'Trust the browser redirect — easy, and wrong.',
          'Poll Stripe from the client — works in demos, races the UI, burns rate limits.',
        ],
        choice:
          'Only move an order forward from verified Stripe webhook events, and make those handlers safe to retry.',
        tradeoff:
          'More work up front than a thank-you page. Orders stay honest.',
        retrospective:
          'I would add a simple place to inspect unmatched events sooner. Retries were fine; the weird ones were hard to find.',
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
      'Chat assistant so farmers can ask about their parcels in plain language.',
    problem:
      'Farmers were not going to learn an admin panel. They needed to ask about parcels in chat, and the answers had to come from real data.',
    highlights: [
      'Backend for parcel lookup, phone linking, and strict message checks.',
      'Regex and validation for the common questions; LLM only when it was unclear.',
      'Docker Compose on an AWS EC2 box for the demo.',
      'Small frontend just to show the message flow while the API did the work.',
    ],
    decisions: [
      {
        title: 'Regex first, LLM second',
        context:
          'Most questions were the same parcel lookups. Sending everything to an LLM would cost more and make bad answers harder to catch.',
        rejected: [
          'LLM on every message — nicer chat, worse control, worse cost.',
          'Only forms — safe for me, useless for them.',
        ],
        choice:
          'Handle the common intents with validation and regex. Hand the weird ones to an LLM for context.',
        tradeoff:
          'Less free-form chat at first. Answers I could actually trust on the common path.',
        retrospective:
          'Hybrid was right. I would have tracked miss rates earlier so “ambiguous” was not a guess.',
      },
      {
        title: 'Docker Compose on one EC2',
        context:
          'Short assignment. Needed something I could rebuild and demo, not a platform.',
        rejected: [
          'Managed containers from day one — cleaner later, too much setup for the deadline.',
          'Bare processes on the box — fast to SSH in, painful to rebuild cleanly.',
        ],
        choice:
          'One Compose stack on EC2.',
        tradeoff:
          'Easy to ship and show. Not built for horizontal scale.',
        retrospective:
          'Fine for the brief. For a real product I would split the database and put health checks in front sooner.',
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
      'Hackathon app that rewards people for recycling clothes.',
    problem:
      'Hackathon brief: get people to donate and recycle clothing, with rewards that only go out if the item is actually decent.',
    highlights: [
      'Led a team of six. We took first place.',
      'Node/Express backend, React Native/Expo app, Firebase for data.',
      'Gemini looked at donation photos before rewards went out.',
      'QR codes so redemption stayed tied to a checked item.',
    ],
    decisions: [
      {
        title: 'Gemini instead of training a vision model',
        context:
          'We had hours, not weeks, and rewards without a quality check would have been pointless.',
        rejected: [
          'Train our own classifier — not happening on that clock.',
          'Only manual review — honest, but not a demo judges could poke at.',
        ],
        choice:
          'Send photos to Gemini and gate rewards on the result.',
        tradeoff:
          'Shipped and demoed. Quality depends on an external model.',
        retrospective:
          'For a real product I would keep Gemini as a first pass and put a human check on the borderline ones.',
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
