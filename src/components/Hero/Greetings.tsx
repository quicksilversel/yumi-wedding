import { forwardRef, useRef } from 'react'

import styled from '@emotion/styled'

import { Text } from '../common/Text'
import { Title } from '../common/Title'

type Props = {}

export const Greetings = forwardRef<HTMLDivElement, Props>((props, ref) => {
  const title = useRef<HTMLHeadingElement>(null)

  return (
    <Container ref={ref}>
      <Title as="h2" ref={title}>
        Greetings
      </Title>
      <Text>
        謹啓 発送月の季語の候 皆様におかれましては
        <br />
        益々ご清祥のこととお慶び申し上げます
        <br />
        <br />
        このたび 私たちは結婚式を
        <br />
        挙げることとなりました
        <br />
        おいそがしい中と存じますが
        <br />
        ぜひご参列いただき
        <br />
        日頃お世話になっております
        <br />
        皆様と一緒に 喜びのひとときを
        <br />
        過ごさせていただければ幸いに存じます
        <br />
        <br />
        また式後にはささやかではございますが
        <br />
        小宴を催したく存じますので
        <br />
        ぜひご出席賜りますようお願い申し上げます
        <br />
        <br />
        <Right>謹白</Right>
        <br />
        <br />
        2024年12月吉日
        <br />
        <br />
        福本　晃汰
        <br />
        宮里　優美
      </Text>
    </Container>
  )
})

Greetings.displayName = 'Greetings'

const Container = styled.section`
  background-color: #fff;
  color: #000;
  text-align: center;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 2;
  width: 100%;
  height: 100%;
  opacity: 0;
  transition: opacity 0.5s ease-out;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

const Right = styled.span`
  float: right;
`
