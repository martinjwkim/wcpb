import { LINKS, CONTACT } from '../../data.js'

export default function Hero() {
  return (
    <section className="relative isolate overflow-hidden bg-green-950" aria-label="West Coast Pickleball — intro">
      {/* real Yorba Linda interior photo, brand-tinted */}
      <div className="photo-tint absolute inset-0">
        <img
          src="/images/review-photo-1.jpg"
          alt="Inside the West Coast Pickleball Yorba Linda facility: indoor courts under the painted wall lettering"
          className="h-full w-full object-cover object-[center_38%]"
          fetchpriority="high"
        />
        {/* extra scrim: the court floor is bright, keep the subline readable */}
        <div
          className="absolute inset-0 z-10 bg-gradient-to-t from-green-950/95 via-green-950/55 to-green-950/25"
          aria-hidden="true"
        />
      </div>
      <div className="grain absolute inset-0" aria-hidden="true" />
      <div className="court-frame z-10" aria-hidden="true" />

      <div className="relative z-10 mx-auto flex min-h-[min(92svh,56rem)] max-w-7xl flex-col justify-end px-6 pb-24 pt-28 sm:px-10 lg:px-14">
        <p className="eyebrow rise text-cream-100" style={{ '--rise-delay': '80ms' }}>
          Yorba Linda · Orange County, CA
        </p>
        <h1 className="display mt-5 text-[clamp(3.4rem,9.5vw,8.5rem)] text-cream-50">
          <span className="rise block" style={{ '--rise-delay': '160ms' }}>
            Orange County&rsquo;s best
          </span>
          <span className="rise block text-sun-400" style={{ '--rise-delay': '260ms' }}>
            indoor pickleball
          </span>
          <span className="rise block" style={{ '--rise-delay': '360ms' }}>
            facility
          </span>
        </h1>
        <p
          className="rise mt-6 max-w-xl font-body text-lg text-cream-100/90"
          style={{ '--rise-delay': '460ms' }}
        >
          No membership required to play. Membership starts at $10.
          <span className="mt-1 block text-base text-cream-100/60">Find us at {CONTACT.address}</span>
        </p>
        <div className="rise mt-9 flex flex-wrap items-center gap-4" style={{ '--rise-delay': '560ms' }}>
          <a href={LINKS.book} target="_blank" rel="noopener noreferrer" className="btn btn-sun !px-9 !py-4 !text-xl">
            Book a court
          </a>
          <a href={LINKS.free101} target="_blank" rel="noopener noreferrer" className="btn btn-outline-light">
            Free 101 class — $90 value
          </a>
        </div>
      </div>
    </section>
  )
}
