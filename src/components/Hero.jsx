import { useRef, useEffect } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const Hero = () => {
  const headlineRef = useRef(null)
  const subRef = useRef(null)
  const overlayRef = useRef(null)
  const imageRef = useRef(null)

  useEffect(() => {
    // Entry animations
    gsap.from(overlayRef.current, {
      opacity: 0,
      duration: 1.2,
    })
    gsap.from(headlineRef.current, {
      y: -50,
      opacity: 0,
      duration: 1,
      delay: 0.3,
    })
    gsap.from(subRef.current, {
      y: -20,
      opacity: 0,
      duration: 1,
      delay: 0.6,
    })

    // Parallax on background image
    gsap.to(imageRef.current, {
      y: () => window.innerHeight * 0.25,
      ease: 'none',
      scrollTrigger: {
        trigger: imageRef.current,
        start: 'top top',
        end: 'bottom top',
        scrub: true,
      },
    })
  }, [])

  return (
    <section className="relative min-h-screen flex flex-col justify-center items-center text-center px-6 bg-black overflow-hidden">
      {/* Parallax background image */}
      <img
        ref={imageRef}
        src="https://via.placeholder.com/1200x800"
        alt="Hero editorial"
        className="absolute inset-0 w-full h-[120%] object-cover opacity-20"
      />

      {/* Gradient overlay */}
      <div
        ref={overlayRef}
        className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/70 z-10"
      ></div>

      <div className="relative z-20 max-w-4xl">
        <h1
          ref={headlineRef}
          className="font-serif text-4xl md:text-6xl lg:text-7xl text-white font-medium mb-10 tracking-tight leading-[1.05]"
        >
          A New Standard in<br />Beauty Documentation.
        </h1>

        <p
          ref={subRef}
          className="font-body text-base md:text-lg text-[#DFDCD5]/70 leading-relaxed max-w-2xl mx-auto"
        >
          A curated, archival guide honoring Black and African-owned beauty and fragrance—where culture, craftsmanship, and ownership converge.
        </p>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-12 left-1/2 -translate-x-1/2 z-20">
        <div className="w-px h-16 bg-gradient-to-b from-transparent via-[#DFDCD5]/30 to-[#DFDCD5]/50"></div>
      </div>
    </section>
  )
}

export default Hero
