import { useContext, useState } from "react";
import "./App.css";
import NavBar from "./components/headerSection/NavBar";
import WeatherStore, { weatherContext } from "./store/WeatherStore";
import SearchBar from "./components/searchBarSection/SearchBar";
import WholeDetail from "./components/weatherWholeDetail/WholeDetail";
import FetchWeatherApi from "./store/FetchWeatherApi";
import Error from "./ErrorAndLoading/Error";

function App() {
  const getWeatherApiData = useContext(weatherContext);
  console.log("Get: ", getWeatherApiData);
  return (
    <div className="w-full relative">
      <NavBar />
      <FetchWeatherApi />
      {getWeatherApiData ? (
        <>
          <SearchBar />
          <WholeDetail />
        </>
      ) : (
        <Error />
      )}
    </div>
  );
}

export default App;
