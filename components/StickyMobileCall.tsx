import Link from "next/link";
import { phoneTel } from "./site-data";

export function StickyMobileCall() {
  return (
    <div className="sticky-mobile-call" aria-label="Quick contact actions">
      <a href={`tel:${phoneTel}`}>Call</a>
      <a href={`sms:${phoneTel}`}>Text</a>
      <Link href="/book">Book</Link>
    </div>
  );
}
