// All facts below come from CONTENT.md (harvested from wcpb.com).
// Do not add programs, prices, hours, coaches, or quotes that are not in CONTENT.md.

export const LINKS = {
  book: 'https://wcpb.playbypoint.com/book/wcpb',
  schedule: 'https://wcpb.playbypoint.com/programs?facility_id=905&category=&search=&view=grid',
  groupLessons: 'https://wcpb.playbypoint.com/programs?facility_id=905&category=Group+Lesson&search=&view=grid',
  free101: 'https://yorba-linda.wcpb.com/programs/non-members-pickleball-101-class-first-time-only',
  privateEvent: 'https://412p8v.share-na2.hsforms.com/2H_VtumbLSq6E6-K-aHfxyg',
  yelp: 'https://www.yelp.com/biz/west-coast-pickleball-yorba-linda-yorba-linda',
  instagram: 'https://www.instagram.com/westcoast.pb',
  instagramYL: 'https://www.instagram.com/wcpb.yorbalinda/',
  membershipTable: 'https://drive.google.com/file/d/1_4XdXiJVj5bjG3z20qJi8BAlCCx_8sPW/view?usp=sharing',
  phone: 'tel:714-869-7091',
  directions: 'https://www.google.com/maps/search/?api=1&query=23061+Savi+Ranch+Pkwy,+Yorba+Linda,+CA+92887',
}

export const CONTACT = {
  phone: '714-869-7091',
  email: 'yorbalinda@wcpb.com',
  address: '23061 Savi Ranch Pkwy, Yorba Linda, CA 92887',
}

export const QUICK_LINKS = [
  { label: 'Daily lessons', href: LINKS.groupLessons, external: true },
  { label: 'Open play', href: LINKS.schedule, external: true },
  { label: 'Yorba Linda club', href: '/locations', external: false },
  { label: 'Private events', href: LINKS.privateEvent, external: true },
  { label: 'Book court time', href: LINKS.book, external: true },
]

export const REVIEWS = [
  {
    name: 'Ivana D.',
    quote:
      'Spacious & well ventilated with 6 courts! Finally an indoor court. There are bathrooms & drink vending machines available.',
  },
  {
    name: 'Joe F.',
    quote: 'Great location. Court surface is gritty and well made. Lots of fun.',
  },
  {
    name: 'Krystle G.',
    quote: 'The players are all super nice, funny and overall have great vibes.',
  },
]

export const TIERS = [
  {
    name: 'Non-Member',
    price: null,
    priceNote: 'Pay as you play',
    perks: [
      'Free club account profile',
      'Reserved play $32–$50/hr',
      'Open play $15–$20 (2–3 hrs)',
      '7 priority booking days',
      '1 active reservation',
    ],
  },
  {
    name: 'Basic',
    price: '$10',
    per: '/month',
    perks: [
      'Reserved play $28–$44/hr',
      'Open play $10–$15 (2–3 hrs)',
      '7 priority booking days',
      'Ball machine rental $25',
      'Demo paddle rental $5–$10',
    ],
  },
  {
    name: 'Gold',
    price: '$1,200',
    per: '/year',
    was: '$1,400',
    alt: 'or $350 / 3 months (was $400)',
    perks: [
      'Weekdays before 3PM: play FREE',
      'After 3PM & weekends: up to 50% off',
      '10 priority booking days · 3 active reservations',
      'Up to 25% off events, leagues, clinics & lessons',
      '3 guest passes per month',
    ],
  },
  {
    name: 'Emerald',
    price: '$1,800',
    per: '/year',
    was: '$2,100',
    alt: 'or $500 / 3 months (was $575)',
    perks: [
      'Reserved play FREE — any time',
      'Open play FREE — any time',
      '14 priority booking days · 3 active reservations',
      'Up to 25% off events, leagues, clinics & lessons',
      '3 guest passes per month · free demo paddles',
    ],
  },
]

