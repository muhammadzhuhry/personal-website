import './globals.css'
import type { Metadata } from 'next'
import { Press_Start_2P } from 'next/font/google';

const pressStart2P = Press_Start_2P({ 
  weight: ['400'],
  subsets: ['latin'] 
});

export const metadata: Metadata = {
  title: 'Muhammad Athallah Zhuhry',
  description: 'Zhuhry personal website made with Nextjs + nes.css',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={pressStart2P.className}>{children}</body>
    </html>
  )
}
