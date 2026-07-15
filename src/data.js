// All facts below come from CONTENT.md (harvested from wcpb.com).
// Do not add programs, prices, hours, coaches, or quotes that are not in CONTENT.md.

export const LINKS = {
  book: 'https://wcpb.playbypoint.com/book/wcpb',
  schedule: 'https://wcpb.playbypoint.com/programs?facility_id=905&category=&search=&view=grid',
  groupLessons: 'https://wcpb.playbypoint.com/programs?facility_id=905&category=Group+Lesson&search=&view=grid',
  free101: 'https://yorba-linda.wcpb.com/programs/non-members-pickleball-101-class-first-time-only',
  // Original HubSpot inquiry form — replaced by the in-site /book-event page.
  privateEventExternal: 'https://412p8v.share-na2.hsforms.com/2H_VtumbLSq6E6-K-aHfxyg',
  yelp: 'https://www.yelp.com/biz/west-coast-pickleball-yorba-linda-yorba-linda',
  googleReviews: 'https://www.google.com/maps/search/?api=1&query=West+Coast+Pickleball+23061+Savi+Ranch+Pkwy,+Yorba+Linda,+CA+92887',
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
  { label: 'Private events', href: '/events', external: false },
  { label: 'Book court time', href: LINKS.book, external: true },
]

