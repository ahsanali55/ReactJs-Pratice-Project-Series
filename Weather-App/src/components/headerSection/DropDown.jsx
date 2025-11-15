import React, { useContext } from "react";
import { weatherContext } from "../../store/WeatherStore";

const DropDown = () => {
  const { unitData, isOpenDropDown, unitMenu, unit, selected , weeks, dispatch } =
    useContext(weatherContext);

  const handleUnitItem = (unit, selected) => {
    dispatch({type: "SelectedUnit", payload: {unit, selected}});
  };

  return (
    <div
      className={`absolute  mr-4 top-17  w-1/2 max-w-[250px] border border-gray-500  bg-[#22263F] p-2  rounded-xl z-100 transition-all duration-700 delay-150 linear ease-in-out dropDown ${
        isOpenDropDown
          ? "opacity-100 translate-x-0 left-[198px] sm:left-[1014px]"
          : "opacity-100 translate-x-0  left-[598px] sm:left-500"
      }`}
    >
      <h1 className="font-bold px-2">{unitMenu.title}</h1>
      {unitMenu.sections.map((item, index) => {
        return (
          <div className="flex flex-col gap-2 " key={index}>
            <p className="text-gray-400 text-[18px] font-normal mt-4 px-2">
              {item.label }
            </p>
            {item.options.map((itemName, index) => {
              return (
                <div key={index} className="">
                  <h1
                    onClick={() =>
                      handleUnitItem(itemName.unit, itemName.selected)
                    }
                    className={`flex justify-between transition-all duration-300 hover:bg-[#3b4061] py-2 px-2  rounded-lg ${itemName.selected ? "bg-[#3b4061]" : "bg-inherit"}`}
                  >
                    {itemName.name}{" "}
                    {itemName.selected ? (
                      <>
                      
                      <img
                        src="/images/icon-checkmark.svg"
                        className="img-fluid rounded-top"
                        alt=""
                      />
                      </>
                    ) : null}
                  </h1>
                </div>
              );
            })}

            {index == 2 ? null : <hr className="border-t border-gray-600 mx-2" />}
          </div>
        );
      })}
    </div>
  );
};

export default DropDown;
