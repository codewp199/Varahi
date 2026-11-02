/**
 * ─────────────────────────────────────────────────────────────────────────────
 *  VARAHI — SITE CONTENT (single source of truth)
 * ─────────────────────────────────────────────────────────────────────────────
 *  All public copy lives in this file. Components only read from it.
 *  Plain-language instructions: docs/EDITING_GUIDE.md
 *
 *  Accuracy rules (see CLAUDE.md):
 *   • No invented clients, testimonials, logos, case studies or outcomes.
 *   • No founder names, bios or credentials unless the founder supplied them.
 *   • No claim that an LLC or other legal entity has been formed.
 *   • Concept work stays labeled as a concept.
 *   • Integrations are "not connected" unless built and tested.
 *   • Keep `draft: true` until all four founders approve launch.
 * ─────────────────────────────────────────────────────────────────────────────
 */

/* ---------- Types ---------------------------------------------------------- */

export interface NavItem {
  label: string;
  href: string;
}

export interface Segment {
  title: string;
  description: string;
}

export type ServiceStatus = 'core' | 'case-by-case';

export interface Service {
  title: string;
  summary: string;
  includes: string[];
  /** 'core' = part of the candidate first offer; 'case-by-case' = only after discovery. */
  status: ServiceStatus;
}

export interface ApproachStep {
  title: string;
  detail: string;
}

export type ConceptLayout = 'restaurant' | 'cafe' | 'clinic' | 'gaming';

export interface Concept {
  /** A sample design label that makes clear this is a website preview. */
  label: 'Website preview';
  businessType: string;
  summary: string;
  explores: string[];
  layout: ConceptLayout;
  /** Text alternative for the drawn mockup. */
  imageDescription: string;
}

export interface Founder {
  /** Leave '' until the founder approves their public name. */
  name: string;
  /** Leave '' if the role is not yet agreed; the card shows "Role to be confirmed". */
  role: string;
  /** Leave '' until the founder writes and approves it; the field is then hidden. */
  bio: string;
  /** Optional profile link (e.g. LinkedIn). Leave '' to hide. */
  link: string;
}

export interface SocialLink {
  label: string;
  href: string;
}

/* ---------- Site settings -------------------------------------------------- */

export const site = {
  /**
   * DRAFT CONTROL — keep true until the founders approve launch.
   * true  → visible "Draft preview" banner + <meta name="robots" content="noindex, nofollow">
   * false → banner removed and search engines allowed to index (founder approval required)
   */
  draft: true,

  /** Public brand name selected by the founders. This does not imply a registered legal entity. */
  name: 'Varahi',

  /** Used in the browser tab, search results and social previews. */
  title: 'Varahi — Website design and management for local businesses',
  description:
    'Varahi is a four-founder team in the Peoria, Illinois area designing and managing clear, mobile-friendly websites for restaurants, local cafes, small clinics and gaming zones. Draft preview.',

  /** Initial service-area hypothesis — not a registered address. */
  serviceArea: 'Peoria, Illinois',

  contact: {
    email: 'varahi@gmail.com',
    emailSubject: 'Project conversation',
  },

  /** PLACEHOLDER — none supplied. Add { label, href } entries once approved. */
  social: [] as SocialLink[],
};

export const navigation: NavItem[] = [
  { label: 'Who we serve', href: '#who-we-serve' },
  { label: 'Services', href: '#services' },
  { label: 'Approach', href: '#approach' },
  { label: 'Examples', href: '#concepts' },
  { label: 'Team', href: '#team' },
];

/* ---------- Hero ----------------------------------------------------------- */

export const hero = {
  eyebrow: 'Website design & management for local businesses',
  headline: 'Websites that make the next step obvious.',
  lead:
    'Varahi designs and manages clear, mobile-friendly websites for restaurants, local cafes, small clinics and gaming zones — making menus, services, hours, location and the next step easy for customers to find.',
  primaryCta: { label: 'Discuss a project', href: '#contact' },
  secondaryCta: { label: 'Explore services', href: '#services' },
};

