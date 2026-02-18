import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'


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
    <section ref={sectionRef} className="py-24 md:py-32 px-6 bg-white">
      <div ref={contentRef} className="max-w-3xl mx-auto text-center">
        <p className="font-body text-[11px] uppercase tracking-[0.3em] text-black/40 mb-4">
          The Platform
        </p>

        <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-medium text-black tracking-tight leading-[1.1] mb-6">
          An Ongoing<br />Editorial Record
        </h2>

        <p className="font-body text-sm md:text-base text-black/50 leading-relaxed mb-10">
          A living editorial space for cultural commentary, industry insight, brand spotlights, and economic education — bridging beauty, history, and ownership in real time.
        </p>

        <a
          href="#choose-edition"
          className="inline-block bg-black text-white text-xs uppercase tracking-[0.2em] px-10 py-4 hover:bg-accent hover:text-black transition-all duration-300 rounded-sm"
        >
          Own the Archive
        </a>
      </div>
    </section>
  )
}

export default Platform
