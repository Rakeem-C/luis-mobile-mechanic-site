import Link from "next/link";
import { phoneDisplay, phoneTel } from "./site-data";

export function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-col">
        <h2>Rico's Mobile Mechanic</h2>
        <p>Phoenix, AZ</p>
        <a href={`tel:${phoneTel}`}>Phone: {phoneDisplay}</a>
      </div>
      <nav aria-label="Footer navigation" className="footer-col">
        <Link href="/">Home</Link>
        <Link href="/services">Services</Link>
        <Link href="/#about">About</Link>
        <Link href="/contact">Contact</Link>
        <Link href="/book">Book Service</Link>
      </nav>
      <div className="footer-col">
        <h4>Service Area</h4>
        <p>
          Serving Phoenix, AZ and nearby areas. Do not see your area yet? Call
          to confirm availability.
        </p>
      </div>
      <p className="copyright">
        Copyright {new Date().getFullYear()} Rico's Mobile Mechanic.
        All rights reserved.
      </p>
    </footer>
  );
}
