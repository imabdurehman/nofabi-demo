import { Star } from 'lucide-react'

interface TestimonialCardProps {
  name: string
  company: string
  role: string
  quote: string
}

export default function TestimonialCard({
  name,
  company,
  role,
  quote,
}: TestimonialCardProps) {
  const initials = name
    .split(' ')
    .map((n) => n[0])
    .join('')
    .toUpperCase()
    .slice(0, 2)

  return (
    <div className="bg-white rounded-2xl p-8 shadow-lg border border-sky-100 flex flex-col h-full">
      <div className="flex gap-1 mb-4">
        {Array.from({ length: 5 }).map((_, i) => (
          <Star key={i} className="w-4 h-4 fill-sky-500 text-sky-500" />
        ))}
      </div>
      <blockquote className="text-slate-700 text-base leading-relaxed flex-1 italic">
        &ldquo;{quote}&rdquo;
      </blockquote>
      <div className="flex items-center gap-3 mt-6 pt-6 border-t border-sky-100">
        <div className="w-11 h-11 rounded-full bg-gradient-to-br from-sky-500 to-sky-900 flex items-center justify-center shrink-0">
          <span className="text-white font-bold text-sm">{initials}</span>
        </div>
        <div>
          <p className="font-semibold text-slate-900 text-sm">{name}</p>
          <p className="text-slate-500 text-xs">{role}, {company}</p>
        </div>
      </div>
    </div>
  )
}
