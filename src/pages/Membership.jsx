import Reveal from '../components/Reveal.jsx'
import { LINKS, TIERS, COMPARISON, RESERVED_RATES } from '../data.js'

function RateCard({ band, hours, days, prices, highlight = false }) {
  return (
    <div
      className={`flex h-full flex-col rounded-card p-7 shadow-card ${
        highlight ? 'grain glow-dark relative overflow-hidden bg-green-950 text-cream-50' : 'bg-green-900 text-cream-50'
      }`}
    >
      <div className="relative flex h-full flex-col">
        <p className="eyebrow text-sun-400">{band}</p>
        <p className="display tabular mt-3 text-4xl text-cream-50">{hours}</p>
        {days && <p className="font-body text-sm font-semibold uppercase tracking-[0.18em] text-cream-100/60">{days}</p>}
        <dl className="mt-auto space-y-2 border-t border-cream-50/10 pt-5">
          {prices.map(([tier, price]) => (
            <div key={tier} className="flex items-baseline justify-between gap-4">
              <dt className="font-body text-sm text-cream-100/75">{tier}</dt>
              <dd className={`display tabular text-2xl ${price === 'Free' ? 'text-sun-400' : 'text-cream-50'}`}>
                {price}
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </div>
  )
}

export default function Membership() {
  return (
    <>
      {/* header */}
      <section className="grain glow-dark relative overflow-hidden bg-green-950 pb-20 pt-24 lg:pb-28 lg:pt-32">
        <div className="court-frame" aria-hidden="true" />
        <div className="relative mx-auto max-w-7xl px-6 sm:px-10 lg:px-14">
          <p className="eyebrow rise text-cream-100" style={{ '--rise-delay': '60ms' }}>
            Let&rsquo;s get you started
          </p>
          <h1 className="display rise mt-4 text-[clamp(3.2rem,8vw,7.5rem)] text-cream-50" style={{ '--rise-delay': '140ms' }}>
            Membership <span className="text-sun-400">&amp; pricing</span>
          </h1>
          <p className="rise mt-6 max-w-[62ch] font-body text-lg text-cream-100/80" style={{ '--rise-delay': '240ms' }}>
            West Coast Pickleball offers a range of membership packages and facility rates to match every
            player&rsquo;s needs—from casual drop-ins to dedicated pickleball enthusiasts. Explore our flexible
            options and choose the membership that fits your game.
          </p>
          <p
            className="rise mt-6 inline-flex rounded-full border border-sun-500/70 px-5 py-2 font-body text-sm font-bold uppercase tracking-[0.14em] text-sun-400"
            style={{ '--rise-delay': '320ms' }}
          >
            Memberships starting at just $10 per month
          </p>
          <div className="rise mt-8 flex flex-wrap gap-4" style={{ '--rise-delay': '400ms' }}>
            <a href="#plans" className="btn btn-sun !px-8 !py-4 !text-xl">
              See plans
            </a>
            <a href={LINKS.book} target="_blank" rel="noopener noreferrer" className="btn btn-outline-light">
              Join on PlayByPoint
            </a>
          </div>
        </div>
      </section>

      {/* tier cards */}
      <section id="plans" className="scroll-mt-24 bg-cream-50 py-20 lg:py-28" aria-label="Membership tiers">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {TIERS.map((tier, i) => {
              const emphasized = tier.name === 'Emerald'
              return (
                <Reveal key={tier.name} delay={i * 90} className="h-full">
                  <article
                    className={`flex h-full flex-col rounded-card p-7 shadow-card transition-transform duration-300 ease-spring hover:-translate-y-1.5 ${
                      emphasized
                        ? 'grain relative overflow-hidden bg-green-950 text-cream-50'
                        : 'border border-green-800/10 bg-cream-100 text-green-950'
                    }`}
                  >
                    <div className="relative flex h-full flex-col">
                      <h2 className={`display text-3xl ${emphasized ? 'text-sun-400' : 'text-green-800'}`}>{tier.name}</h2>
                      <div className="mt-4 min-h-[5.5rem]">
                        {tier.price ? (
                          <>
                            {tier.was && (
                              <p className={`font-body text-sm line-through ${emphasized ? 'text-cream-100/50' : 'text-green-950/45'}`}>
                                {tier.was}
                                {tier.per}
                              </p>
                            )}
                            <p className="display tabular text-5xl">
                              {tier.price}
                              <span className={`text-2xl ${emphasized ? 'text-cream-100/60' : 'text-green-950/50'}`}>{tier.per}</span>
                            </p>
                            {tier.alt && (
                              <p className={`mt-1 font-body text-sm ${emphasized ? 'text-cream-100/70' : 'text-green-950/60'}`}>
                                {tier.alt}
                              </p>
                            )}
                          </>
                        ) : (
                          <p className="display text-4xl">{tier.priceNote}</p>
                        )}
                      </div>
                      <ul className={`mt-5 flex-1 space-y-2.5 border-t pt-5 font-body text-[15px] leading-snug ${emphasized ? 'border-cream-50/15 text-cream-100/85' : 'border-green-800/10 text-green-950/80'}`}>
                        {tier.perks.map((perk) => (
                          <li key={perk} className="flex gap-2.5">
                            <span className="mt-2 h-1.5 w-1.5 flex-none rounded-full bg-sun-500" aria-hidden="true" />
                            {perk}
                          </li>
                        ))}
                      </ul>
                      <a
                        href={LINKS.book}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`btn mt-7 w-full !text-base ${emphasized ? 'btn-sun' : 'btn-outline-dark'}`}
                      >
                        {tier.price ? 'Join on PlayByPoint' : 'Book as guest'}
                      </a>
                    </div>
                  </article>
                </Reveal>
              )
            })}
          </div>
          <Reveal delay={200}>
            <p className="mt-8 font-body text-sm text-green-950/60">
              Pricing is for specific clubs. Visit our app to learn more information.{' '}
              <a
                href={LINKS.membershipTable}
                target="_blank"
                rel="noopener noreferrer"
                className="font-semibold text-green-800 underline decoration-sun-500 decoration-2 underline-offset-4 transition-colors duration-200 hover:text-sun-600"
              >
                Download the official membership table
              </a>
            </p>
          </Reveal>
        </div>
      </section>

      {/* reserved play rates */}
      <section className="bg-cream-100 py-20 lg:py-28" aria-label="Court reservation rates">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Reveal>
            <p className="eyebrow text-green-800">Reserved play</p>
          </Reveal>
          <Reveal delay={80}>
            <h2 className="display mt-4 text-[clamp(2.4rem,4.5vw,4rem)] text-green-950">
              Court reservations, <span className="text-sun-600">per hour</span>
            </h2>
          </Reveal>

          <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {RESERVED_RATES.weekday.map((rate, i) => (
              <Reveal key={rate.band} delay={i * 90} className="h-full">
                <RateCard {...rate} />
              </Reveal>
            ))}
            <Reveal delay={270} className="h-full">
              <RateCard {...RESERVED_RATES.weekend} highlight />
            </Reveal>
          </div>

          <Reveal delay={200}>
            <div className="mt-10 rounded-card border border-green-800/10 bg-cream-50 p-7 shadow-card sm:p-8">
              <div className="flex flex-wrap items-baseline justify-between gap-x-6 gap-y-2">
                <h3 className="display text-3xl text-green-950">Open play</h3>
                <p className="font-body text-sm font-semibold uppercase tracking-[0.18em] text-green-800/70">
                  2–3 hour sessions
                </p>
              </div>
              <dl className="mt-6 grid gap-x-8 gap-y-6 border-t border-green-800/10 pt-6 sm:grid-cols-2 lg:grid-cols-4">
                <div>
                  <dt className="font-body text-xs font-semibold uppercase tracking-[0.18em] text-green-800/70">
                    Non-Member
                  </dt>
                  <dd className="display tabular mt-1.5 text-4xl text-green-950">$15–$20</dd>
                </div>
                <div>
                  <dt className="font-body text-xs font-semibold uppercase tracking-[0.18em] text-green-800/70">
                    Basic
                  </dt>
                  <dd className="display tabular mt-1.5 text-4xl text-green-950">$10–$15</dd>
                </div>
                <div>
                  <dt className="font-body text-xs font-semibold uppercase tracking-[0.18em] text-green-800/70">
                    Gold
                  </dt>
                  <dd className="mt-1.5">
                    <span className="display text-4xl text-sun-600">Free</span>
                    <span className="mt-1 block font-body text-sm leading-snug text-green-950/70">
                      weekdays before 3PM — up to 50% off after 3PM &amp; weekends
                    </span>
                  </dd>
                </div>
                <div>
                  <dt className="font-body text-xs font-semibold uppercase tracking-[0.18em] text-green-800/70">
                    Emerald
                  </dt>
                  <dd className="mt-1.5">
                    <span className="display text-4xl text-sun-600">Free</span>
                    <span className="mt-1 block font-body text-sm leading-snug text-green-950/70">any time</span>
                  </dd>
                </div>
              </dl>
              <p className="mt-6 border-t border-green-800/10 pt-5 font-body text-sm text-green-950/60">
                Check the{' '}
                <a
                  href={LINKS.schedule}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-semibold text-green-800 underline decoration-sun-500 decoration-2 underline-offset-4 transition-colors duration-200 hover:text-sun-600"
                >
                  daily schedule
                </a>{' '}
                for exact programming.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* comparison table */}
      <section className="bg-cream-50 py-20 lg:py-28" aria-label="Membership comparison">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Reveal>
            <p className="eyebrow text-green-800">Compare</p>
          </Reveal>
          <Reveal delay={80}>
            <h2 className="display mt-4 text-[clamp(2.4rem,4.5vw,4rem)] text-green-950">
              Which club membership <span className="text-sun-600">fits you best?</span>
            </h2>
          </Reveal>

          <Reveal delay={160}>
            <p className="mt-8 font-body text-sm font-semibold text-green-800 md:hidden" aria-hidden="true">
              Swipe to compare all four tiers →
            </p>
            <div className="relative mt-4 md:mt-12">
              <div className="overflow-x-auto rounded-card border border-green-800/10 shadow-card">
                <table className="w-full min-w-[46rem] table-fixed border-collapse bg-cream-50 text-left font-body text-[15px] md:min-w-[56rem]">
                  <colgroup>
                    <col className="w-36 md:w-[15rem]" />
                    <col />
                    <col />
                    <col className="w-[22%]" />
                    <col className="w-[22%]" />
                  </colgroup>
                <thead>
                  <tr className="bg-green-950 text-cream-50">
                    <th scope="col" className="sticky left-0 bg-green-950 px-5 py-4 font-display text-lg font-semibold uppercase tracking-wide">
                      Features
                    </th>
                    {COMPARISON.columns.map((col) => (
                      <th key={col} scope="col" className="px-5 py-4 font-display text-lg font-semibold uppercase tracking-wide">
                        {col === 'Emerald' || col === 'Gold' ? <span className="text-sun-400">{col}</span> : col}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {COMPARISON.rows.map(([feature, ...values], i) => (
                    <tr key={feature} className={i % 2 ? 'bg-cream-100/70' : ''}>
                      <th scope="row" className={`sticky left-0 px-5 py-3.5 font-semibold text-green-950 ${i % 2 ? 'bg-cream-100' : 'bg-cream-50'}`}>
                        {feature}
                      </th>
                      {values.map((value, j) => (
                        <td key={j} className="tabular px-5 py-3.5 text-green-950/80">
                          {value}
                        </td>
                      ))}
                    </tr>
                  ))}
                </tbody>
                </table>
              </div>
              {/* mobile scroll affordance: fade hints at the off-screen tiers */}
              <div
                className="pointer-events-none absolute inset-y-0 right-0 w-14 rounded-r-card bg-gradient-to-l from-cream-50/95 to-transparent md:hidden"
                aria-hidden="true"
              />
            </div>
          </Reveal>
          <Reveal delay={220}>
            <p className="mt-5 font-body text-sm text-green-950/60">{COMPARISON.footnote}</p>
          </Reveal>
        </div>
      </section>

      {/* CTA */}
      <section className="grain glow-dark relative overflow-hidden bg-green-950 py-20 text-center lg:py-24">
        <div className="relative mx-auto max-w-3xl px-4">
          <Reveal>
            <h2 className="display text-[clamp(2.8rem,6vw,5rem)] text-cream-50">
              Play more. <span className="text-sun-400">Experience more.</span>
            </h2>
          </Reveal>
          <Reveal delay={120} className="mt-8 flex flex-wrap justify-center gap-4">
            <a href={LINKS.book} target="_blank" rel="noopener noreferrer" className="btn btn-sun !px-9 !py-4 !text-xl">
              Book on PlayByPoint
            </a>
            <a href={LINKS.membershipTable} target="_blank" rel="noopener noreferrer" className="btn btn-outline-light">
              Download membership table
            </a>
          </Reveal>
        </div>
      </section>
    </>
  )
}
