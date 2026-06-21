export default function WhyChooseUs({ config }) {
  const { whyChooseTitle, whyChooseHeadline, whyChooseItems = [] } = config

  if (!whyChooseItems.length) return null

  return (
    <section className="why-section">
      <div className="container">
        {whyChooseTitle && (
          <p className="section-eyebrow" style={{ color: 'var(--color-primary)' }}>
            {whyChooseTitle}
          </p>
        )}
        {whyChooseHeadline && (
          <h2 className="section-title" style={{ color: 'var(--color-primary)' }}>
            {whyChooseHeadline}
          </h2>
        )}

        <ul className="why-grid">
          {whyChooseItems.map((item) => (
            <li key={item.title} className="why-card">
              <span className="why-card__icon">{item.icon}</span>
              <h3 className="why-card__title">{item.title}</h3>
              <p className="why-card__text">{item.description}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
