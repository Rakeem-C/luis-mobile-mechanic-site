import Link from "next/link";
import { phoneDisplay, phoneTel } from "./site-data";

type CTAProps = {
  eyebrow?: string;
  title: string;
  body: string;
  compact?: boolean;
};

export function CTA({ eyebrow, title, body, compact = false }: CTAProps) {
  return (
    <section className={compact ? "cta-band cta-band--compact" : "cta-band"}>
      <div>
        {eyebrow ? <p className="eyebrow">{eyebrow}</p> : null}
        <h2>{title}</h2>
        <p>{body}</p>
      </div>
      <div className="button-row">
        <a className="button button--accent" href={`tel:${phoneTel}`}>
          Call Rico Now
        </a>
        <Link className="button button--light" href="/contact">
          Request Service
        </Link>
      </div>
      <a className="cta-phone" href={`tel:${phoneTel}`}>
        {phoneDisplay}
      </a>
    </section>
  );
}
