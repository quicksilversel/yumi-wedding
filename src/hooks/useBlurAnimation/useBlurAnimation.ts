import type { RefObject } from 'react'
import { useLayoutEffect } from 'react'

import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export const useBlurAnimation = (ref: RefObject<HTMLDivElement>) => {
  useLayoutEffect(() => {
    if (!ref.current) return
    gsap
      .timeline({
        scrollTrigger: {
          trigger: ref.current,
          start: 'top bottom',
          toggleActions: 'play complete none none',
        },
      })
      .fromTo(
        ref.current,
        { opacity: 0, filter: 'blur(30px)' },
        { opacity: 1, filter: 'blur(0px)', duration: 1 },
      )
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])
}
