import { useRef, useEffect } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const Hero = () => {
  const sectionRef = useRef(null)
  const headlineRef = useRef(null)
  const subRef = useRef(null)
  const ctaRef = useRef(null)
  const scriptRef = useRef(null)
  const decorRef = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(headlineRef.current, {
        y: 60,
        opacity: 0,
        duration: 1.2,
        delay: 0.2,
        ease: 'power3.out',
      })
      gsap.from(subRef.current, {
        y: 40,
        opacity: 0,
        duration: 1,
        delay: 0.5,
        ease: 'power3.out',
      })
      gsap.from(scriptRef.current, {
        y: 30,
        opacity: 0,
        duration: 1,
        delay: 0.7,
        ease: 'power3.out',
      })
      gsap.from(ctaRef.current, {
        y: 30,
        opacity: 0,
        duration: 0.8,
        delay: 0.9,
        ease: 'power3.out',
      })
      gsap.from(decorRef.current, {
        scale: 0,
        opacity: 0,
        duration: 1.4,
        delay: 0.4,
        ease: 'power3.out',
      })
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <section
      ref={sectionRef}
      className="relative min-h-screen flex flex-col justify-center items-center text-center px-6 bg-white overflow-hidden"
    >
      {/* Geometric accent - large circle */}
      <div
        ref={decorRef}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] md:w-[700px] md:h-[700px] rounded-full border border-black/[0.04]"
      />

      {/* Diagonal line accents */}
      <div className="absolute top-20 right-10 md:right-20 w-px h-24 bg-black/[0.06] rotate-45" />
      <div className="absolute bottom-32 left-10 md:left-20 w-px h-20 bg-black/[0.06] -rotate-45" />

      <div className="relative z-10 max-w-5xl">
        <p
          ref={scriptRef}
          className="font-script text-2xl md:text-3xl text-accent mb-4"
        >
          timeless elegance
        </p>

        <h1
          ref={headlineRef}
          className="font-serif text-5xl md:text-7xl lg:text-8xl text-black font-medium tracking-tight leading-[1.05] mb-8"
        >
          A New Standard in<br />Beauty & Ownership
        </h1>

        <p
          ref={subRef}
          className="font-body text-sm md:text-base text-black/50 leading-relaxed max-w-2xl mx-auto mb-12 tracking-wide"
        >
          Curated Black and African-owned beauty and fragrance — where culture,
          craftsmanship, and timeless sophistication converge.
        </p>

        <div ref={ctaRef} className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="#products"
            className="inline-block bg-black text-white font-body text-xs uppercase tracking-[0.2em] px-10 py-4 hover:bg-accent hover:text-black transition-all duration-300 rounded-sm"
          >
            Shop the Collection
          </a>
          <a
            href="#book"
            className="inline-block border border-black text-black font-body text-xs uppercase tracking-[0.2em] px-10 py-4 hover:bg-black hover:text-white transition-all duration-300 rounded-sm"
          >
            The Book
          </a>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10">
        <div className="flex flex-col items-center gap-3">
          <span className="font-body text-[10px] uppercase tracking-[0.3em] text-black/30">Scroll</span>
          <div className="w-px h-12 bg-gradient-to-b from-black/20 to-transparent" />
        </div>
      </div>
    </section>
  )
}

export default Hero
