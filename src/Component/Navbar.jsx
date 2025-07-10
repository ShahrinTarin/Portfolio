import React from 'react';
import { FaEnvelope, FaMarker, FaUser, FaUserGraduate } from 'react-icons/fa';
import { FaHandHoldingHand } from 'react-icons/fa6';
import { IoHome } from "react-icons/io5";
import logo from '/logo.png';

const Navbar = () => {
  const links = (
    <>
      <li>
        <a href="#home" className="flex items-center gap-1 px-3 py-2 rounded-md text-sm font-medium text-[#999999] hover:text-[#80ed99] hover:underline">
          <IoHome /> Home
        </a>
      </li>
      <li>
        <a href="#about" className="flex items-center gap-1 px-3 py-2 rounded-md text-sm font-medium text-[#999999] hover:text-[#80ed99] hover:underline">
          <FaUser /> About
        </a>
      </li>
      <li>
        <a href="#skills" className="flex items-center gap-1 px-3 py-2 rounded-md text-sm font-medium text-[#999999] hover:text-[#80ed99] hover:underline">
          <FaMarker /> Skills
        </a>
      </li>
      <li>
        <a href="#education" className="flex items-center gap-1 px-3 py-2 rounded-md text-sm font-medium text-[#999999] hover:text-[#80ed99] hover:underline">
          <FaUserGraduate /> Education
        </a>
      </li>
      <li>
        <a href="#projects" className="flex items-center gap-1 px-3 py-2 rounded-md text-sm font-medium text-[#999999] hover:text-[#80ed99] hover:underline">
          <FaHandHoldingHand /> Projects
        </a>
      </li>
      <li>
        <a href="#contact" className="flex items-center gap-1 px-3 py-2 rounded-md text-sm font-medium text-[#999999] hover:text-[#80ed99] hover:underline">
          <FaEnvelope /> Contact
        </a>
      </li>
    </>
  );

  return (
    <header className="sticky top-0 z-50 bg-transparent backdrop-blur border-b border-gray-700">
      <nav className="flex items-center justify-between w-11/12 mx-auto py-4">
        {/* Logo */}
        <a href="#home" className="flex items-center gap-2 hover:opacity-90">
          <img src={logo} alt="Logo" className="h-10 w-10" />
          <span className="hidden md:inline font-bold text-xl text-white">
            <span className="text-[#80ed99]">SHAHRIN</span> AKTHER
          </span>
        </a>

        {/* Desktop Nav */}
        <ul className="hidden lg:flex items-center border border-[#999999] rounded-full px-4 py-2">
          {links}
        </ul>

        {/* Resume Button */}
        <a
          href="#home"
          className="relative p-0.5 inline-flex items-center justify-center font-bold overflow-hidden group rounded-md"
        >
          <span className="w-full h-full bg-gradient-to-br from-[#80ed99] via-[#54ebff] to-[#122c12] group-hover:from-[#122c12] group-hover:via-[#54ebff] group-hover:to-[#80ed99] absolute"></span>
          <span className="relative px-4 py-2 transition-all ease-out bg-gray-900 rounded-md group-hover:bg-opacity-0 duration-400">
            <a
              href="https://drive.google.com/uc?export=download&id=1bk5LDODeFJfi7W50lbt5NAyQbROKRQXH"
              className="relative text-white flex items-center"
              download
            >
              Resume <FaDownload className="ml-2 icon-bounce" />
            </a>
          </span>
        </a>

        {/* Mobile Nav */}
        <div className="lg:hidden dropdown dropdown-end">
          <label tabIndex={0} className="btn btn-ghost">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </label>
          <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 p-2 shadow bg-[#0b0b0b] rounded-box w-52 border border-gray-700">
            {links}
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
