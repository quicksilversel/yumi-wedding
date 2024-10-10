import { useRef, useEffect, useState } from 'react'

import { keyframes } from '@emotion/react'
import { css } from '@emotion/react'
import styled from '@emotion/styled'

import { Logo } from './Logo'

export const Hero = () => {
  const ref = useRef<HTMLDivElement>(null)

  const [isAnimating, setIsAnimating] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsAnimating(false)
    }, 1000)

    return () => clearTimeout(timer)
  })

  return (
    <Container ref={ref} isAnimating={isAnimating}>
      <StyledLogo isAnimating={isAnimating} />
      <Scroll>
        <span>Scroll</span>
      </Scroll>
    </Container>
  )
}

export const svgAnimation = keyframes`
  0% {
    clip-path: inset(0 0 100% 0);
  }
  100% {
    clip-path: inset(0);
  }
`

const scrollLineAnimation = keyframes`
  0% {
    transform: scale(1, 0);
    transform-origin: 0 0;
  }

  50% {
    transform: scale(1, 1);
    transform-origin: 0 0;
  }

  50.1% {
    transform: scale(1, 1);
    transform-origin: 0 100%;
  }

  100% {
    transform: scale(1, 0);
    transform-origin: 0 100%;
  }
`

const Container = styled.div<{ isAnimating: boolean }>`
  position: relative;
  width: 100vw;
  height: 100svh;
  z-index: ${({ isAnimating }) => (isAnimating ? 10 : -1)};
  transition: opacity 0.3s;
  background-color: var(--accent-light-pink);

  &::before {
    position: absolute;
    z-index: 10;
    width: 100vw;
    height: 100svh;
    pointer-events: none;
    content: '';
    background-color: var(--accent-green);
    opacity: ${({ isAnimating }) => (isAnimating ? 1 : 0)};
    transition: opacity 0.7s ease-in 0.8s;
  }
`

const StyledLogo = styled(Logo)<{ isAnimating: boolean }>`
  position: fixed;
  inset: 0;
  width: 300px;
  height: auto;
  margin: auto;
  fill: ${({ isAnimating }) => (!isAnimating ? '#fff' : '#fff')};
  transition: fill 0.7s ease-in 0.8s;
  z-index: 10;

  ${({ isAnimating }) =>
    isAnimating &&
    css`
      animation: ${svgAnimation} 2s ease-in-out forwards;
    `}
`

const Scroll = styled.div`
  position: fixed;
  bottom: 0;
  left: 50%;
  color: #fff;
  font-size: 11px;
  font-weight: bold;
  text-transform: uppercase;
  transform: translateX(-50%);
  transition: 0.6s opacity ease-out;

  span {
    position: fixed;
    left: 50%;
    transform: translateX(-50%);
    bottom: 40px;
  }

  &::after {
    position: fixed;
    bottom: 0;
    left: 50%;
    display: block;
    width: 1px;
    height: 30px;
    margin-top: 10px;
    content: '';
    background: #fff;
    transform: translateX(-50%);
    animation: ${scrollLineAnimation} 2s ease-in-out infinite;
  }
`
