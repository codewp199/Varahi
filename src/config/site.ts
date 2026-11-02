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

export type ConceptLayout = 'retail' | 'grocery' | 'appointments';

export interface Concept {
  /** Shown as a prominent badge. Keep "Illustrative concept" or "Concept". */
  label: 'Illustrative concept' | 'Concept';
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

  /** Working brand name. Not yet confirmed as the public or legal name. */
  name: 'Varahi',
  /** Shown in the draft banner and footer while the name is unconfirmed. */
  nameStatus: 'working name',

  /** Used in the browser tab, search results and social previews. */
  title: 'Varahi — Websites and digital setup for independent local businesses',
  description:
    'Varahi (working name) is a four-founder team in the Peoria, Illinois area helping independent local businesses with clear, mobile-friendly websites and practical digital setup. Draft preview.',

  /** Initial service-area hypothesis — not a registered address. */
  serviceArea: 'Peoria, Illinois',

  contact: {
    /** PLACEHOLDER — replace with an approved, monitored inbox. */
    email: 'hello@example.com',
    emailSubject: 'Project conversation',
  },

  /** PLACEHOLDER — none supplied. Add { label, href } entries once approved. */
  social: [] as SocialLink[],
};

export const navigation: NavItem[] = [
  { label: 'Who we serve', href: '#who-we-serve' },
  { label: 'Services', href: '#services' },
  { label: 'Approach', href: '#approach' },
  { label: 'Concepts', href: '#concepts' },
  { label: 'Team', href: '#team' },
];

/* ---------- Hero ----------------------------------------------------------- */

export const hero = {
  eyebrow: 'Web & digital services for local businesses',
  headline: 'A clear online presence that fits how your business already works.',
  lead:
    'Customers often can’t find your hours, menu, products or the easiest way to reach you. Varahi is a small founding team that helps independent businesses fix that — choosing the right tools, setting them up properly, and handing everything over in plain language.',
  primaryCta: { label: 'Discuss a project', href: '#contact' },
  secondaryCta: { label: 'Explore services', href: '#services' },
};

/* ---------- Who we serve --------------------------------------------------- */

export const audience = {
  heading: 'Starting with independent businesses in and around Peoria.',
  intro:
    'Peoria is our initial focus area while we learn what local owners need most. We are talking with several types of business before choosing where to concentrate — so this list is a starting point, not a fixed niche.',
  segments: [
    {
      title: 'Independent retailers',
      description: 'Shops that want products, hours and location to be easy to find on a phone.',
    },
    {
      title: 'Grocery & specialty food',
      description: 'Stores where weekly specials, pickup details and store information change often.',
    },
    {
      title: 'Restaurants',
      description: 'Places where menus, hours and ordering or reservation paths need to be current.',
    },
    {
      title: 'Appointment & inquiry-based services',
      description: 'Smaller service businesses that run on bookings, quotes or questions from customers.',
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
    title: 'Business websites',
    summary:
      'A mobile-friendly site with the essentials: what you offer, where you are, when you’re open and how to get in touch.',
    includes: ['Mobile-first layout', 'Basic search metadata', 'Accessibility checks'],
    status: 'core',
  },
  {
    title: 'Product & service presentation',
    summary:
      'Menus, product ranges or service lists organized so customers can understand them quickly.',
    includes: ['Content structure', 'Clear page copy', 'Photo guidance'],
    status: 'core',
  },
  {
    title: 'Contact & inquiry paths',
    summary:
      'Simple, reliable ways for customers to call, find you on a map, or send a question.',
    includes: ['Click-to-call', 'Map & directions', 'Inquiry options'],
    status: 'core',
  },
  {
    title: 'Booking & ordering platform setup',
    summary:
      'Help choosing and configuring an existing booking, ordering or commerce platform when your workflow supports one.',
    includes: ['Platform comparison', 'Configuration', 'Workflow testing'],
    status: 'case-by-case',
  },
  {
    title: 'Website care',
    summary:
      'Optional, separately agreed help after launch: content updates, routine checks and small improvements.',
    includes: ['Content updates', 'Link & form checks', 'Small fixes'],
    status: 'core',
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

/* ---------- Concept work --------------------------------------------------- */

export const conceptsIntro = {
  heading: 'Illustrative concepts',
  intro:
    'These are original design explorations for fictional businesses, made to show how we think about structure and priorities. They are not client projects and no real business is depicted.',
};

export const concepts: Concept[] = [
  {
    label: 'Illustrative concept',
    businessType: 'Independent retailer',
    summary:
      'A mobile-first storefront page that puts featured products, opening hours and directions within a thumb’s reach.',
    explores: ['Featured products', 'Hours & directions', 'Call the shop'],
    layout: 'retail',
    imageDescription:
      'Drawn phone mockup of a fictional shop homepage with a featured product banner, a product grid and an hours panel.',
  },
  {
    label: 'Illustrative concept',
    businessType: 'Specialty food store',
    summary:
      'A weekly-specials layout that is easy for staff to update, with clear pickup information for customers.',
    explores: ['Weekly specials', 'Pickup details', 'Owner-editable content'],
    layout: 'grocery',
    imageDescription:
      'Drawn phone mockup of a fictional food store page with a specials list, price tags and a pickup information card.',
  },
  {
    label: 'Illustrative concept',
    businessType: 'Appointment-based service',
    summary:
      'A calm services page with plain-language descriptions and a single path to request or book a time.',
    explores: ['Service descriptions', 'Booking path (not connected)', 'FAQs'],
    layout: 'appointments',
    imageDescription:
      'Drawn phone mockup of a fictional service business page with a services list and a booking button placeholder.',
  },
];

/* ---------- Team ----------------------------------------------------------- */

export const teamIntro = {
  heading: 'Four founders, working with you directly.',
  intro:
    'Varahi is run by four co-founders who each lead an area of the work. Full profiles will be added once each founder has approved their details.',
};

/**
 * Four founder cards. Only one role is confirmed so far.
 * Empty strings are shown as "pending" (name/role) or hidden (bio/link).
 */
export const founders: Founder[] = [
  { name: '', role: 'Product & Engineering Lead', bio: '', link: '' },
  { name: '', role: '', bio: '', link: '' },
  { name: '', role: '', bio: '', link: '' },
  { name: '', role: '', bio: '', link: '' },
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
