import { useRef, useEffect } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'


/*
 * Curated Part I page previews.
 * No CTAs appear in this section — by design.
 * The pages do the selling.
 */
const pages = [
  { src: '/book/page-1.png', caption: '"To Beauty… May it always be apart of who we are."' },
  { src: '/book/page-2.png', caption: 'The Pulse of Black Luxury' },
  { src: '/book/page-3.png', caption: 'With Gratitude — dedication and acknowledgments' },
  { src: '/book/page-4.png', caption: 'Table of Contents — The Black Beauty Experience' },
  { src: '/book/page-5.png', caption: 'The Elemental Fragrances, Hair Care, and the All The Black Owned Babee Guide' },
  { src: '/book/page-6.png', caption: 'Make Up, Skincare & Bodycare, Fragrance' },
  { src: '/book/page-7.png', caption: 'Foreword — the moment that started it all at Scent Xplore 2024' },
  { src: '/book/page-8.png', caption: '"Hey y\'all hey! You already know I\'m looking for the Black Owned Babee!"' },
  { src: '/book/page-9.png', caption: 'From reviewing products in real time to passing the torch forward' },
  { src: '/book/page-10.png', caption: '"Folks were just waiting for me to find the audacity."' },
  { src: '/book/page-11.png', caption: 'Welcome — a curated guide to shopping Black and African-owned with intention' },
  { src: '/book/page-12.png', caption: 'From the Desk of Savoir Faire — a letter from Chris Classic' },
  { src: '/book/page-13.png', caption: 'Part I: Why This Guide Exists — they are not alternatives, they are originators' },
  { src: '/book/page-14.png', caption: 'Visibility is not the same as support' },
  { src: '/book/page-16.png', caption: 'Retail vs. Direct — how to shop with purpose' },
  { src: '/book/page-17.png', caption: 'Sampling Etiquette — try with intention' },
  { src: '/book/page-18.png', caption: 'Verified sample and discovery options' },
  { src: '/book/page-19.png', caption: 'Intentional support is strategic support' },
]

const PagePreviews = () => {
  const sectionRef = useRef(null)
  const headingRef = useRef(null)
  const pagesRef = useRef([])

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

      pagesRef.current.forEach((el) => {
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

        {/* Page previews — NO CTAs in this section */}
        <div className="space-y-12 md:space-y-20">
          {pages.map((page, i) => (
            <div
              key={i}
              ref={(el) => (pagesRef.current[i] = el)}
              className="max-w-3xl mx-auto"
            >
              <div className="relative shadow-[0_8px_40px_rgba(0,0,0,0.12)] overflow-hidden">
                <img
                  src={page.src}
                  alt={page.caption}
                  className="w-full"
                  loading="lazy"
                />
              </div>

              {/* Caption */}
              <p className="font-body text-xs text-black/35 tracking-wide mt-4 text-center italic">
                {page.caption}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default PagePreviews
