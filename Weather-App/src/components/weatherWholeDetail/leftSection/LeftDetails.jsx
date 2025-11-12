import React from "react";
import LeftTop from "./LeftTop";
import LeftMiddle from "./LeftMiddle";
import LeftBottom from "./LeftBottom";
import { weatherContext } from "../../../store/WeatherStore";

const LeftDetails = () => {
  return (
    <div className="w-full max-w-[775px] z-0">
      <LeftTop />
      <LeftMiddle />
      <LeftBottom />
    </div>
  );
};

export default LeftDetails;
