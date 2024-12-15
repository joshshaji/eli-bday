import React from "react";
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import Countdown from "./components/Countdown";
import FloatingHearts from "./components/FloatingHearts";
import Slideshow from "./components/Slideshow";
import Background from "./components/Background";
import BirthdayMessage from "./components/BirthdayMessage";
import BirthdayAnimation from "./components/AnimatedMessage";
import "./index.css";
import Timeline from "./components/Timeline";

function App() {
  return (
    <Router>
      <div className="app">
        <link
          href="https://fonts.googleapis.com/css2?family=Great+Vibes&display=swap"
          rel="stylesheet"
        ></link>
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400&display=swap"
          rel="stylesheet"
        ></link>
        <Routes>
          <Route
            path="/"
            element={
              <div className="content">
                <Background />
                <FloatingHearts />
                <BirthdayMessage />
                <Slideshow />
                <Countdown />
              </div>
            }
          />
          <Route
            path="/message"
            element={
              <div>
                <Background />
                <FloatingHearts />
                <BirthdayAnimation />
              </div>
            }
          />
          <Route
            path="/timeline"
            element={
              <div>
                <Background />
                <FloatingHearts />
                <Timeline />
              </div>
            }
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
