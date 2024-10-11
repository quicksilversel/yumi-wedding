/* eslint-disable @next/next/no-page-custom-font */
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: "Kota & Yumi's Wedding",
  description:
    '謹啓 発送月の季語の候 皆様におかれましては益々ご清祥のこととお慶び申し上げますこのたび 私たちは結婚式を挙げることとなりました。おいそがしい中と存じますがぜひご参列いただき日頃お世話になっております皆様と一緒に 喜びのひとときを過ごさせていただければ幸いに存じますまた式後にはささやかではございますが小宴を催したく存じますのでぜひご出席賜りますようお願い申し上げます',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="ja">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;0,600;0,700;1,300;1,400;1,500;1,600;1,700&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;0,600;0,700;1,300;1,400;1,500;1,600;1,700&family=Lato:ital,wght@0,100;0,300;0,400;0,700;0,900;1,100;1,300;1,400;1,700;1,900&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Zen+Old+Mincho:wght@400;500;600;700;900&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>{children}</body>
    </html>
  )
}
