import { useState, useEffect } from 'react'
import { NavLink, Link, useLocation } from 'react-router-dom'
import { LINKS, CONTACT } from '../data.js'

const NAV_ITEMS = [
  { to: '/', label: 'Home' },
  { to: '/programs', label: 'Programs' },
  { to: '/membership', label: 'Membership' },
  { to: '/locations', label: 'Locations' },
  { to: '/events', label: 'Events' },
  { to: '/contact', label: 'Contact' },
]

function DesktopLink({ to, label }) {
  return (
    <NavLink
      to={to}
      className={({ isActive }) =>
        `group relative px-1 py-2 font-display text-lg font-semibold uppercase tracking-[0.06em] transition-colors duration-200 ${
          isActive ? 'text-sun-400' : 'text-cream-100 hover:text-sun-400'
        }`
      }
    >
      {({ isActive }) => (
        <>
          {label}
          <span
            aria-hidden="true"
            className={`absolute -bottom-0.5 left-1/2 h-1.5 w-1.5 -translate-x-1/2 rounded-full bg-sun-500 transition-opacity duration-200 ${
              isActive ? 'opacity-100' : 'opacity-0 group-hover:opacity-60'
            }`}
          />
        </>
      )}
    </NavLink>
  )
}

export default function Nav() {
  const [open, setOpen] = useState(false)
  const location = useLocation()

  useEffect(() => setOpen(false), [location])

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [open])

  return (
    <>
      <header className="sticky top-0 z-50 border-b border-cream-50/10 bg-green-950/92 backdrop-blur-md">
      <a
        href="#main"
        className="absolute left-4 top-2 z-50 -translate-y-[200%] rounded-lg bg-sun-500 px-4 py-2 font-body text-sm font-semibold text-green-950 transition-transform duration-200 focus-visible:translate-y-0"
      >
        Skip to content
      </a>
      <div className="mx-auto flex h-[4.5rem] max-w-7xl items-center justify-between gap-6 px-4 sm:px-6 lg:px-8">
        <Link to="/" className="flex items-center gap-3" aria-label="West Coast Pickleball — home">
          <img src="/images/logo-sun-wave.png" alt="" className="h-11 w-11" width="44" height="44" />
          <span className="display text-[1.35rem] leading-[0.9] text-cream-50">
            West Coast
            <br />
            <span className="text-sun-400">Pickleball</span>
          </span>
        </Link>

        <nav className="hidden items-center gap-6 lg:flex xl:gap-7" aria-label="Primary">
          {NAV_ITEMS.map((item) => (
            <DesktopLink key={item.to} {...item} />
          ))}
        </nav>

        <div className="hidden items-center gap-4 lg:flex">
          <a href={LINKS.book} target="_blank" rel="noopener noreferrer" className="btn btn-sun !px-6 !py-3 !text-base">
            Book a court
          </a>
        </div>

        <button
          type="button"
          onClick={() => setOpen(!open)}
          aria-expanded={open}
          aria-label={open ? 'Close menu' : 'Open menu'}
          className="flex h-11 w-11 cursor-pointer flex-col items-center justify-center gap-[5px] rounded-full border border-cream-50/20 transition-colors duration-200 hover:border-sun-500 active:scale-95 lg:hidden"
        >
          <span
            className={`h-0.5 w-5 rounded bg-cream-50 transition-transform duration-300 ${open ? 'translate-y-[7px] rotate-45' : ''}`}
          />
          <span className={`h-0.5 w-5 rounded bg-cream-50 transition-opacity duration-200 ${open ? 'opacity-0' : ''}`} />
          <span
            className={`h-0.5 w-5 rounded bg-cream-50 transition-transform duration-300 ${open ? '-translate-y-[7px] -rotate-45' : ''}`}
          />
        </button>
      </div>
      </header>

      {/* mobile menu — sibling of the (backdrop-blurred) header so `fixed`
          resolves to the viewport, not a filter-induced containing block */}
      <div
        className={`fixed inset-x-0 bottom-0 top-[4.5rem] z-40 grain overflow-y-auto bg-green-950 transition-opacity duration-300 lg:hidden ${
          open ? 'opacity-100' : 'pointer-events-none opacity-0'
        }`}
      >
        <nav className="relative flex flex-col gap-2 px-6 py-10" aria-label="Mobile">
          {NAV_ITEMS.map((item, i) => (
            <NavLink
              key={item.to}
              to={item.to}
              className={({ isActive }) =>
                `display border-b border-cream-50/10 py-4 text-5xl transition-transform duration-300 ${
                  open ? 'translate-y-0' : 'translate-y-4'
                } ${isActive ? 'text-sun-400' : 'text-cream-50 active:text-sun-400'}`
              }
              style={{ transitionDelay: `${i * 40}ms` }}
            >
              {item.label}
            </NavLink>
          ))}
          <a
            href={LINKS.book}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-sun mt-8 w-full !py-4 !text-xl"
          >
            Book a court
          </a>
          <a href={LINKS.phone} className="mt-4 text-center font-body font-semibold text-cream-100/80">
            {CONTACT.phone}
          </a>
        </nav>
      </div>
    </>
  )
}
