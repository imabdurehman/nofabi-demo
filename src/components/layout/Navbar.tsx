'use client'

import { useState, useEffect, useRef } from 'react'
import Link from 'next/link'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, ChevronDown } from 'lucide-react'

const serviceLinks = [
  { href: '/services/seo', label: 'SEO Optimization' },
  { href: '/services/web-development', label: 'Web Development' },
  { href: '/services/social-media', label: 'Social Media Management' },
  { href: '/services/meta-ads', label: 'Meta Ads' },
  { href: '/services/google-ads', label: 'Google Ads' },
  { href: '/services/branding', label: 'Branding & Identity' },
  { href: '/services/graphic-design', label: 'Graphic Design' },
  { href: '/services/content-production', label: 'Content Production' },
  { href: '/services/property-management', label: 'Property Management' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const [servicesOpen, setServicesOpen] = useState(false)
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false)
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 80)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const openDropdown = () => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current)
    setServicesOpen(true)
  }

  const closeDropdown = () => {
    timeoutRef.current = setTimeout(() => setServicesOpen(false), 120)
  }

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-sky-900 shadow-lg shadow-sky-900/20' : 'bg-sky-900/10 backdrop-blur-md'
      }`}
    >
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          <Link href="/" className="text-2xl text-white tracking-tight outline-none">
            <span className="font-black">N</span><span className="font-light">OFABI</span>
          </Link>

          <ul className="hidden md:flex items-center gap-8">
            <li>
              <Link href="/" className="text-white/90 hover:text-sky-400 text-sm font-medium transition-colors duration-200">
                Home
              </Link>
            </li>
            <li>
              <Link href="/about" className="text-white/90 hover:text-sky-400 text-sm font-medium transition-colors duration-200">
                About
              </Link>
            </li>

            {/* Services with dropdown */}
            <li
              className="relative"
              onMouseEnter={openDropdown}
              onMouseLeave={closeDropdown}
            >
              <button
                className="flex items-center gap-1 text-white/90 hover:text-sky-400 text-sm font-medium transition-colors duration-200 cursor-pointer"
                onClick={() => setServicesOpen((v) => !v)}
              >
                Services
                <motion.span
                  animate={{ rotate: servicesOpen ? 180 : 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <ChevronDown className="w-4 h-4" />
                </motion.span>
              </button>

              <AnimatePresence>
                {servicesOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 8 }}
                    transition={{ duration: 0.18 }}
                    className="absolute top-full left-1/2 -translate-x-1/2 mt-3 w-56 rounded-2xl overflow-hidden shadow-xl shadow-black/30 z-50"
                    style={{ backgroundColor: '#0c1a2e', border: '1px solid rgba(255,255,255,0.08)' }}
                    onMouseEnter={openDropdown}
                    onMouseLeave={closeDropdown}
                  >
                    <div className="py-2">
                      {serviceLinks.map((s) => (
                        <Link
                          key={s.href}
                          href={s.href}
                          onClick={() => setServicesOpen(false)}
                          className="block px-4 py-2.5 text-white/80 hover:text-sky-400 hover:bg-white/5 text-sm transition-colors duration-150"
                        >
                          {s.label}
                        </Link>
                      ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </li>

            <li>
              <Link href="/faq" className="text-white/90 hover:text-sky-400 text-sm font-medium transition-colors duration-200">
                FAQs
              </Link>
            </li>
            <li>
              <Link href="/contact" className="text-white/90 hover:text-sky-400 text-sm font-medium transition-colors duration-200">
                Contact
              </Link>
            </li>
          </ul>

          <div className="hidden md:flex items-center gap-4">
            <Link
              href="/contact"
              className="bg-sky-500 hover:bg-sky-400 text-white text-sm font-semibold px-5 py-2.5 rounded-full transition-colors duration-200"
            >
              Get Free Quote
            </Link>
          </div>

          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="md:hidden text-white p-2 rounded-lg hover:bg-white/10 transition-colors"
            aria-label="Toggle mobile menu"
          >
            {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25 }}
            className="md:hidden bg-sky-900 border-t border-sky-800 overflow-hidden"
          >
            <div className="px-4 py-4 flex flex-col gap-1">
              <Link href="/" onClick={() => setMobileOpen(false)} className="text-white/90 hover:text-sky-400 font-medium py-3 px-3 rounded-lg hover:bg-white/5 transition-colors">
                Home
              </Link>
              <Link href="/about" onClick={() => setMobileOpen(false)} className="text-white/90 hover:text-sky-400 font-medium py-3 px-3 rounded-lg hover:bg-white/5 transition-colors">
                About
              </Link>

              {/* Mobile services accordion */}
              <button
                onClick={() => setMobileServicesOpen((v) => !v)}
                className="flex items-center justify-between text-white/90 hover:text-sky-400 font-medium py-3 px-3 rounded-lg hover:bg-white/5 transition-colors text-left"
              >
                Services
                <motion.span animate={{ rotate: mobileServicesOpen ? 180 : 0 }} transition={{ duration: 0.2 }}>
                  <ChevronDown className="w-4 h-4" />
                </motion.span>
              </button>

              <AnimatePresence initial={false}>
                {mobileServicesOpen && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                    className="overflow-hidden pl-3"
                  >
                    {serviceLinks.map((s) => (
                      <Link
                        key={s.href}
                        href={s.href}
                        onClick={() => { setMobileOpen(false); setMobileServicesOpen(false) }}
                        className="block text-white/80 hover:text-sky-400 text-sm py-2.5 px-3 rounded-lg hover:bg-white/5 transition-colors"
                      >
                        {s.label}
                      </Link>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>

              <Link href="/faq" onClick={() => setMobileOpen(false)} className="text-white/90 hover:text-sky-400 font-medium py-3 px-3 rounded-lg hover:bg-white/5 transition-colors">
                FAQs
              </Link>
              <Link href="/contact" onClick={() => setMobileOpen(false)} className="text-white/90 hover:text-sky-400 font-medium py-3 px-3 rounded-lg hover:bg-white/5 transition-colors">
                Contact
              </Link>
              <Link
                href="/contact"
                onClick={() => setMobileOpen(false)}
                className="mt-2 bg-sky-500 hover:bg-sky-400 text-white font-semibold py-3 px-3 rounded-xl text-center transition-colors"
              >
                Get Free Quote
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
