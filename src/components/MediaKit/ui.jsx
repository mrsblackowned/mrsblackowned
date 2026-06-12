export const Eyebrow = ({ children, className = '', tone = 'gold' }) => (
  <p
    className={`font-poppins text-[10px] md:text-xs uppercase tracking-[0.35em] mb-4 ${
      tone === 'gold' ? 'text-mk-gold' : 'text-mk-ink/50'
    } ${className}`}
  >
    {children}
  </p>
)

export const Divider = ({ className = '' }) => (
  <div className={`h-px bg-mk-gold/30 ${className}`} />
)

export const Section = ({ id, light = false, divider = true, className = '', children, narrow = false }) => (
  <section
    id={id}
    className={`px-6 py-20 md:py-28 ${divider ? 'border-t border-mk-gold/15' : ''} ${
      id ? 'scroll-mt-32 md:scroll-mt-40' : ''
    } ${light ? 'bg-mk-cream text-mk-ink' : 'bg-mk-ink text-mk-cream'} ${className}`}
  >
    <div className={`mx-auto ${narrow ? 'max-w-3xl' : 'max-w-5xl'}`}>{children}</div>
  </section>
)

export const SectionHeading = ({ children, className = '' }) => (
  <h2 className={`font-lora text-3xl md:text-5xl font-medium leading-[1.1] tracking-tight mb-6 ${className}`}>
    {children}
  </h2>
)
