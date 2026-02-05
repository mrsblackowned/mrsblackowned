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
      gsap.from(card, {
        scrollTrigger: {
          trigger: card,
          start: 'top 80%',
          toggleActions: 'play none none reverse',
        },
        opacity: 0,
        y: 50,
        scale: 0.95,
        duration: 0.8,
        delay: i * 0.15,
        ease: 'power3.out',
      })
    })
  }, [])

  return (
    <section ref={sectionRef} className="py-32 px-6 bg-white text-black">
      <div className="max-w-5xl mx-auto">
        <div ref={headerRef} className="text-center mb-20">
          <p className="uppercase tracking-[0.4em] text-sm text-black/40 mb-4">
            Inside the Pages
          </p>
          <h2 className="font-body text-4xl md:text-5xl font-bold tracking-tight">
            Featured Work
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {works.map((work, i) => (
            <article
              key={i}
              ref={(el) => (cardsRef.current[i] = el)}
              className="group border border-black/10 p-8 hover:bg-[#DFDCD5] transition duration-300"
            >
              <p className="uppercase tracking-[0.3em] text-xs text-black/40 mb-4">
                {work.category}
              </p>
              <h3 className="font-body text-xl font-bold mb-4 tracking-tight leading-snug">
                {work.title}
              </h3>
              <p className="text-base text-black/60 leading-relaxed mb-6">
                {work.description}
              </p>
              <span className="inline-block text-sm font-semibold tracking-wide border-b border-black pb-1 group-hover:border-black/50 transition">
                Read More
              </span>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default FeaturedWork
