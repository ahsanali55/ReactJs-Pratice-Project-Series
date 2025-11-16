import React from "react";
import { useSelector } from "react-redux";
import { FaShippingFast } from "react-icons/fa";
import { FaArrowsRotate } from "react-icons/fa6";
import { FaHandHoldingDollar } from "react-icons/fa6";
import { FaHeadphones } from "react-icons/fa";

const Feature = () => {
  const featureValue = useSelector((state) => state.feature);
  console.log(featureValue);
  return (
    <div className="w-full grid grid-cols-4  h-45">
      {featureValue.map((item, index) => (
        <div
          className="flex items-center pl-7 gap-4 border-r-[0.09px] border-gray-50 bg-white rounded"
          key={index}
        >
          {/* < {item.icon} className="text-[35px] text-[#535bf2]" /> */}
          <div>
            <h1 className="text-[20px] font-semibold text-[#1e1f23]">
              {item.title}
            </h1>
            <p className="text-gray-500">{item.flexsibility}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Feature;
