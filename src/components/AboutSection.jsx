export default function AboutSection({ config }) {
  const {
    aboutTitle,
    aboutText,
    aboutText2,
    aboutImage,
    aboutSecondaryImage,
    aboutCtaText,
    aboutHighlights = [],
    aboutEyebrow,
    name,
  } = config

  return (
    <section id="about" className="about-section">
      <div className="container">
        <div className="about-grid">
          <div className="about-grid__images">
            <img src={aboutImage} alt={aboutTitle} className="about-grid__image about-grid__image--main" />
            {aboutSecondaryImage && (
              <img
                src={aboutSecondaryImage}
                alt=""
                className="about-grid__image about-grid__image--float"
                aria-hidden="true"
              />
            )}
          </div>

          <div className="about-grid__content">
            <p className="section-eyebrow" style={{ color: 'var(--color-primary-bright, var(--color-primary))' }}>
              {aboutEyebrow ?? `About ${name}`}
            </p>
            <h2 className="section-title" style={{ color: 'var(--color-primary-bright, var(--color-primary))' }}>
              {aboutTitle}
            </h2>
            <p className="about-grid__paragraph">{aboutText}</p>
            {aboutText2 && <p className="about-grid__paragraph">{aboutText2}</p>}

            {aboutHighlights.length > 0 && (
              <ul className="about-highlights">
                {aboutHighlights.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            )}

            <a href="#contact" className="btn btn--red">
              {aboutCtaText}
              <span className="hero-arrow" aria-hidden="true">→</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
