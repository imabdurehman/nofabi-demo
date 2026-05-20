import { NextRequest, NextResponse } from 'next/server'
import { headers } from 'next/headers'
import { sendContactEmail } from '@/lib/sendEmail'
import type { ContactFormData, ApiResponse } from '@/types'

interface RateLimitEntry {
  count: number
  resetTime: number
}

const rateLimitMap = new Map<string, RateLimitEntry>()

function checkRateLimit(ip: string): boolean {
  const now = Date.now()
  const entry = rateLimitMap.get(ip)

  if (!entry || now > entry.resetTime) {
    rateLimitMap.set(ip, { count: 1, resetTime: now + 10 * 60 * 1000 })
    return true
  }

  if (entry.count >= 3) return false

  entry.count++
  return true
}

function sanitize(input: string): string {
  return input.trim().replace(/<[^>]*>/g, '').slice(0, 2000)
}

function isValidEmail(email: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
}

function isValidPhone(phone: string): boolean {
  return /^03[0-9]{9}$/.test(phone.trim())
}

export async function POST(request: NextRequest): Promise<NextResponse<ApiResponse>> {
  const headersList = await headers()
  const ip =
    headersList.get('x-forwarded-for')?.split(',')[0]?.trim() ??
    headersList.get('x-real-ip') ??
    'unknown'

  if (!checkRateLimit(ip)) {
    return NextResponse.json(
      { success: false, message: 'Too many requests. Please wait a few minutes before trying again.' },
      { status: 429 }
    )
  }

  let body: Partial<ContactFormData>
  try {
    body = await request.json()
  } catch {
    return NextResponse.json(
      { success: false, message: 'Invalid request format.' },
      { status: 400 }
    )
  }

  if (body.honeypot && body.honeypot.trim() !== '') {
    return NextResponse.json({ success: true, message: 'Message received.' })
  }

  const name = sanitize(body.name ?? '')
  const email = sanitize(body.email ?? '').toLowerCase()
  const phone = sanitize(body.phone ?? '')
  const service = sanitize(body.service ?? '')
  const message = sanitize(body.message ?? '')

  if (!name || name.length < 2 || !/^[a-zA-Z\s]{2,50}$/.test(name)) {
    return NextResponse.json({ success: false, message: 'Invalid name.' }, { status: 400 })
  }
  if (!email || !isValidEmail(email)) {
    return NextResponse.json({ success: false, message: 'A valid email address is required.' }, { status: 400 })
  }
  if (!phone || !isValidPhone(phone)) {
    return NextResponse.json({ success: false, message: 'Invalid Pakistani phone number.' }, { status: 400 })
  }
  if (!service) {
    return NextResponse.json({ success: false, message: 'Please select a service.' }, { status: 400 })
  }
  if (!message || message.length < 20) {
    return NextResponse.json({ success: false, message: 'Please provide a message of at least 20 characters.' }, { status: 400 })
  }

  const timestamp = new Date().toISOString()
  console.log(`[NOFABI Contact] ${timestamp} | IP: ${ip} | ${name} <${email}> | Service: ${service}`)

  try {
    await sendContactEmail({ name, email, phone, service, message, honeypot: '' })
    return NextResponse.json({
      success: true,
      message: "Thank you! We've received your message and will get back to you within 24 hours.",
    })
  } catch {
    console.error(`[NOFABI Contact] Email send failed for ${email} at ${timestamp}`)
    return NextResponse.json(
      { success: false, message: 'Your message could not be delivered right now. Please try again or contact us via WhatsApp.' },
      { status: 500 }
    )
  }
}
