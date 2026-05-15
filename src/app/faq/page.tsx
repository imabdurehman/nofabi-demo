import type { Metadata } from 'next'
import Link from 'next/link'
import Marquee from '@/components/sections/Marquee'
import FaqAccordion from './FaqAccordion'

export const metadata: Metadata = {
  title: 'FAQ — Frequently Asked Questions',
  description: 'Get answers to common questions about NOFABI\'s digital marketing services — SEO, web development, social media, Meta Ads, Google Ads, and more.',
  openGraph: { title: 'FAQ | NOFABI', url: '/faq' },
}

const faqCategories = [
  {
    category: 'General',
    faqs: [
      { question: 'What services does NOFABI offer?', answer: 'NOFABI offers SEO Optimization, Web Development, Social Media Management, Meta Ads, Google Ads, Branding & Identity, Property Management Marketing, and Content Production. We can manage individual services or build a complete integrated digital strategy.' },
      { question: 'What is your pricing?', answer: 'Pricing varies by service scope and business size. Individual services start from PKR 25,000/month. Full-service packages are custom priced. Book a free consultation and we will provide a detailed proposal with no hidden costs.' },
      { question: 'Do you work with small businesses?', answer: 'Absolutely. Many of our clients are SMEs. We design scalable strategies that fit your budget and grow as your business grows. Every business deserves professional digital marketing that delivers real results.' },
      { question: 'How do we get started?', answer: 'Fill out our contact form or send us a WhatsApp message. We schedule a free 30-minute strategy call, then send a tailored proposal within 24–48 hours. Onboarding typically takes 1–2 weeks after approval.' },
      { question: 'Do you provide monthly reports?', answer: 'Yes. Every client receives detailed monthly performance reports covering all key metrics — traffic, rankings, leads, ad spend, ROAS, and more. Ad clients also get weekly snapshots.' },
    ],
  },
  {
    category: 'SEO',
    faqs: [
      { question: 'How long does SEO take to show results?', answer: 'Measurable improvements appear in 3–6 months with significant results at 6–12 months. SEO compounds over time — the longer you invest, the stronger and more sustainable the results become.' },
      { question: 'Do you guarantee first-page rankings?', answer: 'No ethical agency can guarantee specific rankings since Google controls its algorithm. We guarantee a proven process, transparent monthly reporting, and consistent improvement toward your target keywords.' },
      { question: 'Do you do local SEO for Pakistani cities?', answer: 'Yes. We specialise in local SEO for Lahore, Karachi, Islamabad, and other major Pakistani cities, including Google Business Profile optimisation and local citation building.' },
    ],
  },
  {
    category: 'Web Development',
    faqs: [
      { question: 'How long does a website project take?', answer: 'A standard business website takes 3–6 weeks. E-commerce or complex projects take 6–10 weeks. We provide a clear timeline with defined milestones upfront.' },
      { question: 'WordPress or custom development?', answer: 'We build on both — custom Next.js for performance-critical sites and WordPress for content-heavy sites needing easy self-management. We recommend the right tool for your specific situation.' },
      { question: 'Can you redesign my existing website?', answer: 'Yes. We analyse your current site\'s performance, preserve what\'s working SEO-wise, and improve everything else. Redesigns typically launch within 4–8 weeks.' },
    ],
  },
  {
    category: 'Meta Ads & Google Ads',
    faqs: [
      { question: 'What is the minimum ad budget recommended?', answer: 'For Meta Ads, we recommend PKR 50,000/month in ad spend minimum. For Google Ads, PKR 40,000–60,000/month. Management fees are separate. Smaller budgets limit the algorithm\'s ability to optimise.' },
      { question: 'How quickly will I see results from paid ads?', answer: 'Meta Ads can generate leads from day one. The first 2–4 weeks are a learning phase. Full optimisation happens within 4–6 weeks. Google Ads often shows results faster due to higher buyer intent.' },
      { question: 'Do you create the ad creatives?', answer: 'Yes, we handle everything — audience research, creative design, copywriting, campaign setup, and management. You review and approve creatives before they go live.' },
    ],
  },
  {
    category: 'Social Media',
    faqs: [
      { question: 'Which social platforms do you manage?', answer: 'Instagram, Facebook, LinkedIn, TikTok, and Twitter/X. We recommend platforms based on where your specific audience is most active — not a one-size-fits-all approach.' },
      { question: 'Can I review content before it is posted?', answer: 'Absolutely. We share a content calendar each month for your approval before anything goes live. You have full control and visibility over every single post.' },
    ],
  },
  {
    category: 'Property Management Marketing',
    faqs: [
      { question: 'Do you work with individual property agents?', answer: 'Yes. We work with solo agents building their personal brand as well as full real estate agencies with multiple listings. Packages are tailored to your scale and goals.' },
      { question: 'How do you generate property leads?', answer: 'Through targeted Meta and Google Ads campaigns, SEO-optimised property content, and social media. We also set up WhatsApp inquiry automations so no lead falls through the cracks.' },
      { question: 'Can you target overseas Pakistanis for property investment?', answer: 'Yes. We run campaigns specifically targeting overseas Pakistanis in the UK, UAE, USA, and Saudi Arabia who are interested in investing back in Pakistan\'s property market.' },
    ],
  },
  {
    category: 'Branding & Content',
    faqs: [
      { question: 'Do I own all the brand files after the project?', answer: 'Yes, 100%. Upon final payment you receive full ownership of all source files in every format — AI, EPS, SVG, PNG, PDF. No licensing fees or ongoing costs.' },
      { question: 'How much content do I get per month?', answer: 'Standard monthly packages include 8–16 social posts, 2–4 blog articles, and 2–4 short-form videos. Custom volumes are available based on your needs and budget.' },
    ],
  },
]

export default function FaqPage() {
  const allFaqs = faqCategories.flatMap((cat) => cat.faqs)

  return (
    <>
      <section className="bg-sky-900 pt-32 pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="inline-block text-sky-400 text-sm font-semibold tracking-widest uppercase mb-4">
            FAQ
          </span>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white mb-6">
            Frequently Asked Questions
          </h1>
          <p className="text-sky-200 text-lg max-w-2xl mx-auto">
            Everything you need to know before working with NOFABI.
          </p>
        </div>
      </section>

      <Marquee />

      <section className="bg-sky-50 py-20 lg:py-28">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-12">
            {faqCategories.map((cat) => (
              <div key={cat.category}>
                <h2 className="text-lg font-bold text-slate-900 mb-4 pb-2 border-b border-sky-200">
                  {cat.category}
                </h2>
                <FaqAccordion faqs={cat.faqs} />
              </div>
            ))}
          </div>

          <div className="mt-16 bg-sky-900 rounded-3xl p-8 text-center">
            <p className="text-white font-bold text-xl mb-2">Still have questions?</p>
            <p className="text-sky-200 text-sm mb-6">Our team is happy to help. Get in touch and we will respond within 24 hours.</p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 bg-sky-500 hover:bg-sky-400 text-white font-semibold px-6 py-3 rounded-full transition-colors duration-200"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
