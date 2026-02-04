import { useRef, useEffect } from 'react'
import gsap from 'gsap'

const Hero = () => {
  const headlineRef = useRef(null)
  const subRef = useRef(null)
  const buttonRef = useRef(null)
  const overlayRef = useRef(null)

  useEffect(() => {
    gsap.from(overlayRef.current, {
      opacity: 0,
      duration: 1.2
    })
    gsap.from(headlineRef.current, {
      y: -50,
      opacity: 0,
      duration: 1,
      delay: 0.3
    })
    gsap.from(subRef.current, {
      y: -20,
      opacity: 0,
      duration: 1,
      delay: 0.6
    })
    gsap.from(buttonRef.current, {
      scale: 0.8,
      opacity: 0,
      duration: 1,
      delay: 0.9
    })
  }, [])

  return (
    <section className="relative min-h-screen flex flex-col justify-center items-center text-center px-6 bg-black overflow-hidden">
      {/* Background overlay */}
      <div ref={overlayRef} className="absolute inset-0 bg-gradient-to-b from-black/80 to-black/60 z-0"></div>

      <div className="relative z-10 max-w-3xl">
        <h1 ref={headlineRef} className="font-body text-6xl md:text-7xl text-white font-bold mb-6 tracking-wide">
          Mrs Black Owned
        </h1>
        <p ref={subRef} className="font-body text-lg md:text-xl text-[#DFDCD5] mb-10 leading-relaxed">
          Beauty editorial, curated stories, and the book by Kay Martin
        </p>
        <button ref={buttonRef} className="bg-[#DFDCD5] text-black font-semibold px-10 py-4 rounded hover:opacity-90 transition transform">
          Explore the Book
        </button>
      </div>

      <img
        src="https://via.placeholder.com/1200x600"
        alt="Hero editorial"
        className="absolute bottom-0 w-full h-auto object-cover opacity-20 z-0"
      />
    </section>
  )
}

export default Hero
