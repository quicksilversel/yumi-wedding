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
  padding: 60px 30px;
  text-align: center;
`

const Date = styled.span`
  display: inline-block;
  color: #fff;
  background-color: var(--accent-green);
  margin: 5px 0;
  padding: 5px 10px;
  line-height: 1;
`

const Button = styled.a`
  display: inline-block;
  margin: 20px auto 0;
  width: 275px;
  padding: 10px 0;
  background: var(--accent-light-pink);
  color: #fff;
  border: 1px solid (--accent-light-pink);
  text-decoration: none;
  font-size: 16px;
  font-weight: bold;
  transition: background 0.3s;

  &:hover {
    background: var(--accent-green);
    color: #000;
    border: 1px solid var(--accent-green);
  }
`
