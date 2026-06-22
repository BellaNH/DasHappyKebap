export function applyLocale(config, lang) {
  const localeBlock =
    lang === 'ar' ? config.locale?.ar : lang === 'fr' ? config.locale?.fr : null

  if (!localeBlock) return config

  return {
    ...config,
    ...localeBlock,
    navItems: localeBlock.navItems ?? config.navItems,
    categories: (config.categories ?? []).map((cat) => ({
      ...cat,
      name: localeBlock.categoryNames?.[cat.id] ?? cat.name,
    })),
    menuItems: (config.menuItems ?? []).map((item) => ({
      ...item,
      name: localeBlock.dishNames?.[item.name] ?? item.name,
    })),
    popularItems: (config.popularItems ?? []).map((item, index) => {
      const localized = localeBlock.popularItems?.[index]
      return {
        ...item,
        name: localized?.name ?? localeBlock.dishNames?.[item.name] ?? item.name,
        price: localized?.price ?? item.price,
      }
    }),
    whyChooseItems: localeBlock.whyChooseItems ?? config.whyChooseItems,
    aboutHighlights: localeBlock.aboutHighlights ?? config.aboutHighlights,
    stats: localeBlock.stats ?? config.stats,
    exclusiveOffersTitle: localeBlock.exclusiveOffersTitle ?? config.exclusiveOffersTitle,
    exclusiveOffers: localeBlock.exclusiveOffers ?? config.exclusiveOffers,
    locale: config.locale,
  }
}
