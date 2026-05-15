import type { Metadata } from 'next'
import ContactForm from './ContactForm'
import Marquee from '@/components/sections/Marquee'

export const metadata: Metadata = {
  title: 'Contact Us',
  description:
    'Get in touch with NOFABI — book a free 30-minute strategy call or send us a message. We respond within 24 hours.',
  openGraph: {
    title: "Contact NOFABI | Pakistan's #1 Digital Agency",
    description: 'Book a free strategy call or send us a message. We help Pakistani businesses grow online.',
    url: '/contact',
  },
}

export default function ContactPage() {
  return (
    <>
      <section className="bg-sky-900 pt-32 pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="inline-block text-sky-400 text-sm font-semibold tracking-widest uppercase mb-4">
            Get in Touch
          </span>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white mb-6">
            Let&apos;s Grow Your Business
          </h1>
          <p className="text-sky-200 text-lg md:text-xl max-w-2xl mx-auto">
            Tell us about your business and goals. We will get back to you within 24 hours with a tailored plan.
          </p>
        </div>
      </section>

      <Marquee />

      <section className="bg-sky-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
            <div className="lg:col-span-2 space-y-8">
              <div>
                <h2 className="text-2xl font-bold text-slate-900 mb-6">Contact Information</h2>
                <div className="space-y-5">
                  {[
                    { icon: '📞', label: 'Phone', value: '+92 300 123 4567', href: 'tel:+923001234567' },
                    { icon: '✉️', label: 'Email', value: 'hello@nofabi.com', href: 'mailto:hello@nofabi.com' },
                    { icon: '📍', label: 'Address', value: 'Lahore, Punjab, Pakistan', href: null },
                  ].map((item) => (
                    <div key={item.label} className="flex items-start gap-4">
                      <span className="text-2xl">{item.icon}</span>
                      <div>
                        <p className="text-slate-500 text-xs font-semibold uppercase tracking-widest">{item.label}</p>
                        {item.href ? (
                          <a href={item.href} className="text-slate-900 font-medium hover:text-sky-500 transition-colors">
                            {item.value}
                          </a>
                        ) : (
                          <p className="text-slate-900 font-medium">{item.value}</p>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-sky-900 rounded-2xl p-6">
                <p className="text-white font-semibold mb-2">Prefer WhatsApp?</p>
                <p className="text-sky-200 text-sm mb-4">
                  Send us a message directly and get a response within 1 hour during business hours.
                </p>
                <a
                  href="https://wa.me/923001234567"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-green-500 hover:bg-green-400 text-white font-semibold px-5 py-3 rounded-xl transition-colors duration-200 text-sm"
                >
                  <span>💬</span> Open WhatsApp Chat
                </a>
              </div>

              <div className="bg-white rounded-2xl p-6 border border-sky-100">
                <p className="font-semibold text-slate-900 mb-3">Business Hours (PKT)</p>
                <div className="space-y-2 text-sm">
                  {[
                    { day: 'Monday – Friday', hours: '9:00 AM – 7:00 PM' },
                    { day: 'Saturday', hours: '10:00 AM – 4:00 PM' },
                    { day: 'Sunday', hours: 'Closed' },
                  ].map((h) => (
                    <div key={h.day} className="flex justify-between">
                      <span className="text-slate-500">{h.day}</span>
                      <span className="text-slate-900 font-medium">{h.hours}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="lg:col-span-3">
              <div className="bg-white rounded-3xl p-8 shadow-sm border border-sky-100">
                <h2 className="text-2xl font-bold text-slate-900 mb-6">Send Us a Message</h2>
                <ContactForm />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
