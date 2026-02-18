import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'


const footerLinks = {
  Book: [
    { label: 'The Book', href: '#book-funnel' },
    { label: 'Choose Your Edition', href: '#choose-edition' },
    { label: 'What\'s Included', href: '#whats-included' },
  ],
  About: [
    { label: 'The Editor', href: '#about' },
    { label: 'The Mission', href: '#mission' },
    { label: 'The Platform', href: '#platform' },
  ],
  Support: [
    { label: 'Refund Policy', href: '/refund-policy' },
    { label: 'Contact', href: 'mailto:support@mrsblackowned.com' },
  ],
}

const Footer = () => {
  const footerRef = useRef(null)
  const contentRef = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(contentRef.current, {
        scrollTrigger: {
          trigger: footerRef.current,
          start: 'top 90%',
          toggleActions: 'play none none reverse',
        },
        opacity: 0,
        duration: 0.8,
      })
    }, footerRef)

    return () => ctx.revert()
  }, [])

  return (
    <footer ref={footerRef} className="bg-black text-white">
      <div ref={contentRef} className="max-w-7xl mx-auto px-6 md:px-10">
        {/* Main footer content */}
        <div className="py-16 md:py-20 grid grid-cols-1 md:grid-cols-12 gap-12">
          {/* Brand column */}
          <div className="md:col-span-4">
            <img
              src="/Logos/BBAlternateTransparent.webp"
              alt="Mrs Black Owned"
              className="h-16 md:h-20 w-auto mb-4 invert opacity-90"
            />
            <p className="font-body text-xs text-white/40 leading-relaxed mb-6 max-w-xs">
              A curated destination celebrating Black and African-owned beauty.
              Where culture, craftsmanship, and ownership converge.
            </p>
            <div className="flex gap-4">
              <a href="https://www.facebook.com/share/1GGCCZb8sG/?mibextid=wwXIfr" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="text-white/30 hover:text-accent transition-colors">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                </svg>
              </a>
              <a href="https://www.instagram.com/beautybymrsblackowned?igsh=cjV5bXMzeXUwYzM0&utm_source=qr" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="text-white/30 hover:text-accent transition-colors">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <rect x="2" y="2" width="20" height="20" rx="5" />
                  <circle cx="12" cy="12" r="5" />
                  <circle cx="17.5" cy="6.5" r="1.5" fill="currentColor" stroke="none" />
                </svg>
              </a>
              <a href="https://substack.com/@beautybymrsblackowned?r=5p14u6&utm_medium=ios&utm_source=profile&shareImageVariant=blur" target="_blank" rel="noopener noreferrer" aria-label="Substack" className="text-white/30 hover:text-accent transition-colors">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M22.539 8.242H1.46V5.406h21.08v2.836zM1.46 10.812V24L12 18.11 22.54 24V10.812H1.46zM22.54 0H1.46v2.836h21.08V0z" />
                </svg>
              </a>
              <a href="https://www.tiktok.com/@beautybymrsblackowned?_r=1&_t=ZP-93hRBUSI5kt" target="_blank" rel="noopener noreferrer" aria-label="TikTok" className="text-white/30 hover:text-accent transition-colors">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-2.88 2.5 2.89 2.89 0 0 1-2.89-2.89 2.89 2.89 0 0 1 2.89-2.89c.28 0 .54.04.79.1v-3.5a6.37 6.37 0 0 0-.79-.05A6.34 6.34 0 0 0 3.15 15a6.34 6.34 0 0 0 6.34 6.34 6.34 6.34 0 0 0 6.34-6.34V8.7a8.18 8.18 0 0 0 4.76 1.52v-3.4a4.85 4.85 0 0 1-1-.13z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Link columns */}
          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title} className="md:col-span-2">
              <h4 className="font-body text-[10px] uppercase tracking-[0.25em] text-white/50 mb-5 font-semibold">
                {title}
              </h4>
              <ul className="space-y-3">
                {links.map((item) => (
                  <li key={item.label}>
                    <a
                      href={item.href}
                      className="font-body text-xs text-white/30 hover:text-white transition-colors duration-300"
                    >
                      {item.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* Newsletter mini */}
          <div className="md:col-span-2">
            <h4 className="font-body text-[10px] uppercase tracking-[0.25em] text-white/50 mb-5 font-semibold">
              Newsletter
            </h4>
            <p className="font-body text-xs text-white/30 leading-relaxed mb-4">
              Updates and drops, delivered with intention.
            </p>
            <a
              href="#newsletter"
              className="font-body text-xs text-accent hover:text-accent-dark transition-colors"
            >
              Subscribe →
            </a>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/[0.06] py-6 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="font-body text-[10px] text-white/20">
            © {new Date().getFullYear()} Mrs Black Owned. All rights reserved.
          </p>
          <div className="flex gap-6">
            <a href="/refund-policy" className="font-body text-[10px] text-white/20 hover:text-white/40 transition-colors">
              Refund Policy
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
