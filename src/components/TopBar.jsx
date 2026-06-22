export default function TopBar({ config }) {
  if (!config.promoText) return null

  return (
    <div
      className="top-bar"
      style={{
        backgroundColor: config.colors?.promo ?? 'var(--color-secondary)',
        color: config.colors?.promoText ?? 'var(--color-button-text)',
      }}
    >
      <div className="container">
        <p className="top-bar__text">{config.promoText}</p>
      </div>
    </div>
  )
}
