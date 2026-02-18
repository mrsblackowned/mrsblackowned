import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'


const Newsletter = () => {
  const sectionRef = useRef(null)
  const contentRef = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(contentRef.current.children, {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 75%',
          toggleActions: 'play none none reverse',
        },
        opacity: 0,
        y: 40,
        duration: 0.8,
        stagger: 0.12,
        ease: 'power3.out',
      })
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <section ref={sectionRef} className="py-24 md:py-32 px-6 bg-black text-white">
      <div ref={contentRef} className="max-w-xl mx-auto text-center">
        <p className="font-script text-2xl text-accent mb-2">
          from the editor
        </p>

        <h2 className="font-serif text-4xl md:text-5xl font-medium mb-6 tracking-tight">
          The Letter
        </h2>

        <p className="font-body text-sm text-white/50 mb-10 leading-relaxed">
          Essays, updates, and drops — delivered with intention.
          No spam. Just substance.
        </p>

        <form
          onSubmit={(e) => e.preventDefault()}
          className="flex flex-col sm:flex-row justify-center items-stretch gap-3"
        >
          <input
            type="email"
            placeholder="Your email address"
            className="flex-1 px-5 py-4 border border-white/20 bg-transparent text-white placeholder:text-white/30 focus:border-accent focus:outline-none transition font-body text-sm rounded-sm"
          />
          <button
            type="submit"
            className="bg-accent text-black font-body text-xs uppercase tracking-[0.15em] font-semibold px-8 py-4 hover:bg-accent-dark transition-colors duration-300 rounded-sm"
          >
            Subscribe
          </button>
        </form>

        <p className="mt-6 font-body text-[10px] text-white/25 tracking-[0.2em] uppercase">
          Join readers who care about ownership and culture
        </p>
      </div>
    </section>
  )
}

export default Newsletter
