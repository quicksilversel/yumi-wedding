import styled from '@emotion/styled'

import { Date } from './Date'
import { Place } from './Place'

export const Information = () => {
  return (
    <Container>
      <Date />
      <Place />
    </Container>
  )
}

const Container = styled.section`
  padding: 60px 20px 0;
  text-align: center;
`
