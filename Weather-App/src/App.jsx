import { useContext, useState } from "react";
import "./App.css";
import NavBar from "./components/headerSection/NavBar";
import SearchBar from "./components/searchBarSection/SearchBar";
import WholeDetail from "./components/weatherWholeDetail/WholeDetail";
import FetchWeatherApi from "./store/FetchWeatherApi";
import { weatherContext } from "./store/WeatherStore";

function App() {
   const { city, weatherApi, cityItem, dispatch } = useContext(weatherContext);
   console.log("CityItem: ", cityItem )
  return (
    <div className="w-screen relative flex flex-col items-center overflow-x-hidden">
      <NavBar />
    
      {/* { cityItem?.match ? <> */}
      <FetchWeatherApi />
      <SearchBar />
      <WholeDetail />
      {/* </> :  "NoOne Place Matched!"} */}
     
    </div>
  );
}

export default App;
