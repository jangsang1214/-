import Link from "next/link";

export function Navigation() {
  return (
    <nav className="nav shell" aria-label="Primary navigation">
      <Link href="/" className="nav__brand serif">GARANG</Link>
      <div className="nav__links">
        <Link className="nav__link" href="/origin">Origin</Link>
        <Link className="nav__link" href="/objects/gogok-001">Objects</Link>
        <Link className="nav__link" href="/archive">Archive</Link>
        <Link className="nav__link nav__acquire" href="/objects/gogok-001#acquire">Acquire</Link>
      </div>
    </nav>
  );
}
