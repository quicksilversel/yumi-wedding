import type { Metadata } from 'next'

const GA_TRACKING_ID = 'G-MBGZMX916L'

export const metadata: Metadata = {
  title: 'ZOZO URL Generator',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <head>
        <script
          async
          src={`https://www.googletagmanager.com/gtag/js?id=${GA_TRACKING_ID}`}
        />
        <script
          id="gtag-init"
          dangerouslySetInnerHTML={{
            __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());

            gtag('config', '${GA_TRACKING_ID}');`,
          }}
        />
      </head>
      <body>{children}</body>
    </html>
  )
}
