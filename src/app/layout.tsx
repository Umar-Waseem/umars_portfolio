import './globals.css'
import { Raleway } from 'next/font/google';
import Head from 'next/head';

const myFont = Raleway({
  display: 'swap',
  weight: ["400"],
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
