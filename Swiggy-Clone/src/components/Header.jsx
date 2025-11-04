import React, { useState } from "react";
import { MdArrowDropDown } from "react-icons/md";
import { IoMdSearch } from "react-icons/io";
import { RiDiscountPercentLine } from "react-icons/ri";
import { FaHandsHelping } from "react-icons/fa";
import { PiSignInBold } from "react-icons/pi";
import { TiShoppingCart } from "react-icons/ti";

const Header = () => {
  const [toggle, setToggle] = useState(false);
  

  const link = [
    {
      icon: <IoMdSearch />,
      name: "Search",
    },
    {
      icon: <RiDiscountPercentLine />,
      name: "Offers",
      super: "New"
    },
    {
      icon: <FaHandsHelping />,
      name: "Help",
    },
    {
      icon: <PiSignInBold />,
      name: "Sign In",
    },
    {
      icon: <TiShoppingCart />,
      name: "Cart",
      super: 0
    },
  ];

  console.log("render");

  const showSideMenu = () => {
    console.log("Click", toggle);
    setToggle(true);
  };
  const removeOverLay = () => {
    setToggle(false);
  };

  const stopPropagationFromChild = (event) => {
    event.stopPropagation();
  };

  return (
    <>
      <div
        className="blackOverLay w-full h-full fixed duration-300 z-50"
        onClick={removeOverLay}
        style={{
          opacity: toggle ? 1 : 0,
          visibility: toggle ? "visible" : "hidden",
        }}
      >
        {/* === SideBar === */}
        <div
          className="max-w-[400px] w-full h-full bg-white absolute transition-all duration-500 ease-in-out 2s "
          style={{
            left: toggle ? "0" : "-100%",
          }}
          onClick={stopPropagationFromChild}
        ></div>
      </div>

      <header className="p-[15px] shadow-xl w-full sticky top-0 z-10 bg-white">
        <div className="mx-auto max-w-[1080px]  flex items-center justify-between">
          <div className="flex ">
            <div className="w-[50px] bg-white mx-6">
              <img
                src="/images/logo.png"
                className="w-full bg-inherit "
                alt=""
              />
            </div>

            <div className="flex items-center space-x-2 justify-start">
              <span className="font-bold border-b-[3px] "> Ratanada</span>
              <p>Jodhpur, Rajasthan, India </p>
              <MdArrowDropDown
                onClick={showSideMenu}
                className="inline text-[2.5rem] text-[#fc8019] -ml-2 cursor-pointer"
              />
            </div>
          </div>

          <nav className="hidden md:flex list-none gap-8 font-semibold text-gray-400 mx-4">
            {link.map((item, index) => {
              return (
                <li
                  className="flex items-center text-[20px] space-x-2 hover:text-[#fc8019] cursor-pointer"
                  key={index}
                >
                  {item.icon}
                  <span className="text-[1rem]">{item.name} <sup>{item.super}</sup> </span>
                </li>
              );
            })}
          </nav>
        </div>
      </header>
    </>
  );
};

export default Header;
