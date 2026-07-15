import { Link } from 'react-router-dom'
import { LINKS } from '../data.js'

export default function NotFound() {
  return (
    <section className="grain glow-dark relative flex min-h-[70svh] items-center overflow-hidden bg-green-950">
      <div className="court-frame" aria-hidden="true" />
      <div className="relative mx-auto max-w-3xl px-6 py-24 text-center">
        <img src="/images/icon-pickleball-ball.png" alt="" aria-hidden="true" className="mx-auto h-20 w-20" />
        <p className="eyebrow mt-6 justify-center text-cream-100">Out of bounds</p>
        <h1 className="display mt-4 text-[clamp(4rem,14vw,10rem)] leading-none text-cream-50">
          4<span className="text-sun-400">0</span>4
        </h1>
        <p className="mx-auto mt-4 max-w-[46ch] font-body text-lg text-cream-100/80">
          That page is off the court. Let&rsquo;s get you back in the game.
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-4">
          <Link to="/" className="btn btn-sun !px-8 !py-4 !text-xl">
            Back to home
          </Link>
          <a href={LINKS.book} target="_blank" rel="noopener noreferrer" className="btn btn-outline-light">
            Book a court
          </a>
        </div>
      </div>
    </section>
  )
}
