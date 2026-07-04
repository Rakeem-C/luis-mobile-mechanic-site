"use client";

import { useState } from "react";
import {
  mapToAutomationationLead,
  type ServiceRequestFormData,
} from "@/lib/automationation";

const initialState: ServiceRequestFormData = {
  name: "",
  phone: "",
  vehicle: "",
  issue: "",
  location: "",
  preferredTime: "",
};

export function RequestServiceForm() {
  const [status, setStatus] = useState<string>("");
  const [form, setForm] = useState(initialState);

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("Sending request...");

    const payload = {
      ...form,
      integrationSource: "luis-mobile-mechanic-site",
      automationationLead: mapToAutomationationLead(form),
    };

    const response = await fetch("/api/request-service", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    });

    setStatus(
      response.ok
        ? "Thanks. This form is ready to connect to the live Automationation contact flow."
        : "Something went wrong. Please call Luis directly."
    );
  }

  function updateField(
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) {
    setForm((current) => ({
      ...current,
      [event.target.name]: event.target.value,
    }));
  }

  return (
    <form className="request-form" onSubmit={handleSubmit}>
      <div className="integration-note">
        Automationation-ready contact intake placeholder
      </div>
      <label>
        Name
        <input
          name="name"
          value={form.name}
          onChange={updateField}
          autoComplete="name"
          required
        />
      </label>
      <label>
        Phone number
        <input
          name="phone"
          type="tel"
          value={form.phone}
          onChange={updateField}
          autoComplete="tel"
          required
        />
      </label>
      <label>
        Vehicle year/make/model
        <input
          name="vehicle"
          value={form.vehicle}
          onChange={updateField}
          placeholder="2016 Toyota Camry"
          required
        />
      </label>
      <label>
        Current issue
        <textarea
          name="issue"
          value={form.issue}
          onChange={updateField}
          rows={4}
          placeholder="Tell Luis what is happening with the vehicle."
          required
        />
      </label>
      <label>
        Location in Phoenix or nearby area
        <input
          name="location"
          value={form.location}
          onChange={updateField}
          placeholder="Cross streets, ZIP, or neighborhood"
          required
        />
      </label>
      <label>
        Preferred service time
        <input
          name="preferredTime"
          value={form.preferredTime}
          onChange={updateField}
          placeholder="Today after 3pm"
        />
      </label>
      <button className="button button--accent" type="submit">
        Request Mobile Mechanic Service
      </button>
      {status ? <p className="form-status">{status}</p> : null}
      <p className="form-help">
        This payload already includes an Automationation-compatible lead object,
        so you can swap the placeholder endpoint for the real intake flow later.
      </p>
    </form>
  );
}
