"use client";
import { useEffect } from "react";
import "./App.css";
import { initializeSlider } from "./script";
import "./index.css";
function App() {
  useEffect(() => {
    initializeSlider();
  }, []);

  return (
    <div className="slider">
      <div className="slide-track"></div>
    </div>
  );
}

export default App;
