import { useState } from 'react'
import Reveal from '../components/Reveal.jsx'
import PaddleMark from '../components/PaddleMark.jsx'
import { LINKS, TIERS, COMPARISON, RESERVED_RATES, OPEN_PLAY } from '../data.js'

// Renders a comparison-table cell: checkmarks and "free" get the sun accent,
// dashes stay quiet, so included/excluded reads at a glance. A "|" in the
// value splits a headline ("Free before 3PM weekdays") from its fine print.
function CellValue({ value }) {
  if (value === '✓') {
    return (
      <span className="grid h-6 w-6 place-items-center rounded-full bg-sun-500 text-green-950">
        <svg width="13" height="13" viewBox="0 0 24 24" fill="none" aria-hidden="true">
          <path d="M5 13l4 4L19 7" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
        <span className="sr-only">Included</span>
      </span>
    )
  }
  if (value === '—') {
    return (
      <span className="text-green-950/30">
        —<span className="sr-only">Not included</span>
      </span>
    )
  }
  if (value.includes('|')) {
    const [main, sub] = value.split('|')
    return (
      <>
        <span className="font-bold text-sun-600">{main}</span>
        <span className="mt-0.5 block text-[13px] leading-snug text-green-950/60">{sub}</span>
      </>
    )
  }
  if (/^free/i.test(value)) return <span className="font-bold text-sun-600">{value}</span>
  return value
}

// "Which fits you best?" made literal: pick how you play, the matching tier
// column lights up (and scrolls into view on mobile).
function ComparisonTable() {
  const [selected, setSelected] = useState(null)

  function pick(i) {
    const next = selected === i ? null : i
    setSelected(next)
    if (next !== null) {
      document.getElementById(`tier-col-${i}`)?.scrollIntoView({ behavior: 'smooth', inline: 'center', block: 'nearest' })
    }
  }

  return (
    <>
      <div className="mt-10">
        <p className="font-body text-sm font-semibold uppercase tracking-[0.14em] text-green-800">
          How do you play? Pick one to see your match
        </p>
        <div className="mt-3 flex flex-wrap gap-2">
          {COMPARISON.columns.map((col, i) => (
            <button
              key={col.name}
              type="button"
              onClick={() => pick(i)}
              aria-pressed={selected === i}
              className={`inline-flex min-h-11 cursor-pointer items-center gap-2 rounded-full border-2 px-4 py-2 font-body text-[15px] font-semibold transition-colors duration-200 ${
                selected === i
                  ? 'border-sun-500 bg-sun-500 text-green-950'
                  : 'border-green-800/20 bg-cream-50 text-green-950/75 hover:border-green-800/45'
              }`}
            >
              &ldquo;{col.persona}&rdquo;
              <span className={`text-[13px] font-bold uppercase tracking-wide ${selected === i ? 'text-green-900' : 'text-green-800/60'}`}>
                → {col.name}
              </span>
            </button>
          ))}
        </div>
      </div>

      <p className="mt-8 font-body text-sm font-semibold text-green-800 md:hidden" aria-hidden="true">
        Swipe to compare all four tiers →
      </p>
      <div className="relative mt-4 md:mt-8">
        <div className="overflow-x-auto rounded-card border border-green-800/10 shadow-card">
          <table className="w-full min-w-[52rem] table-fixed border-collapse bg-cream-50 text-left font-body text-[15px] md:min-w-[60rem]">
            <colgroup>
              <col className="w-40 md:w-[14rem]" />
              <col />
              <col />
              <col className="w-[24%]" />
              <col />
            </colgroup>
            <thead>
              <tr className="bg-green-950 align-top text-cream-50">
                <th scope="col" className="sticky left-0 bg-green-950 px-5 py-5">
                  <span className="sr-only">Feature</span>
                </th>
                {COMPARISON.columns.map((col, i) => (
                  <th
                    key={col.name}
                    id={`tier-col-${i}`}
                    scope="col"
                    className={`px-5 py-5 font-normal transition-colors duration-200 ${selected === i ? 'bg-green-800' : ''}`}
                  >
                    <span
                      className={`block font-display text-xl font-semibold uppercase tracking-wide ${
                        col.name === 'Emerald' || col.name === 'Gold' ? 'text-sun-400' : ''
                      }`}
                    >
                      {col.name}
                    </span>
                    <span className="tabular mt-0.5 block text-sm font-semibold text-cream-100/85">{col.price}</span>
                    <span
                      className={`mt-2 inline-block rounded-full bg-sun-500 px-2.5 py-0.5 text-[11px] font-bold uppercase tracking-wide text-green-950 transition-opacity duration-200 ${
                        selected === i ? 'opacity-100' : 'opacity-0'
                      }`}
                      aria-hidden={selected !== i}
                    >
                      Your match
                    </span>
                  </th>
                ))}
              </tr>
            </thead>
            {COMPARISON.groups.map((group) => (
              <tbody key={group.title}>
                <tr>
                  <th
                    scope="colgroup"
                    colSpan={5}
                    className="sticky left-0 border-y border-green-800/10 bg-cream-200/80 px-5 py-2.5 font-body text-xs font-bold uppercase tracking-[0.18em] text-green-800"
                  >
                    {group.title}
                  </th>
                </tr>
                {group.rows.map(([feature, ...values], i) => (
                  <tr key={feature} className={i % 2 ? 'bg-cream-100/70' : ''}>
                    <th scope="row" className={`sticky left-0 px-5 py-3.5 font-semibold text-green-950 ${i % 2 ? 'bg-cream-100' : 'bg-cream-50'}`}>
                      {feature}
                    </th>
                    {values.map((value, j) => (
                      <td
                        key={j}
                        className={`tabular px-5 py-3.5 align-top text-green-950/80 transition-colors duration-200 ${
                          selected === j ? 'bg-sun-500/[0.13]' : ''
                        }`}
                      >
                        <CellValue value={value} />
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            ))}
          </table>
        </div>
        {/* mobile scroll affordance: fade hints at the off-screen tiers */}
        <div
          className="pointer-events-none absolute inset-y-0 right-0 w-14 rounded-r-card bg-gradient-to-l from-cream-50/95 to-transparent md:hidden"
          aria-hidden="true"
        />
      </div>
    </>
  )
}

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
        <PaddleMark />
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
              <div className="mt-6 divide-y divide-green-800/10 border-t border-green-800/10">
                {OPEN_PLAY.map(([tier, price, note]) => (
                  <div key={tier} className="grid items-baseline gap-x-6 gap-y-1 py-4 sm:grid-cols-[9rem_7rem_1fr]">
                    <p className="font-body text-sm font-bold uppercase tracking-[0.14em] text-green-800">{tier}</p>
                    <p className={`display tabular text-3xl ${price === 'Free' ? 'text-sun-600' : 'text-green-950'}`}>
                      {price}
                    </p>
                    <p className="font-body text-[15px] leading-snug text-green-950/70">{note}</p>
                  </div>
                ))}
              </div>
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
            <ComparisonTable />
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
