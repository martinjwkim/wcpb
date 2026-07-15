import PaddleMark from './PaddleMark.jsx'

// Shared dark page header — matches the Membership/Locations/Programs pattern
// (court-line frame + rise-in title). Keeps the new routes visually consistent.
export default function PageHeader({ eyebrow, title, accent, children }) {
  return (
    <section className="grain glow-dark relative overflow-hidden bg-green-950 pb-20 pt-24 lg:pb-28 lg:pt-32">
      <PaddleMark />
      <div className="court-frame" aria-hidden="true" />
      <div className="relative mx-auto max-w-7xl px-6 sm:px-10 lg:px-14">
        <p className="eyebrow rise text-cream-100" style={{ '--rise-delay': '60ms' }}>
          {eyebrow}
        </p>
        <h1 className="display rise mt-4 text-[clamp(3.2rem,8vw,7.5rem)] text-cream-50" style={{ '--rise-delay': '140ms' }}>
          {title} {accent && <span className="text-sun-400">{accent}</span>}
        </h1>
        {children && (
          <div className="rise" style={{ '--rise-delay': '240ms' }}>
            {children}
          </div>
        )}
      </div>
    </section>
  )
}
