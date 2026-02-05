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
    <footer ref={footerRef} className="py-20 px-6 bg-black text-white">
      <div ref={contentRef} className="max-w-5xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center gap-10">
          <div className="text-center md:text-left">
            <p className="font-serif text-xl tracking-tight">Mrs Black Owned</p>
            <p className="font-body text-xs text-white/40 mt-2 tracking-[0.15em] uppercase">
              The Archive of Ownership
            </p>
          </div>

          <nav className="flex gap-10">
            <a
              href="#"
              className="font-body text-xs uppercase tracking-[0.15em] text-white/50 hover:text-white transition"
            >
              Instagram
            </a>
            <a
              href="#"
              className="font-body text-xs uppercase tracking-[0.15em] text-white/50 hover:text-white transition"
            >
              Twitter
            </a>
          </nav>
        </div>

        <div className="mt-16 pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="font-body text-xs text-white/30">
            &copy; {new Date().getFullYear()} Kay Martin. All rights reserved.
          </p>
          <p className="font-body text-xs text-white/20">
            Built with intention.
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
