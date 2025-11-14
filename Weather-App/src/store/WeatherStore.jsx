import React, { createContext, useEffect } from "react";

const weatherContext = createContext({});

const initialData = {
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
    weekly: {
      Monday: {
        hourly: [
          {
            time: "12 AM",
            temp: 24,
            condition: "Partly Cloudy",
          },
          {
            time: "1 AM",
            temp: 34,
            condition: "Rain",
          },
          {
            time: "2 AM",
            temp: 25,
            condition: "Rain",
          },
          {
            time: "3 AM",
            temp: 33,
            condition: "Rain",
          },
          {
            time: "4 AM",
            temp: 28,
            condition: "Sunny",
          },
          {
            time: "5 AM",
            temp: 29,
            condition: "Rain",
          },
          {
            time: "6 AM",
            temp: 24,
            condition: "Cloudy",
          },
          {
            time: "7 AM",
            temp: 25,
            condition: "Rain",
          },
          {
            time: "8 AM",
            temp: 31,
            condition: "Sunny",
          },
          {
            time: "9 AM",
            temp: 34,
            condition: "Clear",
          },
          {
            time: "10 AM",
            temp: 31,
            condition: "Clear",
          },
          {
            time: "11 AM",
            temp: 30,
            condition: "Sunny",
          },
          {
            time: "12 PM",
            temp: 32,
            condition: "Sunny",
          },
          {
            time: "1 PM",
            temp: 35,
            condition: "Sunny",
          },
          {
            time: "2 PM",
            temp: 35,
            condition: "Partly Cloudy",
          },
          {
            time: "3 PM",
            temp: 32,
            condition: "Sunny",
          },
          {
            time: "4 PM",
            temp: 26,
            condition: "Partly Cloudy",
          },
          {
            time: "5 PM",
            temp: 33,
            condition: "Sunny",
          },
          {
            time: "6 PM",
            temp: 30,
            condition: "Rain",
          },
          {
            time: "7 PM",
            temp: 33,
            condition: "Partly Cloudy",
          },
          {
            time: "8 PM",
            temp: 36,
            condition: "Sunny",
          },
          {
            time: "9 PM",
            temp: 30,
            condition: "Sunny",
          },
          {
            time: "10 PM",
            temp: 26,
            condition: "Cloudy",
          },
          {
            time: "11 PM",
            temp: 26,
            condition: "Clear",
          },
        ],
      },
      Tuesday: {
        hourly: [
          {
            time: "12 AM",
            temp: 28,
            condition: "Cloudy",
          },
          {
            time: "1 AM",
            temp: 35,
            condition: "Sunny",
          },
          {
            time: "2 AM",
            temp: 27,
            condition: "Cloudy",
          },
          {
            time: "3 AM",
            temp: 24,
            condition: "Cloudy",
          },
          {
            time: "4 AM",
            temp: 25,
            condition: "Cloudy",
          },
          {
            time: "5 AM",
            temp: 34,
            condition: "Rain",
          },
          {
            time: "6 AM",
            temp: 26,
            condition: "Clear",
          },
          {
            time: "7 AM",
            temp: 26,
            condition: "Cloudy",
          },
          {
            time: "8 AM",
            temp: 28,
            condition: "Rain",
          },
          {
            time: "9 AM",
            temp: 32,
            condition: "Sunny",
          },
          {
            time: "10 AM",
            temp: 33,
            condition: "Sunny",
          },
          {
            time: "11 AM",
            temp: 24,
            condition: "Rain",
          },
          {
            time: "12 PM",
            temp: 24,
            condition: "Cloudy",
          },
          {
            time: "1 PM",
            temp: 31,
            condition: "Cloudy",
          },
          {
            time: "2 PM",
            temp: 31,
            condition: "Partly Cloudy",
          },
          {
            time: "3 PM",
            temp: 32,
            condition: "Partly Cloudy",
          },
          {
            time: "4 PM",
            temp: 25,
            condition: "Clear",
          },
          {
            time: "5 PM",
            temp: 33,
            condition: "Cloudy",
          },
          {
            time: "6 PM",
            temp: 36,
            condition: "Cloudy",
          },
          {
            time: "7 PM",
            temp: 31,
            condition: "Partly Cloudy",
          },
          {
            time: "8 PM",
            temp: 33,
            condition: "Sunny",
          },
          {
            time: "9 PM",
            temp: 36,
            condition: "Rain",
          },
          {
            time: "10 PM",
            temp: 33,
            condition: "Partly Cloudy",
          },
          {
            time: "11 PM",
            temp: 30,
            condition: "Sunny",
          },
        ],
      },
      Wednesday: {
        hourly: [
          {
            time: "12 AM",
            temp: 27,
            condition: "Clear",
          },
          {
            time: "1 AM",
            temp: 35,
            condition: "Clear",
          },
          {
            time: "2 AM",
            temp: 28,
            condition: "Rain",
          },
          {
            time: "3 AM",
            temp: 26,
            condition: "Clear",
          },
          {
            time: "4 AM",
            temp: 27,
            condition: "Cloudy",
          },
          {
            time: "5 AM",
            temp: 26,
            condition: "Clear",
          },
          {
            time: "6 AM",
            temp: 31,
            condition: "Rain",
          },
          {
            time: "7 AM",
            temp: 29,
            condition: "Sunny",
          },
          {
            time: "8 AM",
            temp: 30,
            condition: "Cloudy",
          },
          {
            time: "9 AM",
            temp: 29,
            condition: "Sunny",
          },
          {
            time: "10 AM",
            temp: 25,
            condition: "Partly Cloudy",
          },
          {
            time: "11 AM",
            temp: 24,
            condition: "Partly Cloudy",
          },
          {
            time: "12 PM",
            temp: 24,
            condition: "Rain",
          },
          {
            time: "1 PM",
            temp: 30,
            condition: "Sunny",
          },
          {
            time: "2 PM",
            temp: 32,
            condition: "Partly Cloudy",
          },
          {
            time: "3 PM",
            temp: 32,
            condition: "Sunny",
          },
          {
            time: "4 PM",
            temp: 29,
            condition: "Sunny",
          },
          {
            time: "5 PM",
            temp: 25,
            condition: "Clear",
          },
          {
            time: "6 PM",
            temp: 34,
            condition: "Rain",
          },
          {
            time: "7 PM",
            temp: 29,
            condition: "Cloudy",
          },
          {
            time: "8 PM",
            temp: 24,
            condition: "Cloudy",
          },
          {
            time: "9 PM",
            temp: 33,
            condition: "Clear",
          },
          {
            time: "10 PM",
            temp: 36,
            condition: "Cloudy",
          },
          {
            time: "11 PM",
            temp: 30,
            condition: "Cloudy",
          },
        ],
      },
      Thursday: {
        hourly: [
          {
            time: "12 AM",
            temp: 34,
            condition: "Rain",
          },
          {
            time: "1 AM",
            temp: 27,
            condition: "Clear",
          },
          {
            time: "2 AM",
            temp: 34,
            condition: "Clear",
          },
          {
            time: "3 AM",
            temp: 34,
            condition: "Cloudy",
          },
          {
            time: "4 AM",
            temp: 28,
            condition: "Cloudy",
          },
          {
            time: "5 AM",
            temp: 24,
            condition: "Rain",
          },
          {
            time: "6 AM",
            temp: 26,
            condition: "Clear",
          },
          {
            time: "7 AM",
            temp: 34,
            condition: "Partly Cloudy",
          },
          {
            time: "8 AM",
            temp: 25,
            condition: "Cloudy",
          },
          {
            time: "9 AM",
            temp: 30,
            condition: "Cloudy",
          },
          {
            time: "10 AM",
            temp: 30,
            condition: "Partly Cloudy",
          },
          {
            time: "11 AM",
            temp: 28,
            condition: "Clear",
          },
          {
            time: "12 PM",
            temp: 36,
            condition: "Partly Cloudy",
          },
          {
            time: "1 PM",
            temp: 34,
            condition: "Cloudy",
          },
          {
            time: "2 PM",
            temp: 29,
            condition: "Sunny",
          },
          {
            time: "3 PM",
            temp: 28,
            condition: "Partly Cloudy",
          },
          {
            time: "4 PM",
            temp: 29,
            condition: "Cloudy",
          },
          {
            time: "5 PM",
            temp: 26,
            condition: "Rain",
          },
          {
            time: "6 PM",
            temp: 26,
            condition: "Cloudy",
          },
          {
            time: "7 PM",
            temp: 30,
            condition: "Sunny",
          },
          {
            time: "8 PM",
            temp: 24,
            condition: "Cloudy",
          },
          {
            time: "9 PM",
            temp: 28,
            condition: "Partly Cloudy",
          },
          {
            time: "10 PM",
            temp: 31,
            condition: "Cloudy",
          },
          {
            time: "11 PM",
            temp: 28,
            condition: "Partly Cloudy",
          },
        ],
      },
      Friday: {
        hourly: [
          {
            time: "12 AM",
            temp: 29,
            condition: "Cloudy",
          },
          {
            time: "1 AM",
            temp: 25,
            condition: "Rain",
          },
          {
            time: "2 AM",
            temp: 36,
            condition: "Clear",
          },
          {
            time: "3 AM",
            temp: 25,
            condition: "Rain",
          },
          {
            time: "4 AM",
            temp: 29,
            condition: "Clear",
          },
          {
            time: "5 AM",
            temp: 26,
            condition: "Clear",
          },
          {
            time: "6 AM",
            temp: 35,
            condition: "Cloudy",
          },
          {
            time: "7 AM",
            temp: 29,
            condition: "Partly Cloudy",
          },
          {
            time: "8 AM",
            temp: 34,
            condition: "Clear",
          },
          {
            time: "9 AM",
            temp: 36,
            condition: "Sunny",
          },
          {
            time: "10 AM",
            temp: 27,
            condition: "Sunny",
          },
          {
            time: "11 AM",
            temp: 27,
            condition: "Clear",
          },
          {
            time: "12 PM",
            temp: 25,
            condition: "Partly Cloudy",
          },
          {
            time: "1 PM",
            temp: 29,
            condition: "Clear",
          },
          {
            time: "2 PM",
            temp: 28,
            condition: "Clear",
          },
          {
            time: "3 PM",
            temp: 31,
            condition: "Cloudy",
          },
          {
            time: "4 PM",
            temp: 26,
            condition: "Clear",
          },
          {
            time: "5 PM",
            temp: 25,
            condition: "Sunny",
          },
          {
            time: "6 PM",
            temp: 28,
            condition: "Cloudy",
          },
          {
            time: "7 PM",
            temp: 35,
            condition: "Sunny",
          },
          {
            time: "8 PM",
            temp: 34,
            condition: "Cloudy",
          },
          {
            time: "9 PM",
            temp: 36,
            condition: "Sunny",
          },
          {
            time: "10 PM",
            temp: 26,
            condition: "Partly Cloudy",
          },
          {
            time: "11 PM",
            temp: 36,
            condition: "Sunny",
          },
        ],
      },
      Saturday: {
        hourly: [
          {
            time: "12 AM",
            temp: 32,
            condition: "Partly Cloudy",
          },
          {
            time: "1 AM",
            temp: 27,
            condition: "Clear",
          },
          {
            time: "2 AM",
            temp: 36,
            condition: "Rain",
          },
          {
            time: "3 AM",
            temp: 33,
            condition: "Partly Cloudy",
          },
          {
            time: "4 AM",
            temp: 24,
            condition: "Clear",
          },
          {
            time: "5 AM",
            temp: 28,
            condition: "Partly Cloudy",
          },
          {
            time: "6 AM",
            temp: 36,
            condition: "Rain",
          },
          {
            time: "7 AM",
            temp: 34,
            condition: "Clear",
          },
          {
            time: "8 AM",
            temp: 34,
            condition: "Sunny",
          },
          {
            time: "9 AM",
            temp: 24,
            condition: "Partly Cloudy",
          },
          {
            time: "10 AM",
            temp: 35,
            condition: "Cloudy",
          },
          {
            time: "11 AM",
            temp: 35,
            condition: "Sunny",
          },
          {
            time: "12 PM",
            temp: 28,
            condition: "Clear",
          },
          {
            time: "1 PM",
            temp: 31,
            condition: "Rain",
          },
          {
            time: "2 PM",
            temp: 30,
            condition: "Sunny",
          },
          {
            time: "3 PM",
            temp: 29,
            condition: "Rain",
          },
          {
            time: "4 PM",
            temp: 27,
            condition: "Partly Cloudy",
          },
          {
            time: "5 PM",
            temp: 29,
            condition: "Partly Cloudy",
          },
          {
            time: "6 PM",
            temp: 36,
            condition: "Rain",
          },
          {
            time: "7 PM",
            temp: 32,
            condition: "Cloudy",
          },
          {
            time: "8 PM",
            temp: 34,
            condition: "Sunny",
          },
          {
            time: "9 PM",
            temp: 28,
            condition: "Sunny",
          },
          {
            time: "10 PM",
            temp: 32,
            condition: "Rain",
          },
          {
            time: "11 PM",
            temp: 28,
            condition: "Cloudy",
          },
        ],
      },
      Sunday: {
        hourly: [
          {
            time: "12 AM",
            temp: 32,
            condition: "Rain",
          },
          {
            time: "1 AM",
            temp: 25,
            condition: "Rain",
          },
          {
            time: "2 AM",
            temp: 32,
            condition: "Sunny",
          },
          {
            time: "3 AM",
            temp: 35,
            condition: "Partly Cloudy",
          },
          {
            time: "4 AM",
            temp: 25,
            condition: "Partly Cloudy",
          },
          {
            time: "5 AM",
            temp: 34,
            condition: "Cloudy",
          },
          {
            time: "6 AM",
            temp: 24,
            condition: "Cloudy",
          },
          {
            time: "7 AM",
            temp: 29,
            condition: "Rain",
          },
          {
            time: "8 AM",
            temp: 24,
            condition: "Cloudy",
          },
          {
            time: "9 AM",
            temp: 36,
            condition: "Partly Cloudy",
          },
          {
            time: "10 AM",
            temp: 36,
            condition: "Clear",
          },
          {
            time: "11 AM",
            temp: 28,
            condition: "Rain",
          },
          {
            time: "12 PM",
            temp: 24,
            condition: "Partly Cloudy",
          },
          {
            time: "1 PM",
            temp: 35,
            condition: "Sunny",
          },
          {
            time: "2 PM",
            temp: 29,
            condition: "Clear",
          },
          {
            time: "3 PM",
            temp: 24,
            condition: "Clear",
          },
          {
            time: "4 PM",
            temp: 34,
            condition: "Sunny",
          },
          {
            time: "5 PM",
            temp: 31,
            condition: "Clear",
          },
          {
            time: "6 PM",
            temp: 31,
            condition: "Clear",
          },
          {
            time: "7 PM",
            temp: 25,
            condition: "Rain",
          },
          {
            time: "8 PM",
            temp: 34,
            condition: "Sunny",
          },
          {
            time: "9 PM",
            temp: 24,
            condition: "Clear",
          },
          {
            time: "10 PM",
            temp: 35,
            condition: "Clear",
          },
          {
            time: "11 PM",
            temp: 36,
            condition: "Cloudy",
          },
        ],
      },
    },
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
  unitMenu: {
    title: "Switch to Imperial",
    sections: [
      {
        label: "Temperature",
        options: [
          { name: "Celsius (°C)", unit: " °C", selected: true },
          { name: "Fahrenheit (°F)", unit: " °F", selected: false },
        ],
      },
      {
        label: "Wind Speed",
        options: [
          { name: "km/h", unit: " km/h", selected: false },
          { name: "mph", unit: " mph", selected: false },
        ],
      },
      {
        label: "Precipitation",
        options: [
          { name: "Millimeters (mm)", unit: " mm", selected: false },
          { name: "Inches (in)", unit: " in", selected: false },
        ],
      },
    ],
  },
  unit: " °C",
  getWeatherApiData: false,
};

