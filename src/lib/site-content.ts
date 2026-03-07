import type { LucideIcon } from 'lucide-react';
import { Flag, Layers3, ShieldCheck, Award, Target, ShoppingBag, Radio, UtensilsCrossed, Sparkles, Car } from 'lucide-react';

type IconBlock = {
  stat: string;
  title: string;
  description: string;
  icon: LucideIcon;
  href?: string;
};

type ServiceHighlight = {
  title: string;
  description: string;
  icon: LucideIcon;
};

type SimulatorRoom = {
  name: string;
  capacity: string;
  price: string;
  note: string;
};

type AcademyProgram = {
  name: string;
  duration: string;
  schedule: string;
  notes: string[];
};

type BallRate = {
  type: string;
  badge: string;
  price: string;
  note: string;
};

type MembershipPackage = {
  package: string;
  rate: string;
};

type NewsArticle = {
  slug: string;
  badge: string;
  title: string;
  description: string;
  image: string;
  date: string;
  body: string[];
  gallery?: string[];
};

type ContactDetails = {
  address: string[];
  phone: string;
  email: string;
  facebook: string;
  rangeHours: string;
  exclusiveHours: string;
};

export const rangeHighlights: IconBlock[] = [
  {
    stat: 'COMING SOON',
    title: 'New driving range expansion',
    description: 'Preview the next Msport build—an extended driving arena under construction now, with the full story on our news page.',
    icon: Flag,
    href: '/news/new-driving-range-expansion'
  },
  {
    stat: '68 BAYS',
    title: 'Two-level layout',
    description: 'Practice from 68 spacious, ventilated bays across two levels with real course sightlines.',
    icon: Layers3
  },
  {
    stat: 'SIM ROOMS',
    title: 'TrackMan simulators on site',
    description: 'Reserve private suites with concierge service and real-course visuals before you step onto the range.',
    icon: ShieldCheck,
    href: '/simulators'
  },
  {
    stat: 'THAI PGA',
    title: 'Certified guidance daily',
    description: 'Thailand PGA professionals are on-site for scheduled lessons or quick walk-up coaching.',
    icon: Award
  }
];

export const serviceHighlights: ServiceHighlight[] = [
  {
    title: 'TrackMan analysis room',
    description: 'Step into the lab to capture every club + ball metric before you tee it up outside.',
    icon: Target
  },
  {
    title: 'Professional club fitting',
    description: 'Dial in heads, shafts, and grips with launch data and on-staff fitters.',
    icon: ShoppingBag
  },
  {
    title: 'Multiple pro shops',
    description: 'Stock up on apparel, equipment, and accessories without leaving the range.',
    icon: Radio
  },
  {
    title: 'Food & beverage service',
    description: 'Keep sessions going with coffee, Thai bites, and evening refreshments.',
    icon: UtensilsCrossed
  },
  {
    title: 'Thai massage & spa',
    description: 'Recharge between sessions with in-house therapists and spa rooms.',
    icon: Sparkles
  },
  {
    title: 'M Car Spa + parking',
    description: 'Park over 200 vehicles or book a detailing while you practice.',
    icon: Car
  }
];

export const simulatorRooms: SimulatorRoom[] = [
  { name: 'Room 1', capacity: '1 – 4 guests', price: '500฿ / hour', note: 'Dedicated TrackMan iO bay' },
  { name: 'Room 2', capacity: '1 – 4 guests', price: '500฿ / hour', note: 'Matching layout with lounge seating' },
  { name: 'Room 3 · Performance Bay', capacity: '1 – 6 guests', price: '700฿ / hour', note: 'Expanded hitting zone + on-screen data' }
];

export const academyPrograms: AcademyProgram[] = [
  {
    name: 'Hourly Courses',
    duration: '1 • 12 • 20 hour packs',
    schedule: 'Monday – Sunday • 10:00 AM – 8:00 PM',
    notes: [
      'One-on-one instruction with Thailand PGA coaches',
      'Flexible scheduling with no expiration date',
      'Includes on-course practice sessions with your coach'
    ]
  },
  {
    name: 'Monthly Unlimited',
    duration: 'Evenings • 5:00 PM – 8:00 PM',
    schedule: 'Monday – Friday',
    notes: [
      'Designed for players chasing consistent reps',
      'Coaches provide ongoing, supervised training',
      'Small-group format when multiple students attend'
    ]
  },
  {
    name: 'On-Course Immersion',
    duration: 'Book as add-on',
    schedule: 'Available upon request',
    notes: [
      'Bring academy learnings onto the course with your coach',
      'Focus on scoring strategy, shot selection, and confidence',
      'Additional fee varies by venue and program length'
    ]
  }
];

export const ballRates = {
  standard: [
    { type: 'OLD BALLS', badge: 'Standard rate', price: '฿40 / tray', note: '40 baht per tray • No membership required' },
    { type: 'NEW BALLS', badge: 'Standard rate', price: '฿50 / tray', note: 'Fresh stock upgrade • No membership required' }
  ] as BallRate[],
  memberships: {
    old: [
      { package: '฿2,000 package', rate: '฿37 per tray' },
      { package: '฿4,000 package', rate: '฿36 per tray' },
      { package: '฿12,000 package', rate: '฿34 per tray' }
    ] as MembershipPackage[],
    fresh: [
      { package: '฿3,000 package', rate: '฿48 per tray' },
      { package: '฿5,000 package', rate: '฿46 per tray' },
      { package: '฿15,000 package', rate: '฿40 per tray' }
    ] as MembershipPackage[]
  }
};

