import React, { useState } from "react";

export default function Sevas() {
  const [selectedSeva, setSelectedSeva] = useState("");
  const sevas = [
    { id: 1, name: "Abhishekam", duration: "30 mins", fee: 200 },
    { id: 2, name: "Archana", duration: "15 mins", fee: 100 },
    { id: 3, name: "Special Pooja", duration: "60 mins", fee: 500 }
  ];

  return (
    <main className="page sevas-page" aria-labelledby="sevas-heading">
      <h1 id="sevas-heading">Sevas & Booking</h1>

      <section className="sevas-list">
        <p>Select a seva from the list and proceed to the booking form on Contact.</p>
        <ul>
          {sevas.map((s) => (
            <li key={s.id} className="seva-item">
              <strong>{s.name}</strong> — {s.duration} — ₹{s.fee}
              <button
                onClick={() => setSelectedSeva(s.id)}
                aria-pressed={selectedSeva === s.id}
                className="btn-select"
              >
                {selectedSeva === s.id ? "Selected" : "Select"}
              </button>
            </li>
          ))}
        </ul>

        {selectedSeva && (
          <div className="selected-note" role="status">
            Selected seva ID: <strong>{selectedSeva}</strong>. Complete booking on the Contact page.
          </div>
        )}
      </section>
    </main>
  );
}
