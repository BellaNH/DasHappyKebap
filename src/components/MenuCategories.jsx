export default function MenuCategories({ categories, activeCategory, onSelect, menuCategoriesTitle }) {
  if (!categories.length) return null

  return (
    <section className="categories-section">
      <div className="container">
        {menuCategoriesTitle && (
          <h2 className="section-title section-title--center" style={{ color: 'var(--color-text)' }}>
            {menuCategoriesTitle}
          </h2>
        )}

        <ul className="categories-row">
          {categories.map((cat) => (
            <li key={cat.id ?? cat.name} className="category-item">
              <button
                type="button"
                className={`category-item__link ${activeCategory === (cat.id ?? cat.name) ? 'category-item__link--active' : ''}`}
                onClick={() => onSelect(cat.id ?? cat.name)}
              >
                <span className="category-item__circle">
                  <img src={cat.image} alt={cat.name} className="category-item__image" />
                </span>
                <span className="category-item__label">{cat.name}</span>
              </button>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
