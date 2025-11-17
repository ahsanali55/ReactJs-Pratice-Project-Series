import React from 'react'
import Products from './Products'

const ProductsContainer = () => {
  return (
     <div className='w-full bg-[#f7f7f7]'>
        <div className='mx-auto w-11/12 max-w-[1280px] p-4'>

      <h1 className='my-8 text-4xl font-bold font-poppins
      '>Checkout AHSAN STORE</h1>
      <Products />
        </div>
    </div>
  )
}

export default ProductsContainer
