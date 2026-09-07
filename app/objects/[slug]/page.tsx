import { notFound } from "next/navigation";
import { Navigation } from "@/components/Navigation";
import { GogokMark } from "@/components/GogokMark";
import { getObject, objects } from "@/data/objects";

export function generateStaticParams() {
  return objects.map((object) => ({ slug: object.slug }));
}

export default async function ObjectPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const object = getObject(slug);
  if (!object) notFound();

  return (
    <main>
      <Navigation />
      <section className="section">
        <div className="shell object-layout">
          <div className="object-stage"><GogokMark /></div>
          <div className="object-copy">
            <p className="eyebrow">Archive {object.archive} / {object.collection}</p>
            <h1 className="serif" style={{ fontSize: "clamp(3.6rem, 8vw, 7.5rem)", lineHeight: .9, letterSpacing: "-.05em", margin: ".8rem 0 2rem" }}>
              {object.name}
            </h1>
            <p className="serif" style={{ fontSize: "clamp(1.35rem, 2vw, 1.9rem)", color: "var(--hanji)", lineHeight: 1.35 }}>
              {object.statement}
            </p>
            <p>{object.story}</p>
            <div className="spec-list">
              <div className="spec-row"><span>Material</span><span>{object.material.join(" / ")}</span></div>
              <div className="spec-row"><span>Dimensions</span><span>{object.dimensions}</span></div>
              <div className="spec-row"><span>Finish</span><span>{object.finish}</span></div>
              <div className="spec-row"><span>Chain</span><span>{object.chain}</span></div>
              <div className="spec-row"><span>Made in</span><span>{object.place}</span></div>
              <div className="spec-row"><span>Edition</span><span>{object.edition}</span></div>
            </div>
          </div>
        </div>
      </section>

      <section className="section hairline" id="acquire">
        <div className="shell origin-grid">
          <div>
            <p className="eyebrow">Acquire / Archive {object.archive}</p>
            <h2 className="serif" style={{ fontSize: "clamp(3rem, 7vw, 6.5rem)", lineHeight: .95, letterSpacing: "-.045em", margin: "1rem 0" }}>
              A piece for<br />what comes next.
            </h2>
          </div>
          <div className="object-copy">
            <div className="spec-list">
              <div className="spec-row"><span>Object</span><span>{object.name}</span></div>
              <div className="spec-row"><span>Edition</span><span>{object.edition}</span></div>
              <div className="spec-row"><span>Price</span><span>₩{object.price.toLocaleString("ko-KR")}</span></div>
            </div>
            <button className="cta" type="button" style={{ background: "transparent", color: "inherit", borderTop: 0, borderLeft: 0, borderRight: 0, cursor: "pointer" }}>
              Request to acquire <span>↗</span>
            </button>
            <p style={{ fontSize: ".82rem" }}>
              Commerce wiring is intentionally not connected in this first design-system build.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
