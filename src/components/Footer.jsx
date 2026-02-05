import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const Footer = () => {
  const footerRef = useRef(null)
  const contentRef = useRef(null)

  useEffect(() => {
    gsap.from(contentRef.current, {
      scrollTrigger: {
        trigger: footerRef.current,
        start: 'top 90%',
        toggleActions: 'play none none reverse',
      },
      opacity: 0,
      duration: 0.8,
    })
  }, [])

  return (
    <footer ref={footerRef} className="py-24 px-6 bg-black text-white">
      <div ref={contentRef} className="max-w-4xl mx-auto text-center">
        {/* Logo wordmark */}
        <img
          src="/Logos/BBAlternateTransparent.png"
          alt="Beauty By Mrs. Black Owned"
          className="h-12 md:h-14 w-auto mx-auto mb-4 invert opacity-90"
        />
        <p className="font-body text-xs text-white/40 tracking-[0.2em] uppercase mb-12">
          Editorial by Kay Martin
        </p>

        <nav className="flex justify-center gap-10 mb-16">
          <a
            href="#"
            className="font-body text-xs uppercase tracking-[0.15em] text-white/40 hover:text-white transition"
          >
            Instagram
          </a>
          <a
            href="#"
            className="font-body text-xs uppercase tracking-[0.15em] text-white/40 hover:text-white transition"
          >
            Substack
          </a>
        </nav>

        <div className="w-12 h-px bg-white/10 mx-auto mb-8"></div>

        <p className="font-body text-xs text-white/20">
          &copy; {new Date().getFullYear()} Mrs Black Owned
        </p>
      </div>
    </footer>
  )
}

export default Footer
