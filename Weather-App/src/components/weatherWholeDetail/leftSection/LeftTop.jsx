import React, { useContext, useEffect } from "react";
import { weatherContext } from "../../../store/WeatherStore";

const LeftTop = () => {
  const { city, weatherApi, cityItem, dispatch } = useContext(weatherContext);
   

  return (
   
  <div className="overflow-hidden rounded-xl w-full h-65 relative">
    <div className="absolute bg-[url('/images/bg-today-small.svg')] md:bg-[url('/images/bg-today-large.svg')] bg-cover bg-no-repeat md:bg-position-[10%_50%] w-full h-full flex flex-col justify-center lg:flex-row  items-center lg:justify-between ">
      <div className="ml-4">
        <h1 className="font-bold text-[25px]">
          {cityItem?.item?.name},{" "}
          <span>{weatherApi.country}</span>
        </h1>
        <p className="opacity-60">{cityItem?.item?.date}</p>
      </div>

      <div className="flex items-center gap-3 mr-4">
        <img
          src="/images/Sunny.webp"
          className="w-[130px]"
          alt="clear-icon"
          loading="lazy"
        />
        <h1 className="text-[80px] font-bold">
          {cityItem?.item?.temperature}°
        </h1>
      </div>
    </div>
  </div>
  );
};

export default LeftTop;
