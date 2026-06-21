import { useState } from 'react'
import { filterMenuByCategory } from '../lib/restaurantAssets'
import MenuCategories from './MenuCategories'
import FeaturedMenu from './FeaturedMenu'

export default function MenuSection({ config }) {
  const [activeCategory, setActiveCategory] = useState('all')
  const filteredItems = filterMenuByCategory(config.menuItems ?? [], activeCategory)

  return (
    <>
      <MenuCategories
        categories={config.categories ?? []}
        activeCategory={activeCategory}
        onSelect={setActiveCategory}
        menuCategoriesTitle={config.menuCategoriesTitle}
      />
      <FeaturedMenu
        config={config}
        menuItems={filteredItems}
        emptyMessage={
          filteredItems.length === 0 && activeCategory !== 'all'
            ? (config.menuEmptyMessage ?? 'No dishes in this category yet.')
            : undefined
        }
      />
    </>
  )
}
