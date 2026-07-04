import { CTA } from "@/components/CTA";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { RequestServiceForm } from "@/components/RequestServiceForm";
import { StickyMobileCall } from "@/components/StickyMobileCall";
import { phoneDisplay, phoneTel } from "@/components/site-data";

export default function ContactPage() {
  return (
    <>
      <Header />
      <main>
        <section className="page-hero">
          <p className="eyebrow">Contact</p>
          <h1>Request Service</h1>
          <p>
            Fill out the form below and Rico will get back to you. For immediate
            assistance, call or text{" "}
            <a href={`tel:${phoneTel}`}>{phoneDisplay}</a>.
          </p>
        </section>
        <section className="section split-section">
          <div>
            <h2>Automationation-ready contact flow.</h2>
            <p>
              The payload mapper is already in place so this form can hand off
              to Automationation's contact intake without changing the front-end
              fields later.
            </p>
          </div>
          <RequestServiceForm />
        </section>
        <CTA
          compact
          title="Need help sooner?"
          body="Calling is the best option when the vehicle will not start or you need same-day availability."
        />
      </main>
      <Footer />
      <StickyMobileCall />
    </>
  );
}
