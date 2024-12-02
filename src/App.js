import React from "react";
import Countdown from "./components/Countdown";
import FloatingHearts from "./components/FloatingHearts";
import Slideshow from "./components/Slideshow";
import Background from "./components/Background"; // New background component
import BirthdayMessage from "./components/BirthdayMessage";
import "./index.css";

function App() {
  return (
    <div className="app">
      <link href="https://fonts.googleapis.com/css2?family=Great+Vibes&display=swap" rel="stylesheet"></link>
      <Background />
      <FloatingHearts />
      <div className="content">
        <BirthdayMessage />
        <Slideshow />
        <Countdown />
      </div>
    </div>
  );
}

export default App;
