import type { Metadata } from 'next'
import Link from 'next/link'
import { Search, Globe, Users, Target, TrendingUp, Palette, Building2, Film } from 'lucide-react'
import Marquee from '@/components/sections/Marquee'

export const metadata: Metadata = {
  title: 'Our Services',
  description:
    'Explore all digital marketing services offered by NOFABI: SEO, Web Development, Social Media, Meta Ads, Google Ads, Branding, Property Management, and Content Production.',
  openGraph: {
    title: "Digital Marketing Services | NOFABI — Pakistan's #1 Digital Agency",
    description:
      'Full-service digital marketing for Pakistani businesses. From SEO to paid ads to web development — NOFABI does it all.',
    url: '/services',
  },
}

const services = [
  {
    slug: 'seo',
    icon: <Search className="w-8 h-8" />,
    title: 'SEO Optimization',
    description: 'Rank higher on Google and drive a consistent stream of organic traffic that converts into real customers.',
    benefits: ['Technical SEO audit and implementation', 'Keyword research and content strategy', 'On-page and off-page optimisation', 'Monthly ranking and traffic reports'],
  },
  {
    slug: 'web-development',
    icon: <Globe className="w-8 h-8" />,
    title: 'Web Development',
    description: 'We build fast, beautiful, conversion-optimised websites that represent your brand professionally and generate results 24/7.',
    benefits: ['Custom Next.js and WordPress builds', 'Mobile-first, responsive design', 'Core Web Vitals optimisation', 'E-commerce and landing page builds'],
  },
  {
    slug: 'social-media',
    icon: <Users className="w-8 h-8" />,
    title: 'Social Media Management',
    description: 'Build a loyal community with strategic content, consistent posting, and active management across all major platforms.',
    benefits: ['Content calendar and scheduling', 'Creative post design and copywriting', 'Community engagement and management', 'Monthly growth and analytics reports'],
  },
  {
    slug: 'meta-ads',
    icon: <Target className="w-8 h-8" />,
    title: 'Meta Ads (Facebook & Instagram)',
    description: 'Data-driven advertising campaigns that reach your exact target audience and maximise your return on ad spend.',
    benefits: ['Audience research and targeting setup', 'Creative ad design and copywriting', 'A/B testing and continuous optimisation', 'Detailed ROAS and conversion tracking'],
  },
  {
    slug: 'google-ads',
    icon: <TrendingUp className="w-8 h-8" />,
    title: 'Google Ads (PPC)',
    description: 'Appear at the top of Google when your ideal customers are searching. Profitable, scalable PPC campaigns.',
    benefits: ['Search, Display, and Shopping campaigns', 'Keyword bidding strategy and optimisation', 'Landing page conversion rate optimisation', 'Weekly performance dashboards'],
  },
  {
    slug: 'branding',
    icon: <Palette className="w-8 h-8" />,
    title: 'Branding & Identity',
    description: 'We craft comprehensive brand identities that communicate your values and create lasting impressions in your market.',
    benefits: ['Logo design and brand mark creation', 'Brand guidelines and style guide', 'Colour palette and typography system', 'Brand messaging and positioning'],
  },
  {
    slug: 'property-management',
    icon: <Building2 className="w-8 h-8" />,
    title: 'Property Management Marketing',
    description: 'Specialised digital marketing for real estate agencies and property firms. Generate qualified leads and build your property brand.',
    benefits: ['Property listing promotion on social media', 'Google & Meta Ads for real estate', 'Real estate SEO for local keywords', 'Lead generation and inquiry tracking'],
  },
  {
    slug: 'content-production',
    icon: <Film className="w-8 h-8" />,
    title: 'Content Production',
    description: 'Compelling video, photography, and written content that tells your brand story and drives engagement across every channel.',
    benefits: ['Short-form video and Reels production', 'Blog writing and SEO content', 'Product photography direction', 'Podcast and long-form video content'],
  },
]

export default function ServicesPage() {
  return (
    <>
      <section className="bg-sky-900 pt-32 pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="inline-block text-sky-400 text-sm font-semibold tracking-widest uppercase mb-4">
            What We Offer
          </span>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white mb-6">
            Digital Services That Drive Real Growth
          </h1>
          <p className="text-sky-200 text-lg md:text-xl max-w-2xl mx-auto">
            Every service we offer is designed around one goal: measurable, sustainable growth for your business.
          </p>
        </div>
      </section>

      <Marquee />

      <section className="bg-white py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((service) => (
              <Link
                key={service.slug}
                href={`/services/${service.slug}`}
                className="border border-sky-100 rounded-2xl p-8 hover:border-sky-400 hover:shadow-lg hover:shadow-sky-100 transition-all duration-200 group block"
              >
                <div className="w-14 h-14 rounded-2xl bg-sky-50 group-hover:bg-sky-500 flex items-center justify-center mb-6 text-sky-500 group-hover:text-white transition-colors duration-200">
                  {service.icon}
                </div>
                <h2 className="text-xl font-bold text-slate-900 mb-3">{service.title}</h2>
                <p className="text-slate-600 leading-relaxed mb-5 text-sm">{service.description}</p>
                <ul className="space-y-2">
                  {service.benefits.map((benefit) => (
                    <li key={benefit} className="flex items-start gap-2 text-sm text-slate-600">
                      <span className="text-sky-500 mt-0.5 shrink-0 font-bold">✓</span>
                      {benefit}
                    </li>
                  ))}
                </ul>
                <span className="mt-6 inline-block text-sky-500 text-sm font-semibold group-hover:underline">
                  Learn more →
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-sky-500 py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-extrabold text-white mb-4">Not Sure Which Service You Need?</h2>
          <p className="text-sky-100 mb-8">
            Book a free 30-minute consultation. We&apos;ll listen to your goals and recommend the right strategy — no hard sell.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 bg-white text-sky-900 font-bold px-8 py-4 rounded-full hover:bg-sky-50 transition-colors duration-200"
          >
            Book Free Consultation
          </Link>
        </div>
      </section>
    </>
  )
}
