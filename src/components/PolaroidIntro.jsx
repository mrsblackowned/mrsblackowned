import { useEffect, useRef } from 'react'
import gsap from 'gsap'

// Letters for "MRS BLACK OWNED" - each polaroid represents a letter
const letters = ['M', 'R', 'S', 'B', 'L', 'A', 'C', 'K', 'O', 'W', 'N', 'E', 'D']

// Final positions for masthead formation (centered grid)
const getFinalPositions = () => {
  const isMobile = window.innerWidth < 768
  const spacing = isMobile ? 55 : 75
  const startX = -(letters.length - 1) * spacing / 2

  return letters.map((_, i) => ({
    x: startX + i * spacing,
    y: 0,
  }))
}

const PolaroidIntro = ({ onComplete }) => {
  const containerRef = useRef(null)
  const polaroidsRef = useRef([])
  const mastheadRef = useRef(null)

  useEffect(() => {
    const tl = gsap.timeline({
      onComplete: () => {
        setTimeout(() => onComplete?.(), 300)
      },
    })

    const finalPositions = getFinalPositions()

    // Phase 1: Polaroids drop in chaotically
    tl.from(polaroidsRef.current, {
      y: -800,
      rotation: () => gsap.utils.random(-30, 30),
      x: () => gsap.utils.random(-300, 300),
      opacity: 0,
      stagger: 0.08,
      duration: 1.2,
      ease: 'power4.out',
    })

    // Phase 2: Brief pause for chaos to settle
    tl.to({}, { duration: 0.6 })

    // Phase 3: Organize into masthead positions
    tl.to(polaroidsRef.current, {
      duration: 1.2,
      rotation: 0,
      scale: 0.85,
      x: (i) => finalPositions[i].x,
      y: (i) => finalPositions[i].y,
      ease: 'power3.inOut',
      stagger: 0.04,
    })

    // Phase 4: Fade polaroids back
    tl.to(
      polaroidsRef.current,
      {
        opacity: 0.12,
        scale: 0.8,
        duration: 0.8,
        ease: 'power2.out',
      },
      '-=0.2'
    )

    // Phase 5: Reveal masthead text
    tl.fromTo(
      mastheadRef.current,
      {
        opacity: 0,
        y: 20,
      },
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        ease: 'power3.out',
      },
      '-=0.4'
    )

    // Phase 6: Hold, then fade out everything
    tl.to({}, { duration: 1.2 })

    tl.to(containerRef.current, {
      opacity: 0,
      duration: 0.6,
      ease: 'power2.inOut',
    })

    return () => {
      tl.kill()
    }
  }, [onComplete])

  return (
    <section
      ref={containerRef}
      className="fixed inset-0 z-50 flex items-center justify-center bg-[#DFDCD5] overflow-hidden"
      style={{ pointerEvents: 'none' }}
    >
      {/* Polaroids */}
      <div className="absolute inset-0 flex items-center justify-center">
        {letters.map((letter, i) => (
          <div
            key={i}
            ref={(el) => (polaroidsRef.current[i] = el)}
            className="polaroid absolute"
            data-letter={letter}
          >
            <img
              src={`/polaroids/${i}.svg`}
              alt=""
              className="w-full h-full object-cover"
            />
          </div>
        ))}
      </div>

      {/* Masthead text overlay */}
      <div
        ref={mastheadRef}
        className="relative z-10 text-center opacity-0"
      >
        <h1 className="font-body text-4xl md:text-6xl lg:text-7xl font-bold text-black tracking-tight">
          MRS BLACK OWNED
        </h1>
        <p className="mt-4 text-sm md:text-base tracking-[0.4em] text-black/50 uppercase">
          The Editorial
        </p>
      </div>
    </section>
  )
}

export default PolaroidIntro
