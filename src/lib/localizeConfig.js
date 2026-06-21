export function applyLocale(config, lang) {
  if (lang !== 'ar' || !config.locale?.ar) return config

  const ar = config.locale.ar

  return {
    ...config,
    ...ar,
    navItems: ar.navItems ?? config.navItems,
    categories: (config.categories ?? []).map((cat) => ({
      ...cat,
      name: ar.categoryNames?.[cat.id] ?? cat.name,
    })),
    menuItems: (config.menuItems ?? []).map((item) => ({
      ...item,
      name: ar.dishNames?.[item.name] ?? item.name,
    })),
    popularItems: (config.popularItems ?? []).map((item, index) => {
      const arItem = ar.popularItems?.[index]
      return {
        ...item,
        name: arItem?.name ?? ar.dishNames?.[item.name] ?? item.name,
        price: arItem?.price ?? item.price,
      }
    }),
    whyChooseItems: ar.whyChooseItems ?? config.whyChooseItems,
    aboutHighlights: ar.aboutHighlights ?? config.aboutHighlights,
    stats: ar.stats ?? config.stats,
    locale: config.locale,
  }
}
