import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { Link, useSearchParams } from 'react-router-dom'

const Success = () => {
  const contentRef = useRef(null)
  const [searchParams] = useSearchParams()
  const edition = searchParams.get('edition')
  const isEbook = edition === 'ebook'

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
      <div ref={contentRef} className="text-center max-w-lg">
        {/* Checkmark icon */}
        <div className="w-16 h-16 rounded-full border-2 border-accent flex items-center justify-center mx-auto mb-8">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#C8B590" strokeWidth="2">
            <path d="M20 6 9 17l-5-5" />
          </svg>
        </div>

        <p className="font-body text-[11px] uppercase tracking-[0.3em] text-black/40 mb-6">
          Issue 01
        </p>

        <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-medium text-black mb-6 tracking-tight leading-[1.1]">
          Welcome to<br />the Archive
        </h1>

        <div className="w-12 h-px bg-accent mx-auto mb-8" />

        <p className="font-body text-base text-black/60 leading-relaxed mb-4">
          {isEbook
            ? 'Your digital edition is ready to download.'
            : 'Your order has been confirmed.'}
        </p>
        <p className="font-body text-sm text-black/40 leading-relaxed mb-10">
          {isEbook
            ? 'Click below to download your copy — profiles, essays, and the complete archive.'
            : 'Check your inbox for your order confirmation and shipping updates.'}
        </p>

        {isEbook && (
          <a
            href="/ebooks/all-the-black-owned-babee-2026.pdf"
            download
            className="inline-block bg-accent text-black font-body text-xs uppercase tracking-[0.2em] px-10 py-4 hover:bg-accent-dark transition-all duration-300 rounded-sm mb-6"
          >
            Download Your Ebook
          </a>
        )}

        <div>
          <Link
            to="/"
            className="inline-block bg-black text-white font-body text-xs uppercase tracking-[0.2em] px-10 py-4 hover:bg-accent hover:text-black transition-all duration-300 rounded-sm"
          >
            Continue Exploring
          </Link>
        </div>

        <p className="mt-10 font-body text-[10px] text-black/25 tracking-[0.2em] uppercase">
          A confirmation has been sent to your email
        </p>
      </div>
    </section>
  )
}

export default Success
