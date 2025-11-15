import React, { useContext } from "react";
import { weatherContext } from "../../../store/WeatherStore";

const TopHeader = () => {
  const { defaultDay, dispatch } = useContext(weatherContext);

  const handleShowWeeklyDropDown = (event) => {

    dispatch({ type: "ShowWeeklyDropDown" });
  };
  return (
    <div className="flex items-center pt-6 pb-3 px-3 justify-between sticky top-0 bg-[#22263F]" >
      <h1 className="font-semibold text-[22px] ">Hourly forecast</h1>
      <button
        onClick={handleShowWeeklyDropDown}
        className="flex gap-2 py-2 px-4 bg-[#323753] rounded-md hover:bg-[#67686b] cursor-pointer transition-all ease-in-out duration-200 items-center z-9999"
      >
        <p className="font-semibold">{defaultDay}</p>
        <img src="/images/icon-dropdown.svg" alt="" />
      </button>
    </div>
  );
};

export default TopHeader;
