import Link from "next/link";
import { phoneDisplay, phoneTel } from "./site-data";

export function Header() {
  return (
    <header className="site-header">
      <Link
        className="brand"
        href="/"
        aria-label="Rico's Mobile Mechanic and Tint home"
      >
        Rico's Mobile Mechanic and Tint
      </Link>
      <nav aria-label="Main navigation">
        <Link href="/#services">Services</Link>
        <Link href="/contact">Contact</Link>
        <Link href="/book">Book Service</Link>
      </nav>
      <a className="header-phone" href={`tel:${phoneTel}`}>
        {phoneDisplay}
      </a>
    </header>
  );
}
