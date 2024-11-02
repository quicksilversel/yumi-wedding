import { useRef } from 'react'

import { keyframes } from '@emotion/react'
import styled from '@emotion/styled'

import { rotateAnimation } from '@/assets/animation'
import { useBlurAnimation } from '@/hooks/useBlurAnimation'

import { Text } from '../common/Text'
import { titleCss } from '../common/Title'

export const Date = () => {
  const ref = useRef<HTMLDivElement>(null)

  useBlurAnimation(ref)

  return (
    <Container ref={ref}>
      <Flower src="/flower.png" alt="flower" />
      <Star src="/star.png" alt="star" />
      <Title>DATE</Title>
      <Text>
        2025年1月13日（月）
        <br />
        受付 14:30
        <br />
        挙式 15:00
        <br />
        披露宴 16:00
      </Text>
    </Container>
  )
}

const Title = styled.h2`
  ${titleCss}
`

const floatAnimation = () => keyframes`
0% {
  transform: translateY(0) rotate(-15deg);
}
50% {
  transform: translateY(-3px) rotate(-15deg);
}
100% {
  transform: translateY(0) rotate(-15deg);
}
`

const Container = styled.div`
  position: relative;
`

const Flower = styled.img`
  position: absolute;
  width: 30px;
  top: -20px;
  left: calc(50% - 120px);
  animation: ${rotateAnimation} 7s linear infinite;
`

const Star = styled.img`
  position: absolute;
  width: 15px;
  top: 30px;
  left: calc(50% - 140px);
  transform: rotate(100deg);
  animation: ${floatAnimation} 2s linear infinite;
`
