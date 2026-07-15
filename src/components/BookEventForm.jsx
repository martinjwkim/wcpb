import { useState } from 'react'
import { BOOKING, CONTACT, EVENTS, LINKS } from '../data.js'

// In-site replacement for the HubSpot event-inquiry form (LINKS.privateEventExternal).
// Same demo convention as ContactForm: validates client-side, shows a confirmation
// state. Wiring to a real inbox/CRM happens in the backend phase.

const EMPTY = {
  firstName: '',
  lastName: '',
  email: '',
  phone: '',
  membership: '',
  date: '',
  startTime: '',
  duration: '',
  courts: '',
  attendees: '',
  occasion: '',
  budget: '',
  food: '',
  alcohol: '',
  services: [],
  details: '',
}

const inputCls =
  'w-full rounded-xl border border-green-800/20 bg-cream-100/60 px-4 py-3 font-body text-green-950 outline-none transition-colors duration-200 placeholder:text-green-950/40 focus-visible:border-sun-500'

function validate(v) {
  const next = {}
  if (!v.firstName.trim()) next.firstName = 'Please enter your first name.'
  if (!v.lastName.trim()) next.lastName = 'Please enter your last name.'
  if (!v.email.trim()) next.email = 'Please enter your email.'
  else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v.email)) next.email = 'Enter a valid email address.'
  if (!v.phone.trim()) next.phone = 'Please enter your phone number.'
  else if (!/^[\d\s()+.\-]{7,}$/.test(v.phone.trim())) next.phone = 'Enter a valid phone number.'
  if (!v.attendees.trim()) next.attendees = 'Roughly how many people are coming?'
  else if (!(Number(v.attendees) >= 1)) next.attendees = 'Enter a number of 1 or more.'
  return next
}

