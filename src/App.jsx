import { Routes, Route } from "react-router-dom";

import Header from "./components/Header";
import Footer from "./components/Footer";

import Home from "./pages/Home";
import About from "./pages/About";
import UniqueDeity from "./pages/UniqueDeity";
import Legend from "./pages/Legend";
import Gallery from "./pages/Gallery";
import Sevas from "./pages/Sevas";
import Contact from "./pages/Contact";

export default function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/unique-deity" element={<UniqueDeity />} />
        <Route path="/legend" element={<Legend />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/sevas" element={<Sevas />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </>
  );
}
