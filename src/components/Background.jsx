import React, { useState } from "react";
import "./Background.css";

const Background = () => {
  const [offsetX, setOffsetX] = useState(0);
  const [offsetY, setOffsetY] = useState(0);

  const handleMouseMove = (e) => {
    const { clientX, clientY, innerWidth, innerHeight } = e;
    setOffsetX((clientX / innerWidth - 0.5) * 50);
    setOffsetY((clientY / innerHeight - 0.5) * 50);
  };

  return (
    <div
      className="background"
      onMouseMove={handleMouseMove}
      style={{
        backgroundPosition: `${50 + offsetX}% ${50 + offsetY}%`,
      }}
    >
      <div className="shape shape1"></div>
      <div className="shape shape2"></div>
      <div className="shape shape3"></div>
      <div className="shape shape4"></div>
      <div className="shape shape5"></div>
    </div>
  );
};

export default Background;
