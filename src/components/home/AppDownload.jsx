import Reveal from '../Reveal.jsx'
import { LINKS } from '../../data.js'

// The live site shows unlinked App Store / Google Play badges — app-store
// URLs are TBD, so the badges stay images and the CTA points at booking.
export default function AppDownload() {
  return (
    <section className="grain glow-dark relative overflow-hidden bg-green-950 py-24 lg:py-28">
      <div className="relative mx-auto flex max-w-7xl flex-col items-center gap-10 px-4 text-center sm:px-6 lg:flex-row lg:justify-between lg:px-8 lg:text-left">
        <div>
          <Reveal>
            <p className="eyebrow justify-center text-cream-100 lg:justify-start">Ready to serve up some fun?</p>
          </Reveal>
          <Reveal delay={80}>
            <h2 className="display mt-4 text-[clamp(3rem,7vw,6.5rem)] text-cream-50">
              Download <span className="text-sun-400">our app</span>
            </h2>
          </Reveal>
          <Reveal delay={160}>
            <p className="mx-auto mt-4 max-w-[52ch] font-body text-cream-100/75 lg:mx-0">
              Book courts, join open play, and sign up for programs. Pricing is for specific clubs — visit our app
              to learn more information.
            </p>
          </Reveal>
        </div>
        <Reveal delay={240} className="flex flex-col items-center gap-5">
          <div className="flex items-start gap-5">
            <figure className="flex flex-col items-center gap-2">
              <img
                src="/images/badge-app-store.png"
                alt="QR code — scan to get the WCPB app for iOS"
                className="h-24 w-24 rounded-2xl bg-white p-1.5 shadow-card"
                width="96"
                height="96"
                loading="lazy"
              />
              <figcaption className="display text-lg tracking-wide text-cream-100">iOS</figcaption>
            </figure>
            <figure className="flex flex-col items-center gap-2">
              <img
                src="/images/badge-google-play.png"
                alt="QR code — scan to get the WCPB app for Android"
                className="h-24 w-24 rounded-2xl bg-white p-1.5 shadow-card"
                width="96"
                height="96"
                loading="lazy"
              />
              <figcaption className="display text-lg tracking-wide text-cream-100">Android</figcaption>
            </figure>
          </div>
          <a href={LINKS.book} target="_blank" rel="noopener noreferrer" className="btn btn-sun">
            Play now
          </a>
        </Reveal>
      </div>
    </section>
  )
}
