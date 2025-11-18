import React from 'react'
import HeroSection from '../components/heroSection/HeroSection'
import SaleAndFeature from '../components/saleAndFeatureSection/SaleAndFeature'
import ProductsContainer from '../components/productSection/ProductsContainer'
import WhyChooseUs from '../components/whyChooseUs/WhyChooseUs'

const Home = () => {
  return (
    <>
       <HeroSection />
      <SaleAndFeature />
      <ProductsContainer />
      <WhyChooseUs />
    </>
  )
}

export default Home
