import Reveal from '../Reveal.jsx'

// Real partner strip from the live homepage: Kaiser Permanente, The Wine
// Group, Spectrum, JOOLA, Skechers, Celsius.
export default function SponsorsStrip() {
  return (
    <section className="border-y border-green-800/10 bg-cream-50 py-14">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          <p className="eyebrow justify-center text-green-800">Our partners</p>
        </Reveal>
        <Reveal delay={100}>
          <div className="mx-auto mt-8 max-w-5xl rounded-card border border-green-800/10 bg-white px-6 py-5 shadow-card">
            <img
              src="/images/sponsors-strip.png"
              alt="WCPB partners: Kaiser Permanente, The Wine Group, Spectrum, JOOLA, Skechers, Celsius"
              className="w-full"
              loading="lazy"
            />
          </div>
        </Reveal>
      </div>
    </section>
  )
}
