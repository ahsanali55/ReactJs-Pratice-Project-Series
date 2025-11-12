import { useState } from "react";
import "./App.css";
import NavBar from "./components/headerSection/NavBar";
import WeatherStore from "./store/WeatherStore";
import SearchBar from "./components/searchBarSection/SearchBar";
import WholeDetail from "./components/weatherWholeDetail/WholeDetail";
import FetchWeatherApi from "./store/FetchWeatherApi";

function App() {
  return (
    <div className="w-full relative">
      <WeatherStore>
    <FetchWeatherApi />
        <NavBar />
        <SearchBar />
        <WholeDetail />
      </WeatherStore>
    </div>
  );
}

export default App;
