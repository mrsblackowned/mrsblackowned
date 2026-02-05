import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const Mission = () => {
  const sectionRef = useRef(null)
  const labelRef = useRef(null)
  const headlineRef = useRef(null)
  const linesRef = useRef([])

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(labelRef.current, {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 70%',
          toggleActions: 'play none none reverse',
        },
        opacity: 0,
        y: 20,
        duration: 0.6,
      })

      gsap.from(headlineRef.current, {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 65%',
          toggleActions: 'play none none reverse',
        },
        opacity: 0,
        y: 30,
        duration: 0.8,
        delay: 0.1,
      })

      linesRef.current.forEach((line, i) => {
        gsap.from(line, {
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 60%',
            toggleActions: 'play none none reverse',
          },
          opacity: 0,
          x: -30,
          duration: 0.8,
          delay: 0.3 + i * 0.15,
          ease: 'power3.out',
        })
      })
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  const missionLines = [
    'To amplify underrepresented founders.',
    'To shift beauty spending with purpose.',
    'To reframe beauty as cultural preservation, economic power, and future inheritance.',
  ]

  return (
    <section ref={sectionRef} className="py-40 md:py-56 px-6 bg-secondary">
      <div className="max-w-4xl mx-auto text-center">
        <p
          ref={labelRef}
          className="uppercase tracking-[0.5em] text-xs text-black/40 mb-8"
        >
          The Mission
        </p>

        <h2
          ref={headlineRef}
          className="font-serif text-4xl md:text-5xl lg:text-6xl font-medium text-black tracking-tight leading-[1.1] mb-16 md:mb-20"
        >
          Redirecting Beauty Dollars<br />With Intention.
        </h2>

        <div className="space-y-6 md:space-y-8">
          {missionLines.map((line, i) => (
            <p
              key={i}
              ref={(el) => (linesRef.current[i] = el)}
              className="font-body text-lg md:text-xl lg:text-2xl text-black/70 leading-relaxed"
            >
              {line}
            </p>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Mission
