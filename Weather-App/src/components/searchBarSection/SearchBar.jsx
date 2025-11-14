import React, { useContext, useRef, useState } from "react";
import { weatherContext } from "../../store/WeatherStore";

const SearchBar = () => {
  const searchCity = useRef(null);
  const [search, setSearch] = useState(false);
  const { dispatch } = useContext(weatherContext);

  const handleSubmit = (event) => {
    event.preventDefault();
    // console.log("searchCity ", searchCity.current.value);
    setSearch(true);
    setTimeout(() => {
      dispatch({ type: "searchCity", payload: searchCity.current.value });
      setSearch(false);

      searchCity.current.value = null;
    }, 2000);

  };

  return (
    <section className="w-full mb-4">
      <div className="max-w-[1280px] w-10/12  mx-auto  p-0 lg:p-4 flex flex-col items-center relative space-y-6">
        <h1 className="font-bold  font-serif text-[40px]">
          How's the sky looking today?
        </h1>
       <div className="relative w-full lg:w-11/12 max-w-[520px] flex flex-col gap-4">
         <form
          onSubmit={handleSubmit}
          className="flex flex-col sm:flex-row justify-between gap-4 w-full  "
        >
          <div className="bg-[#22263F]   rounded-lg  grow py-2 px-2 ">
            <label htmlFor="Search" className="flex">
              <img src="/images/icon-search.svg" className="px-3" alt="" />
              <input
                type="text"
                className="w-full border-none outline-none bg-transparent focus:border-none  focus:outline-none focus:bg-[#22263F] pl-1 py-2 focus:ring-0 focus:border-"
                name=""
                id="Search"
                placeholder="Search for a place"
                ref={searchCity}
              />
            </label>
          </div>
          <button className="bg-[#2E60D5] px-5 hover:bg-[#0d48d1] transition-all duration-300  sm:w-inherit rounded-lg font-bold py-4 sm:py-0">
            Search
          </button>
        </form>
      { search ?  <div className="w-full bg-[#22263F] max-w-[410px] rounded-lg absolute top-16 z-10 flex gap-2 p-4 "> 
          <img src="/images/icon-loading.svg" className="animateSearchProgress opacity-60" alt="" /> 
          <p className="opacity-60"> Search in Progress</p>
        </div> : null
        }
       </div>
      </div>
    </section>
  );
};

export default SearchBar;
