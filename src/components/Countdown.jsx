import React, { useState, useEffect } from "react";
import { useSpring, animated } from "@react-spring/web";
import { useNavigate } from "react-router-dom"; 

const Countdown = () => {
  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setInterval(() => {
      const newTimeLeft = calculateTimeLeft();
      setTimeLeft(newTimeLeft);

      // Check if the countdown has finished
      if (
        newTimeLeft.days <= 0 &&
        newTimeLeft.hours <= 0 &&
        newTimeLeft.minutes <= 0 &&
        newTimeLeft.seconds <= 0
      ) {
        clearInterval(timer);
        // Navigate to the desired component
        navigate("/message"); // Replace with your target route
      }
    }, 1000);

    return () => clearInterval(timer);
  }, [navigate]);

  function calculateTimeLeft() {
    const birthday = new Date("2024-12-18T05:00:00.000Z");
    const now = new Date();
    const difference = birthday - now;

    return {
      days: Math.floor(difference / (1000 * 60 * 60 * 24)),
      hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((difference / 1000 / 60) % 60),
      seconds: Math.floor((difference / 1000) % 60),
    };
  }

  const glowEffect = useSpring({
    boxShadow: "0px 0px 20px 5px rgba(255, 100, 150, 0.8)",
    from: { boxShadow: "0px 0px 5px 2px rgba(255, 100, 150, 0.4)" },
    config: { duration: 1000 },
    loop: true,
  });

  return (
    <div className="countdown-container">
      <animated.div style={glowEffect} className="timer-container">
        <h1>Cuenta regresiva para tu cumpleaños 🥰</h1>
        <div className="timer">
          <div>
            <span>{timeLeft.days}</span>
            <p>Días</p>
          </div>
          <div>
            <span>{timeLeft.hours}</span>
            <p>Horas</p>
          </div>
          <div>
            <span>{timeLeft.minutes}</span>
            <p>Min</p>
          </div>
          <div>
            <span>{timeLeft.seconds}</span>
            <p>Seg</p>
          </div>
        </div>
      </animated.div>
    </div>
  );
};

export default Countdown;