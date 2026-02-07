import { useRef, useEffect } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const posts = [
  {
    category: 'Feature',
    title: 'Clock It: Octavia Morgan x Bevy Smith',
    excerpt:
      'Octavia Morgan Los Angeles is redefining luxury fragrance — clean, genderless, and unapologetic. As the first Black and woman-owned prestige fragrance brand at Ulta Beauty, Morgan draws from her nursing background and her grandmother\'s herbalist wisdom to craft scents rooted in intention and wellness.',
    url: 'https://open.substack.com/pub/beautybymrsbo/p/clock-it-octavia-morgan-x-bevy-smith?utm_campaign=post&utm_medium=web',
  },
  {
    category: 'Editorial',
    title: "My Savoir Faire's Crownstone Collection",
    excerpt:
      'An exclusive look at the Crownstone Collection from My Savoir Faire — where luxury meets intentional craftsmanship and timeless beauty.',
    url: 'https://open.substack.com/pub/beautybymrsbo/p/my-savoir-faires-crownstone-collection?utm_campaign=post&utm_medium=web',
  },
  {
    category: 'Feature',
    title: 'From Zanzibar with Love: Bixa Beauty',
    excerpt:
      'Zanzibar was her muse. Founded by Deida Massey, Bixa Beauty pays homage to the Achiote Tree — the lipstick tree — whose seeds have been used as lip color for centuries by Indigenous peoples of the Amazon and Caribbean. Clean, intentional, and donating 10% of sales to girls\' education in Tanzania.',
    url: 'https://open.substack.com/pub/beautybymrsbo/p/from-zanzibar-with-love-bixa-beauty?utm_campaign=post&utm_medium=web',
  },
]

const FeaturedWork = () => {
  const sectionRef = useRef(null)
  const headerRef = useRef(null)
  const cardsRef = useRef([])

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(headerRef.current, {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 75%',
          toggleActions: 'play none none reverse',
        },
        opacity: 0,
        y: 40,
        duration: 0.8,
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
          duration: 0.8,
          delay: i * 0.12,
          ease: 'power3.out',
        })
      })
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <section ref={sectionRef} id="journal" className="py-24 md:py-32 px-6 bg-white text-black">
      <div className="max-w-5xl mx-auto">
        <div ref={headerRef} className="text-center mb-16">
          <p className="font-body text-[11px] uppercase tracking-[0.3em] text-black/40 mb-4">
            From the Substack
          </p>
          <h2 className="font-serif text-4xl md:text-5xl font-medium tracking-tight">
            Latest Posts
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {posts.map((post, i) => (
            <article
              key={i}
              ref={(el) => (cardsRef.current[i] = el)}
              className="group border border-black/[0.06] p-8 hover:bg-black hover:text-white transition-all duration-500"
            >
              <p className="font-body text-[10px] uppercase tracking-[0.25em] text-black/40 group-hover:text-white/40 mb-4 transition-colors duration-500">
                {post.category}
              </p>
              <h3 className="font-serif text-xl md:text-2xl font-medium mb-4 tracking-tight leading-snug">
                {post.title}
              </h3>
              <p className="font-body text-sm text-black/50 group-hover:text-white/50 leading-relaxed mb-6 transition-colors duration-500">
                {post.excerpt}
              </p>
              <a
                href={post.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 font-body text-xs uppercase tracking-[0.15em] font-semibold text-accent hover:opacity-70 transition-opacity"
              >
                Continue Reading on Substack
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default FeaturedWork
