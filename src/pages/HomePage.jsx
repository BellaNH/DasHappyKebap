import { Link } from 'react-router-dom'
import { getAllSlugs } from '../lib/getConfig'

export default function HomePage() {
  const slugs = getAllSlugs()

  return (
    <main
      className="flex min-h-svh flex-col items-center justify-center px-6"
      style={{ backgroundColor: '#F9F4E8', color: '#4A3022' }}
    >
      <p className="text-xs font-medium uppercase tracking-[0.25em] opacity-60">
        Warm minimalist template
      </p>
      <h1 className="mt-3 font-serif text-4xl sm:text-5xl">Restaurant previews</h1>
      <p className="mt-3 max-w-md text-center text-sm opacity-75">
        One React template — each restaurant gets its own JSON config, colors, logo, and photos.
      </p>

      <ul className="mt-8 space-y-3">
        {slugs.map((slug) => (
          <li key={slug}>
            <Link
              to={`/preview/${slug}`}
              className="text-sm underline underline-offset-4 opacity-90 hover:opacity-100"
            >
              /preview/{slug}
            </Link>
          </li>
        ))}
      </ul>
    </main>
  )
}