// Real Google reviews, harvested 2026-07-14 — full verbatim texts in
// CONTENT.md ("Google reviews"). Trim with ellipses only; never reword.
export const REVIEWS = [
  {
    name: 'Ali H.',
    quote:
      'Went there yesterday with my wife and it was such a great experience! The place is super clean, well-kept, and has an awesome community vibe… We played until 11 PM on a Friday night and people were still showing up—it was such a vibe!',
  },
  {
    name: 'Gary Y.',
    quote:
      'Courts were well spread out with effective barriers between each. Plenty of comfy seating + tables + fully air conditioned for people waiting… As people visiting out of town, they had all the equipment available to rent for us.',
  },
  {
    name: 'Dwight C.',
    quote:
      'Played open play here as a non-member. Staff was accommodating and helpful. Even though I didn’t know anyone playing there, I felt the vibe was very welcoming… I’ll play here again when visiting Yorba Linda.',
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

// Same facts as the official membership table, regrouped so the comparison
// reads as three questions: what does playing cost, how much booking power,
// what extras. "Best for" lines are derived from the real pricing structure.
export const COMPARISON = {
  columns: [
    { name: 'Non-Member', price: 'Pay as you play', persona: 'Just trying it out' },
    { name: 'Basic', price: '$10/month', persona: 'I drop in now and then' },
    { name: 'Gold', price: '$1,200/year', persona: 'I play weekdays' },
    { name: 'Emerald', price: '$1,800/year', persona: 'I play all the time' },
  ],
  groups: [
    {
      title: 'What you pay to play',
      rows: [
        ['Reserved play (hourly)', '$32–$50', '$28–$44', 'Free before 3PM weekdays|up to 50% off after & weekends', 'Free'],
        ['Open play (2–3 hrs)', '$15–$20', '$10–$15', 'Free before 3PM weekdays|up to 50% off after & weekends', 'Free'],
        ['Ball machine rental', '$30', '$25', '$20', '$20'],
        ['Demo paddle rental', '$10–$15', '$5–$10', 'Free', 'Free'],
      ],
    },
    {
      title: 'Booking power',
      rows: [
        ['Priority booking days', '7', '7', '10', '14'],
        ['Active reservations', '1', '1', '3', '3'],
        ['Concurrent reservations', '1', '1', '2', '2'],
        ['Court reservation limit', '2 hrs*', '2 hrs*', '2 hrs*', '2 hrs*'],
        ['Max players per court', '8', '8', '10', '10'],
        ['No waiting for a court', '✓', '✓', '✓', '✓'],
      ],
    },
    {
      title: 'Discounts & perks',
      rows: [
        ['Mini events & game plays', '—', '—', 'Up to 25% off', 'Up to 25% off'],
        ['Tournaments & leagues', '—', '—', 'Up to 25% off', 'Up to 25% off'],
        ['Clinics & lessons', '—', '—', 'Up to 25% off', 'Up to 25% off'],
        ['Pro shop discount', '—', '—', 'Up to 15% off', 'Up to 15% off'],
        ['Guest passes / month', '—', '—', '3', '3'],
        ['Club account profile', 'Free', 'Free', 'Free', 'Free'],
      ],
    },
  ],
  footnote: '*Can extend upon request. Guest passes: $10 for first-time visitors.',
}

// Open play pricing, one row per tier — same facts as COMPARISON, shaped for
// the Membership page card.
export const OPEN_PLAY = [
  ['Non-Member', '$15–$20', 'per session'],
  ['Basic', '$10–$15', 'per session'],
  ['Gold', 'Free', 'weekdays before 3PM · up to 50% off after 3PM & weekends'],
  ['Emerald', 'Free', 'any time'],
]

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

// FAQ — verbatim Q&As from /faq (CONTENT.md).
export const FAQS = [
  {
    q: 'What is West Coast Pickleball?',
    a: 'West Coast Pickleball is Orange County’s premier destination for pickleball players of all levels. We offer a top-tier facility with professional-grade courts, expert coaching, and a vibrant community. Whether you\'re here to improve your skills, compete, or just have fun, we’ve got something for everyone.',
  },
  {
    q: 'What should I wear for pickleball?',
    a: 'Comfortable, athletic wear is ideal. We recommend non-marking shoes to protect our courts and keep you moving safely. Anything you would wear for tennis or other court sports works perfectly.',
  },
  {
    q: 'Do you offer corporate or private events?',
    a: 'Yes, we do! Whether you’re looking to book a corporate team-building event or a private pickleball party, we can create a custom experience to fit your needs. Our premium courts, coaches, and amenities will make it an unforgettable event. Contact us for more details and to start planning!',
  },
  {
    q: 'How do I sign up for lessons or events?',
    a: 'Signing up is easy! Just visit our website, create an account, and select the lesson or event you’d like to join. If you’re not sure which one is right for you, our team is happy to help guide you through the options.',
  },
  {
    q: 'Are there any age or skill level restrictions?',
    a: 'Nope! West Coast Pickleball is open to all ages and skill levels. We believe pickleball is a game for everyone, whether you’re just getting started or competing at an advanced level. We have programs and events for players of every stage.',
  },
]

// Gameplay guide — educational content verbatim from /gameplay (CONTENT.md).
export const GAMEPLAY = {
  intro:
    'Pickleball is more than just hitting a ball back and forth—it\'s a game of skill, strategy, and smart decision-making. Whether you\'re new to the game or looking to sharpen your competitive edge, understanding the ins and outs of gameplay is essential to taking your performance to the next level.',
  basics: {
    title: 'The basics of pickleball gameplay',
    body: 'Pickleball is played with a paddle and a perforated plastic ball on a badminton-sized court. The objective is to score points by hitting the ball over the net into your opponent’s side of the court. Games are typically played to 11 points, with the winner needing to win by two points.',
    points: [
      ['Serving', 'The serve must be underhand and diagonally crosscourt, with the ball landing in the opposite service box.'],
      ['Double bounce rule', 'After the serve, the receiving team must let the ball bounce once before returning it, and the serving team must let the return bounce as well.'],
      ['The kitchen', 'This non-volley zone extends seven feet from the net. Players cannot volley (hit the ball out of the air) while standing in this zone.'],
    ],
  },
  strategy: {
    title: 'Mastering strategy: more than just power',
    body: 'Pickleball isn’t just about power—it’s about smart positioning and knowing when to strike. Whether you\'re playing singles or doubles, understanding court positioning and shot selection can give you a huge advantage over your opponents.',
    points: [
      ['Dinking', 'This soft shot, played into the kitchen, is crucial for controlling the pace and forcing errors from your opponent.'],
      ['Third shot drop', 'Often seen as one of the most important shots in pickleball, the third shot drop is a soft shot designed to land in the kitchen, neutralizing your opponent’s advantage and allowing you to take control of the net.'],
      ['Volleys & smashes', 'Timing is everything. Knowing when to stay back and when to charge the net is key to maintaining pressure on your opponent.'],
      ['Court awareness', 'Keep an eye on your opponent’s positioning and use it to your advantage by placing shots that force them into difficult returns.'],
    ],
  },
  formats: [
    {
      name: 'Doubles',
      body: 'Doubles is all about teamwork, communication, and positioning. It’s important to cover the court efficiently with your partner, minimize unforced errors, and utilize strategic net play to keep control of the rally.',
    },
    {
      name: 'Singles',
      body: 'In singles, it\'s all about movement and placement. With more court to cover, players need to rely on precise shot placement, smart serves, and quick footwork to outlast their opponents.',
    },
  ],
}

// Private events — verbatim copy from /book-private-event + home (CONTENT.md).
export const EVENTS = {
  promo: '20% off your first event for a limited time with code PBEVENT',
  intro:
    'Looking for the perfect way to bring your team together? Whether it’s a corporate event, team bonding session, or a unique group outing, West Coast Pickleball offers the ultimate setting for fun, competitive play that energizes your group and strengthens connections.',
  hostBody:
    'Whether you\'re celebrating a birthday, planning a corporate outing, team-building session, or just gathering your favorite group for some fun, we make it easy. Our indoor facility offers a private, climate-controlled space with paddles, balls, and coaching available on request.',
  corporateBody:
    'Why settle for the usual when you can do something unforgettable? Whether it\'s a team bonding day, an office retreat, or a client mixer, our pickleball events will have your crew competing, laughing, and connecting in ways that go beyond the boardroom. It\'s fun, it\'s fast-paced, and it\'s nothing like your average corporate event.',
  included: [
    ['Private, climate-controlled space', 'Our indoor facility, reserved just for your group.'],
    ['Paddles & balls provided', 'All the equipment your crew needs — just show up and play.'],
    ['Coaching on request', 'Add pro coaching to get everyone in the game fast.'],
    ['All ages & skill levels', 'Beginners to competitors, everyone gets a great game.'],
  ],
  // Real Google review (full text in CONTENT.md "Google reviews").
  testimonial: {
    name: 'Roanne A.',
    quote:
      'The space is great and has plenty of room for small groups. I’ve hosted a couple of work parties here, and each one turned out really well… The facility is always clean and well maintained, which makes every visit enjoyable.',
  },
}

// Booking form options — mirrored 1:1 from the club's real HubSpot event-inquiry
// form (LINKS.privateEventExternal). Don't invent tiers, prices, or services.
export const BOOKING = {
  membership: ['Non-Member', 'Basic Member', 'Gold Member', 'Emerald Member'],
  durations: ['2–3 hours', '3–4 hours', '4–5 hours', '5+ hours'],
  courts: ['2 courts', '3 courts', '4 courts', '5 courts', '6 courts', 'More than 6'],
  budgets: ['$350–$499', '$500–$999', '$1,000–$2,999', '$3,000–$4,999', '$5,000+'],
  services: [
    ['Tournament staff', ''],
    ['Tournament director', ''],
    ['Event room rental', 'Required in addition to court rental if you plan to serve food or alcohol.'],
    ['Event decoration package', ''],
    ['Hydration package', 'Bottled water, coconut water, sports beverages, and soda.'],
  ],
}
