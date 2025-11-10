import React from 'react'
import LeftTop from './LeftTop'
import LeftMiddle from './LeftMiddle'
import LeftBottom from './LeftBottom'

const LeftDetails = () => {
  return (
     <div className='w-full max-w-[775px] '>
        <LeftTop />
        <LeftMiddle />
        <LeftBottom />
    </div>
  )
}

export default LeftDetails
