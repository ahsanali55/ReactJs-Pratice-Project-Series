import React, { useEffect, useState } from "react";
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";
import Card from "./Card";

const TopRest = () => {
  const [data, setData] = useState([]);
  const [count, setCount] = useState(0);

  useEffect(() => {
    const controller = new AbortController();
    fetch("http://localhost:5000/top-restaurant-chains")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setData(data);
      });

    return () => {
      console.log("CleanUp space from fetching top-restaurant-chains");
      controller.abort();
    };
  }, []);

  const slideRight = () => {
    
  }

  const slideleft = () => {

  }

  return (
    <>
      <div>
        <div className="max-w-[1080px] mx-auto ">
          {/* top div */}
          <div className="flex justify-between items-center">
            <h1>Top restaurant chains in Jodhpur</h1>
            <div className="flex space-x-4">
              <div onClick={slideleft}
              className="w-10 h-10 bg-[#e2e2e7] rounded-full flex items-center justify-center">
                <MdKeyboardArrowLeft className="text-2xl" />
              </div>
              <div onClick={slideRight}
              className="flex items-center justify-center bg-[#e2e2e7] w-10 h-10 rounded-full">
                <MdKeyboardArrowRight className="text-2xl" />
              </div>
            </div>
          </div>
          {/* Bottom div */}
          <div className="flex grow space-x-6 shrink-0 overflow-hidden mt-4">
            {data.map((item, index) => {
              return (
               <Card item={item} key={index} />
               
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default TopRest;
