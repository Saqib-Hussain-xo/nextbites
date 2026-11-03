import Link from "next/link";

export default function NavBar() {
  return (
    <header className="navbar">
      <div className="nav-container">
        <Link href="/" className="logo">
          NextBites
        </Link>
        <span className="tagline">Simple, delicious recipes made daily</span>
      </div>
    </header>
  );
}
