import React from "react";
import { FaStarHalfAlt } from "react-icons/fa";
const DeliveryCard = ({ item }) => {
  return (
    <>
      <div className="w-full md:max-w-[250px]  group mb-4 justify-self-center">
        <div className="w-full  md:h-[150px] h-[300px] relative rounded-xl overflow-hidden ">
          <img src={item.image} className="w-full h-full object-cover group-hover:scale-125 transition-all duration-200" alt="" />
          <div className="absolute top-0 w-full h-full flex items-end text-white font-bold tracking-tighter md:text-[20px] p-2 imageOverlay">
            {item.offer}
          </div>
        </div>

        <div>
          <h1>{item.title}</h1>
          <div className="flex items-center">
            <FaStarHalfAlt className="inline text-green-700" />
            <span className="ml-2">{item.rating}</span>
            <span className="ml-2">
              {item.minTime} - {item.maxTime} mins
            </span>
          </div>
            <p className="text-gray-600">{item.name}</p>
            <p className="text-gray-600">{item.place}</p>
        </div>
      </div>
    </>
  );
};

export default DeliveryCard;
