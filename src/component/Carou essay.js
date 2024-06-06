// Carousel.js

import React, { useState } from 'react';
import './Carousel.css';

const Carousel = ({ slides }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex === slides.length - 1 ? 0 : prevIndex + 1));
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? slides.length - 1 : prevIndex - 1));
  };

  return (
    <div className="carousel-container">
      <button onClick={prevSlide} className="prev-btn">Prev</button>
      <div className="carousel-slide">
        <img src={slides[currentIndex].image} alt={slides[currentIndex].title} />
        <h2>{slides[currentIndex].title}</h2>
        <p>{slides[currentIndex].description}</p>
      </div>
      <button onClick={nextSlide} className="next-btn">Next</button>
    </div>
  );
};

export default Carousel;
