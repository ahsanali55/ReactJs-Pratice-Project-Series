import { useState } from "react";
import Header from "../components/navSection/Header";
import ProductApiFetch from "../components/ApiFetching/ProductApiFetch";
import Footer from "../components/footer/Footer";
import { Outlet } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "../store/store";



function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
    <Provider store={store}>
     
    <ProductApiFetch />
      <Header />
      <Outlet />
      <Footer />
        </Provider>
    </>
    
  );
}

export default App;
