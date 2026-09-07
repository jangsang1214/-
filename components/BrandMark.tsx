export function BrandMark({ compact = false }: { compact?: boolean }) {
  return (
    <span className={compact ? "brand-mark brand-mark--compact" : "brand-mark"} aria-label="GARANG">
      <span className="brand-mark__latin">GARANG</span>
      {!compact && <span className="brand-mark__hangul">가랑</span>}
    </span>
  );
}
