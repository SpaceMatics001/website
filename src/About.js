import React from "react";
import Mission from "./Missions";

const About = () => {
  return (
    <>
      <section id="about" className="min-h-screen p-8 bg-gray-950">
        <div className="container mx-auto">
          <h2 className="flex items-center justify-center mb-4 text-3xl font-bold text-white">
            About Us
          </h2>
          <div className="flex flex-wrap justify-center space-y-4 text-white">
            <p>
              At SpaceMatics, we are a pioneering space technology startup in
              India, embarking on a mission to reshape the future of space
              exploration. Driven by innovation and a passion for the unknown,
              we are dedicated to delivering cutting-edge solutions that empower
              humanity’s exploration of the cosmos. As we take our early steps
              toward establishing our presence in the space industry, our core
              focus is centered on four groundbreaking missions that define our
              vision for a sustainable and connected space ecosystem.
            </p>
            <p>
              At SpaceMatics, our mission is clear: to revolutionize space
              exploration by providing innovative, accessible, and sustainable
              solutions. We are committed to pushing the boundaries of what is
              possible, building a future where space is within reach for all.
              Join us in exploring the cosmos and together, let’s explore the
              stars.
            </p>
          </div>
        </div>
      </section>
      <Mission />
    </>
  );
};

export default About;
