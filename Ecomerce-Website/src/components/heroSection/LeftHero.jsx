import React from "react";
import { RiArrowRightSLine } from "react-icons/ri";
const LeftHero = () => {
  return (
    <div className="w-full  space-y-4 animate-slide-left">
      <h3 className="text-[#003b99] text-[20px] tracking-wider font-semibold ">
        EXPLORE THE LATEST IN TECH INDUSTRIES.
      </h3>
      <h1 className="text-[#2a2c30] tracking-tight font-serif text-[45px] leading-15 font-extrabold  ">
        Your Destination For Cutting-Edge Gadgets!
      </h1>
      <p className="text-white">
        Welcome to AHSAN E-ComerceStore, your ultimate destination for
        cutting-edge gadgets! Explore the latest in tech innovation and style
        with us. Shop now and discover a world of possibilities!
      </p>
      <a href="">
        <button className="flex items-center text-white px-5 py-2 bg-[#2a2c30] rounded-md  cursor-pointer gap-2 duration-500 transition-all hover:scale-105 ">
          Explore Our Products
          <RiArrowRightSLine className="" />
        </button>
      </a>
    </div>
  );
};

export default LeftHero;
