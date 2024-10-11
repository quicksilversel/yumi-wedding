import { useRef, useEffect, useState } from 'react'

import { keyframes } from '@emotion/react'
import { css } from '@emotion/react'
import styled from '@emotion/styled'

import { Greetings } from './Greetings'
import { Logo } from './Logo'
import { useKvAnimation } from './useKvAnimation'

export const Hero = () => {
  const scrollAreaRef = useRef<HTMLDivElement>(null)
  const backgroundRef = useRef<HTMLDivElement>(null)
  const contentsAreaRef = useRef<HTMLDivElement>(null)
  const leadRef = useRef<HTMLDivElement>(null)

  const [isAnimating, setIsAnimating] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsAnimating(false)
    }, 1000)

    return () => clearTimeout(timer)
  })

  useKvAnimation(scrollAreaRef, backgroundRef, contentsAreaRef, leadRef)

  return (
    <Container>
      <ScrollArea ref={scrollAreaRef}>
        <Background ref={backgroundRef} isAnimating={isAnimating} />
        <Wrap>
          <ContentsArea ref={contentsAreaRef}>
            <StyledLogo isAnimating={isAnimating} />
            <Scroll>
              <span>Scroll</span>
            </Scroll>
          </ContentsArea>
          <Greetings ref={leadRef} />
        </Wrap>
      </ScrollArea>
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

const Container = styled.section`
  position: relative;
`

const ContentsArea = styled.div`
  position: relative;
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`

const Background = styled.div<{ isAnimating: boolean }>`
  position: absolute;
  top: 0;
  width: 100vw;
  height: 100lvh;
  transition: opacity 0.3s;
  background-color: var(--accent-light-pink);
`

const Wrap = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  width: 100%;
  height: 100vh;
  margin-inline: auto;
`

const ScrollArea = styled.div`
  position: relative;
  width: 100%;
  height: max(calc(100lvh - 50px), 587px);
`

const StyledLogo = styled(Logo)<{ isAnimating: boolean }>`
  width: 300px;
  fill: #fff;
  transition: fill 0.7s ease-in 0.8s;
  z-index: 10;
  animation: ${svgAnimation} 1.25s 0.2s linear both;
`

const Scroll = styled.div`
  position: absolute;
  bottom: 0;
  left: 50%;
  color: #fff;
  font-size: 11px;
  font-weight: bold;
  text-transform: uppercase;
  transform: translateX(-50%);
  transition: 0.6s opacity ease-out;

  span {
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    bottom: 40px;
  }

  &::after {
    position: absolute;
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
