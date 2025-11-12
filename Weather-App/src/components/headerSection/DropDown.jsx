import React, { useContext } from "react";
import { weatherContext } from "../../store/WeatherStore";

const DropDown = () => {
  const { unitData, isOpenDropDown, weeks } = useContext(weatherContext);
  console.log("Drop down Render", weeks);

  return (
    <div
      className={`absolute  mr-4 top-17  w-1/2 max-w-[250px] border border-gray-500  bg-[#22263F] p-4 rounded-xl z-100 transition-all duration-700 delay-150 linear ease-in-out  ${
        isOpenDropDown
          ? "opacity-100 translate-x-0 right-0"
          : "opacity-0  -right-7/12 "
      }`}
    >
      <h1 className="font-bold">Switch to Imperial</h1>
      {unitData.map((item) => {
        return (
          <div className="flex flex-col gap-4 my-4" key={item.id}>
            <p className="text-gray-400 text-[18px] font-normal">
              {item.title}
            </p>
            {item.units.map((unitsValue, index) => {
              return (
                <div key={index}>
                  <h1>{unitsValue}</h1>
                </div>
              );
            })}

            {item.id == 3 ? null : <hr className="border-t border-gray-600" />}
          </div>
        );
      })}
    </div>
  );
};

export default DropDown;
