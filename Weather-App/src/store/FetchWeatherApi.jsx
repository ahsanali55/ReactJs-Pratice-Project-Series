import React, { use, useContext, useEffect } from "react";
import { weatherContext } from "./WeatherStore";

const FetchWeatherApi = () => {
  const { dispatch } = useContext(weatherContext);  
  
  useEffect(() => {
    const controller = new AbortController();

    const fetchingData = async () => {
      try {
        const response = await fetch("/apiData/weather.json", {
          signal: controller.signal, 
        });

        if (!response.ok) {
          throw new Error("Failed to fetch weather data");
        }

        const data = await response.json();
        dispatch({ type: "WeatherApi", payload: data });
      } catch (error) {
        if (error.name === "AbortError") {
          console.log("Fetch aborted");
        } else {
          console.error("Error fetching data:", error);
        }
      }
    };
    fetchingData();

    return () => {
      // console.log("Cleanup Function Called");
      controller.abort(); // ✅ clean abort
    };
  }, [dispatch]);
  return null;
};

export default FetchWeatherApi;
