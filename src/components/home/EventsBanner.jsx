import { Link } from 'react-router-dom'
import Reveal from '../Reveal.jsx'
import { CONTACT } from '../../data.js'

export default function EventsBanner() {
  return (
    <section className="relative overflow-hidden bg-sun-500 py-20 lg:py-24">
      <img
        src="/images/player-smash-cutout.png"
        alt=""
        aria-hidden="true"
        className="absolute -right-6 bottom-0 h-56 opacity-25 lg:h-72 lg:opacity-40"
      />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          <p className="eyebrow text-green-900">
            20% off your first event for a limited time with code PBEVENT
          </p>
        </Reveal>
        <Reveal delay={80}>
          <h2 className="display mt-4 max-w-4xl text-[clamp(2.6rem,5.5vw,5rem)] text-green-950">
            Host your next unforgettable event at West Coast Pickleball.
          </h2>
        </Reveal>
        <Reveal delay={160}>
          <p className="mt-5 max-w-[62ch] font-body text-lg text-green-950/85">
            Whether you&rsquo;re celebrating a birthday, planning a corporate outing, team-building session, or just
            gathering your favorite group for some fun, we make it easy. Our indoor facility offers a private,
            climate-controlled space with paddles, balls, and coaching available on request.
          </p>
        </Reveal>
        <Reveal delay={240} className="mt-8 flex flex-wrap items-center gap-5">
          <Link
            to="/book-event"
            className="btn bg-green-950 text-cream-50 shadow-card hover:-translate-y-0.5 hover:bg-green-900"
          >
            Book event
          </Link>
          <span className="font-body text-sm font-semibold text-green-950/70">Find us at {CONTACT.address}</span>
        </Reveal>
      </div>
    </section>
  )
}
