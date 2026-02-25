import Image from 'next/image';
import Link from 'next/link';
import { ReactNode } from 'react';
import type { LucideIcon } from 'lucide-react';
import {
  Facebook,
  MapPin,
  PhoneCall,
  Mail,
  Clock4,
  Flag,
  Layers3,
  ShieldCheck,
  Award,
  Target,
  ShoppingBag,
  UtensilsCrossed,
  Sparkles,
  Car,
  Radio,
  Users2,
  GraduationCap,
  Megaphone,
  Trophy
} from 'lucide-react';

type SectionHeaderProps = {
  label: string;
  title: ReactNode;
  subtitle?: string;
  align?: 'left' | 'center';
  animated?: boolean;
  subtitleClassName?: string;
};

const SectionHeader = ({
  label,
  title,
  subtitle,
  align = 'center',
  animated = true,
  subtitleClassName
}: SectionHeaderProps) => {
  const alignmentClass = align === 'center' ? 'text-center' : 'text-left';
  const spacingClass = align === 'center' ? 'mb-16' : 'mb-10';
  const labelClass = animated ? 'reveal reveal-down' : '';
  const titleClass = animated ? 'reveal reveal-up reveal-delay-1' : '';
  const subtitleClass = animated ? 'reveal reveal-up reveal-delay-2' : '';
  const subtitleBaseClass = subtitleClassName ?? 'subtitle-accent';

  return (
    <div className={`${alignmentClass} ${spacingClass} space-y-3`}>
      <p className={`section-label ${labelClass}`}>{label}</p>
      <h2 className={`section-title ${titleClass}`}>{title}</h2>
      {subtitle && <p className={`${subtitleBaseClass} ${subtitleClass}`}>{subtitle}</p>}
    </div>
  );
};

type IconBlock = {
  title: string;
  description: string;
  icon: LucideIcon;
};

const rangeHighlights: { stat: string; title: string; description: string; icon: LucideIcon }[] = [
  {
    stat: '388 YARDS',
    title: 'Northern Thailand’s longest range',
    description: 'Stretch shots down a 388-yard field that mirrors the visuals of a real course.',
    icon: Flag
  },
  {
    stat: '68 BAYS',
    title: 'Two-level layout',
    description: 'Practice from 68 spacious, ventilated bays across two levels with real course sightlines.',
    icon: Layers3
  },
  {
    stat: 'TOUR BALLS',
    title: 'TaylorMade & Srixon practice balls',
    description: 'Double-layered balls preserve spin, launch, and feel so your data translates on course.',
    icon: ShieldCheck
  },
  {
    stat: 'THAI PGA',
    title: 'Certified guidance daily',
    description: 'Thailand PGA professionals are on-site for scheduled lessons or quick walk-up coaching.',
    icon: Award
  }
];

