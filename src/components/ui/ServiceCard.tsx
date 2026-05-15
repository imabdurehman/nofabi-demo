'use client'

import { motion } from 'framer-motion'

interface ServiceCardProps {
  icon: React.ReactNode
  title: string
  description: string
  benefits?: string[]
  detailed?: boolean
}

export default function ServiceCard({
  icon,
  title,
  description,
  benefits,
  detailed = false,
}: ServiceCardProps) {
  return (
    <motion.div
      whileHover={{ y: -6, boxShadow: '0 20px 40px rgba(14,165,233,0.15)' }}
      transition={{ duration: 0.2 }}
      className="bg-white rounded-2xl p-6 border border-sky-100 hover:border-sky-400 transition-colors duration-200 flex flex-col h-full"
    >
      <div className="w-12 h-12 rounded-xl bg-sky-50 flex items-center justify-center mb-4 text-sky-500">
        {icon}
      </div>
      <h3 className="text-lg font-bold text-slate-900 mb-2">{title}</h3>
      <p className="text-slate-600 text-sm leading-relaxed flex-1">{description}</p>
      {detailed && benefits && benefits.length > 0 && (
        <ul className="mt-4 space-y-2">
          {benefits.map((benefit) => (
            <li key={benefit} className="flex items-start gap-2 text-sm text-slate-600">
              <span className="text-sky-500 mt-0.5 shrink-0">✓</span>
              {benefit}
            </li>
          ))}
        </ul>
      )}
    </motion.div>
  )
}
