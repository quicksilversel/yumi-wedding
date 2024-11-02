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
      <Calendar>
        <Month>January</Month>
        <Grid>
          {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map((day) => (
            <em key={day}>{day}</em>
          ))}
          {[...Array(3)].map((_, i) => (
            <span key={i}>{''}</span>
          ))}
          {[...Array(31)].map((_, i) => (
            <Day key={i} isTargetDate={i + 1 === 13}>
              {i + 1}
            </Day>
          ))}
        </Grid>
      </Calendar>
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

const Calendar = styled.div`
  width: 300px;
  padding: 20px;
  border-radius: 15px;
  margin: 15px auto 0;
  font-size: 14px;
`

const Grid = styled.div`
  margin-top: 25px;
  display: grid;
  grid-template-rows: repeat(5, 1fr);
  grid-template-columns: repeat(7, 1fr);
`

const Month = styled.h3`
  text-transform: uppercase;
  font-family: 'Lato', 'Zen Old Mincho', sans-serif;
  letter-spacing: 0.2em;
`

const Day = styled.span<{ isTargetDate: boolean }>`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  aspect-ratio: 1/1;
  border-radius: 100%;
  background-color: ${({ isTargetDate }) =>
    isTargetDate ? 'var(--accent-light-pink)' : 'transparent'};
  color: ${({ isTargetDate }) => (isTargetDate ? '#fff' : '#333')};
`
