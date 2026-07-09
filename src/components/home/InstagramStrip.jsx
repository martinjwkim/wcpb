import Reveal from '../Reveal.jsx'
import { LINKS, INSTAGRAM_IMAGES } from '../../data.js'

export default function InstagramStrip() {
  return (
    <section className="bg-cream-100 py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <div>
            <Reveal>
              <p className="eyebrow text-green-800">@westcoast.pb</p>
            </Reveal>
            <Reveal delay={80}>
              <h2 className="display mt-4 text-[clamp(2.6rem,5vw,4.5rem)] text-green-950">
                Follow us on <span className="text-sun-600">Instagram</span>
              </h2>
            </Reveal>
            <Reveal delay={140}>
              <p className="mt-3 font-body text-green-950/70">
                Tournaments, socials, quick tips, and more. See the best moments with our players.
              </p>
            </Reveal>
          </div>
          <Reveal delay={200} className="flex flex-wrap gap-3">
            <a href={LINKS.instagram} target="_blank" rel="noopener noreferrer" className="btn btn-outline-dark !text-base">
              Corporate IG
            </a>
            <a href={LINKS.instagramYL} target="_blank" rel="noopener noreferrer" className="btn btn-outline-dark !text-base">
              Yorba Linda IG
            </a>
          </Reveal>
        </div>

        <div className="mt-12 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-6">
          {INSTAGRAM_IMAGES.map((img, i) => (
            <Reveal key={img.src} delay={i * 60}>
              <a
                href={LINKS.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="group block overflow-hidden rounded-card shadow-card"
                aria-label="Open the West Coast Pickleball Instagram"
              >
                <img
                  src={img.src}
                  alt={img.alt}
                  loading="lazy"
                  className="aspect-square w-full object-cover transition-transform duration-500 ease-spring group-hover:scale-[1.06]"
                />
              </a>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
