import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import Marquee from '@/components/sections/Marquee'

type ServiceData = {
  slug: string
  title: string
  eyebrow: string
  shortDesc: string
  fullDesc: string
  benefits: string[]
  process: { step: string; desc: string }[]
  faqs: { q: string; a: string }[]
}

const services: ServiceData[] = [
  {
    slug: 'seo',
    title: 'SEO Optimization',
    eyebrow: 'Search Engine Optimisation',
    shortDesc: 'Rank higher on Google and drive organic traffic that converts.',
    fullDesc: 'Our SEO service combines technical excellence with strategic content to build sustainable organic growth. We research your market, fix what\'s broken, and build what\'s missing — all with transparent monthly reporting so you always know where you stand.',
    benefits: ['Technical SEO audit and implementation', 'In-depth keyword research and content planning', 'On-page optimisation for every key page', 'Off-page link building and authority growth', 'Local SEO for Pakistani markets', 'Core Web Vitals and site speed improvements', 'Monthly ranking and organic traffic reports'],
    process: [
      { step: 'Audit', desc: 'Full technical, content, and backlink audit of your current site.' },
      { step: 'Strategy', desc: 'Custom keyword roadmap targeting your highest-value search terms.' },
      { step: 'Optimise', desc: 'Technical fixes, on-page content, and off-page authority building.' },
      { step: 'Report', desc: 'Monthly performance dashboard showing rankings, traffic, and leads.' },
    ],
    faqs: [
      { q: 'How long does SEO take to show results?', a: 'Measurable improvements typically appear in 3–6 months, with significant ranking gains at the 6–12 month mark. SEO compounds over time — the longer you invest, the stronger the results.' },
      { q: 'Do you guarantee first-page rankings?', a: 'No ethical agency can guarantee specific rankings since Google controls its algorithm. We guarantee a proven process, transparent reporting, and consistent improvement toward your target keywords.' },
      { q: 'Do you work for Pakistani businesses only?', a: 'We primarily serve Pakistani businesses but also work with international clients targeting Pakistani audiences or Urdu-language search queries.' },
    ],
  },
  {
    slug: 'web-development',
    title: 'Web Development',
    eyebrow: 'Website Design & Development',
    shortDesc: 'Fast, beautiful websites built to convert visitors into customers.',
    fullDesc: 'We build high-performance websites using modern frameworks optimised for speed, mobile experience, and conversions. Every project starts with your business goals and ends with a site that works as hard as you do — 24/7.',
    benefits: ['Custom design tailored to your brand identity', 'Mobile-first, fully responsive layouts', 'Core Web Vitals and page speed optimisation', 'SEO-ready structure from day one', 'E-commerce and booking system integrations', 'CMS setup for easy self-management', 'Ongoing maintenance and support available'],
    process: [
      { step: 'Discovery', desc: 'We learn your goals, audience, and competitive landscape.' },
      { step: 'Design', desc: 'Wireframes and visual mockups built around your brand.' },
      { step: 'Develop', desc: 'Clean, fast code with mobile-first responsiveness baked in.' },
      { step: 'Launch', desc: 'Full QA, performance testing, and a smooth handover.' },
    ],
    faqs: [
      { q: 'How long does a website project take?', a: 'A standard business website typically takes 3–6 weeks from kickoff to launch. E-commerce or complex projects may take 6–10 weeks. We provide a clear timeline upfront with defined milestones.' },
      { q: 'WordPress or custom development?', a: 'It depends on your needs. We build on both — custom Next.js for performance-critical sites, WordPress for content-heavy sites needing easy self-management. We recommend the right tool for your situation.' },
      { q: 'Can you redesign my existing website?', a: 'Yes. We analyse your current site\'s performance, preserve what\'s working SEO-wise, and improve everything else — without hurting your existing rankings.' },
    ],
  },
  {
    slug: 'social-media',
    title: 'Social Media Management',
    eyebrow: 'Social Media Marketing',
    shortDesc: 'Build a loyal audience and turn followers into paying customers.',
    fullDesc: 'Strategic social media management that goes beyond posting. We build a consistent brand presence, grow your following with the right audience, and create content that drives real engagement and business results across every platform.',
    benefits: ['Monthly content calendar and strategy', 'Custom post design and professional copywriting', 'Consistent daily/weekly posting schedule', 'Community management and comment responses', 'Hashtag research and trend monitoring', 'Stories, Reels, and short-form video content', 'Monthly growth and engagement analytics'],
    process: [
      { step: 'Audit', desc: 'Review of your current accounts, content, and competitors.' },
      { step: 'Strategy', desc: 'Platform selection, content pillars, and posting schedule.' },
      { step: 'Create', desc: 'Design and copy produced and scheduled in advance.' },
      { step: 'Optimise', desc: 'Monthly performance review and strategy adjustments.' },
    ],
    faqs: [
      { q: 'Which platforms do you manage?', a: 'Instagram, Facebook, LinkedIn, TikTok, and Twitter/X. We recommend platforms based on where your specific audience is most active — not a one-size-fits-all approach.' },
      { q: 'Can I review content before it is posted?', a: 'Absolutely. We share a content calendar each month for your approval before anything goes live. You have full control and visibility over every post.' },
      { q: 'How do you grow followers organically?', a: 'Through consistent quality content, strategic hashtag use, active engagement with your target audience, and where appropriate, collaboration with micro-influencers in your niche. We focus on genuine followers.' },
    ],
  },
  {
    slug: 'meta-ads',
    title: 'Meta Ads',
    eyebrow: 'Facebook & Instagram Advertising',
    shortDesc: 'Reach your exact audience on Facebook and Instagram and maximise ROAS.',
    fullDesc: 'Data-driven Meta advertising that finds your ideal customers where they spend their time. We handle everything from audience research and creative production to campaign management and conversion tracking — all optimised for maximum return on ad spend.',
    benefits: ['Detailed audience research and targeting setup', 'Custom creative ad design and copywriting', 'A/B testing of audiences, creatives, and offers', 'Retargeting campaigns for website visitors', 'Full conversion tracking and pixel setup', 'Transparent ROAS and cost-per-lead reporting', 'Ongoing campaign scaling and optimisation'],
    process: [
      { step: 'Research', desc: 'Audience analysis, competitor ads research, and offer positioning.' },
      { step: 'Create', desc: 'Ad creatives and copy tailored to each funnel stage.' },
      { step: 'Launch', desc: 'Structured campaign setup with proper tracking in place.' },
      { step: 'Optimise', desc: 'Daily monitoring, weekly reports, and continuous A/B testing.' },
    ],
    faqs: [
      { q: 'What is the minimum recommended ad budget?', a: 'We recommend a minimum of PKR 50,000/month in ad spend for meaningful results. Management fees are separate. Lower budgets limit the algorithm\'s ability to learn and optimise effectively.' },
      { q: 'How quickly will I see results?', a: 'Meta Ads can generate leads from day one. The first 2–4 weeks are a learning phase. Full optimisation typically occurs within 4–6 weeks as the algorithm gathers data.' },
      { q: 'Do you create the ads or do I?', a: 'We handle everything — research, design, copywriting, campaign setup, and management. You simply review and approve creatives before launch. All we need is your brand assets and offer details.' },
    ],
  },
  {
    slug: 'google-ads',
    title: 'Google Ads',
    eyebrow: 'Pay-Per-Click Advertising',
    shortDesc: 'Capture high-intent buyers at the moment they search on Google.',
    fullDesc: 'Expert Google Ads management that puts your business in front of people actively searching for what you offer. We manage every aspect of your PPC campaigns — from keyword strategy to landing page optimisation — for consistent, profitable results.',
    benefits: ['Search, Display, Shopping, and YouTube campaigns', 'In-depth keyword research and negative keyword management', 'Quality Score improvement and ad rank optimisation', 'Conversion tracking via Google Tag Manager', 'Landing page optimisation for higher conversion rates', 'Competitor analysis and bid strategy management', 'Weekly performance dashboards'],
    process: [
      { step: 'Audit', desc: 'Review existing campaigns or conduct fresh market research for new setups.' },
      { step: 'Build', desc: 'Account structure, keyword groups, and ad copy creation.' },
      { step: 'Track', desc: 'Full conversion tracking setup so every rupee of spend is accountable.' },
      { step: 'Optimise', desc: 'Daily bid management, A/B testing, and weekly reporting.' },
    ],
    faqs: [
      { q: 'What is the minimum budget for Google Ads?', a: 'We recommend PKR 40,000–60,000/month in ad spend minimum. Our management fee is separate. Smaller budgets can work for niche, low-competition keywords.' },
      { q: 'Google Ads vs Meta Ads — which should I choose?', a: 'Both serve different purposes. Google captures people actively searching (high intent); Meta finds people matching your customer profile (interest-based). Google is better for service businesses if you can only choose one.' },
      { q: 'Do I need a good website for Google Ads to work?', a: 'Yes. The best ads won\'t convert if your landing page is slow or unclear. We assess your landing pages as part of setup and recommend improvements where needed.' },
    ],
  },
  {
    slug: 'branding',
    title: 'Branding & Identity',
    eyebrow: 'Brand Design & Strategy',
    shortDesc: 'Build a brand identity that resonates, differentiates, and lasts.',
    fullDesc: 'Your brand is more than a logo — it is the entire experience people have with your business. We build comprehensive brand identities from scratch or refresh existing ones, ensuring every touchpoint communicates who you are and why customers should choose you.',
    benefits: ['Logo design with multiple concept directions', 'Complete brand guidelines document', 'Colour palette and typography system', 'Brand messaging and tone of voice', 'Business card and stationery design', 'Social media profile branding kit', 'Full ownership of all final source files'],
    process: [
      { step: 'Discovery', desc: 'Brand questionnaire, competitor analysis, and positioning workshop.' },
      { step: 'Concepts', desc: 'Multiple logo and identity concept directions for your review.' },
      { step: 'Refine', desc: 'Two rounds of revisions to perfect the chosen direction.' },
      { step: 'Deliver', desc: 'Final brand package in all formats — print, web, and social.' },
    ],
    faqs: [
      { q: 'What if I don\'t like the initial concepts?', a: 'We provide 2–3 distinct concept directions based on your brief. Each package includes revision rounds. Thorough discovery upfront almost always leads to concepts clients love.' },
      { q: 'How long does a brand identity project take?', a: 'A complete brand identity project typically takes 3–5 weeks from brief to final delivery, depending on revision speed and feedback turnaround.' },
      { q: 'Do I own all the files?', a: 'Yes, 100%. Upon final payment you receive full ownership of all source files in every format — AI, EPS, SVG, PNG, PDF. No licensing or ongoing fees.' },
    ],
  },
  {
    slug: 'property-management',
    title: 'Property Management Marketing',
    eyebrow: 'Real Estate Digital Marketing',
    shortDesc: 'Generate quality property leads and build your real estate brand online.',
    fullDesc: 'Specialised digital marketing for property developers, real estate agencies, and property management companies. We understand the Pakistani property market and build targeted campaigns that attract serious buyers, tenants, and investors.',
    benefits: ['Property listing promotion on Facebook and Instagram', 'Google Ads targeting property search terms', 'Real estate SEO for local and national keywords', 'Branded social media presence for your agency', 'WhatsApp inquiry automation and follow-up', 'Video tours and property content production', 'Monthly lead volume and cost-per-lead reporting'],
    process: [
      { step: 'Analyse', desc: 'Market research on your property niche, location, and target buyer/tenant profile.' },
      { step: 'Brand', desc: 'Professional digital presence that builds trust with serious prospects.' },
      { step: 'Advertise', desc: 'Targeted Meta and Google campaigns with property-specific creatives.' },
      { step: 'Convert', desc: 'Inquiry handling setup and lead nurturing for higher close rates.' },
    ],
    faqs: [
      { q: 'Do you work with individual agents or agencies?', a: 'Both. We work with solo property agents building their personal brand as well as full real estate agencies with multiple listings. Packages are tailored to your scale.' },
      { q: 'How do you generate property leads?', a: 'Through targeted Meta and Google Ads, SEO-optimised property content, and social media campaigns. We also set up WhatsApp inquiry flows so no lead falls through the cracks.' },
      { q: 'Which cities do you target?', a: 'Primarily Lahore, Karachi, Islamabad, and other major Pakistani cities. We also target overseas Pakistanis interested in property investment back home.' },
    ],
  },
  {
    slug: 'content-production',
    title: 'Content Production',
    eyebrow: 'Video, Photo & Written Content',
    shortDesc: 'Compelling content that tells your story and drives engagement across every channel.',
    fullDesc: 'High-quality content production that covers every format your brand needs. From social media Reels to long-form blog articles, we create content that educates, entertains, and converts across all your digital channels.',
    benefits: ['Short-form video and Instagram Reels production', 'TikTok content creation and strategy', 'Blog writing and SEO-optimised articles', 'Product description and website copy', 'Email newsletter writing', 'Podcast show notes and script writing', 'Content calendar planning and scheduling'],
    process: [
      { step: 'Brief', desc: 'Content strategy session to align on voice, topics, and goals.' },
      { step: 'Produce', desc: 'Script, design, film, or write — depending on content type.' },
      { step: 'Review', desc: 'Client review and revisions before any content goes live.' },
      { step: 'Distribute', desc: 'Scheduled publishing across your chosen platforms.' },
    ],
    faqs: [
      { q: 'Do you film on location?', a: 'Yes, for clients in Lahore and surrounding areas. For other cities, we work remotely — providing scripts, direction, and editing for footage you capture. We also create fully digital content that needs no filming.' },
      { q: 'How much content do I get per month?', a: 'Typical monthly packages include 8–16 social posts, 2–4 blog articles, and 2–4 short-form videos. Custom volumes are available.' },
      { q: 'Who owns the content after it is created?', a: 'You do. All content produced for your brand is 100% yours. There are no licensing restrictions or re-use limitations once delivered and paid for.' },
    ],
  },
]

