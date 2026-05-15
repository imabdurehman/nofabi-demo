'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { motion, AnimatePresence } from 'framer-motion'

const words = ['Digital Marketing', 'Brand Growth', 'Lead Generation', 'SEO Experts']

const circles = [
  { size: 180, border: 'rgba(255,255,255,0.15)' },
  { size: 320, border: 'rgba(255,255,255,0.14)' },
  { size: 480, border: 'rgba(255,255,255,0.12)' },
  { size: 640, border: 'rgba(255,255,255,0.11)' },
  { size: 800, border: 'rgba(255,255,255,0.10)' },
  { size: 960, border: 'rgba(255,255,255,0.09)' },
  { size: 1120, border: 'rgba(255,255,255,0.08)' },
]

export default function Hero() {
  const [wordIndex, setWordIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setWordIndex((prev) => (prev + 1) % words.length)
    }, 2500)
    return () => clearInterval(interval)
  }, [])

  return (
    <section className="relative min-h-[70vh] md:min-h-screen bg-sky-900 flex flex-col items-center justify-center overflow-hidden">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {circles.map((circle, i) => (
          <div
            key={i}
            className="absolute top-1/2 left-1/2 rounded-full -translate-x-1/2 -translate-y-1/2"
            style={{
              width: circle.size,
              height: circle.size,
              border: `1px solid ${circle.border}`,
            }}
          />
        ))}
      </div>

      <div className="relative z-10 text-center px-4 sm:px-6 max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="hidden sm:block"
        >
          <span className="inline-block text-sky-400 text-sm font-semibold tracking-widest uppercase mb-6 border border-sky-400/30 rounded-full px-4 py-1.5">
            Pakistan&apos;s #1 Digital Growth Agency
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-white leading-tight"
        >
          Pakistan&apos;s #1
          <br />
          <span className="relative inline-block min-w-[12ch]">
            <AnimatePresence mode="wait">
              <motion.span
                key={wordIndex}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.4 }}
                className="text-sky-400 inline-block"
              >
                {words[wordIndex]}
              </motion.span>
            </AnimatePresence>
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-6 text-lg md:text-xl text-sky-100 max-w-2xl mx-auto leading-relaxed"
        >
          We help businesses grow online with data-driven strategies, creative content, and campaigns that deliver real, measurable ROI.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.45 }}
          className="mt-10 flex flex-col sm:flex-row gap-4 justify-center"
        >
          <Link
            href="/contact"
            className="bg-sky-500 hover:bg-sky-400 text-white font-semibold px-8 py-4 rounded-full text-base transition-all duration-200 hover:scale-105 active:scale-95 shadow-lg shadow-sky-500/30"
          >
            Get Free Quote
          </Link>
          <Link
            href="/services"
            className="bg-transparent border-2 border-white text-white font-semibold px-8 py-4 rounded-full text-base hover:bg-white hover:text-sky-900 transition-all duration-200 hover:scale-105 active:scale-95"
          >
            See Our Work
          </Link>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
          className="mt-16 flex gap-10 justify-center"
        >
          {[
            { value: '50+', label: 'Happy Clients' },
            { value: '100+', label: 'Projects Done' },
            { value: '95%', label: 'Retention Rate' },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <p className="text-2xl font-bold text-sky-400">{stat.value}</p>
              <p className="text-sky-200 text-xs mt-1">{stat.label}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
