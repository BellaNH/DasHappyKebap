import heroCover from '../assets/HeroCover.png'
import shawarmaHeader from '../assets/shawarmaHeader.png'
import shawarmaHeader2 from '../assets/ShawarmaHeader2.png'
import kebabHeader3 from '../assets/KebabHeader3.png'
import kebabHeader4 from '../assets/kebabHeader4.png'
import dashappykebapLogo from '../assets/dashappykebapLogo.png'
import dashappykebapLogoFooter from '../assets/DasHappyKebaplogoFooter.png'
import hayakLogoHeader from '../assets/HayakLogoHeader.png'
import hayakLogoBurgundy from '../assets/hayak_logo_burgundy.png'

const dishImages = import.meta.glob('../assets/dishes/*', {
  eager: true,
  import: 'default',
})

function findDish(...keywords) {
  for (const keyword of keywords) {
    const match = Object.entries(dishImages).find(([path]) =>
      path.toLowerCase().includes(keyword.toLowerCase()),
    )
    if (match) return match[1]
  }
  return null
}

function dishNameFromPath(path) {
  const file = path.split('/').pop()?.replace(/\.[^.]+$/, '') ?? 'Dish'

  const labels = [
    ['biryani', 'Biryani'],
    ['garlic naan', 'Naan Bread'],
    ['donerkebab', 'Doner Kebab'],
    ['roastchicken', 'Roast Chicken'],
    ['orangejus', 'Orange Juice'],
    ['lemonjuice', 'Lemon Juice'],
    ['pakoras', 'Pakoras'],
    ['teriyaki', 'Teriyaki'],
    ['shawarma', 'Shawarma'],
    ['burger', 'Burger'],
    ['pizza', 'Pizza'],
    ['kebsa', 'Kabsa'],
    ['samosa', 'Samosa'],
  ]

  const lower = file.toLowerCase()
  for (const [key, label] of labels) {
    if (lower.includes(key)) return label
  }

  return file
    .replace(/([a-z])([A-Z])/g, '$1 $2')
    .replace(/[-_]+/g, ' ')
    .replace(/\s+/g, ' ')
    .trim()
    .replace(/\b\w/g, (c) => c.toUpperCase())
}

function getDishCategoryId(path) {
  const lower = path.toLowerCase()
  if (lower.includes('burger')) return 'burger'
  if (lower.includes('pizza')) return 'pizza'
  if (lower.includes('shawarma') || lower.includes('donerkebab')) return 'shawarma'
  if (lower.includes('orangejus') || lower.includes('lemonjuice')) return 'drinks'
  if (lower.includes('samosa') || lower.includes('pakora') || lower.includes('naan')) return 'sides'
  return 'other'
}

const hayakCategories = [
  { id: 'all', name: 'All', keywords: [] },
  { id: 'burger', name: 'Burger', keywords: ['burger'] },
  { id: 'pizza', name: 'Pizza', keywords: ['pizza'] },
  { id: 'shawarma', name: 'Shawarma', keywords: ['shawarma'] },
  { id: 'sides', name: 'Sides', keywords: ['samosa', 'pakoras'] },
  { id: 'drinks', name: 'Drinks', keywords: ['orangejus', 'lemonjuice'] },
]

const defaultPopularItems = [
  { name: 'Burger', price: '28 QAR', keywords: ['burger'] },
  { name: 'Pizza', price: '35 QAR', keywords: ['pizza'] },
  { name: 'Shawarma', price: '22 QAR', keywords: ['shawarma'] },
  { name: 'Doner Kebab', price: '24 QAR', keywords: ['donerkebab'] },
  { name: 'Teriyaki', price: '32 QAR', keywords: ['teriyaki'] },
  { name: 'Samosa', price: '12 QAR', keywords: ['samosa'] },
]

function getAllDishes() {
  return Object.entries(dishImages)
    .sort(([pathA], [pathB]) => pathA.localeCompare(pathB))
    .map(([path, image]) => ({
      name: dishNameFromPath(path),
      price: '—',
      caption: '',
      image,
      category: getDishCategoryId(path),
      sortKey: path.toLowerCase(),
    }))
}

