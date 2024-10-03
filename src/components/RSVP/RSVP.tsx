import { useEffect, useRef } from 'react'

import styled from '@emotion/styled'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'

import { Text } from '../common/Text'
import { Title } from '../common/Title'

gsap.registerPlugin(ScrollTrigger)

export const RSVP = () => {
  const ref = useRef<HTMLDivElement>(null)
  const title = useRef<HTMLDivElement>(null)
  const text = useRef<HTMLDivElement>(null)
  const button = useRef<HTMLAnchorElement>(null)

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
        title.current,
        { opacity: 0, filter: 'blur(30px)' },
        { opacity: 1, filter: 'blur(0px)', duration: 1 },
      )
      .fromTo(
        text.current,
        { opacity: 0, filter: 'blur(30px)' },
        { opacity: 1, filter: 'blur(0px)', duration: 1 },
      )
      .fromTo(
        button.current,
        { opacity: 0, filter: 'blur(30px)' },
        { opacity: 1, filter: 'blur(0px)', duration: 1 },
      )

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <Container ref={ref}>
      <Title ref={title}>Response</Title>
      <div ref={text}>
        <Text>
          お手数ですが 下記お日にち迄に
          <br />
          出欠情報のご連絡をお願い申し上げます
        </Text>
        <Date>
          2024.12.13 <span>FRI</span>
        </Date>
        <Text>
          期日までのご連絡が難しい場合には
          <br />
          ご一報いただけますと幸いです
        </Text>
      </div>
      <Button href="" target="_blank" ref={button}>
        招待状に回答する
      </Button>
    </Container>
  )
}

const Container = styled.section`
  padding: 60px 30px;
  text-align: center;
`

const Date = styled.div`
  font-size: 20px;

  > span {
    font-size: 11px;
  }
`

const Button = styled.a`
  display: inline-block;
  margin: 20px auto 0;
  width: 275px;
  padding: 10px 0;
  background: #000;
  color: #fff;
  border: 1px solid #000;
  text-decoration: none;
  font-size: 16px;
  font-weight: bold;
  transition: background 0.3s;

  &:hover {
    background: #fff;
    color: #000;
    border: 1px solid #fff;
  }
`
