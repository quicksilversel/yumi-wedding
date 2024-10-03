import styled from '@emotion/styled'

export const Background = () => {
  return <Container />
}
const Container = styled.section`
  position: fixed;
  inset: 0;
  width: 100vw;
  height: 100svh;
  background-color: black;
  z-index: -1;
`
