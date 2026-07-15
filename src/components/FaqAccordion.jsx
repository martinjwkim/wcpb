import { useState, useId } from 'react'

function FaqItem({ q, a }) {
  const [open, setOpen] = useState(false)
  const id = useId()
  return (
    <div className="border-b border-green-800/12">
      <h3>
        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-controls={`${id}-panel`}
          id={`${id}-btn`}
          className="flex w-full cursor-pointer items-center justify-between gap-6 py-6 text-left transition-colors duration-200 hover:text-sun-600"
        >
          <span className="display text-2xl text-green-950 sm:text-3xl">{q}</span>
          <span
            aria-hidden="true"
            className={`grid h-9 w-9 flex-none place-items-center rounded-full border-2 border-green-800/30 text-green-800 transition-transform duration-300 ease-spring ${
              open ? 'rotate-45 border-sun-500 text-sun-600' : ''
            }`}
          >
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
              <path d="M8 1v14M1 8h14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
            </svg>
          </span>
        </button>
      </h3>
      <div
        id={`${id}-panel`}
        role="region"
        aria-labelledby={`${id}-btn`}
        className={`grid transition-[grid-template-rows] duration-300 ease-spring ${open ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'}`}
      >
        <div className="overflow-hidden">
          <p className="max-w-[68ch] pb-6 font-body text-[15px] leading-relaxed text-green-950/80">{a}</p>
        </div>
      </div>
    </div>
  )
}

export default function FaqAccordion({ items }) {
  return (
    <div className="border-t border-green-800/12">
      {items.map((item) => (
        <FaqItem key={item.q} {...item} />
      ))}
    </div>
  )
}
