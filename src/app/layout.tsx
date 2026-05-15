import type { Metadata, Viewport } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
  preload: true,
})

export const viewport: Viewport = {
  themeColor: '#0EA5E9',
  width: 'device-width',
  initialScale: 1,
}

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL ?? 'https://nofabi.vercel.app'),
  title: {
    default: "NOFABI — Pakistan's #1 Digital Growth Agency",
    template: "%s | NOFABI — Pakistan's #1 Digital Agency",
  },
  description:
    "NOFABI is Pakistan's leading digital marketing agency offering SEO, Meta Ads, Google Ads, Web Development, Social Media, and Branding services that deliver real growth.",
  keywords: [
    'digital marketing agency Pakistan',
    'SEO Pakistan',
    'social media marketing Pakistan',
    'Meta Ads Pakistan',
    'Google Ads Pakistan',
    'web development Lahore',
    'NOFABI',
    'digital agency Lahore',
  ],
  authors: [{ name: 'NOFABI' }],
  creator: 'NOFABI',
  openGraph: {
    type: 'website',
    locale: 'en_PK',
    siteName: 'NOFABI',
    title: "NOFABI — Pakistan's #1 Digital Growth Agency",
    description:
      "Data-driven digital marketing that grows Pakistani businesses. SEO, paid ads, web development, and branding.",
  },
  twitter: {
    card: 'summary_large_image',
    title: "NOFABI — Pakistan's #1 Digital Growth Agency",
    description: "Data-driven digital marketing that grows Pakistani businesses.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, 'max-video-preview': -1, 'max-image-preview': 'large' },
  },
}

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="font-sans bg-white text-slate-900 antialiased">
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
