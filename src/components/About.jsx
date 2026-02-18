import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'


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

      const textElements = [headlineRef.current, bylineRef.current, bioRef.current, creditsRef.current]
      textElements.forEach((el, i) => {
        if (!el) return
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
    <section ref={sectionRef} id="about" className="py-24 md:py-32 bg-white">
      <div className="max-w-4xl mx-auto px-6">
        <div ref={imageRef} className="mb-12 md:mb-16">
          <div className="aspect-[3/4] max-w-2xl mx-auto bg-neutral-100 overflow-hidden">
            <img
              src="/Images/IMG_3792.jpeg"
              alt="Kay Martin"
              className="w-full h-full object-cover"
              loading="lazy"
            />
          </div>
          <p className="mt-4 font-body text-[10px] tracking-[0.25em] text-black/30 uppercase text-center">
            Editor & Author
          </p>
        </div>

        <div ref={contentRef} className="max-w-2xl mx-auto">
          <h2
            ref={headlineRef}
            className="font-serif text-4xl md:text-5xl lg:text-6xl font-medium text-black leading-[1.1] tracking-tight text-center"
          >
            Kay Martin
          </h2>

          <p
            ref={bylineRef}
            className="mt-4 font-body text-[10px] uppercase tracking-[0.35em] text-black/40 text-center"
          >
            Beauty Editorial Writer · New York
          </p>

          <div ref={bioRef} className="mt-10 space-y-5">
            <p className="font-body text-base md:text-lg text-black/70 leading-relaxed">
              Kay Martin is a beauty editorial writer and author whose work centers
              Black women, ownership, and self-expression.
            </p>
            <p className="font-body text-sm text-black/50 leading-relaxed">
              Through sharp cultural commentary and unflinching storytelling, she
              documents what it means to own your narrative — in beauty, business,
              and beyond. Her work has been described as &ldquo;the intersection of
              commerce and culture, told without compromise.&rdquo;
            </p>
            <p className="font-body text-sm text-black/50 leading-relaxed">
              This isn&rsquo;t sponsored content. This is a curated archive of the brands,
              founders, and stories shaping the future of beauty on their own terms.
            </p>
          </div>

          <div ref={creditsRef} className="mt-12 pt-8 border-t border-black/10">
            <p className="font-body text-[10px] uppercase tracking-[0.3em] text-black/30 mb-3">
              Selected Work
            </p>
            <p className="font-body text-sm text-black/40 leading-relaxed">
              Essays on ownership, beauty culture, and the business of Black aesthetics.
              Author of forthcoming works on editorial independence.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
