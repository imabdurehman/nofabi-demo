'use client'

import { useEffect, useRef } from 'react'
import createGlobe, { type COBEOptions } from 'cobe'
import { useMotionValue, useSpring } from 'framer-motion'
import { cn } from '@/lib/utils'

const MOVEMENT_DAMPING = 1400

export const GLOBE_CONFIG: COBEOptions = {
  width: 800,
  height: 800,
  phi: 0,
  theta: 0.3,
  dark: 1,
  diffuse: 0.4,
  mapSamples: 16000,
  mapBrightness: 1.2,
  devicePixelRatio: 2,
  baseColor: [1, 1, 1],
  markerColor: [0.14, 0.65, 0.91],
  glowColor: [0.14, 0.65, 0.91],
  markers: [
    { location: [31.5204, 74.3587], size: 0.1 },  // Lahore
    { location: [24.8607, 67.0011], size: 0.07 },  // Karachi
    { location: [33.6844, 73.0479], size: 0.07 },  // Islamabad
    { location: [25.2048, 55.2708], size: 0.06 },  // Dubai
    { location: [51.5074, -0.1278], size: 0.05 },  // London
    { location: [40.7128, -74.0060], size: 0.06 }, // New York
    { location: [1.3521, 103.8198], size: 0.05 },  // Singapore
    { location: [19.0760, 72.8777], size: 0.05 },  // Mumbai
    { location: [39.9042, 116.4074], size: 0.05 }, // Beijing
    { location: [30.0444, 31.2357], size: 0.05 },  // Cairo
  ],
}

export function Globe({
  className,
  config = GLOBE_CONFIG,
}: {
  className?: string
  config?: COBEOptions
}) {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const phiRef = useRef(0)
  const widthRef = useRef(0)
  const pointerInteracting = useRef<number | null>(null)

  const r = useMotionValue(0)
  const rs = useSpring(r, { mass: 1, damping: 30, stiffness: 100 })

  const updatePointerInteraction = (value: number | null) => {
    pointerInteracting.current = value
    if (canvasRef.current) {
      canvasRef.current.style.cursor = value !== null ? 'grabbing' : 'grab'
    }
  }

  const updateMovement = (clientX: number) => {
    if (pointerInteracting.current !== null) {
      const delta = clientX - pointerInteracting.current
      r.set(r.get() + delta / MOVEMENT_DAMPING)
    }
  }

  useEffect(() => {
    let animFrame: number

    const onResize = () => {
      if (canvasRef.current) {
        widthRef.current = canvasRef.current.offsetWidth
      }
    }
    window.addEventListener('resize', onResize)
    onResize()

    const globe = createGlobe(canvasRef.current!, {
      ...config,
      width: widthRef.current * 2,
      height: widthRef.current * 2,
    })

    function animate() {
      if (!pointerInteracting.current) phiRef.current += 0.005
      globe.update({
        phi: phiRef.current + rs.get(),
        width: widthRef.current * 2,
        height: widthRef.current * 2,
      })
      animFrame = requestAnimationFrame(animate)
    }
    animFrame = requestAnimationFrame(animate)

    setTimeout(() => {
      if (canvasRef.current) canvasRef.current.style.opacity = '1'
    }, 0)

    return () => {
      cancelAnimationFrame(animFrame)
      globe.destroy()
      window.removeEventListener('resize', onResize)
    }
  }, [rs, config])

  return (
    <div className={cn('relative w-full h-full', className)}>
      <canvas
        ref={canvasRef}
        className="w-full h-full opacity-0 transition-opacity duration-500"
        onPointerDown={(e) => updatePointerInteraction(e.clientX)}
        onPointerUp={() => updatePointerInteraction(null)}
        onPointerOut={() => updatePointerInteraction(null)}
        onMouseMove={(e) => updateMovement(e.clientX)}
        onTouchMove={(e) => e.touches[0] && updateMovement(e.touches[0].clientX)}
      />
    </div>
  )
}
