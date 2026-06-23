export function themeStyle(config) {
  const c = config.colors ?? {}

  return {
    '--color-header': c.header ?? '#8A183A',
    '--color-cream': c.cream ?? '#FFFBF5',
    '--color-text': c.text ?? '#2D1018',
    '--color-text-light': c.textLight ?? '#FFFFFF',
    '--color-button': c.button ?? '#FFC419',
    '--color-button-text': c.buttonText ?? '#2D1018',
    '--color-primary': c.primary ?? '#8A183A',
    '--color-primary-bright': c.primaryBright ?? c.primary ?? '#8A183A',
    '--color-accent': c.accent ?? config.accentColor ?? '#EF3E48',
    '--color-secondary': c.secondary ?? '#FFC419',
    '--color-card-1': c.card1 ?? '#FFE566',
    '--color-card-2': c.card2 ?? '#F5989C',
    '--color-card-3': c.card3 ?? '#FFD966',
    '--color-promo': c.promo ?? c.accent ?? config.accentColor ?? '#EF3E48',
    '--accent': config.accentColor ?? c.accent ?? '#EF3E48',
    backgroundColor: c.cream ?? '#FFFBF5',
    color: c.text ?? '#2D1018',
  }
}

export function menuCardColors(config) {
  const c = config.colors ?? {}
  const palette = [c.card1, c.card2].filter(Boolean)
  if (palette.length) return palette

  return [
    c.accent ?? config.accentColor ?? '#EF3E48',
    c.secondary ?? '#FFC419',
  ]
}

const dashappySliderTones = [
  { bg: '#015601', title: '#FFFFFF' },
  { bg: '#FBC405', title: '#000000' },
  { bg: '#FB994C', title: '#FFFFFF' },
  { bg: '#00AF7E', title: '#FFFFFF' },
  { bg: '#FDD301', title: '#000000' },
]

export function menuCardSurfaceStyle(config, index, cardColors, isSlider) {
  if (isSlider && config.slug === 'dashappykebap') {
    const tone = dashappySliderTones[index % dashappySliderTones.length]
    return {
      backgroundColor: tone.bg,
      border: tone.border,
      titleColor: tone.title,
    }
  }

  return {
    backgroundColor: cardColors[index % cardColors.length],
    titleColor: 'var(--color-text)',
  }
}
