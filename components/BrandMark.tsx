export function BrandMark({ compact = false }: { compact?: boolean }) {
  const strokeWidth = compact ? 4.5 : 2.5;

  return (
    <span className={compact ? "brand-mark brand-mark--compact" : "brand-mark"} aria-label="GARANG">
      <svg
        viewBox="0 0 780 130"
        role="img"
        aria-hidden="true"
        style={{
          width: compact ? 118 : "min(76vw, 780px)",
          height: "auto",
          display: "block",
          overflow: "visible",
        }}
      >
        <g
          fill="none"
          stroke="currentColor"
          strokeWidth={strokeWidth}
          strokeLinecap="square"
          strokeLinejoin="miter"
        >
          {/* G */}
          <path d="M132 35 C119 20 97 15 76 15 C42 15 20 36 20 65 C20 94 43 115 78 115 C101 115 121 109 135 96 L135 72 L93 72" />
          <path d="M116 72 H144" />

          {/* A */}
          <path d="M165 114 L204 16 L243 114" />
          <path d="M181 75 H227" />
          <path d="M157 114 H178 M231 114 H252" />

          {/* R */}
          <path d="M278 114 V16" />
          <path d="M269 16 H287 M269 114 H287" />
          <path d="M279 17 H324 C352 17 369 30 369 50 C369 70 351 82 323 82 H279" />
          <path d="M321 82 L374 114" />
          <path d="M361 114 H381" />

          {/* A */}
          <path d="M405 114 L444 16 L483 114" />
          <path d="M421 75 H467" />
          <path d="M397 114 H418 M471 114 H492" />

          {/* N */}
          <path d="M522 114 V16 L606 114 V16" />
          <path d="M513 16 H531 M597 16 H615 M513 114 H531 M597 114 H615" />

          {/* G */}
          <path d="M753 35 C740 20 718 15 697 15 C663 15 641 36 641 65 C641 94 664 115 699 115 C722 115 742 109 756 96 L756 72 L714 72" />
          <path d="M737 72 H765" />
        </g>
      </svg>
      {!compact && <span className="brand-mark__hangul">가랑</span>}
    </span>
  );
}
