import { useRef, useEffect } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const EditionSelect = () => {
  const sectionRef = useRef(null)
  const headingRef = useRef(null)
  const cardsRef = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(headingRef.current.children, {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 70%',
          toggleActions: 'play none none reverse',
        },
        opacity: 0,
        y: 30,
        duration: 0.8,
        stagger: 0.12,
      })

      if (cardsRef.current) {
        gsap.from(cardsRef.current.children, {
          scrollTrigger: {
            trigger: cardsRef.current,
            start: 'top 75%',
            toggleActions: 'play none none reverse',
          },
          opacity: 0,
          y: 40,
          duration: 1,
          stagger: 0.2,
          ease: 'power3.out',
        })
      }
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  const handleEbookCheckout = async () => {
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
      id="choose-edition"
      className="py-24 md:py-36 px-6 bg-neutral-50"
    >
      <div className="max-w-4xl mx-auto">
        {/* Final CTA heading — "Choose Your Edition" appears only once */}
        <div ref={headingRef} className="text-center mb-16 md:mb-20">
          <p className="font-body text-[10px] uppercase tracking-[0.4em] text-black/30 mb-4">
            The Decision
          </p>
          <h2 className="font-serif text-3xl md:text-5xl lg:text-6xl font-medium text-black tracking-tight leading-[1.1] mb-4">
            Choose Your Edition
          </h2>
          <p className="font-body text-sm text-black/40 leading-relaxed max-w-lg mx-auto">
            Two ways to experience the book. One story.
          </p>
        </div>

        {/* Edition cards — the ONLY place with side-by-side options */}
        <div ref={cardsRef} className="grid md:grid-cols-2 gap-6 md:gap-8">
          {/* eBook Edition */}
          <div className="group bg-white border border-neutral-200 p-8 md:p-10 text-center hover:border-accent transition-colors duration-300">
            <p className="font-body text-[10px] uppercase tracking-[0.4em] text-black/30 mb-3">
              Digital
            </p>
            <h3 className="font-serif text-2xl md:text-3xl font-medium text-black mb-2">
              eBook
            </h3>
            <p className="font-body text-sm text-black/40 mb-6">
              Instant Access
            </p>

            <div className="w-12 h-px bg-accent mx-auto mb-6" />

            <p className="font-serif text-3xl text-black mb-1">$25</p>
            <p className="font-body text-[10px] uppercase tracking-[0.2em] text-black/30 mb-8">
              PDF delivered immediately
            </p>

            <button
              onClick={handleEbookCheckout}
              className="w-full bg-black text-white font-body text-xs uppercase tracking-[0.2em] px-8 py-4 hover:bg-accent hover:text-black transition-all duration-300 rounded-sm cursor-pointer"
            >
              Claim Your Copy
            </button>
          </div>

          {/* Coffee Table Edition */}
          <div className="group bg-white border border-neutral-200 p-8 md:p-10 text-center hover:border-accent transition-colors duration-300 relative overflow-hidden">
            <div className="absolute top-4 right-4">
              <span className="font-body text-[9px] uppercase tracking-[0.2em] text-accent bg-black px-3 py-1">
                Pre-order
              </span>
            </div>

            <p className="font-body text-[10px] uppercase tracking-[0.4em] text-black/30 mb-3">
              Physical
            </p>
            <h3 className="font-serif text-2xl md:text-3xl font-medium text-black mb-2">
              Coffee Table Edition
            </h3>
            <p className="font-body text-sm text-black/40 mb-6">
              Hardcover Pre-order
            </p>

            <div className="w-12 h-px bg-accent mx-auto mb-6" />

            <p className="font-serif text-3xl text-black mb-1">$65</p>
            <p className="font-body text-[10px] uppercase tracking-[0.2em] text-black/30 mb-8">
              Ships when ready
            </p>

            <button className="w-full border border-black text-black font-body text-xs uppercase tracking-[0.2em] px-8 py-4 hover:bg-black hover:text-white transition-all duration-300 rounded-sm cursor-pointer">
              Reserve Your Copy
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default EditionSelect
