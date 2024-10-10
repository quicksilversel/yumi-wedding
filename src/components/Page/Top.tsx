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

const Container = styled.div`
  --accent-light-pink: rgb(211, 174, 198);
  --accent-pink: rgb(204, 98, 129);
  --accent-green: rgb(142, 192, 58);
`
