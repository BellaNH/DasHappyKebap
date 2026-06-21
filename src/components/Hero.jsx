import Navbar from './Navbar'
import TornEdge from './TornEdge'
import TopBar from './TopBar'

export default function Hero({ config }) {
  const { welcomeText, tagline, heroSubtext, heroImage, ctaText, menuCtaText, name } = config

  return (
    <>
      <TopBar config={config} />
      <header className="hero-header" style={{ backgroundColor: 'var(--color-header)' }}>
        <Navbar config={config} />

        <div className="container">
          <div className="hero-grid">
            <div className="hero-grid__text">
              {welcomeText && (
                <p className="hero-welcome">{welcomeText}</p>
              )}
              <h1 className="hero-headline">{tagline}</h1>
              {heroSubtext && (
                <p className="hero-subtext">{heroSubtext}</p>
              )}
              <div className="hero-actions">
                <a href="#menu" className="btn btn--yellow">
                  {menuCtaText ?? 'View Menu'}
                </a>
                <a href="#about" className="btn btn--outline-light">
                  {ctaText}
                </a>
              </div>
            </div>

            <div className="hero-grid__media">
              <img
                src={heroImage}
                alt={`${name} — signature dish`}
                className="hero-grid__image"
              />
            </div>
          </div>
        </div>

        <div className="hero-header__wave">
          <TornEdge fill="var(--color-cream)" />
        </div>
      </header>
    </>
  )
}
