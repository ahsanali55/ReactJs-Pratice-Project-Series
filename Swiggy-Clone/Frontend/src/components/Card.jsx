import React from "react";
import { IoMdStarHalf } from "react-icons/io";

const Card = ({ item, count }) => {
  return (
    <>
      <div
        className=" shrink-0 w-full md:w-[250px] transition-all duration-500 "
        style={{
          transform: `translateX(-${count}00%)`,
        }}
      >
        <div className=" w-full md:h-[150px] h-[300px]  rounded-xl overflow-hidden relative">
          <img src={item.image} className="object-cover w-full h-full" alt="" />
          <div className="imageOverlay w-full h-full absolute top-0  flex items-end text-[23px] font-bold p-2 text-white tracking-tighter">
            {item.offer}
          </div>
        </div>

        <h3 className="mt-3 text-xl font-bold ">{item.title}</h3>

        <div className="flex items-center">
          <IoMdStarHalf className="text-green-600 text-2xl inline" />
          <span className="mr-2">{item.rating}</span>
          <span>{item.minTime} - {item.maxTime} mins</span>
        </div>
        <h3 className="text-gray-400">{item.name}</h3>
        <p className="text-gray-400">{item.place}</p>

      </div>
    </>
  );
};

export default Card;
