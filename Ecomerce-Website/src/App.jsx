import { useState } from "react";
import Header from "./components/navSection/Header";
import HeroSection from "./components/heroSection/HeroSection";
import ShapeDivider from "./components/heroSection/ShapeDivider";
import SaleAndFeature from "./components/saleAndFeatureSection/SaleAndFeature";
import ProductsContainer from "./components/productSection/ProductsContainer";
import ProductApiFetch from "./components/ApiFetching/ProductApiFetch";
import WhyChooseUs from "./components/whyChooseUs/WhyChooseUs";



function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
    <ProductApiFetch />
      <Header />
      <HeroSection />
      <SaleAndFeature />
      <ProductsContainer />
      <WhyChooseUs />
    </>
    
  );
}

export default App;
