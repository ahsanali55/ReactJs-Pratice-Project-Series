import React from "react";

const Header = () => {
  return (
    <div className="flex items-center justify-between text-white mb-4">
      <h1 className="text-2xl font-medium">
        Hello <br /> <span className="text-3xl font-semibold">Ahsan 👋</span>{" "}
      </h1>
      <button className="bg-red-500 text-white text-lg font-bold px-5 py-2 ">Log Out</button>
    </div>
  );
};

export default Header;
