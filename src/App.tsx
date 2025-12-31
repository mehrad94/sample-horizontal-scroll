"use client";
import { useEffect } from "react";
import "./App.css";
import { initializeSlider } from "./script";

function App() {
  useEffect(() => {
    initializeSlider();
  }, []);
  return (
    <>
      <nav>
        <div className="logo">
          <a href="#">Glasswake</a>
        </div>
        <div className="nav-links">
          <a href="#">Work</a>
          <a href="#">Studio</a>
          <a href="#">Contact</a>
        </div>
      </nav>
      <div>
        <div className="slide-track"></div>
      </div>
      <footer>
        <p>Experiment 0471</p>
        <p>Built By Mehrad</p>
      </footer>
    </>
  );
}

export default App;
