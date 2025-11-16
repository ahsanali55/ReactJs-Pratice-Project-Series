import React from "react";
import NavBar from "./NavBar";
import TopHeader from "./TopHeader";

const Header = () => {
  return (
    <>
      <header className="w-full">
        <TopHeader />
        <NavBar />
      </header>
    </>
  );
};

export default Header;
