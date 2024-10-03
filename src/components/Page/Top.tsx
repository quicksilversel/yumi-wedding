import { useLayoutEffect, useState } from 'react'

import { Pc } from './Pc'
import { Sp } from './Sp'

import { BackgroundPc, BackgroundSp } from '../Background'
import { Hero } from '../Hero'

const isAndroid = (ua: string): boolean => /android/.test(ua)
const isIos = (ua: string): boolean => /i(phone|pod|pad)/.test(ua)

const isSp = (ua: string): boolean => isAndroid(ua) || isIos(ua)

export const Top = () => {
  const [ua, setUa] = useState<string>()

  useLayoutEffect(() => {
    setUa(window.navigator.userAgent.toLowerCase())
  }, [])

  return (
    <>
      {ua && isSp(ua) ? <BackgroundSp /> : <BackgroundPc />}
      {ua && isSp(ua) && <Hero />}
      {ua && isSp(ua) ? <Sp /> : <Pc />}
    </>
  )
}
