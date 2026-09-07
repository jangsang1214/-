export function GogokObject({ withChain = false }: { withChain?: boolean }) {
  return (
    <svg
      className="gogok-object"
      viewBox="0 0 720 860"
      role="img"
      aria-label="GOGOK 001 Origin C pendant — polished open circular silver form with a jade sphere suspended into the upper gap"
    >
      <defs>
        <linearGradient id="garangSilver" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#f6f3ec" />
          <stop offset="13%" stopColor="#9d9e9b" />
          <stop offset="29%" stopColor="#ece9e2" />
          <stop offset="48%" stopColor="#777975" />
          <stop offset="68%" stopColor="#d8d5cd" />
          <stop offset="84%" stopColor="#666864" />
          <stop offset="100%" stopColor="#b8b7b2" />
        </linearGradient>
        <radialGradient id="garangJade" cx="29%" cy="22%" r="82%">
          <stop offset="0%" stopColor="#b2c0ad" />
          <stop offset="34%" stopColor="#7f927f" />
          <stop offset="69%" stopColor="#546858" />
          <stop offset="100%" stopColor="#2f3e34" />
        </radialGradient>
        <filter id="softShadow" x="-40%" y="-40%" width="180%" height="180%">
          <feGaussianBlur in="SourceAlpha" stdDeviation="22" />
          <feOffset dy="30" />
          <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 .52 0" />
          <feMerge><feMergeNode /><feMergeNode in="SourceGraphic" /></feMerge>
        </filter>
      </defs>

      {withChain && (
        <g opacity=".72">
          <path d="M346 -18 C346 56 350 103 356 132" fill="none" stroke="#aaa9a4" strokeWidth="2" />
          <path d="M374 -18 C374 56 370 103 364 132" fill="none" stroke="#71726f" strokeWidth="2" />
        </g>
      )}

      <g filter="url(#softShadow)">
        <ellipse
          cx="360"
          cy="151"
          rx="19"
          ry="28"
          fill="none"
          stroke="url(#garangSilver)"
          strokeWidth="12"
        />
        <ellipse
          cx="364"
          cy="194"
          rx="16"
          ry="20"
          fill="none"
          stroke="url(#garangSilver)"
          strokeWidth="10"
        />

        <path
          d="M402 211 A 194 194 0 1 0 528 302"
          fill="none"
          stroke="url(#garangSilver)"
          strokeWidth="76"
          strokeLinecap="round"
        />

        <path
          d="M399 212 A 194 194 0 0 0 235 276"
          fill="none"
          stroke="rgba(255,255,255,.34)"
          strokeWidth="5.5"
          strokeLinecap="round"
        />
        <path
          d="M224 496 A 194 194 0 0 0 492 522"
          fill="none"
          stroke="rgba(20,20,20,.32)"
          strokeWidth="7"
          strokeLinecap="round"
        />

        <path
          d="M377 207 C393 216 410 228 426 242"
          fill="none"
          stroke="url(#garangSilver)"
          strokeWidth="12"
          strokeLinecap="round"
        />

        <circle cx="448" cy="261" r="43" fill="url(#garangJade)" />
        <circle cx="433" cy="246" r="9" fill="rgba(255,255,255,.31)" />
        <circle cx="456" cy="272" r="32" fill="none" stroke="rgba(20,35,26,.14)" strokeWidth="1.5" />
      </g>

      <text x="360" y="792" textAnchor="middle" className="gogok-object__archive">
        ARCHIVE 001 — ORIGIN
      </text>
    </svg>
  );
}