function sortMenuItems(items, priorityKeywords = []) {
  if (!priorityKeywords.length) return items

  return [...items].sort((a, b) => {
    const rank = (item) => {
      const index = priorityKeywords.findIndex((keyword) =>
        item.sortKey.includes(keyword.toLowerCase()),
      )
      return index === -1 ? priorityKeywords.length : index
    }

    const diff = rank(a) - rank(b)
    if (diff !== 0) return diff
    return a.name.localeCompare(b.name)
  })
}

function resolvePopularItems(configItems) {
  const items = configItems?.length ? configItems : defaultPopularItems

  return items.map((item) => ({
    ...item,
    image: findDish(...(item.keywords ?? [item.name.toLowerCase()])) ?? heroCover,
  }))
}

const dashappykebapCategories = [
  { id: 'all', name: 'All', keywords: [] },
  { id: 'burger', name: 'Burger', keywords: ['burger'] },
  { id: 'pizza', name: 'Pizza', keywords: ['pizza'] },
  { id: 'shawarma', name: 'Shawarma', keywords: ['shawarma', 'donerkebab'] },
  { id: 'sides', name: 'Sides', keywords: ['samosa', 'pakoras'] },
  { id: 'drinks', name: 'Drinks', keywords: ['orangejus', 'lemonjuice'] },
]

export const assetOverrides = {
  hayak: {
    hero: heroCover,
    logo: hayakLogoHeader,
    footerLogo: hayakLogoBurgundy,
    about: findDish('shawarma') ?? findDish('biryani'),
    allDishes: true,
    menuPriority: [
      'shawarma',
      'teriyaki',
      'burger',
      'donerkebab',
      'pizza',
      'lemonjuice',
    ],
    categories: hayakCategories.map((cat) => ({
      id: cat.id,
      name: cat.name,
      image:
        cat.id === 'all'
          ? heroCover
          : findDish(...cat.keywords) ?? heroCover,
    })),
  },
  dashappykebap: {
    hero: kebabHeader4,
    logo: dashappykebapLogo,
    footerLogo: dashappykebapLogoFooter,
    allDishes: true,
    menuPriority: [
      'donerkebab',
      'shawarma',
      'kebsa',
      'burger',
      'pizza',
      'teriyaki',
      'samosa',
    ],
    about: findDish('donerkebab') ?? findDish('shawarma'),
    categories: dashappykebapCategories.map((cat) => ({
      id: cat.id,
      name: cat.name,
      image:
        cat.id === 'all'
          ? kebabHeader4
          : findDish(...cat.keywords) ?? kebabHeader4,
    })),
  },
}

export function enrichConfig(config) {
  const assets = assetOverrides[config.slug]
  if (!assets) return config

  const menuItems = assets.allDishes
    ? sortMenuItems(getAllDishes(), assets.menuPriority ?? [])
    : config.menuItems.map((item, index) => ({
        ...item,
        image: assets.menuItems?.[index] ?? item.image,
      }))

  const categories = (config.categories?.length ? config.categories : assets.categories) ?? []

  return {
    ...config,
    logo: assets.logo ?? config.logo,
    footerLogo: Object.hasOwn(assets, 'footerLogo')
      ? assets.footerLogo
      : (config.footerLogo ?? assets.logo ?? config.logo),
    heroImage: assets.hero ?? config.heroImage,
    aboutImage: assets.about ?? config.aboutImage,
    aboutSecondaryImage: assets.aboutSecondary ?? config.aboutSecondaryImage,
    menuItems,
    popularItems: resolvePopularItems(config.popularItems),
    categories: categories.map((cat, index) => ({
      ...cat,
      id: cat.id ?? assets.categories?.[index]?.id ?? cat.name.toLowerCase(),
      image: assets.categories?.[index]?.image ?? cat.image,
    })),
  }
}

export function filterMenuByCategory(menuItems, categoryId) {
  if (!categoryId || categoryId === 'all') return menuItems
  return menuItems.filter((item) => item.category === categoryId)
}
