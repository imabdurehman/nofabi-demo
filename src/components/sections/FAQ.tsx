'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronDown } from 'lucide-react'
import SectionHeading from '@/components/ui/SectionHeading'

const faqs = [
  {
    question: 'What services does NOFABI offer?',
    answer: 'NOFABI offers SEO Optimization, Web Development, Social Media Management, Meta Ads, Google Ads, Branding & Identity, Graphic Design, Content Production, and Property Management. We can handle individual services or build a complete integrated digital strategy tailored to your business.',
  },
  {
    question: 'Do you work with small businesses?',
    answer: 'Absolutely. Many of our clients are small and medium-sized businesses. We design scalable strategies that fit your goals and grow alongside your business. Every business — regardless of size — deserves professional digital marketing that delivers real, measurable results.',
  },
  {
    question: 'How do we get started?',
    answer: 'Getting started is simple — fill out our contact form, send us a WhatsApp message, or email us directly at nofabiofficial@gmail.com. We schedule a free 30-minute strategy call to understand your business and goals, then send a tailored proposal within 24–48 hours. Onboarding typically takes 1–2 weeks after approval.',
  },
  {
    question: 'How much does it cost?',
    answer: 'Every project is different — pricing depends on the scope of work, the services you need, and your business goals. We do not offer fixed packages because every client deserves a strategy built around their specific situation. Reach out for a free consultation and we will provide a clear, tailored proposal with no hidden costs.',
  },
  {
    question: 'Do you provide monthly reports?',
    answer: 'Yes, transparency is one of our core values. Every client receives a detailed monthly performance report covering all key metrics — traffic, rankings, leads, ad spend, ROAS, and more. Ad clients also get weekly snapshots so you always have full visibility into how your investment is performing.',
  },
]

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  const toggle = (i: number) => setOpenIndex(openIndex === i ? null : i)

  return (
    <section className="bg-sky-50 py-20 lg:py-28">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <SectionHeading
            eyebrow="FAQ"
            title="Frequently Asked Questions"
            subtitle="Everything you need to know before working with us."
          />
        </motion.div>

        <div className="space-y-3">
          {faqs.map((faq, i) => (
            <motion.div
              key={faq.question}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: i * 0.05 }}
              className="bg-white rounded-2xl border border-sky-100 overflow-hidden"
            >
              <button
                onClick={() => toggle(i)}
                className="w-full flex items-center justify-between gap-4 px-6 py-5 text-left hover:bg-sky-50 transition-colors duration-200"
                aria-expanded={openIndex === i}
              >
                <span className="font-semibold text-slate-900 text-sm md:text-base">{faq.question}</span>
                <motion.span
                  animate={{ rotate: openIndex === i ? 180 : 0 }}
                  transition={{ duration: 0.25 }}
                  className="text-sky-500 shrink-0"
                >
                  <ChevronDown className="w-5 h-5" />
                </motion.span>
              </button>

              <AnimatePresence initial={false}>
                {openIndex === i && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="px-6 pb-5 text-slate-600 text-sm leading-relaxed border-t border-sky-100 pt-4">
                      {faq.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
