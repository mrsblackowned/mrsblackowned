import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { Link } from 'react-router-dom'

const Success = () => {
  const contentRef = useRef(null)

  useEffect(() => {
    gsap.from(contentRef.current.children, {
      y: 30,
      opacity: 0,
      duration: 0.8,
      stagger: 0.15,
      ease: 'power3.out',
    })
  }, [])

  return (
    <section className="min-h-screen flex items-center justify-center px-6 bg-secondary">
      <div ref={contentRef} className="text-center max-w-lg">
        <p className="uppercase tracking-[0.5em] text-xs text-black/40 mb-8">
          Issue 01
        </p>

        <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-medium text-black mb-6 tracking-tight leading-[1.1]">
          Welcome to<br />the Archive
        </h1>

        <div className="w-12 h-px bg-black/20 mx-auto mb-8"></div>

        <p className="font-body text-lg text-black/70 leading-relaxed mb-4">
          Your digital edition is ready.
        </p>
        <p className="font-body text-base text-black/50 leading-relaxed mb-10">
          Check your inbox for instant access to the full issue—<br className="hidden md:block" />
          profiles, essays, and the complete archive.
        </p>

        <div className="space-y-4">
          <Link
            to="/"
            className="inline-block bg-black text-white text-sm uppercase tracking-[0.2em] px-10 py-4 hover:bg-black/80 transition duration-300"
          >
            Continue Exploring
          </Link>
        </div>

        <p className="mt-12 text-xs text-black/30 tracking-wide">
          A confirmation has been sent to your email.
        </p>
      </div>
    </section>
  )
}

export default Success
