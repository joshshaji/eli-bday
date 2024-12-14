// FloatingHearts.jsx

import React, { useEffect, useState } from "react";
import "./FloatingHearts.css";

const FloatingHearts = () => {
  const [hearts, setHearts] = useState([]);

  useEffect(() => {
    const generateHeart = () => {
      const id = Date.now() + Math.random(); // Unique ID for each heart
      const newHeart = {
        id,
        left: Math.random() * 90 + 5, // Random horizontal position (5% - 95%)
        size: Math.random() * 20 + 30, // Random size (30px - 50px)
        broken: false, // Whether the heart is clicked and broken
        animationDuration: Math.random() * 10 + 15, // Random duration (5s - 10s)
      };
      setHearts((prevHearts) => [...prevHearts, newHeart]);

      // Remove heart after maximum duration
      setTimeout(() => {
        setHearts((prevHearts) =>
          prevHearts.filter((heart) => heart.id !== id)
        );
      }, (newHeart.animationDuration + 1) * 1000); // Remove after duration + buffer
    };

    // Generate a heart at random intervals
    const interval = setInterval(generateHeart, 800); // New heart every 0.8 seconds
    return () => clearInterval(interval); // Cleanup on component unmount
  }, []);

  const handleBreak = (id, event) => {
    // Capture the current position of the heart
    const heartElement = event.currentTarget;
    const { left, top } = heartElement.getBoundingClientRect();

    // Calculate the offset relative to the container
    const containerRect =
      heartElement.parentElement.getBoundingClientRect();
    const offsetX = left - containerRect.left;
    const offsetY = top - containerRect.top;

    // Mark the heart as broken and store its position
    setHearts((prevHearts) =>
      prevHearts.map((heart) => {
        if (heart.id === id) {
          return {
            ...heart,
            broken: true,
            offsetX,
            offsetY,
          };
        }
        return heart;
      })
    );
  };

  return (
    <div className="floating-hearts-container">
      {hearts.map((heart) => (
        <React.Fragment key={heart.id}>
          {!heart.broken && (
            <svg
              className="heart-svg"
              style={{
                left: `calc(${heart.left}% - ${heart.size / 2}px)`,
                width: `${heart.size}px`,
                height: `${heart.size}px`,
                animationDuration: `${heart.animationDuration}s`,
                bottom: `-${heart.size / 2}px`, // Adjust starting position
              }}
              viewBox="0 0 48 48"
              preserveAspectRatio="xMidYMid meet"
              onClick={(event) => handleBreak(heart.id, event)}
            >
              <defs>
                <linearGradient
                  id={`heartGradient-${heart.id}`}
                  x1="0%"
                  y1="0%"
                  x2="0%"
                  y2="100%"
                >
                  <stop offset="0%" stopColor="#ff6f91" />
                  <stop offset="100%" stopColor="#ffe1e7" />
                </linearGradient>
              </defs>
              <path
                d="M24 43C24 43 4 26 4 15C4 8.4 9.4 3 16 3C19.6 3 23 5 24 8C25 5 28.4 3 32 3C38.6 3 44 8.4 44 15C44 26 24 43 24 43Z"
                fill={`url(#heartGradient-${heart.id})`}
              />
            </svg>
          )}

          {heart.broken && (
            <>
              <svg
                className="heart-piece-svg left"
                style={{
                  left: `${heart.offsetX}px`,
                  top: `${heart.offsetY}px`,
                  width: `${heart.size}px`,
                  height: `${heart.size}px`,
                }}
                viewBox="0 0 48 48"
                preserveAspectRatio="xMidYMid meet"
              >
                <defs>
                  <linearGradient
                    id={`heartGradient-${heart.id}-left`}
                    x1="0%"
                    y1="0%"
                    x2="0%"
                    y2="100%"
                  >
                    <stop offset="0%" stopColor="#ff6f91" />
                    <stop offset="100%" stopColor="#ffe1e7" />
                  </linearGradient>
                </defs>
                <path
                  d="M24 43C24 43 4 26 4 15C4 8.4 9.4 3 16 3C19.6 3 23 5 24 8V43Z"
                  fill={`url(#heartGradient-${heart.id}-left)`}
                />
              </svg>
              <svg
                className="heart-piece-svg right"
                style={{
                  left: `${heart.offsetX}px`,
                  top: `${heart.offsetY}px`,
                  width: `${heart.size}px`,
                  height: `${heart.size}px`,
                }}
                viewBox="0 0 48 48"
                preserveAspectRatio="xMidYMid meet"
              >
                <defs>
                  <linearGradient
                    id={`heartGradient-${heart.id}-right`}
                    x1="0%"
                    y1="0%"
                    x2="0%"
                    y2="100%"
                  >
                    <stop offset="0%" stopColor="#ff6f91" />
                    <stop offset="100%" stopColor="#ffe1e7" />
                  </linearGradient>
                </defs>
                <path
                  d="M24 43V8C25 5 28.4 3 32 3C38.6 3 44 8.4 44 15C44 26 24 43 24 43Z"
                  fill={`url(#heartGradient-${heart.id}-right)`}
                />
              </svg>
            </>
          )}
        </React.Fragment>
      ))}
    </div>
  );
};

export default FloatingHearts;
