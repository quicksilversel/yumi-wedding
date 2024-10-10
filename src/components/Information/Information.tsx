import { useEffect, useRef } from 'react'

import styled from '@emotion/styled'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'

import { SubTitle } from '../common/SubTitle'
import { Title } from '../common/Title'

gsap.registerPlugin(ScrollTrigger)

export const Information = () => {
  const ref = useRef<HTMLDivElement>(null)
  const title = useRef<HTMLDivElement>(null)
  const info = useRef<HTMLDivElement>(null)

  useEffect(() => {
    gsap
      .timeline({
        scrollTrigger: {
          trigger: ref.current,
          start: 'top bottom',
          toggleActions: 'play complete none none',
        },
      })
      .fromTo(
        title.current,
        { opacity: 0, filter: 'blur(30px)' },
        { opacity: 1, filter: 'blur(0px)', duration: 1 },
      )
      .fromTo(
        title.current,
        { opacity: 0, filter: 'blur(30px)' },
        { opacity: 1, filter: 'blur(0px)', duration: 1 },
      )
      .fromTo(
        info.current,
        { opacity: 0, filter: 'blur(30px)' },
        { opacity: 1, filter: 'blur(0px)', duration: 1 },
      )

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <Container ref={ref}>
      <div ref={title}>
        <Title>Information</Title>
        <SubTitle>Details of our special day</SubTitle>
      </div>
      <Info ref={info}>
        <InfoItem>
          <InfoHead>日時</InfoHead>
          <InfoBody>2025年1月13日（月）</InfoBody>
        </InfoItem>
        <InfoItem>
          <InfoHead>受付</InfoHead>
          <InfoBody>14:30</InfoBody>
        </InfoItem>
        <InfoItem>
          <InfoHead>挙式</InfoHead>
          <InfoBody>15:00</InfoBody>
        </InfoItem>
        <InfoItem>
          <InfoHead>披露宴</InfoHead>
          <InfoBody>16:00</InfoBody>
        </InfoItem>
        <InfoItem>
          <InfoHead>場所</InfoHead>
          <InfoBody>鶴見ノ森迎賓館</InfoBody>
        </InfoItem>
        <InfoItem>
          <InfoHead>住所</InfoHead>
          <InfoBody>大阪府大阪市鶴見区緑地公園2-163</InfoBody>
        </InfoItem>
        <InfoItem>
          <InfoHead />
          <InfoBody>
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
          </InfoBody>
        </InfoItem>
        <InfoItem>
          <InfoHead>電話番号</InfoHead>
          <InfoBody>06-6914-5515</InfoBody>
        </InfoItem>
      </Info>
    </Container>
  )
}

const Container = styled.section`
  padding: 60px 20px 0;
  text-align: center;
`

const Info = styled.div`
  display: flex;
  flex-direction: column;
  margin: 30px 20px 0;
  font-size: 11px;
  line-height: 1;
  background: #f8f8f8;
  padding: 20px;
`

const InfoItem = styled.div`
  display: flex;
  height: 22px;
`

const InfoHead = styled.div`
  width: 60px;
  text-align: justify;
  margin-top: 5px;

  &::after {
    display: inline-block;
    width: 100%;
    height: 0;
    content: '';
  }
`

const InfoBody = styled.div`
  line-height: 2;
  margin-left: 20px;
`

const Anchor = styled.a`
  display: flex;
  align-items: center;
  color: #333;
  font-weight: bold;
  text-decoration: underline;

  svg {
    margin-left: 5px;
  }
`
