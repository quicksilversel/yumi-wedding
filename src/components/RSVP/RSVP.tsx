import { useRef, useLayoutEffect } from 'react'

import styled from '@emotion/styled'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'

import { Text } from '../common/Text'
import { Title } from '../common/Title'

gsap.registerPlugin(ScrollTrigger)

export const RSVP = () => {
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
      <Title>Response</Title>
      <Text>
        お手数ですが 下記お日にち迄に
        <br />
        出欠情報のご連絡をお願い申し上げます
        <br />
        <Date>2024.12.13 FRI</Date>
        <br />
        期日までのご連絡が難しい場合には
        <br />
        ご一報いただけますと幸いです
      </Text>
      <Button href="" target="_blank">
        招待状に回答する
      </Button>
    </Container>
  )
}

const Container = styled.section`
  padding: 100px 40px;
  text-align: center;
`

const Date = styled.span`
  display: inline-block;
  border-bottom: 2px solid var(--accent-light-pink);
  margin: 5px 0;
  padding: 5px 0;
  line-height: 1;
`

const Button = styled.a`
  display: block;
  width: 275px;
  margin: 20px auto 0;
  padding: 10px 0;
  background: var(--accent-light-pink);
  color: #000;
  font-family: 'Lato', 'Zen Old Mincho', sans-serif;
  text-decoration: none;
  font-size: clamp(10px, 3.5vw, 3.5 * 390px / 100);
  transition: background 0.3s;

  &:hover {
    background: var(--accent-light-pink);
    color: #fff;
    border: 3px solid var(--accent-green);
  }
`
