import Link from "next/link";
import { BrandMark } from "@/components/BrandMark";
import styles from "./Navigation.module.css";

const links = [
  ["Origin", "/origin"],
  ["Object 001", "/objects/gogok-001"],
  ["Archive", "/archive"],
] as const;

export function Navigation() {
  return (
    <nav className="nav shell" aria-label="Primary navigation">
      <Link href="/" className="nav__brand" aria-label="GARANG home">
        <BrandMark compact />
      </Link>

      <div className={`nav__links ${styles.desktopLinks}`}>
        {links.map(([label, href]) => (
          <Link className="nav__link" href={href} key={href}>{label}</Link>
        ))}
        <Link className="nav__link nav__acquire" href="/objects/gogok-001#acquire">
          Private acquisition
        </Link>
      </div>

      <details className={styles.mobileMenu}>
        <summary aria-label="Open navigation">Menu</summary>
        <div className={styles.panel}>
          {links.map(([label, href]) => (
            <Link href={href} key={href}>{label}</Link>
          ))}
          <Link href="/objects/gogok-001#acquire">Private acquisition</Link>
        </div>
      </details>
    </nav>
  );
}
