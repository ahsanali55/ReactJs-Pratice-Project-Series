import React from "react";
import RightDetail from "./rightSection/RightDetail";
import LeftDetails from "./leftSection/LeftDetails";
import { useContext } from "react";
import { weatherContext } from "../../store/WeatherStore";
import Error from "./Error";

const WholeDetail = () => {
  const {cityItem } = useContext(weatherContext);
  return (
    <section className="w-full">
      <div className="max-w-7xl w-11/12  mx-auto   lg:p-4 flex flex-col lg:flex-row mb-6 lg-mb-0 lg:justify-between gap-6 transition-all duration-500 ">
        {cityItem?.match ?
        <>
        <LeftDetails />
        <RightDetail />
        </>
      : <Error />}   
        
      </div>
    </section>
  );
};

export default WholeDetail;
