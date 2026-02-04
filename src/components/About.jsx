import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const About = () => {
  const sectionRef = useRef(null)
  const headingRef = useRef(null)
  const textRef = useRef(null)

  useEffect(() => {
    gsap.from(headingRef.current, {
      scrollTrigger: {
        trigger: sectionRef.current,
        start: 'top 80%',
        toggleActions: 'play none none reverse',
      },
      opacity: 0,
      y: 40,
      duration: 0.8,
    })
    gsap.from(textRef.current, {
      scrollTrigger: {
        trigger: sectionRef.current,
        start: 'top 80%',
        toggleActions: 'play none none reverse',
      },
      opacity: 0,
      y: 40,
      duration: 0.8,
      delay: 0.2,
    })
  }, [])

  return (
    <section ref={sectionRef} className="py-24 px-6 bg-white text-primary text-center">
      <h2 ref={headingRef} className="text-4xl font-semibold mb-6">About Kay Martin</h2>
      <p ref={textRef} className="text-lg max-w-3xl mx-auto">
        Kay Martin is a beauty editorial writer, author, and content creator dedicated
        to documenting and celebrating Black-owned beauty brands through curated storytelling.
      </p>
    </section>
  )
}

export default About
