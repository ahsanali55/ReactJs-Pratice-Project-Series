import React from 'react'
import { CgProfile } from 'react-icons/cg'

const Logout = () => {
  return (
    <div className='flex items-center gap-2 hover:bg-[#F5F5F5] cursor-pointer p-2 rounded-md'>
        <CgProfile className='text-2xl' />
      <h1>Logout</h1>
    </div>
  )
}

export default Logout
