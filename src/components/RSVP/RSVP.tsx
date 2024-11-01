import { useRef } from 'react'

import styled from '@emotion/styled'

import { useBlurAnimation } from '@/hooks/useBlurAnimation'

import { Text } from '../common/Text'
import { Title } from '../common/Title'

export const RSVP = () => {
  const ref = useRef<HTMLDivElement>(null)

  useBlurAnimation(ref)

  return (
    <Container ref={ref}>
      <Title as="h2">Response</Title>
      <Text>
        お手数ですが 下記お日にち迄に
        <br />
        出欠情報のご連絡をお願い申し上げます
        <br />
        <Date>2024.12.13（金）</Date>
        <br />
        期日までのご連絡が難しい場合には
        <br />
        ご一報いただけますと幸いです
      </Text>
      <Button
        href="https://docs.google.com/forms/d/e/1FAIpQLScZbc5HxNJZ_FhPF8ZFrdwVYGVoq-hcfMgA3BhZhuWZ2ruz0w/viewform"
        target="_blank"
      >
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
  background-color: var(--accent-light-pink);
  color: #fff;
  font-family: 'Lato', 'Zen Old Mincho', sans-serif;
  text-decoration: none;
  font-size: clamp(10px, 3.5vw, 3.5 * 390px / 100);
  transition: background-color 0.3s;

  &:hover {
    background-color: var(--accent-green);
  }
`
