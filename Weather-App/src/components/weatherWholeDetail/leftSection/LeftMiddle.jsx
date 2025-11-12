import React, { use, useContext } from 'react'
import { weatherContext } from '../../../store/WeatherStore';

const LeftMiddle = () => {
  const { cityItem, weatherApi ,dispatch} = useContext(weatherContext);
  return (
    <div className='w-full flex gap-6 mt-7'>
      <div className='space-y-4 bg-[#22263F] p-4 w-[190px] rounded-2xl'>
        <p className='font-bold text-[20px]'>Feels Like</p>
        <h1 className='text-[35px]'> 64°</h1>
      </div>
     
    </div>
  )
}

export default LeftMiddle
