import { useRef, useLayoutEffect, useState } from 'react'

import { keyframes, css } from '@emotion/react'
import styled from '@emotion/styled'

import { rotateAnimation, floatAnimation } from '@/assets/animation'

import { Greetings } from './Greetings'
import { Logo } from './Logo'
import { useKvAnimation } from './useKvAnimation'

type Props = {
  isSp: boolean
}

export const Hero = ({ isSp }: Props) => {
  const scrollAreaRef = useRef<HTMLDivElement>(null)
  const backgroundRef = useRef<HTMLDivElement>(null)
  const contentsAreaRef = useRef<HTMLDivElement>(null)
  const leadRef = useRef<HTMLDivElement>(null)

  const [isLoaded, setIsLoaded] = useState(false)

  useLayoutEffect(() => {
    setIsLoaded(true)
  }, [])

  useKvAnimation(scrollAreaRef, backgroundRef, contentsAreaRef, leadRef)

  return (
    <Container>
      <ScrollArea ref={scrollAreaRef}>
        <Background ref={backgroundRef} isSp={isSp} />
        <InnerContainer>
          <ContentsArea ref={contentsAreaRef} isSp={isSp}>
            {isSp ? (
              <>
                <Flower src="/flower.png" alt="flower" />
                <LogoSp src="/logo.png" />
                <Star src="/star.png" alt="star" />
                <BottomStar src="/star.png" alt="star" />
              </>
            ) : (
              isLoaded && (
                <h1>
                  <StyledLogo />
                </h1>
              )
            )}
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
  overflow-x: hidden;
`

const ContentsArea = styled.div<{ isSp: boolean }>`
  position: relative;
  width: 100%;
  height: 100dvh;
  display: flex;
  justify-content: center;
  align-items: ${({ isSp }) => (isSp ? 'flex-start' : 'center')};
`

const Background = styled.div<{ isSp: boolean }>`
  position: absolute;
  top: 0;
  width: 100vw;
  height: 100dvh;

  ${({ isSp }) =>
    isSp
      ? css`
          background: url('/hero.jpg') no-repeat center center;
          background-size: cover;
          transition: background-image 0.7s ease-in;
        `
      : css`
          transition: background-color 0.7s ease-in;
          background-color: var(--accent-light-pink);
        `}
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

const StyledLogo = styled(Logo)`
  width: 300px;
  fill: #fff;
`

const LogoSp = styled.img`
  width: calc(250 / 375 * 100vw);
  margin-top: calc(100 / 375 * 100vw);
`

const Flower = styled.img`
  position: absolute;
  width: 30px;
  top: calc(120 / 375 * 100vw);
  left: calc(50 / 375 * 100vw);
  animation: ${floatAnimation} 7s 0.5s linear infinite;
`

const Star = styled.img`
  position: absolute;
  width: 20px;
  top: calc(100 / 375 * 100vw);
  left: calc(80 / 375 * 100vw);
  transform: rotate(100deg);
  animation: ${floatAnimation} 2s linear infinite;
`

const BottomStar = styled(Star)`
  top: calc(250 / 375 * 100vw);
  left: auto;
  right: calc(45 / 375 * 100vw);
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
  animation: ${fadeInAnimation} 0.6s 6s ease-out both;

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
