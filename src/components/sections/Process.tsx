'use client'

import { motion } from 'framer-motion'
import { Lightbulb, Map, Rocket } from 'lucide-react'
import SectionHeading from '@/components/ui/SectionHeading'

const steps = [
  {
    number: '01',
    icon: <Lightbulb className="w-7 h-7" />,
    title: 'Discovery',
    description: 'We start by deeply understanding your business, goals, competitors, and target audience through a thorough audit and strategy session.',
  },
  {
    number: '02',
    icon: <Map className="w-7 h-7" />,
    title: 'Strategy',
    description: 'We build a custom growth roadmap — channels, content calendar, ad budgets, and KPIs — all tailored to your specific business objectives.',
  },
  {
    number: '03',
    icon: <Rocket className="w-7 h-7" />,
    title: 'Execution',
    description: 'We launch, monitor, and continuously optimise every campaign, delivering weekly updates and monthly performance reviews with full transparency.',
  },
]

export default function Process() {
  return (
    <section className="bg-sky-50 py-20 lg:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <SectionHeading
            eyebrow="Our Process"
            title="How We Grow Your Business"
            subtitle="A proven 3-step framework that turns strategy into measurable results."
          />
        </motion.div>

        <div className="relative">
          <div className="hidden lg:block absolute top-12 left-[calc(16.67%+2rem)] right-[calc(16.67%+2rem)] h-0.5 bg-sky-200" aria-hidden="true" />

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {steps.map((step, i) => (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.15 }}
                className="flex flex-col items-center text-center"
              >
                <div className="relative mb-6">
                  <div className="w-24 h-24 rounded-full bg-sky-500 flex items-center justify-center text-white shadow-lg shadow-sky-500/30">
                    {step.icon}
                  </div>
                  <span className="absolute -top-2 -right-2 w-7 h-7 rounded-full bg-sky-900 text-white text-xs font-bold flex items-center justify-center">
                    {step.number}
                  </span>
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">{step.title}</h3>
                <p className="text-slate-600 leading-relaxed text-sm max-w-xs">{step.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
