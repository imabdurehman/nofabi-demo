'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import WireframeGlobe from '@/components/ui/WireframeGlobe'

interface TestimonialData {
  quote: string
  name: string
  company: string
  initials: string
}

const testimonials: TestimonialData[] = [
  {
    quote: 'Working with NOFABI was a game-changer. They understood our brand vision from day one and brought it to life through stunning visuals and strategic marketing campaigns.',
    name: 'Shah Nawaz',
    company: 'CEO, Hair Beauty',
    initials: 'SN',
  },
  {
    quote: 'NOFABI completely transformed our brand\'s online presence. From social media to website development, their team handled everything with great attention to detail.',
    name: 'Yousaf Ahmed',
    company: 'CEO, MeerZah',
    initials: 'YA',
  },
  {
    quote: 'Our leads increased by 3x within the first two months. NOFABI became a true partner, not just an agency. Highly recommend them to any business serious about growth.',
    name: 'Ahmed Raza',
    company: 'CEO, Digital Ventures',
    initials: 'AR',
  },
  {
    quote: 'Their branding and identity work helped us stand out in a competitive market. Collaborative, insightful, and always delivered on time. Excellent service!',
    name: 'Imran Khan',
    company: 'CEO, 92 Bedding',
    initials: 'IK',
  },
  {
    quote: 'One thing I appreciate about NOFABI is their transparency. No false promises, just results. They explained every step and kept us involved throughout.',
    name: 'Nabeel Malik',
    company: 'CEO, Misaaq',
    initials: 'NM',
  },
]

const avatars = [
  { initials: 'SN', bg: 'bg-sky-500' },
  { initials: 'YA', bg: 'bg-purple-500' },
  { initials: 'AR', bg: 'bg-pink-500' },
  { initials: 'IK', bg: 'bg-orange-500' },
]

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0)

  const goPrev = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  const goNext = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length)
  }

  useEffect(() => {
    const timer = setInterval(goNext, 5000)
    return () => clearInterval(timer)
  }, [])

  const review = testimonials[currentIndex]

  return (
    <section className="bg-gradient-to-br from-[#08071a] to-[#0d0d2b] py-20 px-6 relative overflow-hidden">
      <div className="max-w-6xl mx-auto">

        {/* Heading */}
        <div className="text-center mb-14">
          <span className="text-sky-400 text-sm font-semibold tracking-widest uppercase mb-3 block">
            Testimonials
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-white">
            Read Our Client Reviews
          </h2>
          <p className="text-gray-400 mt-4 max-w-xl mx-auto">
            Real results from real clients — see what businesses across Pakistan say about working with NOFABI.
          </p>
          <Link href="/testimonials" className="mt-5 inline-block border border-sky-400 text-sky-400 hover:bg-sky-400 hover:text-white rounded-full px-6 py-2 text-sm transition-colors duration-200">
            All Testimonials →
          </Link>
        </div>

        {/* Two-column layout */}
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">

          {/* Left column — Rating summary */}
          <div className="lg:col-span-2">
            <div
              className="relative overflow-hidden rounded-2xl p-8 h-full"
              style={{ backgroundColor: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)' }}
            >
              <p className="text-7xl font-black text-white leading-none">4.9</p>
              <p className="text-sky-400 text-xl mt-2">★★★★★</p>
              <p className="text-gray-400 text-sm mt-1">(40+ Reviews)</p>

              <div className="my-4" style={{ borderTop: '1px solid rgba(255,255,255,0.1)' }} />

              <p className="text-white font-semibold leading-snug">
                Client experiences that speak for themselves
              </p>

              <div className="flex -space-x-2 mt-6">
                {avatars.map((av) => (
                  <div
                    key={av.initials}
                    className={`w-8 h-8 rounded-full ${av.bg} flex items-center justify-center text-white text-xs font-bold shrink-0`}
                    style={{ border: '2px solid #08071a' }}
                  >
                    {av.initials}
                  </div>
                ))}
              </div>

              <div className="absolute -bottom-8 -left-8 z-0 pointer-events-none">
                <WireframeGlobe size={160} opacity={0.4} />
              </div>
            </div>
          </div>

          {/* Right column — Review slider */}
          <div className="lg:col-span-3 flex flex-col">
            <div
              className="rounded-2xl p-8 flex-1"
              style={{ backgroundColor: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)' }}
            >
              <p className="text-sky-400 text-sm font-bold">NOFABI</p>
              <p className="text-sky-400 text-lg mt-4">★★★★★</p>

              <div className="min-h-[180px] mt-4">
                <blockquote className="text-white text-lg leading-relaxed italic">
                  &ldquo;{review.quote}&rdquo;
                </blockquote>

                <div className="mt-8 flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-sky-500 flex items-center justify-center font-bold text-white text-sm shrink-0">
                      {review.initials}
                    </div>
                    <div>
                      <p className="font-bold text-white text-sm">{review.name}</p>
                      <p className="text-gray-400 text-xs">{review.company}</p>
                    </div>
                  </div>

                  <div className="flex gap-2">
                    <button
                      onClick={goPrev}
                      aria-label="Previous review"
                      className="w-10 h-10 rounded-full flex items-center justify-center text-gray-400 hover:text-sky-400 transition-colors duration-200"
                      style={{ border: '1px solid rgba(255,255,255,0.2)' }}
                    >
                      <ChevronLeft className="w-4 h-4" />
                    </button>
                    <button
                      onClick={goNext}
                      aria-label="Next review"
                      className="w-10 h-10 rounded-full flex items-center justify-center text-gray-400 hover:text-sky-400 transition-colors duration-200"
                      style={{ border: '1px solid rgba(255,255,255,0.2)' }}
                    >
                      <ChevronRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
