export function GogokObject({ withChain = false }: { withChain?: boolean }) {
  return (
    <svg
      className="gogok-object"
      viewBox="0 0 720 860"
      role="img"
      aria-label="GOGOK 001 Origin C pendant — open silver ring holding a jade sphere in its gap"
    >
      <defs>
        <linearGradient id="garangSilver" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#f2f0e9" />
          <stop offset="18%" stopColor="#a6a6a1" />
          <stop offset="42%" stopColor="#d7d4cd" />
          <stop offset="66%" stopColor="#747572" />
          <stop offset="84%" stopColor="#c9c6bf" />
          <stop offset="100%" stopColor="#7f807d" />
        </linearGradient>
        <radialGradient id="garangJade" cx="30%" cy="24%" r="78%">
          <stop offset="0%" stopColor="#a7b4a2" />
          <stop offset="48%" stopColor="#667969" />
          <stop offset="100%" stopColor="#35453b" />
        </radialGradient>
        <filter id="softShadow" x="-40%" y="-40%" width="180%" height="180%">
          <feGaussianBlur in="SourceAlpha" stdDeviation="24" />
          <feOffset dy="28" />
          <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 .5 0" />
          <feMerge><feMergeNode /><feMergeNode in="SourceGraphic" /></feMerge>
        </filter>
      </defs>

      {withChain && (
        <g opacity=".7">
          <path d="M348 -20 C348 70 352 118 357 145" fill="none" stroke="#9d9d99" strokeWidth="2" />
          <path d="M372 -20 C372 70 368 118 363 145" fill="none" stroke="#737471" strokeWidth="2" />
        </g>
      )}

      <g filter="url(#softShadow)">
        <ellipse
          cx="360"
          cy="171"
          rx="18"
          ry="27"
          fill="none"
          stroke="url(#garangSilver)"
          strokeWidth="12"
        />

        <path
          d="M541 300 A 200 200 0 1 0 541 470"
          fill="none"
          stroke="url(#garangSilver)"
          strokeWidth="78"
          strokeLinecap="round"
        />

        <path
          d="M518 270 A 200 200 0 0 0 304 194"
          fill="none"
          stroke="rgba(255,255,255,.27)"
          strokeWidth="5"
          strokeLinecap="round"
        />

        <circle cx="542" cy="385" r="44" fill="url(#garangJade)" />
        <circle cx="528" cy="370" r="9" fill="rgba(255,255,255,.27)" />
      </g>

      <text x="360" y="792" textAnchor="middle" className="gogok-object__archive">
        ARCHIVE 001 — ORIGIN
      </text>
    </svg>
  );
}
