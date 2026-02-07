import { useRef, useEffect } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { loadStripe } from '@stripe/stripe-js'

gsap.registerPlugin(ScrollTrigger)

const stripePromise = loadStripe(import.meta.env.VITE_STRIPE_PUBLIC_KEY)

const BookSection = () => {
  const sectionRef = useRef(null)
  const labelRef = useRef(null)
  const contentRef = useRef(null)
  const coverRef = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(labelRef.current, {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 75%',
          toggleActions: 'play none none reverse',
        },
        opacity: 0,
        y: 20,
        duration: 0.8,
      })

      gsap.from(contentRef.current, {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 70%',
          toggleActions: 'play none none reverse',
        },
        opacity: 0,
        y: 40,
        duration: 1,
        delay: 0.2,
      })

      gsap.from(coverRef.current, {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 65%',
          toggleActions: 'play none none reverse',
        },
        opacity: 0,
        y: 60,
        duration: 1.2,
        delay: 0.3,
        ease: 'power3.out',
      })
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  const handleCheckout = async () => {
    try {
      const res = await fetch('/api/create-checkout-session', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ edition: 'ebook' }),
      })
      const data = await res.json()
      if (data.url) {
        window.location.href = data.url
      }
    } catch (err) {
      console.error('Checkout error:', err)
    }
  }

  return (
    <section
      ref={sectionRef}
      id="book"
      className="py-24 md:py-32 px-6 bg-neutral-100"
    >
      <div className="max-w-6xl mx-auto">
        <p
          ref={labelRef}
          className="font-body text-[11px] uppercase tracking-[0.3em] text-black/40 mb-6 text-center"
        >
          The Book
        </p>

        <div ref={contentRef} className="text-center mb-16 md:mb-20">
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-medium text-black tracking-tight leading-[1.1] mb-6">
            Beauty Is Culture.<br />Ownership Is Power.
          </h2>
          <p className="font-body text-sm md:text-base text-black/50 leading-relaxed max-w-2xl mx-auto">
            A definitive beauty and fragrance guide centering Black and African-owned brands — documenting excellence, economic impact, and cultural legacy.
          </p>
        </div>

        <div
          ref={coverRef}
          className="relative max-w-md mx-auto flex flex-col items-center gap-8"
        >
          <img
            src="/book/book-cover.png"
            alt="All The Black-Owned, Babee! — Book Cover"
            className="w-full shadow-2xl rounded-sm"
          />

          <button
            onClick={handleCheckout}
            className="bg-black text-white px-10 py-4 uppercase tracking-[0.2em] text-sm font-body hover:bg-accent hover:text-black transition duration-300 rounded-sm"
          >
            Buy Now — $30
          </button>
        </div>
      </div>
    </section>
  )
}

export default BookSection
