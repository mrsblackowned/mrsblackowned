import { useRef, useEffect } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'


const EditorialCollage = () => {
  const sectionRef = useRef(null)
  const headingRef = useRef(null)
  const grid1Ref = useRef(null)
  const grid2Ref = useRef(null)
  const grid3Ref = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(headingRef.current, {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 75%',
          toggleActions: 'play none none reverse',
        },
        opacity: 0,
        y: 30,
        duration: 0.8,
        ease: 'power3.out',
      })

      const gridItems = [grid1Ref, grid2Ref, grid3Ref]
      gridItems.forEach((ref, i) => {
        if (!ref.current) return
        gsap.from(ref.current, {
          scrollTrigger: {
            trigger: ref.current,
            start: 'top 80%',
            toggleActions: 'play none none reverse',
          },
          opacity: 0,
          y: 60,
          scale: 0.98,
          duration: 1,
          delay: i * 0.15,
          ease: 'power3.out',
        })
      })
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <section ref={sectionRef} id="collections" className="py-24 md:py-32 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        <div ref={headingRef} className="text-center mb-16">
          <p className="font-body text-[11px] uppercase tracking-[0.3em] text-black/40 mb-4">
            Editorial
          </p>
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-medium text-black tracking-tight leading-[1.1]">
            The Collection
          </h2>
        </div>

        {/* Asymmetric editorial grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-6">
          {/* Large left panel */}
          <div ref={grid1Ref} className="md:col-span-7 relative group cursor-pointer">
            <div className="aspect-[4/5] bg-neutral-100 overflow-hidden relative">
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent z-10" />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-40 h-40 rounded-full border border-black/[0.04]" />
              </div>
              <div className="absolute bottom-0 left-0 right-0 p-6 md:p-10 z-20">
                <p className="font-body text-[10px] uppercase tracking-[0.3em] text-white/60 mb-2">
                  Skincare
                </p>
                <h3 className="font-serif text-2xl md:text-4xl text-white font-medium leading-tight">
                  The Glow<br />Collection
                </h3>
                <div className="mt-4 flex items-center gap-2 text-white/70 group-hover:text-accent transition-colors duration-300">
                  <span className="font-body text-xs uppercase tracking-[0.15em]">Explore</span>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <path d="M5 12h14M12 5l7 7-7 7" />
                  </svg>
                </div>
              </div>
            </div>
          </div>

          {/* Right column - stacked */}
          <div className="md:col-span-5 flex flex-col gap-4 md:gap-6">
            <div ref={grid2Ref} className="relative group cursor-pointer flex-1">
              <div className="aspect-[4/3] md:aspect-auto md:h-full bg-black overflow-hidden relative">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-24 h-24 rounded-full border border-white/[0.06]" />
                </div>
                <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8 z-20">
                  <p className="font-body text-[10px] uppercase tracking-[0.3em] text-white/50 mb-2">
                    Fragrance
                  </p>
                  <h3 className="font-serif text-xl md:text-2xl text-white font-medium">
                    Noir Signature
                  </h3>
                </div>
              </div>
            </div>

            <div ref={grid3Ref} className="relative group cursor-pointer flex-1">
              <div className="aspect-[4/3] md:aspect-auto md:h-full bg-neutral-200 overflow-hidden relative">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-24 h-24 border border-black/[0.06]" />
                </div>
                <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8 z-20">
                  <p className="font-body text-[10px] uppercase tracking-[0.3em] text-black/50 mb-2">
                    Hair Care
                  </p>
                  <h3 className="font-serif text-xl md:text-2xl text-black font-medium">
                    Crown & Glory
                  </h3>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default EditorialCollage
