import type { Metadata } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'
import Navbar from '@/components/navbar'
import { SpeedInsights } from "@vercel/speed-insights/next"

const _geist = Geist({ subsets: ["latin"] });
const _geistMono = Geist_Mono({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: 'Team ETA | #MadOverMiles',
  description: 'Team ETA - A passionate group of undergraduate engineers from K. J. Somaiya School of Engineering, competing in Shell Eco-Marathon.',
  icons: {
    icon: '/tab-logo.jpg',
    apple: '/tab-logo.jpg',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`font-sans antialiased pt-16`}>
        <Navbar />
        {children}
        <SpeedInsights />
        <Analytics />
      </body>
    </html>
  )
}
