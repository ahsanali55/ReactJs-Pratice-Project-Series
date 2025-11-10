import React, { useEffect, useState } from "react";
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";

const Category = () => {
  const [categories, setCategory] = useState([]);
  const [count, setCount] = useState(0);
  console.log(count);

  //   console.log("Cata", categories.length);

  const handleRight = () => {
    setCount((prev) => Math.min(prev + 3, 17));
  };
  const handleLeft = () => {


    setCount(prev => Math.max(prev - 3, 0));
  };

  useEffect(() => {
    const controller = new AbortController();

    fetch("http://localhost:5000/categories")
      .then((res) => res.json())
      .then((data) => {
        // console.log(data);
        setCategory(data);
      });

    return () => {
      console.log("Clean up UseEffect");
      controller.abort();
    };
  }, []);

  return (
    <>
      <div className="w-full p-[15px]">
        <div className="mx-auto max-w-[1080px]  ">
          {/* === Top Div === */}
          <div className="flex items-center justify-between mb-2">
            <h2 className="font-bold text-2xl">What's on your mind?</h2>
            <div className="flex items-center mr-4">
              <div
                className="w-10 h-10 bg-[#e2e2e7] rounded-full mx-2 flex items-center justify-center cursor-pointer"
                onClick={handleLeft}
              >
                <MdKeyboardArrowLeft className="text-2xl"/>
              </div>
              <div
                className="w-10 h-10 bg-[#e2e2e7] rounded-full mx-2 flex items-center justify-center cursor-pointer"
                onClick={handleRight}
              >
                <MdKeyboardArrowRight className="text-2xl"/>
              </div>
            </div>
          </div>

          {/* === Bottom Div === */}

          <div className="flex  overflow-hidden z-0">
            {categories.map((item, index) => {
              return (
                <div
                  style={{
                    transform: `translateX(-${count}00%) `,
                  }}
                  className="grow shrink-0 w-[180px] duration-500"
                  key={index}
                >
                  <img src={item.image} alt="" />
                </div>
              );
            })}
          </div>
        <hr className="my-6 border border-gray-100"/>
        </div>
      </div>
    </>
  );
};

export default Category;
