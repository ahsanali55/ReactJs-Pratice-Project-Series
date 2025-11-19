import React from 'react'

const Summary = () => {
  return (
    <div className='w-full max-w-[300px] min-h-[250px] border-[3px] ml-auto flex flex-col justify-between px-5 py-7'>
      <h1 className='font-semibold tracking-wide text-lg'>Selected Offer Summary</h1>
      <div className='flex justify-between text-[16px]'>
        <h1 className='opacity-40'>Sub Total:</h1>
        <h3>1148</h3>
      </div>
     <div>
         <div className='flex justify-between text-[16px]'>
        <h1  className='opacity-40'>Tax:</h1>
        <h3>₹ 50</h3>
      </div>
      <hr  className='opacity-20' />
     </div>

      <div className='flex justify-between text-[16px]'>
        <h1  className='opacity-40'>Final Total:</h1>
        <h3>₹ 1198</h3>
      </div>


    </div>
  )
}

export default Summary
