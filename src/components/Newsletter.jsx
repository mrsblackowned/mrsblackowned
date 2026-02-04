import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const Newsletter = () => {
  const sectionRef = useRef(null)
  const contentRef = useRef(null)

  useEffect(() => {
    gsap.from(contentRef.current, {
      scrollTrigger: {
        trigger: sectionRef.current,
        start: 'top 80%',
        toggleActions: 'play none none reverse',
      },
      opacity: 0,
      y: 40,
      duration: 0.8,
    })
  }, [])

  return (
    <section ref={sectionRef} className="py-32 px-6 bg-[#DFDCD5] text-black text-center">
      <div ref={contentRef} className="max-w-xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-body font-semibold mb-6">
          Join the Newsletter
        </h2>
        <p className="font-body text-lg text-gray-700 mb-10">
          Stay updated with Kay Martin's latest editorial content, beauty features,
          and book announcements.
        </p>
        <form
          onSubmit={(e) => e.preventDefault()}
          className="flex flex-col sm:flex-row justify-center items-center gap-4"
        >
          <input
            type="email"
            placeholder="Enter your email"
            className="w-full sm:flex-1 px-5 py-4 rounded-lg border-2 border-black/10 bg-white text-black placeholder:text-gray-400 focus:border-black focus:outline-none transition"
          />
          <button
            type="submit"
            className="w-full sm:w-auto bg-black text-white font-semibold px-8 py-4 rounded-lg hover:opacity-90 transition"
          >
            Subscribe
          </button>
        </form>
      </div>
    </section>
  )
}

export default Newsletter
