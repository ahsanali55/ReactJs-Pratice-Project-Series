import React from "react";

const SearchBar = () => {
  return (
    <section className="w-full ">
      <div className="max-w-[1280px] w-10/12 mx-auto  p-4 flex flex-col items-center space-y-6">
        <h1 className="font-bold  font-serif text-[40px]">
          How's the sky looking today?
        </h1>
        <form 
        
        className="flex justify-between gap-4 w-11/12 max-w-[520px] ">
          <div className="bg-[#22263F] hover:bg-[#35374b]   rounded-lg  grow py-2 px-2 ">
            <label htmlFor="Search" className="flex">
              <img src="/images/icon-search.svg" className="px-3" alt="" />
              <input
                type="search"
                className="w-full border-none outline-none"
                name=""
                id="Search"
                placeholder="Search for a place"
              />
            </label>
          </div>
          <button className="bg-[#2E60D5] px-5 hover:bg-[#0d48d1] transition-all duration-300  rounded-lg font-bold">Search</button>
        </form>
      </div>
    </section>
  );
};

export default SearchBar;
