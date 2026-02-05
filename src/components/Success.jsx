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
    <section className="min-h-screen flex items-center justify-center px-6 bg-white">
      <div ref={contentRef} className="text-center max-w-xl">
        <p className="uppercase tracking-[0.4em] text-sm text-black/40 mb-6">
          Welcome
        </p>

        <h1 className="font-body text-4xl md:text-5xl font-bold text-black mb-6 tracking-tight">
          You're In
        </h1>

        <div className="w-16 h-px bg-black/20 mx-auto mb-6"></div>

        <p className="font-body text-lg text-black/70 leading-relaxed mb-8">
          Your digital edition of <em>The Black Beauty Experience</em> is ready.
          Check your email for instant access to the issue.
        </p>

        <p className="text-sm text-black/50 mb-10">
          A confirmation has been sent to your inbox.
        </p>

        <Link
          to="/"
          className="inline-block border border-black text-black px-8 py-3 font-semibold tracking-wide hover:bg-black hover:text-white transition duration-300"
        >
          Return to Home
        </Link>
      </div>
    </section>
  )
}

export default Success
