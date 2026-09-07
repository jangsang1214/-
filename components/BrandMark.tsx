export function BrandMark({ compact = false }: { compact?: boolean }) {
  return (
    <span
      className={compact ? "brand-mark brand-mark--compact" : "brand-mark"}
      aria-label="GARANG"
      style={{ gap: compact ? 0 : ".7rem" }}
    >
      <span
        className="brand-mark__latin"
        style={{
          fontFamily: 'Arial, "Helvetica Neue", sans-serif',
          fontWeight: 500,
          fontSize: compact ? ".88rem" : "clamp(4rem, 12vw, 10rem)",
          lineHeight: .9,
          letterSpacing: compact ? ".29em" : ".34em",
          paddingLeft: compact ? ".29em" : ".34em",
        }}
      >
        GARANG
      </span>
      {!compact && (
        <span
          className="brand-mark__hangul"
          style={{
            fontFamily: 'Batang, "Noto Serif KR", serif',
            fontSize: ".58rem",
            letterSpacing: ".58em",
            paddingLeft: ".58em",
            color: "#858078",
          }}
        >
          가랑
        </span>
      )}
    </span>
  );
}
