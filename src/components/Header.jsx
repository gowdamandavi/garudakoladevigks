import { NavLink } from "react-router-dom";
import { useContext } from "react";
import { LanguageContext } from "../context/LanguageContext";

export default function Header() {
  const { lang, setLang, dictionary } = useContext(LanguageContext);

  return (
    <header className="site-header">
      <nav className="nav" aria-label="Primary navigation">
        {/* Site title */}
        <span className="site-title">
          {dictionary.title}
        </span>

        {/* Navigation links */}
        <NavLink to="/" end>
          Home
        </NavLink>
        <NavLink to="/about">
          {dictionary.about}
        </NavLink>
        <NavLink to="/unique-deity">
          Unique Deity
        </NavLink>
        <NavLink to="/legend">
          {dictionary.legend}
        </NavLink>
        <NavLink to="/gallery">
          {dictionary.gallery}
        </NavLink>
        <NavLink to="/sevas">
          Sevas
        </NavLink>
        <NavLink to="/contact">
          {dictionary.contact}
        </NavLink>

        {/* Language toggle */}
        <button
          type="button"
          className="lang-toggle"
          onClick={() => setLang(lang === "en" ? "kn" : "en")}
          aria-label="Toggle language"
        >
          {lang === "en" ? "ಕನ್ನಡ" : "English"}
        </button>
      </nav>
    </header>
  );
}