export const newsItems: NewsArticle[] = [
  {
    slug: 'srixon-range-balls-now-in-play',
    badge: 'Facilities',
    title: 'New Srixon Range Balls Now in Play',
    description:
      'Fresh Japan-made Srixon range balls now fill every tray, giving clearer feedback, better feel, and a more professional practice session.',
    image: '/images/NEWS/Srixon new balls.png',
    date: '7 February 2026',
    body: [
      'We’re pleased to introduce a full upgrade to our driving range experience with the arrival of brand-new Srixon Range Balls — Made in Japan.',
      'Known for their durability, consistent flight performance, and trusted construction, Srixon range balls are designed to deliver reliable feedback on every strike. Whether you’re working on distance control, refining ball flight, or simply enjoying a session on the range, the difference is immediate.',
      'This latest rollout reflects our continued commitment to maintaining high standards across the facility. Fresh balls mean clearer feedback, better feel, and a more professional practice environment for players of all levels.',
      'The new balls are now fully in circulation across the range.',
      'We invite you to come experience the upgrade for yourself.'
    ]
  },
  {
    slug: 'youth-golf-committee-update',
    badge: 'Development',
    title: 'Youth Golf Committee Update',
    description:
      'The Chiang Mai Provincial Golf Committee reviews the National Youth Championship and outlines continued development plans for young golfers.',
    image: '/images/NEWS/Youth Golf Committee Update.png',
    date: '27 February 2026',
    body: [
      'The Chiang Mai Provincial Golf Committee met to review the recent National Youth Golf Championship and outline the next phase of development.',
      'Discussions focused on strengthening preparation standards and supporting young athletes in upcoming competitions. Plans include organizing fundraising tournaments to assist with competition expenses, as well as establishing structured training programs to continuously develop youth golfers in the province.',
      'M Sport Driving Range was thanked for providing the Golf Simulator facilities for the meeting. Further updates will follow as development plans progress.'
    ]
  },
  {
    slug: 'new-year-2026-appreciation',
    badge: 'Announcements',
    title: 'New Year 2026 Appreciation',
    description:
      'M Energy 2020 thanks project partners for their confidence and collaboration heading into 2026, celebrating shared growth in Chiang Mai.',
    image: '/images/NEWS/New Year/Newyeararticlemain.png',
    date: '24 February 2026',
    body: [
      'As we begin 2026, M Energy 2020 (Caltex Louis Intersection and affiliated locations) extends sincere appreciation to the partners who continue to grow alongside us.',
      'Our project is strengthened by the businesses within it — each contributing to a dynamic and trusted commercial environment in Chiang Mai. Their professionalism, service, and collaboration play an important role in the continued development of the project.',
      'We are grateful for the confidence and long-term partnership shown by every tenant. As we move into the new year, we wish all partners continued growth, steady customer support, new opportunities, and strong health throughout 2026.',
      'Project Partners:',
      '• 66Carwash & Detailing',
      '• KEX Express',
      '• JJ Baby Shop',
      '• Victoria Clinic',
      '• Ningfu Warehouse',
      '• Roastniyom Coffee',
      '• Tyreplus Phongchotnakan',
      '• Pet Mart (Louis Intersection Branch)',
      '• M Garden Fusion Restaurant',
      '• KP Plus (2020) Co., Ltd.',
      '• Extra Home Construction Chiang Mai'
    ],
    gallery: [
      '/images/NEWS/New Year/Newyeararticle01.png',
      '/images/NEWS/New Year/Newyeararticle02.png',
      '/images/NEWS/New Year/Newyeararticle03.png',
      '/images/NEWS/New Year/Newyeararticle04.png',
      '/images/NEWS/New Year/Newyeararticle05.png',
      '/images/NEWS/New Year/Newyeararticle06.png',
      '/images/NEWS/New Year/Newyeararticle07.png',
      '/images/NEWS/New Year/Newyeararticle08.png',
      '/images/NEWS/New Year/Newyeararticle09.png',
      '/images/NEWS/New Year/Newyeararticle10.png'
    ]
  }
];

export const contactDetails: ContactDetails = {
  address: ['M Sport Driving Range', '188 Moo 3, San Klang, San Kamphaeng', 'Chiang Mai 50130, Thailand'],
  phone: '087 419 9199',
  email: 'msportcomplex@hotmail.com',
  facebook: 'https://www.facebook.com/msportdrivingrange',
  rangeHours: 'Driving Range • 8:00 AM – 10:00 PM daily',
  exclusiveHours: 'M Exclusive Room • 8:00 AM – 11:00 PM daily'
};

export type { IconBlock, ServiceHighlight, SimulatorRoom, AcademyProgram, BallRate, MembershipPackage, NewsArticle, ContactDetails };
