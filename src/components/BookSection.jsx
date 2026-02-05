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
      className="py-32 md:py-40 px-6 bg-white"
    >
      <div className="max-w-6xl mx-auto">
        {/* Section Label */}
        <p
          ref={labelRef}
          className="uppercase tracking-[0.5em] text-xs text-black/40 mb-6 text-center"
        >
          The Book
        </p>

        {/* Headline & Copy */}
        <div ref={contentRef} className="text-center mb-16 md:mb-24">
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-medium text-black tracking-tight leading-[1.1] mb-8">
            Beauty Is Culture.<br />Ownership Is Power.
          </h2>
          <p className="font-body text-lg md:text-xl text-black/60 leading-relaxed max-w-2xl mx-auto">
            A definitive beauty and fragrance guide centering Black and African-owned brands—documenting excellence, economic impact, and cultural legacy. Designed as a collectible coffee table book and an enduring educational resource.
          </p>
        </div>

        {/* Magazine Cover */}
        <div
          ref={coverRef}
          className="relative max-w-3xl mx-auto bg-black text-white aspect-[3/4] shadow-2xl overflow-hidden"
        >
          {/* Cover Content */}
          <div className="absolute inset-0 flex flex-col justify-between p-8 md:p-14">
            {/* Masthead */}
            <div>
              <p className="uppercase tracking-[0.4em] text-sm text-[#DFDCD5]/50">
                Mrs Black Owned
              </p>
              <div className="w-10 h-px bg-[#DFDCD5]/20 mt-3"></div>
            </div>

            {/* Cover Headlines */}
            <div className="max-w-md">
              <h3 className="font-serif text-4xl md:text-6xl font-medium leading-[0.95] tracking-tight mb-8">
                The Brands.<br />
                The Founders.<br />
                The Culture.
              </h3>

              <ul className="space-y-2 text-[#DFDCD5]/50 text-sm tracking-wide">
                <li className="flex items-center gap-3">
                  <span className="w-3 h-px bg-[#DFDCD5]/30"></span>
                  Profiles in ownership
                </li>
                <li className="flex items-center gap-3">
                  <span className="w-3 h-px bg-[#DFDCD5]/30"></span>
                  Essays on Black aesthetics
                </li>
                <li className="flex items-center gap-3">
                  <span className="w-3 h-px bg-[#DFDCD5]/30"></span>
                  An archive built to last
                </li>
              </ul>
            </div>

            {/* Bottom Row */}
            <div className="flex justify-between items-end">
              <button
                onClick={handleCheckout}
                className="border border-[#DFDCD5]/50 px-8 py-3 uppercase tracking-[0.2em] text-xs text-[#DFDCD5] hover:bg-[#DFDCD5] hover:text-black transition duration-300"
              >
                View the Issue
              </button>

              <div className="text-right">
                <p className="text-2xl md:text-3xl font-semibold text-[#DFDCD5]/80">$25</p>
                <p className="text-[10px] uppercase tracking-widest text-[#DFDCD5]/40 mt-1">
                  Digital Edition
                </p>
              </div>
            </div>
          </div>

          {/* Issue Badge */}
          <div className="absolute top-6 right-6 md:top-8 md:right-8 text-right">
            <p className="text-[10px] uppercase tracking-widest text-[#DFDCD5]/30">Issue</p>
            <p className="text-xl md:text-2xl font-semibold text-[#DFDCD5]/50">01</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default BookSection
