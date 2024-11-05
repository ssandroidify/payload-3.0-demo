import Footer from '@/components/Footer'
import Navbar from '@/components/Navbar'
import Providers from '@/components/Providers'
import { cn, constructMetadata } from '@/lib/utils'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { Toaster } from 'sonner'
import './globals.scss'

const inter = Inter({ subsets: ['latin'] })

export const metadata = constructMetadata()

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body
        suppressHydrationWarning={true}
        className={cn('relative h-full font-sans antialiased', inter.className)}
      >
        <main className="relative flex flex-col min-h-screen">
          {/* <Providers> */}
          <Navbar />
          <div className="flex-grow flex-1">{children}</div>
          <Footer />
          {/* </Providers> */}
        </main>

        <Toaster position="top-center" richColors />
      </body>
    </html>
  )
}
