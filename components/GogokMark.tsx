export function GogokMark({ className = "" }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 420 420"
      role="img"
      aria-label="GOGOK 001 open silver form with jade point"
    >
      <defs>
        <linearGradient id="silver" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#E6E4DF" />
          <stop offset="42%" stopColor="#8D8D89" />
          <stop offset="72%" stopColor="#D0CEC7" />
          <stop offset="100%" stopColor="#6B6B68" />
        </linearGradient>
        <radialGradient id="jade" cx="35%" cy="30%" r="70%">
          <stop offset="0%" stopColor="#8FA18F" />
          <stop offset="65%" stopColor="#5B6F5F" />
          <stop offset="100%" stopColor="#36473A" />
        </radialGradient>
      </defs>
      <path
        d="M 290 98 A 146 146 0 1 0 320 286"
        fill="none"
        stroke="url(#silver)"
        strokeWidth="52"
        strokeLinecap="round"
      />
      <circle cx="302" cy="110" r="25" fill="url(#jade)" />
    </svg>
  );
}
