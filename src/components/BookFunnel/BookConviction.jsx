import { useRef, useEffect } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import FunnelButton from './FunnelButton'

gsap.registerPlugin(ScrollTrigger)

const features = [
  '85 pages of curated celebration of Black-owned beauty.',
  'A comprehensive guide to independent Black-owned brands and rituals.',
  'A visual journey through Black beauty — from fragrance and hair to ritual and craftsmanship.',
]

const BookConviction = () => {
  const sectionRef = useRef(null)
  const headingRef = useRef(null)
  const coverRef = useRef(null)
  const featuresRef = useRef(null)
  const ctaRef = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(headingRef.current, {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 75%',
          toggleActions: 'play none none reverse',
        },
        opacity: 0,
        y: 40,
        duration: 1,
      })

      gsap.from(coverRef.current, {
        scrollTrigger: {
          trigger: coverRef.current,
          start: 'top 75%',
          toggleActions: 'play none none reverse',
        },
        opacity: 0,
        y: 60,
        duration: 1.2,
        ease: 'power3.out',
      })

      if (featuresRef.current) {
        gsap.from(featuresRef.current.children, {
          scrollTrigger: {
            trigger: featuresRef.current,
            start: 'top 80%',
            toggleActions: 'play none none reverse',
          },
          opacity: 0,
          y: 20,
          duration: 0.8,
          stagger: 0.15,
        })
      }

      gsap.from(ctaRef.current, {
        scrollTrigger: {
          trigger: ctaRef.current,
          start: 'top 85%',
          toggleActions: 'play none none reverse',
        },
        opacity: 0,
        y: 20,
        duration: 0.8,
      })
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <section
      ref={sectionRef}
      className="py-24 md:py-36 px-6 bg-white"
      id="book-funnel"
    >
      <div className="max-w-5xl mx-auto">
        {/* Editorial heading */}
        <div ref={headingRef} className="text-center mb-16 md:mb-24">
          <p className="font-body text-[10px] uppercase tracking-[0.4em] text-black/30 mb-6">
            Issue 01
          </p>
          <h2 className="font-serif text-4xl md:text-6xl lg:text-7xl font-medium text-black tracking-tight leading-[1.05] mb-6">
            The Brands. The Founders.
            <br />
            The Culture.
          </h2>
          <p className="font-body text-sm text-black/45 leading-relaxed max-w-2xl mx-auto">
            A definitive beauty and fragrance guide centering Black and
            African-owned brands — documenting excellence, economic impact, and
            cultural legacy.
          </p>
        </div>

        {/* Book cover displayed as object of value — not a product card */}
        <div ref={coverRef} className="relative max-w-2xl mx-auto mb-20 md:mb-28">
          <div className="relative bg-black text-white aspect-[3/4] shadow-[0_25px_80px_rgba(0,0,0,0.3)] overflow-hidden">
            {/* Geometric accent */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 rounded-full border border-white/[0.04]" />

            <div className="absolute inset-0 flex flex-col justify-between p-8 md:p-14">
              <div>
                <p className="font-body text-[10px] uppercase tracking-[0.4em] text-white/40">
                  Mrs Black Owned
                </p>
                <div className="w-10 h-px bg-accent/50 mt-3" />
              </div>

              <div className="max-w-md">
                <h3 className="font-serif text-4xl md:text-6xl font-medium leading-[0.95] tracking-tight mb-8">
                  The Brands.
                  <br />
                  The Founders.
                  <br />
                  The Culture.
                </h3>

                <ul className="space-y-2 text-white/40 text-sm tracking-wide">
                  <li className="flex items-center gap-3">
                    <span className="w-3 h-px bg-accent/60" />
                    Profiles in ownership
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="w-3 h-px bg-accent/60" />
                    Essays on Black aesthetics
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="w-3 h-px bg-accent/60" />
                    An archive built to last
                  </li>
                </ul>
              </div>

              <div className="flex justify-between items-end">
                <p className="font-body text-[10px] uppercase tracking-[0.3em] text-white/25">
                  Digital & Print Editions
                </p>
                <div className="text-right">
                  <p className="text-[10px] uppercase tracking-widest text-white/20">
                    Issue
                  </p>
                  <p className="text-xl md:text-2xl font-semibold text-accent/40">
                    01
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Feature statements */}
        <div
          ref={featuresRef}
          className="max-w-3xl mx-auto space-y-8 mb-16 md:mb-20"
        >
          {features.map((feature, i) => (
            <div key={i} className="flex items-start gap-4">
              <span className="w-8 h-px bg-accent mt-3 shrink-0" />
              <p className="font-body text-sm md:text-base text-black/55 leading-relaxed">
                {feature}
              </p>
            </div>
          ))}
        </div>

        {/* Single CTA — Primary set */}
        <div ref={ctaRef} className="text-center">
          <FunnelButton href="#book-preview">
            Begin the Experience
          </FunnelButton>
        </div>
      </div>
    </section>
  )
}

export default BookConviction
