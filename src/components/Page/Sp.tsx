import styled from '@emotion/styled'

import { Information } from '../Information'
import { Intro } from '../Intro'
import { Message } from '../Message'
import { RSVP } from '../RSVP'

export const Sp = () => {
  return (
    <Container>
      <Intro />
      <Information />
      <Message />
      <RSVP />
    </Container>
  )
}

const Container = styled.main`
  background-color: #fff;
`
