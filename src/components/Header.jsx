import { useEffect, useRef } from 'react'
import gsap from 'gsap'

const Header = () => {
  const headerRef = useRef(null)

  useEffect(() => {
    gsap.from(headerRef.current, {
      opacity: 0,
      y: -20,
      duration: 0.8,
      delay: 0.3,
      ease: 'power3.out',
    })
  }, [])

  return (
    <header
      ref={headerRef}
      className="fixed top-0 left-0 right-0 z-40 py-6 px-6 md:px-10"
    >
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        {/* Monogram */}
        <a href="/" className="block">
          <img
            src="/Logos/BBIconTransparent.png"
            alt="Beauty By Mrs. Black Owned"
            className="h-10 md:h-12 w-auto"
          />
        </a>

        {/* Minimal nav - just the wordmark on larger screens */}
        <div className="hidden md:block">
          <span className="text-xs uppercase tracking-[0.3em] text-black/40">
            The Editorial
          </span>
        </div>
      </div>
    </header>
  )
}

export default Header
