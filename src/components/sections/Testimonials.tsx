'use client'

import { useState } from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import WireframeGlobe from '@/components/ui/WireframeGlobe'

interface TestimonialData {
  quote: string
  name: string
  company: string
  initials: string
  rating: number
}

const testimonials: TestimonialData[] = [
  {
    quote: 'Working with NOFABI was a game-changer. They understood our brand vision from day one and brought it to life through stunning visuals and strategic marketing campaigns.',
    name: 'Shah Nawaz',
    company: 'Hair Beauty',
    initials: 'SN',
    rating: 5,
  },
  {
    quote: "NOFABI completely transformed our brand's online presence. From social media to website development, their team handled everything with great attention to detail.",
    name: 'Yousaf Ahmed',
    company: 'MeerZah',
    initials: 'YA',
    rating: 4,
  },
  {
    quote: 'Our leads increased by 3x within the first two months. NOFABI became a true partner, not just an agency. Highly recommend them to any business serious about growth.',
    name: 'Ahmed Raza',
    company: 'Digital Ventures',
    initials: 'AR',
    rating: 4.5,
  },
  {
    quote: 'Their branding and identity work helped us stand out in a competitive market. Collaborative, insightful, and always delivered on time. Excellent service!',
    name: 'Imran Khan',
    company: '92 Bedding',
    initials: 'IK',
    rating: 3.5,
  },
  {
    quote: 'One thing I appreciate about NOFABI is their transparency. No false promises, just results. They explained every step and kept us involved throughout.',
    name: 'Nabeel Malik',
    company: 'Misaaq',
    initials: 'NM',
    rating: 5,
  },
]

const avatars = [
  { initials: 'SN', bg: 'bg-sky-500' },
  { initials: 'YA', bg: 'bg-purple-500' },
  { initials: 'AR', bg: 'bg-pink-500' },
  { initials: 'IK', bg: 'bg-orange-500' },
]

function StarRating({ rating }: { rating: number }) {
  return (
    <span className="flex items-center gap-0.5">
      {[1, 2, 3, 4, 5].map((i) => {
        if (rating >= i) {
          return <span key={i} className="text-sky-400">★</span>
        }
        if (rating >= i - 0.5) {
          return (
            <span key={i} className="relative inline-block text-gray-600">
              ★
              <span
                className="absolute inset-0 overflow-hidden text-sky-400"
                style={{ width: '50%' }}
              >
                ★
              </span>
            </span>
          )
        }
        return <span key={i} className="text-gray-600">★</span>
      })}
      <span className="text-gray-400 text-sm ml-1">({rating})</span>
    </span>
  )
}

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0)

  const goPrev = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  const goNext = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length)
  }

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
          <motion.div
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="inline-block mt-6"
          >
            <Link
              href="/testimonials"
              className="w-20 h-20 rounded-full bg-sky-500 hover:bg-sky-400 text-white text-[10px] font-medium flex flex-col items-center justify-center gap-1 transition-colors duration-200 shadow-xl shadow-sky-500/30"
            >
              <span>↗</span>
              <span>All Reviews</span>
            </Link>
          </motion.div>
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
              <div className="mt-2">
                <StarRating rating={5} />
              </div>
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
              <div className="mt-4">
                <StarRating rating={review.rating} />
              </div>

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
                      className="w-10 h-10 rounded-full flex items-center justify-center text-gray-400 hover:text-sky-400 transition-colors duration-200 cursor-pointer"
                      style={{ border: '1px solid rgba(255,255,255,0.2)' }}
                    >
                      <ChevronLeft className="w-4 h-4" />
                    </button>
                    <button
                      onClick={goNext}
                      aria-label="Next review"
                      className="w-10 h-10 rounded-full flex items-center justify-center text-gray-400 hover:text-sky-400 transition-colors duration-200 cursor-pointer"
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
