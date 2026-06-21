export default function PopularDishes({ config }) {
  const { popularTitle, popularItems = [] } = config

  if (!popularItems.length) return null

  const half = Math.ceil(popularItems.length / 2)
  const leftCol = popularItems.slice(0, half)
  const rightCol = popularItems.slice(half)

  return (
    <section className="popular-section" style={{ backgroundColor: 'var(--color-secondary)' }}>
      <div className="container popular-section__inner">
        <div className="popular-section__content">
          {popularTitle && (
            <h2 className="section-title" style={{ color: 'var(--color-button-text)' }}>
              {popularTitle}
            </h2>
          )}

          <div className="popular-lists">
            <ul className="popular-list">
              {leftCol.map((item) => (
                <li key={item.name} className="popular-list__item">
                  <img src={item.image} alt={item.name} className="popular-list__thumb" />
                  <span className="popular-list__name">{item.name}</span>
                  <span className="popular-list__dots" />
                  <span className="popular-list__price">{item.price}</span>
                </li>
              ))}
            </ul>
            <ul className="popular-list">
              {rightCol.map((item) => (
                <li key={item.name} className="popular-list__item">
                  <img src={item.image} alt={item.name} className="popular-list__thumb" />
                  <span className="popular-list__name">{item.name}</span>
                  <span className="popular-list__dots" />
                  <span className="popular-list__price">{item.price}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {popularItems[0]?.image && (
          <div className="popular-section__hero-image">
            <img src={popularItems[1]?.image ?? popularItems[0].image} alt="" />
          </div>
        )}
      </div>
    </section>
  )
}
