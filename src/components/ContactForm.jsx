import { useState } from 'react'
import { CONTACT } from '../data.js'

const EMPTY = { name: '', email: '', message: '' }

// Front-end demo form: validates client-side and shows the live site's
// confirmation copy. Wiring to a real inbox/CRM happens in the backend phase.
export default function ContactForm() {
  const [values, setValues] = useState(EMPTY)
  const [errors, setErrors] = useState({})
  const [sent, setSent] = useState(false)

  function validate(v) {
    const next = {}
    if (!v.name.trim()) next.name = 'Please enter your name.'
    if (!v.email.trim()) next.email = 'Please enter your email.'
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v.email)) next.email = 'Enter a valid email address.'
    if (!v.message.trim()) next.message = 'Let us know how we can help.'
    return next
  }

  function handleSubmit(e) {
    e.preventDefault()
    const next = validate(values)
    setErrors(next)
    if (Object.keys(next).length === 0) setSent(true)
  }

  function update(field) {
    return (e) => {
      setValues((v) => ({ ...v, [field]: e.target.value }))
      if (errors[field]) setErrors((prev) => ({ ...prev, [field]: undefined }))
    }
  }

  if (sent) {
    return (
      <div className="rounded-card border border-green-800/10 bg-cream-50 p-8 shadow-card" role="status" aria-live="polite">
        <div className="grid h-12 w-12 place-items-center rounded-full bg-sun-500 text-green-950">
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden="true">
            <path d="M5 13l4 4L19 7" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>
        <h3 className="display mt-5 text-3xl text-green-950">Thank you!</h3>
        <p className="mt-2 font-body text-green-950/80">
          Your submission has been received. We&rsquo;ll get back to you ASAP. Need us sooner? Call{' '}
          <a href={`tel:${CONTACT.phone}`} className="font-semibold text-green-800 underline decoration-sun-500 decoration-2 underline-offset-4">
            {CONTACT.phone}
          </a>
          .
        </p>
        <button
          type="button"
          onClick={() => {
            setValues(EMPTY)
            setSent(false)
          }}
          className="btn btn-outline-dark mt-6 !text-base"
        >
          Send another message
        </button>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} noValidate className="rounded-card border border-green-800/10 bg-cream-50 p-7 shadow-card sm:p-8">
      <Field id="name" label="Name" error={errors.name}>
        <input
          id="name"
          type="text"
          autoComplete="name"
          value={values.name}
          onChange={update('name')}
          aria-invalid={!!errors.name}
          className="w-full rounded-xl border border-green-800/20 bg-cream-100/60 px-4 py-3 font-body text-green-950 outline-none transition-colors duration-200 placeholder:text-green-950/40 focus-visible:border-sun-500"
          placeholder="Your name"
        />
      </Field>
      <Field id="email" label="Email" error={errors.email}>
        <input
          id="email"
          type="email"
          autoComplete="email"
          inputMode="email"
          value={values.email}
          onChange={update('email')}
          aria-invalid={!!errors.email}
          className="w-full rounded-xl border border-green-800/20 bg-cream-100/60 px-4 py-3 font-body text-green-950 outline-none transition-colors duration-200 placeholder:text-green-950/40 focus-visible:border-sun-500"
          placeholder="you@email.com"
        />
      </Field>
      <Field id="message" label="Message" error={errors.message}>
        <textarea
          id="message"
          rows={5}
          value={values.message}
          onChange={update('message')}
          aria-invalid={!!errors.message}
          className="w-full resize-y rounded-xl border border-green-800/20 bg-cream-100/60 px-4 py-3 font-body text-green-950 outline-none transition-colors duration-200 placeholder:text-green-950/40 focus-visible:border-sun-500"
          placeholder="How can we help?"
        />
      </Field>
      <button type="submit" className="btn btn-sun mt-2 w-full !py-4 !text-lg">
        Send message
      </button>
    </form>
  )
}

function Field({ id, label, error, children }) {
  return (
    <div className="mb-5">
      <label htmlFor={id} className="mb-2 block font-body text-sm font-semibold uppercase tracking-[0.12em] text-green-800">
        {label}
      </label>
      {children}
      {error && (
        <p role="alert" className="mt-1.5 font-body text-sm text-green-800">
          {error}
        </p>
      )}
    </div>
  )
}
