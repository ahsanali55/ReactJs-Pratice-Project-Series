import React, { useContext } from "react";
import { weatherContext } from "../../../store/WeatherStore";

const WeeklyDropdown = () => {
  const { weeks, dispatch, isShow } = useContext(weatherContext);
  console.log("isShow from context:", isShow);

  const handleWeek = (event) => {
    dispatch({ type: "ChangeWeek", payload: event.target.innerText });
  };

  return (
    <div
      className={`absolute p-2 top-19  right-6 bg-[#22263F] border border-gray-500 rounded-lg w-full max-w-[200px] transition-all  ease-out z-30 ${
        isShow
          ? "opacity-100 scale-100 duration-500"
          : "opacity-0 scale-0 duration-500 translate-x-50"
      }`}
    >
      {weeks.map((day, index) => {
        return (
          <h1
            key={index}
            className="bg-[#22263F] p-2 hover:bg-[#3b4061] cursor-pointer text-[20px] rounded-lg"
            onClick={handleWeek}
          >
            {day}
          </h1>
        );
      })}
    </div>
  );
};

export default WeeklyDropdown;
