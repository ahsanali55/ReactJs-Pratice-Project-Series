import React from "react";
import { useSelector } from "react-redux";

const Sale = () => {
  const saleValue = useSelector((state) => state.sale);
  //   console.log(saleValue);
  return (
    <div className="w-full grid grid-cols-3 ">
      {saleValue.map((item, index) => (
        <div
          key={index}
          className=" flex items-center gap-2 px-4 pt-8 pb-14 relative overflow-hidden bg-white rounded"
        >
          <div className="space-y-2 max-w-[180px]">
            <h5 className="text-[#003b99]">{item.title}</h5>
            <h3 className="font-bold text-[22px] leading-8">{item.percent}</h3>
            <a href="" className="relative">
              <span className="text-[20px] ">{item.show}</span>
              <div className="border-b absolute top-[18px] w-full"></div>
            </a>
          </div>
          <img
            src={`/images/${item.image}`}
            className="w-[185px] absolute right-5 top-16 h-[155px]  z-10"
            alt=""
          />
          <div className="absolute -bottom-7 -right-17 w-[200px] h-[170px] bg-[#cfdbe29f] rounded-tl-full"></div>
        </div>
      ))}
    </div>
  );
};

export default Sale;
