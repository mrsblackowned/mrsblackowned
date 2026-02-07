import { useRef, useEffect, useState } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const BookSection = () => {
  const sectionRef = useRef(null)
  const labelRef = useRef(null)
  const contentRef = useRef(null)
  const coverRef = useRef(null)
  const [loading, setLoading] = useState(false)

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
    if (loading) return
    setLoading(true)

    try {
      const res = await fetch('/api/create-checkout-session', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ edition: 'ebook' }),
      })

      if (!res.ok) {
        const errorData = await res.json().catch(() => ({}))
        console.error('Checkout API error:', res.status, errorData)
        alert(errorData.error || 'Something went wrong. Please try again.')
        setLoading(false)
        return
      }

      const data = await res.json()
      if (data.url) {
        window.location.href = data.url
      } else {
        console.error('No checkout URL returned:', data)
        alert('Something went wrong. Please try again.')
        setLoading(false)
      }
    } catch (err) {
      console.error('Checkout error:', err)
      alert('Unable to connect to checkout. Please try again.')
      setLoading(false)
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
          className="relative max-w-3xl mx-auto bg-black text-white aspect-[3/4] shadow-2xl overflow-hidden"
        >
          {/* Geometric accent */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 rounded-full border border-white/[0.04]" />

          <div className="absolute inset-0 flex flex-col justify-between p-8 md:p-14">
            <div>
              <p className="font-body text-[10px] uppercase tracking-[0.4em] text-white/40">
                Mrs Black Owned
              </p>
              <div className="w-10 h-px bg-accent/50 mt-3" />
            </div>

            <div className="max-w-md">
              <h3 className="font-serif text-4xl md:text-6xl font-medium leading-[0.95] tracking-tight mb-8">
                The Brands.<br />
                The Founders.<br />
                The Culture.
              </h3>

              <ul className="space-y-2 text-white/40 text-sm tracking-wide">
                <li className="flex items-center gap-3">
                  <span className="w-3 h-px bg-accent/60" />
                  Profiles in ownership
                </li>
                <li className="flex items-center gap-3">
                  <span className="w-3 h-px bg-accent/60" />
                  Essays on Black aesthetics
                </li>
                <li className="flex items-center gap-3">
                  <span className="w-3 h-px bg-accent/60" />
                  An archive built to last
                </li>
              </ul>
            </div>

            <div className="flex justify-between items-end">
              <button
                onClick={handleCheckout}
                disabled={loading}
                className="border border-accent/60 px-8 py-3 uppercase tracking-[0.2em] text-xs text-accent hover:bg-accent hover:text-black transition duration-300 rounded-sm disabled:opacity-50 disabled:cursor-wait"
              >
                {loading ? 'Redirecting…' : 'View the Issue'}
              </button>

              <div className="text-right">
                <p className="text-2xl md:text-3xl font-semibold text-accent/80">$25</p>
                <p className="text-[10px] uppercase tracking-widest text-white/30 mt-1">
                  Digital Edition
                </p>
              </div>
            </div>
          </div>

          <div className="absolute top-6 right-6 md:top-8 md:right-8 text-right">
            <p className="text-[10px] uppercase tracking-widest text-white/20">Issue</p>
            <p className="text-xl md:text-2xl font-semibold text-accent/40">01</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default BookSection
