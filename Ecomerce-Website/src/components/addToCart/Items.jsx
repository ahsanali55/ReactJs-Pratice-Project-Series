import React from "react";

const Items = () => {
  return (
    <div className="w-full ">
      <div className="flex justify-between px-3 py-5 border border-gray-300">
        {/* Left */}
        <div className="flex items-center gap-7 ">
          <div className="bg-[#E9D6D6] rounded-3xl px-3 text-[13px] opacity-80">
            Computer
          </div>
          <img src="/images/lapi.png" className="w-30" alt="" />
          <h1 className="text-[22px] font-semibold text-[#292C30]">Laptop</h1>
        </div>
        {/* Right */}
        <div className="flex items-center gap-7">
          <h3 className="text-gray-500 mr-14">999.9</h3>
          <div className="flex items-center">
            <button className="border border-gray-300 rounded-l-lg px-10 py-2 font-semibold ">+</button>
            <h3 className="border border-gray-300 border-x-0  px-12 py-2 font-semibold">1</h3>
            <button className="border border-gray-300 rounded-r-lg px-10 py-2 font-semibold tracking-widest ">-</button>
          </div>
          <button className="border-2 text-white bg-[#292C30] hover:border-2 hover:border-[#292C30] hover:bg-white hover:text-[#292C30] duration-75 px-20 py-2 rounded-md">Remove</button>
        </div>
      </div>
    </div>
  );
};

export default Items;
