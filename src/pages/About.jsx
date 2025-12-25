import usePageMeta from "../hooks/usePageMeta";

export default function About() {
  usePageMeta(
    "About | Koladevi Garuda Temple",
    "Learn about the unique Vaishnava tradition of Koladevi Garuda Temple."
  );

  return (
    <main className="page">
      <h1>Koladevi Garuda Temple</h1>
      <p>
Koladevi Garuda Temple occupies a distinctive place within the Vaishnava tradition because of its rare theological emphasis on Garuda as the principal object of worship. In most Vaishnava shrines, Garuda is venerated as the divine vehicle and devoted attendant of Lord Vishnu, symbolizing loyalty and vigilant service. At Koladevi, however, this traditional hierarchy is re-envisioned, and Garuda is worshipped directly as the central deity. This unique orientation offers devotees a form of worship that highlights devotion expressed through service, discipline, and moral strength rather than royal authority or incarnational divinity.

Within classical Vaishnava thought, Garuda represents unwavering commitment to dharma, courage guided by righteousness, and selfless dedication to the divine will. His elevation to the primary position of worship at Koladevi reflects a localized yet scripturally grounded interpretation of Vaishnava philosophy, where bhakti is understood as active, responsible devotion. The temple thus encourages devotees to contemplate the ethical dimensions of religious life, emphasizing humility, loyalty, and steadfastness in the face of adversity.

The temple also functions as a center of communal devotion and reflection for surrounding villages. Beyond ritual worship, it serves as a space for moral instruction and shared cultural memory, where festivals, prayers, and observances reinforce collective values. The calm spatial arrangement of the shrine promotes quiet contemplation, allowing devotees to engage deeply with prayer and reflection. In this way, Koladevi Garuda Temple stands not only as a place of worship, but as a living institution that preserves and communicates core Vaishnava ideals through everyday devotional practice.
      </p>
      <p>
        The temple serves as a center of devotion, reflection, and moral
        instruction rooted in classical Vaishnava values.
      </p>
      <img
  src="/images/koladevi-temple-exterior.jpg"
  alt="Koladevi Garuda Temple exterior"
  className="hero-image"
/>

    </main>
  );
}