import type { Metadata } from 'next'
import Marquee from '@/components/sections/Marquee'

export const metadata: Metadata = {
  title: 'Terms of Service',
  description: 'NOFABI\'s terms of service — the terms and conditions governing use of our digital marketing services.',
  openGraph: { title: 'Terms of Service | NOFABI', url: '/terms-of-service' },
}

const sections = [
  {
    title: '1. Acceptance of Terms',
    content: 'By engaging NOFABI\'s services, accessing our website, or signing a service agreement, you agree to be bound by these Terms of Service. If you do not agree to these terms, please do not use our services. These terms constitute a legally binding agreement between you (the client) and NOFABI.',
  },
  {
    title: '2. Services',
    content: 'NOFABI provides digital marketing services including but not limited to SEO, web development, social media management, paid advertising (Meta and Google Ads), branding, property management marketing, and content production. The specific services, deliverables, and timelines for each engagement are outlined in a separate Service Agreement or Proposal signed by both parties. NOFABI reserves the right to subcontract portions of work to qualified third parties where appropriate.',
  },
  {
    title: '3. Payment Terms',
    content: 'Fees for services are specified in the applicable Service Agreement. Unless otherwise agreed, invoices are due within 7 days of issue. For monthly retainer services, payment is due at the start of each month. NOFABI reserves the right to pause or suspend services if payment is not received within 14 days of the due date. All fees are exclusive of applicable taxes. Refunds are not provided for work already completed or campaigns already launched.',
  },
  {
    title: '4. Client Responsibilities',
    content: 'To enable NOFABI to deliver services effectively, you agree to provide timely access to required accounts, assets, and information; respond to requests for approvals and feedback within the agreed timelines; ensure all content and materials you provide to us do not infringe on third-party intellectual property rights; provide accurate business information and credentials; and notify us promptly of any changes that may affect campaign performance or strategy.',
  },
  {
    title: '5. Intellectual Property',
    content: 'Upon full payment, all creative assets, copy, and content produced specifically for your brand become your property. NOFABI retains ownership of its proprietary tools, methodologies, templates, and internal processes. NOFABI reserves the right to showcase work completed for clients in its portfolio and marketing materials unless explicitly agreed otherwise in writing. Third-party assets (stock images, fonts, plugins) are subject to their respective licensing terms.',
  },
  {
    title: '6. Confidentiality',
    content: 'Both parties agree to maintain the confidentiality of proprietary information shared during the engagement. NOFABI will not disclose your business strategies, campaign data, or financial information to third parties without your written consent, except as required by law. This obligation continues for 2 years after termination of the service relationship.',
  },
  {
    title: '7. Performance and Results',
    content: 'NOFABI will use professional skill and best practices to deliver services to a high standard. However, we cannot guarantee specific outcomes such as particular search engine rankings, revenue targets, or ad performance metrics, as these depend on factors outside our control including market conditions, platform algorithm changes, and competitive landscape. We are committed to transparency and will provide regular reports on performance against agreed KPIs.',
  },
  {
    title: '8. Termination',
    content: 'Either party may terminate a service agreement with 30 days written notice. NOFABI may terminate immediately for non-payment, breach of these terms, or conduct that violates applicable law or platform policies. Upon termination, all outstanding fees for work completed become immediately due. NOFABI will provide reasonable assistance to transfer campaign assets and accounts back to the client within 14 days of termination.',
  },
  {
    title: '9. Limitation of Liability',
    content: 'To the maximum extent permitted by law, NOFABI\'s liability for any claim arising out of or related to our services shall not exceed the total fees paid by the client in the 3 months preceding the claim. We are not liable for indirect, incidental, or consequential damages including loss of profits, data, or business opportunities. This limitation applies regardless of the legal theory of the claim.',
  },
  {
    title: '10. Governing Law',
    content: 'These Terms of Service are governed by the laws of Pakistan. Any disputes shall be resolved through good-faith negotiation. If resolution cannot be reached, disputes shall be subject to the jurisdiction of courts in Lahore, Pakistan. These terms represent the entire agreement between the parties and supersede any prior discussions or agreements regarding the subject matter.',
  },
  {
    title: '11. Changes to Terms',
    content: 'NOFABI reserves the right to update these Terms of Service at any time. Updated terms will be posted on this page. For existing clients, material changes will be communicated via email with 30 days notice before taking effect. Continued use of our services after changes constitute acceptance of the updated terms.',
  },
  {
    title: '12. Contact',
    content: 'For questions about these Terms of Service, please contact us at: Email: nofabiofficial@gmail.com | Phone: 0317 4941609 | Address: Lahore, Pakistan.',
  },
]

export default function TermsPage() {
  return (
    <>
      <section className="bg-sky-900 pt-32 pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="inline-block text-sky-400 text-sm font-semibold tracking-widest uppercase mb-4">Legal</span>
          <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-4">Terms of Service</h1>
          <p className="text-sky-300 text-sm">Last updated: January 2025</p>
        </div>
      </section>

      <Marquee />

      <section className="bg-white py-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-slate-600 leading-relaxed mb-10">
            Please read these Terms of Service carefully before engaging NOFABI&apos;s digital marketing services. These terms govern the relationship between NOFABI and its clients.
          </p>

          <div className="space-y-10">
            {sections.map((section) => (
              <div key={section.title}>
                <h2 className="text-lg font-bold text-slate-900 mb-3">{section.title}</h2>
                <p className="text-slate-600 leading-relaxed text-sm">{section.content}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
