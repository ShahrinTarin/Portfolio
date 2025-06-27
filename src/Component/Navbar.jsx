import React from 'react';
import { FaMarker, FaUser, FaUserGraduate } from 'react-icons/fa';
import { FaHandHoldingHand } from 'react-icons/fa6';
import { IoHome } from "react-icons/io5";
import logo from '/logo.png'
const Navbar = () => {
  const links = <>
    <li><a href="#home" className=" px-3 py-2 rounded-md text-sm font-medium text-[#999999] hover:text-[#80ed99] hover:underline flex"><IoHome />Home</a></li>
    <li><a href="#about" className="px-3 py-2 rounded-md text-sm font-medium text-[#999999] hover:text-[#80ed99] hover:underline flex"><FaUser />About</a></li>
    <li><a href="#projects" className="flex px-3 py-2 rounded-md text-sm font-medium text-[#999999] hover:text-[#80ed99] hover:underline"><FaMarker />Skills</a></li>
    <li><a href="#projects" className="flex px-3 py-2 rounded-md text-sm font-medium text-[#999999] hover:text-[#80ed99] hover:underline"><FaUserGraduate />Education</a></li>
    <li><a href="#projects" className="flex px-3 py-2 rounded-md text-sm font-medium text-[#999999] hover:text-[#80ed99] hover:underline"><FaHandHoldingHand />Projects</a></li>
  </>;

  return (
    <div className='w-10/12 mx-auto'>
      <div className="navbar bg-transparent pt-8 text-white">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> 
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> 
              </svg>
            </div>
            <ul tabIndex={0} className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
              {links}
            </ul>
          </div>
          <a className="text-3xl flex-wrap flex items-center font-semibold hover:border  hover:border-[#999999] hover:rounded-4xl hover:px-4 hover:py-2 hover:bg-gray-500 " href='#home'><img src={logo} className='h-18 w-18' alt="logo" /><p className='hidden md:flex'><span className='text-[#80ed99] '>SHAHRIN</span> AKTHER</p></a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-5 border border-[#999999] rounded-4xl">
            {links}
          </ul>
        </div>
        <div className="navbar-end">
         <a href="#_" class="relative p-0.5 inline-flex items-center justify-center font-bold overflow-hidden group rounded-md">
    <span class="w-full h-full bg-gradient-to-br from-[#80ed99] via-[#54ebff] to-[#122c12] group-hover:from-[#122c12] group-hover:via-[#54ebff] group-hover:to-[#80ed99] absolute"></span>
    <span class="relative px-4 py-2 transition-all ease-out bg-gray-900 rounded-md group-hover:bg-opacity-0 duration-400">
        <span class="relative text-white">Resume</span>
    </span>
</a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
