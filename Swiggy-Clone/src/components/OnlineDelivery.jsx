import React, { useActionState, useEffect, useRef, useState } from "react";
import { CiFilter } from "react-icons/ci";
import { RiArrowDropDownLine } from "react-icons/ri";
import DeliveryCard from "./DeliveryCard";

const OnlineDelivery = () => {
  const [data, setData] = useState([]);
  const [topData, setTopData] = useState([
    {
      name: "Filter",
      icon: <CiFilter />,
    },
    {
      name: "Sort By",
      icon: <RiArrowDropDownLine />,
    },
    {
      name: "Fast Delivery",
      icon: "",
    },
    {
      name: "New on Swiggy",
      icon: "",
    },
    {
      name: "Rating 4.0+",
      icon: "",
    },
    {
      name: "Pure Veg",
      icon: "",
    },
    {
      name: "Offers",
      icon: "",
    },
    {
      name: "Rs. 300-Rs 600",
      icon: "",
    },
    {
      name: "Less than Rs 300",
      icon: "",
    },
  ]);

  const [isSticky, setSticky] = useState(false);
  const topRef = useRef();

  useEffect(() => {

    const handleScroll = () => {
        const boxTop = topRef.current.getBoundingClientRect().top;
      setSticky(boxTop <= 0);
    }

    window.addEventListener("scroll",  handleScroll);
    return (() => {
        window.removeEventListener("scroll", handleScroll);
    }) 
  })

  const fetchData = async () => {
    const response = await fetch("http://localhost:5000/top-restaurant-chains");
    const data = await response.json();
    setData(data);
  };

  useEffect(() => {
    const controller = new AbortController();
    fetchData();
    return () => {
      console.log("CleanUp Server");
      controller.abort();
    };
  }, []);

  return (
    <>
      <section className="w-full">
        <div className="mx-auto max-w-[1080px] px-4 md:px-0">
          <h1 className="font-bold text-3xl my-4">
            Restaurants with online food delivery in Jodhpur
          </h1>

          {/* Top Div */}
          <div className={`w-full flex items-center flex-wrap gap-3 mb-6 mt-4 ${isSticky ? "lg:sticky" : "relative"} ${isSticky ? "h-[105px]" : ""} top-0 z-20 bg-white`}
          ref={topRef}>
            {topData.map((item, index) => {
              return (
                <div className="py-2 px-3 shadow flex items-center text-gray-500 h-[50px]">
                 <p> {item.name}</p> 
                 <span className="text-[25px] ">{item.icon}</span>
                </div>
              );
            })}
          </div>

          {/* Bottom div */}
          <div className="grid grid-cols-1 lg:grid-cols-4 md:grid-cols-2  gap-3  ">
            {data.map((item, index) => {
              return <DeliveryCard item={item} key={index} />;
            })}
          </div>
        </div>
      </section>
    </>
  );
};

export default OnlineDelivery;
