import { useEffect, useState } from 'react'

import styled from '@emotion/styled'

import { Pc } from './Pc'
import { Sp } from './Sp'

const isAndroid = (ua: string): boolean => /android/.test(ua)
const isIos = (ua: string): boolean => /i(phone|pod|pad)/.test(ua)

const isSp = (ua: string): boolean => isAndroid(ua) || isIos(ua)

export const Top = () => {
  const [ua, setUa] = useState<string>()

  useEffect(() => {
    setUa(window.navigator.userAgent.toLowerCase())
  }, [])

  return ua && isSp(ua) ? <Sp /> : <Pc />
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
