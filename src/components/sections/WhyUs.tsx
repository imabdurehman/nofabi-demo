'use client'

import { motion } from 'framer-motion'
import { CheckCircle } from 'lucide-react'
import SectionHeading from '@/components/ui/SectionHeading'

const reasons = [
  {
    title: 'We explain everything in simple terms',
    detail: "No jargon, no confusion. You always know exactly what we're doing and why.",
  },
  {
    title: 'Data-driven campaigns — every decision backed by numbers',
    detail: 'We test, measure, and optimise relentlessly so your budget works harder.',
  },
  {
    title: '100% focus on your ROI, not vanity metrics',
    detail: "Likes don't pay bills. We track revenue, leads, and conversions.",
  },
  {
    title: 'Based in Pakistan — we understand the local market',
    detail: 'We know Pakistani consumer behaviour, platforms, and buying seasons inside out.',
  },
  {
    title: 'Weekly + monthly reporting — full transparency',
    detail: 'You get a clear picture of performance, spend, and results every single week.',
  },
]

const metrics = [
  { value: '4.2×', label: 'Average ROI for our clients' },
  { value: '68%', label: 'Lower cost-per-lead vs competitors' },
  { value: '2 weeks', label: 'Average onboarding time' },
  { value: '24/7', label: 'Support & reporting access' },
]

export default function WhyUs() {
  return (
    <section className="bg-white py-20 lg:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-start">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 }}
          >
            <SectionHeading
              eyebrow="Why NOFABI"
              title="Why Businesses Choose Us Over Others"
              subtitle="We&apos;re not just another agency. Here&apos;s what makes us different."
              centered={false}
            />
            <ul className="space-y-5 mt-8">
              {reasons.map((reason, i) => (
                <motion.li
                  key={reason.title}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.1 }}
                  className="flex items-start gap-3"
                >
                  <CheckCircle className="w-5 h-5 text-sky-500 mt-0.5 shrink-0" />
                  <div>
                    <p className="font-semibold text-slate-900 text-sm">{reason.title}</p>
                    <p className="text-slate-500 text-sm mt-0.5">{reason.detail}</p>
                  </div>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 }}
            className="grid grid-cols-2 gap-4"
          >
            {metrics.map((metric, i) => (
              <motion.div
                key={metric.label}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                className="bg-sky-50 rounded-2xl p-6 border border-sky-100 hover:border-sky-400 transition-colors duration-200"
              >
                <p className="text-3xl font-extrabold text-sky-500 mb-2">{metric.value}</p>
                <p className="text-slate-600 text-sm leading-snug">{metric.label}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
