import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

import ThemeSwitch from '~/components/ThemeSwitch'
import Header from '~/components/Header'
import ThemeContextProvider from '~/contexts/ThemeContext'
import './globals.css'
import ActiveSectionContextProvider from '~/contexts/ActiveSectionContext'
import Footer from '~/components/Footer'
import { calculateYearsOfExperience } from '~/lib/helpers'

const inter = Inter({ subsets: ['latin'] })

export function generateMetadata(): Metadata {
  return {
    title: 'NTT | Personal Portfolio',
    description: `I'm frontend developer with ${calculateYearsOfExperience()} of experience`,
  }
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="!scroll-smooth">
      <body
        className={`${inter.className} relative bg-gray-50 pt-28  text-gray-950 dark:bg-gray-900 dark:text-gray-50 dark:text-opacity-90 sm:pt-36`}
      >
        <div className="absolute right-[11rem] top-[-6rem] -z-10 h-[31.25rem] w-[31.25rem] rounded-full bg-[#fbe2e3] blur-[10rem] dark:bg-[#946263] sm:w-[68.75rem]" />
        <div className="absolute left-[-35rem] top-[-1rem] -z-10 h-[31.25rem] w-[50rem] rounded-full bg-[#dbd7fb] blur-[10rem] dark:bg-[#676394] sm:w-[68.75rem] md:left-[-33rem] lg:left-[-28rem] xl:left-[-15rem] 2xl:left-[-5rem]" />
        <ThemeContextProvider>
          <ActiveSectionContextProvider>
            <Header />
            {children}
            <Footer />
            <ThemeSwitch />
          </ActiveSectionContextProvider>
        </ThemeContextProvider>
      </body>
    </html>
  )
}
