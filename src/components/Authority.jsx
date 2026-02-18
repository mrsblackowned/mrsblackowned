import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'


const Authority = () => {
  const sectionRef = useRef(null)
  const contentRef = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(contentRef.current.children, {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 70%',
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
    <section ref={sectionRef} className="py-24 md:py-32 px-6 bg-white relative overflow-hidden">
      {/* Geometric semicircle accent */}
      <div className="absolute -bottom-32 left-1/2 -translate-x-1/2 w-64 h-32 rounded-t-full border border-black/[0.04]" />

      <div ref={contentRef} className="max-w-3xl mx-auto text-center relative z-10">
        <p className="font-body text-[11px] uppercase tracking-[0.3em] text-black/40 mb-4">
          The Authority
        </p>

        <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-medium text-black tracking-tight leading-[1.1] mb-6">
          Archival by Design
        </h2>

        <p className="font-body text-sm md:text-base text-black/50 leading-relaxed">
          Curated with discernment, research, and cultural integrity — this is not trend-based content. It is archival-quality work positioned for libraries, institutions, salons, and private collectors.
        </p>
      </div>
    </section>
  )
}

export default Authority