const ReducerFunction = (state, action) => {
  // console.log("Reducer")

  switch (action.type) {
    // Define case statements for different action types here
    case "ToggleDropDown":
      return {
        unitMenu: state.unitMenu,
        isOpenDropDown: !state.isOpenDropDown,
        unitData: state.unitData,
        weeks: state.weeks,
        defaultDay: state.defaultDay,
        // isShow: !state.isShow,
        city: state.payload,
        weatherApi: state.weatherApi,
         getWeatherApiData: state.getWeatherApiData,
        cityItem: state.cityItem,
        cardTitle: state.cardTitle,
        unit: state.unit,
      };
    case "windowClick":
      console.log("Window Clicked");
      return {
        unitMenu: state.unitMenu,
        unitData: state.unitData,
        isOpenDropDown: false,
        weeks: state.weeks,
        defaultDay: state.defaultDay,
        // isShow: !state.isShow,
        city: state.payload,
        weatherApi: state.weatherApi,
         getWeatherApiData: state.getWeatherApiData,
        cityItem: state.cityItem,
        cardTitle: state.cardTitle,
        unit: state.unit,
      };
    case "ChangeWeek":
      return {
        unitMenu: state.unitMenu,
        unitData: state.unitData,
        isOpenDropDown: state.isOpenDropDown,
        weeks: state.weeks,
        defaultDay: action.payload,
        isShow: !state.isShow,
        city: state.payload,
        weatherApi: state.weatherApi,
         getWeatherApiData: state.getWeatherApiData,
        cityItem: state.cityItem,
        cardTitle: state.cardTitle,
        unit: state.unit,
      };
    case "ShowWeeklyDropDown":
      return {
        unitMenu: state.unitMenu,
        unitData: state.unitData,
        isOpenDropDown: state.isOpenDropDown,
        weeks: state.weeks,
        defaultDay: state.defaultDay,
        isShow: !state.isShow,
        city: state.city,
        weatherApi: state.weatherApi,
         getWeatherApiData: state.getWeatherApiData,
        cityItem: state.cityItem,
        cardTitle: state.cardTitle,
        unit: state.unit,
      };
    case "removeWindowWeeklyDropDown":
      
      return {
        unitMenu: state.unitMenu,
        unitData: state.unitData,
        isOpenDropDown: state.isOpenDropDown,
        weeks: state.weeks,
        defaultDay: state.defaultDay,
        isShow: false,
        city: state.city,
        weatherApi: state.weatherApi,
         getWeatherApiData: state.getWeatherApiData,
        cityItem: state.cityItem,
        cardTitle: state.cardTitle,
        unit: state.unit,
      };
    case "searchCity":
      return {
        unitMenu: state.unitMenu,
        unitData: state.unitData,
        isOpenDropDown: state.isOpenDropDown,
        weeks: state.weeks,
        defaultDay: state.defaultDay,
        isShow: false,
        city: action.payload,
        weatherApi: state.weatherApi,
         getWeatherApiData: state.getWeatherApiData,
        cityItem: state.cityItem,
        cardTitle: state.cardTitle,
        unit: state.unit,
      };
    case "WeatherApi":
      return {
        unitMenu: state.unitMenu,
        unitData: state.unitData,
        isOpenDropDown: state.isOpenDropDown,
        weeks: state.weeks,
        defaultDay: state.defaultDay,
        isShow: false,
        city: state.city,
        weatherApi: action.payload,
        getWeatherApiData: true,
        cityItem: state.cityItem,
        cardTitle: state.cardTitle,
        unit: state.unit,
      };
    case "CityItem":
      return {
        unitMenu: state.unitMenu,
        unitData: state.unitData,
        isOpenDropDown: state.isOpenDropDown,
        weeks: state.weeks,
        defaultDay: state.defaultDay,
        isShow: false,
        city: state.city,
        weatherApi: state.weatherApi,
         getWeatherApiData: state.getWeatherApiData,
        cityItem: action.payload,
        cardTitle: state.cardTitle,
        unit: state.unit,
      };
    case "SelectedUnit":
      return {
        unitData: state.unitData,
        isOpenDropDown: state.isOpenDropDown,
        weeks: state.weeks,
        defaultDay: state.defaultDay,
        isShow: false,
        city: state.city,
        weatherApi: state.weatherApi,
         getWeatherApiData: state.getWeatherApiData,
        cityItem: state.cityItem,
        cardTitle: state.cardTitle,
        unit: action.payload.unit,
        unitMenu: {
          ...state.unitMenu,
          sections: state.unitMenu.sections.map((section) => {
            return {
              ...section,
              options: section.options.map((option) => {
                if (option.unit === action.payload.unit) {
                  return { ...option, selected: true };
                } else {
                  return { ...option, selected: false };
                }
              }),
            };
          }),
        },
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
        cardTitle: state.cardTitle,
        unitMenu: state.unitMenu,
        unit: state.unit,
        getWeatherApiData: state.getWeatherApiData,
        dispatch,
      }}
    >
      {children}
    </weatherContext.Provider>
  );
};

export default WeatherStore;
export { weatherContext };
