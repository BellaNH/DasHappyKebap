import { useLanguage } from '../lib/LanguageContext'

export default function LanguageToggle() {
  const { lang, setLang } = useLanguage()

  return (
    <div className="lang-toggle" role="group" aria-label="Language">
      <button
        type="button"
        className={`lang-toggle__btn ${lang === 'en' ? 'lang-toggle__btn--active' : ''}`}
        onClick={() => setLang('en')}
        aria-pressed={lang === 'en'}
      >
        EN
      </button>
      <button
        type="button"
        className={`lang-toggle__btn ${lang === 'ar' ? 'lang-toggle__btn--active' : ''}`}
        onClick={() => setLang('ar')}
        aria-pressed={lang === 'ar'}
      >
        AR
      </button>
    </div>
  )
}
