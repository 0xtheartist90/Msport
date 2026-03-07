export type FacilityCategory = 'golf' | 'wellness' | 'dining' | 'cafe' | 'services' | 'vip';

export type Facility = {
  slug: string;
  name: string;
  category: FacilityCategory;
  description: string;
  heroImage: string;
  gallery?: string[];
  logo?: string;
  summary: string;
  services: string[];
  location: string;
  hours: string;
  phone?: string;
  email?: string;
  contact?: string;
  facebook?: string;
};

const placeholder = '/images/placeholder-golf.jpg';

export const facilityDirectory: Facility[] = [
  {
    slug: 'm-golf-kid-club',
    name: 'M Golf Kid Club',
    category: 'golf',
    description: 'Kids-only apparel and equipment lounge with playful merchandising and fitting support built for young golfers.',
    heroImage: '/images/Facilities/Mgolfkidclub/mgolfkidclubHero.png',
    logo: '/images/Facilities/Mgolfkidclub/Mgolfkidclublogo.png',
    gallery: [
      '/images/Facilities/Mgolfkidclub/MGolfKidClub01.png',
      '/images/Facilities/Mgolfkidclub/MGolfKidClub02.png',
      '/images/Facilities/Mgolfkidclub/MGolfKidClub03.png',
      '/images/Facilities/Mgolfkidclub/MGolfKidClub04.png',
      '/images/Facilities/Mgolfkidclub/MGolfKidClub05.png'
    ],
    summary:
      'Retail clubhouse featuring youth-sized apparel racks, junior-specific clubs, and hands-on fitting guidance to outfit the next generation.',
    services: ['Kids apparel and footwear', 'Junior club fitting & demos', 'Playful lounge + merch displays'],
    location: 'Ground floor, west wing of the range concourse.',
    hours: 'Daily · 10:00 – 20:00',
    phone: '063 587 9797',
    email: 'mgolfkidclub@gmail.com',
    facebook: 'https://www.facebook.com/people/M-Golf-Kid-Club/61552645848005/'
  },
  {
    slug: 'northgolf-cnx',
    name: 'Northgolf CNX',
    category: 'golf',
    description: 'Performance bay operators offering fittings, lessons, and gear built for Chiang Mai players.',
    heroImage: '/images/Facilities/North Golf CNX/northgolfcnxHero.png',
    logo: '/images/Facilities/North Golf CNX/NorthgolfCnxLogo.png',
    gallery: [
      '/images/Facilities/North Golf CNX/Northgolfcnx01.png',
      '/images/Facilities/North Golf CNX/Northgolfcnx02.png',
      '/images/Facilities/North Golf CNX/Northgolfcnx03.png',
      '/images/Facilities/North Golf CNX/Northgolfcnx04.png',
      '/images/Facilities/North Golf CNX/Northgolfcnx05.png',
      '/images/Facilities/North Golf CNX/Northgolfcnx06.png'
    ],
    summary:
      'TrackMan-equipped coaching team delivering fittings, swing analysis, and retail support for Chiang Mai golfers.',
    services: ['One-on-one lessons', 'Custom fittings', 'Equipment ordering and support'],
    location: 'Upper mezzanine bays · Building B.',
    hours: 'Mon – Sat · 09:00 – 21:00',
    contact: 'northgolf.cnx@msport.com'
  },
  {
    slug: 'gn-golf-the-loft',
    name: 'GN Golf – The Loft',
    category: 'golf',
    description: 'Specialty retail and loft/lie studio for iron builds, wedge tuning, and putter adjustments.',
    heroImage: '/images/Facilities/GN Golf/GNGOLFHERO.png',
    gallery: [
      '/images/Facilities/GN Golf/GnGolf01.png',
      '/images/Facilities/GN Golf/GnGolf02.png',
      '/images/Facilities/GN Golf/GnGolf03.png',
      '/images/Facilities/GN Golf/GnGolf04.png',
      '/images/Facilities/GN Golf/GnGolf05.png',
      '/images/Facilities/GN Golf/GnGolf06.png'
    ],
    summary: 'Studio dedicated to iron builds, wedge grinds, and putter adjustments using calibrated loft/lie tooling.',
    services: ['Loft & lie tuning', 'Wedge grinds', 'Putter balancing'],
    location: 'Retail row, central concourse.',
    hours: 'Daily · 11:00 – 22:00'
  },
  {
    slug: 'the-golf-garage',
    name: 'The Golf Garage',
    category: 'golf',
    description: 'Club service partner handling repairs, regrips, and TrackMan-based diagnostics.',
    heroImage: '/images/Facilities/Golf Garage/golfgarageHERO.png',
    summary: 'On-site repair bench handling regrips, shaft work, and diagnostics with quick turnaround.',
    services: ['Same-day regrips', 'Shaft pulls and installs', 'TrackMan diagnostics'],
    location: 'Service alley behind Bay 12.',
    hours: 'Daily · 10:00 – 23:00'
  },
  {
    slug: 'coffee-on-green',
    name: 'Coffee On Green',
    category: 'cafe',
    description: 'Signature café located within the range, serving players and visitors throughout the day.',
    heroImage: '/images/Facilities/Coffee on Green/coffeeongreenHERO.png',
    logo: '/images/Facilities/Coffee on Green/Coffeeongreenlogo.png',
    gallery: [
      '/images/Facilities/Coffee on Green/Coffeeongreen01.png',
      '/images/Facilities/Coffee on Green/Coffeeongreen02.png',
      '/images/Facilities/Coffee on Green/Coffeeongreen03.png',
      '/images/Facilities/Coffee on Green/Coffeeongreen04.png',
      '/images/Facilities/Coffee on Green/Coffeeongreen05.png',
      '/images/Facilities/Coffee on Green/Coffeeongreen06.png',
      '/images/Facilities/Coffee on Green/Coffeeongreen07.png'
    ],
    summary: 'Espresso bar, cold brew taps, and snacks positioned inside the driving range footprint.',
    services: ['Espresso & brew menu', 'Grab-and-go food', 'Player tab service'],
    location: 'Inside the main bay hall adjacent to Bay 24.',
    hours: 'Daily · 07:00 – 23:00'
  },
  {
    slug: 'myo-recovery',
    name: 'MYO Recovery',
    category: 'wellness',
    description: 'Athlete-focused bodywork, percussion therapy, and guided stretching programs.',
    heroImage: '/images/Facilities/MYO Massage/myoHERO.png',
    logo: '/images/Facilities/MYO Massage/MYOlogo.png',
    summary: 'Treatment rooms staffed by sport therapists for post-training recovery.',
    services: ['Deep tissue massage', 'Percussion therapy', 'Guided stretch sessions'],
    location: 'Wellness corridor · Level 2.',
    hours: 'Daily · 10:00 – 22:00',
    contact: '+66 61 123 4567'
  },
  {
    slug: 'sakuna-thai-massage',
    name: 'Sakuna Thai Massage',
    category: 'wellness',
    description: 'Classic Thai massage studio offering post-round recovery and relaxation sessions.',
    heroImage: '/images/Facilities/Sakuna Massage/SakunaHERO.png',
    summary: 'Traditional Thai massage studio with private rooms and herbal treatments.',
    services: ['Traditional Thai massage', 'Herbal compress therapy', 'Foot massage'],
    location: 'Garden level · east entrance.',
    hours: 'Daily · 11:00 – 00:00'
  },
  {
    slug: 'tung-lok-seafood',
    name: 'Tung Lok Seafood Restaurant',
    category: 'dining',
    description: 'Chinese seafood dining tucked inside the parking complex.',
    heroImage: '/images/Facilities/Tung lok Restaurant/Tung Lok.png',
    summary: 'Formal Chinese seafood dining room for group dinners and family meals.',
    services: ['Live seafood menu', 'Private dining rooms', 'Banquet service'],
    location: 'Parking complex · Level 2.',
    hours: 'Daily · 11:00 – 22:00'
  },
  {
    slug: 'kinzen-kitchen',
    name: 'Kinzen Kitchen',
    category: 'dining',
    description: 'Thai-Chinese comfort dishes served late for post-range meals.',
    heroImage: '/images/Facilities/Kinzen Restaurant/KinZen.png',
    summary: 'Casual dining with wok dishes, soups, and family-style plates.',
    services: ['Sit-down dining', 'Takeaway', 'Late-night service'],
    location: 'Parking complex ground level.',
    hours: 'Daily · 10:00 – 00:00'
  },
  {
    slug: 'ah-mei-mala-bbq',
    name: 'Ah Mei Mala BBQ',
    category: 'dining',
    description: 'Grilled mala skewers and casual shared plates.',
    heroImage: '/images/Facilities/Ah Mei Mala Restaurant/Ah Mei Mala BBQ01.png',
    summary: 'Night-market style mala skewers and casual seating.',
    services: ['Mala skewers', 'Draft beer', 'Outdoor seating'],
    location: 'Parking complex courtyard.',
    hours: 'Daily · 16:00 – 01:00'
  },
  {
    slug: 'kaotom-klang-wiang',
    name: 'Kaotom 1 Baht',
    category: 'dining',
    description: 'Late-night rice porridge and local staples.',
    heroImage: '/images/Facilities/Kaowtom Restaurant/Kaowtom01.png',
    summary: 'Local favorite for rice porridge, soups, and classic Thai side dishes.',
    services: ['Rice porridge', 'Family-style sides', 'Late-night hours'],
    location: 'Entrance road, opposite valet.',
    hours: 'Daily · 19:00 – 02:00'
  },
  {
    slug: 'a-bao-mala-seafood-noodles',
    name: 'A Bao Mala Seafood Noodles',
    category: 'dining',
    description: 'Spicy noodle bar with seafood-forward broths.',
    heroImage: '/images/Facilities/A Bao Mala Restaurant/A Bao Mala01.png',
    summary: 'Mala seafood noodle bar with counter seating and takeaway.',
    services: ['Seafood noodle bowls', 'Takeaway', 'Spice-level customization'],
    location: 'Parking complex · south entrance.',
    hours: 'Daily · 11:00 – 23:00'
  },
  {
    slug: 'm-car-spa',
    name: 'M Car Spa',
    category: 'services',
    description: 'Detail bay and parking concierge located directly beneath the dining podium.',
    heroImage: '/images/Facilities/MCARSPA/mcarspaHERO.png',
    summary: 'Reserve a detailing slot or secure covered parking while you train, dine, or recover upstairs.',
    services: ['Full exterior & interior detail', 'Express wash bays', 'Parking concierge'],
    location: 'Parking complex · ground concourse.',
    hours: 'Daily · 08:00 – 23:00'
  },
  {
    slug: 'vip-room',
    name: 'VIP Room for Rent',
    category: 'vip',
    description: 'Private, air-conditioned practice suite with dual mat capacity and concierge support for coaching or group sessions.',
    heroImage: '/images/Facilities/Room for rent/roomforrent03.png',
    gallery: [
      '/images/Facilities/Room for rent/roomforrent01.png',
      '/images/Facilities/Room for rent/roomforrent02.png',
      '/images/Facilities/Room for rent/roomforrent03.png'
    ],
    summary:
      'Reserve an enclosed VIP bay with independent climate control, TrackMan-ready space, and enough room for small-group lessons or private events.',
    services: ['Space for 2 driving mats', 'Dedicated seating + storage', 'On-call range concierge'],
    location: 'Upper mezzanine, adjacent to Bay 30.',
    hours: 'Daily · 08:00 – 23:00',
    contact: 'Please contact the golf ball cashier · 092 904 6222'
  }
];

export const golfFacilities = facilityDirectory.filter(facility => facility.category === 'golf');
export const wellnessFacilities = facilityDirectory.filter(facility => facility.category === 'wellness');
export const diningFacilities = facilityDirectory.filter(facility => facility.category === 'dining');
export const cafeFacility = facilityDirectory.find(facility => facility.category === 'cafe');
export const serviceFacilities = facilityDirectory.filter(facility => facility.category === 'services');

export const getFacilityBySlug = (slug: string) => facilityDirectory.find(facility => facility.slug === slug);
