import React from "react";

const TopHeader = () => {
  return (
    <div className=" w-full bg-[#2a2c30]  ">
      {/* === Top header === */}
      <div className="flex justify-between  w-11/12 max-w-[1280px] mx-auto p-4">
        <p className="text-white">
          Free shipping, 30-day return or refund guarantee.
        </p>
        <div className="flex gap-10 hover:[#535bf2]">
          <button className="text-white hover:text-[#535bf2] cursor-pointer">
            SIGN IN
          </button>
          <button className="text-white hover:text-[#535bf2] cursor-pointer">
            SIGN UP
          </button>
        </div>
      </div>
    </div>
  );
};

export default TopHeader;
