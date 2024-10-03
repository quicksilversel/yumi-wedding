import { useEffect, useState, memo } from 'react'

import styled from '@emotion/styled'

export const BackgroundPc = memo(() => {
  const IMAGE_COUNT = 4
  const [activeIndex, setActiveIndex] = useState(0)
  const [prevIndex, setPrevIndex] = useState(-1)
  const [isInitial, setIsInitial] = useState(true)

  useEffect(() => {
    setIsInitial(false)
  }, [])

  useEffect(() => {
    const interval = setInterval(() => {
      setPrevIndex(activeIndex)
      setActiveIndex((prev) => (prev + 1) % IMAGE_COUNT)
    }, 8000)

    return () => clearInterval(interval)
  }, [activeIndex])

  return (
    <>
      {Array.from({ length: IMAGE_COUNT }).map((_, index) => {
        const isActive = !isInitial && index === activeIndex
        const isPrevious = index === prevIndex

        const isVisible = isActive || isPrevious

        const zIndex = isActive ? -1 : isPrevious ? -2 : -3

        return (
          <BackgroundImage
            key={index}
            src={`/bg-pc-${index + 1}.jpg`}
            alt=""
            zIndex={zIndex}
            isActive={isActive}
            isVisible={isVisible}
          />
        )
      })}
    </>
  )
})

BackgroundPc.displayName = 'BackgroundPc'

const BackgroundImage = styled.img<{
  isActive: boolean
  isVisible: boolean
  zIndex: number
}>`
  position: fixed;
  z-index: ${({ zIndex }) => zIndex};
  inset: 0;
  width: 100vw;
  min-width: 1000px;
  object-fit: cover;
  height: 100vh;
  transform: ${({ isVisible }) => (isVisible ? 'scale(1.1)' : 'scale(1)')};
  transition:
    transform 10s linear,
    opacity 2s cubic-bezier(0.39, 0.575, 0.565, 1);
  opacity: ${({ isVisible }) => (isVisible ? 1 : 0)};
`