/* ---------- Who we serve --------------------------------------------------- */

export const audience = {
  heading: 'Websites for the local businesses people rely on.',
  intro:
    'We are starting with restaurants, local cafes, small clinics and gaming zones in and around Peoria. Each segment needs clear, current information and an easy way for customers to take the next step.',
  segments: [
    {
      title: 'Restaurants',
      description: 'Menus, hours, location and clear links to ordering or reservations.',
    },
    {
      title: 'Local cafes',
      description: 'Coffee, food and atmosphere presented with menus, hours and visit details.',
    },
    {
      title: 'Small clinics',
      description: 'Services, office information, accepted next steps and appointment request paths.',
    },
    {
      title: 'Gaming zones',
      description: 'Games, events, hours, pricing and booking or inquiry information in one place.',
    },
  ] satisfies Segment[],
  problemsHeading: 'Problems we are investigating',
  problems: [
    'Business information that is hard to find or out of date online',
    'Websites that are missing, hard to use on mobile, or hard for the owner to update',
    'Customers calling or messaging for answers that could be online',
    'Uncertainty about which booking, ordering or contact tool actually fits',
  ],
};

/* ---------- Services ------------------------------------------------------- */

export const servicesIntro = {
  heading: 'Practical services, shaped by what each business needs.',
  intro:
    'Our offer is still evolving as we learn from local owners. Core services are where we expect most projects to start; others are scoped case by case, only after discovery shows they fit.',
};

export const services: Service[] = [
  {
    title: 'Website design',
    summary:
      'A mobile-friendly site with the essentials: what you offer, where you are, when you’re open and how to get in touch.',
    includes: ['Mobile-first layout', 'Basic search metadata', 'Accessibility checks'],
    status: 'core',
  },
  {
    title: 'Menus & service pages',
    summary:
      'Menus, product ranges or service lists organized so customers can understand them quickly.',
    includes: ['Content structure', 'Clear page copy', 'Photo guidance'],
    status: 'core',
  },
  {
    title: 'Website management',
    summary:
      'Ongoing content updates and routine checks to keep key pages, links, menus, hours and business details current.',
    includes: ['Content and menu updates', 'Routine link checks', 'Small agreed improvements'],
    status: 'core',
  },
  {
    title: 'Contact & customer pathways',
    summary:
      'Clear ways for customers to call, find you, request an appointment or continue to your existing ordering service.',
    includes: ['Click-to-call and directions', 'Contact and appointment links', 'Ordering links'],
    status: 'core',
  },
  {
    title: 'Booking & ordering setup',
    summary:
      'Help choosing and configuring an existing booking, ordering or commerce platform when your workflow supports one.',
    includes: ['Platform comparison', 'Configuration', 'Workflow testing'],
    status: 'case-by-case',
  },
  {
    title: 'Practical digital workflow support',
    summary:
      'Untangling how inquiries, bookings or orders move through your tools — with proven platforms first, custom work only when needed.',
    includes: ['Workflow review', 'Tool recommendations', 'Owner training'],
    status: 'case-by-case',
  },
];

export const serviceStatusLabels: Record<ServiceStatus, string> = {
  core: 'Core service',
  'case-by-case': 'Scoped after discovery',
};

/* ---------- Approach ------------------------------------------------------- */

export const approachIntro = {
  heading: 'More than handing over a website.',
  intro:
    'We work through your needs with you, recommend tools you can maintain, test the whole workflow, and make sure you are comfortable running it when we step back.',
};

