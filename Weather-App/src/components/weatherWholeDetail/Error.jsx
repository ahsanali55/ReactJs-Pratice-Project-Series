import React from 'react'

const Error = () => {
  return (
           <div className='w-full '>
      <div className='max-w-[1280px] w-11/12  mx-auto p-4 '>
      <div className='max-w-[600px] mx-auto flex flex-col items-center ' >
            <img src="/images/icon-error.svg"  className='w-10 my-4' alt="" />
            <h1 className='text-[50px] font-extrabold' >Something went wrong</h1>
            
            <h1 className='text-[30px] opacity-80'>Try Again With Correct City...</h1>
      </div>
      </div>
    </div>
  )
}

export default Error
