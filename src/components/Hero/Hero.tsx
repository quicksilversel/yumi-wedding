import { useRef, useLayoutEffect, useState } from 'react'

import { keyframes } from '@emotion/react'
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

  useLayoutEffect(() => {
    const timer = setTimeout(() => {
      setIsAnimating(false)
    }, 6500)

    return () => clearTimeout(timer)
  })

  useKvAnimation(scrollAreaRef, backgroundRef, contentsAreaRef, leadRef)

  return (
    <Container>
      <ScrollArea ref={scrollAreaRef}>
        <Background ref={backgroundRef} isAnimating={isAnimating} />
        <InnerContainer>
          <ContentsArea ref={contentsAreaRef}>
            <StyledLogo isAnimating={isAnimating} />
            <Scroll>
              <span>Scroll</span>
            </Scroll>
          </ContentsArea>
          <Greetings ref={leadRef} />
        </InnerContainer>
      </ScrollArea>
    </Container>
  )
}

const fadeInAnimation = keyframes`
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
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
  height: 100dvh;
  display: flex;
  justify-content: center;
  align-items: center;
`

const Background = styled.div<{ isAnimating: boolean }>`
  position: absolute;
  top: 0;
  width: 100vw;
  height: 100dvh;
  transition: background-color 0.7s ease-in;
  background-color: ${({ isAnimating }) =>
    !isAnimating ? 'var(--accent-light-pink)' : '#fff'};
`

const InnerContainer = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  width: 100%;
  height: 100dvh;
  margin-inline: auto;
`

const ScrollArea = styled.div`
  position: relative;
  width: 100%;
  height: max(calc(100dvh - 50px), 587px);
`

const StyledLogo = styled(Logo)<{ isAnimating: boolean }>`
  width: 300px;
  fill: ${({ isAnimating }) =>
    isAnimating ? 'var(--accent-light-pink)' : '#fff'};
  transition: fill 0.7s ease-in;
  z-index: 10;
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
  animation: ${fadeInAnimation} 0.6s 1.5s ease-out both;

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
