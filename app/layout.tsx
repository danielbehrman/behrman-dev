import type { Metadata } from 'next'
import { GeistSans } from 'geist/font/sans'
/\import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
 })

export const metadata: Metadata = {
  title: 'Dan Behrman',
  description: "Dan Behrman's home base — builder, writer, and chronic learner.",
  metadataBase: new URL('https://behrman.dev'),
  openGraph: {
    title: 'Dan Behrman',
    description: "Dan Behrman's home base — builder, writer, and chronic learner.",
    url: 'https://behrman.dev',
    siteName: 'behrman.dev',
    locale: 'en_US',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${GeistSans.variable} ${inter.variable}`}>
      <body>{children}</body>
    </html>
  )
}
