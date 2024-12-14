import React, { useState, useEffect } from "react";
import "./Slideshow.css";

import Eli1 from "../assets/Eli1.JPG"
import Eli2 from "../assets/Eli2.JPG";
import Eli3 from "../assets/Eli3.JPG";
import Eli4 from "../assets/Eli4.JPG";
import Eli5 from "../assets/Eli5.png";
import Eli6 from "../assets/Eli6.png";
import Eli7 from "../assets/Eli7.JPG";
import Eli8 from "../assets/Eli8.JPG";
import Eli9 from "../assets/Eli9.png";
import Eli11 from "../assets/Eli11.png";
import Eli12 from "../assets/Eli12.jpeg";
import Eli13 from "../assets/Eli13.jpeg";
import Eli14 from "../assets/Eli14.png";
import Eli15 from "../assets/Eli15.png";
import Eli16 from "../assets/Eli16.png";
import EliBeach from "../assets/EliBeach.jpeg";
import Us from "../assets/us.jpeg";

const slides = [
  Eli1,
  Eli2,
  Eli3,
  Eli4,
  Eli5,
  Eli6,
  Eli7,
  Eli8,
  Eli9,
  EliBeach,
  Us,
  Eli11,
  Eli12,
  Eli13,
  Eli14,
  Eli15,
  Eli16,
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
        </div>
      ))}
    </div>
  );
};

export default Slideshow;
