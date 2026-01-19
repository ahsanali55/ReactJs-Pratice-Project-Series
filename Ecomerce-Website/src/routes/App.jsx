import { useEffect } from "react";
import Header from "../components/pages/Home/navSection/Header";
import ProductApiFetch from "../components/pages/Home/ApiFetching/ProductApiFetch";
import Footer from "../components/pages/Home/footer/Footer";
import { Outlet, useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import IsShow from "../components/pages/Home/navSection/IsShow";
import ScrollToTop from "../components/pages/Home/scrolltoTop/ScrollToTop";
import { motion } from "framer-motion";
import { onAuthStateChanged } from "firebase/auth";
import { AuthActions } from "../store/authSlice";

import { auth } from "../utils/firebaseConfig";

function App() {
  const error = useSelector((state) => state.auth.error);
  const isShow = useSelector((state) => state.navbar.isShow);
  const dispatch = useDispatch();
  const location = useLocation();

  function AuthObserver({ children }) {
    useEffect(() => {
      const unsub = onAuthStateChanged(auth, (user) => {
        if (user) {
          dispatch(
            dispatch(AuthActions.setUser({uid: user.uid, email: user.email}))
          );
        } else {
          dispatch(AuthActions.logout());
          dispatch(AuthActions.setUser(null));

        }
      });
      return  () => unsub();
    }, [dispatch]);
    return children;
  }

  return (
    <AuthObserver>
      <ScrollToTop />
      <ProductApiFetch />

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
    </AuthObserver>
  );
}

export default App;
