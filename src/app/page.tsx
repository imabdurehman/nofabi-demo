import type { Metadata } from 'next'
import Hero from '@/components/sections/Hero'
import Marquee from '@/components/sections/Marquee'
import About from '@/components/sections/About'
import Services from '@/components/sections/Services'
import Stats from '@/components/sections/Stats'
import WhyUs from '@/components/sections/WhyUs'
import Process from '@/components/sections/Process'
import Testimonials from '@/components/sections/Testimonials'
import FAQ from '@/components/sections/FAQ'
import CTABanner from '@/components/sections/CTABanner'

export const metadata: Metadata = {
  title: "NOFABI — Pakistan's #1 Digital Growth Agency",
  description:
    "NOFABI helps Pakistani businesses grow online with data-driven SEO, Meta Ads, Google Ads, web development, and social media marketing.",
  openGraph: {
    title: "NOFABI — Pakistan's #1 Digital Growth Agency",
    description: "Data-driven digital marketing that grows Pakistani businesses.",
    url: '/',
  },
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  name: 'NOFABI',
  description: "Pakistan's #1 Digital Growth Agency",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? 'https://nofabi.vercel.app',
  telephone: '+92-300-1234567',
  email: 'hello@nofabi.com',
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Lahore',
    addressRegion: 'Punjab',
    addressCountry: 'PK',
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: 31.5204,
    longitude: 74.3587,
  },
  openingHoursSpecification: {
    '@type': 'OpeningHoursSpecification',
    dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
    opens: '09:00',
    closes: '19:00',
  },
  sameAs: [
    'https://facebook.com/nofabi',
    'https://instagram.com/nofabi',
    'https://linkedin.com/company/nofabi',
  ],
}

export default function HomePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Hero />
      <Marquee />
      <About />
      <Services />
      <Stats />
      <WhyUs />
      <Process />
      <Testimonials />
      <FAQ />
      <CTABanner />
    </>
  )
}
