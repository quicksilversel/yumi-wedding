type Props = {
  className?: string
}
import { forwardRef } from 'react'

import { keyframes } from '@emotion/react'
import styled from '@emotion/styled'

export const Logo = forwardRef<HTMLDivElement, Props>((props, ref) => {
  return (
    <Container className={props.className} ref={ref}>
      <Date src="/date.png" alt="2024.12.25" />
      <Kota src="/kota.png" alt="Kota" />
      <Yumi src="/yumi.png" alt="Yumi" />
      <Crown src="/crown.png" alt="Crown" />
      <Wedding src="/wedding.png" alt="Wedding" />
      <Celebration src="/celebration.png" alt="Celebration" />
    </Container>
  )
})

Logo.displayName = 'Logo'

const dateAnimation = keyframes`
  0% {
    -webkit-clip-path: inset(0 100% 0 0);
    clip-path: inset(0 100% 0 0);

  }
  100% {
    -webkit-clip-path: inset(0);
    clip-path: inset(0);

  }
`

const fadeInAnimation = keyframes`
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
`

const leftToRightAnimation = keyframes`
  0% {
    -webkit-clip-path: inset(0 100% 0 0);
    clip-path: inset(0 100% 0 0);

  }
  100% {
    -webkit-clip-path: inset(0);
    clip-path: inset(0);
  }
`

const rightToLeftAnimation = keyframes`
  0% {
    -webkit-clip-path: inset(0 0 0 100%);
    clip-path: inset(0 0 0 100%);
  }
  100% {
    -webkit-clip-path: inset(0);
    clip-path: inset(0);
  }
`

const Container = styled.div`
  position: relative;
  width: 300px;
  height: 196px;
`

const Date = styled.img`
  width: 118px;
  position: absolute;
  top: 0;
  left: calc(50% - 2px);
  transform: translateX(-50%);
  animation: ${dateAnimation} 1.5s ease-out both;
  will-change: transform;
`

const Kota = styled.img`
  width: 149px;
  position: absolute;
  top: 43px;
  left: 0;
  animation: ${leftToRightAnimation} 1.25s 2s ease-out both;
  will-change: transform;
`

const Yumi = styled.img`
  position: absolute;
  width: 149px;
  top: 43px;
  right: 0;
  animation: ${rightToLeftAnimation} 1.25s 3.25s ease-out both;
  will-change: transform;
`

const Crown = styled.img`
  width: 42px;
  position: absolute;
  top: 29px;
  left: 50%;
  transform: translateX(-50%);
  animation: ${fadeInAnimation} 1.25s 4.5s ease-out both;
  will-change: transform;
`

const Wedding = styled.img`
  width: 167px;
  position: absolute;
  top: 98px;
  left: calc(50% + 11px);
  transform: translateX(-50%);
  animation: ${fadeInAnimation} 1.25s 5.5s ease-out both;
  will-change: transform;
`

const Celebration = styled.img`
  width: 213px;
  position: absolute;
  top: 150px;
  left: 50%;
  transform: translateX(-50%);
  animation: ${fadeInAnimation} 1.25s 5.5s ease-out both;
  will-change: transform;
`
