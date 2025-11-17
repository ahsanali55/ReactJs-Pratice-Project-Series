import React from "react";
import LeftHero from "./LeftHero";
import RightHero from "./RightHero";
import ShapeDivider from "./ShapeDivider";

const HeroSection = () => {
  return (
    <div className="w-full min-h-[700px]  bg-linear-to-tr from-[#3d86fa] relative via-[#679eff] to-[#ebf3fe] flex ">
      <div className=" w-11/12 max-w-[1280px]  mx-auto p-4 flex mt-20 gap-8">
        <LeftHero />
        <RightHero />
      </div>

      <ShapeDivider />
    </div>
  );
};

export default HeroSection;
