import { useCallback, useEffect, useMemo, useRef, useState } from 'react'
import { menuCardColors, menuCardSurfaceStyle } from '../lib/themeStyle'

function useIsLg() {
  const [isLg, setIsLg] = useState(false)

  useEffect(() => {
    const mq = window.matchMedia('(min-width: 1024px)')
    const update = () => setIsLg(mq.matches)
    update()
    mq.addEventListener('change', update)
    return () => mq.removeEventListener('change', update)
  }, [])

  return isLg
}

export default function FeaturedMenu({ config, menuItems: itemsProp, emptyMessage }) {
  const { menuSectionTitle, menuSectionSubtitle } = config
  const menuItems = itemsProp ?? config.menuItems ?? []
  const cardColors = menuCardColors(config)
  const sliderRef = useRef(null)
  const isLg = useIsLg()

  const displayItems = useMemo(() => menuItems, [menuItems])

  const scrollSlider = useCallback((direction) => {
    const track = sliderRef.current
    if (!track) return

    const card = track.querySelector('.menu-card')
    const gap = 20
    const step = card ? card.offsetWidth + gap : 300
    track.scrollBy({ left: direction * step, behavior: 'smooth' })
  }, [])

  const grid = (
    <ul ref={sliderRef} className="menu-grid menu-grid--slider">
      {displayItems.map((item, index) => {
        const surface = menuCardSurfaceStyle(config, index, cardColors, true)

        return (
          <li
            key={`${item.name}-${index}`}
            className="menu-card"
            style={{
              backgroundColor: surface.backgroundColor,
              border: surface.border,
            }}
          >
            <h3
              className="menu-card__title font-serif"
              style={{ color: surface.titleColor }}
            >
              {item.name}
            </h3>

            <div className="menu-card__image-wrap">
              <img src={item.image} alt={item.name} className="menu-card__image" />
            </div>

            {item.caption && (
              <p
                className="menu-card__caption"
                style={{ fontFamily: 'var(--font-script)', color: surface.titleColor }}
              >
                {item.caption}
              </p>
            )}
          </li>
        )
      })}
    </ul>
  )

  return (
    <section id="menu" className="menu-section">
      <div className="container">
        {(menuSectionTitle || menuSectionSubtitle) && (
          <div className="menu-section__header">
            {menuSectionSubtitle && (
              <p className="section-eyebrow" style={{ color: 'var(--color-primary-bright, var(--color-primary))' }}>
                {menuSectionSubtitle}
              </p>
            )}
            {menuSectionTitle && (
              <h2 className="section-title section-title--center" style={{ color: 'var(--color-text)' }}>
                {menuSectionTitle}
              </h2>
            )}
          </div>
        )}

        {menuItems.length === 0 && emptyMessage ? (
          <p className="menu-section__empty">{emptyMessage}</p>
        ) : (
          <div className="menu-slider" aria-label="Food menu slider">
            {isLg && (
              <button
                type="button"
                className="menu-slider__btn menu-slider__btn--prev"
                aria-label="Previous dishes"
                onClick={() => scrollSlider(-1)}
              >
                ‹
              </button>
            )}
            {grid}
            {isLg && (
              <button
                type="button"
                className="menu-slider__btn menu-slider__btn--next"
                aria-label="Next dishes"
                onClick={() => scrollSlider(1)}
              >
                ›
              </button>
            )}
          </div>
        )}
      </div>
    </section>
  )
}
