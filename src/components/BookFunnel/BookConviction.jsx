import { useRef, useEffect } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import FunnelButton from './FunnelButton'


const features = [
  '85 pages of curated celebration of Black-owned beauty.',
  'A complete guide to independent Black-owned brands and rituals.',
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
            2026 Edition
          </p>
          <h2 className="font-serif text-4xl md:text-6xl lg:text-7xl font-medium text-black tracking-tight leading-[1.05] mb-6">
            All The Black-Owned,
            <br />
            Babee!
          </h2>
          <p className="font-body text-sm text-black/45 leading-relaxed max-w-2xl mx-auto">
            A complete guide to Black-owned beauty and fragrance — celebrating
            the brands, the founders, and the culture redefining the industry.
          </p>
        </div>

        {/* Actual book cover image */}
        <div ref={coverRef} className="relative max-w-2xl mx-auto mb-20 md:mb-28">
          <img
            src="/book/book-cover.webp"
            alt="All The Black-Owned, Babee! — 2026 Edition — Beauty by Mrs. Black Owned"
            className="w-full shadow-[0_25px_80px_rgba(0,0,0,0.3)]"
            fetchpriority="high"
          />
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
