import React from 'react'

const FailedTask = ({data}) => {
  return (
    <div className="shrink-0 h-full w-[350px] p-4 bg-yellow-400 rounded-xl">
      <div className="flex justify-between items-center">
        <h3 className="bg-red-600 px-3 py-1 rounded text-sm ">{data.category}</h3>
        <h4 className="text-sm">{data.date}</h4>
      </div>
      <h2 className="mt-5 text-2xl font-semibold tracking-tight">
       {data.title}
      </h2>
      <p className="text-sm mt-2">
        {data.description}
      </p>
      <div className='mt-2'>
        <button className='w-full py-2 bg-red-500'>Failed Task</button>
      </div>
    </div>
  )
}

export default FailedTask
