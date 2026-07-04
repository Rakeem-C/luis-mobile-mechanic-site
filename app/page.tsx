import Image from "next/image";
import Link from "next/link";
import { BookingCalendar } from "@/components/BookingCalendar";
import { CTA } from "@/components/CTA";
import { FAQ } from "@/components/FAQ";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { RequestServiceForm } from "@/components/RequestServiceForm";
import { ServiceCard } from "@/components/ServiceCard";
import { StickyMobileCall } from "@/components/StickyMobileCall";
import {
  faqs,
  phoneDisplay,
  phoneTel,
  services,
  testimonials,
} from "@/components/site-data";

const vehicleMakes = [
  "Ford",
  "Chevrolet",
  "Dodge",
  "Toyota",
  "Honda",
  "Nissan",
  "BMW",
  "Mercedes-Benz",
  "Volkswagen",
  "Audi",
  "Mini",
  "Volvo",
  "And More...",
];

const reasons = [
  "Mobile mechanic service in Phoenix with no need to tow your car.",
  "Convenient repairs at your home, workplace, or roadside.",
  "Honest diagnostics and clear communication before work begins.",
  "Experience with domestic and foreign vehicles.",
  "Fast response when available and professional, friendly service.",
];

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <section className="hero" id="home">
          <Image
            className="hero__image"
            src="/images/mobile-mechanic-hero.png"
            alt="Rico performing mobile diagnostics on a vehicle in Phoenix"
            fill
            priority
            sizes="100vw"
          />
          <div className="hero__overlay" />
          <div className="hero__content hero__content--centered">
            <h1>Phoenix Mobile Mechanic That Comes to You</h1>
            <p className="hero__subhead">
              Fast, reliable mobile auto repair and diagnostics for American,
              German, European, and most other vehicles at your home, workplace,
              or roadside.
            </p>
            <div className="button-row button-row--center">
              <a className="button button--accent" href={`tel:${phoneTel}`}>
                Call Rico Now
              </a>
              <Link className="button button--ghost" href="/contact">
                Request Service
              </Link>
            </div>
            <a className="hero__phone" href={`tel:${phoneTel}`}>
              {phoneDisplay}
            </a>
            <p className="hero__trust">
              Serving Phoenix, AZ and nearby areas with honest mobile mechanic
              service.
            </p>
          </div>
        </section>

        <section className="section" id="services">
          <div className="section-heading section-heading--center">
            <h2>Services</h2>
            <p className="section-subtitle">
              Comprehensive mobile mechanic services for almost any vehicle,
              right at your location in Phoenix.
            </p>
          </div>
          <div className="service-grid">
            {services.map((service) => (
              <ServiceCard key={service.title} {...service} />
            ))}
          </div>
        </section>

        <section className="section section--alt">
          <div className="section-heading section-heading--center">
            <h2>Repairs for American, German, European & Most Other Vehicles</h2>
            <p className="section-subtitle">
              Rico works on a wide range of cars, trucks, and SUVs, including
              both domestic and foreign vehicles. Specific repairs are confirmed
              after proper diagnosis.
            </p>
          </div>
          <div className="make-cloud" aria-label="Vehicle makes serviced">
            {vehicleMakes.map((make) => (
              <span key={make}>{make}</span>
            ))}
          </div>
        </section>

        <section className="section section--about-grid">
          <div>
            <h2 className="section-title-left">Why Choose Rico</h2>
            <div className="reason-list">
              {reasons.map((reason) => (
                <div className="reason-list__item" key={reason}>
                  {reason}
                </div>
              ))}
            </div>
          </div>
          <div className="about-box" id="about">
            <h3>About Rico</h3>
            <p>
              Rico helps Phoenix drivers avoid the hassle of towing, long shop
              waits, and confusing repair processes by bringing mechanic service
              directly to them. As a local, skilled mechanic, he focuses on
              honest assessments, practical solutions, and clear communication.
            </p>
          </div>
        </section>

        <section className="section section--alt">
          <div className="section-heading section-heading--center">
            <h2>How It Works</h2>
          </div>
          <div className="steps">
            <article>
              <span className="step-circle">1</span>
              <h3>Call, Text, or Request</h3>
              <p>Reach out to Rico by phone, text, or the online request form.</p>
            </article>
            <article>
              <span className="step-circle">2</span>
              <h3>Explain the Issue</h3>
              <p>Tell Rico what is going on with your vehicle so he can prepare.</p>
            </article>
            <article>
              <span className="step-circle">3</span>
              <h3>Rico Comes to You</h3>
              <p>Rico arrives at your location to diagnose or repair the issue.</p>
            </article>
          </div>
        </section>

        <section className="section service-area">
          <div className="service-area__inner">
            <h2>Mobile Mechanic Service in Phoenix, AZ</h2>
            <p>
              Rico's Mobile Mechanic and Tint serves Phoenix and nearby areas. Not sure if
              you are in the service area? Call or text{" "}
              <a href={`tel:${phoneTel}`}>{phoneDisplay}</a> and Rico will let
              you know.
            </p>
          </div>
        </section>

        <CTA
          title="Car won't start? Need help today?"
          body="Don't wait around. Call Rico now for fast mobile mechanic service in Phoenix."
        />

        <section className="section">
          <div className="section-heading section-heading--center">
            <h2>What Phoenix Drivers Say</h2>
          </div>
          <div className="testimonial-grid">
            {testimonials.map((testimonial) => (
              <figure className="testimonial" key={testimonial.name}>
                <blockquote>"{testimonial.quote}"</blockquote>
                <figcaption>
                  <strong>{testimonial.name}</strong>
                  <span>{testimonial.area}</span>
                </figcaption>
              </figure>
            ))}
          </div>
        </section>

        <section className="section section--alt">
          <div className="section-heading section-heading--center">
            <h2>Frequently Asked Questions</h2>
          </div>
          <FAQ items={faqs} />
        </section>

        <section className="section" id="contact">
          <div className="section-heading section-heading--center">
            <h2>Request Service</h2>
            <p className="section-subtitle">
              Fill out the form below and Rico will get back to you. For
              immediate assistance, call or text {phoneDisplay}.
            </p>
          </div>
          <div className="form-shell">
            <RequestServiceForm />
          </div>
        </section>

        <section className="section" id="book">
          <div className="section-heading section-heading--center">
            <h2>Book Mobile Mechanic Service</h2>
            <p className="section-subtitle">
              Choose a time that works for you, or call Rico directly for faster
              help.
            </p>
          </div>
          <div className="booking-shell">
            <BookingCalendar />
          </div>
        </section>
      </main>
      <Footer />
      <StickyMobileCall />
    </>
  );
}
