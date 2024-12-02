import React, { useState, useEffect } from "react";
import "./Slideshow.css";

const slides = [
  "https://via.placeholder.com/300x400", // Replace with real image URLs
  "https://via.placeholder.com/350x350",
  "https://via.placeholder.com/400x300",
  "https://via.placeholder.com/500x500",
];

const Slideshow = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
    }, 4000); // Change slide every 4 seconds
    return () => clearInterval(timer);
  }, []);

  const getSlideStyles = (index) => {
    const offset = index - currentIndex;
    const absOffset = Math.abs(offset);

    return {
      transform: `translateX(calc(${offset} * 50%)) scale(${1 - absOffset * 0.3})`,
      zIndex: 10 - absOffset,
      opacity: 1 - absOffset * 0.5, // Gradual fade effect
    };
  };

  return (
    <div className="carousel-container">
      {slides.map((slide, index) => (
        <div
          key={index}
          className="carousel-slide"
          style={{
            backgroundImage: `url(${slide})`,
            ...getSlideStyles(index),
          }}
        >
          <p className="slide-caption">Caption for slide {index + 1}</p>
        </div>
      ))}
    </div>
  );
};

export default Slideshow;
