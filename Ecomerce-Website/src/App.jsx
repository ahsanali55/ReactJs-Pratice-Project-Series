import { useState } from "react";
import Header from "./components/navSection/Header";
import HeroSection from "./components/heroSection/HeroSection";
import ShapeDivider from "./components/heroSection/ShapeDivider";
import SaleAndFeature from "./components/saleAndFeatureSection/SaleAndFeature";



function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
      <Header />
      <HeroSection />
      <SaleAndFeature />
    </>
    
  );
}

export default App;
