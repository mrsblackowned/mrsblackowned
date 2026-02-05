import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const Newsletter = () => {
  const sectionRef = useRef(null)
  const contentRef = useRef(null)

  useEffect(() => {
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
  }, [])

  return (
    <section ref={sectionRef} className="py-32 px-6 bg-[#DFDCD5] text-black">
      <div ref={contentRef} className="max-w-xl mx-auto text-center">
        <p className="uppercase tracking-[0.4em] text-sm text-black/40 mb-4">
          From the Editor
        </p>

        <h2 className="font-body text-4xl md:text-5xl font-bold mb-6 tracking-tight">
          Stay in the Know
        </h2>

        <p className="font-body text-lg text-black/60 mb-10 leading-relaxed">
          New essays, book updates, and editorial drops — straight to your inbox.
          No spam. Just substance.
        </p>

        <form
          onSubmit={(e) => e.preventDefault()}
          className="flex flex-col sm:flex-row justify-center items-stretch gap-4"
        >
          <input
            type="email"
            placeholder="Your email address"
            className="flex-1 px-5 py-4 border-2 border-black/20 bg-white text-black placeholder:text-black/40 focus:border-black focus:outline-none transition"
          />
          <button
            type="submit"
            className="bg-black text-white font-semibold px-8 py-4 tracking-wide hover:bg-black/80 transition"
          >
            Subscribe
          </button>
        </form>

        <p className="mt-6 text-xs text-black/40 tracking-wide">
          Join 2,000+ readers who care about beauty, ownership, and culture.
        </p>
      </div>
    </section>
  )
}

export default Newsletter
