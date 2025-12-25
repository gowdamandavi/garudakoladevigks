import React, { useContext } from "react";
import { LanguageContext } from "../context/LanguageContext";

export default function Home() {
  const { dictionary } = useContext(LanguageContext);

  return (
    <>
      {/* ===== SEO META TAGS (HOME PAGE) ===== */}
      <title>Koladevi Garuda Temple | Unique Garuda Worship</title>
      <meta
        name="description"
        content="Koladevi Garuda Temple is a distinctive Vaishnava shrine where Garuda is worshipped as the principal deity, located near Gujjanahalli, Karnataka."
      />
      <meta
        name="keywords"
        content="Koladevi Garuda Temple, Garuda worship, Vaishnava temple Karnataka"
      />
      <link rel="canonical" href="https://koladevigarudatemple.org/" />

      <main className="page home-page" aria-labelledby="home-heading">

        {/* ===== HERO SECTION ===== */}
        <header className="hero">
          <div className="hero-overlay">
            <h1 id="home-heading">{dictionary.title}</h1>

            <p className="lede">
              {dictionary.tagline}
            </p>

            <a href="/contact" className="hero-cta">
              {dictionary.cta}
            </a>
          </div>

<picture>
  <source srcSet="/images/koladevi-temple-exterior.webp" type="image/webp" />
  <img
  src="/images/koladevi-temple-exterior.webp"
  alt="Koladevi Garuda Temple exterior in rural Karnataka"
  className="hero-image"
  loading="eager"
  fetchpriority="high"
/>

</picture>

        </header>

        {/* ===== INTRO SECTION ===== */}
        <section className="intro">
          <h2>{dictionary.welcomeHeading}</h2>
          <p>{dictionary.welcomeText}</p>

          <ul className="quick-links" aria-label="Quick navigation links">
            <li>
              <a href="/about">{dictionary.links.about}</a>
            </li>
            <li>
              <a href="/unique-deity">{dictionary.links.uniqueDeity}</a>
            </li>
            <li>
              <a href="/contact">{dictionary.links.visit}</a>
            </li>
          </ul>
        </section>

        {/* ===== HIGHLIGHTS SECTION ===== */}
        <section className="highlights">
          <h2>{dictionary.highlightsHeading}</h2>
          <ol>
            {dictionary.highlights.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ol>
        </section>

      </main>
    </>
  );
}
