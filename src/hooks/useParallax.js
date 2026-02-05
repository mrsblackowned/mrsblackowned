import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export const useParallax = (speed = 0.3) => {
  const ref = useRef(null)

  useEffect(() => {
    const element = ref.current
    if (!element) return

    gsap.to(element, {
      y: () => -(window.innerHeight * speed),
      ease: 'none',
      scrollTrigger: {
        trigger: element,
        start: 'top bottom',
        end: 'bottom top',
        scrub: true,
      },
    })

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => {
        if (trigger.vars.trigger === element) {
          trigger.kill()
        }
      })
    }
  }, [speed])

  return ref
}
