import { useRef, useEffect } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const products = [
  {
    name: 'Radiance Serum',
    brand: 'Ami Cole',
    price: '$32',
    tag: 'Best Seller',
  },
  {
    name: 'Shea Butter Balm',
    brand: 'Buttah Skin',
    price: '$26',
    tag: 'New',
  },
  {
    name: 'Noir Eau de Parfum',
    brand: 'Forvr Mood',
    price: '$65',
    tag: null,
  },
  {
    name: 'Glow Oil',
    brand: 'Topicals',
    price: '$36',
    tag: 'Trending',
  },
  {
    name: 'Honey Mask',
    brand: 'Eadem',
    price: '$42',
    tag: null,
  },
  {
    name: 'Curl Elixir',
    brand: 'Bread Beauty',
    price: '$28',
    tag: 'Staff Pick',
  },
]

const ProductShowcase = () => {
  const sectionRef = useRef(null)
  const headerRef = useRef(null)
  const cardsRef = useRef([])

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

      cardsRef.current.forEach((card, i) => {
        if (!card) return
        gsap.from(card, {
          scrollTrigger: {
            trigger: card,
            start: 'top 85%',
            toggleActions: 'play none none reverse',
          },
          opacity: 0,
          y: 50,
          duration: 0.7,
          delay: i * 0.08,
          ease: 'power3.out',
        })
      })
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <section ref={sectionRef} id="products" className="py-24 md:py-32 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        <div ref={headerRef} className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16">
          <div>
            <p className="font-body text-[11px] uppercase tracking-[0.3em] text-black/40 mb-4">
              Curated Selection
            </p>
            <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-medium text-black tracking-tight leading-[1.1]">
              Shop the Edit
            </h2>
          </div>
          <a
            href="#"
            className="mt-6 md:mt-0 font-body text-xs uppercase tracking-[0.2em] text-black/50 hover:text-black border-b border-black/20 hover:border-black pb-1 transition-all duration-300"
          >
            View All Products
          </a>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-8">
          {products.map((product, i) => (
            <article
              key={i}
              ref={(el) => (cardsRef.current[i] = el)}
              className="group cursor-pointer"
            >
              {/* Product Image Placeholder */}
              <div className="relative aspect-[3/4] bg-neutral-100 mb-4 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-neutral-200/50 to-transparent" />
                {/* Geometric placeholder */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-20 h-20 md:w-28 md:h-28 rounded-full border border-black/[0.06]" />
                </div>
                {/* Tag */}
                {product.tag && (
                  <span className="absolute top-4 left-4 bg-black text-white text-[10px] uppercase tracking-[0.15em] px-3 py-1.5 font-body">
                    {product.tag}
                  </span>
                )}
                {/* Hover overlay */}
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-colors duration-500" />
                {/* Quick actions */}
                <div className="absolute bottom-4 left-4 right-4 opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-300">
                  <button className="w-full bg-white text-black text-[11px] uppercase tracking-[0.15em] py-3 font-body hover:bg-accent transition-colors duration-300">
                    Quick View
                  </button>
                </div>
              </div>

              {/* Product Info */}
              <div className="space-y-1">
                <p className="font-body text-[10px] uppercase tracking-[0.2em] text-black/40">
                  {product.brand}
                </p>
                <h3 className="font-serif text-lg md:text-xl text-black group-hover:text-accent transition-colors duration-300">
                  {product.name}
                </h3>
                <p className="font-body text-sm text-black/70 font-medium">
                  {product.price}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default ProductShowcase
