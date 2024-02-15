import { Link } from "react-router-dom";
import React, { useState } from "react";
import { AiOutlineClose, AiOutlineMenuFold } from "react-icons/ai";
import "../styles/header.css";

export const Header = () => {
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };

  const handleLinkClick = () => {
    setNav(false); // Close the mobile menu when a link is clicked
  };

  return (
    <div className="header flex justify-between items-center  h-24 max-w-[1240px] mx-auto px-4 text-black">
      {/* <h1 className="text-[#00df9a] w-full text-3xl font-bold mt-0">LOGO.</h1> */}
      <Link to='/'>
        <div className="mt-8">
          <img src="royal-lab-logo.png" alt="royal-lab-logo" width="280px" />
        </div>
      </Link>
      
      <ul className="hidden md:flex cursor-pointer">
        <Link
          to="/"
          className="p-4 whitespace-nowrap hover:scale-110 transition-transform hover:text-[#00df9a]"
        >
          Home
        </Link>
        <Link
          to="test"
          className="p-4 whitespace-nowrap hover:scale-110 transition-transform hover:text-[#00df9a]"
        >
          Our Tests
        </Link>
        <Link
          to="careers"
          className="p-4 whitespace-nowrap hover:scale-110 transition-transform hover:text-[#00df9a]"
        >
          Careers
        </Link>
        <Link
          to="about"
          className="p-4 whitespace-nowrap hover:scale-110 transition-transform hover:text-[#00df9a]"
        >
          About Us
        </Link>
        <Link
          to="contact"
          className="p-4 whitespace-nowrap hover:scale-110 transition-transform hover:text-[#00df9a]"
        >
          Contact Us
        </Link>
      </ul>
      <div onClick={handleNav} className="block md:hidden cursor-pointer">
        {nav ? <AiOutlineClose size={25} /> : <AiOutlineMenuFold size={25} />}
      </div>

      <div
        className={`mobile-menu fixed top-0 h-full border-r border-gray-900 bg-[#ffffff] ease-in-out duration-300 z-50 ${nav ? "menu-open" : "menu-closed"}`}

      >
        <h1 className="text-[#00df9a] w-full text-3xl font-bold m-4 mt-8">
        <Link to='/'>
        <div className="mt-8">
          <img src="royal-lab-logo.png" alt="royal-lab-logo" width="280px" />
        </div>
      </Link>
        </h1>

        <ul className="p-4 mt-8 uppercase cursor-pointer">
          <li className="block border-b border-gray-600 hover:scale-105 ease-in-out duration-300">
            <Link
              to="/"
              className="p-4 text-black hover:text-[#00df9a] transition-all duration-300 "
              onClick={handleLinkClick}
            >
              Home
            </Link>
          </li>
          <li className="block border-b border-gray-600 mt-4 hover:scale-105 ease-in-out duration-300">
            <Link
              to="test"
              className="p-4 text-black hover:text-[#00df9a] transition-all duration-300 hover:scale-105"
              onClick={handleLinkClick}
            >
              Our Test
            </Link>
          </li>
          <li className="block border-b border-gray-600 mt-4 hover:scale-105 ease-in-out duration-300">
            <Link
              to="careers"
              className="p-4 text-black hover:text-[#00df9a] transition-all duration-300 hover:scale-105"
              onClick={handleLinkClick}
            >
              Careers
            </Link>
          </li>
          <li className="block border-b border-gray-600 mt-4 hover:scale-105 ease-in-out duration-300">
            <Link
              to="about"
              className="p-4 text-black hover:text-[#00df9a] transition-all duration-300 hover:scale-105"
              onClick={handleLinkClick}
            >
              About Us
            </Link>
          </li>
          <li className="block mt-4 hover:scale-105 ease-in-out duration-300">
            <Link
              to="contact"
              className="p-4 text-black hover:text-[#00df9a] transition-all duration-300 hover:scale-105"
              onClick={handleLinkClick}
            >
              Contact Us
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};
