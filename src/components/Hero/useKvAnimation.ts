import type { RefObject } from 'react'
import { useLayoutEffect } from 'react'

import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export const useKvAnimation = (
  scrollAreaRef: RefObject<HTMLDivElement>,
  backgroundRef: RefObject<HTMLDivElement>,
  contentsAreaRef: RefObject<HTMLDivElement>,
  leadRef: RefObject<HTMLDivElement>,
) => {
  useLayoutEffect(() => {
    if (
      !scrollAreaRef.current ||
      !backgroundRef.current ||
      !contentsAreaRef.current ||
      !leadRef.current
    )
      return

    const ctx = gsap.context(() => {
      gsap.fromTo(
        backgroundRef.current,
        { opacity: 1 },
        {
          opacity: 0,
          scrollTrigger: {
            trigger: backgroundRef.current,
            start: `top top+=0`,
            end: `top+=200% top+=0`,
            scrub: true,
          },
        },
      )

      gsap.fromTo(
        contentsAreaRef.current,
        { opacity: 1, scale: 1, willChange: 'transform, opacity' },
        {
          opacity: 0,
          scale: 0.95,
          willChange: 'transform, opacity',
          scrollTrigger: {
            trigger: contentsAreaRef.current,
            start: `top+=0% top+=0`,
            end: `top+=66.6% top+=0`,
            scrub: true,
          },
        },
      )

      gsap
        .timeline({
          scrollTrigger: {
            trigger: leadRef.current,
            start: `top+=66.6% top+=0`,
            end: `top+=200% top+=0`,
            scrub: true,
            toggleActions: 'play none none reverse',
          },
        })
        .fromTo(
          leadRef.current,
          { opacity: 0 },
          {
            opacity: 1,
            duration: 1,
            ease: 'none',
          },
        )
        .fromTo(
          leadRef.current,
          {
            opacity: 1,
          },
          {
            opacity: 1,
            duration: 1,
            ease: 'none',
          },
        )
        .fromTo(
          leadRef.current,
          {
            opacity: 1,
          },
          {
            opacity: 0,
            duration: 1,
            ease: 'none',
          },
        )

      gsap.set(leadRef.current, {
        opacity: 0,
      })

      if (scrollAreaRef.current) {
        scrollAreaRef.current.style.transform = 'translate(0px, 0px)'
      }
      ScrollTrigger.create({
        trigger: scrollAreaRef.current,
        start: `top top+=0`,
        end: `top+=200% top+=0`,
        pin: true,
        pinSpacing: true,
        scrub: true,
        anticipatePin: 1,
      })
    })

    return () => ctx.revert()
  }, [scrollAreaRef, backgroundRef, contentsAreaRef, leadRef])
}
