'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { Search, Globe, Users, Target, TrendingUp, Palette, Building2, Film } from 'lucide-react'
import SectionHeading from '@/components/ui/SectionHeading'
import ServiceCard from '@/components/ui/ServiceCard'

const services = [
  { slug: 'seo', icon: <Search className="w-6 h-6" />, title: 'SEO Optimization', description: 'Rank higher on Google and drive organic traffic that converts. We build sustainable SEO strategies tailored to your industry.' },
  { slug: 'web-development', icon: <Globe className="w-6 h-6" />, title: 'Web Development', description: 'High-performance websites built for speed, conversions, and mobile-first experiences that your audience will love.' },
  { slug: 'social-media', icon: <Users className="w-6 h-6" />, title: 'Social Media', description: 'Build a loyal audience and turn followers into customers with strategic content and community management.' },
  { slug: 'meta-ads', icon: <Target className="w-6 h-6" />, title: 'Meta Ads', description: 'Facebook and Instagram ad campaigns engineered for maximum reach, engagement, and return on ad spend.' },
  { slug: 'google-ads', icon: <TrendingUp className="w-6 h-6" />, title: 'Google Ads', description: 'Capture high-intent buyers at the exact moment they search. Expert PPC campaigns that scale profitably.' },
  { slug: 'branding', icon: <Palette className="w-6 h-6" />, title: 'Branding & Identity', description: 'From logo to brand guidelines — we craft identities that resonate, differentiate, and are built to last.' },
  { slug: 'property-management', icon: <Building2 className="w-6 h-6" />, title: 'Property Management', description: 'Digital marketing for real estate agencies and property firms. Generate qualified leads and build your property brand online.' },
  { slug: 'content-production', icon: <Film className="w-6 h-6" />, title: 'Content Production', description: 'Video, reels, photography, and written content that tells your story and keeps audiences coming back.' },
]

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08 } },
}

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
}

export default function Services() {
  return (
    <section id="services" className="bg-sky-50 py-20 lg:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <SectionHeading
            eyebrow="What We Do"
            title="Digital Services That Drive Real Growth"
            subtitle="From search to social — we cover every channel your business needs to dominate online."
          />
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5"
        >
          {services.map((service) => (
            <motion.div key={service.slug} variants={itemVariants}>
              <Link href={`/services/${service.slug}`} className="block h-full">
                <ServiceCard
                  icon={service.icon}
                  title={service.title}
                  description={service.description}
                />
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
