import { useRef, useEffect } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const Affirmation = () => {
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
        duration: 1,
        stagger: 0.15,
        ease: 'power3.out',
      })
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <section
      ref={sectionRef}
      className="py-24 md:py-36 px-6 bg-black text-white"
    >
      <div ref={contentRef} className="max-w-3xl mx-auto text-center">
        <p className="font-script text-2xl md:text-3xl text-accent/70 mb-6">
          more than a book
        </p>

        <h2 className="font-serif text-3xl md:text-5xl lg:text-6xl font-medium tracking-tight leading-[1.1] mb-6">
          A Cultural Archive.
          <br />
          A Visual Experience.
          <br />
          A Statement of Ownership.
        </h2>

        <div className="w-12 h-px bg-accent/40 mx-auto mb-8" />

        <p className="font-body text-sm text-white/40 leading-relaxed max-w-xl mx-auto mb-12">
          This isn't a purchase. It's participation. Every copy supports the
          documentation, celebration, and economic empowerment of Black-owned
          beauty — now and for generations to come.
        </p>

        {/* Final soft CTA — subtle text link back to edition selection */}
        <a
          href="#choose-edition"
          className="inline-block font-body text-[11px] uppercase tracking-[0.2em] text-white/35 hover:text-accent underline underline-offset-4 decoration-white/15 hover:decoration-accent/40 transition-all duration-300"
        >
          Own the Archive
        </a>
      </div>
    </section>
  )
}

export default Affirmation
