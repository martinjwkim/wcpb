import { Link } from 'react-router-dom'
import Reveal from '../Reveal.jsx'

const MINI_TIERS = [
  { name: 'Basic', price: '$10', per: '/mo' },
  { name: 'Gold', price: '$1,200', per: '/yr', note: 'or $350 / 3 mo' },
  { name: 'Emerald', price: '$1,800', per: '/yr', note: 'or $500 / 3 mo' },
]

export default function MembershipTeaser() {
  return (
    <section className="bg-cream-100 py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-[1.1fr_1fr]">
          <div>
            <Reveal>
              <p className="eyebrow text-green-800">Membership</p>
            </Reveal>
            <Reveal delay={80}>
              <h2 className="display mt-4 text-[clamp(2.8rem,6vw,5.5rem)] text-green-950">
                Memberships starting at just <span className="text-sun-600">$10 per month</span>
              </h2>
            </Reveal>
            <Reveal delay={160}>
              <p className="mt-6 max-w-[58ch] font-body text-lg text-green-950/80">
                West Coast Pickleball offers a range of membership packages and facility rates to match every
                player&rsquo;s needs—from casual drop-ins to dedicated pickleball enthusiasts.
              </p>
            </Reveal>
            <Reveal delay={240}>
              <Link to="/membership" className="btn btn-sun mt-8">
                See membership &amp; pricing
              </Link>
            </Reveal>
          </div>

          <div className="grid gap-4">
            {MINI_TIERS.map((tier, i) => (
              <Reveal key={tier.name} delay={i * 90}>
                <Link
                  to="/membership"
                  className="group flex items-center justify-between gap-4 rounded-card border border-green-800/10 bg-cream-50 px-7 py-5 shadow-card transition-transform duration-300 ease-spring hover:-translate-y-1 hover:border-green-800/30"
                >
                  <div>
                    <h3 className="display text-2xl text-green-950">{tier.name}</h3>
                    {tier.note && <p className="font-body text-sm text-green-950/60">{tier.note}</p>}
                  </div>
                  <p className="display tabular text-4xl text-green-800 transition-colors duration-200 group-hover:text-sun-600">
                    {tier.price}
                    <span className="text-xl text-green-950/50">{tier.per}</span>
                  </p>
                </Link>
              </Reveal>
            ))}
            <Reveal delay={300}>
              <p className="px-2 font-body text-sm text-green-950/60">
                No membership required to play — non-member court and open-play rates apply.
              </p>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  )
}
