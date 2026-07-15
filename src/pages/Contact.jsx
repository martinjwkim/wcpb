import Reveal from '../components/Reveal.jsx'
import PageHeader from '../components/PageHeader.jsx'
import ContactForm from '../components/ContactForm.jsx'
import FaqAccordion from '../components/FaqAccordion.jsx'
import { LINKS, CONTACT, FAQS } from '../data.js'

const PhoneIcon = (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true">
    <path
      d="M6.6 10.8a15 15 0 006.6 6.6l2.2-2.2a1 1 0 011-.24 11 11 0 003.5.56 1 1 0 011 1V20a1 1 0 01-1 1A17 17 0 013 4a1 1 0 011-1h3.5a1 1 0 011 1 11 11 0 00.56 3.5 1 1 0 01-.24 1z"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinejoin="round"
    />
  </svg>
)
const MailIcon = (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true">
    <rect x="3" y="5" width="18" height="14" rx="2" stroke="currentColor" strokeWidth="1.8" />
    <path d="M4 7l8 6 8-6" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round" />
  </svg>
)
const PinIcon = (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true">
    <path d="M12 21s7-6.3 7-11a7 7 0 10-14 0c0 4.7 7 11 7 11z" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round" />
    <circle cx="12" cy="10" r="2.5" stroke="currentColor" strokeWidth="1.8" />
  </svg>
)

function InfoRow({ icon, label, value, href, external }) {
  const props = external ? { target: '_blank', rel: 'noopener noreferrer' } : {}
  return (
    <a
      href={href}
      {...props}
      className="group flex items-start gap-4 rounded-card border border-cream-50/12 bg-green-900/60 p-5 transition-colors duration-200 hover:border-sun-500/50"
    >
      <span className="grid h-11 w-11 flex-none place-items-center rounded-full bg-sun-500 text-green-950">{icon}</span>
      <span>
        <span className="block font-body text-xs font-semibold uppercase tracking-[0.16em] text-cream-100/60">{label}</span>
        <span className="mt-0.5 block font-body font-semibold text-cream-50 transition-colors duration-200 group-hover:text-sun-400">
          {value}
        </span>
      </span>
    </a>
  )
}

export default function Contact() {
  return (
    <>
      <PageHeader eyebrow="Experience the difference" title="Connect" accent="with us">
        <p className="mt-6 max-w-[58ch] font-body text-lg text-cream-100/80">
          Questions about programs, membership, or booking an event? Reach out and our team will get back to you
          ASAP.
        </p>
      </PageHeader>

      {/* contact info + form */}
      <section className="bg-cream-50 py-20 lg:py-28" aria-label="Contact details and form">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-10 lg:grid-cols-2 lg:gap-14">
            {/* info column on a dark panel */}
            <div>
              <Reveal>
                <p className="eyebrow text-green-800">Get in touch</p>
              </Reveal>
              <Reveal delay={80}>
                <h2 className="display mt-4 text-[clamp(2.2rem,4vw,3.4rem)] text-green-950">
                  We&rsquo;re here to <span className="text-sun-600">help</span>
                </h2>
              </Reveal>
              <Reveal delay={160} className="grain glow-dark relative mt-8 overflow-hidden rounded-photo bg-green-950 p-6 shadow-float sm:p-8">
                <div className="relative flex flex-col gap-4">
                  <InfoRow icon={PhoneIcon} label="Call or text" value={CONTACT.phone} href={LINKS.phone} />
                  <InfoRow icon={MailIcon} label="Email" value={CONTACT.email} href={`mailto:${CONTACT.email}`} />
                  <InfoRow icon={PinIcon} label="Yorba Linda club" value={CONTACT.address} href={LINKS.directions} external />
                  <div className="mt-2 flex flex-wrap gap-3">
                    <a href={LINKS.book} target="_blank" rel="noopener noreferrer" className="btn btn-sun !text-base">
                      Book a court
                    </a>
                    <a href={LINKS.instagramYL} target="_blank" rel="noopener noreferrer" className="btn btn-outline-light !text-base">
                      @wcpb.yorbalinda
                    </a>
                  </div>
                </div>
              </Reveal>
            </div>

            {/* form column */}
            <div>
              <Reveal>
                <p className="eyebrow text-green-800">Send a message</p>
              </Reveal>
              <Reveal delay={80}>
                <h2 className="display mt-4 text-[clamp(2.2rem,4vw,3.4rem)] text-green-950">
                  Drop us a <span className="text-sun-600">line</span>
                </h2>
              </Reveal>
              <Reveal delay={160} className="mt-8">
                <ContactForm />
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="scroll-mt-24 bg-cream-100 py-20 lg:py-28" aria-label="Frequently asked questions">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <Reveal>
            <p className="eyebrow text-green-800">FAQs</p>
          </Reveal>
          <Reveal delay={80}>
            <h2 className="display mt-4 text-[clamp(2.4rem,5vw,4rem)] text-green-950">
              Frequently asked <span className="text-sun-600">questions</span>
            </h2>
          </Reveal>
          <Reveal delay={160} className="mt-12">
            <FaqAccordion items={FAQS} />
          </Reveal>
          <Reveal delay={220}>
            <p className="mt-8 font-body text-green-950/70">
              Still have questions? Reach out to our team and we&rsquo;ll get back to you ASAP —{' '}
              <a href={LINKS.phone} className="font-semibold text-green-800 underline decoration-sun-500 decoration-2 underline-offset-4 transition-colors duration-200 hover:text-sun-600">
                {CONTACT.phone}
              </a>
              .
            </p>
          </Reveal>
        </div>
      </section>
    </>
  )
}
