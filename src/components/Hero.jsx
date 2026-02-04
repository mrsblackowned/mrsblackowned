import { useEffect, useRef } from 'react'
import gsap from 'gsap'

const Hero = () => {
  const headlineRef = useRef(null)
  const subRef = useRef(null)
  const buttonRef = useRef(null)

  useEffect(() => {
    gsap.from(headlineRef.current, { y: -50, opacity: 0, duration: 1 })
    gsap.from(subRef.current, { y: -20, opacity: 0, duration: 1, delay: 0.3 })
    gsap.from(buttonRef.current, { y: 20, opacity: 0, duration: 1, delay: 0.6 })
  }, [])

  return (
    <section className="relative min-h-screen flex flex-col justify-center items-center text-center px-6 bg-black">
      {/* Background overlay pattern */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/90 to-black/70 z-0"></div>

      <div className="relative z-10 max-w-3xl">
        <h1 ref={headlineRef} className="font-body text-6xl md:text-7xl text-white font-semibold mb-6">
          Mrs Black Owned
        </h1>
        <p ref={subRef} className="font-body text-lg md:text-xl text-[#DFDCD5] mb-10">
          Beauty editorial, curated stories, and the book by Kay Martin
        </p>
        <button ref={buttonRef} className="bg-[#DFDCD5] text-black font-semibold px-10 py-4 rounded hover:opacity-90 transition">
          Explore the Book
        </button>
      </div>

      {/* Optional hero image placeholder */}
      <img
        src="https://via.placeholder.com/1200x600"
        alt="Hero editorial"
        className="absolute bottom-0 w-full h-auto object-cover opacity-20 z-0"
      />
    </section>
  )
}

export default Hero
