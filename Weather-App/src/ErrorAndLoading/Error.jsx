import React from 'react'

const Error = () => {
  return (
    <div className='w-full mt-12'>
      <div className='max-w-[1280px] w-11/12  mx-auto p-4 '>
      <div className='max-w-[600px] mx-auto flex flex-col items-center ' >
            <img src="/images/icon-error.svg"  className='w-10 my-4' alt="" />
            <h1 className='text-[50px] font-extrabold' >Something went wrong</h1>
            <p className='max-w-[450px] text-center text[20px] opacity-80 my-3' >We couldn't connect to the server(API error). Please try again in a few monments.</p>
            {/* <button className='flex gap-2 p-2 bg-[#22263F] rounded-md' onClick={window.location.reload()}>
                <img src="/images/icon-retry.svg" alt="" />
                 <h1 >Retry</h1>
                </button> */}
      </div>

      </div>
    </div>
  )
}

export default Error
