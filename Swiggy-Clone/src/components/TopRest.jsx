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

  const slideleft = () => {
    setCount(prev => Math.max(prev - 3, 0))

  }
  const slideRight = () => {
    setCount(prev => Math.min(prev + 3, 8))

  }
  

  return (
    <>
      <section className="w-full">
        <div className=" w-full max-w-[1080px] mx-auto px-4 md:px-0">
          {/* top div */} 
          <div className="flex justify-between items-center">
            <h1 className="font-bold md:text-[25px] text-[20px]">Top restaurant chains in Jodhpur</h1>
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
          <div className="flex grow space-x-6 shrink-0 overflow-hidden mt-4 w-full" >
            {data.map((item, index) => {
              return (
               <Card item={item} key={index} count={count} />
              );
            })}
          </div>
      <hr className="mb-2  border-gray-200 " />
        </div>
      </section>
    </>
  );
};

export default TopRest;
