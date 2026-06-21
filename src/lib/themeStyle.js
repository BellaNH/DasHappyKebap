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
    '--color-accent': c.accent ?? config.accentColor ?? '#EF3E48',
    '--color-secondary': c.secondary ?? '#FFC419',
    '--color-card-1': c.card1 ?? '#FFE566',
    '--color-card-2': c.card2 ?? '#F5989C',
    '--color-card-3': c.card3 ?? '#FFD966',
    '--accent': config.accentColor ?? c.accent ?? '#EF3E48',
    backgroundColor: c.cream ?? '#FFFBF5',
    color: c.text ?? '#2D1018',
  }
}

export function menuCardColors(config) {
  const c = config.colors ?? {}
  return [
    c.accent ?? config.accentColor ?? '#EF3E48',
    c.secondary ?? '#FFC419',
  ]
}
