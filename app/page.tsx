import Link from "next/link";
import { Navigation } from "@/components/Navigation";
import { BrandMark } from "@/components/BrandMark";
import { GogokObject } from "@/components/GogokObject";
import { CraftSequence } from "@/components/CraftSequence";
import { objects } from "@/data/objects";

const object = objects[0];

export default function HomePage() {
  return (
    <main>
      <section className="hero hero--flagship">
        <Navigation />
        <div className="hero-atmosphere" aria-hidden="true" />
        <div className="hero__center shell">
          <div className="hero-lockup">
            <p className="eyebrow hero__place">Seoul, Korea</p>
            <BrandMark />
            <p className="hero__question serif">What will you build from here?</p>
          </div>
        </div>
        <div className="hero__footer shell eyebrow">
          <span>Contemporary objects from accumulated Korean forms</span>
          <span>Archive begins with 001</span>
        </div>
      </section>

      <section className="section statement statement--quiet hairline">
        <div className="shell statement-grid">
          <p className="eyebrow">Philosophy</p>
          <h2 className="statement__copy serif">우리는 <span>쌓아온 것으로</span> 존재한다.</h2>
          <p className="statement__aside">Time. Choice. Failure. Memory. Craft. Culture. GARANG turns what remains into objects for what comes next.</p>
        </div>
      </section>

      <section className="origin-feature hairline">
        <div className="shell origin-feature__head">
          <div>
            <p className="eyebrow">Collection I / 2027</p>
            <h2 className="origin-feature__title serif">ORIGIN</h2>
          </div>
          <p className="origin-feature__intro">모든 축적에는 시작이 있다. 오래된 형태를 재현하지 않고, 곡선과 여백만을 남겨 오늘의 비례로 다시 세운다.</p>
        </div>

        <div className="origin-object-stage">
          <div className="origin-object-stage__halo" aria-hidden="true" />
          <GogokObject withChain />
          <div className="origin-object-stage__caption shell eyebrow">
            <span>GOGOK 001</span><span>Sterling silver / Jade</span>
          </div>
        </div>

        <div className="shell origin-feature__foot">
          <p className="serif origin-feature__statement">The empty space is yours to build.</p>
          <Link className="cta" href="/origin">Enter Origin <span>↗</span></Link>
        </div>
      </section>

      <section className="section object-editorial hairline">
        <div className="shell object-editorial__grid">
          <div className="object-editorial__visual">
            <GogokObject />
          </div>
          <div className="object-copy object-copy--sticky">
            <p className="eyebrow">Archive {object.archive} / {object.collection}</p>
            <h2 className="serif">{object.name}</h2>
            <p className="serif object-quote">{object.statement}</p>
            <p>{object.story}</p>
            <div className="spec-list">
              <div className="spec-row"><span>Material</span><span>{object.material.join(" / ")}</span></div>
              <div className="spec-row"><span>Finish</span><span>{object.finish}</span></div>
              <div className="spec-row"><span>Place</span><span>{object.place}</span></div>
              <div className="spec-row"><span>Edition</span><span>{object.edition}</span></div>
            </div>
            <Link className="cta" href={`/objects/${object.slug}`}>View object <span>↗</span></Link>
          </div>
        </div>
      </section>

      <CraftSequence />

      <section className="section archive-section hairline">
        <div className="shell">
          <div className="section-heading-row">
            <div>
              <p className="eyebrow">GARANG Archive</p>
              <h2 className="archive-title serif">A house built<br />object by object.</h2>
            </div>
            <p className="archive-intro">GARANG does not release collections as noise. Each object earns a number, a place, and a reason to remain.</p>
          </div>
          <div className="archive-grid">
            <Link className="archive-card archive-card--active" href="/objects/gogok-001">
              <div className="archive-card__num">001</div>
              <div className="archive-card__meta">GOGOK<br />ORIGIN<br />STERLING SILVER / JADE</div>
            </Link>
            <div className="archive-card archive-card--future"><div className="archive-card__num">002</div><div className="archive-card__meta">Not yet accumulated</div></div>
            <div className="archive-card archive-card--future"><div className="archive-card__num">003</div><div className="archive-card__meta">Not yet accumulated</div></div>
          </div>
        </div>
      </section>

      <footer className="footer shell hairline">
        <div className="footer__mark"><BrandMark /></div>
        <h2 className="footer__question serif">당신은 이제<br />무엇을 쌓아갈 것입니까.</h2>
        <div className="footer__bottom">
          <span>GARANG — Seoul, Korea</span>
          <span>What will you build from here?</span>
        </div>
      </footer>
    </main>
  );
}
