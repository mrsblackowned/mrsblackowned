import { useEffect, useRef } from 'react'

const PurchaseCTA = ({ isOpen, onClose }) => {
  const overlayRef = useRef(null)
  const panelRef = useRef(null)

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => {
      document.body.style.overflow = ''
    }
  }, [isOpen])

  const handleCheckout = async (edition) => {
    try {
      const res = await fetch('/api/create-checkout-session', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ edition }),
      })
      const data = await res.json()
      if (data.url) {
        window.location.href = data.url
      } else {
        alert('Something went wrong. Please try again.')
      }
    } catch (err) {
      console.error('Checkout error:', err)
      alert('Unable to connect to checkout. Please try again.')
    }
  }

  const handleOverlayClick = (e) => {
    if (e.target === overlayRef.current) {
      onClose()
    }
  }

  if (!isOpen) return null

  return (
    <div
      ref={overlayRef}
      onClick={handleOverlayClick}
      className="purchase-cta-overlay"
    >
      <div ref={panelRef} className="purchase-cta-panel">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 font-body text-xs text-black/30 hover:text-black transition-colors duration-300 cursor-pointer"
          aria-label="Close"
        >
          ✕
        </button>

        <p className="font-body text-[10px] uppercase tracking-[0.4em] text-black/30 mb-3">
          Choose Your Edition
        </p>
        <h3 className="font-serif text-2xl md:text-3xl font-medium text-black tracking-tight leading-[1.1] mb-2">
          Own a Copy
        </h3>
        <p className="font-body text-sm text-black/40 leading-relaxed mb-10 max-w-md mx-auto">
          Two ways to own{' '}
          <span className="italic">All The Black-Owned, Babee!</span> — one story.
        </p>

        <div className="grid md:grid-cols-2 gap-6">
          {/* eBook */}
          <div className="bg-neutral-50 border border-neutral-200 p-8 text-center hover:border-accent transition-colors duration-300">
            <p className="font-body text-[10px] uppercase tracking-[0.4em] text-black/30 mb-2">
              Digital
            </p>
            <h4 className="font-serif text-xl md:text-2xl font-medium text-black mb-1">
              eBook
            </h4>
            <p className="font-body text-xs text-black/40 mb-5">
              Instant Access
            </p>

            <div className="w-10 h-px bg-accent mx-auto mb-5" />

            <p className="font-serif text-2xl text-black mb-1">$30</p>
            <p className="font-body text-[10px] uppercase tracking-[0.15em] text-black/30 mb-6">
              PDF delivered immediately
            </p>

            <button
              onClick={() => handleCheckout('ebook')}
              className="w-full bg-black text-white font-body text-xs uppercase tracking-[0.2em] px-6 py-3.5 hover:bg-accent hover:text-black transition-all duration-300 rounded-sm cursor-pointer"
            >
              Claim Your Copy
            </button>
          </div>

          {/* Coffee Table */}
          <div className="bg-neutral-50 border border-neutral-200 p-8 text-center hover:border-accent transition-colors duration-300 relative overflow-hidden">
            <div className="absolute top-3 right-3">
              <span className="font-body text-[9px] uppercase tracking-[0.2em] text-accent bg-black px-2.5 py-0.5">
                Pre-order
              </span>
            </div>

            <p className="font-body text-[10px] uppercase tracking-[0.4em] text-black/30 mb-2">
              Physical
            </p>
            <h4 className="font-serif text-xl md:text-2xl font-medium text-black mb-1">
              Coffee Table Edition
            </h4>
            <p className="font-body text-xs text-black/40 mb-5">
              Hardcover Pre-order
            </p>

            <div className="w-10 h-px bg-accent mx-auto mb-5" />

            <p className="font-serif text-2xl text-black mb-1">$75</p>
            <p className="font-body text-[10px] uppercase tracking-[0.15em] text-black/30 mb-6">
              Ships when ready
            </p>

            <button
              onClick={() => handleCheckout('coffee-table')}
              className="w-full border border-black text-black font-body text-xs uppercase tracking-[0.2em] px-6 py-3.5 hover:bg-black hover:text-white transition-all duration-300 rounded-sm cursor-pointer"
            >
              Reserve Your Copy
            </button>
          </div>
        </div>

        <p className="mt-6 font-body text-[9px] uppercase tracking-[0.15em] text-black/25 text-center">
          Final Sale · Limited Edition · No Returns
        </p>
      </div>
    </div>
  )
}

export default PurchaseCTA
