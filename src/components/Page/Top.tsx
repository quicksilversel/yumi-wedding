import styled from '@emotion/styled'

import { Pc } from './Pc'
import { Sp } from './Sp'

import { Hero } from '../Hero'

type Props = {
  isSp: boolean
}

export const Top = ({ isSp }: Props) => {
  return (
    <Container>
      <Hero />
      {isSp ? <Sp /> : <Pc />}
    </Container>
  )
}

const Container = styled.main`
  --accent-light-pink: #f5b2ac;
  --accent-green: #caf5ab;

  font-family: 'Lato', 'Zen Old Mincho', sans-serif;
`
