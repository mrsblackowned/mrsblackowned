import { useRef, useEffect } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

/*
 * Page spreads for Part I preview.
 * Replace placeholder with actual uploaded page images:
 *   { src: '/pages/spread-1.jpg', caption: '...' }
 *
 * No CTAs appear in this section — by design.
 * The pages do the selling.
 */
const spreads = [
  { caption: 'The landscape of Black beauty — a visual introduction' },
  { caption: 'Founders redefining ownership in the beauty industry' },
  { caption: 'From ritual to revolution — the roots of Black beauty culture' },
  { caption: 'The brands building legacy through craftsmanship' },
]

const PagePreviews = () => {
  const sectionRef = useRef(null)
  const headingRef = useRef(null)
  const spreadsRef = useRef([])

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
      })

      spreadsRef.current.forEach((el) => {
        if (!el) return
        gsap.from(el, {
          scrollTrigger: {
            trigger: el,
            start: 'top 82%',
            toggleActions: 'play none none reverse',
          },
          opacity: 0,
          y: 50,
          duration: 1,
          ease: 'power3.out',
        })
      })
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <section
      ref={sectionRef}
      id="book-preview"
      className="py-24 md:py-36 px-6 bg-neutral-50"
    >
      <div className="max-w-6xl mx-auto">
        <div ref={headingRef} className="text-center mb-16 md:mb-24">
          <p className="font-body text-[10px] uppercase tracking-[0.4em] text-black/30 mb-4">
            Part I
          </p>
          <h2 className="font-serif text-3xl md:text-5xl lg:text-6xl font-medium text-black tracking-tight leading-[1.1]">
            Inside the Book
          </h2>
        </div>

        {/* Page spreads — NO CTAs in this section */}
        <div className="space-y-16 md:space-y-24">
          {spreads.map((spread, i) => (
            <div
              key={i}
              ref={(el) => (spreadsRef.current[i] = el)}
              className="max-w-4xl mx-auto"
            >
              {/* Page spread frame — swap bg-neutral-200 for an <img> when pages are uploaded */}
              <div className="relative bg-neutral-200 aspect-[16/10] md:aspect-[16/9] shadow-lg overflow-hidden">
                {spread.src ? (
                  <img
                    src={spread.src}
                    alt={spread.caption}
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                ) : (
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-center">
                      <div className="w-12 h-px bg-black/10 mx-auto mb-4" />
                      <p className="font-body text-[10px] uppercase tracking-[0.3em] text-black/20">
                        Page {i * 2 + 1}–{i * 2 + 2}
                      </p>
                      <div className="w-12 h-px bg-black/10 mx-auto mt-4" />
                    </div>
                  </div>
                )}

                {/* Center fold line */}
                <div className="absolute top-0 bottom-0 left-1/2 w-px bg-black/[0.06]" />
              </div>

              {/* Caption */}
              <p className="font-body text-xs text-black/35 tracking-wide mt-4 text-center italic">
                {spread.caption}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default PagePreviews
