import styled from '@emotion/styled'

import { Sp } from './Sp'

export const Pc = () => {
  return (
    <>
      <Wrapper>
        <Container>
          <Sp />
        </Container>
      </Wrapper>
    </>
  )
}

const Wrapper = styled.div`
  max-width: 1280px;
  margin: 0 auto;
`

const Container = styled.div`
  width: 375px;
  margin: 0 auto;
  overflow-x: hidden;
  box-sizing: content-box;
  border-inline: 1px solid #000;
`