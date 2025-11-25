import { useEffect, useState } from "react";
import Header from "../components/navSection/Header";
import ProductApiFetch from "../components/ApiFetching/ProductApiFetch";
import Footer from "../components/footer/Footer";
import { Outlet } from "react-router-dom";
import SideBar from "../components/navSection/SideBar";
import { useDispatch, useSelector } from "react-redux";
import { NavbarActions } from "../store/navSlice";
import IsShow from "../components/navSection/IsShow";

function App() {
  const isShow = useSelector((state) => state.navbar.isShow);
      const dispatch = useDispatch();
  

  return (
    <>
      <ProductApiFetch />

      <Header />
      {isShow? <IsShow/> : null}
  
      <Outlet />
      <Footer />

    </>
  );
}

export default App;
