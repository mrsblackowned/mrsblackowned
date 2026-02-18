import { useState, useRef, useCallback, useEffect } from 'react'
import BookPage from './BookPage'
import PurchaseCTA from './PurchaseCTA'

const pages = [
  { src: '/book/book-cover.webp', alt: 'All The Black-Owned, Babee! — 2026 Edition — Front Cover' },
  { src: '/book/page-1.webp', alt: '"To Beauty… May it always be apart of who we are."' },
  { src: '/book/page-2.webp', alt: 'The Pulse of Black Luxury' },
  { src: '/book/page-3.webp', alt: 'With Gratitude — dedication and acknowledgments' },
  { src: '/book/page-4.webp', alt: 'Table of Contents — The Black Beauty Experience' },
  { src: '/book/page-5.webp', alt: 'The Elemental Fragrances, Hair Care, and the All The Black Owned Babee Guide' },
  { src: '/book/page-6.webp', alt: 'Make Up, Skincare & Bodycare, Fragrance' },
  { src: '/book/page-7.webp', alt: 'Foreword — the moment that started it all at Scent Xplore 2024' },
  { src: '/book/page-8.webp', alt: '"Hey y\'all hey! You already know I\'m looking for the Black Owned Babee!"' },
  { src: '/book/page-9.webp', alt: 'From reviewing products in real time to passing the torch forward' },
  { src: '/book/page-10.webp', alt: '"Folks were just waiting for me to find the audacity."' },
  { src: '/book/page-11.webp', alt: 'Welcome — a curated guide to shopping Black and African-owned with intention' },
  { src: '/book/page-12.webp', alt: 'From the Desk of Savoir Faire — a letter from Chris Classic' },
  { src: '/book/page-13.webp', alt: 'Part I: Why This Guide Exists — they are not alternatives, they are originators' },
  { src: '/book/page-14.webp', alt: 'Visibility is not the same as support' },
  { src: '/book/page-16.webp', alt: 'Retail vs. Direct — how to shop with purpose' },
  { src: '/book/page-17.webp', alt: 'Sampling Etiquette — try with intention' },
  { src: '/book/page-18.webp', alt: 'Verified sample and discovery options' },
  { src: '/book/page-19.webp', alt: 'Intentional support is strategic support' },
]

const TOTAL_PAGES = pages.length + 1 // +1 for the final CTA page

const BookPreview = () => {
  const [currentPage, setCurrentPage] = useState(0)
  const [ctaOpen, setCtaOpen] = useState(false)
  const [fading, setFading] = useState(false)
  const [dimensions, setDimensions] = useState({ width: 320, height: 448 })
  const containerRef = useRef(null)
  const touchStartX = useRef(null)

  const updateDimensions = useCallback(() => {
    if (!containerRef.current) return
    const maxWidth = Math.min(containerRef.current.offsetWidth - 32, 500)
    setDimensions({ width: maxWidth, height: Math.round(maxWidth * 1.4) })
  }, [])

  useEffect(() => {
    updateDimensions()
    window.addEventListener('resize', updateDimensions)
    return () => window.removeEventListener('resize', updateDimensions)
  }, [updateDimensions])

  const changePage = useCallback((delta) => {
    if (fading) return
    const next = currentPage + delta
    if (next < 0 || next >= TOTAL_PAGES) return
    setFading(true)
    setTimeout(() => {
      setCurrentPage(next)
      setFading(false)
    }, 200)
  }, [currentPage, fading])

  const onTouchStart = useCallback((e) => {
    touchStartX.current = e.touches[0].clientX
  }, [])

  const onTouchEnd = useCallback((e) => {
    if (touchStartX.current === null) return
    const dx = e.changedTouches[0].clientX - touchStartX.current
    if (Math.abs(dx) > 40) changePage(dx < 0 ? 1 : -1)
    touchStartX.current = null
  }, [changePage])

  const isLastPage = currentPage === TOTAL_PAGES - 1

  return (
    <section
      id="book-preview"
      className="py-24 md:py-36 px-6 bg-neutral-50"
    >
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12 md:mb-20">
          <p className="font-body text-[10px] uppercase tracking-[0.4em] text-black/30 mb-4">
            Part I
          </p>
          <h2 className="font-serif text-3xl md:text-5xl lg:text-6xl font-medium text-black tracking-tight leading-[1.1]">
            Inside the Book
          </h2>
          <p className="font-body text-xs text-black/30 mt-4 tracking-wide">
            Click or swipe to turn pages
          </p>
        </div>

        <div ref={containerRef} className="book-preview-container">
          <div className="book-preview-wrapper">
            <div
              className="book-preview-flipbook"
              style={{
                width: dimensions.width,
                height: dimensions.height,
                opacity: fading ? 0 : 1,
                transition: 'opacity 0.2s ease',
                cursor: isLastPage ? 'default' : 'pointer',
              }}
              onClick={() => changePage(1)}
              onTouchStart={onTouchStart}
              onTouchEnd={onTouchEnd}
            >
              {currentPage < pages.length ? (
                <BookPage
                  src={pages[currentPage].src}
                  alt={pages[currentPage].alt}
                />
              ) : (
                <BookPage className="book-page-cta">
                  <div className="flex flex-col items-center justify-center h-full px-6 py-8 bg-white text-center">
                    <p className="font-script text-xl md:text-2xl text-accent mb-4">
                      the full story awaits
                    </p>
                    <div className="w-10 h-px bg-accent/40 mx-auto mb-4" />
                    <p className="font-body text-xs text-black/40 leading-relaxed mb-6 max-w-xs mx-auto">
                      What you've seen is only the beginning. 85 pages of curated
                      celebration — limited edition, released once a year.
                    </p>
                    <button
                      onClick={(e) => { e.stopPropagation(); setCtaOpen(true) }}
                      className="bg-black text-white font-body text-xs uppercase tracking-[0.2em] px-8 py-3.5 hover:bg-accent hover:text-black transition-all duration-300 rounded-sm cursor-pointer"
                    >
                      Own a Copy
                    </button>
                    <p className="mt-3 font-body text-[9px] uppercase tracking-[0.15em] text-black/20">
                      Limited Edition · 2026
                    </p>
                  </div>
                </BookPage>
              )}
            </div>
          </div>

          <div className="flex items-center justify-center gap-8 mt-8">
            <button
              onClick={() => changePage(-1)}
              disabled={currentPage === 0}
              className="font-body text-[10px] uppercase tracking-[0.2em] text-black/30 hover:text-black disabled:opacity-20 disabled:cursor-default transition-colors duration-300 cursor-pointer"
              aria-label="Previous page"
            >
              ← Prev
            </button>
            <span className="font-body text-[10px] tracking-[0.15em] text-black/25">
              {currentPage + 1} / {TOTAL_PAGES}
            </span>
            <button
              onClick={() => changePage(1)}
              disabled={isLastPage}
              className="font-body text-[10px] uppercase tracking-[0.2em] text-black/30 hover:text-black disabled:opacity-20 disabled:cursor-default transition-colors duration-300 cursor-pointer"
              aria-label="Next page"
            >
              Next →
            </button>
          </div>
        </div>
      </div>

      <PurchaseCTA isOpen={ctaOpen} onClose={() => setCtaOpen(false)} />
    </section>
  )
}

export default BookPreview
