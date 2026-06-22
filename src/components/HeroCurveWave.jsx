export default function HeroCurveWave({ fill = 'var(--color-cream)', className = '' }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 1440 320"
      preserveAspectRatio="none"
      aria-hidden="true"
      className={`block w-full ${className}`}
      style={{ height: '5.5rem' }}
    >
      <path
        fill={fill}
        fillOpacity="1"
        d="M0,96L80,101.3C160,107,320,117,480,149.3C640,181,800,235,960,224C1120,213,1280,139,1360,101.3L1440,64L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"
      />
    </svg>
  )
}
