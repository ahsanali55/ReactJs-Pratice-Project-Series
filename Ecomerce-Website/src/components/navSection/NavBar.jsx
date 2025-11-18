import React from "react";
import { FaCartArrowDown } from "react-icons/fa6";
import TopHeader from "./TopHeader";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <div className="w-full bg-white">
      {/* === Navbar === */}
      <nav className="w-11/12  max-w-[1280px] flex justify-between  p-4 mx-auto">
        {/* === logo === */}
        <div className="p-0.5 border-4 flex ">
          <h1 className="font-extrabold bg-black text-white px-2">AHSAN</h1>
          <h1 className="font-extrabold px-2">STORE</h1>
        </div>
        {/* === right section === */}
        <div className="flex items-center gap-8">
          {/* nav  */}
          <ul className="flex gap-8">
            <Link to="/" className="group relative">
              <li className="font-bold cursor-pointer hover:text-[#535bf2]">
                HOME
              </li>
              <span className="absolute left-0 -bottom-1 h-0.5 w-0 bg-[#535bf2] transition-all duration-300 group-hover:w-full"></span>
            </Link>
            <Link to="/about" className="group relative">
              <li className="font-bold cursor-pointer hover:text-[#535bf2]">
                ABOUT
              </li>
              <span className="absolute left-0 -bottom-1 h-0.5 w-0 group-hover:w-full transition-all duration-300 bg-[#535bf2]"></span>
            </Link>
            <Link to="/product" className="group relative">
              <li className="font-bold cursor-pointer hover:text-[#535bf2]">
                PRODUCTS
              </li>
              <span className="absolute left-0 -bottom-1 h-0.5 w-0 group-hover:w-full transition-all duration-300 bg-[#535bf2]"></span>
            </Link>
            <Link to="/contact" className="group relative">
              <li className="font-bold cursor-pointer hover:text-[#535bf2]">
                CONTACTS
              </li>
              <span className="absolute left-0 -bottom-1 h-0.5 w-0 group-hover:w-full transition-all duration-300 bg-[#535bf2]"></span>
            </Link>
          </ul>
          <button
            className="flex items-center gap-1 bg-[#2a2c30] pl-5 pr-7 rounded-md py-2.5 relative cursor-pointer hover:scale-105 duration-300
                "
          >
            <FaCartArrowDown className="text-white text-[20px]" />
            <sup className="text-white absolute top-3 right-4 font-bold">0</sup>
          </button>
        </div>
      </nav>
    </div>
  );
};

export default NavBar;
