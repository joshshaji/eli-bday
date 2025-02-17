import React, { useState, useEffect } from "react";
import "./Background.css";

const Background = () => {
  const [offsetX, setOffsetX] = useState(0);
  const [offsetY, setOffsetY] = useState(0);
  const [shapes, setShapes] = useState([]);

  const handleMouseMove = (e) => {
    const { clientX, clientY } = e;
    const { innerWidth, innerHeight } = window;
    setOffsetX((clientX / innerWidth - 0.5) * 50);
    setOffsetY((clientY / innerHeight - 0.5) * 50);
  };

  useEffect(() => {
    const numberOfShapes = 20; 
    const newShapes = [];

    for (let i = 0; i < numberOfShapes; i++) {
      const size = Math.floor(Math.random() * 200) + 100; 
      const color = `rgba(${Math.floor(Math.random() * 256)}, ${Math.floor(
        Math.random() * 256
      )}, ${Math.floor(Math.random() * 256)}, ${(Math.random() * 0.3 + 0.1).toFixed(2)})`; 
      const top = `${Math.floor(Math.random() * 100)}%`;
      const left = `${Math.floor(Math.random() * 100)}%`; 
      const animationDelay = `${Math.random() * 8}s`;

      newShapes.push({
        size,
        color,
        top,
        left,
        animationDelay,
      });
    }

    setShapes(newShapes);
  }, []);

  return (
    <div
      className="background"
      onMouseMove={handleMouseMove}
      style={{
        backgroundPosition: `${50 + offsetX}% ${50 + offsetY}%`,
      }}
    >
      {shapes.map((shape, index) => (
        <div
          key={index}
          className="shape"
          style={{
            width: `${shape.size}px`,
            height: `${shape.size}px`,
            background: shape.color,
            top: shape.top,
            left: shape.left,
            animationDelay: shape.animationDelay,
          }}
        ></div>
      ))}
    </div>
  );
};

export default Background;
