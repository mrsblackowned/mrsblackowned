import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const Platform = () => {
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
          The Platform
        </p>

        <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-medium text-black tracking-tight leading-[1.1] mb-8">
          An Ongoing<br />Editorial Record.
        </h2>

        <p className="font-body text-lg md:text-xl text-black/60 leading-relaxed mb-12">
          A living editorial space for cultural commentary, industry insight, brand spotlights, and economic education—bridging beauty, history, and ownership in real time. Beyond trend cycles. Beyond surface-level coverage.
        </p>

        <a
          href="#"
          className="inline-block border border-black/80 text-black text-sm uppercase tracking-[0.2em] px-10 py-4 hover:bg-black hover:text-white transition duration-300"
        >
          Enter the Editorial
        </a>
      </div>
    </section>
  )
}

export default Platform
