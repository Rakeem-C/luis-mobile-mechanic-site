export function BookingCalendar() {
  const slots = ["Today", "Tomorrow", "This Week"];

  return (
    <div className="booking-calendar" aria-label="Booking calendar placeholder">
      <div className="integration-note">
        Automationation booking handoff placeholder
      </div>
      <div className="booking-calendar__header">
        <span>Booking Calendar Loading</span>
        <strong>Placeholder</strong>
      </div>
      <div className="booking-calendar__grid">
        {slots.map((slot) => (
          <button type="button" key={slot}>
            {slot}
          </button>
        ))}
      </div>
      <p>
        Select a preferred time in the future calendar connection, or call Luis
        directly for faster help.
      </p>
      <p className="booking-calendar__help">
        This panel is shaped so the Automationation booking calendar can replace
        it later without changing the surrounding page layout.
      </p>
      {/* Future integration point: replace this placeholder with the existing booking calendar component or booking API from the current Next.js app. */}
    </div>
  );
}
