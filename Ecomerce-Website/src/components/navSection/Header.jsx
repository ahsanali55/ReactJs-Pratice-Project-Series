import React from "react";
import NavBar from "./NavBar";
import TopHeader from "./TopHeader";

const Header = () => {
  return (
    <>
      <header className="w-full sticky top-0 z-50 ">
        <TopHeader />
        <NavBar />
      </header>
    </>
  );
};

export default Header;
