'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronDown } from 'lucide-react'
import SectionHeading from '@/components/ui/SectionHeading'

const faqs = [
  {
    question: 'What services does NOFABI offer?',
    answer: 'NOFABI offers a full suite of digital marketing services including SEO Optimization, Web Development, Social Media Management, Meta Ads (Facebook & Instagram), Google Ads (PPC), Branding & Identity design, Graphic Design, and Content Production. We can manage individual services or build a complete integrated digital strategy for your business.',
  },
  {
    question: 'How long does SEO take to show results?',
    answer: 'SEO is a long-term investment. You can typically expect to see measurable improvements in rankings and traffic within 3–6 months, with significant results at the 6–12 month mark. The timeline depends on your industry competitiveness, current website authority, and target keywords. We provide monthly progress reports so you always know where you stand.',
  },
  {
    question: 'What is your pricing?',
    answer: 'Our pricing varies based on the services you need, your business size, and the scope of work. We offer flexible packages starting from PKR 25,000/month for individual services, and custom plans for full-service digital marketing. Book a free consultation and we will provide a detailed proposal with no hidden costs.',
  },
  {
    question: 'Do you work with small businesses?',
    answer: 'Absolutely. Many of our clients are small and medium-sized businesses. We design scalable strategies that fit your budget and grow as your business grows. We believe every business — regardless of size — deserves access to professional digital marketing that delivers real results.',
  },
  {
    question: 'How do we get started?',
    answer: 'Getting started is simple. Fill out our contact form or send us a WhatsApp message. We will schedule a free 30-minute strategy call to understand your business, goals, and challenges. After the call, we will send you a tailored proposal within 24–48 hours. Once approved, we typically onboard new clients within 1–2 weeks.',
  },
  {
    question: 'Do you provide monthly reports?',
    answer: 'Yes, transparency is one of our core values. Every client receives a detailed monthly performance report covering all key metrics — traffic, rankings, leads, ad spend, ROAS, and more. For ad clients, we also provide weekly performance snapshots. You will always have full visibility into how your investment is performing.',
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
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
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
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
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
