const items = [
  'Custom Branding',
  'Web Development',
  'SEO',
  'Social Media',
  'Meta Ads',
  'Google Ads',
  'Content Creation',
  'Graphic Design',
]

const separator = <span className="text-white mx-6 select-none text-xl font-bold">*</span>

function MarqueeRow({ reverse = false }: { reverse?: boolean }) {
  const doubled = [...items, ...items]
  return (
    <div className="overflow-hidden py-6 group">
      <div
        className={`flex whitespace-nowrap w-max ${
          reverse
            ? 'animate-marquee-reverse group-hover:[animation-play-state:paused]'
            : 'animate-marquee group-hover:[animation-play-state:paused]'
        }`}
      >
        {doubled.map((item, idx) => (
          <span key={idx} className="inline-flex items-center text-white font-extrabold text-base tracking-widest uppercase px-2">
            {item}
            {separator}
          </span>
        ))}
      </div>
    </div>
  )
}

export default function Marquee() {
  return (
    <section className="w-full bg-sky-950 py-0 overflow-hidden" aria-hidden="true">
      <MarqueeRow />
    </section>
  )
}
