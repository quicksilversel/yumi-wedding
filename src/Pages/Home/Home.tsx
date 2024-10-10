'use client'

import { Top } from '@/components/Page/Top'
import { GlobalStyles } from '@/components/styles/GlobalStyles'

type Props = {
  isSp: boolean
}
const HomePage = (props: Props) => {
  return (
    <>
      <GlobalStyles />
      <Top isSp={props.isSp} />
    </>
  )
}

export default HomePage
