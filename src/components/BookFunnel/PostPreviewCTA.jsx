import { useRef, useEffect } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import FunnelButton from './FunnelButton'


const PostPreviewCTA = () => {
  const sectionRef = useRef(null)
  const contentRef = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(contentRef.current.children, {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 75%',
          toggleActions: 'play none none reverse',
        },
        opacity: 0,
        y: 25,
        duration: 0.8,
        stagger: 0.15,
      })
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <section ref={sectionRef} className="py-20 md:py-28 px-6 bg-white">
      <div ref={contentRef} className="max-w-2xl mx-auto text-center">
        <p className="font-script text-2xl md:text-3xl text-accent mb-4">
          the story continues
        </p>

        <p className="font-body text-sm text-black/45 leading-relaxed mb-10">
          What you've seen is just the beginning. The full book takes you
          deeper — into the brands, the founders, the rituals, and the culture
          that make Black-owned beauty an act of preservation and power.
        </p>

        {/* Single CTA — Secondary set */}
        <FunnelButton href="#choose-edition">
          Continue the Journey
        </FunnelButton>
      </div>
    </section>
  )
}

export default PostPreviewCTA
