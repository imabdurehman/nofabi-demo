export interface NavLink {
  href: string
  label: string
}

export interface Service {
  title: string
  description: string
  benefits: string[]
}

export interface Testimonial {
  id: number
  name: string
  company: string
  role: string
  quote: string
}

export interface FaqItem {
  question: string
  answer: string
}

export interface Stat {
  value: number
  suffix: string
  label: string
}

export interface TeamMember {
  name: string
  role: string
  initials: string
  bio: string
}

export interface ContactFormData {
  name: string
  email: string
  phone: string
  service: string
  message: string
  honeypot: string
}

export interface ApiResponse {
  success: boolean
  message: string
}

export interface ProcessStep {
  number: string
  title: string
  description: string
}

export interface WhyUsPoint {
  title: string
  detail: string
}
