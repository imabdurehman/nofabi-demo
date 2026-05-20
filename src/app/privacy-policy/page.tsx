import type { Metadata } from 'next'
import Marquee from '@/components/sections/Marquee'

export const metadata: Metadata = {
  title: 'Privacy Policy',
  description: 'NOFABI\'s privacy policy — how we collect, use, and protect your personal information.',
  openGraph: { title: 'Privacy Policy | NOFABI', url: '/privacy-policy' },
}

const sections = [
  {
    title: '1. Information We Collect',
    content: 'We collect information you provide directly to us when you fill out our contact form, request a quote, subscribe to our newsletter, or communicate with us. This may include your name, email address, phone number, company name, and any details you share about your business. We also collect certain technical information automatically, such as your IP address, browser type, and pages visited on our website, to help us understand how our site is used and improve our services.',
  },
  {
    title: '2. How We Use Your Information',
    content: 'We use the information we collect to respond to your inquiries and provide the services you request, send you proposals, reports, and updates related to our services, send marketing communications where you have consented or where permitted by law, improve and personalise your experience on our website, and comply with legal obligations. We do not sell, rent, or share your personal information with third parties for their own marketing purposes.',
  },
  {
    title: '3. Cookies and Tracking',
    content: 'Our website uses cookies and similar tracking technologies to enhance your browsing experience, analyse site traffic, and understand where our visitors are coming from. You can control cookie settings through your browser. Disabling cookies may affect the functionality of certain parts of our website. We also use Google Analytics to understand site usage, which processes data in accordance with Google\'s privacy policy.',
  },
  {
    title: '4. Data Security',
    content: 'We implement appropriate technical and organisational measures to protect your personal information against unauthorised access, alteration, disclosure, or destruction. All form submissions on our website are encrypted via HTTPS. However, no method of transmission over the internet is 100% secure, and we cannot guarantee absolute security of your information.',
  },
  {
    title: '5. Data Retention',
    content: 'We retain your personal information for as long as necessary to provide our services and comply with legal obligations. Client data is typically retained for the duration of the business relationship and for a reasonable period thereafter. You may request deletion of your personal data at any time by contacting us at nofabiofficial@gmail.com.',
  },
  {
    title: '6. Your Rights',
    content: 'You have the right to access the personal information we hold about you, request correction of inaccurate information, request deletion of your personal data (subject to legal retention requirements), opt out of marketing communications at any time by clicking unsubscribe in any email or contacting us directly, and file a complaint with your relevant data protection authority.',
  },
  {
    title: '7. Third-Party Services',
    content: 'Our services may involve use of third-party platforms including Meta (Facebook/Instagram), Google Ads, and other digital marketing tools on behalf of our clients. These platforms have their own privacy policies governing data use. When we manage campaigns for clients, we act as data processors and our clients act as data controllers for their customer data.',
  },
  {
    title: '8. Changes to This Policy',
    content: 'We may update this Privacy Policy from time to time to reflect changes in our practices or applicable law. We will post the updated policy on this page with a revised "Last Updated" date. We encourage you to review this policy periodically. Your continued use of our services after changes are posted constitutes acceptance of the updated policy.',
  },
  {
    title: '9. Contact Us',
    content: 'If you have any questions about this Privacy Policy or how we handle your personal information, please contact us at: Email: nofabiofficial@gmail.com | Phone: 0317 4941609 | Address: Lahore, Pakistan. We aim to respond to all privacy-related inquiries within 5 business days.',
  },
]

export default function PrivacyPolicyPage() {
  return (
    <>
      <section className="bg-sky-900 pt-32 pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="inline-block text-sky-400 text-sm font-semibold tracking-widest uppercase mb-4">Legal</span>
          <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-4">Privacy Policy</h1>
          <p className="text-sky-300 text-sm">Last updated: January 2025</p>
        </div>
      </section>

      <Marquee />

      <section className="bg-white py-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-slate-600 leading-relaxed mb-10">
            NOFABI (&quot;we&quot;, &quot;us&quot;, or &quot;our&quot;) is committed to protecting your privacy. This Privacy Policy explains how we collect, use, and safeguard your personal information when you visit our website or use our services.
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
