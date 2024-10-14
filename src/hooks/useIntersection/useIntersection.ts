import type { RefObject } from 'react'
import { useState, useEffect, useRef, useCallback } from 'react'

const isSsr = () => typeof window === 'undefined'
type Context = {
  isIntersecting: IntersectionObserverEntry['isIntersecting'] | undefined
  boundingClientRect:
    | IntersectionObserverEntry['boundingClientRect']
    | undefined
  disconnect: () => void
}

type Option = IntersectionObserverInit & {
  isOnce?: boolean
  onChange?: (context: Pick<Context, 'isIntersecting'>) => void
}

export const useIntersection = (
  ref: RefObject<HTMLElement>,
  option: Option = {},
): Context => {
  const { isOnce, onChange, ...originalOption } = option
  const [isIntersecting, setIntersecting] =
    useState<Context['isIntersecting']>(undefined)
  const [boundingClientRect, setBoundingClientRect] =
    useState<Context['boundingClientRect']>(undefined)

  useEffect(() => {
    if (!('IntersectionObserver' in window)) {
      setIntersecting(true)
    }
  }, [])

  const interSectionObserver = useRef(
    !isSsr() && 'IntersectionObserver' in window
      ? new IntersectionObserver(([entry]: IntersectionObserverEntry[]) => {
          if (!entry) {
            return
          }
          const { isIntersecting, boundingClientRect } = entry
          setIntersecting(isIntersecting)
          setBoundingClientRect(boundingClientRect)

          onChange?.({ isIntersecting })
          if (isOnce && isIntersecting) {
            interSectionObserver.current?.disconnect()
          }
        }, originalOption)
      : undefined,
  )

  const disconnect = useCallback(() => {
    interSectionObserver.current?.disconnect()
  }, [])

  useEffect(() => {
    const observer = interSectionObserver.current
    if (!ref.current || !observer) {
      return
    }

    observer.observe(ref.current)
    return () => observer.disconnect()
  }, [ref])

  return {
    isIntersecting,
    boundingClientRect,
    disconnect,
  }
}
