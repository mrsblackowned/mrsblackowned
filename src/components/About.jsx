import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const About = () => {
  const sectionRef = useRef(null)
  const imageRef = useRef(null)
  const contentRef = useRef(null)
  const headlineRef = useRef(null)
  const bylineRef = useRef(null)
  const bioRef = useRef(null)
  const creditsRef = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Image reveal
      gsap.from(imageRef.current, {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 70%',
          toggleActions: 'play none none reverse',
        },
        opacity: 0,
        scale: 1.05,
        duration: 1.2,
        ease: 'power3.out',
      })

      // Staggered text reveals
      const textElements = [headlineRef.current, bylineRef.current, bioRef.current, creditsRef.current]
      textElements.forEach((el, i) => {
        gsap.from(el, {
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 65%',
            toggleActions: 'play none none reverse',
          },
          opacity: 0,
          y: 30,
          duration: 0.8,
          delay: 0.3 + i * 0.12,
          ease: 'power3.out',
        })
      })
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <section ref={sectionRef} className="py-24 md:py-32 bg-secondary">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Editorial Portrait */}
          <div ref={imageRef} className="relative">
            <div className="aspect-[3/4] bg-black/5 overflow-hidden">
              {/* Abstract editorial placeholder - sophisticated gradient */}
              <div className="w-full h-full bg-gradient-to-br from-black/10 via-black/5 to-transparent relative">
                <div className="absolute inset-0 flex items-end justify-start p-8 md:p-12">
                  <span className="text-black/20 text-[8rem] md:text-[12rem] font-serif leading-none select-none">
                    K
                  </span>
                </div>
              </div>
            </div>
            {/* Photo credit line */}
            <p className="mt-4 text-xs tracking-[0.2em] text-black/30 uppercase">
              Editor & Author
            </p>
          </div>

          {/* Editorial Content */}
          <div ref={contentRef} className="lg:py-8">
            <h2
              ref={headlineRef}
              className="font-serif text-4xl md:text-5xl lg:text-6xl font-medium text-black leading-[1.1] tracking-tight"
            >
              Kay Martin
            </h2>

            <p
              ref={bylineRef}
              className="mt-4 uppercase tracking-[0.35em] text-xs text-black/50"
            >
              Beauty Editorial Writer · Brooklyn, NY
            </p>

            <div ref={bioRef} className="mt-10 space-y-5">
              <p className="text-lg md:text-xl text-black/80 leading-relaxed">
                Kay Martin is a beauty editorial writer and author whose work centers
                Black women, ownership, and self-expression.
              </p>
              <p className="text-base text-black/60 leading-relaxed">
                Through sharp cultural commentary and unflinching storytelling, she
                documents what it means to own your narrative — in beauty, business,
                and beyond. Her work has been described as "the intersection of
                commerce and culture, told without compromise."
              </p>
              <p className="text-base text-black/60 leading-relaxed">
                This isn't sponsored content. This is a curated archive of the brands,
                founders, and stories shaping the future of beauty on their own terms.
              </p>
            </div>

            <div ref={creditsRef} className="mt-12 pt-8 border-t border-black/10">
              <p className="uppercase tracking-[0.3em] text-[10px] text-black/40 mb-3">
                Selected Work
              </p>
              <p className="text-sm text-black/50 leading-relaxed">
                Essays on ownership, beauty culture, and the business of Black aesthetics.
                Author of forthcoming works on editorial independence.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
