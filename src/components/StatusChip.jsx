// Live/coming-soon status markers. Never color-only: the label carries meaning.
export default function StatusChip({ live = false, children }) {
  return (
    <span
      className={`inline-flex items-center gap-1.5 rounded-full px-3 py-1 font-body text-[11px] font-semibold uppercase tracking-[0.18em] ${
        live ? 'bg-sun-500 text-green-950' : 'border border-cream-50/40 text-cream-100'
      }`}
    >
      <span className={`h-1.5 w-1.5 rounded-full ${live ? 'bg-green-950' : 'bg-cream-100/60'}`} aria-hidden="true" />
      {children}
    </span>
  )
}
