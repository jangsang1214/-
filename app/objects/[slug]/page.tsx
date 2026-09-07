import { notFound } from "next/navigation";
import { Navigation } from "@/components/Navigation";
import { GogokObject } from "@/components/GogokObject";
import { CraftSequence } from "@/components/CraftSequence";
import { AcquireRequest } from "@/components/AcquireRequest";
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
      <section className="object-hero">
        <Navigation />
        <div className="shell object-hero__grid">
          <div className="object-hero__copy">
            <p className="eyebrow">Archive {object.archive} / {object.collection}</p>
            <h1 className="serif object-hero__title">{object.name}</h1>
            <p className="serif object-hero__statement">{object.statement}</p>
          </div>
          <div className="object-hero__visual"><GogokObject withChain /></div>
        </div>
      </section>

      <section className="section hairline">
        <div className="shell object-detail-grid">
          <div>
            <p className="eyebrow">Meaning</p>
            <h2 className="serif detail-heading">An open form.<br />A future not yet filled.</h2>
          </div>
          <div className="object-copy">
            <p>{object.story}</p>
            <p>GOGOK 001 does not reproduce an artifact. It carries forward only a curve, a void, and the tension between weight and possibility.</p>
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

      <CraftSequence />

      <section className="acquire-section hairline" id="acquire">
        <div className="shell acquire-grid">
          <div className="acquire-copy">
            <p className="eyebrow">Private acquisition / Archive {object.archive}</p>
            <h2 className="serif">A piece for<br />what comes next.</h2>
            <p>GARANG treats the first edition as an archive object rather than an urgent transaction. Acquisition is intentionally quiet.</p>
          </div>
          <div className="acquire-panel">
            <div className="spec-list">
              <div className="spec-row"><span>Object</span><span>{object.name}</span></div>
              <div className="spec-row"><span>Edition</span><span>{object.edition}</span></div>
              <div className="spec-row"><span>Price</span><span>₩{object.price.toLocaleString("ko-KR")}</span></div>
            </div>
            <AcquireRequest objectName={object.name} archive={object.archive} />
          </div>
        </div>
      </section>
    </main>
  );
}
