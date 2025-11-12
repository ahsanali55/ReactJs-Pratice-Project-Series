import React, { useContext } from "react";
import WeeklyDropdown from "./WeeklyDropdown";
import { weatherContext } from "../../../store/WeatherStore";
import HourlyForeCast from "./HourlyForeCast";
import TopHeader from "./TopHeader";

const RightDetail = () => {
  const { dispatch, isShow } = useContext(weatherContext);
  console.log("is Show:", isShow);

  
  const removeWindowWeeklyDropDown = (event) => {
    dispatch({ type: "removeWindowWeeklyDropDown" });
  };
  return (
    <>
      <div className="w-full  rounded-2xl bg-[#22263F] p-4 relative">
        <TopHeader />
        <WeeklyDropdown />
        <HourlyForeCast />
      </div>

      {isShow && (
        <div
          className="w-full h-full z-20 absolute top-0"
          onClick={removeWindowWeeklyDropDown}
        ></div>
      )}
    </>
  );
};

export default RightDetail;
