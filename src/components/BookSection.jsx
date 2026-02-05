import { useRef, useEffect } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { loadStripe } from '@stripe/stripe-js'

gsap.registerPlugin(ScrollTrigger)

const stripePromise = loadStripe(import.meta.env.VITE_STRIPE_PUBLIC_KEY)

const BookSection = () => {
  const sectionRef = useRef(null)
  const coverRef = useRef(null)

  useEffect(() => {
    gsap.from(coverRef.current, {
      scrollTrigger: {
        trigger: sectionRef.current,
        start: 'top 70%',
        toggleActions: 'play none none reverse',
      },
      opacity: 0,
      y: 80,
      duration: 1.2,
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
      className="py-40 px-6 bg-[#DFDCD5]"
    >
      {/* Magazine Cover */}
      <div
        ref={coverRef}
        className="relative max-w-4xl mx-auto bg-black text-white aspect-[3/4] md:aspect-[4/5] shadow-2xl overflow-hidden"
      >
        {/* Cover Content */}
        <div className="absolute inset-0 flex flex-col justify-between p-8 md:p-16">
          {/* Masthead */}
          <div>
            <p className="uppercase tracking-[0.5em] text-sm text-[#DFDCD5]/60 mb-2">
              Mrs Black Owned
            </p>
            <div className="w-12 h-px bg-[#DFDCD5]/30"></div>
          </div>

          {/* Cover Headlines */}
          <div className="max-w-lg">
            <h1 className="font-body text-5xl md:text-7xl font-bold leading-[0.95] tracking-tight mb-8">
              Beauty,<br />
              Ownership,<br />
              Legacy
            </h1>

            <ul className="space-y-3 text-[#DFDCD5]/70 text-base md:text-lg">
              <li>• Inside the brands shaping culture</li>
              <li>• Editorial stories by Kay Martin</li>
              <li>• A modern beauty archive</li>
            </ul>
          </div>

          {/* Bottom Row */}
          <div className="flex justify-between items-end">
            {/* Edition Badge */}
            <button
              onClick={handleCheckout}
              className="border border-[#DFDCD5] px-6 py-3 uppercase tracking-[0.2em] text-xs md:text-sm text-[#DFDCD5] hover:bg-[#DFDCD5] hover:text-black transition duration-300"
            >
              Purchase Digital Edition
            </button>

            {/* Price */}
            <div className="text-right">
              <p className="text-3xl md:text-4xl font-bold text-[#DFDCD5]">$25</p>
              <p className="text-xs uppercase tracking-widest text-[#DFDCD5]/50 mt-1">
                Instant Access
              </p>
            </div>
          </div>
        </div>

        {/* Decorative corner accent */}
        <div className="absolute top-0 right-0 w-24 h-24 md:w-32 md:h-32">
          <div className="absolute top-4 right-4 md:top-6 md:right-6 text-right">
            <p className="text-xs uppercase tracking-widest text-[#DFDCD5]/40">Issue</p>
            <p className="text-2xl md:text-3xl font-bold text-[#DFDCD5]/60">01</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default BookSection
