import Link from "next/link";
import { Navigation } from "@/components/Navigation";
import { objects } from "@/data/objects";
import styles from "./page.module.css";

const object = objects[0];

export default function HomePage() {
  return (
    <main className={styles.page}>
      <section className={styles.hero}>
        <Navigation />
        <div className={`${styles.shell} ${styles.heroBody}`}>
          <div className={styles.heroCopy}>
            <div className={styles.heroTop}>
              <p className={`${styles.micro} ${styles.heroKicker}`}>GARANG / SEOUL, KOREA</p>
              <h1 className={styles.heroTitle}>
                GOGOK<br />001
                <em>Origin</em>
              </h1>
            </div>

            <div>
              <p className={styles.heroStatement}>
                A small beginning,<br />but everything is <span>built from here.</span>
              </p>
              <div className={`${styles.micro} ${styles.heroMeta}`}>
                <span>925 Sterling Silver</span>
                <span>Natural Jade</span>
              </div>
            </div>
          </div>

          <figure className={styles.heroMedia}>
            <img src="/c-product.svg" alt="GOGOK 001 ORIGIN C concept pendant" />
          </figure>
        </div>
      </section>

      <section className={styles.manifesto}>
        <div className={`${styles.shell} ${styles.manifestoGrid}`}>
          <p className={`${styles.micro} ${styles.manifestoKicker}`}>01 / Philosophy</p>
          <h2 className={styles.manifestoTitle}>
            우리는 <span>쌓아온 것으로</span><br />존재한다.
          </h2>
          <p className={styles.manifestoAside}>
            GARANG은 전통을 복제하지 않는다. 오래 남은 곡선, 비어 있는 공간,
            그리고 사람이 앞으로 채워갈 시간을 하나의 오브젝트에 남긴다.
          </p>
        </div>
      </section>

      <section className={styles.objectSection}>
        <div className={`${styles.shell} ${styles.objectGrid}`}>
          <div className={styles.objectMedia}>
            <img src="/c-product.svg" alt="GOGOK 001 ORIGIN pendant study" />
          </div>

          <div className={styles.objectCopy}>
            <p className={`${styles.micro} ${styles.objectLabel}`}>02 / Object 001</p>
            <h2 className={styles.objectTitle}>ORIGIN</h2>
            <p className={styles.objectLead}>
              An open form. A future not yet filled.
            </p>

            <div className={styles.specs}>
              <div className={styles.spec}><span>Object</span><span>{object.name}</span></div>
              <div className={styles.spec}><span>Material</span><span>{object.material.join(" / ")}</span></div>
              <div className={styles.spec}><span>Dimensions</span><span>{object.dimensions}</span></div>
              <div className={styles.spec}><span>Finish</span><span>{object.finish}</span></div>
              <div className={styles.spec}><span>Chain</span><span>{object.chain}</span></div>
              <div className={styles.spec}><span>Made in</span><span>{object.place}</span></div>
            </div>

            <Link className={styles.inlineLink} href={`/objects/${object.slug}`}>
              Object details <span>↗</span>
            </Link>
          </div>
        </div>
      </section>

      <section className={styles.wearing}>
        <div className={styles.wearingGrid}>
          <div className={styles.wearingCopy}>
            <div>
              <p className={`${styles.micro} ${styles.objectLabel}`}>03 / On the body</p>
              <h2 className={styles.wearingTitle}>Quiet enough<br />to become yours.</h2>
            </div>
            <p className={styles.wearingNote}>
              GOGOK 001 sits close to the collarbone. Silver carries the weight;
              jade holds the interruption. The gap remains visible.
            </p>
          </div>

          <div className={styles.wearingMedia}>
            <img src="/c-wear.svg" alt="GOGOK 001 ORIGIN wearing study" />
          </div>
        </div>
      </section>

      <section className={styles.materials}>
        <div className={styles.shell}>
          <div className={styles.materialsHead}>
            <h2 className={styles.materialsTitle}>Matter,<br />not decoration.</h2>
            <p className={styles.materialsIntro}>
              장식의 수를 늘리는 대신 표면, 무게, 빛의 반사와 옥의 밀도에 집중한다.
              첫 오브젝트는 세 가지 물성만으로 완성된다.
            </p>
          </div>

          <div className={styles.materialList}>
            <div className={styles.materialRow}>
              <span className={styles.materialNumber}>01</span>
              <h3 className={styles.materialName}>Silver</h3>
              <p className={styles.materialText}>925 sterling silver. Satin face, polished edge.</p>
            </div>
            <div className={styles.materialRow}>
              <span className={styles.materialNumber}>02</span>
              <h3 className={styles.materialName}>Jade</h3>
              <p className={styles.materialText}>Natural jade, selected for a muted rather than vivid green.</p>
            </div>
            <div className={styles.materialRow}>
              <span className={styles.materialNumber}>03</span>
              <h3 className={styles.materialName}>Void</h3>
              <p className={styles.materialText}>The unfinished space is intentional. It is the part the wearer continues.</p>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.acquire} id="acquire">
        <div className={`${styles.shell} ${styles.acquireInner}`}>
          <p className={`${styles.micro} ${styles.acquireLabel}`}>04 / Private acquisition</p>
          <div>
            <h2 className={styles.acquireTitle}>The empty space<br />is yours to build.</h2>
            <Link className={styles.acquireAction} href={`/objects/${object.slug}#acquire`}>
              <span>Request GOGOK 001 — ORIGIN</span>
              <span>↗</span>
            </Link>
          </div>
        </div>
      </section>

      <footer className={`${styles.shell} ${styles.footer}`}>
        <span>GARANG — SEOUL, KOREA</span>
        <span>당신은 이제 무엇을 쌓아갈 것입니까.</span>
      </footer>
    </main>
  );
}
