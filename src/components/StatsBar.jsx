export default function StatsBar({ config }) {
  const { stats = [] } = config

  if (!stats.length) return null

  return (
    <section className="stats-bar" style={{ backgroundColor: 'var(--color-primary)' }}>
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
