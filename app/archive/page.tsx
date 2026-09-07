import Link from "next/link";
import { Navigation } from "@/components/Navigation";
import { objects } from "@/data/objects";

export default function ArchivePage() {
  return (
    <main>
      <Navigation />
      <section className="section">
        <div className="shell">
          <p className="eyebrow">GARANG Archive</p>
          <h1 className="serif" style={{ fontSize: "clamp(4rem, 12vw, 11rem)", lineHeight: .82, letterSpacing: "-.055em", margin: "1rem 0 4rem" }}>
            OBJECTS<br />ACCUMULATE.
          </h1>
          <p className="serif" style={{ maxWidth: 700, fontSize: "clamp(1.3rem, 2.2vw, 2rem)", lineHeight: 1.4 }}>
            GARANG은 제품을 시즌 재고가 아니라 시간 속에 남는 Archive Object로 기록한다.
          </p>
        </div>
      </section>

      <section className="section hairline">
        <div className="shell archive-grid">
          {objects.map((object) => (
            <Link className="archive-card" href={`/objects/${object.slug}`} key={object.slug}>
              <div className="archive-card__num">{object.archive}</div>
              <div className="archive-card__meta">
                {object.name}<br />{object.collection}<br />{object.material.join(" / ")}<br />{object.place}
              </div>
            </Link>
          ))}
          {["002", "003"].map((number) => (
            <div className="archive-card" key={number}>
              <div className="archive-card__num" style={{ opacity: .18 }}>{number}</div>
              <div className="archive-card__meta">To be accumulated</div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
