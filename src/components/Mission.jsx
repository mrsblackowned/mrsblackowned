import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'


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
        if (!line) return
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
    <section ref={sectionRef} className="py-32 md:py-40 px-6 bg-black text-white">
      <div className="max-w-4xl mx-auto text-center">
        <p
          ref={labelRef}
          className="font-body text-[11px] uppercase tracking-[0.3em] text-white/40 mb-6"
        >
          The Mission
        </p>

        <h2
          ref={headlineRef}
          className="font-serif text-4xl md:text-5xl lg:text-6xl font-medium tracking-tight leading-[1.1] mb-14 md:mb-16"
        >
          Redirecting Beauty Dollars<br />With Intention
        </h2>

        <div className="space-y-6 md:space-y-8">
          {missionLines.map((line, i) => (
            <p
              key={i}
              ref={(el) => (linesRef.current[i] = el)}
              className="font-body text-base md:text-lg lg:text-xl text-white/60 leading-relaxed"
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
