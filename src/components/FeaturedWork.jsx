import { useRef, useEffect } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const works = [
  {
    category: 'Editorial',
    title: 'The Politics of Black Beauty',
    description: 'A deep dive into how beauty standards have shifted — and who gets to define them.',
  },
  {
    category: 'Essay',
    title: 'Ownership as Identity',
    description: 'What it means to own your story, your brand, and your place in the culture.',
  },
  {
    category: 'Feature',
    title: 'Skin Deep, Soul Wide',
    description: 'Exploring the intersection of skincare rituals and self-care as resistance.',
  },
]

const FeaturedWork = () => {
  const sectionRef = useRef(null)
  const headerRef = useRef(null)
  const cardsRef = useRef([])

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(headerRef.current, {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 75%',
          toggleActions: 'play none none reverse',
        },
        opacity: 0,
        y: 40,
        duration: 0.8,
        ease: 'power3.out',
      })

      cardsRef.current.forEach((card, i) => {
        if (!card) return
        gsap.from(card, {
          scrollTrigger: {
            trigger: card,
            start: 'top 85%',
            toggleActions: 'play none none reverse',
          },
          opacity: 0,
          y: 50,
          duration: 0.8,
          delay: i * 0.12,
          ease: 'power3.out',
        })
      })
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <section ref={sectionRef} id="journal" className="py-24 md:py-32 px-6 bg-white text-black">
      <div className="max-w-5xl mx-auto">
        <div ref={headerRef} className="text-center mb-16">
          <p className="font-body text-[11px] uppercase tracking-[0.3em] text-black/40 mb-4">
            Inside the Pages
          </p>
          <h2 className="font-serif text-4xl md:text-5xl font-medium tracking-tight">
            Featured Work
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {works.map((work, i) => (
            <article
              key={i}
              ref={(el) => (cardsRef.current[i] = el)}
              className="group border border-black/[0.06] p-8 hover:bg-black hover:text-white transition-all duration-500 cursor-pointer"
            >
              <p className="font-body text-[10px] uppercase tracking-[0.25em] text-black/40 group-hover:text-white/40 mb-4 transition-colors duration-500">
                {work.category}
              </p>
              <h3 className="font-serif text-xl md:text-2xl font-medium mb-4 tracking-tight leading-snug">
                {work.title}
              </h3>
              <p className="font-body text-sm text-black/50 group-hover:text-white/50 leading-relaxed mb-6 transition-colors duration-500">
                {work.description}
              </p>
              <span className="inline-flex items-center gap-2 font-body text-xs uppercase tracking-[0.15em] font-semibold text-accent">
                Read More
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </span>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default FeaturedWork
