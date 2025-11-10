import React, { createContext, useEffect } from "react";

const weatherContext = createContext({
  state: {},
  isOpenDropDown: false,
  dispatch: () => {},
});

const initialData = {
  unitData: [
    {
      id: 1,
      title: "Temperature",
      units: ["Celsius (°C)", "Fahrenheit (°F)"],
    },
    {
      id: 2,
      title: "Wind Speed",
      units: ["km/h", "mph"],
    },
    {
      id: 3,
      title: "Precipitation",
      units: ["Millimeters (mm)", "Inches (in)"],
    },
  ],
  isOpenDropDown: false,
};

const ReducerFunction = (state, action) => {
  // console.log("Reducer")
  let newState = state;
  switch (action.type) {
    // Define case statements for different action types here
    case "ToggleDropDown":
      return {
        isOpenDropDown: !state.isOpenDropDown,
        unitData: state.unitData,
      };
      case "windowClick": 
      console.log("Window Clicked")
      return {
        
        isOpenDropDown: false,
        unitData: state.unitData,
      }

    default:
      console.log("New State", newState);
      return newState;
  }
};

const WeatherStore = ({ children }) => {
  const [state, dispatch] = React.useReducer(ReducerFunction, initialData);
  console.log("State, ", state);

  return (
    <weatherContext.Provider
      value={{
        unitData: state.unitData,
        isOpenDropDown: state.isOpenDropDown,
        dispatch,
      }}
    >
      {children}
    </weatherContext.Provider>
  );
};

export default WeatherStore;
export { weatherContext };
