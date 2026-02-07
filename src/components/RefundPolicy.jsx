import Header from './Header'
import Footer from './Footer'

const RefundPolicy = () => {
  return (
    <>
      <Header />
      <main className="pt-32 pb-24 px-6 bg-white">
        <div className="max-w-2xl mx-auto">
          <p className="font-body text-[10px] uppercase tracking-[0.4em] text-black/30 mb-6">
            Policy
          </p>
          <h1 className="font-serif text-3xl md:text-5xl font-medium text-black tracking-tight leading-[1.1] mb-12">
            Refund & Return Policy
          </h1>

          <div className="space-y-10 font-body text-sm text-black/60 leading-relaxed">
            <div>
              <p>
                All purchases of <span className="italic">ALL THE BLACK-OWNED, BABEE!: Beauty & Fragrance with Intention and Impact</span> are <strong className="text-black/80">final sale</strong>.
              </p>
              <p className="mt-3">
                Because this is a limited-edition book produced once per year, we do not offer returns, exchanges, or refunds after purchase.
              </p>
            </div>

            <div>
              <h2 className="font-serif text-xl md:text-2xl font-medium text-black mb-4">
                Exceptions — Damaged or Defective Items
              </h2>
              <p>
                If your book arrives damaged or defective, you must contact us within <strong className="text-black/80">7 days of delivery</strong> at{' '}
                <a href="mailto:support@mrsblackowned.com" className="text-black underline underline-offset-4 decoration-black/20 hover:decoration-black/60 transition-colors">
                  support@mrsblackowned.com
                </a>{' '}
                and include:
              </p>
              <ul className="mt-4 space-y-2 pl-5">
                <li className="flex items-start gap-3">
                  <span className="w-1 h-1 rounded-full bg-accent mt-2 shrink-0" />
                  Your order number
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-1 h-1 rounded-full bg-accent mt-2 shrink-0" />
                  Photos clearly showing the damage
                </li>
              </ul>
              <p className="mt-4">Approved claims will receive either:</p>
              <ul className="mt-2 space-y-2 pl-5">
                <li className="flex items-start gap-3">
                  <span className="w-1 h-1 rounded-full bg-accent mt-2 shrink-0" />
                  A replacement, or
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-1 h-1 rounded-full bg-accent mt-2 shrink-0" />
                  A refund issued to the original payment method
                </li>
              </ul>
              <p className="mt-4">
                Refunds are processed manually and may take 5–10 business days to appear, depending on your bank.
              </p>
            </div>

            <div>
              <h2 className="font-serif text-xl md:text-2xl font-medium text-black mb-4">
                Shipping Issues
              </h2>
              <p>
                We are not responsible for packages marked as delivered by the carrier or for incorrect shipping addresses provided at checkout.
              </p>
            </div>

            <div>
              <h2 className="font-serif text-xl md:text-2xl font-medium text-black mb-4">
                Digital Content
              </h2>
              <p>
                Any digital content or bonus materials are non-refundable.
              </p>
            </div>

            <div className="pt-6 border-t border-black/10">
              <p className="text-black/40 text-xs">
                By completing your purchase, you agree to this policy.
              </p>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}

export default RefundPolicy
