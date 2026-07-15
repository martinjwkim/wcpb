import Reveal from '../Reveal.jsx'

// The live site shows unlinked App Store / Google Play badges — app-store
// URLs are TBD, so the badges stay images.
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
        <Reveal delay={240} className="flex flex-none items-start gap-6 sm:gap-8">
          <figure className="flex flex-col items-center gap-3">
            <img
              src="/images/badge-app-store.png"
              alt="QR code — scan to get the WCPB app for iOS"
              className="h-36 w-36 rounded-2xl bg-white p-2 shadow-float sm:h-40 sm:w-40"
              width="160"
              height="160"
              loading="lazy"
            />
            <figcaption className="display text-xl tracking-wide text-cream-100">iOS</figcaption>
          </figure>
          <figure className="flex flex-col items-center gap-3">
            <img
              src="/images/badge-google-play.png"
              alt="QR code — scan to get the WCPB app for Android"
              className="h-36 w-36 rounded-2xl bg-white p-2 shadow-float sm:h-40 sm:w-40"
              width="160"
              height="160"
              loading="lazy"
            />
            <figcaption className="display text-xl tracking-wide text-cream-100">Android</figcaption>
          </figure>
        </Reveal>
      </div>
    </section>
  )
}