export default function BookEventForm() {
  const [values, setValues] = useState(EMPTY)
  const [errors, setErrors] = useState({})
  const [sent, setSent] = useState(false)

  function update(field, value) {
    setValues((v) => ({ ...v, [field]: value }))
    if (errors[field]) setErrors((prev) => ({ ...prev, [field]: undefined }))
  }

  // Radio pills clear when the selected option is clicked again — every pill
  // question is optional, so people need a way back to "no answer".
  function togglePill(field, value) {
    update(field, values[field] === value ? '' : value)
  }

  function toggleService(name) {
    setValues((v) => ({
      ...v,
      services: v.services.includes(name) ? v.services.filter((s) => s !== name) : [...v.services, name],
    }))
  }

  function handleSubmit(e) {
    e.preventDefault()
    const next = validate(values)
    setErrors(next)
    const firstInvalid = ['firstName', 'lastName', 'email', 'phone', 'attendees'].find((k) => next[k])
    if (firstInvalid) {
      document.getElementById(`be-${firstInvalid}`)?.focus()
      return
    }
    setSent(true)
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  if (sent) {
    return (
      <div className="grid gap-10 lg:grid-cols-[1fr_24rem] lg:gap-14">
        <div className="rounded-card border border-green-800/10 bg-cream-50 p-8 shadow-card sm:p-10" role="status" aria-live="polite">
          <div className="grid h-12 w-12 place-items-center rounded-full bg-sun-500 text-green-950">
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden="true">
              <path d="M5 13l4 4L19 7" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>
          <h2 className="display mt-5 text-4xl text-green-950">Request received!</h2>
          <p className="mt-3 max-w-[52ch] font-body text-green-950/80">
            Thanks, {values.firstName.trim()} — our events team will reach out at{' '}
            <span className="font-semibold">{values.email.trim()}</span> to lock in the details. Want to talk it through
            sooner? Call{' '}
            <a href={LINKS.phone} className="font-semibold text-green-800 underline decoration-sun-500 decoration-2 underline-offset-4">
              {CONTACT.phone}
            </a>
            .
          </p>
          <p className="mt-4 font-body text-sm font-semibold text-green-800">
            Don&rsquo;t forget — code PBEVENT takes 20% off your first event.
          </p>
          <button
            type="button"
            onClick={() => {
              setValues(EMPTY)
              setSent(false)
            }}
            className="btn btn-outline-dark mt-8 !text-base"
          >
            Plan another event
          </button>
        </div>
        <EventSheet values={values} />
      </div>
    )
  }

  return (
    <div className="grid gap-10 lg:grid-cols-[1fr_24rem] lg:gap-14">
      <form onSubmit={handleSubmit} noValidate className="rounded-card border border-green-800/10 bg-cream-50 p-6 shadow-card sm:p-9">
        {/* --- 1 · who's booking --- */}
        <Section legend="Who's booking" hint="So we know who to talk to.">
          <div className="grid gap-x-4 sm:grid-cols-2">
            <Field id="be-firstName" label="First name" required error={errors.firstName}>
              <input
                id="be-firstName"
                type="text"
                autoComplete="given-name"
                value={values.firstName}
                onChange={(e) => update('firstName', e.target.value)}
                aria-invalid={!!errors.firstName}
                className={inputCls}
                placeholder="First name"
              />
            </Field>
            <Field id="be-lastName" label="Last name" required error={errors.lastName}>
              <input
                id="be-lastName"
                type="text"
                autoComplete="family-name"
                value={values.lastName}
                onChange={(e) => update('lastName', e.target.value)}
                aria-invalid={!!errors.lastName}
                className={inputCls}
                placeholder="Last name"
              />
            </Field>
            <Field id="be-email" label="Email" required error={errors.email}>
              <input
                id="be-email"
                type="email"
                autoComplete="email"
                inputMode="email"
                value={values.email}
                onChange={(e) => update('email', e.target.value)}
                aria-invalid={!!errors.email}
                className={inputCls}
                placeholder="you@email.com"
              />
            </Field>
            <Field id="be-phone" label="Phone" required error={errors.phone}>
              <input
                id="be-phone"
                type="tel"
                autoComplete="tel"
                inputMode="tel"
                value={values.phone}
                onChange={(e) => update('phone', e.target.value)}
                aria-invalid={!!errors.phone}
                className={inputCls}
                placeholder="(714) 555-0123"
              />
            </Field>
          </div>
          <PillGroup
            label="Are you currently a WCPB member?"
            name="membership"
            options={BOOKING.membership}
            value={values.membership}
            onToggle={(opt) => togglePill('membership', opt)}
          />
        </Section>

        <Divider />

        {/* --- 2 · the event --- */}
        <Section legend="Your event" hint="Rough answers are fine — we'll shape the details together.">
          <div className="grid gap-x-4 sm:grid-cols-2">
            <Field id="be-date" label="Date" hint="No date yet? Leave it blank." error={undefined}>
              <input
                id="be-date"
                type="date"
                min={new Date().toISOString().slice(0, 10)}
                value={values.date}
                onChange={(e) => update('date', e.target.value)}
                className={inputCls}
              />
            </Field>
            <Field id="be-startTime" label="Start time">
              <input
                id="be-startTime"
                type="time"
                value={values.startTime}
                onChange={(e) => update('startTime', e.target.value)}
                className={inputCls}
              />
            </Field>
          </div>
          <PillGroup
            label="How long will the event run?"
            hint="2-hour minimum."
            name="duration"
            options={BOOKING.durations}
            value={values.duration}
            onToggle={(opt) => togglePill('duration', opt)}
          />
          <PillGroup
            label="How many courts will you need?"
            name="courts"
            options={BOOKING.courts}
            value={values.courts}
            onToggle={(opt) => togglePill('courts', opt)}
          />
          <div className="grid gap-x-4 sm:grid-cols-2">
            <Field id="be-attendees" label="Number of guests" required error={errors.attendees}>
              <input
                id="be-attendees"
                type="number"
                min="1"
                inputMode="numeric"
                value={values.attendees}
                onChange={(e) => update('attendees', e.target.value)}
                aria-invalid={!!errors.attendees}
                className={inputCls}
                placeholder="e.g. 24"
              />
            </Field>
            <Field id="be-occasion" label="What's the occasion?">
              <input
                id="be-occasion"
                type="text"
                value={values.occasion}
                onChange={(e) => update('occasion', e.target.value)}
                className={inputCls}
                placeholder="Birthday, team offsite, client mixer…"
              />
            </Field>
          </div>
        </Section>

        <Divider />

        {/* --- 3 · extras --- */}
        <Section legend="Extras" hint="Optional — helps us send the right quote the first time.">
          <PillGroup
            label="Budget range"
            name="budget"
            options={BOOKING.budgets}
            value={values.budget}
            onToggle={(opt) => togglePill('budget', opt)}
          />
          <div className="grid gap-x-4 sm:grid-cols-2">
            <PillGroup
              label="Outside food or catering?"
              name="food"
              options={['Yes', 'No']}
              value={values.food}
              onToggle={(opt) => togglePill('food', opt)}
            />
            <PillGroup
              label="Will alcohol be served?"
              name="alcohol"
              options={['Yes', 'No']}
              value={values.alcohol}
              onToggle={(opt) => togglePill('alcohol', opt)}
            />
          </div>
          <fieldset className="mb-5">
            <legend className="mb-2 block font-body text-sm font-semibold uppercase tracking-[0.12em] text-green-800">
              Additional services
            </legend>
            <div className="grid gap-2.5">
              {BOOKING.services.map(([name, note]) => (
                <label
                  key={name}
                  className={`flex cursor-pointer items-start gap-3 rounded-xl border px-4 py-3 transition-colors duration-200 ${
                    values.services.includes(name)
                      ? 'border-sun-500 bg-sun-100/50'
                      : 'border-green-800/20 bg-cream-100/60 hover:border-green-800/40'
                  }`}
                >
                  <input
                    type="checkbox"
                    checked={values.services.includes(name)}
                    onChange={() => toggleService(name)}
                    className="mt-1 h-4.5 w-4.5 flex-none accent-green-800"
                  />
                  <span>
                    <span className="block font-body font-semibold text-green-950">{name}</span>
                    {note && <span className="mt-0.5 block font-body text-sm text-green-950/65">{note}</span>}
                  </span>
                </label>
              ))}
            </div>
          </fieldset>
          <Field id="be-details" label="Anything else we should know?">
            <textarea
              id="be-details"
              rows={4}
              value={values.details}
              onChange={(e) => update('details', e.target.value)}
              className={`${inputCls} resize-y`}
              placeholder="Decorations, surprises, accessibility needs, food plans…"
            />
          </Field>
        </Section>

        <button type="submit" className="btn btn-sun mt-2 w-full !py-4 !text-lg">
          Send event request
        </button>
        <p className="mt-4 text-center font-body text-sm text-green-950/70">
          Our events team replies within one business day. Prefer to talk?{' '}
          <a href={LINKS.phone} className="font-semibold text-green-800 underline decoration-sun-500 decoration-2 underline-offset-4">
            Call {CONTACT.phone}
          </a>
        </p>
      </form>

      <EventSheet values={values} />
    </div>
  )
}

/* ---- live booking sheet (sidebar) ---- */

function EventSheet({ values }) {
  const rows = [
    ['Club', 'Yorba Linda'],
    ['Date', values.date ? formatDate(values.date) : '—'],
    ['Start', values.startTime ? formatTime(values.startTime) : '—'],
    ['Length', values.duration || '—'],
    ['Courts', values.courts || '—'],
    ['Guests', values.attendees || '—'],
    ['Budget', values.budget || '—'],
  ]
  return (
    <aside className="lg:sticky lg:top-28 lg:self-start" aria-label="Your event so far">
      <div className="grain glow-dark relative overflow-hidden rounded-photo bg-green-950 p-6 shadow-float sm:p-8">
        <div className="relative">
          <p className="eyebrow text-cream-100">Your event sheet</p>
          <dl className="mt-6 divide-y divide-cream-50/10">
            {rows.map(([label, value]) => (
              <div key={label} className="flex items-baseline justify-between gap-4 py-2.5">
                <dt className="font-body text-xs font-semibold uppercase tracking-[0.16em] text-cream-100/55">{label}</dt>
                <dd className={`display tabular text-right text-2xl ${value === '—' ? 'text-cream-100/30' : 'text-cream-50'}`}>
                  {value}
                </dd>
              </div>
            ))}
          </dl>
          {values.services.length > 0 && (
            <div className="mt-4 flex flex-wrap gap-2">
              {values.services.map((s) => (
                <span key={s} className="rounded-full bg-green-800/80 px-3 py-1 font-body text-xs font-semibold text-cream-100">
                  {s}
                </span>
              ))}
            </div>
          )}
          <p className="mt-6 rounded-xl bg-sun-500 px-4 py-3 font-body text-sm font-bold text-green-950">
            {EVENTS.promo}
          </p>
          <p className="mt-4 font-body text-sm text-cream-100/70">
            {CONTACT.address} ·{' '}
            <a href={LINKS.phone} className="font-semibold text-cream-50 underline decoration-sun-500 decoration-2 underline-offset-4">
              {CONTACT.phone}
            </a>
          </p>
        </div>
      </div>
    </aside>
  )
}

function formatDate(iso) {
  const [y, m, d] = iso.split('-').map(Number)
  return new Date(y, m - 1, d).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })
}

