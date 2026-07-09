import { Link } from 'react-router-dom'
import { LINKS, CONTACT } from '../data.js'

function FooterExt({ href, children }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="font-body text-cream-100/75 transition-colors duration-200 hover:text-sun-400"
    >
      {children}
    </a>
  )
}

function FooterInt({ to, children }) {
  return (
    <Link to={to} className="font-body text-cream-100/75 transition-colors duration-200 hover:text-sun-400">
      {children}
    </Link>
  )
}

export default function Footer() {
  return (
    <footer className="grain glow-dark relative overflow-hidden bg-green-950 text-cream-50">
      <div className="relative mx-auto max-w-7xl px-4 pb-10 pt-16 sm:px-6 lg:px-8">
        <div className="flex flex-col justify-between gap-10 border-b border-cream-50/10 pb-12 lg:flex-row lg:items-end">
          <h2 className="display text-[clamp(4rem,10vw,9rem)] leading-[0.85] text-cream-50">
            Let&rsquo;s <span className="text-sun-400">play.</span>
          </h2>
          <div className="max-w-sm">
            <p className="font-body text-cream-100/75">
              Stay in the loop with all things West Coast Pickleball, from upcoming events to exclusive offers.
              We&rsquo;re here to keep you playing, connecting, and leveling up your game.
            </p>
            <a
              href={LINKS.book}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-sun mt-6"
            >
              Sign me up
            </a>
          </div>
        </div>

        <div className="grid gap-10 py-12 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <img src="/images/logo-wordmark.png" alt="West Coast Pickleball roundel logo" className="h-24 w-24 rounded-2xl" width="96" height="96" />
            <p className="mt-4 max-w-[26ch] font-body text-sm text-cream-100/60">
              Join the pickleball community in Orange County!
            </p>
          </div>
          <nav aria-label="Play" className="flex flex-col gap-3">
            <h3 className="display text-xl text-sun-400">Play</h3>
            <FooterExt href={LINKS.schedule}>Open play schedule</FooterExt>
            <FooterExt href={LINKS.book}>Book court time</FooterExt>
            <FooterExt href={LINKS.privateEvent}>Book private event</FooterExt>
            <FooterInt to="/locations">Yorba Linda club</FooterInt>
          </nav>
          <nav aria-label="Programs" className="flex flex-col gap-3">
            <h3 className="display text-xl text-sun-400">Programs</h3>
            <FooterInt to="/programs#lessons">Group lessons</FooterInt>
            <FooterInt to="/programs#pickleball-101">Free Pickleball 101</FooterInt>
            <FooterInt to="/programs#junior-academy">Junior Academy</FooterInt>
            <FooterInt to="/membership">Membership &amp; pricing</FooterInt>
          </nav>
          <div className="flex flex-col gap-3">
            <h3 className="display text-xl text-sun-400">Contact</h3>
            <a href={LINKS.phone} className="font-body font-semibold text-cream-100 transition-colors duration-200 hover:text-sun-400">
              {CONTACT.phone}
            </a>
            <a
              href={`mailto:${CONTACT.email}`}
              className="font-body text-cream-100/75 transition-colors duration-200 hover:text-sun-400"
            >
              {CONTACT.email}
            </a>
            <a
              href={LINKS.directions}
              target="_blank"
              rel="noopener noreferrer"
              className="font-body text-cream-100/75 transition-colors duration-200 hover:text-sun-400"
            >
              {CONTACT.address}
            </a>
            <div className="mt-1 flex gap-4">
              <FooterExt href={LINKS.instagram}>Instagram</FooterExt>
              <FooterExt href={LINKS.instagramYL}>@wcpb.yorbalinda</FooterExt>
            </div>
          </div>
        </div>

        <div className="flex flex-col items-start justify-between gap-3 border-t border-cream-50/10 pt-6 font-body text-xs text-cream-100/50 sm:flex-row">
          <p>© 2025 West Coast Pickleball. All Rights Reserved.</p>
          <p>Redesign concept — demo only, not affiliated with wcpb.com production site.</p>
        </div>
      </div>
    </footer>
  )
}
