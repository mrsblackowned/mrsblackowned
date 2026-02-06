const FunnelButton = ({ children, onClick, href, variant = 'primary', className = '' }) => {
  const baseClasses =
    'inline-block font-body text-xs uppercase tracking-[0.2em] transition-all duration-300 rounded-sm cursor-pointer'

  const variants = {
    primary:
      'bg-black text-white hover:bg-accent hover:text-black px-10 py-4',
    outline:
      'border border-black/20 text-black hover:border-black hover:bg-black hover:text-white px-10 py-4',
    subtle:
      'text-black/40 hover:text-black text-[11px] tracking-[0.15em] underline underline-offset-4 decoration-black/15 hover:decoration-black/40',
  }

  const Tag = href ? 'a' : 'button'
  const props = href ? { href } : { onClick }

  return (
    <Tag
      {...props}
      className={`${baseClasses} ${variants[variant]} ${className}`}
    >
      {children}
    </Tag>
  )
}

export default FunnelButton
