import { useRef } from 'react'

import styled from '@emotion/styled'

//import { useSideScrollAnimation } from '@/hooks/useSideScrollAnimation'
import { useBlurAnimation } from '@/hooks/useBlurAnimation'

import { Text } from '../common/Text'
import { titleCss } from '../common/Title'

export const Information = () => {
  const ref = useRef<HTMLDivElement>(null)
  const dateRef = useRef<HTMLDivElement>(null)

  //useSideScrollAnimation(ref, '-450')

  useBlurAnimation(ref)
  useBlurAnimation(dateRef)

  return (
    <Container>
      <div ref={dateRef}>
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
      </div>
      <Place ref={ref}>
        <Title>PLACE</Title>
        <Text>
          鶴見ノ森迎賓館
          <br />
          大阪府大阪市鶴見区緑地公園2-163
          <br />
          06-6914-5515
          <br />
          <Anchor
            href="https://www.google.com/maps/place/%E3%80%92538-0036+%E5%A4%A7%E9%98%AA%E5%BA%9C%E5%A4%A7%E9%98%AA%E5%B8%82%E9%B6%B4%E8%A6%8B%E5%8C%BA%E7%B7%91%E5%9C%B0%E5%85%AC%E5%9C%92%EF%BC%92+%E9%B6%B4%E8%A6%8B%E3%83%8E%E6%A3%AE%E8%BF%8E%E8%B3%93%E9%A4%A8/@34.7124237,135.5808751,19z/data=!3m1!4b1!4m2!3m1!1s0x6000e0480df58de7:0x4cb556679e01ee9e"
            target="_blank"
          >
            Google Map
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="12"
              height="10"
              viewBox="0 0 12 10"
              fill="none"
            >
              <path
                d="M10.2524 5.89684C9.90324 5.89684 9.61988 6.15138 9.61988 6.46502V8.19229C9.61988 8.56048 9.28592 8.86048 8.87353 8.86048H2.35119C1.94133 8.86048 1.60484 8.56048 1.60484 8.19229V2.33775C1.60484 1.96957 1.9388 1.66957 2.35119 1.66957H4.27652C4.62566 1.66957 4.90902 1.41502 4.90902 1.10138C4.90902 0.787749 4.62566 0.533203 4.27652 0.533203H2.35119C1.24052 0.533203 0.339844 1.34229 0.339844 2.33775V8.19229C0.339844 9.18775 1.24052 9.99684 2.35119 9.99684H8.87606C9.9842 9.99684 10.8874 9.18775 10.8874 8.19229V6.46502C10.8874 6.15138 10.6041 5.89684 10.2549 5.89684H10.2524Z"
                fill="black"
              />
              <path
                d="M10.8375 -0.00195312H7.25252C6.90338 -0.00195312 6.62002 0.252592 6.62002 0.566229C6.62002 0.879865 6.90338 1.13441 7.25252 1.13441H9.31194L3.61438 6.24805C3.49041 6.35941 3.42969 6.50487 3.42969 6.65032C3.42969 6.79577 3.49041 6.94123 3.61438 7.05259C3.73835 7.16396 3.90027 7.2185 4.06219 7.2185C4.22411 7.2185 4.38603 7.16396 4.51 7.05259L10.205 1.93896V3.78441C10.205 4.09805 10.4884 4.35259 10.8375 4.35259C11.1867 4.35259 11.47 4.09805 11.47 3.78441V0.566229C11.47 0.252592 11.1867 -0.00195312 10.8375 -0.00195312Z"
                fill="black"
              />
            </svg>
          </Anchor>
        </Text>
      </Place>
    </Container>
  )
}

const Title = styled.h2`
  ${titleCss}
`

const Container = styled.section`
  padding: 60px 20px 0;
  text-align: center;
`

const Place = styled.div`
  margin-top: 120px;
`

const Anchor = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  color: #333;
  font-weight: bold;
  text-decoration: underline;

  svg {
    margin-left: 5px;
  }
`
