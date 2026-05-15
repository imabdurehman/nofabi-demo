'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { Phone, Mail, MapPin } from 'lucide-react'

const quickLinks = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About Us' },
  { href: '/services', label: 'Services' },
  { href: '/about', label: 'Our Team' },
  { href: '/contact', label: 'Contact Us' },
  { href: '/faq', label: 'FAQs' },
]

const supportLinks = [
  { href: '/contact', label: 'Contact Us' },
  { href: '/terms-of-service', label: 'Terms & Conditions' },
  { href: '/privacy-policy', label: 'Privacy Policy' },
  { href: '/contact', label: 'Help' },
]

const socials = [
  {
    label: 'Facebook',
    href: 'https://facebook.com',
    path: 'M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z',
  },
  {
    label: 'Instagram',
    href: 'https://instagram.com',
    path: 'M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z',
  },
  {
    label: 'LinkedIn',
    href: 'https://linkedin.com',
    path: 'M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z',
  },
]

export default function Footer() {
  return (
    <>
      {/* Section A — Let's Work Together */}
      <section
        className="relative overflow-hidden py-16 md:py-24 px-4 min-h-[280px] flex items-center"
        style={{ background: 'linear-gradient(to bottom right, #0a0a1a, #060d1a)' }}
      >
        {/* Inline SVG Globe — left side */}
        {/* Globe — mobile: bottom border bleed */}
        <div className="block md:hidden absolute bottom-0 left-0 z-10" style={{ transform: 'translateY(50%)' }}>
          <svg viewBox="0 0 200 200" width={220} height={220} aria-hidden="true">
            <style>{`
              @keyframes globeSpinM {
                from { transform-origin: 100px 100px; transform: rotateY(0deg); }
                to { transform-origin: 100px 100px; transform: rotateY(360deg); }
              }
              .globe-spin-m { animation: globeSpinM 12s linear infinite; }
            `}</style>
            <circle cx={100} cy={100} r={80} fill="none" stroke="rgba(14,165,233,0.5)" strokeWidth={1} />
            <ellipse cx={100} cy={100} rx={80} ry={8} fill="none" stroke="rgba(14,165,233,0.25)" strokeWidth={0.8} />
            <ellipse cx={100} cy={100} rx={80} ry={25} fill="none" stroke="rgba(14,165,233,0.25)" strokeWidth={0.8} />
            <ellipse cx={100} cy={100} rx={80} ry={40} fill="none" stroke="rgba(14,165,233,0.25)" strokeWidth={0.8} />
            <ellipse cx={100} cy={100} rx={80} ry={55} fill="none" stroke="rgba(14,165,233,0.25)" strokeWidth={0.8} />
            <ellipse cx={100} cy={100} rx={80} ry={70} fill="none" stroke="rgba(14,165,233,0.25)" strokeWidth={0.8} />
            <g className="globe-spin-m">
              <ellipse cx={100} cy={100} rx={80} ry={20} fill="none" stroke="rgba(14,165,233,0.35)" strokeWidth={0.8} />
              <ellipse cx={100} cy={100} rx={80} ry={40} fill="none" stroke="rgba(14,165,233,0.35)" strokeWidth={0.8} />
              <ellipse cx={100} cy={100} rx={80} ry={60} fill="none" stroke="rgba(14,165,233,0.35)" strokeWidth={0.8} />
            </g>
          </svg>
        </div>

        {/* Globe — desktop: left side vertically centered */}
        <div className="hidden md:block absolute left-12 top-1/2 -translate-y-1/2 z-0">
          <svg viewBox="0 0 200 200" width={160} height={160} aria-hidden="true">
            <style>{`
              @keyframes globeSpinD {
                from { transform-origin: 100px 100px; transform: rotateY(0deg); }
                to { transform-origin: 100px 100px; transform: rotateY(360deg); }
              }
              .globe-spin-d { animation: globeSpinD 12s linear infinite; }
            `}</style>
            <circle cx={100} cy={100} r={80} fill="none" stroke="rgba(14,165,233,0.5)" strokeWidth={1} />
            <ellipse cx={100} cy={100} rx={80} ry={8} fill="none" stroke="rgba(14,165,233,0.25)" strokeWidth={0.8} />
            <ellipse cx={100} cy={100} rx={80} ry={25} fill="none" stroke="rgba(14,165,233,0.25)" strokeWidth={0.8} />
            <ellipse cx={100} cy={100} rx={80} ry={40} fill="none" stroke="rgba(14,165,233,0.25)" strokeWidth={0.8} />
            <ellipse cx={100} cy={100} rx={80} ry={55} fill="none" stroke="rgba(14,165,233,0.25)" strokeWidth={0.8} />
            <ellipse cx={100} cy={100} rx={80} ry={70} fill="none" stroke="rgba(14,165,233,0.25)" strokeWidth={0.8} />
            <g className="globe-spin-d">
              <ellipse cx={100} cy={100} rx={80} ry={20} fill="none" stroke="rgba(14,165,233,0.35)" strokeWidth={0.8} />
              <ellipse cx={100} cy={100} rx={80} ry={40} fill="none" stroke="rgba(14,165,233,0.35)" strokeWidth={0.8} />
              <ellipse cx={100} cy={100} rx={80} ry={60} fill="none" stroke="rgba(14,165,233,0.35)" strokeWidth={0.8} />
            </g>
          </svg>
        </div>

        <div className="relative z-10 max-w-5xl mx-auto text-center w-full">
          <span className="text-sky-400 text-xs font-semibold tracking-[0.3em] uppercase mb-6 block">
            Let&apos;s Collaborate
          </span>

          <div className="relative inline-block">
            <h2 className="text-5xl md:text-7xl lg:text-8xl font-black text-white text-center leading-none">
              LET&apos;S WORK TOGETHER
            </h2>
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
              <motion.div
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                transition={{ duration: 0.2 }}
                className="pointer-events-auto"
              >
                <Link
                  href="/contact"
                  className="w-28 h-28 md:w-32 md:h-32 rounded-full bg-sky-500 hover:bg-sky-400 flex flex-col items-center justify-center text-white text-xs font-medium text-center leading-snug transition-colors duration-200 shadow-xl shadow-sky-500/30"
                >
                  Get In<br />Touch →
                </Link>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Section B — Main Footer */}
      <footer style={{ backgroundColor: '#060d1a' }} className="text-white">
        <div className="max-w-7xl mx-auto px-6 md:px-12 py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">

            {/* Column 1: Brand */}
            <div>
              <p className="text-2xl text-white tracking-tight mb-3"><span className="font-black">N</span><span className="font-light">OFABI</span></p>
              <p className="text-gray-400 text-sm leading-relaxed mb-6">
                Pakistan&apos;s #1 Digital Growth Agency. We help businesses scale online with data-driven strategies and measurable results.
              </p>
              <ul className="space-y-2.5">
                <li className="flex items-center gap-2.5 text-gray-300 text-sm">
                  <Phone className="w-4 h-4 text-sky-500 shrink-0" />
                  <a href="tel:+923001234567" className="hover:text-sky-400 transition-colors">+92 300 1234567</a>
                </li>
                <li className="flex items-center gap-2.5 text-gray-300 text-sm">
                  <Mail className="w-4 h-4 text-sky-500 shrink-0" />
                  <a href="mailto:info@nofabi.com" className="hover:text-sky-400 transition-colors">info@nofabi.com</a>
                </li>
                <li className="flex items-center gap-2.5 text-gray-300 text-sm">
                  <MapPin className="w-4 h-4 text-sky-500 shrink-0" />
                  <span>Lahore, Pakistan</span>
                </li>
              </ul>
            </div>

            {/* Column 2: Quick Links */}
            <div>
              <p className="text-white font-semibold mb-5 text-sm">Quick Links</p>
              <ul className="space-y-1">
                {quickLinks.map((link) => (
                  <li key={link.label}>
                    <Link href={link.href} className="text-gray-400 hover:text-sky-400 text-sm py-1 block transition-colors duration-200">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Column 3: Support */}
            <div>
              <p className="text-white font-semibold mb-5 text-sm">Support</p>
              <ul className="space-y-1">
                {supportLinks.map((link) => (
                  <li key={link.label}>
                    <Link href={link.href} className="text-gray-400 hover:text-sky-400 text-sm py-1 block transition-colors duration-200">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Column 4: WhatsApp */}
            <div>
              <p className="text-white font-semibold mb-5 text-sm">Chat With Us</p>
              <p className="text-gray-400 text-sm leading-relaxed mb-5">
                Get a response within 1 hour during business hours. Send us a message directly on WhatsApp.
              </p>
              <a
                href="https://wa.me/923001234567"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 w-full bg-green-600 hover:bg-green-500 text-white text-sm font-semibold px-4 py-3 rounded-xl transition-colors duration-200 mb-4"
              >
                <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 shrink-0" aria-hidden="true">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
                Message on WhatsApp
              </a>
              <p className="text-gray-500 text-xs mb-1">+92 300 1234567</p>
              <p className="text-gray-500 text-xs">Mon–Sat, 9 AM – 7 PM PKT</p>

              <div className="flex gap-3 mt-6">
                {socials.map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.label}
                    className="w-9 h-9 rounded-full flex items-center justify-center transition-colors duration-200 text-gray-400 hover:text-white hover:bg-sky-500"
                    style={{ backgroundColor: 'rgba(255,255,255,0.05)' }}
                  >
                    <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4" aria-hidden="true">
                      <path d={social.path} />
                    </svg>
                  </a>
                ))}
              </div>
            </div>
          </div>

          <div
            className="mt-12 pt-6 flex flex-col md:flex-row justify-between items-center gap-3"
            style={{ borderTop: '1px solid rgba(255,255,255,0.05)' }}
          >
            <p className="text-gray-500 text-sm">© 2025 NOFABI. All rights reserved.</p>
            <p className="text-gray-500 text-sm">Made with ❤️ in Pakistan</p>
          </div>
        </div>
      </footer>
    </>
  )
}