export function generateStaticParams() {
  return services.map((s) => ({ slug: s.slug }))
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params
  const service = services.find((s) => s.slug === slug)
  if (!service) return {}
  return {
    title: service.title,
    description: service.shortDesc,
    openGraph: { title: `${service.title} | NOFABI`, url: `/services/${slug}` },
  }
}

export default async function ServicePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const service = services.find((s) => s.slug === slug)
  if (!service) notFound()

  return (
    <>
      <section className="bg-sky-900 pt-32 pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="inline-block text-sky-400 text-sm font-semibold tracking-widest uppercase mb-4">
            {service.eyebrow}
          </span>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white mb-6">
            {service.title}
          </h1>
          <p className="text-sky-200 text-lg md:text-xl max-w-2xl mx-auto">
            {service.shortDesc}
          </p>
        </div>
      </section>

      <Marquee />

      {/* Full description + benefits */}
      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <div>
              <h2 className="text-2xl font-bold text-slate-900 mb-5">What We Deliver</h2>
              <p className="text-slate-600 leading-relaxed mb-8">{service.fullDesc}</p>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 bg-sky-500 hover:bg-sky-400 text-white font-semibold px-6 py-3 rounded-full transition-colors duration-200"
              >
                Get Free Quote
              </Link>
            </div>
            <div>
              <h2 className="text-2xl font-bold text-slate-900 mb-5">What&apos;s Included</h2>
              <ul className="space-y-3">
                {service.benefits.map((benefit) => (
                  <li key={benefit} className="flex items-start gap-3 text-slate-700">
                    <span className="w-5 h-5 rounded-full bg-sky-100 text-sky-600 flex items-center justify-center text-xs font-bold shrink-0 mt-0.5">✓</span>
                    {benefit}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="bg-sky-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="inline-block text-sky-500 text-sm font-semibold tracking-widest uppercase mb-3">Our Process</span>
            <h2 className="text-3xl font-bold text-slate-900">How We Work</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {service.process.map((p, i) => (
              <div key={p.step} className="bg-white rounded-2xl p-6 border border-sky-100">
                <div className="w-10 h-10 rounded-xl bg-sky-500 text-white flex items-center justify-center font-bold text-sm mb-4">
                  {i + 1}
                </div>
                <h3 className="font-bold text-slate-900 mb-2">{p.step}</h3>
                <p className="text-slate-500 text-sm leading-relaxed">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="bg-white py-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <span className="inline-block text-sky-500 text-sm font-semibold tracking-widest uppercase mb-3">FAQ</span>
            <h2 className="text-3xl font-bold text-slate-900">Common Questions</h2>
          </div>
          <div className="space-y-4">
            {service.faqs.map((faq) => (
              <div key={faq.q} className="border border-sky-100 rounded-2xl p-6">
                <h3 className="font-semibold text-slate-900 mb-2">{faq.q}</h3>
                <p className="text-slate-600 text-sm leading-relaxed">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-sky-500 py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-extrabold text-white mb-4">Ready to Get Started?</h2>
          <p className="text-sky-100 mb-8">
            Book a free 30-minute consultation and let&apos;s talk about how {service.title} can grow your business.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 bg-white text-sky-900 font-bold px-8 py-4 rounded-full hover:bg-sky-50 transition-colors duration-200"
            >
              Book Free Consultation
            </Link>
            <Link
              href="/services"
              className="inline-flex items-center justify-center gap-2 border-2 border-white text-white font-semibold px-8 py-4 rounded-full hover:bg-white hover:text-sky-900 transition-colors duration-200"
            >
              View All Services
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
