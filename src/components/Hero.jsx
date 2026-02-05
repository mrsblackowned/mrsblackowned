import { useRef, useEffect } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const Hero = () => {
  const headlineRef = useRef(null)
  const subRef = useRef(null)
  const buttonRef = useRef(null)
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
    gsap.from(buttonRef.current, {
      scale: 0.8,
      opacity: 0,
      duration: 1,
      delay: 0.9,
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
        className="absolute inset-0 w-full h-[120%] object-cover opacity-30"
      />

      {/* Gradient overlay */}
      <div
        ref={overlayRef}
        className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/80 z-10"
      ></div>

      <div className="relative z-20 max-w-3xl">
        <p className="uppercase tracking-[0.4em] text-sm text-[#DFDCD5]/60 mb-6">
          A Beauty Editorial
        </p>

        <h1
          ref={headlineRef}
          className="font-body text-5xl md:text-7xl text-white font-bold mb-6 tracking-tight leading-tight"
        >
          Beauty, Told<br />Without Permission
        </h1>

        <p
          ref={subRef}
          className="font-body text-lg md:text-xl text-[#DFDCD5]/80 mb-12 leading-relaxed max-w-xl mx-auto"
        >
          An editorial for those who own their narrative.
          Curated stories by Kay Martin.
        </p>

        <a
          ref={buttonRef}
          href="#book"
          className="inline-block border border-[#DFDCD5] text-[#DFDCD5] font-semibold px-10 py-4 tracking-wide hover:bg-[#DFDCD5] hover:text-black transition duration-300"
        >
          View the Issue
        </a>
      </div>
    </section>
  )
}

export default Hero