function formatTime(hhmm) {
  const [h, m] = hhmm.split(':').map(Number)
  const ampm = h >= 12 ? 'PM' : 'AM'
  const hr = h % 12 || 12
  return `${hr}:${String(m).padStart(2, '0')} ${ampm}`
}

/* ---- form primitives ---- */

function Section({ legend, hint, children }) {
  return (
    <fieldset className="mb-2">
      <legend className="display text-3xl text-green-950">{legend}</legend>
      <p className="mb-6 mt-1 font-body text-sm text-green-950/60">{hint}</p>
      {children}
    </fieldset>
  )
}

function Divider() {
  return <div className="court-divider my-8 text-green-800" aria-hidden="true" />
}

function Field({ id, label, hint, required, error, children }) {
  return (
    <div className="mb-5">
      <label htmlFor={id} className="mb-2 block font-body text-sm font-semibold uppercase tracking-[0.12em] text-green-800">
        {label}
        {required && (
          <span className="text-sun-600" aria-hidden="true">
            {' '}
            *
          </span>
        )}
      </label>
      {children}
      {hint && !error && <p className="mt-1.5 font-body text-sm text-green-950/55">{hint}</p>}
      {error && (
        <p role="alert" className="mt-1.5 font-body text-sm font-semibold text-green-800">
          {error}
        </p>
      )}
    </div>
  )
}

function PillGroup({ label, hint, name, options, value, onToggle }) {
  return (
    <fieldset className="mb-5">
      <legend className="mb-2 block font-body text-sm font-semibold uppercase tracking-[0.12em] text-green-800">{label}</legend>
      <div className="flex flex-wrap gap-2">
        {options.map((opt) => (
          <label key={opt} className="cursor-pointer">
            <input
              type="radio"
              name={name}
              value={opt}
              checked={value === opt}
              onChange={() => {}}
              onClick={() => onToggle(opt)}
              className="peer sr-only"
            />
            <span className="inline-flex min-h-11 items-center rounded-full border-2 border-green-800/20 bg-cream-100/60 px-4 py-2 font-body text-[15px] font-semibold text-green-950/75 transition-colors duration-200 hover:border-green-800/45 peer-checked:border-sun-500 peer-checked:bg-sun-500 peer-checked:text-green-950 peer-focus-visible:outline-3 peer-focus-visible:outline peer-focus-visible:outline-offset-2 peer-focus-visible:outline-sun-500">
              {opt}
            </span>
          </label>
        ))}
      </div>
      {hint && <p className="mt-1.5 font-body text-sm text-green-950/55">{hint}</p>}
    </fieldset>
  )
}