export const approach: ApproachStep[] = [
  {
    title: 'Discovery',
    detail: 'We learn how your business runs today, what customers ask, and what is getting in the way.',
  },
  {
    title: 'Requirements',
    detail: 'We agree in writing what the project includes, what it doesn’t, the timeline and who does what.',
  },
  {
    title: 'Platform choice',
    detail: 'We recommend proven, maintainable tools that fit your budget — custom builds only when nothing suitable exists.',
  },
  {
    title: 'Design & build or setup',
    detail: 'We design and build the site, or configure the chosen platform, with your review at each stage.',
  },
  {
    title: 'Workflow testing',
    detail: 'We test the real customer path — on phones and desktops — from finding you to contacting, booking or ordering.',
  },
  {
    title: 'Owner handoff',
    detail: 'You get the accounts, a plain-language guide and a short walkthrough so you can make everyday changes yourself.',
  },
  {
    title: 'Support',
    detail: 'Optional ongoing help, agreed separately, for updates, questions and improvements over time.',
  },
];

export const principles = [
  'Proven tools before custom code',
  'Platform-neutral recommendations',
  'You own your accounts and content',
  'Clear scope, exclusions and handoff',
];

/* ---------- Sample website previews --------------------------------------- */

export const conceptsIntro = {
  heading: 'Website previews for four local business segments.',
  intro:
    'Explore sample website layouts for the four business segments Varahi serves. Each preview shows how a business can make its most useful information easy to find on a phone.',
};

export const concepts: Concept[] = [
  {
    label: 'Website preview',
    businessType: 'Restaurant website',
    summary:
      'A useful first screen for a neighborhood restaurant, with a short menu, opening hours and direct routes to dine-in or online ordering.',
    explores: ['Menu highlights', 'Hours & directions', 'Ordering link'],
    layout: 'restaurant',
    imageDescription:
      'Sample restaurant website shown on a phone, with a dinner headline, menu items and prices, hours, and an order online button.',
  },
  {
    label: 'Website preview',
    businessType: 'Local cafe website',
    summary:
      'A welcoming cafe page that features signature drinks, a few food favorites, daily hours and the cafe’s location.',
    explores: ['Coffee & food menu', 'Today’s hours', 'Visit details'],
    layout: 'cafe',
    imageDescription:
      'Sample cafe website shown on a phone, with the cafe name, featured latte and pastry, drink list with prices, today’s hours and directions.',
  },
  {
    label: 'Website preview',
    businessType: 'Small clinic website',
    summary:
      'A calm, readable clinic page with an overview of services, office hours and a clear appointment request path.',
    explores: ['Services & office hours', 'Appointment request', 'Location & contact'],
    layout: 'clinic',
    imageDescription:
      'Sample clinic website shown on a phone, with service descriptions, office hours, location details and a request an appointment button.',
  },
  {
    label: 'Website preview',
    businessType: 'Gaming zone website',
    summary:
      'A high-energy venue page that puts games, events, session details and booking information together.',
    explores: ['Games & events', 'Session information', 'Reserve a station'],
    layout: 'gaming',
    imageDescription:
      'Sample gaming zone website shown on a phone, with gaming venue details, weekly events, session information and a reserve a station button.',
  },
];

/* ---------- Team ----------------------------------------------------------- */

export const teamIntro = {
  heading: 'Four founders, working with you directly.',
  intro:
    'Four co-founders are building Varahi together. Individual areas of ownership will develop as the team delivers its first projects.',
};

/**
 * Public names and co-founder roles were supplied by the team. Optional bios and profile links can be added after each founder approves them.
 */
export const founders: Founder[] = [
  { name: 'Bhuvaneshwari', role: 'Co-Founder', bio: '', link: '' },
  { name: 'Koushik', role: 'Co-Founder', bio: '', link: '' },
  { name: 'Lokendra', role: 'Co-Founder', bio: '', link: '' },
  { name: 'Pravalika', role: 'Co-Founder', bio: '', link: '' },
];

/* ---------- Contact -------------------------------------------------------- */

export const contactSection = {
  heading: 'Start with a conversation.',
  intro:
    'Tell us a little about your business and what’s getting in the way. A first conversation is about understanding your situation — not a sales pitch.',
  helpfulHeading: 'Helpful to include',
  helpful: [
    'Your business type and location',
    'What customers find hard today (finding info, contacting you, booking, ordering)',
    'The tools or website you use now, if any',
    'Any timing you’re working toward',
  ],
};
