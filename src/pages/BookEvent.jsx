import Reveal from '../components/Reveal.jsx'
import PageHeader from '../components/PageHeader.jsx'
import BookEventForm from '../components/BookEventForm.jsx'
import { CONTACT, LINKS } from '../data.js'

export default function BookEvent() {
  return (
    <>
      <PageHeader eyebrow="Private events & team building" title="Plan your" accent="event">
        <p className="mt-6 max-w-[58ch] font-body text-lg text-cream-100/80">
          Tell us about your group and we&rsquo;ll put together courts, coaching, and everything else. Takes about two
          minutes — no account needed.
        </p>
        <p className="mt-4 font-body text-cream-100/70">
          Rather talk it through?{' '}
          <a href={LINKS.phone} className="font-semibold text-cream-50 underline decoration-sun-500 decoration-2 underline-offset-4">
            Call {CONTACT.phone}
          </a>
        </p>
      </PageHeader>

      <section className="bg-cream-100 py-16 lg:py-24" aria-label="Event booking form">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Reveal>
            <BookEventForm />
          </Reveal>
        </div>
      </section>
    </>
  )
}
