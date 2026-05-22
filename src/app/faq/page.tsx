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
      { question: 'What services does NOFABI offer?', answer: 'NOFABI offers SEO Optimization, Web Development, Social Media Management, Meta Ads, Google Ads, Branding & Identity, Graphic Design, Content Production, and Property Management. We can manage individual services or build a complete integrated digital strategy tailored to your business.' },
      { question: 'Do you work with small businesses?', answer: 'Absolutely. Many of our clients are small and medium-sized businesses. We design scalable strategies that fit your goals and grow as your business grows. Every business deserves professional digital marketing that delivers real, measurable results.' },
      { question: 'How do we get started?', answer: 'Getting started is simple — fill out our contact form or send us a WhatsApp message. We schedule a free 30-minute strategy call to understand your goals, then send a tailored proposal within 24–48 hours. Onboarding typically takes 1–2 weeks after approval.' },
      { question: 'Do you provide monthly reports?', answer: 'Yes. Every client receives detailed monthly performance reports covering all key metrics — traffic, rankings, leads, ad spend, ROAS, and more. For ad clients, we also provide weekly performance snapshots so you always have full visibility.' },
      { question: 'How much does it cost?', answer: 'Every project is different — pricing depends on the scope of work, the services you need, and your business goals. We do not offer fixed packages because every client deserves a strategy built around their specific situation. Reach out for a free consultation and we will provide a clear, tailored proposal with no hidden costs.' },
    ],
  },
  {
    category: 'SEO',
    faqs: [
      { question: 'How long does SEO take to show results?', answer: 'Measurable improvements typically appear in 3–6 months, with significant ranking gains at the 6–12 month mark. SEO compounds over time — the longer you invest, the stronger and more sustainable the results become.' },
      { question: 'Do you guarantee first-page rankings?', answer: 'No ethical agency can guarantee specific rankings since Google controls its algorithm. We guarantee a proven process, transparent monthly reporting, and consistent, measurable improvement toward your target keywords.' },
      { question: 'Do you do local SEO for Pakistani cities?', answer: 'Yes. We specialise in local SEO for Lahore, Karachi, Islamabad, and all major Pakistani cities — including Google Business Profile optimisation, local citation building, and map pack rankings.' },
    ],
  },
  {
    category: 'Web Development & Shopify',
    faqs: [
      { question: 'Can you build a Shopify store for my business?', answer: 'Yes. We set up and fully customise Shopify stores — including theme design, product listings, collections, payment gateways, and third-party app integrations. We also provide training so you can manage your store confidently after launch.' },
      { question: 'WordPress, Shopify, or custom development — which do you recommend?', answer: 'It depends on your goals. Shopify is ideal for product-based businesses wanting a powerful, easy-to-manage online store. WordPress suits content-heavy sites and blogs needing full flexibility. Custom Next.js is best for performance-critical or highly bespoke projects. We assess your needs and recommend the right platform — no one-size-fits-all approach.' },
      { question: 'Do you provide maintenance and support after launch?', answer: 'Yes. We offer ongoing maintenance and support covering security updates, performance monitoring, content edits, and technical fixes — for both custom websites and Shopify stores — so everything stays fast, secure, and up to date.' },
    ],
  },
  {
    category: 'Meta Ads & Google Ads',
    faqs: [
      { question: 'What budget should I plan for paid ads?', answer: 'The right budget depends on your industry, goals, and the platforms you want to run on. Contact us for a free consultation — we will assess your market and recommend the most effective starting budget with a clear expected return.' },
      { question: 'How quickly will I see results from paid ads?', answer: 'Meta Ads can generate leads from day one. The first 2–4 weeks are a learning phase as the algorithm gathers data. Full optimisation typically happens within 4–6 weeks. Google Ads often shows faster results due to higher buyer intent.' },
      { question: 'Do you create the ad creatives?', answer: 'Yes, we handle everything — audience research, creative design, copywriting, campaign setup, and ongoing management. You review and approve all creatives before they go live. Nothing runs without your sign-off.' },
    ],
  },
  {
    category: 'Social Media',
    faqs: [
      { question: 'Which social platforms do you manage?', answer: 'Instagram, Facebook, LinkedIn, TikTok, and Twitter/X. We recommend platforms based on where your specific audience is most active — not a one-size-fits-all approach. Strategy always comes before execution.' },
      { question: 'Can I review content before it is posted?', answer: 'Absolutely. We share a full content calendar each month for your approval before anything goes live. You have complete visibility and control over every post, caption, and creative.' },
      { question: 'How do you grow followers organically?', answer: 'Through consistent high-quality content, strategic hashtag research, active engagement with your target audience, and collaboration with relevant micro-influencers where appropriate. We focus on real, engaged followers — not inflated numbers.' },
    ],
  },
  {
    category: 'Graphic Design',
    faqs: [
      { question: 'What file formats will I receive after a design project?', answer: 'You receive all formats needed for both digital and print use — PNG, JPG, PDF, SVG, and fully editable source files. We ensure you have everything you need for every platform and use case.' },
      { question: 'How many revisions are included?', answer: 'Every project includes revision rounds until you are completely satisfied. We work collaboratively with you until the final design matches your vision exactly — we do not cut corners or rush the process.' },
      { question: 'Can you design in my existing brand style?', answer: 'Absolutely. We study your existing brand guidelines, colour palette, and typography to ensure every design is consistent with your visual identity. If you do not have guidelines yet, we can help create them as part of the project.' },
    ],
  },
  {
    category: 'Branding & Content',
    faqs: [
      { question: 'Do I own all the brand files after the project?', answer: 'Yes, 100%. Upon final payment you receive full ownership of all source files in every format — AI, EPS, SVG, PNG, PDF. No licensing fees, no ongoing costs. Everything is yours.' },
      { question: 'How long does a brand identity project take?', answer: 'A complete brand identity — logo, colour palette, typography, and brand guidelines — typically takes 3–5 weeks from brief to final delivery, depending on feedback speed and revision rounds.' },
      { question: 'How much content do I get per month?', answer: 'Content volumes are tailored to your business needs and goals. Contact us to discuss your requirements and we will put together a package that matches your objectives and keeps your audience consistently engaged.' },
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
