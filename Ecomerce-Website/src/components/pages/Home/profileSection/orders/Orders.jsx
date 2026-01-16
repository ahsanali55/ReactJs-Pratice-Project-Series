import React from 'react'
import NotYetOrder from './NotYetOrder'

const Orders = () => {
  return (
    <section className='w-full'>
      <div className='w-11/12 max-w-[1080px]  mx-auto'>
        <h1 className='font-bold text-3xl font-poppins my-5'>Your Orders</h1>
        <NotYetOrder />
      </div>
    </section>
  )
}

export default Orders
