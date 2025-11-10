import React from "react";

const LeftTop = () => {
  return (
    <div className="overflow-hidden rounded-2xl w-full h-65">
      <div className="bg-[url('/images/bg-today-large.svg')]  bg-no-repeat  bg-position-[10%_50%] w-full h-full flex items-center justify-between">
        <div className="ml-4">
          <h1 className="font-bold text-[25px]">Berlin, Germany</h1>
          <p className="opacity-60">Tuesday, Aug 5, 2025</p>
        </div>
        <div className="flex items-center gap-3 mr-4">
          <img
            src="/images/Sunny.webp"
            className="w-[100px]"
            alt="clear-icon"
            loading="lazy"
          />
          <h1 className="text-[80px] font-bold">68°</h1>
        </div>
      </div>
    </div>
  );
};

export default LeftTop;
