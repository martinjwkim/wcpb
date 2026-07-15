import { Link } from 'react-router-dom'
import Reveal from '../components/Reveal.jsx'
import PageHeader from '../components/PageHeader.jsx'
import { LINKS, CONTACT, EVENTS } from '../data.js'

export default function Events() {
  return (
    <>
      <PageHeader eyebrow="Create unforgettable experiences with pickleball" title="Book a private" accent="event">
        <p className="mt-6 max-w-[62ch] font-body text-lg text-cream-100/80">{EVENTS.intro}</p>
        <div className="mt-8 flex flex-wrap items-center gap-4">
          <Link to="/book-event" className="btn btn-sun !px-8 !py-4 !text-xl">
            Book event
          </Link>
          <a href={LINKS.phone} className="btn btn-outline-light">
            Call {CONTACT.phone}
          </a>
        </div>
      </PageHeader>

      {/* promo + host intro over a real event photo */}
      <section className="bg-cream-50 py-20 lg:py-28" aria-label="Host your event">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
            <Reveal className="photo-tint relative overflow-hidden rounded-photo shadow-float">
              <img
                src="/images/action-leagues.jpg"
                alt="A group of players tapping paddles at the net during a private event"
                className="aspect-[4/3] w-full object-cover"
                loading="lazy"
              />
              <div className="absolute inset-x-0 bottom-0 z-10 p-6 sm:p-8">
                <p className="inline-flex rounded-full bg-sun-500 px-4 py-2 font-body text-xs font-bold uppercase tracking-[0.14em] text-green-950">
                  {EVENTS.promo}
                </p>
              </div>
            </Reveal>

            <div>
              <Reveal>
                <p className="eyebrow text-green-800">Group outings & celebrations</p>
              </Reveal>
              <Reveal delay={80}>
                <h2 className="display mt-4 text-[clamp(2.4rem,4.5vw,3.8rem)] text-green-950">
                  Host your next unforgettable event at{' '}
                  <span className="text-sun-600">West Coast Pickleball</span>
                </h2>
              </Reveal>
              <Reveal delay={160}>
                <p className="mt-6 max-w-[58ch] font-body text-lg text-green-950/80">{EVENTS.hostBody}</p>
              </Reveal>
              <Reveal delay={240}>
                <figure className="mt-6 border-l-4 border-sun-500 pl-5">
                  <blockquote className="font-body text-green-950/80">&ldquo;{EVENTS.testimonial.quote}&rdquo;</blockquote>
                  <figcaption className="mt-2 font-body text-sm font-semibold text-green-800">
                    {EVENTS.testimonial.name} · Google review
                  </figcaption>
                </figure>
              </Reveal>
              <Reveal delay={300}>
                <p className="mt-5 font-body font-semibold text-green-800">Find us at {CONTACT.address}</p>
              </Reveal>
              <Reveal delay={360}>
                <Link to="/book-event" className="btn btn-sun mt-8">
                  Start planning
                </Link>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* what's included */}
      <section className="bg-cream-100 py-20 lg:py-28" aria-label="What's included">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Reveal>
            <p className="eyebrow text-green-800">What&rsquo;s included</p>
          </Reveal>
          <Reveal delay={80}>
            <h2 className="display mt-4 text-[clamp(2.4rem,4.5vw,4rem)] text-green-950">
              Everything for a <span className="text-sun-600">great game</span>
            </h2>
          </Reveal>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {EVENTS.included.map((item, i) => (
              <Reveal key={item[0]} delay={i * 90} className="h-full">
                <div className="flex h-full flex-col rounded-card border border-green-800/10 bg-cream-50 p-7 shadow-card">
                  <span className="display tabular text-3xl text-sun-600">0{i + 1}</span>
                  <h3 className="display mt-3 text-2xl text-green-950">{item[0]}</h3>
                  <p className="mt-2 font-body text-[15px] leading-relaxed text-green-950/75">{item[1]}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* corporate team building */}
      <section className="grain glow-dark relative overflow-hidden bg-green-950 py-20 lg:py-28" aria-label="Corporate team building">
        <img
          src="/images/player-smash-cutout.png"
          alt=""
          aria-hidden="true"
          className="absolute -right-6 bottom-0 hidden h-72 opacity-25 lg:block"
        />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <Reveal>
              <p className="eyebrow text-cream-100">Corporate events & team building</p>
            </Reveal>
            <Reveal delay={80}>
              <h2 className="display mt-4 text-[clamp(2.6rem,5vw,4.5rem)] text-cream-50">
                The best team building <span className="text-sun-400">you&rsquo;ll ever have</span>
              </h2>
            </Reveal>
            <Reveal delay={160}>
              <p className="mt-6 font-body text-lg text-cream-100/80">{EVENTS.corporateBody}</p>
            </Reveal>
            <Reveal delay={240} className="mt-8 flex flex-wrap items-center gap-5">
              <Link to="/book-event" className="btn btn-sun !px-8 !py-4 !text-xl">
                Book your event
              </Link>
              <p className="font-body text-sm font-semibold text-cream-100/70">Use code PBEVENT for 20% off your first event</p>
            </Reveal>
          </div>
        </div>
      </section>
    </>
  )
}
