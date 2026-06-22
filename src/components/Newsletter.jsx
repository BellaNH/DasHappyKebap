export default function Newsletter({ config }) {
  const {
    newsletterTitle,
    newsletterText,
    contactEmail,
    newsletterPlaceholder,
    newsletterButton,
    newsletterBg,
    newsletterTextColor,
    newsletterTitleColor,
  } = config

  const isCustom = Boolean(newsletterBg)
  const sectionStyle = newsletterBg ? { background: newsletterBg } : undefined
  const titleColor = newsletterTitleColor ?? newsletterTextColor ?? 'var(--color-text-light)'
  const bodyColor = newsletterTextColor ?? 'var(--color-text-light)'

  return (
    <section
      className={`newsletter-section${isCustom ? ' newsletter-section--custom' : ''}`}
      style={sectionStyle}
    >
      <div className="container newsletter-section__inner">
        <div className="newsletter-section__text">
          {newsletterTitle && (
            <h2 className="section-title" style={{ color: titleColor }}>
              {newsletterTitle}
            </h2>
          )}
          {newsletterText && (
            <p className="newsletter-section__desc" style={{ color: bodyColor }}>
              {newsletterText}
            </p>
          )}
        </div>

        <form
          className="newsletter-form"
          onSubmit={(e) => {
            e.preventDefault()
            window.location.href = `mailto:${contactEmail}?subject=Newsletter signup`
          }}
        >
          <input
            type="email"
            placeholder={newsletterPlaceholder ?? 'Your email address'}
            className="newsletter-form__input"
            required
          />
          <button type="submit" className="newsletter-form__btn">
            {newsletterButton ?? 'Subscribe'}
          </button>
        </form>
      </div>
    </section>
  )
}
