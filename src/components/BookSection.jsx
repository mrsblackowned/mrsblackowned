import { useRef, useEffect } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { loadStripe } from '@stripe/stripe-js'

gsap.registerPlugin(ScrollTrigger)

const stripePromise = loadStripe(import.meta.env.VITE_STRIPE_PUBLIC_KEY)

const BookSection = () => {
  const sectionRef = useRef(null)
  const coverRef = useRef(null)
  const contentRef = useRef(null)

  useEffect(() => {
    gsap.from(coverRef.current, {
      scrollTrigger: {
        trigger: sectionRef.current,
        start: 'top 70%',
        toggleActions: 'play none none reverse',
      },
      x: -100,
      opacity: 0,
      duration: 1,
      ease: 'power3.out',
    })

    gsap.from(contentRef.current, {
      scrollTrigger: {
        trigger: sectionRef.current,
        start: 'top 70%',
        toggleActions: 'play none none reverse',
      },
      x: 100,
      opacity: 0,
      duration: 1,
      delay: 0.2,
      ease: 'power3.out',
    })
  }, [])

  const handleCheckout = async () => {
    try {
      const res = await fetch('/api/create-checkout-session', {
        method: 'POST',
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
      className="py-32 px-6 bg-black text-white"
    >
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
        {/* Book Cover */}
        <div ref={coverRef} className="relative">
          <div className="relative mx-auto w-72 md:w-80">
            {/* Cover shadow */}
            <div className="absolute inset-0 bg-[#DFDCD5]/20 blur-3xl transform translate-x-4 translate-y-4"></div>

            {/* Cover */}
            <div className="relative bg-[#DFDCD5] aspect-[3/4] rounded-sm shadow-2xl overflow-hidden">
              <div className="absolute inset-0 flex flex-col justify-between p-8">
                <div>
                  <p className="text-xs uppercase tracking-[0.4em] text-black/50 mb-2">
                    Issue 01
                  </p>
                  <div className="w-12 h-px bg-black/30"></div>
                </div>

                <div className="text-center">
                  <h3 className="font-body text-3xl font-bold text-black tracking-tight leading-tight">
                    Mrs Black<br />Owned
                  </h3>
                  <p className="mt-4 text-sm text-black/70 tracking-wide">
                    The Black Beauty Experience
                  </p>
                </div>

                <div className="text-center">
                  <p className="text-xs uppercase tracking-[0.3em] text-black/50">
                    Kay Martin
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Content */}
        <div ref={contentRef} className="text-center md:text-left">
          <p className="uppercase tracking-[0.4em] text-sm text-[#DFDCD5]/50 mb-4">
            The Digital Edition
          </p>

          <h2 className="font-body text-4xl md:text-5xl font-bold mb-6 tracking-tight leading-tight">
            The Black Beauty<br />Experience
          </h2>

          <p className="font-body text-lg text-white/70 leading-relaxed mb-8 max-w-md">
            A curated exploration of Black-owned beauty brands, their founders,
            and the stories that define a movement. Part manifesto, part celebration —
            this is the issue the beauty industry needs.
          </p>

          <div className="space-y-4">
            <p className="text-sm text-white/50 tracking-wide">
              Digital Edition • Instant Access • $25
            </p>

            <button
              onClick={handleCheckout}
              className="inline-block border border-[#DFDCD5] text-[#DFDCD5] px-10 py-4 font-semibold tracking-wide hover:bg-[#DFDCD5] hover:text-black transition duration-300"
            >
              Purchase the Edition
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default BookSection
