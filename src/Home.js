import React from "react";
import "./Home.css";
import About from "./About";

const Home = () => {
  return (
    <>
      <section id="home" className="relative min-h-screen bg-gray-950">
        <div className="container relative flex items-center justify-center h-full mx-auto text-center">
          <div>
            <img src="logo.png" className="m-4" alt="SpaceMatics Logo" />
          </div>
          <div className="earth-container">
            <div className="earth"></div>
          </div>
          <div className="planet-container">
            <div className="planet"></div>
          </div>
          <div className="mars-container">
            <div className="mars"></div>
          </div>
        </div>
      </section>
      <About />
    </>
  );
};

export default Home;
