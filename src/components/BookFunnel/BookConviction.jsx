import { useRef, useEffect } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import FunnelButton from './FunnelButton'

gsap.registerPlugin(ScrollTrigger)

const features = [
  '85 pages of curated celebration of Black-owned beauty.',
  'A complete guide to independent Black-owned brands and rituals.',
  'A visual journey through Black beauty — from fragrance and hair to ritual and craftsmanship.',
]

/* Photos for the film strip rows on the cover */
const filmStripImages = [
  '/polaroids/0.jpeg',
  '/polaroids/1.jpeg',
  '/polaroids/2.jpeg',
  '/polaroids/3.jpeg',
]

const FilmStrip = ({ images, className = '' }) => (
  <div className={`relative ${className}`}>
    {/* Sprocket holes */}
    <div className="absolute inset-x-0 top-0 h-[10px] md:h-[14px] bg-black flex items-center justify-around px-2">
      {Array.from({ length: 20 }).map((_, i) => (
        <div key={i} className="w-[6px] h-[4px] md:w-[8px] md:h-[5px] bg-white/90 rounded-[1px]" />
      ))}
    </div>
    {/* Photo row */}
    <div className="grid grid-cols-4 gap-0 bg-black pt-[10px] pb-[10px] md:pt-[14px] md:pb-[14px]">
      {images.map((src, i) => (
        <div key={i} className="aspect-square overflow-hidden">
          <img
            src={src}
            alt=""
            className="w-full h-full object-cover grayscale"
            loading="lazy"
          />
        </div>
      ))}
    </div>
    {/* Bottom sprocket holes */}
    <div className="absolute inset-x-0 bottom-0 h-[10px] md:h-[14px] bg-black flex items-center justify-around px-2">
      {Array.from({ length: 20 }).map((_, i) => (
        <div key={i} className="w-[6px] h-[4px] md:w-[8px] md:h-[5px] bg-white/90 rounded-[1px]" />
      ))}
    </div>
  </div>
)

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

        {/* Book cover — film strip aesthetic matching the actual cover */}
        <div ref={coverRef} className="relative max-w-2xl mx-auto mb-20 md:mb-28">
          <div className="relative bg-black shadow-[0_25px_80px_rgba(0,0,0,0.3)] overflow-hidden">
            {/* Top film strip row */}
            <FilmStrip images={filmStripImages} />

            {/* Marquee band — top */}
            <div className="bg-[#E8E0D0] py-1.5 overflow-hidden">
              <p className="font-body text-[9px] md:text-[11px] uppercase tracking-[0.3em] text-black/60 whitespace-nowrap text-center">
                A Complete Guide To &nbsp;&middot;&nbsp; A Complete Guide To &nbsp;&middot;&nbsp; A Complete Guide To &nbsp;&middot;&nbsp; A Complete Guide To
              </p>
            </div>

            {/* Central title area */}
            <div className="bg-neutral-800 py-12 md:py-20 px-6 md:px-12 text-center">
              <h3
                className="font-serif text-3xl md:text-5xl lg:text-6xl font-bold text-white tracking-tight leading-[1.05] mb-4 uppercase"
                style={{ fontVariant: 'small-caps' }}
              >
                All The Black-
                <br />
                Owned, Babee!
              </h3>

              <p className="font-body text-xs md:text-sm uppercase tracking-[0.3em] text-accent mb-8">
                2026 Edition
              </p>

              <p className="font-serif text-xl md:text-3xl lg:text-4xl tracking-[0.15em] text-white/80 mb-2 uppercase">
                Beauty By
              </p>
              <p className="font-body text-sm md:text-base uppercase tracking-[0.25em] text-accent/80">
                Mrs. Black Owned
              </p>
            </div>

            {/* Marquee band — bottom */}
            <div className="bg-[#E8E0D0] py-1.5 overflow-hidden">
              <p className="font-body text-[9px] md:text-[11px] uppercase tracking-[0.3em] text-black/60 whitespace-nowrap text-center">
                A Complete Guide To &nbsp;&middot;&nbsp; A Complete Guide To &nbsp;&middot;&nbsp; A Complete Guide To &nbsp;&middot;&nbsp; A Complete Guide To
              </p>
            </div>

            {/* Bottom film strip row */}
            <FilmStrip
              images={[...filmStripImages].reverse()}
            />
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
