import React from 'react'

const LeftFormSection = () => {
  return (
    <div className='w-full'>
      <form action="">
        <label htmlFor="" className='flex gap-3'> <h1>Full Name: </h1>
            <input type="text" placeholder='Enter your name...'  />
        </label>
        <label htmlFor=""> 
            <h1>Email Address</h1>
            <input type="email" name="" id="" placeholder='@gmail.com' />
        </label>
        <label htmlFor="">
            <h1>Subject</h1>
            <input type="text" placeholder='Title of your message...' />
        </label>
        <label htmlFor="">
            <h1>Message</h1>
            <textarea name="" id="" rows={10} cols={30} placeholder='We are always here to help you'></textarea>
        </label>
      </form>
    </div>
  )
}

export default LeftFormSection
