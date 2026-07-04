import { BookingCalendar } from "@/components/BookingCalendar";
import { CTA } from "@/components/CTA";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { StickyMobileCall } from "@/components/StickyMobileCall";
import { phoneDisplay, phoneTel } from "@/components/site-data";

export default function BookPage() {
  return (
    <>
      <Header />
      <main>
        <section className="page-hero">
          <p className="eyebrow">Book service</p>
          <h1>Book Mobile Mechanic Service</h1>
          <p>
            Choose a time that works for you for repair, detailing, or tint
            service, or call Rico directly at{" "}
            <a href={`tel:${phoneTel}`}>{phoneDisplay}</a> for faster help.
          </p>
        </section>
        <section className="section split-section">
          <div>
            <h2>Calendar placeholder ready for Automationation.</h2>
            <p>
              This section is structured so the Automationation booking calendar
              can replace the placeholder without changing the page strategy.
            </p>
          </div>
          <BookingCalendar />
        </section>
        <CTA
          compact
          title="Car will not start?"
          body="Call Rico directly when the issue is urgent or your vehicle is stuck."
        />
      </main>
      <Footer />
      <StickyMobileCall />
    </>
  );
}
