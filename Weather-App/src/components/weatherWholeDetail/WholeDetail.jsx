import React from 'react'
import RightDetail from './RightDetail'
import LeftDetails from './LeftDetails'



const WholeDetail = () => {
  return (
    <section className='w-full'>
        <div className='max-w-[1280px] w-11/12 border mx-auto p-4 flex '>
        <LeftDetails />
        <RightDetail />
        </div>
      
    </section>
  )
}

export default WholeDetail
