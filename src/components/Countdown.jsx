import React, { useState, useEffect } from "react";
import { useSpring, animated } from "@react-spring/web";

const Countdown = () => {
  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  function calculateTimeLeft() {
    const birthday = new Date("2024-12-18T05:00:00.000Z"); // Replace with your date
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
        <p>Days</p>
    </div>
    <div>
        <span>{timeLeft.hours}</span>
        <p>Hours</p>
    </div>
    <div>
        <span>{timeLeft.minutes}</span>
        <p>Minutes</p>
    </div>
    <div>
        <span>{timeLeft.seconds}</span>
        <p>Seconds</p>
    </div>
    </div>
      </animated.div>
    </div>
  );
};

export default Countdown;
