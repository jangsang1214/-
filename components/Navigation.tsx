import Link from "next/link";
import { BrandMark } from "@/components/BrandMark";

export function Navigation() {
  return (
    <nav className="nav shell" aria-label="Primary navigation">
      <Link href="/" className="nav__brand"><BrandMark compact /></Link>
      <div className="nav__links">
        <Link className="nav__link" href="/origin">Origin</Link>
        <Link className="nav__link" href="/objects/gogok-001">Object 001</Link>
        <Link className="nav__link" href="/archive">Archive</Link>
        <Link className="nav__link nav__acquire" href="/objects/gogok-001#acquire">Private acquisition</Link>
      </div>
    </nav>
  );
}
