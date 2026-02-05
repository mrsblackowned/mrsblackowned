import { useRef, useEffect } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const conversionFeatures = [
  { title: 'Quick View', desc: 'Let customers preview products without leaving the page.' },
  { title: 'Wishlist', desc: 'Save favorite items for later with a single click.' },
  { title: 'Size Guide', desc: 'Built-in measurement guides reduce returns.' },
  { title: 'Trust Badges', desc: 'Secure checkout indicators increase buyer confidence.' },
  { title: 'Sticky Cart', desc: 'Always-visible add-to-cart button improves conversions.' },
]

const premiumFeatures = [
  { title: 'Editorial Layouts', desc: 'Magazine-quality product pages that tell a story.' },
  { title: 'Custom Typography', desc: 'Curated font pairings for a luxury feel.' },
  { title: 'Announcement Bar', desc: 'Rotating promotions and shipping thresholds.' },
  { title: 'Brand Storytelling', desc: 'Dedicated sections for founder stories and brand values.' },
  { title: 'Collection Filters', desc: 'Smart filtering by category, price, and brand origin.' },
]

const ThemeFeatures = () => {
  const sectionRef = useRef(null)
  const headerRef = useRef(null)
  const leftRef = useRef(null)
  const rightRef = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(headerRef.current.children, {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 75%',
          toggleActions: 'play none none reverse',
        },
        opacity: 0,
        y: 30,
        duration: 0.8,
        stagger: 0.1,
        ease: 'power3.out',
      })

      gsap.from(leftRef.current.children, {
        scrollTrigger: {
          trigger: leftRef.current,
          start: 'top 80%',
          toggleActions: 'play none none reverse',
        },
        opacity: 0,
        x: -30,
        duration: 0.6,
        stagger: 0.08,
        ease: 'power3.out',
      })

      gsap.from(rightRef.current.children, {
        scrollTrigger: {
          trigger: rightRef.current,
          start: 'top 80%',
          toggleActions: 'play none none reverse',
        },
        opacity: 0,
        x: 30,
        duration: 0.6,
        stagger: 0.08,
        ease: 'power3.out',
      })
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <section ref={sectionRef} className="py-24 md:py-32 px-6 bg-neutral-100">
      <div className="max-w-6xl mx-auto">
        <div ref={headerRef} className="text-center mb-16 md:mb-20">
          <p className="font-body text-[11px] uppercase tracking-[0.3em] text-black/40 mb-4">
            Built to Convert
          </p>
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-medium text-black tracking-tight leading-[1.1] mb-6">
            Theme Features
          </h2>
          <p className="font-body text-sm text-black/50 max-w-xl mx-auto leading-relaxed">
            Every detail designed to increase conversions while maintaining a timeless, luxury aesthetic.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16">
          {/* Conversion Features */}
          <div ref={leftRef}>
            <h3 className="font-body text-xs uppercase tracking-[0.25em] text-accent font-semibold mb-8 pb-4 border-b border-black/10">
              Conversion Features
            </h3>
            <div className="space-y-6">
              {conversionFeatures.map((f, i) => (
                <div key={i} className="flex gap-4 items-start">
                  <div className="mt-1.5 w-1.5 h-1.5 bg-accent rounded-full shrink-0" />
                  <div>
                    <h4 className="font-body text-sm font-semibold text-black mb-1">
                      {f.title}
                    </h4>
                    <p className="font-body text-sm text-black/50 leading-relaxed">
                      {f.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Premium Features */}
          <div ref={rightRef}>
            <h3 className="font-body text-xs uppercase tracking-[0.25em] text-accent font-semibold mb-8 pb-4 border-b border-black/10">
              Premium Features
            </h3>
            <div className="space-y-6">
              {premiumFeatures.map((f, i) => (
                <div key={i} className="flex gap-4 items-start">
                  <div className="mt-1.5 w-1.5 h-1.5 bg-accent rounded-full shrink-0" />
                  <div>
                    <h4 className="font-body text-sm font-semibold text-black mb-1">
                      {f.title}
                    </h4>
                    <p className="font-body text-sm text-black/50 leading-relaxed">
                      {f.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ThemeFeatures
