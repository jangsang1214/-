import Link from "next/link";
import { Navigation } from "@/components/Navigation";
import { GogokMark } from "@/components/GogokMark";

export default function OriginPage() {
  return (
    <main>
      <Navigation />
      <section className="section">
        <div className="shell" style={{ paddingTop: "8vh" }}>
          <p className="eyebrow">Collection I / Origin</p>
          <h1 className="serif" style={{ fontSize: "clamp(4rem, 12vw, 11rem)", lineHeight: .82, letterSpacing: "-.055em", margin: "1rem 0 3rem" }}>
            BEFORE THE<br />NEXT FORM.
          </h1>
          <p className="serif" style={{ maxWidth: 760, fontSize: "clamp(1.35rem, 2.4vw, 2.2rem)", lineHeight: 1.35 }}>
            모든 축적에는 시작이 있다. ORIGIN은 과거를 복원하는 컬렉션이 아니라,
            오래 남은 형태가 오늘 어떤 미래를 가질 수 있는지 묻는다.
          </p>
        </div>
      </section>

      <section className="section hairline">
        <div className="shell origin-grid">
          <div className="object-stage"><GogokMark /></div>
          <div className="origin-copy">
            <p className="eyebrow">Form / Memory / Space</p>
            <h2 className="serif">A form<br />carried through time.</h2>
            <p>
              GARANG은 곡옥을 그대로 재현하지 않는다. 비대칭 곡선, 열린 원, 한 점의 옥,
              그리고 비어 있는 공간만 남긴다. 그 여백은 아직 쌓이지 않은 가능성이다.
            </p>
          </div>
        </div>
      </section>

      <section className="section hairline">
        <div className="shell">
          <p className="eyebrow">Transformation</p>
          <div className="archive-grid" style={{ marginTop: "2rem" }}>
            {[
              ["01", "REMEMBER", "Ancient form"],
              ["02", "REDUCE", "Curve / tension / void"],
              ["03", "REBUILD", "Contemporary object"],
            ].map(([num, title, meta]) => (
              <div className="archive-card" key={num}>
                <div className="archive-card__num">{num}</div>
                <div>
                  <div className="serif" style={{ fontSize: "2rem", marginBottom: ".6rem" }}>{title}</div>
                  <div className="archive-card__meta">{meta}</div>
                </div>
              </div>
            ))}
          </div>
          <Link className="cta" href="/objects/gogok-001">Enter Archive 001 <span>↗</span></Link>
        </div>
      </section>
    </main>
  );
}
