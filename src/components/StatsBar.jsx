export default function StatsBar({ config }) {
  const { stats = [] } = config
  const colors = config.colors ?? {}

  if (!stats.length) return null

  const barStyle = colors.primaryBright
    ? {
        background: `linear-gradient(135deg, ${colors.primary ?? 'var(--color-primary)'} 0%, ${colors.primaryBright} 100%)`,
      }
    : { backgroundColor: 'var(--color-primary)' }

  return (
    <section className="stats-bar" style={barStyle}>
      <div className="container">
        <ul className="stats-grid">
          {stats.map((stat) => (
            <li key={stat.label} className="stats-grid__item">
              <span className="stats-grid__value">{stat.value}</span>
              <span className="stats-grid__label">{stat.label}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
