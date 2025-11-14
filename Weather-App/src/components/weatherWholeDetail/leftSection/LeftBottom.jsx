import React, { useContext } from "react";
import { weatherContext } from "../../../store/WeatherStore";

const LeftBottom = () => {
  const { cityItem } = useContext(weatherContext);
  return (
    <div className="w-full mt-8">
      <h1 className="my-4 text-xl font-semibold">Daily forecast</h1>
      <div className="grid grid-cols-3 lg:grid-cols-7 gap-4">
        {/* Cards */}
        {cityItem?.daily?.map((item, index) => {
          return (
            <div className="w-[100px] bg-[#22263F] px-2 py-3 rounded-lg" key={index}>
              <p className="text-center font-bold text-[18px]">{item.day}</p>
              <img src={`/images/${item.condition}.webp`} alt="" />
              <div className="flex justify-between">
                <p className="font-bold">{item.high}</p>
                <p className="font-bold">{item.low}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default LeftBottom;
