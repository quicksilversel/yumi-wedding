import { keyframes } from '@emotion/react'
import styled from '@emotion/styled'

export const Hero = () => {
  return (
    <Container>
      <Scroll>
        <span>Scroll</span>
      </Scroll>
    </Container>
  )
}

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
  height: 100svh;
`

const Scroll = styled.div`
  position: fixed;
  bottom: 0;
  left: 50%;
  color: #fff;
  font-size: 11px;
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
