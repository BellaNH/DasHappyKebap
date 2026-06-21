export default function Newsletter({ config }) {
  const {
    newsletterTitle,
    newsletterText,
    contactEmail,
    newsletterPlaceholder,
    newsletterButton,
  } = config

  return (
    <section className="newsletter-section">
      <div className="container newsletter-section__inner">
        <div className="newsletter-section__text">
          {newsletterTitle && (
            <h2 className="section-title" style={{ color: 'var(--color-text-light)' }}>
              {newsletterTitle}
            </h2>
          )}
          {newsletterText && (
            <p className="newsletter-section__desc">{newsletterText}</p>
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
