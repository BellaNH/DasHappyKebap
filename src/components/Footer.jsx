function linkHref(key) {
  if (key === 'Home') return '#top'
  return `#${key.toLowerCase()}`
}

export default function Footer({ config }) {
  const {
    name,
    logo,
    contactEmail,
    navItems,
    footerLogo,
    footerText,
    footerQuickLinksHeading,
    footerContactHeading,
    footerCopyright,
    footerBg,
    footerTextColor,
    footerHeadingColor,
    footerLinkColor,
  } = config

  const logoSrc = footerLogo ?? logo
  const footerStyle = footerBg
    ? {
        background: footerBg,
        '--footer-body': footerTextColor ?? '#FFFEEC',
        '--footer-heading': footerHeadingColor ?? '#FBC405',
        '--footer-link': footerLinkColor ?? '#FDD301',
        '--footer-muted': 'rgba(255, 254, 236, 0.65)',
      }
    : undefined

  const items = navItems ?? [
    { key: 'Home', label: 'Home' },
    { key: 'Menu', label: 'Menu' },
    { key: 'About', label: 'About' },
    { key: 'Contact', label: 'Contact' },
  ]

  return (
    <footer
      id="contact"
      className={`site-footer${footerBg ? ' site-footer--custom' : ''}`}
      style={footerStyle}
    >
      <div className="container footer-main">
        <div className="footer-main__brand">
          {logoSrc ? (
            <div className="footer-main__brand-block">
              <img src={logoSrc} alt={name} className="footer-main__logo" />
              {footerText && <p className="footer-main__desc">{footerText}</p>}
            </div>
          ) : (
            <>
              <span className="footer-main__name">{name}</span>
              {footerText && <p className="footer-main__desc">{footerText}</p>}
            </>
          )}
        </div>

        <div className="footer-main__links">
          <p className="footer-main__heading">{footerQuickLinksHeading ?? 'Quick Links'}</p>
          <ul>
            {items.map((item) => (
              <li key={item.key}>
                <a href={linkHref(item.key)}>{item.label}</a>
              </li>
            ))}
          </ul>
        </div>

        <div className="footer-main__contact">
          <p className="footer-main__heading">{footerContactHeading ?? 'Contact'}</p>
          <a href={`mailto:${contactEmail}`}>{contactEmail}</a>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="container">
          <p>
            {footerCopyright ??
              `© ${new Date().getFullYear()} ${name}. All rights reserved.`}
          </p>
        </div>
      </div>
    </footer>
  )
}
