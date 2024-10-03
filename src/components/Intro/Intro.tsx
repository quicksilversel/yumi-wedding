import { useEffect, useRef } from 'react'

import styled from '@emotion/styled'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'

import { Text } from '../common/Text'
import { Title } from '../common/Title'

gsap.registerPlugin(ScrollTrigger)

export const Intro = () => {
  const ref = useRef<HTMLDivElement>(null)
  const title = useRef<HTMLHeadingElement>(null)
  const ref1 = useRef<HTMLSpanElement>(null)
  const ref2 = useRef<HTMLSpanElement>(null)
  const ref3 = useRef<HTMLSpanElement>(null)

  useEffect(() => {
    gsap
      .timeline({
        scrollTrigger: {
          trigger: ref.current,
          start: 'top bottom',
          toggleActions: 'restart none none reverse',
        },
      })
      .fromTo(
        title.current,
        { opacity: 0, filter: 'blur(30px)' },
        { opacity: 1, filter: 'blur(0px)', duration: 1 },
      )
      .fromTo(
        ref1.current,
        { opacity: 0, filter: 'blur(30px)' },
        { opacity: 1, filter: 'blur(0px)', duration: 1 },
      )
      .fromTo(
        ref2.current,
        { opacity: 0, filter: 'blur(30px)' },
        { opacity: 1, filter: 'blur(0px)', duration: 1 },
      )
      .fromTo(
        ref3.current,
        { opacity: 0, filter: 'blur(30px)' },
        { opacity: 1, filter: 'blur(0px)', duration: 1 },
      )
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <Container ref={ref}>
      <Title ref={title}>Greetings</Title>
      <Text>
        <span ref={ref1}>
          謹啓 発送月の季語の候 皆様におかれましては
          <br />
          益々ご清祥のこととお慶び申し上げます
        </span>
        <br />
        <br />
        <span ref={ref2}>
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
        </span>
        <br />
        <br />
        <span ref={ref3}>
          <Right>謹白</Right>
          <br />
          2024年12月吉日
          <br />
          <br />
          福本　晃汰
          <br />
          宮里　優美
        </span>
      </Text>
    </Container>
  )
}

const Container = styled.section`
  padding: 60px 30px 0;
  text-align: center;
`

const Right = styled.span`
  float: right;
`
