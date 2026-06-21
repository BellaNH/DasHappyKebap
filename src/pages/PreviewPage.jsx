import { useEffect, useMemo } from 'react'
import { useParams } from 'react-router-dom'
import { getConfigBySlug } from '../lib/getConfig'
import { enrichConfig } from '../lib/restaurantAssets'
import { applyLocale } from '../lib/localizeConfig'
import { useLanguage } from '../lib/LanguageContext'
import { themeStyle } from '../lib/themeStyle'
import { handleAnchorClick } from '../lib/smoothScroll'
import Hero from '../components/Hero'
import WhyChooseUs from '../components/WhyChooseUs'
import MenuSection from '../components/MenuSection'
import AboutSection from '../components/AboutSection'
import PopularDishes from '../components/PopularDishes'
import StatsBar from '../components/StatsBar'
import Newsletter from '../components/Newsletter'
import Footer from '../components/Footer'

export default function PreviewPage() {
  const { slug: slugParam } = useParams()
  const slug = slugParam ?? 'hayak'
  const { lang, dir } = useLanguage()
  const rawConfig = getConfigBySlug(slug)

  const config = useMemo(() => {
    if (!rawConfig) return null
    const enriched = enrichConfig(rawConfig)
    return applyLocale(enriched, lang)
  }, [rawConfig, lang])

  useEffect(() => {
    if (config?.name) {
      document.title = config.name
    }
  }, [config?.name])

  if (!config) {
    return (
      <main className="flex min-h-svh flex-col items-center justify-center px-6 text-center">
        <h1 className="font-serif text-3xl">Page not found</h1>
        <p className="mt-3 opacity-70">
          No config for <code>{slug}</code>.
        </p>
      </main>
    )
  }

  return (
    <div
      id="top"
      className={`minimalist-page ${dir === 'rtl' ? 'minimalist-page--rtl' : ''}`}
      style={themeStyle(config)}
      dir={dir}
      onClick={handleAnchorClick}
    >
      <Hero config={config} />
      <WhyChooseUs config={config} />
      <MenuSection config={config} />
      <AboutSection config={config} />
      <PopularDishes config={config} />
      <StatsBar config={config} />
      <Newsletter config={config} />
      <Footer config={config} />
    </div>
  )
}
