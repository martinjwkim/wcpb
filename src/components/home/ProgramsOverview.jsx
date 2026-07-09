import { Link } from 'react-router-dom'
import Reveal from '../Reveal.jsx'
import StatusChip from '../StatusChip.jsx'

const CARDS = [
  {
    title: 'Group lessons',
    desc: 'Beginner, intermediate, and advanced sessions led by our professional instructors.',
    img: '/images/action-play-wide.jpg',
    alt: 'Player working on serve technique during a lesson',
    to: '/programs#lessons',
    live: true,
    status: 'Live now',
  },
  {
    title: 'Open play & leagues',
    desc: 'Daily drop-in open play with courts split by skill level. Leagues and tournaments coming soon.',
    img: '/images/action-open-play.jpg',
    alt: 'Four players meeting at the net after open play',
    to: '/programs#leagues',
    live: true,
    status: 'Open play live',
  },
  {
    title: 'Clinics',
    desc: 'Intense, focused training that sharpens specific skills and strategies.',
    img: '/images/clinic-training.png',
    alt: 'Player lunging for a backhand during clinic training',
    to: '/programs#clinics',
    live: false,
    status: 'Coming soon',
  },
  {
    title: 'Junior Academy',
    desc: 'A dedicated program introducing young players to the fun, fast-paced world of pickleball.',
    img: '/images/action-court-2.jpg',
    alt: 'Pickleball paddles and ball resting against the net',
    to: '/programs#junior-academy',
    live: false,
    status: 'Coming soon',
  },
]

export default function ProgramsOverview() {
  return (
    <section className="grain glow-dark relative overflow-hidden bg-green-950 py-24 lg:py-32">
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <div>
            <Reveal>
              <p className="eyebrow text-cream-100">Programs</p>
            </Reveal>
            <Reveal delay={80}>
              <h2 className="display mt-4 max-w-2xl text-[clamp(2.6rem,5vw,4.5rem)] text-cream-50">
                Your game, <span className="text-sun-400">your way</span>
              </h2>
            </Reveal>
          </div>
          <Reveal delay={160}>
            <Link to="/programs" className="btn btn-outline-light">
              All programs
            </Link>
          </Reveal>
        </div>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {CARDS.map((card, i) => (
            <Reveal key={card.title} delay={i * 90} className="h-full">
              <Link
                to={card.to}
                className="group flex h-full flex-col overflow-hidden rounded-card bg-green-900 shadow-card transition-transform duration-300 ease-spring hover:-translate-y-2"
              >
                <div className="photo-tint relative flex-none overflow-hidden">
                  <img
                    src={card.img}
                    alt={card.alt}
                    loading="lazy"
                    className="aspect-[4/5] w-full object-cover transition-transform duration-500 ease-spring group-hover:scale-[1.05]"
                  />
                  <div className="absolute left-4 top-4 z-10">
                    <StatusChip live={card.live}>{card.status}</StatusChip>
                  </div>
                </div>
                <div className="flex-1 p-6">
                  <h3 className="display text-3xl text-cream-50 transition-colors duration-200 group-hover:text-sun-400">
                    {card.title}
                  </h3>
                  <p className="mt-2 font-body text-sm leading-relaxed text-cream-100/70">{card.desc}</p>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
