import React, { createContext, useEffect } from "react";

const weatherContext = createContext({});

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
  weeks: [
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
    "Sunday",
  ],
  defaultDay: "Tuesday",
  isShow: false,
  city: "Chakwal",
  weatherApi: {
    name: "Chakwal",
    date: "Monday, Nov 10, 2025",
    temperature: 25,
    feelsLike: 26,
    humidity: 55,
    wind: "8 km/h",
    precipitation: "0 mm",
    condition: "Partly Cloudy",
    hourly: [
      { time: "12 AM", temp: 20, condition: "Rain" },
      { time: "1 AM", temp: 19, condition: "Rain" },
      { time: "2 AM", temp: 19, condition: "Rain" },
      { time: "3 AM", temp: 18, condition: "Rain" },
      { time: "4 AM", temp: 18, condition: "Rain" },
      { time: "5 AM", temp: 17, condition: "Rain" },
      { time: "6 AM", temp: 18, condition: "Snow" },
      { time: "7 AM", temp: 19, condition: "Fog" },
      { time: "8 AM", temp: 21, condition: "Fog" },
      { time: "9 AM", temp: 23, condition: "Fog" },
      { time: "10 AM", temp: 24, condition: "Fog" },
      { time: "11 AM", temp: 25, condition: "Fog" },
      { time: "12 PM", temp: 26, condition: "Fog" },
      { time: "1 PM", temp: 27, condition: "Fog" },
      { time: "2 PM", temp: 27, condition: "Fog" },
      { time: "3 PM", temp: 26, condition: "Fog" },
      { time: "4 PM", temp: 25, condition: "Partly Cloudy" },
      { time: "5 PM", temp: 24, condition: "Cloudy" },
      { time: "6 PM", temp: 23, condition: "Cloudy" },
      { time: "7 PM", temp: 22, condition: "Rain" },
      { time: "8 PM", temp: 21, condition: "Rain" },
      { time: "9 PM", temp: 21, condition: "Rain" },
      { time: "10 PM", temp: 20, condition: "Rain" },
      { time: "11 PM", temp: 20, condition: "Rain" },
    ],
    daily: [
      { day: "Mon", high: 27, low: 18, condition: "Fog" },
      { day: "Tue", high: 28, low: 19, condition: "Fog" },
      { day: "Wed", high: 26, low: 18, condition: "Cloudy" },
      { day: "Thu", high: 27, low: 18, condition: "Fog" },
      { day: "Fri", high: 25, low: 17, condition: "Partly Cloudy" },
      { day: "Sat", high: 26, low: 18, condition: "Fog" },
      { day: "Sun", high: 28, low: 19, condition: "Fog" },
    ],
  },
};

const ReducerFunction = (state, action) => {
  // console.log("Reducer")

  switch (action.type) {
    // Define case statements for different action types here
    case "ToggleDropDown":
      return {
        isOpenDropDown: !state.isOpenDropDown,
        unitData: state.unitData,
        weeks: state.weeks,
        defaultDay: state.defaultDay,
        isShow: !state.isShow,
        city: state.payload,
        weatherApi: state.weatherApi,
        cityItem: state.cityItem,
      };
    case "windowClick":
      console.log("Window Clicked");
      return {
        unitData: state.unitData,
        isOpenDropDown: false,
        weeks: state.weeks,
        defaultDay: state.defaultDay,
        isShow: !state.isShow,
        city: state.payload,
        weatherApi: state.weatherApi,
        cityItem: state.cityItem,
      };
    case "ChangeWeek":
      return {
        unitData: state.unitData,
        isOpenDropDown: state.isOpenDropDown,
        weeks: state.weeks,
        defaultDay: action.payload,
        isShow: !state.isShow,
        city: state.payload,
        weatherApi: state.weatherApi,
        cityItem: state.cityItem,
      };
    case "ShowWeeklyDropDown":
      return {
        unitData: state.unitData,
        isOpenDropDown: state.isOpenDropDown,
        weeks: state.weeks,
        defaultDay: state.defaultDay,
        isShow: !state.isShow,
        city: state.city,
        weatherApi: state.weatherApi,
        cityItem: state.cityItem,
      };
    case "removeWindowWeeklyDropDown":
      // console.log( "removeWindowWeeklyDropDown")
      return {
        unitData: state.unitData,
        isOpenDropDown: state.isOpenDropDown,
        weeks: state.weeks,
        defaultDay: state.defaultDay,
        isShow: false,
        city: state.city,
        weatherApi: state.weatherApi,
        cityItem: state.cityItem,
      };
    case "searchCity":
      return {
        unitData: state.unitData,
        isOpenDropDown: state.isOpenDropDown,
        weeks: state.weeks,
        defaultDay: state.defaultDay,
        isShow: false,
        city: action.payload,
        weatherApi: state.weatherApi,
        cityItem: state.cityItem,
      };
    case "WeatherApi":
      return {
        unitData: state.unitData,
        isOpenDropDown: state.isOpenDropDown,
        weeks: state.weeks,
        defaultDay: state.defaultDay,
        isShow: false,
        city: state.city,
        weatherApi: action.payload,
        cityItem: state.cityItem,
      };
    case "CityItem":
      return {
        unitData: state.unitData,
        isOpenDropDown: state.isOpenDropDown,
        weeks: state.weeks,
        defaultDay: state.defaultDay,
        isShow: false,
        city: state.city,
        weatherApi: state.weatherApi,
        cityItem: action.payload,
      };

    default:
      return state;
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
        weeks: state.weeks,
        defaultDay: state.defaultDay,
        isShow: state.isShow,
        city: state.city,
        weatherApi: state.weatherApi,
        cityItem: state.cityItem,
        dispatch,
      }}
    >
      {children}
    </weatherContext.Provider>
  );
};

export default WeatherStore;
export { weatherContext };
