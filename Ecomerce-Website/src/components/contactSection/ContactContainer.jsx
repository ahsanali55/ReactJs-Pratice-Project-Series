import React from 'react'
import TopContactHeading from './TopContactHeading'
import BottomContactForm from './BottomContactForm'

const ContactContainer = () => {
  return (
    <div className='w-full '>
      <div className='mx-auto border my-10 p-4 w-11/12 max-w-[1280px] flex flex-col gap-16'>
      <TopContactHeading />
      <BottomContactForm />
      </div>
      
    </div>
  )
}

export default ContactContainer
