import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const MiddleSection = () => {
  useEffect(() => {
    AOS.init({  easing: "ease-in-out" });
  }, []);

  return (
    <div
      className="relative p-2"
      data-aos="zoom-in-up"
      data-aos-duration="1000"
      data-aos-delay="0"
    >
      <svg
        className="absolute inset-0 w-full h-full  pointer-events-none opacity-30 animate2"
        fill="none"
      >
        <rect
          x="0"
          y="0"
          width="100%"
          height="100%"
          stroke="#98bdf5"
          stroke-width="2"
          stroke-dasharray="20 20"
          //   6 = dash length, 8 = space
          rx="500"
          ry="500"
        />
      </svg>
      <div
        className="p-2  
                       relative "
      >
        <svg
          className="absolute inset-0 w-full h-full animate pointer-events-none opacity-50"
          fill="none"
        >
          <rect
            x="0"
            y="0"
            width="100%"
            height="100%"
            stroke="#83b1f7"
            stroke-width="2"
            stroke-dasharray="16 14"
            //   6 = dash length, 8 = space
            rx="500"
            ry="500"
          />
        </svg>

        <div className="color-change-delay w-[450px] h-[450px] rounded-full  flex justify-center items-center relative border-4 border-gray-200">
         
          <img
            src="/images/ecompost.png"
            className=" h-[430px] w-[350px]"
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default MiddleSection;
