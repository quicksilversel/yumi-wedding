import { useLayoutEffect, useRef } from 'react'

import styled from '@emotion/styled'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'

import { Text } from '../common/Text'
import { Title } from '../common/Title'

gsap.registerPlugin(ScrollTrigger)

export const Message = () => {
  const ref = useRef<HTMLDivElement>(null)

  useLayoutEffect(() => {
    if (!ref.current) return
    gsap
      .timeline({
        scrollTrigger: {
          trigger: ref.current,
          start: 'top bottom',
          toggleActions: 'play complete none none',
        },
      })
      .fromTo(
        ref.current,
        { opacity: 0, filter: 'blur(30px)' },
        { opacity: 1, filter: 'blur(0px)', duration: 1 },
      )

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <Container ref={ref}>
      <Title as="h2">Message</Title>
      <Text>
        当日挙式からご列席いただきたいと存じますので
        <br />
        挙式15分前迄におこしくださいますよう
        <br />
        お願い申し上げます
        <br />
        迎賓館内には駐車場がございません
        <br />
        緑地公園又は近隣の有料駐車場を
        <br />
        ご利用いただきますよう何卒ご了承ください
      </Text>
    </Container>
  )
}

const Container = styled.section`
  padding: 110px 30px 0;
  text-align: center;
`
