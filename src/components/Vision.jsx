import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const Vision = () => {
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
    <section ref={sectionRef} className="py-32 md:py-40 px-6 bg-secondary">
      <div ref={contentRef} className="max-w-3xl mx-auto text-center">
        <p className="uppercase tracking-[0.5em] text-xs text-black/40 mb-6">
          The Vision
        </p>

        <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-medium text-black tracking-tight leading-[1.1] mb-8">
          A Living Body of Work.
        </h2>

        <p className="font-body text-lg md:text-xl text-black/60 leading-relaxed">
          A multi-year, annually released body of work designed to become a reference point in beauty history—opening pathways to funding, partnerships, and future brand extensions, including fragrance.
        </p>
      </div>
    </section>
  )
}

export default Vision
