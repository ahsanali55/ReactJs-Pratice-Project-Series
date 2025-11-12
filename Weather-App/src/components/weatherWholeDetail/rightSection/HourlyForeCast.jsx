import React from "react";

const HourlyForeCast = () => {
  return (
    <div className="w-full space-y-4 mt-3 p-2  ">
      {/* items */}
      <div className="flex items-center justify-between border bg-[#323753] border-gray-600  rounded-xl pl-2 pr-5">
        <div className="flex items-center ">
          <img src="/images/Cloudy.webp" className="w-18" alt="" loading="lazy" />
          <h1 className="text-[22px] font-semibold">3 PM</h1>
        </div>
        <p className="text-[22px]">68</p>
      </div>

     

    </div>
  );
};

export default HourlyForeCast;
