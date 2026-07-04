import Link from "next/link";
import { phoneDisplay, phoneTel } from "./site-data";

export function Header() {
  return (
    <header className="site-header">
      <Link className="brand" href="/" aria-label="Luis Mobile Mechanic home">
        Luis Mobile Mechanic
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
