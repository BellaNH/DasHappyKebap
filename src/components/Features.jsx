export default function Features({ config }) {
  const { features = [] } = config

  if (!features.length) return null

  return (
    <section style={{ backgroundColor: 'var(--color-cream)' }}>
      <div className="container">
        <div className="features-row">
          {features.map((feature) => (
            <div key={feature.label} className="features-row__item">
              <span
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  width: '2.5rem',
                  height: '2.5rem',
                  borderRadius: '9999px',
                  flexShrink: 0,
                  backgroundColor: 'var(--color-header)',
                  color: 'var(--color-text-light)',
                  fontSize: '0.875rem',
                }}
              >
                {feature.icon}
              </span>
              <div>
                <h3 style={{ margin: 0, fontSize: '0.875rem', fontWeight: 600, color: 'var(--color-text)' }}>
                  {feature.label}
                </h3>
                {feature.description && (
                  <p style={{ margin: '0.25rem 0 0', fontSize: '0.6875rem', lineHeight: 1.5, opacity: 0.6, color: 'var(--color-text)' }}>
                    {feature.description}
                  </p>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
