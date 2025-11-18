import React from "react";
import "./style.css";
import MiddleSection from "./MiddleSection";
import LeftSection from "./LeftSection";
import RightSection from "./RightSection";
import TopSection from "./TopSection";

const WhyChooseUs = () => {
  return (
    <div className="w-full bg-white">
      <div className="max-w-[1280px] w-11/12 p-4  mx-auto  flex flex-col gap-8">
      {/* Top Section */}
       <TopSection />

        {/* Bottom Section */}
        <div className="w-full flex items-center justify-between relative">
          <LeftSection />
          <MiddleSection />
          <RightSection />
        </div>
      </div>
    </div>
  );
};

export default WhyChooseUs;
