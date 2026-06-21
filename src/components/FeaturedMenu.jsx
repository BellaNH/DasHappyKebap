import { useEffect, useMemo, useState } from 'react'
import { menuCardColors } from '../lib/themeStyle'

const MENU_ROWS = 2

function useMenuColumns() {
  const [columns, setColumns] = useState(3)

  useEffect(() => {
    const update = () => {
      if (window.matchMedia('(max-width: 767px)').matches) setColumns(1)
      else if (window.matchMedia('(max-width: 1023px)').matches) setColumns(2)
      else setColumns(3)
    }

    update()
    window.addEventListener('resize', update)
    return () => window.removeEventListener('resize', update)
  }, [])

  return columns
}

export default function FeaturedMenu({ config, menuItems: itemsProp, emptyMessage }) {
  const { menuSectionTitle, menuSectionSubtitle, menuShowAllText, menuShowLessText } = config
  const menuItems = itemsProp ?? config.menuItems ?? []
  const cardColors = menuCardColors(config)
  const columns = useMenuColumns()
  const [expanded, setExpanded] = useState(false)

  const previewCount = columns * MENU_ROWS
  const hasMore = menuItems.length > previewCount
  const visibleItems = useMemo(
    () => (expanded || !hasMore ? menuItems : menuItems.slice(0, previewCount)),
    [expanded, hasMore, menuItems, previewCount],
  )

  useEffect(() => {
    setExpanded(false)
  }, [menuItems])

  return (
    <section id="menu" className="menu-section">
      <div className="container">
        {(menuSectionTitle || menuSectionSubtitle) && (
          <div className="menu-section__header">
            {menuSectionSubtitle && (
              <p className="section-eyebrow" style={{ color: 'var(--color-primary)' }}>
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
          <>
            <ul className="menu-grid">
              {visibleItems.map((item, index) => (
                <li
                  key={`${item.name}-${index}`}
                  className="menu-card"
                  style={{ backgroundColor: cardColors[index % cardColors.length] }}
                >
                  <h3 className="menu-card__title font-serif" style={{ color: 'var(--color-text)' }}>
                    {item.name}
                  </h3>

                  <div className="menu-card__image-wrap">
                    <img src={item.image} alt={item.name} className="menu-card__image" />
                  </div>

                  {item.caption && (
                    <p className="menu-card__caption" style={{ fontFamily: 'var(--font-script)', color: 'var(--color-text)' }}>
                      {item.caption}
                    </p>
                  )}
                </li>
              ))}
            </ul>

            {hasMore && (
              <div className="menu-section__toggle">
                <button
                  type="button"
                  className={`btn ${expanded ? 'btn--yellow' : 'btn--red'}`}
                  onClick={() => setExpanded((open) => !open)}
                  aria-expanded={expanded}
                >
                  {expanded
                    ? (menuShowLessText ?? 'Show Less')
                    : (menuShowAllText ?? 'Show All Dishes')}
                </button>
              </div>
            )}
          </>
        )}
      </div>
    </section>
  )
}
