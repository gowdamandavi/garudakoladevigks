import React, { useState } from "react";

const API_BASE = import.meta.env.VITE_API_BASE;

function BookingForm() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [sevaId, setSevaId] = useState("");
  const [status, setStatus] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("Submitting...");

    try {
      const response = await fetch(`${API_BASE}/api/bookings`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, phone, sevaId }),
      });

      const data = await response.json();

      if (response.ok) {
        setStatus("Booking saved successfully ✔");
        setName("");
        setPhone("");
        setSevaId("");
      } else {
        setStatus(`Error: ${data.error || "Unknown error"}`);
      }
    } catch (err) {
      setStatus(`Network error: ${err.message}`);
    }
  };

  return (
    <div className="booking-page">
      <h2>Seva Booking</h2>

      <form onSubmit={handleSubmit} className="booking-form">
        <label>Name</label>
        <input
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />

        <label>Phone</label>
        <input
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          pattern="[0-9]{10}"
          maxLength="10"
          required
        />

        <label>Choose Seva</label>
        <select
          value={sevaId}
          onChange={(e) => setSevaId(e.target.value)}
          required
        >
          <option value="">Select seva</option>
          <option value="1">Garuda Pooja</option>
          <option value="2">Special Archana</option>
          <option value="3">Tulasi Seva</option>
        </select>

        <button type="submit">Book Now</button>
      </form>

      {status && (
        <div className={status.includes("✔") ? "success" : "error"}>
          {status}
        </div>
      )}
    </div>
  );
}

export default BookingForm;
