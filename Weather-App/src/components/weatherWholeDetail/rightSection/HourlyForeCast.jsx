import React, { useContext } from "react";
import { weatherContext } from "../../../store/WeatherStore";

const HourlyForeCast = () => {
  const { cityItem, defaultDay } = useContext(weatherContext);

  

  return (
    <div className="w-full space-y-4  p-2  ">
      {/* items */}

      {cityItem?.weekly?.[defaultDay]?.hourly.map((item, index) => {
        return(
        <div className="flex items-center justify-between border bg-[#323753] border-gray-600  rounded-lg pl-2 pr-5" key={index}>
          <div className="flex items-center gap-2 duration-200 transition-all ">
            <img
              src={`/images/${item.condition}.webp`}
              className="w-[53px]"
              alt=""
              loading="lazy"
            />
            <h1 className="text-[22px] font-semibold">{item.time}</h1>
          </div>
          <p className="text-[22px]">{item.temp}°</p>
        </div>
      )})}
    </div>
  );
};

export default HourlyForeCast;
