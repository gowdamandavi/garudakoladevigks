import { useState } from "react";

export default function Contact() {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    seva: ""
  });

  const [status, setStatus] = useState({
    loading: false,
    message: "",
    error: false
  });

  async function handleSubmit(e) {
    e.preventDefault();
    setStatus({ loading: true, message: "", error: false });

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form)
      });

      if (!response.ok) {
        throw new Error("Unable to submit request");
      }

      const result = await response.json();

      setStatus({
        loading: false,
        message: result.message || "Request submitted successfully.",
        error: false
      });

      setForm({ name: "", phone: "", seva: "" });
    } catch (err) {
      setStatus({
        loading: false,
        message: "Submission failed. Please try again later.",
        error: true
      });
    }
  }

  return (
    <main className="page contact-page" aria-labelledby="contact-heading">
      <h1 id="contact-heading">Contact & Seva Booking</h1>

      <section className="contact-grid">
        {/* ===== Contact / Booking Form ===== */}
        <div className="contact-form">
          <h2>Request a Seva</h2>

          <form onSubmit={handleSubmit} className="booking-form">
            <label htmlFor="name">Full Name</label>
            <input
              id="name"
              type="text"
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
              required
            />

            <label htmlFor="phone">Phone Number</label>
            <input
              id="phone"
              type="tel"
              value={form.phone}
              onChange={(e) => setForm({ ...form, phone: e.target.value })}
              required
            />

            <label htmlFor="seva">Requested Seva</label>
            <input
              id="seva"
              type="text"
              value={form.seva}
              onChange={(e) => setForm({ ...form, seva: e.target.value })}
              placeholder="Optional"
            />

            <button type="submit" disabled={status.loading}>
              {status.loading ? "Submitting..." : "Submit Request"}
            </button>
          </form>

          {status.message && (
            <p className={status.error ? "error-message" : "success-message"}>
              {status.message}
            </p>
          )}
        </div>

        {/* ===== Map & Location ===== */}
        <aside className="map-aside" aria-label="Temple location">
          <h2>How to Reach</h2>

          <p>
            Koladevi Garuda Temple is accessible from Kolar and Mulbagal.
            Visitors may travel via Gujjanahalli village. Use the map below
            for directions.
          </p>

          <div className="map-embed">
            <iframe
              title="Koladevi Garuda Temple location"
              src="https://www.google.com/maps?q=Koladevi+Garuda+Temple&output=embed"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>

          <p className="nearby">
            Nearby shrines include Sri Venugopala Swamy Temple, Gujjanahalli.
          </p>
        </aside>
      </section>
    </main>
  );
}
