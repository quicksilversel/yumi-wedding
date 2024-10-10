import { headers } from 'next/headers'

import HomePage from '@/Pages/Home/Home'
export const dynamic = 'force-dynamic'

const isAndroid = (ua: string): boolean => /android/i.test(ua)
const isIos = (ua: string): boolean => /i(phone|pod|pad)/i.test(ua)
const isSp = (ua: string): boolean => isAndroid(ua) || isIos(ua)

export default function Home() {
  const headersList = headers()

  const userAgent = headersList.get('user-agent') ?? ''

  return <HomePage isSp={isSp(userAgent)} />
}
