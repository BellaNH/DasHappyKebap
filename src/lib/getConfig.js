const configModules = import.meta.glob('../configs/*.json', { eager: true })

function configFromPath(path) {
  const mod = configModules[path]
  if (!mod) return null
  return mod.default ?? mod
}

export function getConfigBySlug(slug) {
  return configFromPath(`../configs/${slug}.json`)
}

export function getAllSlugs() {
  return Object.keys(configModules)
    .filter((path) => !path.includes('_template'))
    .map((path) => path.replace('../configs/', '').replace('.json', ''))
}
