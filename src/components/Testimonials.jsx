import { useState, useRef, useEffect } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'


const testimonials = [
  {
    quote: 'This is not just a store — it is a cultural archive. Every product tells a story of ownership, heritage, and unapologetic Black excellence.',
    author: 'Jasmine T.',
    title: 'Loyal Customer',
    rating: 5,
  },
  {
    quote: 'The curation is impeccable. I discovered brands I never knew existed, and every single one exceeded my expectations in quality and presentation.',
    author: 'Amara K.',
    title: 'Beauty Enthusiast',
    rating: 5,
  },
  {
    quote: 'Finally, a platform that treats Black beauty as the art form it is. The editorial quality, the product selection — everything feels intentional.',
    author: 'Nicole R.',
    title: 'Repeat Buyer',
    rating: 5,
  },
]

const Testimonials = () => {
  const [active, setActive] = useState(0)
  const sectionRef = useRef(null)
  const contentRef = useRef(null)
  const quoteRef = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(contentRef.current, {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 70%',
          toggleActions: 'play none none reverse',
        },
        opacity: 0,
        y: 40,
        duration: 1,
        ease: 'power3.out',
      })
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  useEffect(() => {
    if (quoteRef.current) {
      gsap.fromTo(
        quoteRef.current,
        { opacity: 0, y: 15 },
        { opacity: 1, y: 0, duration: 0.5, ease: 'power3.out' }
      )
    }
  }, [active])

  useEffect(() => {
    const interval = setInterval(() => {
      setActive((prev) => (prev + 1) % testimonials.length)
    }, 6000)
    return () => clearInterval(interval)
  }, [])

  const t = testimonials[active]

  return (
    <section ref={sectionRef} className="py-24 md:py-32 px-6 bg-neutral-100">
      <div ref={contentRef} className="max-w-4xl mx-auto text-center">
        <p className="font-body text-[11px] uppercase tracking-[0.3em] text-black/40 mb-8">
          What Our Community Says
        </p>

        {/* Stars */}
        <div className="flex justify-center gap-1 mb-8">
          {Array.from({ length: t.rating }).map((_, i) => (
            <svg key={i} width="16" height="16" viewBox="0 0 24 24" fill="#C8B590" stroke="none">
              <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
            </svg>
          ))}
        </div>

        <div ref={quoteRef} key={active}>
          <blockquote className="font-serif text-2xl md:text-3xl lg:text-4xl text-black font-medium leading-[1.3] tracking-tight mb-8">
            &ldquo;{t.quote}&rdquo;
          </blockquote>

          <div>
            <p className="font-body text-sm font-semibold text-black">
              {t.author}
            </p>
            <p className="font-body text-xs text-black/40 uppercase tracking-[0.2em] mt-1">
              {t.title}
            </p>
          </div>
        </div>

        {/* Navigation dots */}
        <div className="flex justify-center gap-3 mt-10">
          {testimonials.map((_, i) => (
            <button
              key={i}
              onClick={() => setActive(i)}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${
                i === active ? 'bg-accent w-6' : 'bg-black/20'
              }`}
              aria-label={`View testimonial ${i + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Testimonials
