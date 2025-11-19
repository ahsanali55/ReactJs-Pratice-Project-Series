import React from 'react'
import Items from './Items'
import Summary from './Summary'

const AddToCarts = () => {
  return (
    <section className='w-full bg-white'>
        <div className='w-11/12 max-w-[1280px] p-4 border mx-auto flex flex-col gap-5'>
            <Items />
            <Summary />
            
        </div>
      
    </section>
  )
}

export default AddToCarts
