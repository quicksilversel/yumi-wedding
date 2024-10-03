import styled from '@emotion/styled'

import { Hero } from '../Hero'
import { Information } from '../Information'
import { Intro } from '../Intro'
import { Message } from '../Message'
import { RSVP } from '../RSVP'

export const Sp = () => {
  return (
    <Container>
      <Hero />
      <Intro />
      <Information />
      <Message />
      <RSVP />
    </Container>
  )
}

const Container = styled.main`
  background-color: #f8f8f8;
`