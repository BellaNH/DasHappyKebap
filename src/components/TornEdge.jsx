export default function TornEdge({ fill = 'var(--color-cream)', flip = false, className = '' }) {
  return (
    <svg
      viewBox="0 0 1440 120"
      preserveAspectRatio="none"
      aria-hidden="true"
      className={`block w-full ${flip ? 'rotate-180' : ''} ${className}`}
      style={{ height: '5.5rem' }}
    >
      <path
        fill={fill}
        d="M0,55 C90,15 180,95 270,45 C360,5 450,85 540,35 C630,10 720,75 810,40 C900,8 990,70 1080,38 C1170,12 1260,80 1350,42 C1395,28 1420,48 1440,55 L1440,120 L0,120 Z"
      />
      <path
        fill={fill}
        d="M0,68 C100,38 200,98 320,58 C440,18 560,88 680,48 C800,18 920,78 1040,52 C1160,28 1280,82 1440,60 L1440,120 L0,120 Z"
        opacity="0.92"
      />
    </svg>
  )
}
