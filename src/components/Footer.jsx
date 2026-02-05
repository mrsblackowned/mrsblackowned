import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const footerLinks = {
  Shop: ['New Arrivals', 'Best Sellers', 'Skincare', 'Fragrance', 'Hair Care'],
  About: ['Our Story', 'The Book', 'The Editorial', 'Press'],
  Support: ['Contact', 'Shipping', 'Returns', 'FAQ'],
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
              src="/Logos/BBAlternateTransparent.png"
              alt="Mrs Black Owned"
              className="h-10 md:h-12 w-auto mb-4 invert opacity-90"
            />
            <p className="font-body text-xs text-white/40 leading-relaxed mb-6 max-w-xs">
              A curated destination celebrating Black and African-owned beauty.
              Where culture, craftsmanship, and ownership converge.
            </p>
            <div className="flex gap-4">
              <a href="#" aria-label="Instagram" className="text-white/30 hover:text-accent transition-colors">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <rect x="2" y="2" width="20" height="20" rx="5" />
                  <circle cx="12" cy="12" r="5" />
                  <circle cx="17.5" cy="6.5" r="1.5" fill="currentColor" stroke="none" />
                </svg>
              </a>
              <a href="#" aria-label="Twitter" className="text-white/30 hover:text-accent transition-colors">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
              </a>
              <a href="#" aria-label="Substack" className="text-white/30 hover:text-accent transition-colors">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M22.539 8.242H1.46V5.406h21.08v2.836zM1.46 10.812V24L12 18.11 22.54 24V10.812H1.46zM22.54 0H1.46v2.836h21.08V0z" />
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
                {links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="font-body text-xs text-white/30 hover:text-white transition-colors duration-300"
                    >
                      {link}
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
            <a href="#" className="font-body text-[10px] text-white/20 hover:text-white/40 transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="font-body text-[10px] text-white/20 hover:text-white/40 transition-colors">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
