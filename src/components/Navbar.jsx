import { useState } from 'react'
import { useLanguage } from '../lib/LanguageContext'
import LanguageToggle from './LanguageToggle'

function linkHref(key) {
  if (key === 'Home') return '#top'
  return `#${key.toLowerCase()}`
}

export default function Navbar({ config }) {
  const { lang } = useLanguage()
  const { name, logo: logoSrc, navItems } = config
  const isAr = lang === 'ar'
  const [menuOpen, setMenuOpen] = useState(false)

  const items = navItems ?? [
    { key: 'Home', label: 'Home' },
    { key: 'Menu', label: 'Menu' },
    { key: 'About', label: 'About' },
    { key: 'Contact', label: 'Contact' },
  ]

  const logoEl = (
    <a href="#top" className="site-nav__logo">
      {logoSrc ? (
        <img src={logoSrc} alt={name} className="site-nav__logo-img" />
      ) : (
        <span className="site-nav__logo-text">{name}</span>
      )}
    </a>
  )

  const menuBtn = (
    <button
      type="button"
      className={`site-nav__menu-btn${menuOpen ? ' is-open' : ''}`}
      aria-label={menuOpen ? 'Close menu' : 'Open menu'}
      aria-expanded={menuOpen}
      onClick={() => setMenuOpen((open) => !open)}
    >
      <span />
      <span />
      <span />
    </button>
  )

  const actionsEl = (
    <div className="site-nav__actions">
      <div className="site-nav__menu-wrap">
        {menuBtn}
        <ul
          className={`site-nav__mobile-menu${menuOpen ? ' is-open' : ''}`}
          dir={isAr ? 'rtl' : 'ltr'}
          aria-hidden={!menuOpen}
        >
          {items.map((item, index) => (
            <li key={item.key} style={{ '--nav-item-i': index }}>
              <a
                href={linkHref(item.key)}
                className={index === 0 ? 'site-nav__link--active' : ''}
                onClick={() => setMenuOpen(false)}
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
      <LanguageToggle />
    </div>
  )

  return (
    <nav className={`site-nav container${isAr ? '' : ' site-nav--en'}`} dir="ltr">
      <div className="site-nav__side site-nav__side--start">
        {isAr ? actionsEl : logoEl}
      </div>

      <ul className="site-nav__links" dir={isAr ? 'rtl' : 'ltr'}>
        {items.map((item, index) => (
          <li key={item.key}>
            <a
              href={linkHref(item.key)}
              className={index === 0 ? 'site-nav__link--active' : ''}
            >
              {item.label}
            </a>
          </li>
        ))}
      </ul>

      <div className="site-nav__side site-nav__side--end">
        {isAr ? logoEl : actionsEl}
      </div>
    </nav>
  )
}
