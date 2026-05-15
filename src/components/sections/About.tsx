'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'

const stats = [
  { value: '50+', label: 'Clients' },
  { value: '3+', label: 'Years' },
  { value: '100+', label: 'Projects' },
  { value: '95%', label: 'Retention' },
]

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
}

function AboutIllustration() {
  return (
    <svg viewBox="0 0 480 480" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full max-h-96" aria-hidden="true">
      <circle cx="240" cy="240" r="200" fill="#E0F2FE" />
      <circle cx="240" cy="240" r="140" fill="#BAE6FD" />
      <circle cx="240" cy="240" r="80" fill="#0EA5E9" opacity="0.3" />
      <circle cx="240" cy="240" r="40" fill="#0EA5E9" />
      <circle cx="120" cy="160" r="35" fill="#0C4A6E" />
      <circle cx="360" cy="160" r="25" fill="#0EA5E9" opacity="0.6" />
      <circle cx="100" cy="320" r="20" fill="#0EA5E9" opacity="0.4" />
      <circle cx="380" cy="300" r="30" fill="#0C4A6E" opacity="0.6" />
      <rect x="200" y="80" width="80" height="8" rx="4" fill="#0C4A6E" opacity="0.3" />
      <rect x="170" y="100" width="140" height="6" rx="3" fill="#0EA5E9" opacity="0.4" />
      <path d="M140 240 L240 180 L340 240 L240 300 Z" fill="#0C4A6E" opacity="0.15" />
      <path d="M180 380 Q240 340 300 380" stroke="#0EA5E9" strokeWidth="3" fill="none" strokeLinecap="round" />
      <circle cx="180" cy="380" r="6" fill="#0EA5E9" />
      <circle cx="300" cy="380" r="6" fill="#0EA5E9" />
      <circle cx="240" cy="350" r="8" fill="#0C4A6E" />
      <rect x="60" y="200" width="60" height="6" rx="3" fill="#0C4A6E" opacity="0.2" />
      <rect x="360" y="220" width="60" height="6" rx="3" fill="#0C4A6E" opacity="0.2" />
    </svg>
  )
}

export default function About() {
  return (
    <section id="about" className="bg-white py-20 lg:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={fadeUp}
          >
            <span className="inline-block text-sky-500 text-sm font-semibold tracking-widest uppercase mb-4">
              About NOFABI
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 leading-tight mb-6">
              Pakistan&apos;s Most Trusted Digital Agency
            </h2>
            <div className="space-y-4 text-slate-600 leading-relaxed">
              <p>
                NOFABI was founded with one mission: to make world-class digital marketing accessible to Pakistani businesses of all sizes. We&apos;ve helped startups launch, local brands scale nationally, and enterprises dominate search rankings.
              </p>
              <p>
                Our team combines deep expertise in SEO, paid media, web development, and creative content to build comprehensive growth systems — not just campaigns. Every strategy we build is rooted in data and designed to generate real revenue.
              </p>
              <p>
                Based in Lahore but serving clients across Pakistan, the Middle East, and beyond, NOFABI is where ambitious businesses come to grow.
              </p>
            </div>

            <div className="grid grid-cols-4 gap-4 mt-8 mb-8">
              {stats.map((stat) => (
                <div key={stat.label} className="text-center">
                  <p className="text-2xl font-extrabold text-sky-500">{stat.value}</p>
                  <p className="text-slate-500 text-xs mt-1 font-medium">{stat.label}</p>
                </div>
              ))}
            </div>

            <Link
              href="/about"
              className="inline-flex items-center gap-2 bg-sky-500 hover:bg-sky-400 text-white font-semibold px-6 py-3 rounded-full transition-all duration-200 hover:scale-105"
            >
              Learn More About Us
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="flex items-center justify-center"
          >
            <AboutIllustration />
          </motion.div>
        </div>
      </div>
    </section>
  )
}
