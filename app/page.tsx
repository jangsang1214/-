import Link from "next/link";
import { Navigation } from "@/components/Navigation";
import { GogokMark } from "@/components/GogokMark";
import { objects } from "@/data/objects";

const object = objects[0];

export default function HomePage() {
  return (
    <main>
      <section className="hero">
        <Navigation />
        <div className="hero__center shell">
          <div>
            <p className="eyebrow">Seoul, Korea</p>
            <h1 className="hero__title serif">GARANG</h1>
            <p className="hero__question serif">What will you build from here?</p>
          </div>
        </div>
        <div className="hero__footer shell eyebrow">
          <span>House of accumulated forms</span>
          <span>Archive begins with 001</span>
        </div>
      </section>

      <section className="section hairline statement">
        <div className="shell">
          <p className="eyebrow">Philosophy</p>
          <h2 className="statement__copy serif">
            우리는 <span>쌓아온 것으로</span> 존재한다.
          </h2>
        </div>
      </section>

      <section className="section hairline">
        <div className="shell origin-grid">
          <div className="origin-copy">
            <p className="eyebrow">Collection I</p>
            <h2 className="serif">ORIGIN</h2>
            <p>
              모든 축적에는 시작이 있다. GARANG의 첫 장은 오래된 형태를 복제하지 않고,
              그 안에 남은 곡선과 여백을 오늘의 오브젝트로 다시 세운다.
            </p>
            <Link className="cta" href="/origin">Discover Origin <span>↗</span></Link>
          </div>
          <div className="object-stage" aria-hidden="true">
            <GogokMark />
          </div>
        </div>
      </section>

      <section className="section hairline">
        <div className="shell object-layout">
          <div className="object-stage">
            <GogokMark />
          </div>
          <div className="object-copy">
            <p className="eyebrow">Archive {object.archive} / {object.collection}</p>
            <h2 className="serif">{object.name}</h2>
            <p className="serif" style={{ fontSize: "1.45rem", color: "var(--hanji)" }}>
              {object.statement}
            </p>
            <p>{object.story}</p>
            <div className="spec-list">
              <div className="spec-row"><span>Material</span><span>{object.material.join(" / ")}</span></div>
              <div className="spec-row"><span>Place</span><span>{object.place}</span></div>
              <div className="spec-row"><span>Edition</span><span>{object.edition}</span></div>
            </div>
            <Link className="cta" href={`/objects/${object.slug}`}>View object <span>↗</span></Link>
          </div>
        </div>
      </section>

      <section className="section hairline">
        <div className="shell">
          <p className="eyebrow">GARANG Archive</p>
          <div className="archive-grid" style={{ marginTop: "2rem" }}>
            <Link className="archive-card" href="/objects/gogok-001">
              <div className="archive-card__num">001</div>
              <div className="archive-card__meta">GOGOK<br />ORIGIN<br />STERLING SILVER / JADE</div>
            </Link>
            <div className="archive-card">
              <div className="archive-card__num" style={{ opacity: .2 }}>002</div>
              <div className="archive-card__meta">To be accumulated</div>
            </div>
            <div className="archive-card">
              <div className="archive-card__num" style={{ opacity: .2 }}>003</div>
              <div className="archive-card__meta">To be accumulated</div>
            </div>
          </div>
        </div>
      </section>

      <footer className="footer shell hairline">
        <h2 className="footer__question serif">당신은 이제<br />무엇을 쌓아갈 것입니까.</h2>
        <div className="footer__bottom">
          <span>GARANG — Seoul, Korea</span>
          <span>What will you build from here?</span>
        </div>
      </footer>
    </main>
  );
}
