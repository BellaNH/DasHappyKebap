import kebabCategorie from '../assets/kebabCategorie.png'
import friedChickensCategorie from '../assets/friedChickensCategorie.png'
import burgerCategorie from '../assets/BurgerCategorie.png'

const iconTones = ['#FB994C', '#00AF7E', '#FBC405']

export default function CategoriesShowcase({ config }) {
  const { categoryShowcaseTitle, categoryShowcaseItems = [] } = config

  if (!categoryShowcaseItems.length) return null

  return (
    <section className="category-showcase">
      <div className="container">
        <div className="category-showcase__grid">
          <div className="category-showcase__collage" aria-hidden="true">
            <img
              src={kebabCategorie}
              alt=""
              className="category-showcase__photo category-showcase__photo--main"
            />
            <img
              src={friedChickensCategorie}
              alt=""
              className="category-showcase__photo category-showcase__photo--top"
            />
            <img
              src={burgerCategorie}
              alt=""
              className="category-showcase__photo category-showcase__photo--bottom"
            />
          </div>

          <div className="category-showcase__content">
            {categoryShowcaseTitle && (
              <h2 className="category-showcase__title">{categoryShowcaseTitle}</h2>
            )}

            <ul className="category-showcase__list">
              {categoryShowcaseItems.map((item, index) => (
                <li key={item.title} className="category-showcase__item">
                  <span
                    className="category-showcase__icon"
                    style={{ backgroundColor: iconTones[index % iconTones.length] }}
                  >
                    {item.icon}
                  </span>
                  <div className="category-showcase__text">
                    <h3 className="category-showcase__item-title">{item.title}</h3>
                    <p className="category-showcase__item-desc">{item.description}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
