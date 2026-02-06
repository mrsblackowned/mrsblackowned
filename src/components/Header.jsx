import { useState, useEffect, useRef } from 'react'
import gsap from 'gsap'

const navLinks = [
  { label: 'Shop', href: '#products' },
  { label: 'Collections', href: '#collections' },
  { label: 'The Book', href: '#book' },
  { label: 'About', href: '#about' },
  { label: 'Journal', href: '#journal' },
]

const Header = () => {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const headerRef = useRef(null)
  const mobileMenuRef = useRef(null)

  useEffect(() => {
    gsap.from(headerRef.current, {
      opacity: 0,
      y: -20,
      duration: 0.8,
      delay: 0.3,
      ease: 'power3.out',
    })

    const handleScroll = () => {
      setScrolled(window.scrollY > 60)
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    if (mobileOpen && mobileMenuRef.current) {
      gsap.from(mobileMenuRef.current, {
        opacity: 0,
        y: -10,
        duration: 0.3,
        ease: 'power3.out',
      })
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
  }, [mobileOpen])

  return (
    <header
      ref={headerRef}
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-500 bg-black ${
        scrolled ? 'py-3' : 'py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-10 flex justify-between items-center">
        {/* Left: Hamburger (mobile) + Nav (desktop) */}
        <div className="flex items-center gap-8">
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="md:hidden flex flex-col gap-1.5 w-6"
            aria-label="Toggle menu"
          >
            <span className={`block h-px bg-white transition-all duration-300 ${mobileOpen ? 'rotate-45 translate-y-[3.5px]' : ''}`} />
            <span className={`block h-px bg-white transition-all duration-300 ${mobileOpen ? 'opacity-0' : ''}`} />
            <span className={`block h-px bg-white transition-all duration-300 ${mobileOpen ? '-rotate-45 -translate-y-[3.5px]' : ''}`} />
          </button>

          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="font-body text-[11px] uppercase tracking-[0.2em] text-white/60 hover:text-white transition-colors duration-300"
              >
                {link.label}
              </a>
            ))}
          </nav>
        </div>

        {/* Center: Logo */}
        <a href="/" className="absolute left-1/2 -translate-x-1/2">
          <img
            src="/Logos/BBMainLogoTransparent.png"
            alt="Beauty By Mrs. Black Owned"
            className="h-10 md:h-14 w-auto"
          />
        </a>

        {/* Right: Icons */}
        <div className="flex items-center gap-5">
          <button aria-label="Search" className="hover:opacity-70 transition-opacity">
            <img
              src="/Logos/BBIconTransparent.png"
              alt="Search"
              className="h-5 w-5 object-contain"
            />
          </button>

          <button aria-label="Wishlist" className="hidden sm:block text-white/60 hover:text-white transition-colors">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
              <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
            </svg>
          </button>

          <button aria-label="Cart" className="text-white/60 hover:text-white transition-colors relative">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
              <path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z" />
              <line x1="3" y1="6" x2="21" y2="6" />
              <path d="M16 10a4 4 0 0 1-8 0" />
            </svg>
            <span className="absolute -top-1.5 -right-1.5 w-4 h-4 bg-accent text-[9px] font-semibold text-white rounded-full flex items-center justify-center">
              0
            </span>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div
          ref={mobileMenuRef}
          className="md:hidden fixed inset-0 top-[60px] bg-black z-50"
        >
          <nav className="flex flex-col items-center justify-center h-full gap-8">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className="font-serif text-3xl text-white hover:text-accent transition-colors duration-300"
              >
                {link.label}
              </a>
            ))}
          </nav>
        </div>
      )}
    </header>
  )
}

export default Header
