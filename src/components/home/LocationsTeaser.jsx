import { Link } from 'react-router-dom'
import Reveal from '../Reveal.jsx'
import StatusChip from '../StatusChip.jsx'
import { CONTACT } from '../../data.js'

export default function LocationsTeaser() {
  return (
    <section className="bg-cream-50 py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          <p className="eyebrow text-green-800">Find a club near you</p>
        </Reveal>
        <Reveal delay={80}>
          <h2 className="display mt-4 text-[clamp(2.6rem,5vw,4.5rem)] text-green-950">
            Your pickleball home <span className="text-sun-600">awaits</span>
          </h2>
        </Reveal>

        <div className="mt-12 grid gap-6 lg:grid-cols-2">
          <Reveal>
            <Link
              to="/locations"
              className="group photo-tint relative block min-h-[24rem] overflow-hidden rounded-photo shadow-float"
            >
              <img
                src="/images/instagram-2.png"
                alt="Indoor rally under the West Coast Pickleball banner at the Yorba Linda facility"
                loading="lazy"
                className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 ease-spring group-hover:scale-[1.04]"
              />
              <div className="absolute inset-x-0 bottom-0 z-10 p-8">
                <StatusChip live>Now open</StatusChip>
                <h3 className="display mt-4 text-5xl text-cream-50">Yorba Linda</h3>
                <p className="mt-2 font-body text-cream-100/85">{CONTACT.address}</p>
                <p className="font-body text-sm text-cream-100/60">Soft opened October 2024 · Where it all began.</p>
              </div>
            </Link>
          </Reveal>

          <Reveal delay={120}>
            <Link
              to="/locations"
              className="group grain glow-dark relative flex min-h-[24rem] flex-col justify-end overflow-hidden rounded-photo bg-green-900 p-8 shadow-float"
            >
              <img
                src="/images/logo-sun-wave.png"
                alt=""
                aria-hidden="true"
                className="absolute -right-10 -top-10 h-56 w-56 opacity-15 transition-transform duration-500 ease-spring group-hover:rotate-12"
              />
              <div className="relative">
                <StatusChip>Coming soon in 2026</StatusChip>
                <h3 className="display mt-4 text-5xl text-cream-50">Pomona</h3>
                <p className="mt-2 max-w-md font-body text-cream-100/75">
                  A brand-new indoor West Coast Pickleball facility. This is more than just courts, we are a
                  community.
                </p>
              </div>
            </Link>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
