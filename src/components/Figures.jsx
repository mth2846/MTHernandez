import { useState } from 'react'
import { Lightbox } from './Gallery'

// Captioned figures; clicking one opens it full-size in the lightbox
export default function Figures({ items }) {
  const [lightboxIndex, setLightboxIndex] = useState(null)

  if (!items || items.length === 0) return null

  return (
    <>
      <div className="figure-grid">
        {items.map((f, i) => (
          <figure
            key={f.src}
            className={`figure-card${f.wide ? ' figure-card-wide' : ''}`}
            onClick={() => setLightboxIndex(i)}
            onKeyDown={e => e.key === 'Enter' && setLightboxIndex(i)}
            role="button"
            tabIndex={0}
            style={{ cursor: 'zoom-in' }}
          >
            <img src={f.src} alt={f.alt} loading="lazy" />
            {f.caption && <figcaption>{f.caption}</figcaption>}
          </figure>
        ))}
      </div>
      {lightboxIndex !== null && (
        <Lightbox
          images={items}
          index={lightboxIndex}
          onClose={() => setLightboxIndex(null)}
        />
      )}
    </>
  )
}
