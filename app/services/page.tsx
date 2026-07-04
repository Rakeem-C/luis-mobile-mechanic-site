import Link from "next/link";
import { CTA } from "@/components/CTA";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { ServiceCard } from "@/components/ServiceCard";
import { StickyMobileCall } from "@/components/StickyMobileCall";
import { phoneTel, services } from "@/components/site-data";

export default function ServicesPage() {
  return (
    <>
      <Header />
      <main>
        <section className="page-hero">
          <p className="eyebrow">Services</p>
          <h1>Phoenix mobile auto repair for many vehicle types.</h1>
          <p>
            Mobile diagnostics Phoenix, no-start troubleshooting, maintenance,
            and repair help for American, German, European, and most other cars,
            trucks, and SUVs.
          </p>
          <div className="button-row">
            <a className="button button--accent" href={`tel:${phoneTel}`}>
              Call Rico Now
            </a>
            <Link className="button button--ghost" href="/contact">
              Request Service
            </Link>
          </div>
        </section>
        <section className="section">
          <div className="service-grid">
            {services.map((service) => (
              <ServiceCard key={service.title} {...service} />
            ))}
          </div>
        </section>
        <CTA
          compact
          title="Not sure what service you need?"
          body="Tell Rico what the vehicle is doing and he can help decide the next practical step."
        />
      </main>
      <Footer />
      <StickyMobileCall />
    </>
  );
}
