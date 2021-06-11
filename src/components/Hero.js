import React from "react";
import "../App.css";
import "./Hero.css";
import vid from "../styles/herovid.mp4";

function Hero() {
  return (
    <div className="hero-container">
      <video src={vid} autoPlay loop muted />
      <h1>
        Find your <br /> perfect Tournament here!
      </h1>
      <br /> <br />
      <button>
        <span>Enter</span>
      </button>
    </div>
  );
}

export default Hero;
