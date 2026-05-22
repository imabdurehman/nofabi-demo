'use client'

import { motion } from 'framer-motion'

export default function CTABanner() {
  return (
    <section className="bg-sky-500 py-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-white mb-4 leading-tight">
            Ready to Grow Your Business?
          </h2>
          <p className="text-sky-100 text-lg md:text-xl mb-10 max-w-xl mx-auto">
            Book a free 30-minute strategy call. No pressure, no commitment — just a conversation about how we can help you grow.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <motion.a
              href="https://wa.me/923174941609"
              target="_blank"
              rel="noopener noreferrer"
              animate={{ scale: [1, 1.04, 1] }}
              transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
              className="inline-flex items-center gap-3 bg-white text-sky-900 font-bold px-8 py-4 rounded-full text-base hover:bg-sky-50 transition-colors duration-200 shadow-lg shadow-sky-600/20"
            >
              <span className="text-xl">💬</span>
              Chat on WhatsApp
            </motion.a>

            <a
              href="/contact"
              className="inline-flex items-center gap-2 border-2 border-white text-white font-semibold px-8 py-4 rounded-full text-base hover:bg-white hover:text-sky-900 transition-all duration-200"
            >
              Send Us a Message
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
