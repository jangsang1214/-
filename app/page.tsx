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
        <img
          src="/c-product.svg"
          alt=""
          aria-hidden="true"
          style={{
            position: "absolute",
            width: "min(28vw, 390px)",
            right: "4vw",
            bottom: "5vh",
            opacity: 0.22,
            filter: "grayscale(.18) contrast(1.05)",
            mixBlendMode: "screen",
            pointerEvents: "none",
          }}
        />
        <div className="hero__center shell">
          <div className="hero-lockup">
            <p className="eyebrow hero__place">Seoul, Korea</p>
            <BrandMark />
            <p className="hero__question serif">What will you build from here?</p>
          </div>
        </div>
        <div className="hero__footer shell eyebrow">
          <span>Object 001 / Origin</span>
          <span>GARANG Archive</span>
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
            <p className="eyebrow">Collection I / Origin</p>
            <h2 className="origin-feature__title serif">ORIGIN</h2>
          </div>
          <p className="origin-feature__intro">모든 축적에는 시작이 있다. 오래된 형상을 복제하지 않고, 곡선과 여백의 긴장만 남겨 오늘의 오브젝트로 다시 세운다.</p>
        </div>

        <div className="origin-object-stage">
          <div className="origin-object-stage__halo" aria-hidden="true" />
          <img
            src="/c-product.svg"
            alt="GOGOK 001 C concept product study"
            style={{
              width: "min(64vw, 560px)",
              maxHeight: "78svh",
              objectFit: "contain",
              position: "relative",
              zIndex: 2,
              filter: "contrast(1.03)",
            }}
          />
          <div className="origin-object-stage__caption shell eyebrow">
            <span>GOGOK 001 / C — ORIGIN</span><span>925 Silver / Natural Jade</span>
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
              <div className="spec-row"><span>Dimensions</span><span>{object.dimensions}</span></div>
              <div className="spec-row"><span>Finish</span><span>{object.finish}</span></div>
              <div className="spec-row"><span>Place</span><span>{object.place}</span></div>
              <div className="spec-row"><span>Edition</span><span>{object.edition}</span></div>
            </div>
            <Link className="cta" href={`/objects/${object.slug}`}>View object <span>↗</span></Link>
          </div>
        </div>
      </section>

      <section className="section hairline" aria-label="GOGOK 001 wearing study">
        <div className="shell">
          <div style={{ display: "grid", gridTemplateColumns: "minmax(0, 1.15fr) minmax(280px, .85fr)", gap: "clamp(2rem, 7vw, 7rem)", alignItems: "end" }}>
            <div style={{ minHeight: "62svh", background: "#0c0c0b", border: "1px solid rgba(234,230,223,.08)", display: "grid", placeItems: "center", overflow: "hidden" }}>
              <img src="/c-wear.svg" alt="GOGOK 001 C concept wearing study" style={{ width: "100%", height: "100%", minHeight: "62svh", objectFit: "cover" }} />
            </div>
            <div style={{ paddingBottom: "1rem" }}>
              <p className="eyebrow">Wearing study / C concept</p>
              <h2 className="serif" style={{ fontSize: "clamp(3rem, 7vw, 7rem)", lineHeight: .9, letterSpacing: "-.05em", margin: "1rem 0 2rem" }}>Close to the body.<br />Quiet in scale.</h2>
              <p style={{ maxWidth: "30rem", color: "#9f9990", lineHeight: 1.8 }}>The first visual study places GOGOK 001 at the collarbone to test proportion, presence, and the relationship between silver, jade, skin, and black cloth.</p>
              <p className="eyebrow" style={{ marginTop: "2.5rem" }}>Art-direction study — final manufacturing photography to follow</p>
            </div>
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
