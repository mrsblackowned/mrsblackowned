import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const About = () => {
  const sectionRef = useRef(null)
  const labelRef = useRef(null)
  const headingRef = useRef(null)
  const textRef = useRef(null)
  const signatureRef = useRef(null)

  useEffect(() => {
    const elements = [labelRef.current, headingRef.current, textRef.current, signatureRef.current]

    elements.forEach((el, i) => {
      gsap.from(el, {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 75%',
          toggleActions: 'play none none reverse',
        },
        opacity: 0,
        y: 40,
        duration: 0.8,
        delay: i * 0.15,
        ease: 'power3.out',
      })
    })
  }, [])

  return (
    <section ref={sectionRef} className="py-32 px-6 bg-white text-black">
      <div className="max-w-3xl mx-auto text-center">
        <p
          ref={labelRef}
          className="uppercase tracking-[0.4em] text-sm text-black/40 mb-6"
        >
          The Vision
        </p>

        <h2
          ref={headingRef}
          className="font-body text-4xl md:text-5xl font-bold mb-8 tracking-tight leading-tight"
        >
          This Is What<br />Ownership Looks Like
        </h2>

        <div ref={textRef} className="space-y-6 text-lg text-black/70 leading-relaxed">
          <p>
            Kay Martin is a beauty editorial writer and author whose work centers
            Black women, ownership, and self-expression. Through sharp cultural
            commentary and unflinching storytelling, she documents what it means
            to own your narrative — in beauty, business, and beyond.
          </p>
          <p>
            This isn't sponsored content. This is a curated archive of the brands,
            founders, and stories shaping the future of beauty on their own terms.
          </p>
        </div>

        <div ref={signatureRef} className="mt-12">
          <div className="w-16 h-px bg-black/20 mx-auto mb-6"></div>
          <p className="font-body text-sm tracking-wide text-black/50">
            Kay Martin — Editor & Author
          </p>
        </div>
      </div>
    </section>
  )
}

export default About
