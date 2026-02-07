import { useRef, useEffect } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const polaroidImages = [
  { src: '/polaroids/0.jpeg', x: '-35%', y: '-20%', rotate: -12, scale: 0.9 },
  { src: '/polaroids/1.jpeg', x: '30%', y: '-25%', rotate: 8, scale: 0.85 },
  { src: '/polaroids/2.jpeg', x: '-40%', y: '15%', rotate: 6, scale: 0.8 },
  { src: '/polaroids/3.jpeg', x: '35%', y: '20%', rotate: -10, scale: 0.85 },
  { src: '/polaroids/4.jpeg', x: '-15%', y: '-35%', rotate: 15, scale: 0.7 },
  { src: '/polaroids/5.jpeg', x: '15%', y: '35%', rotate: -8, scale: 0.75 },
  { src: '/polaroids/6.jpeg', x: '45%', y: '-5%', rotate: 5, scale: 0.7 },
  { src: '/polaroids/7.jpeg', x: '-45%', y: '35%', rotate: -15, scale: 0.65 },
]

const Hero = () => {
  const sectionRef = useRef(null)
  const headlineRef = useRef(null)
  const subRef = useRef(null)
  const ctaRef = useRef(null)
  const scriptRef = useRef(null)
  const polaroidsRef = useRef([])

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Polaroids float in
      polaroidsRef.current.forEach((el, i) => {
        if (!el) return
        gsap.from(el, {
          opacity: 0,
          scale: 0.3,
          rotation: gsap.utils.random(-30, 30),
          duration: 1.2,
          delay: 0.1 + i * 0.1,
          ease: 'power3.out',
        })
      })

      gsap.from(scriptRef.current, {
        y: 30,
        opacity: 0,
        duration: 1,
        delay: 0.5,
        ease: 'power3.out',
      })
      gsap.from(headlineRef.current, {
        y: 60,
        opacity: 0,
        duration: 1.2,
        delay: 0.3,
        ease: 'power3.out',
      })
      gsap.from(subRef.current, {
        y: 40,
        opacity: 0,
        duration: 1,
        delay: 0.6,
        ease: 'power3.out',
      })
      gsap.from(ctaRef.current, {
        y: 30,
        opacity: 0,
        duration: 0.8,
        delay: 0.9,
        ease: 'power3.out',
      })

      // Subtle parallax on polaroids during scroll
      polaroidsRef.current.forEach((el, i) => {
        if (!el) return
        gsap.to(el, {
          y: (i % 2 === 0 ? -40 : 40),
          ease: 'none',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top top',
            end: 'bottom top',
            scrub: true,
          },
        })
      })
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <section
      ref={sectionRef}
      className="relative min-h-screen flex flex-col justify-center items-center text-center px-6 bg-white overflow-hidden"
    >
      {/* Scattered polaroid photos behind text */}
      {polaroidImages.map((p, i) => (
        <div
          key={i}
          ref={(el) => (polaroidsRef.current[i] = el)}
          className="absolute hidden md:block"
          style={{
            left: `calc(50% + ${p.x})`,
            top: `calc(50% + ${p.y})`,
            transform: `rotate(${p.rotate}deg) scale(${p.scale})`,
          }}
        >
          <div className="w-[140px] lg:w-[170px] bg-white p-2 pb-8 shadow-[0_8px_30px_rgba(0,0,0,0.12)]">
            <img
              src={p.src}
              alt=""
              className="w-full aspect-square object-cover grayscale opacity-70"
              loading="lazy"
            />
          </div>
        </div>
      ))}

      {/* Mobile: show fewer polaroids */}
      {polaroidImages.slice(0, 4).map((p, i) => (
        <div
          key={`m-${i}`}
          className="absolute md:hidden"
          style={{
            left: `calc(50% + ${parseInt(p.x) * 0.6}%)`,
            top: `calc(50% + ${parseInt(p.y) * 0.6}%)`,
            transform: `rotate(${p.rotate}deg) scale(${p.scale * 0.7})`,
          }}
        >
          <div className="w-[80px] bg-white p-1.5 pb-5 shadow-[0_5px_20px_rgba(0,0,0,0.1)]">
            <img
              src={p.src}
              alt=""
              className="w-full aspect-square object-cover grayscale opacity-50"
              loading="lazy"
            />
          </div>
        </div>
      ))}

      {/* Content layer above polaroids */}
      <div className="relative z-10 max-w-5xl">
        <p
          ref={scriptRef}
          className="font-script text-2xl md:text-3xl text-accent mb-4"
        >
          timeless elegance
        </p>

        <h1
          ref={headlineRef}
          className="font-serif text-5xl md:text-7xl lg:text-8xl text-black font-medium tracking-tight leading-[1.05] mb-8"
        >
          A New Standard in<br />Beauty & Ownership
        </h1>

        <p
          ref={subRef}
          className="font-body text-sm md:text-base text-black/50 leading-relaxed max-w-2xl mx-auto mb-12 tracking-wide"
        >
          Curated Black and African-owned beauty and fragrance — where culture,
          craftsmanship, and timeless sophistication converge.
        </p>

        <div ref={ctaRef} className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="#choose-edition"
            className="inline-block bg-black text-white font-body text-xs uppercase tracking-[0.2em] px-10 py-4 hover:bg-accent hover:text-black transition-all duration-300 rounded-sm"
          >
            Shop the Collection
          </a>
          <a
            href="#book-funnel"
            className="inline-block border border-black text-black font-body text-xs uppercase tracking-[0.2em] px-10 py-4 hover:bg-black hover:text-white transition-all duration-300 rounded-sm"
          >
            The Book
          </a>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10">
        <div className="flex flex-col items-center gap-3">
          <span className="font-body text-[10px] uppercase tracking-[0.3em] text-black/30">Scroll</span>
          <div className="w-px h-12 bg-gradient-to-b from-black/20 to-transparent" />
        </div>
      </div>
    </section>
  )
}

export default Hero
