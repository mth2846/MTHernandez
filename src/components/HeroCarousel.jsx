import { useState, useEffect } from 'react'
import img from '../img'

// `size: 'contain'` keeps transparent renders whole instead of cropping them to fill the hero
const slides = [
  { src: '/images/fig-02.png', label: 'Active Airbrakes Prototype', sub: 'Longhorn Rocketry · IREC / Spaceport America Cup' },
  { src: '/images/rocket-v9.webp', size: 'contain', label: 'Rocket Version 9', sub: 'Active-Control Airframe · Fusion 360' },
  { src: '/images/tvc-pcb-iso.webp', size: 'contain', position: 'right 40%', label: 'LRA TVC V5 Flight Computer', sub: 'Avionics · KiCad · 4-Layer' },
  { src: '/images/fig-06.png', label: 'Atomic Strain Analysis', sub: 'UT Austin ECE · Additive Manufacturing Research' },
  { src: '/images/fig-07.png', label: 'Thrust Vector Control Gimbal', sub: 'LRA Advanced Research · ANSYS FEA' },
  { src: '/images/fig-03.png', label: 'Actuating Fin Tabs', sub: 'Roll Control · Onshape · ANSYS CFD' },
]

export default function HeroCarousel() {
  const [current, setCurrent] = useState(0)

  useEffect(() => {
    const t = setInterval(() => setCurrent(c => (c + 1) % slides.length), 4500)
    return () => clearInterval(t)
  }, [])

  return (
    <div className="hero-carousel">
      {slides.map((slide, i) => (
        <div
          key={i}
          className={`hero-carousel-slide${i === current ? ' active' : ''}`}
          style={{
            backgroundImage: `url('${img(slide.src)}')`,
            ...(slide.size && { backgroundSize: slide.size, backgroundRepeat: 'no-repeat' }),
            ...(slide.position && { backgroundPosition: slide.position }),
          }}
        />
      ))}
      <div className="hero-carousel-gradient" />

      {/* Label overlay */}
      <div className="hero-carousel-label-wrap">
        {slides.map((slide, i) => (
          <div
            key={i}
            className={`hero-carousel-label${i === current ? ' active' : ''}`}
          >
            <span className="hero-carousel-label-sub">{slide.sub}</span>
            <span className="hero-carousel-label-title">{slide.label}</span>
          </div>
        ))}
      </div>

      <div className="hero-carousel-dots">
        {slides.map((_, i) => (
          <button
            key={i}
            className={`hero-carousel-dot${i === current ? ' active' : ''}`}
            onClick={() => setCurrent(i)}
            aria-label={`Slide ${i + 1}`}
          />
        ))}
      </div>
    </div>
  )
}
