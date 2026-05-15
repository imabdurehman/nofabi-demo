interface WireframeGlobeProps {
  size?: number
  opacity?: number
  className?: string
}

export default function WireframeGlobe({ size = 180, opacity = 1, className = '' }: WireframeGlobeProps) {
  const s = size / 200
  const cx = size / 2
  const cy = size / 2
  const r = 80 * s

  return (
    <svg
      viewBox={`0 0 ${size} ${size}`}
      width={size}
      height={size}
      className={className}
      style={{ opacity }}
      aria-hidden="true"
    >
      <style>{`
        @keyframes nofabiGlobeSpin {
          from { transform: rotateY(0deg); }
          to { transform: rotateY(360deg); }
        }
        .nofabi-globe-spin {
          animation: nofabiGlobeSpin 12s linear infinite;
          transform-box: fill-box;
          transform-origin: 50% 50%;
        }
      `}</style>

      <circle cx={cx} cy={cy} r={r} fill="none" stroke="rgba(14,165,233,0.35)" strokeWidth={1} />

      {([8, 25, 40, 55, 70] as const).map((ry, i) => (
        <ellipse
          key={i}
          cx={cx}
          cy={cy}
          rx={r}
          ry={ry * s}
          fill="none"
          stroke="rgba(14,165,233,0.25)"
          strokeWidth={0.8}
        />
      ))}

      <g className="nofabi-globe-spin">
        {([20, 40, 60] as const).map((ry, i) => (
          <ellipse
            key={i}
            cx={cx}
            cy={cy}
            rx={r}
            ry={ry * s}
            fill="none"
            stroke="rgba(14,165,233,0.35)"
            strokeWidth={0.8}
          />
        ))}
      </g>
    </svg>
  )
}
