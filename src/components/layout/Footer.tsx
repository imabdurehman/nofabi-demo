'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { Phone, Mail, MapPin } from 'lucide-react'
import { Globe } from '@/components/ui/Globe'

const quickLinks = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About Us' },
  { href: '/services', label: 'Services' },
  { href: '/about#team', label: 'Our Team' },
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
]

export default function Footer() {
  return (
    <>
      {/* Section A — Let's Work Together */}
      <section
        className="relative overflow-hidden flex flex-col items-center justify-center min-h-[250px] md:min-h-[450px] py-10 md:py-16"
        style={{ background: 'linear-gradient(to bottom right, #0a0a1a, #060d1a)' }}
      >
        {/* Globe — top-left on mobile, left-center on desktop */}
        <div className="absolute bottom-0 left-0 -translate-x-1/3 translate-y-1/3 w-[180px] h-[180px] opacity-70 md:bottom-auto md:top-1/2 md:translate-x-0 md:-translate-y-1/2 md:w-[350px] md:h-[350px] md:opacity-90 md:-ml-20 pointer-events-none z-0">
          <Globe />
        </div>

        {/* Heading block */}
        <div className="relative z-10 w-full text-center px-2 md:pl-36 lg:pl-44">
          <p className="text-sky-400 uppercase tracking-[0.25em] text-xs md:text-sm mb-2 md:mb-6">
            LET&apos;S COLLABORATE
          </p>
          <div className="relative">
            <h2 className="text-[clamp(38px,10vw,130px)] font-black text-white leading-none tracking-tighter text-center">
              LET&apos;S WORK TOGETHER
            </h2>
            {/* Button overlaid on heading — both mobile and desktop */}
            <motion.a
              href="/contact"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              transition={{ duration: 0.2 }}
              className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-14 h-14 md:w-32 md:h-32 rounded-full bg-sky-500 hover:bg-sky-400 text-white text-[8px] md:text-sm font-medium flex flex-col items-center justify-center gap-0.5 transition-colors duration-200 shadow-xl shadow-sky-500/30 cursor-pointer z-20"
            >
              <span>↗</span>
              <span>Get In Touch</span>
            </motion.a>
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
                  <a href="tel:+923174941609" className="hover:text-sky-400 transition-colors">0317 4941609</a>
                </li>
                <li className="flex items-center gap-2.5 text-gray-300 text-sm">
                  <Mail className="w-4 h-4 text-sky-500 shrink-0" />
                  <a href="mailto:nofabiofficial@gmail.com" className="hover:text-sky-400 transition-colors">nofabiofficial@gmail.com</a>
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
                href="https://wa.me/923174941609"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 w-full bg-green-600 hover:bg-green-500 text-white text-sm font-semibold px-4 py-3 rounded-xl transition-colors duration-200 mb-4"
              >
                <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 shrink-0" aria-hidden="true">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
                Message on WhatsApp
              </a>
              <p className="text-gray-500 text-xs mb-1">0317 4941609</p>
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
