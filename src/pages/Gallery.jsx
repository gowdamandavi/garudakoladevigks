// src/pages/Gallery.jsx
import React from "react";

// Import images from src/assets/images
import image1 from "../assets/images/image1.jpg";
import image2 from "../assets/images/image2.jpg";
import image3 from "../assets/images/image3.png";
import image4 from "../assets/images/image4.png";
import garuda from "../assets/images/garuda.jpg";

const images = [
  image1,
  image2,
  image3,
  image4,
  garuda
];

export default function Gallery() {
  return (
    <main className="page gallery-page" aria-labelledby="gallery-heading">
      <h1 id="gallery-heading">Temple Gallery</h1>

      <p className="gallery-intro">
        A selection of images from the temple, festivals, and surrounding sacred
        landscape. Click on any image to view it in detail.
      </p>

      <section className="gallery-grid" aria-live="polite">
        {images.map((src, index) => (
          <figure key={index} className="gallery-item">
            <img
              src={src}
              alt={`Temple gallery image ${index + 1}`}
              loading="lazy"
            />
          </figure>
        ))}
      </section>
    </main>
  );
}
