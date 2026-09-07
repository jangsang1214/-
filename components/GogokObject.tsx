export function GogokObject({ withChain = false }: { withChain?: boolean }) {
  return (
    <svg
      className="gogok-object"
      viewBox="0 0 720 860"
      role="img"
      aria-label="GOGOK 001 sculptural silver pendant with jade point"
    >
      <defs>
        <linearGradient id="garangSilver" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#f0eee8" />
          <stop offset="18%" stopColor="#9e9f9c" />
          <stop offset="42%" stopColor="#d5d2cb" />
          <stop offset="68%" stopColor="#6e706e" />
          <stop offset="84%" stopColor="#c8c5be" />
          <stop offset="100%" stopColor="#777875" />
        </linearGradient>
        <radialGradient id="garangJade" cx="30%" cy="24%" r="78%">
          <stop offset="0%" stopColor="#9eac9a" />
          <stop offset="52%" stopColor="#637565" />
          <stop offset="100%" stopColor="#34443a" />
        </radialGradient>
        <filter id="softShadow" x="-40%" y="-40%" width="180%" height="180%">
          <feGaussianBlur in="SourceAlpha" stdDeviation="24" />
          <feOffset dy="28" />
          <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 .5 0" />
          <feMerge><feMergeNode /><feMergeNode in="SourceGraphic" /></feMerge>
        </filter>
      </defs>

      {withChain && (
        <g opacity=".68">
          <path d="M360 -20 C360 88 350 138 330 185" fill="none" stroke="#a4a4a0" strokeWidth="2" />
          <path d="M360 -20 C360 88 370 138 392 185" fill="none" stroke="#797a77" strokeWidth="2" />
        </g>
      )}

      <g filter="url(#softShadow)">
        <path
          d="M468 226 C384 147 255 153 183 238 C99 336 108 486 201 574 C278 647 393 666 482 612"
          fill="none"
          stroke="url(#garangSilver)"
          strokeWidth="86"
          strokeLinecap="round"
        />
        <path
          d="M468 226 C384 147 255 153 183 238"
          fill="none"
          stroke="rgba(255,255,255,.32)"
          strokeWidth="7"
          strokeLinecap="round"
        />
        <circle cx="487" cy="219" r="42" fill="url(#garangJade)" />
        <circle cx="474" cy="205" r="9" fill="rgba(255,255,255,.28)" />
      </g>

      <text x="360" y="792" textAnchor="middle" className="gogok-object__archive">
        ARCHIVE 001 — ORIGIN
      </text>
    </svg>
  );
}
