import { useRef, useEffect } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const CTABlock = () => {
  const sectionRef = useRef(null)
  const contentRef = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(contentRef.current.children, {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 75%',
          toggleActions: 'play none none reverse',
        },
        opacity: 0,
        y: 30,
        duration: 0.8,
        stagger: 0.12,
        ease: 'power3.out',
      })
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <section ref={sectionRef} className="py-20 md:py-28 px-6 bg-accent">
      <div ref={contentRef} className="max-w-3xl mx-auto text-center">
        <p className="font-script text-2xl md:text-3xl text-black/70 mb-4">
          the next chapter
        </p>

        <h2 className="font-serif text-3xl md:text-5xl lg:text-6xl font-medium text-black tracking-tight leading-[1.1] mb-6">
          Your Dream Store Is Just<br />a Few Clicks Away
        </h2>

        <p className="font-body text-sm text-black/60 leading-relaxed max-w-lg mx-auto mb-10">
          No coding required. Professional in minutes. Fully customizable.
          Built to increase conversions with timeless elegance.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="#products"
            className="inline-block bg-black text-white font-body text-xs uppercase tracking-[0.2em] px-10 py-4 hover:bg-black/80 transition-all duration-300 rounded-sm"
          >
            Start Shopping
          </a>
          <a
            href="#book"
            className="inline-block bg-white text-black font-body text-xs uppercase tracking-[0.2em] px-10 py-4 hover:bg-black hover:text-white transition-all duration-300 rounded-sm"
          >
            Learn More
          </a>
        </div>

        {/* Trust indicators */}
        <div className="flex flex-wrap justify-center gap-8 mt-12">
          <div className="flex items-center gap-2 text-black/50">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
              <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
            </svg>
            <span className="font-body text-[11px] uppercase tracking-[0.15em]">Secure Checkout</span>
          </div>
          <div className="flex items-center gap-2 text-black/50">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
              <rect x="1" y="3" width="15" height="13" />
              <path d="m16 8 4 2v5h-3" />
              <circle cx="5.5" cy="18.5" r="2.5" />
              <circle cx="18.5" cy="18.5" r="2.5" />
            </svg>
            <span className="font-body text-[11px] uppercase tracking-[0.15em]">Free Shipping $75+</span>
          </div>
          <div className="flex items-center gap-2 text-black/50">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
              <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
            </svg>
            <span className="font-body text-[11px] uppercase tracking-[0.15em]">Black-Owned</span>
          </div>
        </div>
      </div>
    </section>
  )
}

export default CTABlock
