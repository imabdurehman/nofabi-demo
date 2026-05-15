import type { Metadata } from 'next'
import Link from 'next/link'
import Marquee from '@/components/sections/Marquee'

export const metadata: Metadata = {
  title: 'About Us',
  description:
    "Learn about NOFABI — Pakistan's most trusted digital marketing agency. Our story, team, values, and why 50+ businesses choose us to grow their brands online.",
  openGraph: {
    title: "About NOFABI | Pakistan's #1 Digital Agency",
    description:
      'Our story, mission, team, and values. Discover why businesses across Pakistan trust NOFABI to grow their digital presence.',
    url: '/about',
  },
}

const team = [
  {
    name: 'Fahad Noor',
    role: 'CEO & Founder',
    initials: 'FN',
    bio: '10+ years in digital marketing. Built NOFABI to bring world-class strategies to Pakistani businesses.',
  },
  {
    name: 'Amna Malik',
    role: 'Head of SEO',
    initials: 'AM',
    bio: 'Certified Google SEO expert. Managed campaigns for 30+ brands across Pakistan and the Middle East.',
  },
  {
    name: 'Usman Khan',
    role: 'Lead Developer',
    initials: 'UK',
    bio: 'Full-stack developer with a passion for performance. Builds websites that rank, load fast, and convert.',
  },
  {
    name: 'Sara Ahmed',
    role: 'Creative Director',
    initials: 'SA',
    bio: 'Award-winning designer who has shaped brand identities for over 40 companies in South Asia.',
  },
]

const values = [
  {
    icon: '🔍',
    title: 'Transparency',
    description: 'No smoke and mirrors. You get full visibility into your campaigns, spending, and results every single week.',
  },
  {
    icon: '📈',
    title: 'Results',
    description: 'We are obsessed with outcomes. Every decision is made with one goal: measurable growth for your business.',
  },
  {
    icon: '💡',
    title: 'Innovation',
    description: "Digital marketing evolves fast. We stay ahead of platform changes, algorithm updates, and emerging trends so you don't have to.",
  },
  {
    icon: '🤝',
    title: 'Partnership',
    description: "We don't just work for you — we work with you. Your success is our success, and we're in this for the long haul.",
  },
]

export default function AboutPage() {
  return (
    <>
      <section className="bg-sky-900 pt-32 pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="inline-block text-sky-400 text-sm font-semibold tracking-widest uppercase mb-4">
            Our Story
          </span>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white mb-6">
            Pakistan&apos;s Most Trusted Digital Agency
          </h1>
          <p className="text-sky-200 text-lg md:text-xl max-w-2xl mx-auto">
            Built in Pakistan, built for growth. Here is the story of how NOFABI became the agency businesses trust most.
          </p>
        </div>
      </section>

      <Marquee />

      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2 space-y-10">
              <div>
                <h2 className="text-2xl font-bold text-slate-900 mb-4">Where It Started</h2>
                <p className="text-slate-600 leading-relaxed">
                  NOFABI was founded in Lahore with a simple observation: most Pakistani businesses were being underserved by digital marketing. Agencies were overpromising, underdelivering, and leaving clients confused about where their money was going. We decided to do things differently.
                </p>
                <p className="text-slate-600 leading-relaxed mt-3">
                  From day one, we committed to radical transparency, data-backed decisions, and strategies built around real business outcomes — not vanity metrics. That commitment earned us our first 10 clients, and those clients told 10 more. Today, NOFABI is one of Pakistan&apos;s fastest-growing digital agencies.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-slate-900 mb-4">How We Work</h2>
                <p className="text-slate-600 leading-relaxed">
                  Every client engagement starts with deep discovery. We audit your current digital footprint, analyse your competitors, and map out the specific opportunities in your market. From there, we build a strategy that uses the right channels for your audience — not a copy-paste template.
                </p>
                <p className="text-slate-600 leading-relaxed mt-3">
                  Execution is handled by dedicated specialists — your SEO is managed by SEO people, your ads by paid media experts, your content by skilled writers and designers. No generalists wearing all hats. This is why our results consistently outperform market benchmarks.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-slate-900 mb-4">Our Mission</h2>
                <p className="text-slate-600 leading-relaxed">
                  Our mission is to make enterprise-grade digital marketing accessible to every Pakistani business. Whether you are a startup finding your footing or an established brand ready to scale nationally, NOFABI has a solution that fits your stage and your budget.
                </p>
              </div>
            </div>

            <div className="bg-sky-900 rounded-3xl p-8 text-white h-fit">
              <h3 className="text-xl font-bold mb-1">Founder&apos;s Message</h3>
              <p className="text-sky-400 text-sm mb-6">— Fahad Noor, CEO</p>
              <blockquote className="text-sky-100 leading-relaxed italic text-sm">
                &ldquo;I started NOFABI because I believed Pakistani businesses deserved better. Better results, better communication, and an agency that genuinely cares about their growth. Three years later, watching our clients succeed — seeing a local clothing brand go from 1,000 to 50,000 monthly visitors, watching a startup generate its first 100 leads — that is what drives our entire team every day.&rdquo;
              </blockquote>
              <div className="flex items-center gap-3 mt-6 pt-6 border-t border-sky-800">
                <div className="w-10 h-10 rounded-full bg-sky-500 flex items-center justify-center font-bold text-sm">
                  FN
                </div>
                <div>
                  <p className="font-semibold text-sm">Fahad Noor</p>
                  <p className="text-sky-400 text-xs">CEO & Founder, NOFABI</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-sky-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="inline-block text-sky-500 text-sm font-semibold tracking-widest uppercase mb-3">The Team</span>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900">Meet the People Behind NOFABI</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {team.map((member) => (
              <div
                key={member.name}
                className="bg-white rounded-2xl p-6 text-center border border-sky-100 hover:border-sky-400 transition-colors duration-200"
              >
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-sky-500 to-sky-900 flex items-center justify-center mx-auto mb-4">
                  <span className="text-white font-bold text-lg">{member.initials}</span>
                </div>
                <h3 className="font-bold text-slate-900 mb-0.5">{member.name}</h3>
                <p className="text-sky-500 text-sm font-medium mb-3">{member.role}</p>
                <p className="text-slate-500 text-sm leading-relaxed">{member.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="inline-block text-sky-500 text-sm font-semibold tracking-widest uppercase mb-3">What We Stand For</span>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900">Our Core Values</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value) => (
              <div key={value.title} className="p-6 rounded-2xl border border-sky-100 hover:border-sky-400 hover:shadow-lg hover:shadow-sky-100 transition-all duration-200">
                <span className="text-3xl mb-4 block">{value.icon}</span>
                <h3 className="font-bold text-slate-900 mb-2">{value.title}</h3>
                <p className="text-slate-500 text-sm leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-sky-500 py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-extrabold text-white mb-4">Ready to Work Together?</h2>
          <p className="text-sky-100 mb-8">Book a free strategy call and let&apos;s talk about how NOFABI can grow your business.</p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 bg-white text-sky-900 font-bold px-8 py-4 rounded-full hover:bg-sky-50 transition-colors duration-200"
          >
            Get in Touch
          </Link>
        </div>
      </section>
    </>
  )
}
