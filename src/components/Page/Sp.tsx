import styled from '@emotion/styled'

import { Information } from '../Information'
import { Message } from '../Message'
import { RSVP } from '../RSVP'

export const Sp = () => {
  return (
    <Container>
      <Information />
      <Message />
      <RSVP />
    </Container>
  )
}

const Container = styled.div`
  background-color: #fff;
  overflow-x: hidden;
`
