import styled from '@emotion/styled'

export const BackgroundSp = () => {
  return (
    <Container>
      <BackgroundImage src="/bg-sp.jpg" alt="background" />
    </Container>
  )
}
const Container = styled.section`
  position: fixed;
  inset: 0;
  width: 100vw;
  height: 100svh;
  background-color: black;
  z-index: -1;
`

const BackgroundImage = styled.img`
  position: fixed;
  inset: 0;
  width: 100vw;
  min-width: 1000px;
  height: 100vh;
`
