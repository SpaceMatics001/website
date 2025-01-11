import React from "react";
import { FaFacebook, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="relative p-8 text-white bg-gray-900">
      <div className="container flex flex-col items-center justify-between mx-auto md:flex-row">
        {/* Subscribe to Newsletter Button 
        <div className="mb-4 md:mb-0">
          <button className="px-4 py-2 text-white transition duration-300 bg-blue-600 rounded-lg hover:bg-blue-700">
            Subscribe to Newsletter
          </button>
        </div>*/}
        {/* Footer Text */}
        <p className="mb-4 text-sm text-center md:text-left md:mb-0">
          &copy; 2024 SpaceMatics. All rights reserved.
        </p>
        {/* Social Media Links */}
        <div className="flex space-x-4">
          <a
            href="https://www.facebook.com/share/14s5QiAPBH/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaFacebook
              size={24}
              className="text-blue-600 transition duration-300 hover:text-white"
            />
          </a>
          <a
            href="https://www.linkedin.com/company/spacematics001/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedin
              size={24}
              className="text-blue-600 transition duration-300 hover:text-white"
            />
          </a>
        </div>
      </div>
      {/* Orbiting Satellite */}
      {/* Moving Lander */}
      {/*<Lander />*/}
    </footer>
  );
};

export default Footer;
