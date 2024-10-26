import type { RefObject } from 'react'
import { useLayoutEffect } from 'react'

import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export const useSideScrollAnimation = (
  target: RefObject<HTMLDivElement>,
  movement: string,
) => {
  useLayoutEffect(() => {
    if (!target.current) return

    const ctx = gsap.context(() => {
      ScrollTrigger.config({
        autoRefreshEvents: 'visibilitychange,DOMContentLoaded,load',
      })

      gsap.to(target.current, {
        y: movement,
        ease: 'none',
        scrollTrigger: {
          trigger: target.current,
          start: 'bottom bottom-=25%',
          end: `bottom top+=0`,
          scrub: 1.0,
        },
      })
    })

    return () => ctx.revert()
  }, [target, movement])
}
