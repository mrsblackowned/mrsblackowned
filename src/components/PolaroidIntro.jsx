import { useEffect, useRef } from 'react'
import gsap from 'gsap'

const polaroidData = [
  { name: 'Brenda',  image: '/polaroids/0.webp' },
  { name: 'LaTisha', image: '/polaroids/1.webp' },
  { name: 'Linda',   image: '/polaroids/2.webp' },
  { name: 'Felicia', image: '/polaroids/3.webp' },
  { name: 'Dawn',    image: '/polaroids/4.webp' },
  { name: 'LeShaun', image: '/polaroids/5.webp' },
  { name: 'Ines',    image: '/polaroids/6.webp' },
  { name: 'Alicia',  image: '/polaroids/7.webp' },
  { name: 'Theresa', image: '/polaroids/8.webp' },
  { name: 'Monica',  image: '/polaroids/9.webp' },
  { name: 'Sharron', image: '/polaroids/10.webp' },
]

// Scattered positions for a natural "thrown on table" layout
// Framing the page — left, center, and right clusters
const positions = [
  { left: '3%',  top: '6%',  rot: -6 },
  { left: '16%', top: '42%', rot: 4 },
  { left: '4%',  top: '70%', rot: -3 },
  { left: '30%', top: '14%', rot: 5 },
  { left: '36%', top: '56%', rot: -2 },
  { left: '46%', top: '3%',  rot: 3 },
  { left: '52%', top: '68%', rot: -4 },
  { left: '62%', top: '28%', rot: 6 },
  { left: '73%', top: '62%', rot: -5 },
  { left: '80%', top: '8%',  rot: 3 },
  { left: '86%', top: '42%', rot: -4 },
]

const PolaroidIntro = () => {
  const sectionRef = useRef(null)
  const polaroidsRef = useRef([])

  useEffect(() => {
    const els = polaroidsRef.current.filter(Boolean)

    // Set initial state — hidden above viewport
    gsap.set(els, { y: -1000, opacity: 0 })

    // Drop sequence — one by one, gravity-led
    const tl = gsap.timeline()

    els.forEach((el, i) => {
      tl.to(
        el,
        {
          y: 0,
          opacity: 1,
          rotation: positions[i].rot + gsap.utils.random(-2, 2),
          duration: 0.7,
          ease: 'power3.out',
        },
        i * 0.2
      )
    })

    return () => tl.kill()
  }, [])

  return (
    <section
      ref={sectionRef}
      className="relative w-full bg-white overflow-hidden"
      style={{ height: '100vh', paddingTop: '80px' }}
    >
      {polaroidData.map((polaroid, i) => (
        <div
          key={i}
          ref={(el) => (polaroidsRef.current[i] = el)}
          className="polaroid absolute"
          style={{
            left: positions[i].left,
            top: positions[i].top,
          }}
        >
          <div className="polaroid-img-wrap">
            <img
              src={polaroid.image}
              alt={polaroid.name}
              {...(i === 0 ? { fetchpriority: 'high' } : { loading: 'lazy' })}
            />
          </div>
          <p className="polaroid-name">{polaroid.name}</p>
        </div>
      ))}
    </section>
  )
}

export default PolaroidIntro
