import { Link } from 'react-router-dom'
import { QUICK_LINKS } from '../../data.js'

// The five quick links from the live homepage hero, as a scrolling rail.
export default function QuickLinks() {
  return (
    <nav aria-label="Quick links" className="relative z-20 -mt-9 px-4 sm:px-6 lg:px-8">
      <ul className="mx-auto flex max-w-6xl snap-x gap-3 overflow-x-auto rounded-full bg-cream-50 p-3 shadow-float">
        {QUICK_LINKS.map(({ label, href, external }) => {
          const cls =
            'block snap-start whitespace-nowrap rounded-full border border-green-800/15 px-6 py-3 text-center font-display text-lg font-semibold uppercase tracking-[0.05em] text-green-800 transition-colors duration-200 hover:border-green-800 hover:bg-green-800 hover:text-cream-50 active:bg-green-900'
          return (
            <li key={label} className="min-w-fit flex-1">
              {external ? (
                <a href={href} target="_blank" rel="noopener noreferrer" className={cls}>
                  {label}
                </a>
              ) : (
                <Link to={href} className={cls}>
                  {label}
                </Link>
              )}
            </li>
          )
        })}
      </ul>
    </nav>
  )
}