const serviceHighlights: IconBlock[] = [
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

const simulatorRooms = [
  { name: 'Room 1', capacity: '1 – 4 guests', price: '500฿ / hour', note: 'Dedicated TrackMan iO bay' },
  { name: 'Room 2', capacity: '1 – 4 guests', price: '500฿ / hour', note: 'Matching layout with lounge seating' },
  { name: 'Room 3 · Performance Bay', capacity: '1 – 6 guests', price: '700฿ / hour', note: 'Expanded hitting zone + on-screen data' }
];

const academyPrograms = [
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

const ballRates = {
  standard: [
    {
      type: 'OLD BALLS',
      badge: 'Standard rate',
      price: '\u0e3f40 / tray',
      note: '40 baht per tray • No membership required'
    },
    {
      type: 'NEW BALLS',
      badge: 'Standard rate',
      price: '\u0e3f50 / tray',
      note: 'Fresh stock upgrade • No membership required'
    }
  ],
  memberships: {
    old: [
      { package: '\u0e3f2,000 package', rate: '37\u0e3f per tray' },
      { package: '\u0e3f4,000 package', rate: '36\u0e3f per tray' },
      { package: '\u0e3f12,000 package', rate: '34\u0e3f per tray' }
    ],
    fresh: [
      { package: '\u0e3f3,000 package', rate: '48\u0e3f per tray' },
      { package: '\u0e3f5,000 package', rate: '46\u0e3f per tray' },
      { package: '\u0e3f15,000 package', rate: '40\u0e3f per tray' }
    ]
  }
};

type NewsCard = IconBlock & { badge: string };

const newsItems: NewsCard[] = [
  {
    badge: 'Announcements',
    title: 'News & Events Hub',
    description: 'Follow M Sport Driving Range on Facebook for public relations updates, announcements, and special programming.',
    icon: Megaphone
  },
  {
    badge: 'Events',
    title: 'Corporate & Community Nights',
    description: 'Plan TrackMan combines, company socials, or league nights with concierge hosts, F&B partners, and live leaderboards.',
    icon: Trophy
  },
  {
    badge: 'Academy',
    title: 'Academy Enrollment Open',
    description: 'Hourly packs and monthly unlimited memberships welcome Thai and international golfers of every age.',
    icon: GraduationCap
  }
];

const contactDetails = {
  address: ['M Sport Driving Range', '188 Moo 3, San Klang, San Kamphaeng', 'Chiang Mai 50130, Thailand'],
  phone: '087 419 9199',
  email: 'msportcomplex@gmail.com',
  facebook: 'https://www.facebook.com/MSportDrivingRange',
  rangeHours: 'Driving Range • 8:00 AM – 10:00 PM daily',
  exclusiveHours: 'M Exclusive Room • 8:00 AM – 11:00 PM daily'
};

const rangeMetrics = [
  { label: 'Range Length', value: '388', detail: 'yards downrange' },
  { label: 'Driving Bays', value: '68', detail: 'two-level lineup' },
  { label: 'Exclusive Rooms', value: '5', detail: 'VVIP suites' }
];

const [rangeLengthFeature, bayLayoutFeature, tourBallFeature, coachingFeature] = rangeHighlights;

export default function HomePage() {
  const [roomOne, roomTwo, performanceBay] = simulatorRooms;

  return (
    <main className="flex min-h-screen flex-col items-center justify-between relative">
      <section
        id="home"
        className="section-anchor relative h-[95vh] min-h-[620px] flex items-center justify-center section-cream w-full overflow-hidden"
      >
        <video
          autoPlay
          loop
          muted
          playsInline
          poster="/images/drivingrangeMSPORT.mp4"
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source src="/images/drivingrangeMSPORT.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-black/45" />

        <div className="relative z-10 text-center px-6 flex flex-col items-center gap-6 max-w-4xl">
          <p className="accent-pill reveal reveal-down">Msport Collective</p>
          <Image
            src="/images/Msport%20logo.png"
            alt="Msport Driving Range logo"
            width={420}
            height={180}
            className="h-28 w-auto reveal reveal-down"
            priority
          />
          <p className="subtitle-accent text-white/80 reveal reveal-up">
            Northern Thailand’s largest and longest driving range lives in Chiang Mai
          </p>
          <h1 className="hero-title text-white reveal reveal-up reveal-delay-1">MSPORT DRIVING RANGE</h1>
          <div className="flex flex-col sm:flex-row gap-4 justify-center reveal reveal-up reveal-delay-2">
            <Link
              href="/shop#trackman"
              className="accent-bg px-10 py-4 rounded-xl font-bold text-lg hover:scale-105 transition-transform duration-300"
            >
              Book a Sim Bay
            </Link>
            <Link
              href="tel:+66874199199"
              className="bg-transparent border-2 border-white text-white px-10 py-4 rounded-xl font-bold text-lg hover:scale-105 transition-transform duration-300"
            >
              Call 087 419 9199
            </Link>
          </div>

          <div className="grid grid-cols-3 gap-4 mt-8 text-white max-w-4xl">
            {rangeMetrics.map(metric => (
              <div key={metric.label} className="bg-white/10 backdrop-blur rounded-2xl p-5 border border-white/20">
                <p className="text-4xl font-black tracking-tight">{metric.value}</p>
                <p className="uppercase tracking-[0.25em] text-xs opacity-80 mt-1">{metric.label}</p>
                <p className="text-sm opacity-80 mt-2">{metric.detail}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="about" className="section-anchor section-cream py-20 border-t border-[#706C61]/10 w-full">
        <div className="mx-auto w-full max-w-6xl px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-[0.95fr_1.05fr] items-center">
            <div className="rounded-3xl shadow-[0_25px_70px_rgba(34,34,34,0.2)] bg-white/70 p-3 reveal reveal-left">
              <div className="relative rounded-2xl overflow-hidden">
                <video autoPlay loop muted playsInline poster="/images/female driver.mp4" className="w-full h-full object-cover" style={{ objectPosition: 'center 20%' }}>
                  <source src="/images/female driver.mp4" type="video/mp4" />
                </video>
                <div className="absolute inset-0 bg-gradient-to-t from-black/35 to-transparent" />
              </div>
            </div>
            <div className="reveal reveal-right space-y-6 text-lg leading-relaxed">
              <SectionHeader
                label="About"
                title="Msport Driving Range"
                subtitle="Full-service facility in San Kamphaeng, Chiang Mai"
                align="left"
              />
              <div className="space-y-4">
                <p className="reveal reveal-up reveal-delay-2">
                  Msport Driving Range spans 388 yards with 68 bays across two levels, realistic course visuals, and a constant Chiang Mai breeze.
                  It’s the go-to destination for both casual sessions and serious training.
                </p>
                <p className="reveal reveal-up reveal-delay-3">
                  Every bucket uses double-layered TaylorMade and Srixon practice balls, delivering authentic spin and ball flight. Thailand PGA
                  coaches, TrackMan analysis, fittings, and multiple pro shops keep you progressing.
                </p>
                <p className="reveal reveal-up reveal-delay-4">
                  Relax after your reps with food and beverage service, Thai massage, spa treatments, or a fresh car wash at M Car Spa—without
                  leaving the property.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="range" className="section-anchor section-matcha py-24 w-full">
        <div className="mx-auto w-full max-w-7xl px-6 lg:px-8">
          <SectionHeader
            label="Range Overview"
            title="DRIVING RANGE"
            subtitle="Northern Thailand’s longest playing field"
          />

          <div className="grid gap-6 md:grid-cols-3">
            <article className="relative overflow-hidden rounded-[32px] bg-[#1B1B1A] text-white p-6 flex flex-col justify-end min-h-[260px] reveal reveal-up md:col-span-2">
              <div className="absolute inset-0">
                <video autoPlay loop muted playsInline poster="/images/Msport.webm" className="w-full h-full object-cover" aria-hidden="true">
                  <source src="/images/Msport.webm" type="video/webm" />
                </video>
                <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-transparent" />
              </div>
              <div className="relative z-10 space-y-3">
                <rangeLengthFeature.icon className="h-9 w-9 text-[var(--accent)]" />
                <p className="text-xs uppercase tracking-[0.35em] text-white/80">{rangeLengthFeature.stat}</p>
                <h3 className="text-3xl font-black leading-tight">{rangeLengthFeature.title}</h3>
                <p className="text-sm text-white/80 max-w-xl">{rangeLengthFeature.description}</p>
              </div>
            </article>

            <article className="bg-white rounded-[32px] p-6 shadow-[0_25px_70px_rgba(34,34,34,0.12)] border border-[#E3E3E0] flex flex-col justify-between reveal reveal-up">
              <div>
                <bayLayoutFeature.icon className="h-8 w-8 text-[var(--accent)]" />
                <p className="text-xs uppercase tracking-[0.35em] text-[var(--accent)] mt-3">{bayLayoutFeature.stat}</p>
                <h3 className="text-2xl font-black mt-2">{bayLayoutFeature.title}</h3>
                <p className="text-sm text-[#4A4A44] mt-2">{bayLayoutFeature.description}</p>
              </div>
              <div className="mt-6 rounded-2xl overflow-hidden border border-[#E3E3E0]/60">
                <Image src="/images/baylayoutvisual.jpg" alt="Msport bay layout" width={640} height={420} className="w-full h-full object-cover" />
              </div>
            </article>

            <article className="rounded-[32px] p-6 bg-[#EFE9DC] shadow-[0_25px_70px_rgba(34,34,34,0.1)] flex flex-col justify-between reveal reveal-up">
              <div>
                <tourBallFeature.icon className="h-8 w-8 text-[var(--accent)]" />
                <p className="text-xs uppercase tracking-[0.35em] text-[var(--accent)] mt-3">{tourBallFeature.stat}</p>
                <h3 className="text-2xl font-black mt-2">{tourBallFeature.title}</h3>
              </div>
              <p className="text-sm text-[#4A4A44] mt-4">{tourBallFeature.description}</p>
            </article>

            <article className="rounded-[32px] bg-white p-6 shadow-[0_25px_70px_rgba(34,34,34,0.12)] border border-[#E3E3E0] flex flex-col md:flex-row items-center gap-6 reveal reveal-up md:col-span-2">
              <div className="flex-1 space-y-3">
                <coachingFeature.icon className="h-8 w-8 text-[var(--accent)]" />
                <p className="text-xs uppercase tracking-[0.35em] text-[var(--accent)] mt-1">{coachingFeature.stat}</p>
                <h3 className="text-2xl font-black leading-tight">{coachingFeature.title}</h3>
                <p className="text-sm text-[#4A4A44]">{coachingFeature.description}</p>
              </div>
              <div className="flex-1 w-full">
                <div className="rounded-2xl overflow-hidden border border-[#E3E3E0]/60 h-full min-h-[180px]">
                  <Image src="/images/thaipgacoaching.jpg" alt="Thai PGA coaching" width={640} height={420} className="w-full h-full object-cover" />
                </div>
              </div>
            </article>
          </div>
        </div>
      </section>

      <section id="services" className="section-anchor section-cream py-24 w-full">
        <div className="mx-auto w-full max-w-6xl px-6 lg:px-8 space-y-12">
          <SectionHeader
            label="Facilities"
            title="BEYOND THE RANGE"
            subtitle="Everything you need in one complex."
          />

          <div className="image-placeholder text-[var(--accent)]/80">Lifestyle Imagery Coming Soon</div>

          <div className="grid gap-6 lg:grid-cols-3">
            {serviceHighlights.map(service => (
              <article key={service.title} className="bg-white rounded-3xl p-6 shadow-[0_15px_45px_rgba(34,34,34,0.12)] border border-[#E3E3E0] reveal reveal-up">
                <service.icon className="h-8 w-8 text-[var(--accent)]" />
                <h3 className="text-2xl font-black mb-3 mt-3 leading-tight">{service.title}</h3>
                <p className="text-sm text-[#4A4A44] leading-relaxed">{service.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="exclusive" className="section-anchor w-full bg-[#11110f]">
        <div className="grid lg:grid-cols-[1.05fr_0.95fr] min-h-[720px]">
          <div className="px-6 lg:px-20 py-20 text-white flex flex-col gap-10 justify-center">
            <div className="space-y-4 max-w-2xl">
              <SectionHeader
                label="Golf Simulators"
                title="INDOOR TRACKMAN SUITES"
                subtitle="Enjoy indoor simulator golf with the TRACKMAN iO system 🧡"
                align="left"
              />
              <p className="text-base text-white/85">
                Three private rooms stay icy-cool in the Chiang Mai heat and support TrackMan combines, league nights, or quick rainy-day sessions.
                Choose the bay that matches your group energy and data needs.
              </p>
            </div>

            <div className="grid gap-5 md:grid-cols-2">
              {[roomOne, roomTwo].map(room => (
                <article key={room?.name} className="bg-white/10 border border-white/10 rounded-2xl p-5 text-white/90 space-y-3">
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <h3 className="text-xl font-black">{room?.name}</h3>
                      <p className="text-[11px] uppercase tracking-[0.35em]">{room?.capacity}</p>
                    </div>
                    <span className="text-2xl font-black text-[var(--accent)]">{room?.price}</span>
                  </div>
                  <p className="text-sm text-white/70">{room?.note}</p>
                </article>
              ))}
              {performanceBay && (
                <article className="md:col-span-2 bg-white/15 border border-white/20 rounded-3xl p-6 text-white space-y-4 shadow-[0_15px_45px_rgba(0,0,0,0.35)]">
                  <div className="flex items-start justify-between gap-6">
                    <div>
                      <p className="text-xs uppercase tracking-[0.45em] text-[var(--accent)]">Performance Bay</p>
                      <h3 className="text-3xl font-black mt-1">{performanceBay.name}</h3>
                      <p className="text-[12px] uppercase tracking-[0.35em] text-white/70">{performanceBay.capacity}</p>
                    </div>
                    <span className="text-3xl font-black text-[var(--accent)]">{performanceBay.price}</span>
                  </div>
                  <p className="text-base text-white/80">{performanceBay.note}</p>
                  <div className="flex flex-wrap gap-2 text-xs text-white/65">
                    <span className="px-3 py-1 rounded-full border border-white/20">Impact Vision</span>
                    <span className="px-3 py-1 rounded-full border border-white/20">Putting Mode</span>
                    <span className="px-3 py-1 rounded-full border border-white/20">Concierge Setup</span>
                  </div>
                </article>
              )}
            </div>

            <div className="flex flex-wrap items-center gap-4">
              <Link href="/shop#trackman" className="accent-bg px-6 py-3 rounded-xl font-bold text-sm">
                Book a simulator
              </Link>
              <Link href="mailto:msportcomplex@gmail.com" className="font-semibold underline-offset-4 underline text-sm">
                Ask about custom events
              </Link>
            </div>

            <div className="flex flex-wrap gap-4 text-sm text-white/80">
              <div className="border border-white/20 rounded-2xl px-5 py-4">
                <p className="text-[11px] uppercase tracking-[0.35em] text-[var(--accent)]">Sessions</p>
                <p className="text-lg font-semibold">Daily · 10:00 AM – Midnight</p>
              </div>
              <div className="border border-white/20 rounded-2xl px-5 py-4">
                <p className="text-[11px] uppercase tracking-[0.35em] text-[var(--accent)]">Service</p>
                <p className="text-lg font-semibold">Food & drinks to every bay</p>
              </div>
              <div className="border border-white/20 rounded-2xl px-5 py-4">
                <p className="text-[11px] uppercase tracking-[0.35em] text-[var(--accent)]">Technology</p>
                <p className="text-lg font-semibold">TrackMan iO concierge</p>
              </div>
            </div>
          </div>

          <div className="relative min-h-[520px] lg:min-h-[760px]">
            <Image src="/images/simroom.png" alt="Msport TrackMan suite" fill className="object-cover" priority={false} />
            <div className="absolute inset-0 bg-gradient-to-l from-black/65 via-transparent to-transparent" />
          </div>
        </div>
      </section>

      <section id="academy" className="section-anchor relative overflow-hidden py-24 w-full">
        <video
          autoPlay
          loop
          muted
          playsInline
          poster="/images/Msport.webm"
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source src="/images/swing driver.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-white/35 backdrop-blur-sm" />

        <div className="relative mx-auto w-full max-w-6xl px-6 lg:px-8">
          <SectionHeader
            label="M Sport Golf Academy (MGA)"
            title="M SPORT ACADEMY"
            subtitle="Thailand PGA coaches for every level"
            subtitleClassName="subtitle-accent text-white/80"
          />

          <div className="grid gap-6 lg:grid-cols-3">
            {academyPrograms.map(program => (
              <article key={program.name} className="bg-white/95 backdrop-blur rounded-3xl p-6 shadow-[0_25px_70px_rgba(0,0,0,0.45)] border border-white/20 reveal reveal-up">
                <GraduationCap className="h-8 w-8 text-[var(--accent)]" />
                <p className="text-xs uppercase tracking-[0.35em] text-[var(--accent)] mt-3">{program.duration}</p>
                <h3 className="text-2xl font-black mt-2">{program.name}</h3>
                <p className="text-sm font-semibold mt-1 text-[#4A4A44]">{program.schedule}</p>
                <ul className="mt-4 space-y-2 text-sm text-[#4A4A44]">
                  {program.notes.map(note => (
                    <li key={note} className="flex items-start gap-2">
                      <span className="mt-1 h-1.5 w-1.5 rounded-full bg-[var(--accent)]" />
                      <span>{note}</span>
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="membership" className="section-anchor section-matcha py-24 w-full">
        <div className="mx-auto w-full max-w-6xl px-6 lg:px-8 space-y-12">
          <SectionHeader
            label="Range Pricing"
            title="BALL RATES"
            subtitle="Choose between standard trays or pre-paid packages for old and new balls."
          />

          <div className="relative overflow-hidden rounded-[32px] border border-[#E3E3E0] shadow-[0_25px_70px_rgba(34,34,34,0.12)]">
            <video
              autoPlay
              loop
              muted
              playsInline
              poster="/images/ballsmsport.mp4"
              className="absolute inset-0 w-full h-full object-cover"
            >
              <source src="/images/ballsmsport.mp4" type="video/mp4" />
            </video>
            <div className="absolute inset-0 bg-gradient-to-r from-[#1B1B1A]/80 via-[#1B1B1A]/45 to-transparent" />
            <div className="relative z-10 grid gap-8 lg:grid-cols-[1.1fr_0.9fr] items-start p-8 lg:p-12 text-white">
              <div className="space-y-4">
                <p className="section-label text-white/80">Live from the trays</p>
                <h3 className="text-3xl lg:text-4xl font-black leading-tight">Old + new ball options filmed at Msport</h3>
                <p className="text-sm lg:text-base text-white/80">
                  Watch the Msport team rotate stock, wash, and prep every bucket. Choose the rate that keeps your practice or data sessions on pace.
                </p>
                <div className="grid gap-4 sm:grid-cols-2">
                  {ballRates.standard.map(rate => (
                    <article key={rate.type} className="bg-white/10 rounded-2xl border border-white/10 p-4">
                      <p className="text-[10px] uppercase tracking-[0.4em] text-[var(--accent)]">{rate.badge}</p>
                      <h4 className="text-xl font-black mt-1">{rate.type}</h4>
                      <p className="text-2xl font-semibold mt-1">{rate.price}</p>
                      <p className="text-xs text-white/75 mt-2">{rate.note}</p>
                    </article>
                  ))}
                </div>
              </div>
              <div className="bg-white/10 backdrop-blur rounded-3xl p-6 border border-white/15 space-y-5">
                <div>
                  <p className="text-xs uppercase tracking-[0.35em] text-[var(--accent)]">Old balls membership</p>
                  <ul className="mt-3 space-y-2 text-sm">
                    {ballRates.memberships.old.map(pkg => (
                      <li key={pkg.package} className="flex items-center justify-between gap-4">
                        <span className="font-semibold">{pkg.package}</span>
                        <span className="text-[var(--accent)] font-bold">{pkg.rate}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <p className="text-xs uppercase tracking-[0.35em] text-[var(--accent)]/80">New balls membership</p>
                  <ul className="mt-3 space-y-2 text-sm">
                    {ballRates.memberships.fresh.map(pkg => (
                      <li key={pkg.package} className="flex items-center justify-between gap-4 text-white">
                        <span className="font-semibold">{pkg.package}</span>
                        <span className="text-[var(--accent)] font-bold">{pkg.rate}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <Link href="mailto:msportcomplex@gmail.com" className="inline-flex items-center justify-center accent-bg px-6 py-3 rounded-xl font-bold w-full text-center">
                  Reserve trays
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="news" className="section-anchor section-cream py-24 w-full">
        <div className="mx-auto w-full max-w-6xl px-6 lg:px-8 space-y-12">
          <SectionHeader
            label="Updates & Stories"
            title="NEWS & EVENTS"
            subtitle="Announcements, public relations, and happenings from Msport Driving Range."
          />

          <div className="grid gap-8 lg:grid-cols-3">
            {newsItems.map((item, idx) => (
              <article key={item.title} className="bg-white rounded-[28px] overflow-hidden shadow-[0_25px_70px_rgba(34,34,34,0.12)] border border-[#E3E3E0] flex flex-col reveal reveal-up">
                <div className="relative h-48">
                  <Image
                    src={`https://images.unsplash.com/photo-15${idx + 1}03431${idx + 1}209-a25ddb2bd4${idx + 1}?auto=format&w=1200&q=80`}
                    alt={item.title}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
                    <p className="text-[11px] uppercase tracking-[0.4em] text-[var(--accent)]">{item.badge}</p>
                    <h3 className="text-xl font-black mt-1">{item.title}</h3>
                  </div>
                </div>
                <div className="p-6 flex flex-col gap-4 text-[#4A4A44] flex-1">
                  <p className="text-sm leading-relaxed">{item.description}</p>
                  <div className="mt-auto">
                    <Link href="https://www.facebook.com/MSportDrivingRange" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 font-semibold text-[var(--accent)]">
                      Read update <span aria-hidden="true">→</span>
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="expansion" className="section-anchor section-smoke py-24 w-full">
        <div className="mx-auto w-full max-w-6xl px-6 lg:px-8 grid gap-10 lg:grid-cols-[1.1fr_0.9fr] items-center">
          <div className="space-y-6 text-white">
            <SectionHeader
              label="Second Facility"
              title="EXPANSION"
              subtitle="Msport is adding another driving range to Northern Thailand"
              align="left"
              subtitleClassName="subtitle-accent text-white/70"
              animated={false}
            />
            <p className="text-lg text-white/85">
              We are finalizing a new Msport Driving Range facility to double bay capacity, offer more TrackMan suites, and bring our service
              model to another side of Chiang Mai. Construction is underway with opening details to be announced soon.
            </p>
            <ul className="space-y-3 text-sm font-semibold text-white">
              <li className="flex items-start gap-3">
                <span className="mt-1 h-2 w-2 rounded-full bg-[var(--accent)]" />
                72 additional bays with familiar Msport layouts
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-1 h-2 w-2 rounded-full bg-[var(--accent)]" />
                Expanded academy studios and performance labs
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-1 h-2 w-2 rounded-full bg-[var(--accent)]" />
                Community pavilion for events and league nights
              </li>
            </ul>
          </div>
          <div className="bg-white rounded-3xl p-8 shadow-[0_25px_70px_rgba(34,34,34,0.12)] border border-[#E3E3E0] space-y-4">
            <p className="subtitle-accent">Register for updates</p>
            <h3 className="text-3xl font-black">Msport Range No. 2</h3>
            <p className="text-sm text-[#4A4A44]">
              Join our mailing list to be first to tour the new facility, lock in founding memberships, and reserve TrackMan suites during the
              preview week.
            </p>
            <Link href="mailto:msportcomplex@gmail.com" className="inline-flex items-center justify-center accent-bg px-6 py-3 rounded-xl font-bold">
              Notify me when it opens
            </Link>
            <div className="image-placeholder mt-4">Expansion Render Placeholder</div>
          </div>
        </div>
      </section>

      <section id="contact" className="section-anchor section-cream pt-0 pb-24 lg:pb-12 w-full">
        <div className="reveal reveal-scale">
          <div className="w-full aspect-[24/9] lg:aspect-[24/7] overflow-hidden rounded-none">
            <video
              autoPlay
              loop
              muted
              playsInline
              className="w-full h-full object-cover"
            >
              <source src="/images/Msport.webm" type="video/webm" />
            </video>
          </div>
        </div>

        <div className="mx-auto w-full max-w-6xl px-6 lg:px-8 mt-10 pb-12">
          <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
            <div className="bg-white rounded-3xl p-8 shadow-[0_25px_70px_rgba(34,34,34,0.15)] space-y-6">
              <SectionHeader
                label="Contact"
                title="CONNECT WITH MSPORT"
                subtitle="Bookings, walk-ins, and news updates."
                align="left"
              />
              <div className="space-y-4 text-[#4A4A44]">
                <div className="flex gap-4">
                  <MapPin className="h-6 w-6 text-[var(--accent)]" />
                  <div>
                    {contactDetails.address.map(line => (
                      <p key={line} className="text-sm font-semibold">
                        {line}
                      </p>
                    ))}
                  </div>
                </div>
                <div className="flex gap-4">
                  <PhoneCall className="h-6 w-6 text-[var(--accent)]" />
                  <div>
                    <p className="text-sm font-semibold">{contactDetails.phone}</p>
                    <p className="text-xs opacity-70">Call or Line / WhatsApp concierge</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <Mail className="h-6 w-6 text-[var(--accent)]" />
                  <div>
                    <p className="text-sm font-semibold">{contactDetails.email}</p>
                    <p className="text-xs opacity-70">General inquiries & bookings</p>
                  </div>
                </div>
                <Link
                  href={contactDetails.facebook}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 text-sm font-semibold text-[var(--accent)]"
                >
                  <Facebook className="h-5 w-5" /> M Sport Driving Range on Facebook
                </Link>
              </div>
            </div>

            <div className="bg-[#1B1B1A] text-white rounded-3xl p-8 space-y-6 shadow-[0_25px_70px_rgba(0,0,0,0.4)]">
              <div className="flex items-center gap-3">
                <Clock4 className="h-6 w-6 text-[var(--accent)]" />
                <div>
                  <p className="text-xs uppercase tracking-[0.3em]">Hours</p>
                  <p className="font-semibold">{contactDetails.rangeHours}</p>
                  <p className="text-sm text-white/70">Standard driving range</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <Clock4 className="h-6 w-6 text-[var(--accent)]" />
                <div>
                  <p className="text-xs uppercase tracking-[0.3em]">Exclusive Room</p>
                  <p className="font-semibold">{contactDetails.exclusiveHours}</p>
                  <p className="text-sm text-white/70">VVIP suites + private coaching</p>
                </div>
              </div>
              <p className="text-sm text-white/80">
                Secure parking for 200+ vehicles, traditional Thai massage, spa services, F&B, and M Car Spa keep every visit effortless.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
