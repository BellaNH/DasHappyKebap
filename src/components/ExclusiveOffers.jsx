export default function ExclusiveOffers({ config }) {
  const {
    exclusiveOffersTitle,
    exclusiveOffers = [],
    offersSectionBg,
    offersSectionTextColor,
  } = config

  if (!exclusiveOffers.length) return null

  const accents = [
    'var(--color-accent)',
    'var(--color-secondary)',
    'var(--color-button)',
  ]

  const sectionStyle = offersSectionBg ? { backgroundColor: offersSectionBg } : undefined
  const textColor = offersSectionTextColor ?? 'var(--color-primary-bright, var(--color-primary))'

  return (
    <section
      className={`offers-section${offersSectionBg ? ' offers-section--custom' : ''}`}
      style={sectionStyle}
      aria-labelledby="exclusive-offers-title"
    >
      <div className="container">
        {exclusiveOffersTitle && (
          <h2
            id="exclusive-offers-title"
            className="offers-section__title"
            style={{ color: textColor }}
          >
            {exclusiveOffersTitle}
          </h2>
        )}
        <ul className="offers-grid">
          {exclusiveOffers.map((offer, index) => (
            <li
              key={offer.title}
              className="offers-card"
              style={{ '--offer-accent': accents[index % accents.length] }}
            >
              {offer.badge && <span className="offers-card__badge">{offer.badge}</span>}
              <h3
                className="offers-card__title"
                style={offersSectionTextColor ? { color: offersSectionTextColor } : undefined}
              >
                {offer.title}
              </h3>
              <p
                className="offers-card__text"
                style={offersSectionTextColor ? { color: offersSectionTextColor } : undefined}
              >
                {offer.description}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
