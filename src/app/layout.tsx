import './globals.css'
import type { Metadata } from 'next'
import { Open_Sans } from 'next/font/google'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Head from 'next/head'

const openSans = Open_Sans({ subsets: ['latin'] })

export const metadata: Metadata = {
  keywords: [
    "ciepły",
    "dom",
    "kościół"
  ],
  icons:{
    icon: "/favicon.png"
  }

}

export default function RootLayout({
  children, 
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pl">
      <body className={openSans.className}>
        <Navbar />
        <div className='flex min-h-screen flex-col'>
          <div className='flex-1 pb-[100px] pt-[50px]'>
            <main className='max-w-normal m-auto'>
              {children}
            </main>
          </div>
          <Footer />
        </div>
      </body>
    </html>
  )
}
