import React, { useContext, useEffect } from "react";
import { weatherContext } from "../../../store/WeatherStore";

const LeftTop = () => {
  const { city, weatherApi, cityItem, dispatch } = useContext(weatherContext);
  console.log("Bahi sb wohi he Item", cityItem);
   

  useEffect(() => {

     if (weatherApi?.cities){
       const Cityitem = weatherApi?.cities.find((item) => {
        // console.log(item)
         return (item.name === city);
        })
        console.log("cityItem: ", Cityitem)
        if (Cityitem){

          dispatch({type: "CityItem", payload: Cityitem})
        }
      }
    return (() => {
    
    })
  }, [weatherApi, city, dispatch])

  return (
   
  <div className="overflow-hidden rounded-2xl w-full h-65">
    <div className="bg-[url('/images/bg-today-small.svg')] lg:bg-[url('/images/bg-today-large.svg')] bg-no-repeat bg-position-[10%_50%] w-full h-full flex flex-col justify-center lg:flex-row  items-center lg:justify-between">
      <div className="ml-4">
        <h1 className="font-bold text-[25px]">
          {cityItem?.name},{" "}
          <span>{weatherApi.country}</span>
        </h1>
        <p className="opacity-60">{cityItem?.date}</p>
      </div>

      <div className="flex items-center gap-3 mr-4">
        <img
          src="/images/Sunny.webp"
          className="w-[130px]"
          alt="clear-icon"
          loading="lazy"
        />
        <h1 className="text-[80px] font-bold">
          {cityItem?.temperature}°
        </h1>
      </div>
    </div>
  </div>
  );
};

export default LeftTop;
