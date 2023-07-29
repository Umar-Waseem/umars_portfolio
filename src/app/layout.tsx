import './globals.css'
import { Lato } from 'next/font/google';
import Head from 'next/head';

const myFont = Lato({
  display: 'swap',
  weight: ["400", "700"],
  subsets: ['latin'],
})

export const metadata = {
  title: 'Umar Waseem',
  description: 'A representation of who Umar Waseem is',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={myFont.className}>{children}</body>
    </html>
  )
}
