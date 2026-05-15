import type { Metadata } from 'next'
import Link from 'next/link'
import Marquee from '@/components/sections/Marquee'

export const metadata: Metadata = {
  title: 'Client Testimonials',
  description: 'Read what businesses across Pakistan say about working with NOFABI — real results from real clients.',
  openGraph: { title: 'Client Testimonials | NOFABI', url: '/testimonials' },
}

const reviews = [
  { name: 'Shah Nawaz', company: 'CEO, Hair Beauty', initials: 'SN', quote: 'Working with NOFABI was a game-changer. They understood our brand vision from day one and brought it to life through stunning visuals and strategic marketing campaigns. Our monthly revenue doubled within six months.' },
  { name: 'Yousaf Ahmed', company: 'CEO, MeerZah', initials: 'YA', quote: 'NOFABI completely transformed our brand\'s online presence. From social media to website development, their team handled everything with great attention to detail. I recommend them to every business owner I know.' },
  { name: 'Ahmed Raza', company: 'CEO, Digital Ventures', initials: 'AR', quote: 'Our leads increased by 3x within the first two months. NOFABI became a true partner, not just an agency. They are fully invested in your success and it shows in everything they produce.' },
  { name: 'Imran Khan', company: 'CEO, 92 Bedding', initials: 'IK', quote: 'Their branding and identity work helped us stand out in a competitive market. Collaborative, insightful, and always delivered on time. The quality of work is consistently excellent.' },
  { name: 'Nabeel Malik', company: 'CEO, Misaaq', initials: 'NM', quote: 'One thing I appreciate about NOFABI is their transparency. No false promises, just results. They explained every step and kept us involved throughout. That level of honesty is rare.' },
  { name: 'Zainab Hussain', company: 'Founder, ZH Boutique', initials: 'ZH', quote: 'Our Instagram went from 2,000 to 18,000 followers in four months. More importantly, our online sales grew by 140%. NOFABI knows social media inside and out, and the content they produce is genuinely beautiful.' },
  { name: 'Ali Raza', company: 'Director, TechStart PK', initials: 'AR', quote: 'We hired NOFABI for SEO and within 8 months we were ranking page one for our three most competitive keywords. The organic traffic increase has reduced our paid ad dependency significantly. Exceptional results.' },
  { name: 'Rabia Khan', company: 'CEO, Lahore Decor', initials: 'RK', quote: 'The website NOFABI built for us loads incredibly fast and looks stunning. Enquiries increased from the day we launched. Our customers constantly compliment the site. The investment paid for itself within 6 weeks.' },
  { name: 'Faisal Mahmood', company: 'MD, PropertiesPlus', initials: 'FM', quote: 'As a property developer, finding genuine buyer leads online was a constant struggle. NOFABI\'s targeted Meta Ads campaign changed that completely. We receive 30–40 qualified property enquiries every month now.' },
  { name: 'Hina Tariq', company: 'Founder, GlowSkin PK', initials: 'HT', quote: 'NOFABI managed our entire brand launch — logo, social media, website, and our first ad campaign. Everything was cohesive, professional, and launched on time. We could not have done it without them.' },
  { name: 'Kamran Sheikh', company: 'CEO, FastDelivery.pk', initials: 'KS', quote: 'Google Ads was completely foreign to me before NOFABI. They set everything up, explained the strategy clearly, and our cost-per-acquisition has come down by 60% over six months. The ROI has been phenomenal.' },
  { name: 'Sara Nasir', company: 'Marketing Head, EduPak', initials: 'SN', quote: 'We\'ve worked with several agencies in Pakistan. NOFABI is in a different league. The quality of strategy, execution, and communication sets them apart. Our enrolments grew 45% after six months of working together.' },
  { name: 'Bilal Chaudhry', company: 'Founder, FreshMart PK', initials: 'BC', quote: 'NOFABI\'s content production team is incredibly talented. Our product photography, Reels, and blog content have all improved dramatically. Customers regularly tell us our content is what convinced them to buy.' },
  { name: 'Mehwish Iqbal', company: 'Director, Karachi Events', initials: 'MI', quote: 'Our Meta Ads ROAS jumped from 1.8x to 5.2x in three months. The team tests everything methodically and never stops optimising. I have full confidence every rupee of ad spend is being managed properly.' },
  { name: 'Hassan Abbasi', company: 'CEO, BuildRight Pakistan', initials: 'HA', quote: 'The branding package NOFABI created for us is world-class. Our logo, colour system, and brand guidelines gave us the professional identity we needed to win bigger contracts. Worth every rupee.' },
]

const avatarColors = [
  'bg-sky-500', 'bg-purple-500', 'bg-pink-500', 'bg-orange-500',
  'bg-teal-500', 'bg-indigo-500', 'bg-rose-500', 'bg-amber-500',
  'bg-emerald-500', 'bg-violet-500', 'bg-cyan-500', 'bg-fuchsia-500',
  'bg-lime-600', 'bg-red-500', 'bg-blue-500',
]

export default function TestimonialsPage() {
  return (
    <>
      <section className="bg-sky-900 pt-32 pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="inline-block text-sky-400 text-sm font-semibold tracking-widest uppercase mb-4">
            Client Stories
          </span>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white mb-6">
            What Our Clients Say
          </h1>
          <p className="text-sky-200 text-lg max-w-2xl mx-auto">
            Real results from real businesses across Pakistan. See why 50+ brands trust NOFABI to grow their digital presence.
          </p>
        </div>
      </section>

      <Marquee />

      <section className="bg-slate-950 py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-center gap-6 mb-12">
            <div className="text-center">
              <p className="text-5xl font-black text-white">4.9</p>
              <p className="text-sky-400 text-xl mt-1">★★★★★</p>
              <p className="text-gray-400 text-sm mt-1">Average Rating</p>
            </div>
            <div className="w-px h-16 bg-white/10" />
            <div className="text-center">
              <p className="text-5xl font-black text-white">50+</p>
              <p className="text-gray-400 text-sm mt-1">Happy Clients</p>
            </div>
            <div className="w-px h-16 bg-white/10" />
            <div className="text-center">
              <p className="text-5xl font-black text-white">95%</p>
              <p className="text-gray-400 text-sm mt-1">Retention Rate</p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {reviews.map((review, i) => (
              <div
                key={i}
                className="rounded-2xl p-6 flex flex-col"
                style={{ backgroundColor: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)' }}
              >
                <p className="text-sky-400 text-sm font-bold mb-2"><span className="font-black">N</span><span className="font-light">OFABI</span></p>
                <p className="text-sky-400 mb-3">★★★★★</p>
                <blockquote className="text-gray-300 text-sm leading-relaxed flex-1 italic">
                  &ldquo;{review.quote}&rdquo;
                </blockquote>
                <div className="flex items-center gap-3 mt-5 pt-5" style={{ borderTop: '1px solid rgba(255,255,255,0.08)' }}>
                  <div className={`w-9 h-9 rounded-full ${avatarColors[i % avatarColors.length]} flex items-center justify-center text-white text-xs font-bold shrink-0`}>
                    {review.initials}
                  </div>
                  <div>
                    <p className="text-white text-sm font-semibold">{review.name}</p>
                    <p className="text-gray-400 text-xs">{review.company}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-16 text-center">
            <p className="text-gray-400 mb-6">Ready to add your success story?</p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 bg-sky-500 hover:bg-sky-400 text-white font-semibold px-8 py-4 rounded-full transition-colors duration-200"
            >
              Get Free Quote
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
