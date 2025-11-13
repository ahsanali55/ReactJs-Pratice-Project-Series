import React, { use, useContext } from 'react'
import { weatherContext } from '../../../store/WeatherStore';

const LeftMiddle = () => {
  const { cityItem, weatherApi ,dispatch} = useContext(weatherContext);
  console.log(cityItem)
  return (
    <div className='w-full grid grid-cols-2 lg:grid-cols-4   gap-3 mt-8 '>

      <div className='space-y-4 bg-[#22263F] p-4  w-full lg:max-w-[220px] rounded-2xl'>
        <p className='font-bold text-[20px]'>Feels Like</p>
        <h1 className='text-[35px]'> {cityItem?.feelsLike}°</h1>
      </div>
     
       <div className='space-y-4 bg-[#22263F] p-4  lg:max-w-[220px] rounded-2xl'>
        <p className='font-bold text-[20px]'>Humidity</p>
        <h1 className='text-[35px]'>{cityItem?.humidity}°</h1>
      </div>
     
       <div className='space-y-4 bg-[#22263F] p-4  lg:max-w-[220px] rounded-2xl'>
        <p className='font-bold text-[20px]'>Wind</p>
        <h1 className='text-[35px]'> {cityItem?.wind}°</h1>
      </div>
     
       <div className='space-y-4 bg-[#22263F] p-4  lg:max-w-[220px] rounded-2xl'>
        <p className='font-bold text-[20px]'>Precipitation</p>
        <h1 className='text-[35px]'> {cityItem?.precipitation}°</h1>
      </div>
     
     
    </div>
  )
}

export default LeftMiddle
