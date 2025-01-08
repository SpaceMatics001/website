import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <header className="sticky top-0 z-50 w-full p-4 text-white bg-gray-950">
      <div className="container flex items-center justify-between mx-auto">
        <div className="flex items-center">
          <ul className="flex space-x-4">
            <li>
              <Link to="/home" className="text-3xl font-bold ml-2">
                SpaceMatics
              </Link>
            </li>
          </ul>
        </div>
        <nav>
          <ul className="flex space-x-4">
            <li>
              <Link to="/home" className="hover:text-gray-300">
                Home
              </Link>
            </li>
            <li>
              <Link to="/about" className="hover:text-gray-300">
                About
              </Link>
            </li>
            <li>
              <Link to="/missions" className="hover:text-gray-300">
                Missions
              </Link>
            </li>
            <li>
              <Link to="/team" className="hover:text-gray-300">
                Team
              </Link>
            </li>
            <li>
              <Link to="/contact" className="hover:text-gray-300">
                Contact
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
