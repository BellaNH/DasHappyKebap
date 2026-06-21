export function handleAnchorClick(e) {
  const anchor = e.target.closest('a[href^="#"]')
  if (!anchor) return

  const hash = anchor.getAttribute('href')
  if (!hash || hash === '#') return

  const id = hash.slice(1) || 'top'
  if (id !== 'top' && !document.getElementById(id)) return

  e.preventDefault()
  const top =
    id === 'top'
      ? 0
      : document.getElementById(id).getBoundingClientRect().top + window.scrollY - 16

  window.scrollTo({ top, behavior: 'smooth' })
}
