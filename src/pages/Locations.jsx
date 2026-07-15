import { Link } from 'react-router-dom'
import Reveal from '../components/Reveal.jsx'
import StatusChip from '../components/StatusChip.jsx'
import PaddleMark from '../components/PaddleMark.jsx'
import { LINKS, CONTACT } from '../data.js'

const EXPECT = [
  {
    title: 'Indoor courts',
    body: 'Play rain or shine on our premium indoor courts, designed to provide the best playing conditions year-round.',
  },
  {
    title: 'Top-tier facilities',
    body: 'High-performance indoor courts, with more exciting amenities and features planned as we expand.',
  },
  {
    title: 'Beginner-friendly environment',
    body: 'New to pickleball? No problem. Our welcoming community and beginner programs will help you get started in no time.',
  },
  {
    title: 'Open play sessions',
    body: 'Available daily for drop-ins, with courts organized by skill level. No reservation required—just show up and play!',
  },
]

export default function Locations() {
  return (
    <>
      {/* header */}
      <section className="grain glow-dark relative overflow-hidden bg-green-950 pb-20 pt-24 lg:pb-28 lg:pt-32">
        <PaddleMark />
        <div className="court-frame" aria-hidden="true" />
        <div className="relative mx-auto max-w-7xl px-6 sm:px-10 lg:px-14">
          <p className="eyebrow rise text-cream-100" style={{ '--rise-delay': '60ms' }}>
            Your pickleball home awaits
          </p>
          <h1 className="display rise mt-4 text-[clamp(3.2rem,8vw,7.5rem)] text-cream-50" style={{ '--rise-delay': '140ms' }}>
            Find a club <span className="text-sun-400">near you</span>
          </h1>
          <p className="rise mt-6 max-w-[62ch] font-body text-lg text-cream-100/80" style={{ '--rise-delay': '240ms' }}>
            West Coast Pickleball is growing, and we&rsquo;re excited to welcome players from all over! Whether
            you&rsquo;re looking for competitive leagues, friendly matches, or expert coaching, our Yorba Linda club
            offers everything you need to elevate your game.
          </p>
        </div>
      </section>

      {/* Yorba Linda */}
      <section className="bg-cream-50 py-20 lg:py-28" aria-label="WCPB Yorba Linda">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-10 lg:grid-cols-2 lg:items-start">
            <Reveal className="photo-tint relative overflow-hidden rounded-photo shadow-float lg:sticky lg:top-24">
              <img
                src="/images/review-photo-2.jpg"
                alt="Indoor courts and players at WCPB Yorba Linda"
                className="aspect-[4/5] w-full object-cover sm:aspect-[4/3] lg:aspect-[4/5]"
                loading="lazy"
              />
              <div className="absolute left-5 top-5 z-10 flex gap-2">
                <StatusChip live>Now open</StatusChip>
                <StatusChip live={false}>
                  <span className="normal-case tracking-normal">Soft opened October 2024</span>
                </StatusChip>
              </div>
            </Reveal>

            <div>
              <Reveal>
                <p className="eyebrow text-green-800">Where it all began</p>
              </Reveal>
              <Reveal delay={80}>
                <h2 className="display mt-4 text-[clamp(2.8rem,5vw,4.8rem)] text-green-950">
                  WCPB <span className="text-sun-600">Yorba Linda</span>
                </h2>
              </Reveal>
              <Reveal delay={160}>
                <p className="mt-5 max-w-[60ch] font-body text-lg text-green-950/80">
                  Our Yorba Linda location is more than just a place to play—it&rsquo;s a thriving community of
                  players at all levels, united by a shared love for pickleball. Featuring state-of-the-art courts,
                  top-tier instructors, and a packed schedule of events, West Coast Pickleball Yorba Linda is your
                  go-to spot for everything pickleball.
                </p>
              </Reveal>

              <Reveal delay={220}>
                <dl className="mt-8 grid gap-4 rounded-card border border-green-800/10 bg-cream-100 p-7 shadow-card sm:grid-cols-2">
                  <div>
                    <dt className="font-body text-xs font-semibold uppercase tracking-[0.18em] text-green-800/70">Address</dt>
                    <dd className="mt-1 font-body font-semibold text-green-950">
                      <a href={LINKS.directions} target="_blank" rel="noopener noreferrer" className="transition-colors duration-200 hover:text-sun-600">
                        {CONTACT.address}
                      </a>
                    </dd>
                  </div>
                  <div>
                    <dt className="font-body text-xs font-semibold uppercase tracking-[0.18em] text-green-800/70">Call or text</dt>
                    <dd className="mt-1 font-body font-semibold text-green-950">
                      <a href={LINKS.phone} className="transition-colors duration-200 hover:text-sun-600">
                        {CONTACT.phone}
                      </a>
                    </dd>
                  </div>
                  <div>
                    <dt className="font-body text-xs font-semibold uppercase tracking-[0.18em] text-green-800/70">Email</dt>
                    <dd className="mt-1 font-body font-semibold text-green-950">
                      <a href={`mailto:${CONTACT.email}`} className="transition-colors duration-200 hover:text-sun-600">
                        {CONTACT.email}
                      </a>
                    </dd>
                  </div>
                  <div>
                    <dt className="font-body text-xs font-semibold uppercase tracking-[0.18em] text-green-800/70">Hours</dt>
                    <dd className="mt-1 font-body text-green-950/80">
                      Posted on the{' '}
                      <a
                        href={LINKS.schedule}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="font-semibold text-green-800 underline decoration-sun-500 decoration-2 underline-offset-4 transition-colors duration-200 hover:text-sun-600"
                      >
                        live daily schedule
                      </a>
                    </dd>
                  </div>
                </dl>
              </Reveal>

              <div className="mt-10 grid gap-5 sm:grid-cols-2">
                {EXPECT.map((item, i) => (
                  <Reveal key={item.title} delay={i * 80}>
                    <div className="h-full rounded-card bg-cream-100/60 p-6">
                      <h3 className="display text-2xl text-green-800">{item.title}</h3>
                      <p className="mt-2 font-body text-[15px] leading-relaxed text-green-950/75">{item.body}</p>
                    </div>
                  </Reveal>
                ))}
              </div>

              <Reveal delay={200} className="mt-9 flex flex-wrap gap-4">
                <a href={LINKS.book} target="_blank" rel="noopener noreferrer" className="btn btn-sun">
                  Book a court
                </a>
                <a href={LINKS.instagramYL} target="_blank" rel="noopener noreferrer" className="btn btn-outline-dark">
                  @wcpb.yorbalinda
                </a>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* Pomona */}
      <section className="grain glow-dark relative overflow-hidden bg-green-950 py-20 lg:py-28" aria-label="WCPB Pomona">
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid items-center gap-12 lg:grid-cols-[1.2fr_1fr]">
            <div>
              <Reveal>
                <StatusChip>Coming soon in 2026</StatusChip>
              </Reveal>
              <Reveal delay={80}>
                <h2 className="display mt-5 text-[clamp(2.8rem,6vw,5.5rem)] text-cream-50">
                  WCPB <span className="text-sun-400">Pomona</span>
                </h2>
              </Reveal>
              <Reveal delay={160}>
                <p className="mt-5 max-w-[60ch] font-body text-lg text-cream-100/80">
                  We&rsquo;re thrilled to announce the soft opening of our brand-new indoor West Coast Pickleball
                  facility in Pomona, CA. This is more than just courts, we are a community. Whether you&rsquo;re a
                  seasoned player or brand new to pickleball, you&rsquo;ll find the perfect place to play, connect,
                  and compete.
                </p>
              </Reveal>
              <Reveal delay={240}>
                <p className="mt-4 font-body text-sm text-cream-100/60">
                  Street address to be announced. Join the West Coast Pickleball Pomona insider list — follow{' '}
                  <a
                    href={LINKS.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-semibold text-sun-400 underline decoration-sun-500/50 underline-offset-4 transition-colors duration-200 hover:text-sun-500"
                  >
                    @westcoast.pb
                  </a>{' '}
                  or call {CONTACT.phone} for updates.
                </p>
              </Reveal>
            </div>
            <Reveal delay={150} className="hidden justify-center lg:flex">
              <img
                src="/images/logo-wordmark.png"
                alt="West Coast Pickleball logo"
                className="w-72 rotate-3 rounded-photo shadow-float"
                loading="lazy"
              />
            </Reveal>
          </div>
        </div>
      </section>

      {/* private events cross-sell */}
      <section className="bg-sun-500 py-16">
        <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-6 px-4 sm:px-6 lg:px-8">
          <div>
            <Reveal>
              <h2 className="display text-[clamp(2rem,4vw,3.2rem)] text-green-950">
                Host a private event at the Yorba Linda club
              </h2>
            </Reveal>
            <Reveal delay={100}>
              <p className="mt-2 font-body font-semibold text-green-950/80">
                20% off your first event for a limited time with code PBEVENT.
              </p>
            </Reveal>
          </div>
          <Reveal delay={160}>
            <Link
              to="/book-event"
              className="btn bg-green-950 text-cream-50 shadow-card hover:-translate-y-0.5 hover:bg-green-900"
            >
              Book event
            </Link>
          </Reveal>
        </div>
      </section>
    </>
  )
}
