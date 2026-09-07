import Link from "next/link";
import { Navigation } from "@/components/Navigation";
import { GogokObject } from "@/components/GogokObject";

export default function OriginPage() {
  return (
    <main>
      <section className="origin-page-hero">
        <Navigation />
        <div className="shell origin-page-hero__inner">
          <p className="eyebrow">Collection I / Origin</p>
          <h1 className="serif origin-page-hero__title">BEFORE THE<br />NEXT FORM.</h1>
          <p className="serif origin-page-hero__lede">모든 축적에는 시작이 있다. ORIGIN은 과거를 복원하는 컬렉션이 아니라, 오래 남은 형태가 오늘 어떤 미래를 가질 수 있는지 묻는다.</p>
        </div>
      </section>

      <section className="origin-object-stage hairline">
        <div className="origin-object-stage__halo" aria-hidden="true" />
        <GogokObject withChain />
        <div className="origin-object-stage__caption shell eyebrow"><span>Remembered form</span><span>Rebuilt in Seoul</span></div>
      </section>

      <section className="section hairline">
        <div className="shell object-detail-grid">
          <div>
            <p className="eyebrow">Form / Memory / Space</p>
            <h2 className="serif detail-heading">A form<br />carried through time.</h2>
          </div>
          <div className="object-copy">
            <p>GARANG은 곡옥을 그대로 재현하지 않는다. 비대칭 곡선, 열린 원, 한 점의 옥, 그리고 비어 있는 공간만 남긴다.</p>
            <p className="serif object-quote">그 여백은 아직 쌓이지 않은 가능성이다.</p>
          </div>
        </div>
      </section>

      <section className="section hairline">
        <div className="shell">
          <div className="section-heading-row">
            <div>
              <p className="eyebrow">Transformation</p>
              <h2 className="archive-title serif">Remember.<br />Reduce. Rebuild.</h2>
            </div>
            <p className="archive-intro">Heritage is not used as decoration. The process strips away literal history until only proportion, tension, and meaning remain.</p>
          </div>
          <div className="archive-grid">
            {[
              ["01", "REMEMBER", "Ancient form"],
              ["02", "REDUCE", "Curve / tension / void"],
              ["03", "REBUILD", "Contemporary object"],
            ].map(([num, title, meta]) => (
              <div className="archive-card" key={num}>
                <div className="archive-card__num">{num}</div>
                <div><div className="serif" style={{ fontSize: "2rem", marginBottom: ".6rem" }}>{title}</div><div className="archive-card__meta">{meta}</div></div>
              </div>
            ))}
          </div>
          <Link className="cta" href="/objects/gogok-001">Enter Archive 001 <span>↗</span></Link>
        </div>
      </section>
    </main>
  );
}
