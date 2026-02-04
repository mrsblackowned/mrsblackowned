import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const works = [
  {
    image: 'https://via.placeholder.com/300x400',
    alt: 'Book Cover',
    title: 'The Black Beauty Experience',
    description: 'Explore the book celebrating Black-owned beauty brands and their stories.',
  },
  {
    image: 'https://via.placeholder.com/300x400',
    alt: 'Editorial Feature 1',
    title: 'Editorial Feature',
    description: "Curated beauty stories and highlights from the industry's top brands.",
  },
  {
    image: 'https://via.placeholder.com/300x400',
    alt: 'Editorial Feature 2',
    title: 'Editorial Feature',
    description: 'Spotlighting founders, products, and stories behind Black-owned brands.',
  },
]

const FeaturedWork = () => {
  const cardsRef = useRef([])

  useEffect(() => {
    cardsRef.current.forEach((card, i) => {
      gsap.from(card, {
        scrollTrigger: {
          trigger: card,
          start: 'top 80%',
          toggleActions: 'play none none reverse',
        },
        opacity: 0,
        y: 50,
        duration: 0.8,
        delay: i * 0.2,
      })
    })
  }, [])

  return (
    <section className="py-32 px-6 bg-[#DFDCD5] text-black text-center">
      <h2 className="text-4xl md:text-5xl font-body font-semibold mb-16">
        Featured Work & Book
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
        {works.map((work, i) => (
          <div
            key={i}
            ref={(el) => (cardsRef.current[i] = el)}
            className="bg-white p-6 rounded-xl shadow-lg hover:shadow-2xl transition duration-300"
          >
            <img
              src={work.image}
              alt={work.alt}
              className="mb-4 rounded"
            />
            <h3 className="font-body font-semibold text-2xl mb-2">{work.title}</h3>
            <p className="font-body text-base text-gray-800">{work.description}</p>
          </div>
        ))}
      </div>
    </section>
  )
}

export default FeaturedWork
