import React, { useContext, useEffect, useState } from "react";
import DropDown from "./DropDown";
import { weatherContext } from "../../store/WeatherStore";

const NavBar = () => {
  const { isOpenDropDown, dispatch } = useContext(weatherContext);

  // console.log("Nav Render")
  const handleDropDown = (event) => {
    event.stopPropagation();
    dispatch({ type: "ToggleDropDown" });
  };

  return (
    <header className="w-full ">
      <nav className="w-10/12 max-w-[1280px] p-4 flex justify-between  mx-auto relative">
        {/* Logo */}
        <div>
          <img src="/images/logo.svg" alt="Logo--" loading="lazy" />
        </div>
        {/* Units dropdown */}
        <button
          onClick={handleDropDown}
          className="flex bg-[#22263F] items-center gap-2 px-4 py-1 rounded-md cursor-pointer transitition-all duration-100 ease-in hover:scale-105 "
        >
          <img src="/public/images/icon-units.svg " alt="" className="w-4" />
          <p className="">Units</p>
          <img src="/public/images/icon-dropdown.svg" alt="" className="w-3" />
        </button>
        <DropDown />
      </nav>

      {isOpenDropDown && (
        <div
          className="w-full h-full absolute top-0 z-10"
          onClick={() => dispatch({ type: "windowClick" })}
        ></div>
      )}
    </header>
  );
};

export default NavBar;
