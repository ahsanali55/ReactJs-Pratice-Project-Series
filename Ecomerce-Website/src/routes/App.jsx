import { useEffect, useRef, useState } from "react";
import Header from "../components/navSection/Header";
import ProductApiFetch from "../components/ApiFetching/ProductApiFetch";
import Footer from "../components/footer/Footer";
import { Outlet, useLocation } from "react-router-dom";
import SideBar from "../components/navSection/SideBar";
import { useDispatch, useSelector } from "react-redux";
import { NavbarActions } from "../store/navSlice";
import IsShow from "../components/navSection/IsShow";
import ScrollToTop from "../components/scrolltoTop/ScrollToTop";
import { motion } from "framer-motion";
import { onAuthStateChanged } from "firebase/auth";
import { AuthActions } from "../store/authSlice";
import { auth } from "../utils/firebase";
import { ProfileActions } from "../store/profileSlice";

function App() {
  const error = useSelector((state) => state.auth.error);
  const isShow = useSelector((state) => state.navbar.isShow);
  const dispatch = useDispatch();
  const location = useLocation();

  function AuthObserver({ children }){
    useEffect(() => {
      const unsub = onAuthStateChanged(auth, (user) => {
        if (user) {
          dispatch(AuthActions.setUser({uid: user.id, email: user.email, password: user.password, name: user.displayName || null}));
        }
        else{
          dispatch(AuthActions.clearUser());
        }
      })
      return unsub;
    }, [dispatch]);
    return children;
}

 

  return (
    <AuthObserver>
      <ScrollToTop />
      <ProductApiFetch />
    
<div  className="w-screen h-screen">

      <Header />

      {isShow ? <IsShow /> : null}

      <motion.div
        key={location.pathname}
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.9 }}
        transition={{ duration: 0.7, ease: "easeInOut" }}
        >
        <Outlet />
      </motion.div>

      <Footer />
          </div>
  
    </AuthObserver>
  );
}

export default App;
