import Reveal from '../components/Reveal.jsx'
import PageHeader from '../components/PageHeader.jsx'
import { LINKS, GAMEPLAY } from '../data.js'

function PointList({ points }) {
  return (
    <dl className="mt-8 space-y-6">
      {points.map(([term, def], i) => (
        <Reveal key={term} delay={i * 70} as="div" className="border-t border-green-800/10 pt-5">
          <dt className="display text-2xl text-green-800">{term}</dt>
          <dd className="mt-2 max-w-[62ch] font-body text-[15px] leading-relaxed text-green-950/80">{def}</dd>
        </Reveal>
      ))}
    </dl>
  )
}

export default function Gameplay() {
  return (
    <>
      <PageHeader eyebrow="Master the court, elevate your strategy" title="How to" accent="play">
        <p className="mt-6 max-w-[62ch] font-body text-lg text-cream-100/80">{GAMEPLAY.intro}</p>
      </PageHeader>

      {/* basics */}
      <section className="bg-cream-50 py-20 lg:py-28" aria-label="The basics">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-start">
            <div>
              <Reveal>
                <p className="eyebrow text-green-800">The basics</p>
              </Reveal>
              <Reveal delay={80}>
                <h2 className="display mt-4 text-[clamp(2.4rem,4.5vw,3.8rem)] text-green-950">
                  {GAMEPLAY.basics.title}
                </h2>
              </Reveal>
              <Reveal delay={160}>
                <p className="mt-6 max-w-[58ch] font-body text-lg text-green-950/80">{GAMEPLAY.basics.body}</p>
              </Reveal>
              <PointList points={GAMEPLAY.basics.points} />
            </div>
            <Reveal className="photo-tint relative overflow-hidden rounded-photo shadow-float lg:sticky lg:top-24">
              <img
                src="/images/action-court-3.jpg"
                alt="Overhead view of a doubles match showing court positioning and the kitchen"
                className="aspect-[4/5] w-full object-cover"
                loading="lazy"
              />
            </Reveal>
          </div>
        </div>
      </section>

      {/* strategy */}
      <section className="grain glow-dark relative overflow-hidden bg-green-950 py-20 lg:py-28" aria-label="Mastering strategy">
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-start">
            <Reveal className="photo-tint relative overflow-hidden rounded-photo shadow-float lg:order-2 lg:sticky lg:top-24">
              <img
                src="/images/action-court-4.jpg"
                alt="Player driving a forehand mid-rally"
                className="aspect-[4/5] w-full object-cover"
                loading="lazy"
              />
            </Reveal>
            <div className="lg:order-1">
              <Reveal>
                <p className="eyebrow text-cream-100">Strategy</p>
              </Reveal>
              <Reveal delay={80}>
                <h2 className="display mt-4 text-[clamp(2.4rem,4.5vw,3.8rem)] text-cream-50">
                  {GAMEPLAY.strategy.title}
                </h2>
              </Reveal>
              <Reveal delay={160}>
                <p className="mt-6 max-w-[58ch] font-body text-lg text-cream-100/80">{GAMEPLAY.strategy.body}</p>
              </Reveal>
              <dl className="mt-8 space-y-6">
                {GAMEPLAY.strategy.points.map(([term, def], i) => (
                  <Reveal key={term} delay={i * 70} as="div" className="border-t border-cream-50/10 pt-5">
                    <dt className="display text-2xl text-sun-400">{term}</dt>
                    <dd className="mt-2 max-w-[62ch] font-body text-[15px] leading-relaxed text-cream-100/80">{def}</dd>
                  </Reveal>
                ))}
              </dl>
            </div>
          </div>
        </div>
      </section>

      {/* doubles vs singles */}
      <section className="bg-cream-100 py-20 lg:py-28" aria-label="Doubles vs singles">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Reveal>
            <p className="eyebrow text-green-800">Formats</p>
          </Reveal>
          <Reveal delay={80}>
            <h2 className="display mt-4 text-[clamp(2.4rem,4.5vw,4rem)] text-green-950">
              Doubles vs. <span className="text-sun-600">singles</span>
            </h2>
          </Reveal>
          <div className="mt-12 grid gap-6 md:grid-cols-2">
            {GAMEPLAY.formats.map((format, i) => (
              <Reveal key={format.name} delay={i * 100} className="h-full">
                <article className="flex h-full flex-col rounded-card border border-green-800/10 bg-cream-50 p-8 shadow-card">
                  <h3 className="display text-4xl text-green-800">{format.name}</h3>
                  <p className="mt-4 font-body text-[15px] leading-relaxed text-green-950/80">{format.body}</p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-cream-50 py-20 text-center lg:py-24">
        <div className="mx-auto max-w-3xl px-4">
          <Reveal>
            <h2 className="display text-[clamp(2.6rem,5.5vw,4.5rem)] text-green-950">
              Ready to get on the <span className="text-sun-600">court?</span>
            </h2>
          </Reveal>
          <Reveal delay={120}>
            <p className="mx-auto mt-4 max-w-[52ch] font-body text-lg text-green-950/75">
              Book your first free Pickleball 101 class — a $90 value — and learn the fundamentals from our PPR
              certified coaches.
            </p>
          </Reveal>
          <Reveal delay={200} className="mt-8 flex flex-wrap justify-center gap-4">
            <a href={LINKS.free101} target="_blank" rel="noopener noreferrer" className="btn btn-sun !px-9 !py-4 !text-xl">
              Book free 101 class
            </a>
            <a href={LINKS.book} target="_blank" rel="noopener noreferrer" className="btn btn-outline-dark">
              Book a court
            </a>
          </Reveal>
        </div>
      </section>
    </>
  )
}
