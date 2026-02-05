import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const brands = [
  { src: '/brand1.svg', alt: 'Brand 1' },
  { src: '/brand2.svg', alt: 'Brand 2' },
  { src: '/brand3.svg', alt: 'Brand 3' },
  { src: '/brand4.svg', alt: 'Brand 4' },
]

const FeaturedBrands = () => {
  const sectionRef = useRef(null)
  const headingRef = useRef(null)
  const cardsRef = useRef([])

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(headingRef.current, {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 75%',
          toggleActions: 'play none none reverse',
        },
        opacity: 0,
        y: 30,
        duration: 0.8,
        ease: 'power3.out',
      })

      cardsRef.current.forEach((card, i) => {
        gsap.from(card, {
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 65%',
            toggleActions: 'play none none reverse',
          },
          opacity: 0,
          y: 40,
          duration: 0.6,
          delay: 0.2 + i * 0.1,
          ease: 'power3.out',
        })
      })
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <section ref={sectionRef} className="py-32 px-6 bg-white text-black">
      <div className="max-w-5xl mx-auto">
        <div ref={headingRef} className="text-center mb-20">
          <p className="uppercase tracking-[0.4em] text-xs text-black/40 mb-4">
            The Archive
          </p>
          <h2 className="font-serif text-4xl md:text-5xl font-medium mb-6 tracking-tight">
            Featured Brands
          </h2>
          <p className="font-body text-base text-black/50 max-w-lg mx-auto leading-relaxed">
            Black-owned. Founder-led. Building legacies, not trends.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
          {brands.map((brand, i) => (
            <div
              key={i}
              ref={(el) => (cardsRef.current[i] = el)}
              className="aspect-square bg-[#FAFAF9] border border-black/5 flex items-center justify-center p-8 hover:border-black/20 transition-colors duration-300"
            >
              <img
                src={brand.src}
                alt={brand.alt}
                className="max-h-12 md:max-h-16 w-auto opacity-70 hover:opacity-100 transition-opacity duration-300"
              />
            </div>
          ))}
        </div>

        <p className="text-center mt-12 text-xs tracking-[0.2em] text-black/30 uppercase">
          More brands featured inside the issue
        </p>
      </div>
    </section>
  )
}

export default FeaturedBrands
