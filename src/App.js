import React from "react";
import Countdown from "./components/Countdown";
import FloatingHearts from "./components/FloatingHearts";
import Slideshow from "./components/Slideshow";
import Background from "./components/Background"; // New background component
import "./index.css";

function App() {
  return (
    <div className="app">
      <Background />
      <FloatingHearts />
      <div className="content">
        <Slideshow />
        <Countdown />
      </div>
    </div>
  );
}

export default App;
