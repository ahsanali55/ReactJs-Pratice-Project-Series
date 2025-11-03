import React from "react";

const Card = ({ item }) => {
  return (
    <>
      <div className="grow shrink-0 w-[250px] ">
        <div className="w-[250px] h-[150px] rounded-xl overflow-hidden relative">
          <img src={item.image} className="object-cover w-full h-full" alt="" />
          <div className="imageOverlay w-full h-full absolute top-0  flex items-end text-[23px] font-bold p-2 text-white tracking-tighter">{item.offer}</div>
        </div>
        <h3>{item.name}</h3>
        <h3>{item.title}</h3>

        <p>{item.place}</p>
      </div>
    </>
  );
};

export default Card;
