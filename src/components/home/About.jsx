import { Link } from 'react-router-dom'
import Reveal from '../Reveal.jsx'
import { CONTACT } from '../../data.js'

export default function About() {
  return (
    <section className="relative overflow-hidden bg-cream-50 py-24 lg:py-32">
      <div className="mx-auto grid max-w-7xl items-center gap-14 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">
        <div>
          <Reveal>
            <p className="eyebrow text-green-800">What sets us apart</p>
          </Reveal>
          <Reveal delay={80}>
            <h2 className="display mt-4 text-[clamp(2.6rem,5vw,4.5rem)] text-green-950">
              Experience the <span className="text-sun-600">difference</span> at WCPB
            </h2>
          </Reveal>
          <Reveal delay={160}>
            <p className="mt-6 max-w-[58ch] font-body text-lg text-green-950/80">
              At WCPB, we are more than just a sports club—we are the premier pickleball destination in Orange
              County, designed to cater to players of all skill levels and ages. Whether you&rsquo;re here for serious
              competition, personal fitness, or a social match with friends, our state-of-the-art facilities and
              expert services are here to elevate your experience.
            </p>
          </Reveal>
          <Reveal delay={240}>
            <p className="mt-5 font-body font-semibold text-green-800">
              Where passion for the game meets world-class facilities and a vibrant community.
            </p>
          </Reveal>
          <Reveal delay={320} className="mt-8 flex flex-wrap items-center gap-5">
            <Link to="/locations" className="btn btn-outline-dark">
              Visit the club
            </Link>
            <span className="font-body text-sm text-green-950/60">{CONTACT.address}</span>
          </Reveal>
        </div>

        <Reveal className="photo-tint relative overflow-hidden rounded-photo shadow-float">
          <img
            src="/images/action-court-3.jpg"
            alt="Overhead view of a doubles pickleball match"
            className="aspect-[4/3] w-full object-cover"
            loading="lazy"
          />
        </Reveal>
      </div>
    </section>
  )
}
