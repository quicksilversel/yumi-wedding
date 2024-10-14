import type { RefObject } from 'react'
import { useLayoutEffect } from 'react'

import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export const useSideScrollAnimation = (
  title: RefObject<HTMLDivElement>,
  content: RefObject<HTMLDivElement>,
  movement: string,
) => {
  useLayoutEffect(() => {
    if (!title.current || !content.current) return

    const ctx = gsap.context(() => {
      gsap
        .timeline()
        .to(title.current, {
          x: movement,
          ease: 'none',
          scrollTrigger: {
            trigger: title.current,
            start: 'bottom bottom-=25%',
            end: `bottom top+=0`,
            scrub: 1.0,
          },
        })
        .fromTo(
          content.current,
          { opacity: 0, filter: 'blur(30px)' },
          { opacity: 1, filter: 'blur(0px)', duration: 1 },
        )
    })

    return () => ctx.revert()
  }, [title, movement, content])
}
