import React, { useContext } from "react";
import WeeklyDropdown from "./WeeklyDropdown";
import { weatherContext } from "../../../store/WeatherStore";
import HourlyForeCast from "./HourlyForeCast";
import TopHeader from "./TopHeader";

const RightDetail = () => {
  const { dispatch, isShow } = useContext(weatherContext);

  
  const removeWindowWeeklyDropDown = (event) => {
    dispatch({ type: "removeWindowWeeklyDropDown" });
  };
  return (
    <>

       <div className="w-full sm:max-w-[455px] rounded-2xl bg-[#22263F] px-4 relative h-[657px]  overflow-x-hidden custom-scrollbar z-50">
        <TopHeader />
        <WeeklyDropdown />
        <HourlyForeCast />
      </div>


      {isShow ? (
        <div
          className="w-full h-full z-20 absolute top-0"
          onClick={removeWindowWeeklyDropDown}
        ></div>
      ) : null}
    </>
  );
};

export default RightDetail;
