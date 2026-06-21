export default function TopBar({ config }) {
  if (!config.promoText) return null

  return (
    <div
      className="top-bar"
      style={{
        backgroundColor: 'var(--color-secondary)',
        color: 'var(--color-button-text)',
      }}
    >
      <div className="container">
        <p className="top-bar__text">{config.promoText}</p>
      </div>
    </div>
  )
}