export const COMPARISON = {
  columns: ['Non-Member', 'Basic', 'Gold', 'Emerald'],
  rows: [
    ['Club account profile', 'Free', 'Free', 'Free', 'Free'],
    ['Reserved play (hourly)', '$32–$50', '$28–$44', 'Weekdays before 3PM free · up to 50% off after', 'Free'],
    ['Open play (2–3 hrs)', '$15–$20', '$10–$15', 'Weekdays before 3PM free · up to 50% off after', 'Free'],
    ['Priority booking days', '7', '7', '10', '14'],
    ['Active reservations', '1', '1', '3', '3'],
    ['Concurrent reservations', '1', '1', '2', '2'],
    ['Mini events & game plays', '—', '—', 'Up to 25% off', 'Up to 25% off'],
    ['Tournaments & leagues', '—', '—', 'Up to 25% off', 'Up to 25% off'],
    ['Clinics & lessons', '—', '—', 'Up to 25% off', 'Up to 25% off'],
    ['Pro shop discount', '—', '—', 'Up to 15% off', 'Up to 15% off'],
    ['Court reservation limit', '2 hrs*', '2 hrs*', '2 hrs*', '2 hrs*'],
    ['Max players per court', '8', '8', '10', '10'],
    ['Ball machine rental', '$30', '$25', '$20', '$20'],
    ['Demo paddle rental', '$10–$15', '$5–$10', 'Free', 'Free'],
    ['Guest passes / month', '0', '0', '3', '3'],
    ['No waiting for a court', '✓', '✓', '✓', '✓'],
  ],
  footnote: '*Can extend upon request. Guest passes: $10 for first-time visitors.',
}

export const RESERVED_RATES = {
  weekday: [
    {
      band: 'Low time',
      hours: '6AM – 11AM',
      days: 'Mon – Thu',
      prices: [
        ['Non-Member', '$46'],
        ['Basic', '$40'],
        ['Gold', '$20'],
        ['Emerald', 'Free'],
      ],
    },
    {
      band: 'Day time',
      hours: '11AM – 5PM',
      days: 'Mon – Thu',
      prices: [
        ['Non-Member', '$40'],
        ['Basic', '$34'],
        ['Gold', '$18'],
        ['Emerald', 'Free'],
      ],
    },
    {
      band: 'Prime time',
      hours: '5PM – 12AM',
      days: 'Mon – Thu',
      prices: [
        ['Non-Member', '$50'],
        ['Basic', '$44'],
        ['Gold', '$22'],
        ['Emerald', 'Free'],
      ],
    },
  ],
  weekend: {
    band: 'All day',
    hours: 'Fri · Sat · Sun',
    days: '',
    prices: [
      ['Non-Member', '$50'],
      ['Basic', '$44'],
      ['Gold', '$22'],
      ['Emerald', 'Free'],
    ],
  },
}

export const LESSONS = [
  {
    level: 'Beginner',
    tagline: 'Perfect for anyone just getting started.',
    goodFor:
      'Anyone who has already taken the Introductory Clinic, or beginners who have limited knowledge of the basics of pickleball.',
    sessions: [
      'Paddle grip, positioning, serve and return basics',
      'Return depth, volleying, and “nice nice mean” drill',
      'Game rules, volley review, simple gameplay',
      'Gameplay strategy and positioning for success',
    ],
  },
  {
    level: 'Intermediate',
    tagline: 'Ready to elevate your game?',
    goodFor: 'Advanced beginners or low intermediate, skill level 2.75 to 3.25.',
    sessions: [
      'Improving shot consistency, making your opponent move',
      'Advanced dinking, drop shots, and drive shot drills',
      'Smash defense, lob strategies',
      'Gameplay tactics, court awareness, poaching techniques',
    ],
  },
  {
    level: 'Advanced',
    tagline: 'Fine-tune your skills and master the court.',
    goodFor: 'Intermediate players in the 3.5 to 3.75 skill range looking to improve to a 4.0+ player.',
    sessions: [
      'Enhancing playbook, advanced shot techniques',
      'Strategic gameplay, offensive/defensive balance',
      'Smashing and advanced lobbing tactics',
      'Mastering court positioning and advanced team play',
    ],
  },
]

export const CLINIC_TOPICS = [
  'Master the kitchen and control the pace of the game',
  'Perfect your serve and return with precision',
  'Learn winning doubles strategies that keep you ahead',
  'Dive into advanced footwork, positioning, and more',
]

export const INSTAGRAM_IMAGES = [
  { src: '/images/instagram-1.png', alt: 'WCPB holiday giveaway post from Instagram' },
  { src: '/images/instagram-3.jpg', alt: 'West Coast Pickleball Instagram post' },
  { src: '/images/instagram-4.jpg', alt: 'West Coast Pickleball Instagram post' },
  { src: '/images/instagram-6.jpg', alt: 'West Coast Pickleball Instagram post' },
  { src: '/images/instagram-7.png', alt: 'West Coast Pickleball Instagram post' },
  { src: '/images/instagram-5.png', alt: 'West Coast Pickleball Instagram post' },
]
