import React from "react";
import Team from "./Team";

const missionsData = [
  {
    id: 1,
    title: "Satellite  Data as a Service",
    description:
      "SpaceMatics offers scalable and on-demand access to high-resolution satellite imagery and analytics, enabling businesses and researchers to monitor environmental changes, agricultural patterns, and urban development. Our AI-powered platform delivers actionable insights by processing vast datasets, ensuring timely and accurate decision-making across industries.",
    imageUrl: "mission1.png",
  },
  {
    id: 2,
    title: "CubeSats",
    description:
      "SpaceMatics designs and develops compact, cost-effective CubeSats to support Earth observation, communication, and space debris monitoring. These modular satellites leverage advanced AI algorithms for real-time data processing, enabling scalable and customizable solutions for scientific research and commercial applications.",
    imageUrl: "mission2.jpg",
  },
  {
    id: 3,
    title: "Space Debris Mitigation",
    description:
      "SpaceMatics is committed to sustainable space operations through innovative space debris mitigation solutions. Using AI-powered tracking and predictive modeling, we monitor and analyze orbital debris to prevent collisions and optimize satellite maneuvering. Our CubeSat-based technologies also support active debris removal, ensuring safer and cleaner orbits for future missions.",
    imageUrl: "mission3.jpg",
  },
  {
    id: 4,
    title: "Planetary Unmanned Bots",
    description:
      "SpaceMatics develops advanced unmanned rovers and landers designed for planetary exploration and surface analysis. Equipped with AI-driven navigation and sensor systems, these bots conduct autonomous surveys, collect samples, and transmit critical data, enabling groundbreaking discoveries in space exploration and extraterrestrial research.",
    imageUrl: "mission4.jpg",
  },
  // Add more missions as needed*/}
];

const Mission = ({ mission, isImageLeft }) => {
  return (
    <div
      className={`flex flex-col-reverse md:flex-row ${
        isImageLeft ? "md:flex-row" : "md:flex-row-reverse"
      } my-8 
      hover:bg-gray-800 hover:shadow-sm hover:shadow-white transition duration-300`}
    >
      <div className="flex items-center justify-center md:w-1/2">
        <img
          src={mission.imageUrl}
          alt={mission.title}
          className="object-cover w-full h-64 rounded-lg md:h-96"
        />
      </div>
      <div className="flex flex-col justify-center p-4 text-white md:w-1/2">
        <h2 className="mb-2 text-2xl font-bold">{mission.title}</h2>
        <p className="text-lg">{mission.description}</p>
      </div>
    </div>
  );
};

const Missions = () => {
  return (
    <>
      <section id="missions" className="min-h-screen p-8 bg-gray-950">
        <div className="container mx-auto rounded-lg">
          <h1 className="mb-8 text-4xl font-bold text-center text-white">
            Our Missions
          </h1>
          {missionsData.map((mission, index) => (
            <Mission
              key={mission.id}
              mission={mission}
              isImageLeft={index % 2 === 0}
            />
          ))}
        </div>
      </section>
      <Team />
    </>
  );
};

export default Missions;
