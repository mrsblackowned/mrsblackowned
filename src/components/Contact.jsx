import { useRef, useEffect, useState } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

const Contact = () => {
  const sectionRef = useRef(null)
  const contentRef = useRef(null)
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [status, setStatus] = useState('idle') // idle | sending | sent | error

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(contentRef.current.children, {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 70%',
          toggleActions: 'play none none reverse',
        },
        opacity: 0,
        y: 30,
        duration: 0.8,
        stagger: 0.12,
        ease: 'power3.out',
      })
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  const handleChange = (e) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (status === 'sending') return
    setStatus('sending')

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      })
      if (res.ok) {
        setStatus('sent')
        setForm({ name: '', email: '', message: '' })
      } else {
        setStatus('error')
      }
    } catch {
      setStatus('error')
    }
  }

  return (
    <section
      ref={sectionRef}
      id="contact"
      className="py-24 md:py-36 px-6 bg-white"
    >
      <div className="max-w-2xl mx-auto">
        <div ref={contentRef}>
          {/* Heading */}
          <div className="text-center mb-14">
            <p className="font-body text-[10px] uppercase tracking-[0.4em] text-black/30 mb-4">
              Get In Touch
            </p>
            <h2 className="font-serif text-3xl md:text-5xl font-medium text-black tracking-tight leading-[1.1] mb-4">
              Contact Us
            </h2>
            <div className="w-12 h-px bg-accent mx-auto mb-6" />
            <p className="font-body text-sm text-black/40 leading-relaxed">
              Questions about your order, the book, or anything else —<br className="hidden md:block" />
              we'd love to hear from you.
            </p>
          </div>

          {/* Form */}
          {status === 'sent' ? (
            <div className="text-center py-12">
              <div className="w-14 h-14 rounded-full border border-accent flex items-center justify-center mx-auto mb-6">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#C8B590" strokeWidth="2">
                  <path d="M20 6 9 17l-5-5" />
                </svg>
              </div>
              <p className="font-serif text-xl text-black mb-2">Message Sent</p>
              <p className="font-body text-sm text-black/40">We'll get back to you shortly.</p>
              <button
                onClick={() => setStatus('idle')}
                className="mt-8 font-body text-xs uppercase tracking-[0.2em] text-black/30 hover:text-black transition-colors"
              >
                Send another message
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block font-body text-[10px] uppercase tracking-[0.2em] text-black/40 mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    required
                    placeholder="Your name"
                    className="w-full border border-neutral-200 bg-white font-body text-sm text-black px-4 py-3 focus:outline-none focus:border-accent transition-colors placeholder:text-black/20"
                  />
                </div>
                <div>
                  <label className="block font-body text-[10px] uppercase tracking-[0.2em] text-black/40 mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    required
                    placeholder="your@email.com"
                    className="w-full border border-neutral-200 bg-white font-body text-sm text-black px-4 py-3 focus:outline-none focus:border-accent transition-colors placeholder:text-black/20"
                  />
                </div>
              </div>

              <div>
                <label className="block font-body text-[10px] uppercase tracking-[0.2em] text-black/40 mb-2">
                  Message
                </label>
                <textarea
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  required
                  rows={6}
                  placeholder="How can we help?"
                  className="w-full border border-neutral-200 bg-white font-body text-sm text-black px-4 py-3 focus:outline-none focus:border-accent transition-colors resize-none placeholder:text-black/20"
                />
              </div>

              {status === 'error' && (
                <p className="font-body text-xs text-red-400">
                  Something went wrong. You can also reach us directly at{' '}
                  <a href="mailto:mrsblackowned@gmail.com" className="underline">
                    mrsblackowned@gmail.com
                  </a>
                </p>
              )}

              <div className="text-center">
                <button
                  type="submit"
                  disabled={status === 'sending'}
                  className="inline-block bg-black text-white font-body text-xs uppercase tracking-[0.2em] px-12 py-4 hover:bg-accent hover:text-black transition-all duration-300 disabled:opacity-40 cursor-pointer disabled:cursor-not-allowed"
                >
                  {status === 'sending' ? 'Sending…' : 'Send Message'}
                </button>
              </div>

              <p className="text-center font-body text-[10px] text-black/20 tracking-[0.1em]">
                Or email us directly at{' '}
                <a
                  href="mailto:mrsblackowned@gmail.com"
                  className="text-black/40 hover:text-black transition-colors underline underline-offset-2"
                >
                  mrsblackowned@gmail.com
                </a>
              </p>
            </form>
          )}
        </div>
      </div>
    </section>
  )
}

export default Contact
