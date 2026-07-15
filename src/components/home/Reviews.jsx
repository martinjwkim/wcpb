import Reveal from '../Reveal.jsx'
import { REVIEWS, LINKS } from '../../data.js'

export default function Reviews() {
  return (
    <section className="relative overflow-hidden bg-green-800 py-24 text-cream-50 lg:py-32">
      <div className="grain absolute inset-0" aria-hidden="true" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <div>
            <Reveal>
              <p className="eyebrow text-cream-100">From the community</p>
            </Reveal>
            <Reveal delay={80}>
              <h2 className="display mt-4 text-[clamp(2.6rem,5vw,4.5rem)] text-cream-50">
                Great vibes, <span className="text-sun-400">on record</span>
              </h2>
            </Reveal>
          </div>
          <Reveal delay={160} className="flex flex-wrap gap-3">
            <a href={LINKS.googleReviews} target="_blank" rel="noopener noreferrer" className="btn btn-outline-light">
              Google reviews
            </a>
            <a href={LINKS.yelp} target="_blank" rel="noopener noreferrer" className="btn btn-outline-light">
              Yelp
            </a>
          </Reveal>
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {REVIEWS.map((review, i) => (
            <Reveal key={review.name} delay={i * 100}>
              <figure className="flex h-full flex-col justify-between rounded-card bg-green-900/70 p-8 shadow-card">
                <blockquote className="font-body text-lg leading-relaxed text-cream-100/90">
                  &ldquo;{review.quote}&rdquo;
                </blockquote>
                <figcaption className="mt-6 flex items-center gap-3">
                  <span className="h-2 w-2 rounded-full bg-sun-500" aria-hidden="true" />
                  <span className="display text-xl tracking-wide text-sun-400">{review.name}</span>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
        <Reveal delay={320}>
          <p className="mt-8 font-body text-sm text-cream-100/60">See the full story from our community on Google and Yelp.</p>
        </Reveal>
      </div>
    </section>
  )
}
